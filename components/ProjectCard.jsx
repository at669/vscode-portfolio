import Image from 'next/image';
import styles from '../styles/ProjectCard.module.css';

const ProjectCard = ({ project }) => {
  return (
    <div className={styles.card}>
      <a href={project.demo} target="_blank" rel="noopener"><Image src={project.image} height={300} width={600} alt={project.name} objectFit='cover' /></a>
      <div className={styles.content}>
        <a href={project.demo} style={{ color: 'inherit', textDecoration: 'inherit'}} target="_blank" rel="noopener"><h3>{project.name}</h3></a>
        <p>{project.description}</p>
        <div className={styles.tags}>
          {project.tags.map((tag) => (
            <span key={tag} className={tag}>
              {tag}
            </span>
          ))}
        </div>
        <div className={styles.cta}>
          {project.source_code && (
            <a
              href={project.source_code}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.underline}
            >
              Source Code
            </a>
          )}
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.underline}
          >
            Learn More
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
