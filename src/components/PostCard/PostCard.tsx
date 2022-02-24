import styles from '../PostCard/PostCard.module.css';
import { useHistory } from 'react-router-dom';
import { Context } from '../../App';
import { IPostState } from '../../redux/reducers/postsReducer';

export const PostCard = ({ image, title, text, date, id }: IPostState) => {
  const history = useHistory();

  return (
    <div
      onClick={() => {
        history.push('/post/' + id);
      }}
      className={styles.postCard}
      style={{ backgroundColor: '#ffffff' }}
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
