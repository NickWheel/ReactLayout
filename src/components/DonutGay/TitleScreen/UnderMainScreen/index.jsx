import React, { Component } from 'react';
import styles from './styles.module.scss';

export default class extends Component{
  constructor(props){
    super(props);
    this.calculateThemesQuantity = this.calculateThemesQuantity.bind(this);
  }
  render() {
    return (
      <section className={styles.under_main_screen}>
        <div className={styles.container}>
          <a href="#">{this.props.theme1}</a>
          <div className={styles.short_line} />
          <a href="#">{this.props.theme2}</a>
          <div className={styles.short_line} />
          <a href="#">{this.props.theme3}</a>
        </div>
      </section>
    );
  }
  // calculateThemesQuantity(){
  //   this.props.themes
  // }
  static defaultProps = {
    theme1: 'Главная',
  }
};
