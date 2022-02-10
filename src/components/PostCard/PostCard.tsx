import styles from '../PostCard/PostCard.module.css';

export interface IProps {
  image: string;
  title: string;
  text: string;
  date: string;
  id: string;
}

export const PostCard = ({ image, title, text, date, id }: IProps) => {
  return (
    <div className={styles.postCard}>
      <img className={styles.postCard_image} src={image} alt='' />
      <h2 className={styles.postCard_title}>{title}</h2>
      <p className={styles.postCard_text}>{text}</p>
      <p className={styles.postCard_date}>{date}</p>
    </div>
  );
};
