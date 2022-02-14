import { useCallback, useEffect, useState } from 'react';
import { PostCard } from '../PostCard/PostCard';
import { IPostProps } from '../PostCard/PostCard';
import styles from '../AllPosts/AllPost.module.css';
import { Button } from '../Button/Button';
import { Title } from '../Title/Title';
import { AddButton } from '../AddButton/AddButton';
import { Context } from '../../App';
import { useContext } from 'react';

export const AllPost = () => {
  const [posts, setPosts] = useState<IPostProps[]>([]);
  const [offset, setOffset] = useState<number>(0);
  const [allPosts, setAllPosts] = useState<IPostProps[]>([]);
  const { darkTheme } = useContext(Context);
  const { lightTheme } = useContext(Context);
  const { isDark } = useContext(Context);

  const LIMIT = 6;

  useEffect(() => {
    const getPosts = fetch(
      `https://studapi.teachmeskills.by/blog/posts/?format=json&limit=${Number.MAX_SAFE_INTEGER}`
    )
      .then((response) => response.json())
      .then((data) => setAllPosts(data.results));
  }, []);

  useEffect(() => {
    const getPosts = fetch(
      `https://studapi.teachmeskills.by/blog/posts/?format=json&limit=${LIMIT}&offset=${offset}`
    )
      .then((response) => response.json())
      .then((data) => setPosts([...posts, ...data.results]));
  }, [offset]);

  const loadMore = useCallback(() => {
    setOffset(posts.length);
  }, [posts]);

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
            {posts.map((item: IPostProps) => {
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
        {posts.length < allPosts.length ? (
          <Button text={'Show more'} onClick={loadMore} />
        ) : null}
      </div>
    </div>
  );
};
