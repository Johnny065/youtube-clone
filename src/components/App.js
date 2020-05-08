import React from 'react';
import './App.css';

//components
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import Footer from './Footer';

//apis
import youtube from '../apis/youtube';

const KEY = 'AIzaSyBWfHr4mlXf-koaPnW0eBa3yzWTftgh6qc';

class App extends React.Component {
  state = { videos: [], selectedVideo: null };

  componentDidMount() {
    this.onTermSubmit('react development');
  }

  onTermSubmit = async term => {
    const response = await youtube.get('/search', {
      params: {
        part: 'snippet',
        maxResults: 5,
        type: 'video',
        key: `${KEY}`,
        q: term
      }
    });
    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0]
    });
  };

  onVideoSelect = video => {
    this.setState({ selectedVideo: video });
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="ten wide column">
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="six wide column">
              <VideoList
                onVideoSelect={this.onVideoSelect}
                videos={this.state.videos}
              />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
