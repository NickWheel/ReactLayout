import React from 'react';
import 'normalize.css';
import styles from './styles.module.scss';

export default class Square extends React.Component {
  render(props) {
    return (
      <button className={styles.square} onClick={()=> {
        props.fillOne();
      }}>
        {}
      </button>
    );
  }
}