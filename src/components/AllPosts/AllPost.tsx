import { useCallback, useEffect, useState } from 'react';
import { PostCard } from '../PostCard/PostCard';
import { IPostProps } from '../PostCard/PostCard';
import styles from '../AllPosts/AllPost.module.css';
import { Button } from '../Button/Button';
import { Title } from '../Title/Title';
import { AddButton } from '../AddButton/AddButton';
import { Context } from '../../App';
import { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IState } from '../../redux/store';
import { addAllPosts, getPosts } from '../../redux/actions/actions';

export const AllPost = () => {
  const [offset, setOffset] = useState<number>(0);
  const { darkTheme } = useContext(Context);
  const { lightTheme } = useContext(Context);
  const { isDark } = useContext(Context);
  const posts = useSelector((state: IState) => state.reducerPosts.posts);
  const allPosts = useSelector(
    (state: IState) => state.reducerAllPosts.allPosts
  );
  const dispatch = useDispatch();
  const LIMIT = 6;

  useEffect(() => {
    const getAllPosts = fetch(
      `https://studapi.teachmeskills.by/blog/posts/?format=json&limit=${Number.MAX_SAFE_INTEGER}`
    )
      .then((response) => response.json())
      .then((data) => dispatch(getPosts(data.results)));
  }, []);

  useEffect(() => {
    const getAllPosts = fetch(
      `https://studapi.teachmeskills.by/blog/posts/?format=json&limit=${LIMIT}&offset=${offset}`
    )
      .then((response) => response.json())
      .then((data) => dispatch(addAllPosts(data.results)));
  }, [offset]);

  const loadMore = useCallback(() => {
    setOffset(allPosts.length);
  }, [allPosts]);

  return (
    <div style={isDark ? darkTheme : lightTheme}>
      <div className={styles.container}>
        <div className={styles.allPost}>
          <div className={styles.allPost_title}>
            <Title title='All posts' />
            <div className={styles.allPost_addButton}>
              <AddButton text='+ Add' onClick={() => {}} />
            </div>
          </div>
          <div className={styles.allPost_posts}>
            {allPosts.map((item: IPostProps) => {
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
        {allPosts.length < posts.length ? (
          <Button text={'Show more'} onClick={loadMore} />
        ) : null}
      </div>
    </div>
  );
};
