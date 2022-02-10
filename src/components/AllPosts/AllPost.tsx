import { useEffect, useState } from 'react';
import { PostCard } from '../PostCard/PostCard';
import { IProps } from '../PostCard/PostCard';
import styles from '../AllPosts/AllPost.module.css';

export const AllPost = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPosts = fetch(
      'https://studapi.teachmeskills.by/blog/posts/?format=json&limit=44'
    )
      .then((response) => response.json())
      .then((data) => setPosts(data.results));
  }, []);

  return (
    <div>
      <div className={styles.container}>
        <div className={styles.allPost}>
          {posts.map((item: IProps) => {
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
    </div>
  );
};
