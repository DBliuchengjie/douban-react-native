import React, { Component } from 'react';
import {
    StyleSheet,
} from 'react-native';

export default StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'mintcream'
    },
    navBox:{
        height:44,
        flexDirection:'row',
        justifyContent: 'space-around',
    },
    navItem:{
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        height:44
    },
    navPic:{
        width:28,
        height:28,
        tintColor:'gray'
    },
    navPicActive:{
        width:28,
        height:28,
        tintColor:'forestgreen'
    },
    navName:{
        fontSize:16
    },
    navNameActive:{
        color:'forestgreen'
    },
    header:{
        height:44,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        opacity:0.8
    },
    headTitle:{
        fontSize:20,
        fontWeight:'bold'
    },
    search:{
        width:10,
        height:10,
        tintColor:'forestgreen',
        left:160,
        borderWidth:20
    },
    hot:{
        flexDirection:'column',
        backgroundColor:'white',
        marginTop:10
    },
    hotHead:{
        marginTop:10,
        marginBottom:10,
        flexDirection:'row',
        justifyContent:'space-between'
    },
    hotTitle:{
        fontSize:18,
        fontWeight:'bold',
        marginLeft:20
    },
    more:{
        color:'forestgreen',
        fontSize:18,
        marginRight:20
    },
    hotList:{
        
    },
    hotContainer:{
        width:3000,
        flexDirection:'row'
    },
    movieBox:{
        flexDirection:'column',
        marginLeft:20,
    },
    moviePic:{
        width:130,
        height:180
    },
    movieName:{
        fontSize:16,
        width:130,
        fontWeight:'bold',
        marginTop:10  
    },
    author:{
        fontSize:14,
        color:'gray'
    },
    hotNum:{
        color:'red'
    },
    movieScore:{
        fontSize:14,
        width:130,
        color:'gray',
    },
    score:{
        color:'gray',
        paddingLeft:10
    },
    scorePic:{
        width:80,
        height:12,
        tintColor:'red'
    }
})