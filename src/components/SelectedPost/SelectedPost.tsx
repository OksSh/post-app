import { useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import styles from '../SelectedPost/SelectedPost.module.css';
import { AddButton } from '../AddButton/AddButton';
import { Title } from '../Title/Title';
import { Context } from '../../App';
import { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IState } from '../../redux/store';
import { deletePost, fetchPost } from '../../redux/actions/actions';

export const SelectedPost = () => {
  const history = useHistory();
  const { theme } = useContext(Context);
  const post = useSelector((state: IState) => state.postsReducer.post);
  const dispatch = useDispatch();
  const params: any = useParams();

  useEffect(() => {
    dispatch(fetchPost(params.id));

    return () => {
      dispatch(deletePost());
    };
  }, []);

  return post ? (
    <div className={styles.selectedPost} style={theme}>
      <div className={styles.container}>
        <div className={styles.selectedPost_title}>
          <Title title='Selected post' />
          <div className={styles.selectedPost_addButton}>
            <AddButton text='Back' onClick={() => history.goBack()} />
          </div>
        </div>
        <div
          style={{ backgroundColor: '#ffffff' }}
          className={styles.selectedPost_item}
        >
          <img
            className={styles.selectedPost_image}
            src={post.image ? `${post.image}` : `${'img/blindImage.png'}`}
          />
          <h2 className={styles.selectedPost_postTitle}>{post.title}</h2>
          <p className={styles.selectedPost_text}>{post.text}</p>
          <p className={styles.selectedPost_date}>{post.date}</p>
        </div>
      </div>
    </div>
  ) : (
    <div>Wait...</div>
  );
};
