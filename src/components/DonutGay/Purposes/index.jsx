import React, { Component } from 'react';
import styles from './styles.module.scss';
import PurposesContent from './PurposesContent';

export default class extends Component{
  render() {
    // this is the place where item's text must be updated
    const textList = [
      'Сформировать эмоциональную привязанность с ребенком',
      'Объяснить отцу и\или другим членами семьи, которые проживают с вами о предстоящем этапе в вашей семье',
      'Сформировать эмоциональную привязанность с ребенком, объяснить отцу и\или другим членами семьи, которые проживают с вами о предстоящем этапе в вашей семье. Сформировать эмоциональную привязанность с ребенком, объяснить отцу и\или другим членами семьи, которые проживают с вами о предстоящем этапе в вашей семье.Сформировать эмоциональную привязанность с ребенком',
      'Объяснить отцу и\или другим членами семьи, которые проживают с вами о предстоящем этапе в вашей семье',
      'To explain about the coming part of your family to father or \ and to other part of your family that are live with you',
      'To be a parent!',
    ]
    return (
      <div className={styles.dropdown_list}>
        {textList.map((el, index, list) => { return el !== list[list.length -1]?
          <><PurposesContent number={index+1} text={el}/>
          <div className={styles.long_line} /></>:
          <><PurposesContent number={index+1} text={el}/></>
      })}</div>
    );
  }
};
