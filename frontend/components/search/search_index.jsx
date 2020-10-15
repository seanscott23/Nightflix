import React from "react";
import VideosItem from '../videos/videos_item';

class SearchPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (!this.props.video) {
      return null;
    }

    return (
      <div>
        <VideosItem/>
      </div>
    );
  }
}

export default SearchPage;
