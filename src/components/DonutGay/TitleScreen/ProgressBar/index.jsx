import React, { Component } from 'react';
import styles from './styles.module.scss';

export default class extends Component{
  constructor(props){
    super(props);
    this.calculateProgress = this.calculateProgress.bind(this);
  };
  calculateProgress(){
    const result = this.props.currentThemes / this.props.maxThemes;
    return result*100 + "%";
  }
  render() {
    return (
      <>
        <div className={styles.progress_bar_empty}>
          {/* progress_bar_filled has position: relative property in css. */}
          {/* So the width of filled progress bar is set in % */}
          <div className={styles.progress_bar_filled} style={{width: this.calculateProgress()}} >
          </div>
        </div>
        <div className={styles.progress_text}>
          <div>
            <p>{this.props.maxThemes}</p> 
            <span> Тем всего </span>
          </div>
          <div>
            <p>{this.props.currentThemes}</p>
            <span> Тем выполнено </span>
          </div>
        </div>
      </>
    );
  };
  static defaultProps = {
    maxThemes: 10,
    currentThemes: 6
  }
};
