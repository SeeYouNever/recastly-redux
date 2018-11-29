import searchYouTube from '../lib/searchYouTube.js';
import changeVideoList from './videoList.js';
import changeVideo from './currentVideo.js';
import YOUTUBE_API_KEY from '../config/youtube.js';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';


var handleVideoSearch = (q) => {
  //TODO:  Write an asynchronous action to handle a video search!
  const store = createStore(reducer, applyMiddleware(thunk));
  
  store.dispatch({
    key: YOUTUBE_API_KEY,
    query: q
  })

  //   return {
  //     type: "CHANGE_VIDEO_LIST",
  //     videos: q
  //   }

  

  // var search = {
  //   key: YOUTUBE_API_KEY,
  //   query: q
  // }
  // return (dispatch) => {
  //   searchYouTube(search, callback)
  // }
};

export default handleVideoSearch;
