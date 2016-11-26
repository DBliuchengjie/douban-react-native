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
        var musicNewUrl = 'http://tingapi.ting.baidu.com/v1/restserver/ting?format=json&calback=&from=webapp_music&method=baidu.ting.billboard.billList&type=1&size=20&offset=0';
        var musicHotUrl='http://tingapi.ting.baidu.com/v1/restserver/ting?format=json&calback=&from=webapp_music&method=baidu.ting.billboard.billList&type=2&size=20&offset=0';
        var musicRockUrl='http://tingapi.ting.baidu.com/v1/restserver/ting?format=json&calback=&from=webapp_music&method=baidu.ting.billboard.billList&type=11&size=20&offset=0';
        var musicAmericaUrl='http://tingapi.ting.baidu.com/v1/restserver/ting?format=json&calback=&from=webapp_music&method=baidu.ting.billboard.billList&type=21&size=20&offset=0';
        this.state = {
            musicNewArr: [],
            musicNewArrPure: [],
            musicHotArr: [],
            musicHotArrPure: [],
            musicRockArr: [],
            musicRockArrPure: [],
            musicAmericaArr: [],
            musicAmericaArrPure: [],
        }
        this.fetchData(musicNewUrl);
        this.fetchData2(musicHotUrl);
        this.fetchData3(musicRockUrl);
        this.fetchData4(musicAmericaUrl);
    }           
    fetchData(url) {
        fetch(url).then(res => res.json())
            .then(data => {
                var music = data.song_list.map((item, index) => {
                    return (
                        <View style={styles.movieBox} key={index}>
                            <Image style={styles.moviePic} source={{uri: item.pic_big}}></Image>
                            <Text style={styles.movieName} numberOfLines={1}>{item.title}</Text>
                            <Text style={styles.author} numberOfLines={1}>{item.author}</Text>
                            <Text style={styles.movieScore}>热度：<Text style={styles.hotNum}>{item.hot}</Text></Text>
                        </View>
                    )
                })
                this.setState({
                    musicNew:data.song_list,
                    musicNewPure:music
                })
            })
            
    }
    fetchData2(url) {
        fetch(url).then(res => res.json())
            .then(data => {
                var music = data.song_list.map((item, index) => {
                    return (
                        <View style={styles.movieBox} key={index}>
                            <Image style={styles.moviePic} source={{uri: item.pic_big}}></Image>
                            <Text style={styles.movieName} numberOfLines={1}>{item.title}</Text>
                            <Text style={styles.author} numberOfLines={1}>{item.author}</Text>
                            <Text style={styles.movieScore}>热度：<Text style={styles.hotNum}>{item.hot}</Text></Text>
                        </View>
                    )
                })
                this.setState({
                    musicHot:data.song_list,
                    musicHotPure:music
                })
            })
            
    }
    fetchData3(url) {
        fetch(url).then(res => res.json())
            .then(data => {
                var music = data.song_list.map((item, index) => {
                    return (
                        <View style={styles.movieBox} key={index}>
                            <Image style={styles.moviePic} source={{uri: item.pic_big}}></Image>
                            <Text style={styles.movieName} numberOfLines={1}>{item.title}</Text>
                            <Text style={styles.author} numberOfLines={1}>{item.author}</Text>
                            <Text style={styles.movieScore}>热度：<Text style={styles.hotNum}>{item.hot}</Text></Text>
                        </View>
                    )
                })
                this.setState({
                    musicRock:data.song_list,
                    musicRockPure:music
                })
            })
            
    }
    fetchData4(url) {
        fetch(url).then(res => res.json())
            .then(data => {
                var music = data.song_list.map((item, index) => {
                    return (
                        <View style={styles.movieBox} key={index}>
                            <Image style={styles.moviePic} source={{uri: item.pic_big}}></Image>
                            <Text style={styles.movieName} numberOfLines={1}>{item.title}</Text>
                            <Text style={styles.author} numberOfLines={1}>{item.author}</Text>
                            <Text style={styles.movieScore}>热度：<Text style={styles.hotNum}>{item.hot}</Text></Text>
                        </View>
                    )
                })
                this.setState({
                    musicAmerica:data.song_list,
                    musicAmericaPure:music
                })
            })
            
    }
    render() {
        return (
            <View>
                <View style={styles.header}>
                    <Text style={styles.headTitle}>音乐世界</Text>
                    <Image source={{ uri: pictures.search }} style={styles.search}/>
                </View>
                <ScrollView>
                    <View style={styles.hot}>
                        <View style={styles.hotHead}>
                            <Text style={styles.hotTitle}>新歌榜</Text>
                            <Text style={styles.more}>更多></Text>
                        </View>
                        <ScrollView style={styles.hotList} horizontal={true}>
                            <View style={styles.hotContainer}>
                                {this.state.musicNewPure}
                            </View>
                        </ScrollView>
                    </View>
                    <View style={styles.hot}>
                        <View style={styles.hotHead}>
                            <Text style={styles.hotTitle}>热歌榜</Text>
                            <Text style={styles.more}>更多></Text>
                        </View>
                        <ScrollView style={styles.hotList} horizontal={true}>
                            <View style={styles.hotContainer}>
                                {this.state.musicHotPure}
                            </View>
                        </ScrollView>
                    </View>
                    <View style={styles.hot}>
                        <View style={styles.hotHead}>
                            <Text style={styles.hotTitle}>摇滚榜</Text>
                            <Text style={styles.more}>更多></Text>
                        </View>
                        <ScrollView style={styles.hotList} horizontal={true}>
                            <View style={styles.hotContainer}>
                                {this.state.musicRockPure}
                            </View>
                        </ScrollView>
                    </View>
                    <View style={styles.hot}>
                        <View style={styles.hotHead}>
                            <Text style={styles.hotTitle}>欧美金曲榜</Text>
                            <Text style={styles.more}>更多></Text>
                        </View>
                        <ScrollView style={styles.hotList} horizontal={true}>
                            <View style={styles.hotContainer}>
                                {this.state.musicAmericaPure}
                            </View>
                        </ScrollView>
                    </View>
                </ScrollView>
            </View>
        )
    }
}