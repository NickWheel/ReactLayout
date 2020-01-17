import React, { Component } from 'react';
import styles from './styles.module.scss';

export default class extends Component{
  constructor(props){
    super(props)
  };
  render() {
    return (
      <div className={styles.stripe}>
        <h1>{this.props.age}</h1>
      </div>
    );
  }
  static defaultProps = {
    age: '1 ГОД, 3-Й МЕСЯЦ'
  }
};
