import React, { Component } from 'react';
import styles from './styles.module.scss';

export default class extends Component{
  render() {
    return (
      <header>
        <div className={styles.container}>
          <a href="google.com">
            <img className={styles.karpachoff_logo} src="../img/logo.svg" alt="karpachoff_logo" />
          </a>
          <ul>
            <a href="google.com">Главная</a>
            <a href="google.com">Материалы для вас</a>
            <a href="google.com">Календарь курсов</a>
            <a href="google.com">
              <img src="../img/user.svg" alt="profile_logo" />
              Профиль
            </a>
          </ul>
          <div className={styles.burger_menu}>
            <div className={styles.burger_menu_element} />
            <div className={styles.burger_menu_element} />
            <div className={styles.burger_menu_element_bottom}>
              <div className={styles.nav_in_burger}>
                <a href="google.com">Главная</a>
                <a href="google.com">Материалы для вас</a>
                <a href="google.com">Календарь курсов</a>
                <a href="google.com">
                  <img src="../img/user.svg" alt="profile_logo" />
                  Профиль
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
};
