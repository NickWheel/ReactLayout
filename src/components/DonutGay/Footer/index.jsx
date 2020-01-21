import React, { Component } from 'react';
import styles from './styles.module.scss';

export default class index extends Component {
  render() {
    return (
      <>
        <footer>
          <div className={styles.container}>
            <div className={styles.footer_card}>
              <p className={styles.title_text}>Онлайн - школа</p>
              <div className={styles.short_line} />
              <a href="index.html">О школе</a>
              <a href="index.html">Об авторе</a>
              <a href="index.html">Вопрос/ответ</a>
              <a href="index.html">Отзывы</a>
            </div>
            <div className={styles.footer_card}>
              <p className={styles.title_text}>Материалы</p>
              <div className={styles.short_line} />
              <a href="index.html">Мои курсы</a>
              <a href="index.html">Бесплатные курсы</a>
              <a href="index.html">Все о детях</a>
              <a href="index.html">О личности</a>
              <a href="index.html">О семье</a>
              <a href="index.html">Ближайшие курсы</a>
              <a href="index.html">Новинки</a>
            </div>
            <div className={styles.footer_card}>
              <p className={styles.title_text}>Информация</p>
              <div className={styles.short_line} />
              <a href="index.html">Способы оплаты</a>
              <a href="index.html">Политика конфиденциальности</a>
              <a href="index.html">Договор оферты</a>
            </div>
            <div className={styles.footer_card}>
              <p className={styles.title_text}>Контакты</p>
              <div className={styles.short_line} />
              <a href="index.html">info@karpachoff.com</a>
              <a href="index.html">school.karpachoff.com</a>
              <p className={styles.phone}>+38 (044) 35 36 036</p>
              <p className={styles.phone}>+7 (495) 504 36 06</p>
            </div>
          </div>
        </footer>
        <div className={styles.footer_line} />
      </>
    )
  }
}
