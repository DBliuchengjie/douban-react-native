/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View,
  StyleSheet,
  ListView,
  StatusBar,
  ActivityIndicator,
  Image,
  Navigator,
  TouchableOpacity
} from 'react-native';

import Movie from './douban/components/movie'; 
import TV from './douban/components/tv'; 
import Book from './douban/components/book'; 
import Music from './douban/components/music'; 
import Mine from './douban/components/mine'; 

import pictures from './douban/images/picture';
import styles from './douban/styles/app';

export default class douban extends Component {
 constructor(props){
   console.log(2);
   super(props);
   this.state={
     curIndex:0
   }
 };
  renderScene(route,navigator){
    return <route.component navigator={navigator}/>;
  };
  render() {
    const routes=[
      {title:'电影',component:Movie},
      {title:'电视',component:TV},
      {title:'音乐',component:Music},
      {title:'书',component:Book},
      {title:'我的',component:Mine},
    ];
    const navBarArr = [
      {imgUrl:pictures.movie,title:'电影'},
      {imgUrl:pictures.tv,title:'电视'},
      {imgUrl:pictures.music,title:'音乐'},
      {imgUrl:pictures.book,title:'书'},
      {imgUrl:pictures.mine,title:'我的'}
    ];
    var navBarList = navBarArr.map((item,index) => {
      return (
        <View key={index}>
          <TouchableOpacity 
              onPress={(route) => {
              this.nav.resetTo(routes[index]);
            }}
              activeOpacity={0.9}
          >
            <View style={styles.navItem} >
              <Image source={{uri:item.imgUrl}} style={this.state.curIndex==index?styles.navPicActive:styles.navPic}/>
              <Text style={this.state.curIndex==index?styles.navNameActive:styles.navName}>{item.title}</Text>
            </View>
          </TouchableOpacity>
       </View>
      )
    })
    return (
      <View style={styles.container}>
        <StatusBar 
          backgroundColor='transparent'
        />
        <View>
        </View>
        <Navigator 
          initialRoute={routes[2]}
          // initialRouteStack={routes}
          renderScene={this.renderScene}
          ref={(navigator) => {
             this.nav = navigator;
          }}
          onWillFocus = {(nextRoute) => {
             if(nextRoute != routes[this.state.curIndex]){
                this.setState({
                  curIndex: routes.indexOf(nextRoute)
                })
             }
          }}
          navigationBar={
            <View style={styles.navBox}>
              {navBarList}
            </View>
          }
        />
      </View>
    );
  }
}

AppRegistry.registerComponent('douban', () => douban);
