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
        <div>
            {this.props.videos.map(video => (
                <VideosItem
                    key = {video.id}
                    video ={video}
                />
            ))
             } 
         </div>
        )
    }
}

export default VideosIndex;
