import React from 'react';


class VideosIndex extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount(){
        this.props.showVideo(this.props.match.params.videoId)
    }

    render() {
        if (!this.props.video) {
            return null
        }
        debugger
        return (
        <div>
            {this.props.video.map(video => {
                <VideoItemContainer
                    key = {video.id}
                    video ={video}
                />
                })
             } 
         </div>
        )
    }
}

export default VideosIndex;
