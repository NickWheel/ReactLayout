import React, { Component } from 'react';
import styles from './styles.module.scss';

export default class index extends Component {
  constructor(props){
    super(props);
    this.state = {
      isChecked: false
    };
    this.changeCheckBox = this.changeCheckBox.bind(this);
  }
  changeCheckBox(){
    this.setState({
      isChecked: !this.state.isChecked
    })
  }

  render() {
    return (
      <div className={styles.dropdown_item}>
        <div className={styles.dropdown_item_text}>
          <div className={styles.item_number}>
            {/* ITEM NUMBER SHOULD BE HERE */}
            <p>{this.props.number}</p>
          </div>
          {/* TEXT PROPS SHOULD BE HERE */}
          <p className={styles.item_text}>{this.props.text}</p>
        </div>
        <div className={styles.checkbox_test}>
          <input id={this.props.number} onClick={()=>{this.changeCheckBox()}} type="checkbox" />
          <label htmlFor={this.props.number}>
            <span />
          </label>
        </div>
      </div>
    )
  }
}
