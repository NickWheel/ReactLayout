import React, { Component } from 'react';
import styles from './styles.module.scss';

export default class extends Component{
  constructor(props){
    super(props);
  };
  render() {
    return (
     <p className={styles.title_bottom_text}>{this.props.name}</p>
    );
  }

  static defaultProps = {
    name: 'Название актуальной темы'
  }
};
