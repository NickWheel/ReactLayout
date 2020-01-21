import React, { Component } from 'react';
import styles from './styles.module.scss';
import Polygon_dark from './img/Polygon_dark.svg';

export default class extends Component{
  constructor(props){
    super(props);
    this.state = {
      isOpened: true,
    }
    this.opener = this.opener.bind(this);
  }
  opener() {
    this.setState({
      isOpened: !this.state.isOpened
    })
  }
  render() {
    return (
      <section>
        <div className={styles.container}>
          <div className={styles.dropdown}>
            <label className={styles.dropdown_switcher} onClick={()=>{this.opener()}} htmlFor="big_dropdown_module_purposes">
              <div className={styles.left_dropdown_switcher_block}>
                <div className={styles.short_line} />
                {/*TITLE PROPS SHOULD BE HERE  */}
                <h2>{this.props.title}</h2>
              </div>
              <div className={styles.long_line} />
              <img src={Polygon_dark} style={this.state.isOpened? {transform: "rotate(300deg) scale(1.2)"}:
              {transform: "rotate(0deg) scale(1.0)"}} alt="triangle" />
            </label>
            {/* COMPONENT PROPS SHOLD BE HERE */}
            <div style={this.state.isOpened? {display: 'block'}: {display: 'none'}}>
              <this.props.component />
            </div>
          </div> 
        </div>
      </section>
      );          
  }
};
