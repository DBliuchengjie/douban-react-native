import React, { Component } from 'react';
import {
    Text,
    View,
    Image,
    ScrollView
} from 'react-native';
import pictures from '../images/picture';
import styles from '../styles/app';

export default class movie extends Component {
    constructor() {
        super();
        var movieHotUrl = 'https://api.douban.com/v2/movie/top250?start=1&count=20';
        var movieSoonUrl = 'https://api.douban.com/v2/movie/top250?start=21&count=20';
        var movieClassicUrl = 'https://api.douban.com/v2/movie/top250?start=41&count=20';
        var movieAwsomeUrl = 'https://api.douban.com/v2/movie/top250?start=61&count=20';
        this.state = {
            movieArr: [],
            movieArrPure: [],
            movieSoonArr: [],
            movieArrSoonPure: [],
            movieClassicArr: [],
            movieArrClassicPure: [],
            movieAwsomeArr: [],
            movieArrAwsomePure: []
        }
        this.fetchData(movieHotUrl);
        this.fetchData2(movieSoonUrl);
        this.fetchData3(movieClassicUrl);
        this.fetchData4(movieAwsomeUrl);
    }           
    fetchData(url) {
        fetch(url).then(res => res.json())
            .then(data => {
                var movie = data.subjects.map((item, index) => {
                    return (
                        <View style={styles.movieBox} key={index}>
                            <Image style={styles.moviePic} source={{uri: item.images['large'] }}></Image>
                            <Text style={styles.movieName} numberOfLines={1}>{item.title}</Text>
                            <Text style={styles.movieScore}><Image style={styles.scorePic} source={{uri:pictures.score}} /><Text style={styles.score}>{item.rating.average}</Text></Text>
                        </View>
                    )
                })
                this.setState({
                    movieArr:data.subjects,
                    movieArrPure:movie
                })
            })
            
    }
    fetchData2(url) {
        fetch(url).then(res => res.json())
            .then(data => {
                var movie = data.subjects.map((item, index) => {
                    return (
                        <View style={styles.movieBox} key={index}>
                            <Image style={styles.moviePic} source={{uri: item.images['large'] }}></Image>
                            <Text style={styles.movieName} numberOfLines={1}>{item.title}</Text>
                            <Text style={styles.movieScore}><Image style={styles.scorePic} source={{uri:pictures.score}} /><Text style={styles.score}>{item.rating.average}</Text></Text>
                        </View>
                    )
                })
                this.setState({
                    movieSoonArr:data.subjects,
                    movieArrSoonPure:movie
                })
            })
            
    }
    fetchData3(url) {
        fetch(url).then(res => res.json())
            .then(data => {
                var movie = data.subjects.map((item, index) => {
                    return (
                        <View style={styles.movieBox} key={index}>
                            <Image style={styles.moviePic} source={{uri: item.images['large'] }}></Image>
                            <Text style={styles.movieName} numberOfLines={1}>{item.title}</Text>
                            <Text style={styles.movieScore}><Image style={styles.scorePic} source={{uri:pictures.score}} /><Text style={styles.score}>{item.rating.average}</Text></Text>
                        </View>
                    )
                })
                this.setState({
                    movieClassicArr:data.subjects,
                    movieArrClassicPure:movie
                })
            })
            
    }
    fetchData4(url) {
        fetch(url).then(res => res.json())
            .then(data => {
                var movie = data.subjects.map((item, index) => {
                    return (
                        <View style={styles.movieBox} key={index}>
                            <Image style={styles.moviePic} source={{uri: item.images['large'] }}></Image>
                            <Text style={styles.movieName} numberOfLines={1}>{item.title}</Text>
                            <Text style={styles.movieScore}><Image style={styles.scorePic} source={{uri:pictures.score}} /><Text style={styles.score}>{item.rating.average}</Text></Text>
                        </View>
                    )
                })
                this.setState({
                    movieAwsomeArr:data.subjects,
                    movieArrAwsomePure:movie
                })
            })
            
    }
    render() {
        return (
            <View>
                <View style={styles.header}>
                    <Text style={styles.headTitle}>电影频道</Text>
                    <Image source={{ uri: pictures.search }} style={styles.search}/>
                </View>
                <ScrollView>
                    <View style={styles.hot}>
                        <View style={styles.hotHead}>
                            <Text style={styles.hotTitle}>影院热映</Text>
                            <Text style={styles.more}>更多></Text>
                        </View>
                        <ScrollView style={styles.hotList} horizontal={true}>
                            <View style={styles.hotContainer}>
                                {this.state.movieArrPure}
                            </View>
                        </ScrollView>
                    </View>
                    <View style={styles.hot}>
                        <View style={styles.hotHead}>
                            <Text style={styles.hotTitle}>即将上线</Text>
                            <Text style={styles.more}>更多></Text>
                        </View>
                        <ScrollView style={styles.hotList} horizontal={true}>
                            <View style={styles.hotContainer}>
                                {this.state.movieArrSoonPure}
                            </View>
                        </ScrollView>
                    </View>
                    <View style={styles.hot}>
                        <View style={styles.hotHead}>
                            <Text style={styles.hotTitle}>经典之作</Text>
                            <Text style={styles.more}>更多></Text>
                        </View>
                        <ScrollView style={styles.hotList} horizontal={true}>
                            <View style={styles.hotContainer}>
                                {this.state.movieArrClassicPure}
                            </View>
                        </ScrollView>
                    </View>
                    <View style={styles.hot}>
                        <View style={styles.hotHead}>
                            <Text style={styles.hotTitle}>豆瓣推荐</Text>
                            <Text style={styles.more}>更多></Text>
                        </View>
                        <ScrollView style={styles.hotList} horizontal={true}>
                            <View style={styles.hotContainer}>
                                {this.state.movieArrAwsomePure}
                            </View>
                        </ScrollView>
                    </View>
                </ScrollView>
            </View>
        )
    }
}