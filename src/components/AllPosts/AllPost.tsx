import { ChangeEvent, useCallback, useEffect, useState } from 'react';
import { PostCard } from '../PostCard/PostCard';
import styles from '../AllPosts/AllPost.module.css';
import { Button } from '../Button/Button';
import { Title } from '../Title/Title';
import { AddButton } from '../AddButton/AddButton';
import { Context } from '../../App';
import { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IState, store } from '../../redux/store';
import { fetchPosts, searchPosts } from '../../redux/actions/actions';
import { IPostState } from '../../redux/reducers/postsReducer';
import { Input } from '../Input/Input';

export const AllPost = () => {
  const { theme } = useContext(Context);
  const posts = useSelector((state: IState) => state.postsReducer.posts);
  const dispatch = useDispatch();
  const LIMIT = 6;
  const [offset, setOffset] = useState<number>(0);
  const [search, setSearch] = useState<string>('');

  function debounce(fun: (text: string) => void, ms: number) {
    let isCooldown = false;
    return function (searchText: string) {
      if (isCooldown) {
        return;
      }

      fun(searchText);
      isCooldown = true;

      setTimeout(() => {
        isCooldown = false;
      }, ms);
    };
  }

  const delayedSearch = debounce(
    (text: string) => dispatch(searchPosts(text)),
    1000
  );

  useEffect(() => {
    //   `https://studapi.teachmeskills.by/blog/posts/?format=json&limit=${LIMIT}&offset=${offset}`
    dispatch(fetchPosts(LIMIT, offset));
  }, [offset]);

  useEffect(() => {
    delayedSearch(search);
  }, [search]);

  const onChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setSearch(event.target.value);
    },
    [search]
  );

  const loadMore = useCallback(() => {
    setOffset(posts.length);
  }, [posts]);

  const onKeyDown = useCallback(
    (event) => {
      if (event.key === 'Enter') {
        dispatch(searchPosts(search));
      }
    },
    [search]
  );

  return (
    <div style={theme}>
      <div className={styles.container}>
        <div className={styles.allPost}>
          <div className={styles.allPost_title}>
            <Title title='All posts' />
            <div className={styles.allPost_addButton}>
              <AddButton text='+ Add' onClick={() => {}} />
            </div>
            <div style={{ marginLeft: 'auto', color: '#016EFC' }}>
              <Input
                value={search}
                onChange={onChange}
                type='text'
                name='Search'
                onKeyDown={onKeyDown}
              />
            </div>
          </div>
          <div className={styles.allPost_posts}>
            {posts.map((item: IPostState) => {
              return (
                <PostCard
                  image={item.image}
                  title={item.title}
                  text={item.text}
                  date={item.date}
                  key={item.id}
                  id={item.id}
                />
              );
            })}
          </div>
        </div>
        <Button text={'Show more'} onClick={loadMore} />
      </div>
    </div>
  );
};
