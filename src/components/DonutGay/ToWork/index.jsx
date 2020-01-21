import React, { Component } from 'react';
import styles from './styles.module.scss';
import CardTemplate from './CardTemplate';

import cubes from './img/cubes.svg';
import sunny from './img/sunny.svg';
import thinkAboutIt from './img/think_about_it.svg'
import tests from './img/tests.svg';
import clock from './img/clock.svg';
import glasses from './img/glasses.svg';

export default class index extends Component {
  render() {
    const titleImages = {
      cubes: {
        img: cubes,
        alt: 'cubes'
      },
      sunny: {
        img: sunny,
        alt: 'sunny'
      },
      thinkAboutIt: {
        img: thinkAboutIt,
        alt: 'thinkAboutIt'
      },
    }

    const infoObj = {
      article: {
        img: glasses,
        text: 'Статья',
        alt: 'glasses'
      },
      test: {
        img: tests,
        text: 'Тест',
        alt: 'tests'
      },
      time: {
        img: clock,
        text: '1 час 15 минут',
        alt: 'clock' 
      }
    }
    const tasksObj = {
      emotionalBoundness: 'Формирование эмоциональной связи с родителями',
      explainToFamily: 'Объяснить отцу и\или другим членами семьи, проживают с вами о предстоящем этапе в вашей семье',
    }

    // THE MAIN CONTENT WE TRANSFERING
    const contentList = [
      {
        titleImg: titleImages.cubes,
        info: {
          practice: true,
          type: infoObj.article,
          time: infoObj.time
        },
        text: tasksObj.emotionalBoundness
      },
      {
        titleImg: titleImages.sunny,
        info: {
          practice: true,
          type: infoObj.test,
          time: infoObj.time
        },
        text: tasksObj.explainToFamily
      },
      {
        titleImg: titleImages.thinkAboutIt,
        info: {
          practice: false,
          type: infoObj.article,
          time: infoObj.time
        },
        text: tasksObj.emotionalBoundness
      },
      {
        titleImg: titleImages.thinkAboutIt,
        info: {
          practice: false,
          type: infoObj.article,
          time: infoObj.time
        },
        text: tasksObj.emotionalBoundness
      },
      {
        titleImg: titleImages.sunny,
        info: {
          practice: true,
          type: infoObj.test,
          time: infoObj.time
        },
        text: tasksObj.explainToFamily
      },
    ]
    return (
      <div className={styles.cards_dropdown}>
        {contentList.map((el, index) => {
          return <CardTemplate content={el} number={index + 1}/>
        })}
      </div>
          
    )
  };
}
