import React from "react";
import VideosItem from '../videos/videos_item';

class SearchPage extends React.Component {
  constructor(props) {
    super(props);
  }

  // componentDidMount(){
  //   fetchSearchResults(query)
  // }

  render() {
    debugger

    if (!this.props.search) {
      return null;
    }

    return (
      <div className="search-video-show">
        {this.props.search.map( (video) => {
          return <VideosItem videos={this.props.search}
          key = {video.id} />;
        })}
      </div>
    );
  }
}

export default SearchPage;
