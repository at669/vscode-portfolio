import Image from 'next/image';
// import EyeIcon from '../components/icons/EyeIcon';
// import HeartIcon from '../components/icons/HeartIcon';
// import CommentIcon from '../components/icons/CommentIcon';
import styles from '../styles/ArticleCard.module.css';

const ArticleCard = ({ article }) => {
  return (
    <a href={article.url} target="_blank" rel="noopener noreferrer" className={styles.container} >
      <Image src={article.cover_image} alt={article.title} width={900} height={300} objectFit='cover' />
      <div className={styles.content}>
        <h3 className={styles.title}>{article.title}</h3>
        <p>{article.description}</p>
      </div>
    </a>
  );
};

export default ArticleCard;
