import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
import SearchBar from './components/search_bar';
import VideoDetails from './components/video_detail';
import _ from 'lodash';
const API_KEY = 'AIzaSyDd_uzFEvACGjEV7nn1FWi0k3Fp7NQulrg';
var AWS = require('aws-sdk/dist/aws-sdk-react-native');



class App extends Component {
    constructor(props){
        super(props);
        this.state = { 
            videos: [],
            selectedVideo: null    
        };
    this.videoSearch('william hill');        
    }

    videoSearch(term) {
        YTSearch({key: API_KEY, term: term}, videos => {
            this.setState({ 
                videos: videos,
                selectedVideo: videos[0]
            });
        });
    }

    render() {
        const videoSearch = _.debounce((term) => {
            this.videoSearch(term);
            console.log(new Date())
        }, 500);

        return (
            <div>
                <SearchBar onSearchTermChange={videoSearch}/>
                <VideoDetails video={this.state.selectedVideo} />
                <VideoList 
                    videos={this.state.videos}/>
            </div>
        );
    } 

}

ReactDOM.render(<App/>, document.querySelector('.container'));
