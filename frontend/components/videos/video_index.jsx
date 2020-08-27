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
                <section className="genre-section">
                    <h1 className="genre-title">Action</h1> 
                    {this.props.Action.map(video => (
                        <div className="video-item" onClick={this.props.history.push(`/videos/${video.id}`)}>
                            <VideosItem
                                key={video.id}
                                video={video}
                            />
                        </div>
                    ))}
            </section>
                <section className="genre-section">
                    <h1 className="genre-title">Comedies</h1> 
                    {this.props.Comedy.map(video => (
                        <div className="video-item">
                            <VideosItem
                                key={video.id}
                                video={video}
                            />
                        </div>
                    ))}
            </section>
                <section className="genre-section">
                    <h1 className="genre-title">Fantasy</h1> 
                    {this.props.Fantasy.map(video => (
                        <div className="video-item">
                            <VideosItem
                                key={video.id}
                                video={video}
                            />
                        </div>
                    ))}
            </section>
                <section className="genre-section">
                    <h1 className="genre-title">Drama</h1> 
                    {this.props.Drama.map(video => (
                        <div className="video-item">
                            <VideosItem
                                key={video.id}
                                video={video}
                            />
                        </div>
                    ))}
            </section>
                <section className="genre-section">
                    <h1 className="genre-title">Crime</h1> 
                    {this.props.Crime.map(video => (
                    <div className="video-item">
                        <VideosItem
                            key={video.id}
                            video={video}
                        />
                    </div>
                ))}
                </section>
                <section className="genre-section">
                    <h1 className="genre-title">Science Fiction</h1>
                    {this.props.Science.map(video => (
                        <div className="video-item">
                            <VideosItem
                                key={video.id}
                                video={video}
                            />
                        </div>
                    ))}
                </section>
                <section className="genre-section">
                    <h1 className="genre-title">Thriller</h1>
                    {this.props.Thriller.map(video => (
                        <div className="video-item">
                            <VideosItem
                                key={video.id}
                                video={video}
                            />
                        </div>
                    ))}
                </section>
                <section className="genre-section">
                    <h1 className="genre-title">Family</h1>
                    {this.props.Family.map(video => (
                        <div className="video-item">
                            <VideosItem
                                key={video.id}
                                video={video}
                            />
                        </div>
                    ))}
                </section>
                <section className="genre-section">
                    <h1 className="genre-title">Romance</h1>
                    {this.props.Romance.map(video => (
                        <div className="video-item">
                            <VideosItem
                                key={video.id}
                                video={video}
                            />
                        </div>
                    ))}
                </section>
         </div>
        )
    }
}

export default VideosIndex;
