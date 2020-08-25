import React from 'react';
import VideosItem from './videos_item';

class VideosIndex extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount(){
        this.props.allVideos()
    }

    render() {

        return (
        <div className="video-container">
            {this.props.videos.map(video => (
                <div className="video-item">
                    <VideosItem
                        key = {video.id}
                        video ={video}  
                    />
                </div>
            ))
             } 
         </div>
        )
    }
}

export default VideosIndex;
