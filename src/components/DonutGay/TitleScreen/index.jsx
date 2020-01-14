import React, { Component } from 'react';
import styles from './styles.module.scss';

export default class extends Component{
  render() {
    return (
      <section className={styles.title_screen}>
        <div className={styles.stripe}>
          <h1>1 ГОД, 3-Й МЕСЯЦ</h1>
        </div>
        <div className={styles.container}>
          <p className={styles.title_text}>
            Прохождение этой темы позволит вам избежать частных ошибок при воспитании детей от 0 до 3 лет. Результат - правильные и четкие шаги для достижения цели.
          </p>
          <div className={styles.progress_bar_empty}>
            <div className={styles.progress_bar_filled}>
            </div>
          </div>
          <div className={styles.progress_text}>
            <div>
              <p>10</p> 
              <span> Тем всего </span>
            </div>
            <div>
              <p>6</p>
              <span> Тем выполнено </span>
            </div>
          </div>
        </div>
        <p className={styles.title_bottom_text}>Название актуальной темы</p>
      </section>
    );
  }
};
