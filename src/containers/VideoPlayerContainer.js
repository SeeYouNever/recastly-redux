import { connect } from 'react-redux';
import VideoPlayer from '../components/VideoPlayer.js';

// var VideoPlayerContainer = (video) => {
//     return VideoPlayer(video);
// };

// var VideoPlayerContainer = () => {};
// var VideoPlayerContainer = connect(mapStateToProps,null);
// (VideoPlayerContainer);

// const mapDispatchToProps = (dispatch) => ({
//     something: video => {dispatch(something(video))}
// })

const mapStateToProps = (state) => {
    return {
        video: state.currentVideo
    }
}
var VideoPlayerContainer = connect(mapStateToProps)(VideoPlayer);
//TODO: define a VideoPlayerContainer component which will hook up your action
//dispatchers with your VideoPlayer component props.
export default VideoPlayerContainer;
// export default connect(mapStateToProps, null)
// (VideoPlayerContainer);
