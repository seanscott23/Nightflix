import React from 'react';


class VideosForm extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount(){
        debugger
        this.props.showVideo(this.props.match.params.videoId)
    }

    render() {
        debugger
        return (
            <div>
                <h1 className="video-title">{this.props.video.title}</h1>
            </div>
        )
    }
}

export default VideosForm;