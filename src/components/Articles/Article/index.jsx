import React from 'react';
import 'normalize.css';
import styles from './styles.module.scss';

function Article(props){
  return(
    <div className={styles.container}>
      <h1 className={styles.h1}>{props.id}</h1>
      <div className={styles.innerContainer}>
        <h2 className={styles.h2}>{props.title}</h2>
        <p className={styles.p}>{props.body}</p>
      </div>
    </div>
  )
}
Article.defaultProps = {
  id: 'undefined',
  body: 'commin!',
  title: 'xxx',
}
export default Article;