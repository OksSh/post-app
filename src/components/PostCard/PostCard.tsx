import styles from '../PostCard/PostCard.module.css';
import { useHistory } from 'react-router-dom';
import { Context } from '../../App';
import { useContext } from 'react';

export interface IPostProps {
  image: string;
  title: string;
  text: string;
  date: string;
  id: string;
}

export const PostCard = ({ image, title, text, date, id }: IPostProps) => {
  const history = useHistory();
  const { darkTheme } = useContext(Context);
  const { lightTheme } = useContext(Context);
  const { isDark } = useContext(Context);

  return (
    <div
      onClick={() => {
        history.push('/post/' + id);
      }}
      className={styles.postCard}
      style={!isDark ? lightTheme : lightTheme}
    >
      <img
        className={styles.postCard_image}
        src={image ? `${image}` : `${'img/blindImage.png'}`}
        alt=''
      />
      <h2 className={styles.postCard_title}>{title}</h2>
      <p className={styles.postCard_text}>{text}</p>
      <p className={styles.postCard_date}>{date}</p>
    </div>
  );
};
