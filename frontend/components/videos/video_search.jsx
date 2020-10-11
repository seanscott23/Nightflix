import React from 'react';
import VideosItem from './videos_item';

export default class VideoList extends React.Component{
  constructor(props){
    super(props);
    this.state ={}
  }

  componentWillMount(){
    this.props.allVideos()
    this.props.requestGenres()
  }

  // updateSearch(event){
  //   this.setState({search: event.target.value})
  // }

  render(){
        if (this.props.videos.length === 0 || this.props.genres.length === 0){
          return null
        }
        const { videos, history} = this.props;
        let search = this.props.location.pathname.slice(8)

         let searchVids = videos.filter(video =>(
            video.title.toLowerCase().includes(search.toLowerCase())
        ))
           if (searchVids.length !==0 && search.length!==0){
    return (
      <div className="videoIndex">
        <strong className="SearchTitle">Your Search: {search}</strong>
        <div className="SearchPageCss">
          <div className="carouselRowSearch">
            {searchVids.map((video) => (
              <VideosItem
                key={video.id}
                video={video}
                history={history}
               
              />
            ))}
          </div>
        </div>
      </div>
    );
   }
  }
}
