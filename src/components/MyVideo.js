import React, { Component } from 'react';

class MyVideo extends Component {
    constructor(props) {
        super(props);

        this.myVideo = React.createRef();

        this.start = this.start.bind(this);
    }

    start() {
        this.myVideo.current.play();
    }

    render() {
        return (
            <div>
                <video ref={this.myVideo} width="480" src={this.props.src} />
                <button onClick={this.start}>Play</button>
            </div>
        );
    }
}

export default MyVideo;