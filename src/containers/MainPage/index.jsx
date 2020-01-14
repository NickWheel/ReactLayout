import React from 'react';
import SomeComponent from '../../components/SomeComponent';
import Articles from '../../components/Articles/index';
import UserList from '../../components/UserList';
import Nav from '../../components/DonutGay/Nav';
import TitleScreen from '../../components/DonutGay/TitleScreen';

export default function(props){
  return(
    <>
      <Nav />
      <TitleScreen />
      {/* <UserList /> */}
      {/* <Articles />
      <SomeComponent /> */}
    </>
  )
}