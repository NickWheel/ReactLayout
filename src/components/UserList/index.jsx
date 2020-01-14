// import Axios from 'axios';
// import React, { Component } from 'react';
// import UserPad from './UserPad';

// export default class extends Component {
//   constructor(props) {
//     super(props);
//     this.state ={
//       array: []
//     }
//   }

//   componentDidMount() {
//     componentWillMount(){
//       console.log('will mount')
//     };
//     Axios.get('https://jsonplaceholder.typicode.com/users')
//       .then(data => {
//         console.log(data);

//         this.setState({
//           array: data.data
//         })
//       });
//   }
//   render() {
//     return(
//       <>
//       {this.state.array.map((item)=>{
//         return <UserPad item={item}/>
//       })}
//       </>
//     )
//   }
// }