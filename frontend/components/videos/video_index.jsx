import React from 'react';


class VideosIndex extends React.Component {
    constructor(props) {
        super(props)
    }


    render() {
        return (
            <div>
            {this.props.video.map(video => {
        <videoItem
            key = {video.id}
            video ={video}
        />
            })
         } </div>
        )
    }
}

export default VideosIndex;
