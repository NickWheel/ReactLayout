import React, { Component } from 'react';
import styles from './styles.module.scss';

export default class extends Component{
  constructor(props){
    super(props);
    this.calculateThemesQuantity = this.calculateThemesQuantity.bind(this);
  }
  calculateThemesQuantity(){
    const content = this.props.themes.map((prop)=>{
            return (
              <>
                <div className={styles.short_line} />
                <a href="#">{prop}</a>
              </>
            )
          })
    return content;
  }
  render() {
    return (
      <section className={styles.under_main_screen}>
        <div className={styles.container}>
          <a href="#">{this.props.theme1}</a>
          {this.calculateThemesQuantity()}
        </div>
      </section>
    );
  }
  static defaultProps = {
    theme1: 'Главная',
  }
};
