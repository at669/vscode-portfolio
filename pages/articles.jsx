import ArticleCard from '../components/ArticleCard';
import { getArticles } from './api/articles';
import styles from '../styles/ArticlesPage.module.css';

const ArticlesPage = ({ articles }) => {
  return (
    <>
      <h3>
        Recent Posts:
      </h3>
      <div className={styles.container}>
        {articles.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>
    </>
  );
};

export async function getStaticProps() {
  const articles = getArticles();

  return {
    props: { title: 'Articles', articles },
  };
}


export default ArticlesPage;
