import { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import styles from '../SelectedPost/SelectedPost.module.css';
import { IPostProps } from '../PostCard/PostCard';
import { AddButton } from '../AddButton/AddButton';
import { Title } from '../Title/Title';
import { Context } from '../../App';
import { useContext } from 'react';

export const SelectedPost = () => {
  const params: any = useParams();
  const [cardInfo, setCardInfo] = useState<IPostProps>();
  const history = useHistory();
  const { darkTheme } = useContext(Context);
  const { lightTheme } = useContext(Context);
  const { isDark } = useContext(Context);

  const getInfo = async () => {
    const response = await fetch(
      'https://studapi.teachmeskills.by/blog/posts/' + params.id
    );
    const data = await response.json();
    setCardInfo(data);
  };

  useEffect(() => {
    getInfo();
  }, []);

  return cardInfo ? (
    <div style={isDark ? darkTheme : lightTheme}>
      <div className={styles.container}>
        <div className={styles.selectedPost_title}>
          <Title title='Selected post' />
          <div className={styles.selectedPost_addButton}>
            <AddButton
              text='Back'
              onClick={() => {
                history.goBack();
              }}
            />
          </div>
        </div>
        <div
          style={isDark ? lightTheme : lightTheme}
          className={styles.selectedPost}
        >
          <img
            className={styles.selectedPost_image}
            src={
              cardInfo.image ? `${cardInfo.image}` : `${'img/blindImage.png'}`
            }
          />
          <h2 className={styles.selectedPost_postTitle}>{cardInfo.title}</h2>
          <p className={styles.selectedPost_text}>{cardInfo.text}</p>
          <p className={styles.selectedPost_date}>{cardInfo.date}</p>
        </div>
      </div>
    </div>
  ) : null;
};
