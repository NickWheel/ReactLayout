import React, { Component } from 'react';
import styles from './styles.module.scss';
import ProgressBar from './ProgressBar';
import ArticleName from './ArticleName';
import Stripe from './Stripe';
import UnderMainScreen from './UnderMainScreen';

export default class extends Component{
  render() {
    return (
      <>
      <section className={styles.title_screen}>
        <Stripe age={'1 ГОД, 3-Й МЕСЯЦ'} />
        <div className={styles.container}>
          <p className={styles.title_text}>
            Прохождение этой темы позволит вам избежать частных ошибок при воспитании детей от 0 до 3 лет. Результат - правильные и четкие шаги для достижения цели.
          </p>
          <ProgressBar maxThemes={13} currentThemes={3} />
          <ArticleName name={'Название актуальной темы'}/>
        </div>
      </section>
      <UnderMainScreen theme2={'Академия родительского мастерства'} theme3={'Модуль 12'}/>
      </>
    );
  }
};
