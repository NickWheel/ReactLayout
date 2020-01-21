import React, { Component } from 'react';
import styles from './styles.module.scss';

export default class index extends Component {
  constructor(props){
    super(props);
    this.state = {
      isToggled: false,
      modalWindow: false
    }
    this.changeToggle = this.changeToggle.bind(this);
    this.changeModal = this.changeModal.bind(this);
  }
  changeToggle(){
    this.setState({
      isToggled: !this.state.isToggled
    })
  }
  changeModal(){
    this.setState({
      modalWindow: !this.state.modalWindow
    })
  }
  render() {
    return (
      <div className={styles.card} style={this.state.isToggled? {borderColor: '#FC890D'}:{borderColor: '#FAFAFA'}}>
        <div className={styles.card_number} style={this.state.isToggled?
          {backgroundColor: '#FC890D'}:{backgroundColor: '#F3F3F3'}}>
          {/* CARD NUMBER PROPS SHOULD BE HERE */}
          <p>{this.props.number}</p>
        </div>
        <div className={styles.adaptive_card_title}>
          <div className={styles.adaptive_card_left_block}>
            <div className={styles.card_number_adaptive} style={this.state.isToggled?
              {backgroundColor: '#FC890D'}:{backgroundColor: '#F3F3F3'}}>
              {/* CARD NUMBER PROPS SHOULD BE HERE */}
              <p>{this.props.number}</p>
            </div>
            {/* TITLE IMG PROPS */}
            <img className={styles.left_side_img_adaptive} src={this.props.content.titleImg.img} alt={this.props.content.titleImg.alt} />
          </div>
          <div className={styles.toggle_switch_adaptive}>
            <input type="checkbox" id={this.props.number + 100} />
            <label htmlFor={this.props.number + 100} onClick={()=>{this.changeToggle()}}>Toggle</label>
          </div>
        </div>
        <div className={styles.container}>
          <div className={styles.card_left_side}>
            {/* TITLE IMG PROPS */}
            <img className={styles.left_side_img} src={this.props.content.titleImg.img} alt={this.props.content.titleImg.alt} />
            <div className={styles.card_info}>
              <div className={styles.card_top_info}>
                <div style={this.props.content.info.practice? {display: 'flex'}: {display: 'none'}}>
                    <p className={styles.info_practice}>Практика</p>
                </div>
                <div>
                  {/* TASK IMG PROPS */}
                  <img src={this.props.content.info.type.img} alt={this.props.content.info.type.alt} />
                  {/* TASK TEXT PROPS */}
                  <p>{this.props.content.info.type.text}</p>
                </div>
                <div>
                  {/* TASK TIME IMG PROPS */}
                  <img src={this.props.content.info.time.img} alt={this.props.content.info.time.alt} />
                  {/* TASK TIME PROPS */}
                  <p>{this.props.content.info.time.text}</p>
                </div>
              </div>
              {/* MAIN TASK PROPS */}
              <h3>{this.props.content.text}</h3>
              <div className={styles.card_bot_info}>
                <div onClick={()=>{this.changeModal()}}>
                  <div className={styles.fixed_background} style={this.state.modalWindow?
                    {display: "block"}: {display: 'none'}} onClick={()=>{this.changeModal()}}></div>
                  <div class={styles.modal} style={this.state.modalWindow?
                    {display: "flex", justifyContent: 'center'}: {display: 'none'}}>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/G1IbRujko-A" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                  </div>
                  <svg width={18} height={12} viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.61667 0C4.7 0 1.33167 2.42833 0 5.875C1.33167 9.32167 4.7 11.75 8.61667 11.75C12.5333 11.75 15.9017 9.32167 17.2333 5.875C15.9017 2.42833 12.5333 0 8.61667 0ZM8.61667 9.79167C6.42333 9.79167 4.7 8.06833 4.7 5.875C4.7 3.68167 6.42333 1.95833 8.61667 1.95833C10.81 1.95833 12.5333 3.68167 12.5333 5.875C12.5333 8.06833 10.81 9.79167 8.61667 9.79167ZM8.61667 3.525C7.285 3.525 6.26667 4.54333 6.26667 5.875C6.26667 7.20667 7.285 8.225 8.61667 8.225C9.94833 8.225 10.9667 7.20667 10.9667 5.875C10.9667 4.54333 9.94833 3.525 8.61667 3.525Z" fill="#696969" />
                    <defs>
                      <linearGradient id="paint0_linear" x1="-9.86627e-10" y1="6.19257" x2="17.2335" y2="6.17712" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#696969" />
                        <stop offset={1} stopColor="#696969" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <p>Просмотреть</p>
                </div>
                <div>
                  <svg width={14} height={16} viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.8 16C7.68 16 8.4 15.28 8.4 14.4H5.2C5.2 15.28 5.92 16 6.8 16ZM12 11.2V6.8C12 4.32 10.32 2.32 8 1.76V1.2C8 0.56 7.44 0 6.8 0C6.16 0 5.6 0.56 5.6 1.2V1.76C3.28 2.32 1.6 4.32 1.6 6.8V11.2L0 12.8V13.6H13.6V12.8L12 11.2Z" fill="#696969" />
                  </svg>
                  <p>Напомнить</p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.toggle_switch}>
            <input type="checkbox" id={this.props.number + 50} />
            <label htmlFor={this.props.number + 50} onClick={()=>{this.changeToggle()}}>Toggle</label>
          </div>
        </div>
      </div>
      
    )
  }
}
