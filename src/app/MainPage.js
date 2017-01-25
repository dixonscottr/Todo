import React, { Component } from 'react';
import { View, Text, Navigator } from 'react-native';
import { Todo } from './Todo';
import { About } from './About.js';

export class MainPage extends Component {

  renderScene(route, navigator) {
   if(route.index === 0) {
     return <Todo
              navigator={navigator}
              title={route.title}
              onForward={() => {
                if(route.index > 0) {

                } else {
                  navigator.push(routes[1]);
                }
              }}
              />
   }
   if(route.index === 1) {
     return <About
              navigator={navigator}
              title={route.title}
              onBack={() => {
                if (route.index > 0) {
                  navigator.pop();
                }
              }}
              />
   }
  }

  render() {
    routes = [
     {title: 'Main Page', index: 0},
     {title: 'About', index: 1}
    ];
    return (
      <Navigator
        initialRoute={routes[0]}
        initialRouteStack={routes}
        renderScene={this.renderScene}
      />
    )
  }
}

// (route, navigator) => 
//           <Todo
//             title={route.title}
//             onForward={() => {
//               if(route.index > 0) {

//               } else {
//                 navigator.push(routes[1]);
//               }
//             }}
//             onBack={() => {
//               if (route.index > 0) {
//                 navigator.pop();
//               }
//             }}
//           />