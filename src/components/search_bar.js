import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import YouTubeSearch from 'youtube-api-v3-search';
import {Grid, Row, Col} from 'react-bootstrap/lib';
import VideoDetails from './video_details';

// import VideoListItem from './video_list_item';
// import VideoDetail from './video_details';
import VideoList from './video_list';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      search: null,
      videos: []
    };

    this.handleInputChange = this.handleInputChange.bind(this, props);
  }

  handleInputChange(args, ev) {
    let keyWord = ev.target.value;
    console.info(ev);

    this.setState((prevState,props) => {
      return {search: keyWord};
    })

    YouTubeSearch(args.youtubeToken, {q:keyWord, type:'video'}, (error,response) => {
      let videos = response.items;
      console.log(videos);
      this.setState({videos} )
    });
  }

  render() {
    return (
      <div>
        <Grid>
          <Row>
            <input onChange={this.handleInputChange} />
          </Row>
          <Row>
            <VideoDetails videoList={this.state.videos}></VideoDetails>
            <VideoList videoList={this.state.videos}></VideoList>
          </Row>
        </Grid>
      </div>
    );
  }

}

export default SearchBar;
