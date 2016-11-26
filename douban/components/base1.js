'use strict';

import React,{ Component } from 'react';
 import {
     AppRegistry,
     Text,
     View,
     StyleSheet,
     ListView,
     StatusBar,
     ActivityIndicator,
     Image
 } from 'react-native';

export default class douban extends Component {
  constructor(){
    super();
    var ds = new ListView.DataSource({
          rowHasChanged:(r1,r2) => r1!==r2
        });
    this.state={
      dataSource:ds,
      loading:true
    }
  }

  fetchData(url){
    fetch(url).then(res => res.json())
      .then(data =>{
        this.state.dataSource=this.state.dataSource.cloneWithRows(data.subjects);
        this.state.loading=false;
      })
  }
  render() {
    var dataUrl = 'https://api.douban.com/v2/movie/top250?start=13&count=20';
    this.fetchData(dataUrl);
    if(this.state.loading){
      return (
        <ActivityIndicator
          animating={true}
          size="large"
          color='red'
        />
      )
    }
    return (
      <View>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData => 
            <View style={styles.container}>
              <Image style={styles.image} source={{uri:rowData.images['large']}}></Image>
              <View style={styles.songContainer}>
                <Text style={styles.text}>电影名:《{rowData.title}》</Text>
                <Text style={styles.text}>主演:{rowData.casts[0].name}</Text>
              </View>
            </View>
            )}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'row',
    backgroundColor: '#F5FCFF',
  },
  songContainer:{
    flex:3
  },
  text:{
    paddingLeft:10,
    fontSize:20,
    color:'green',
  },
  image:{
    flex:1,
    width:100,
    height:300
  }
});
