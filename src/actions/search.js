import searchYouTube from '../lib/searchYouTube.js';
import changeVideoList from './videoList.js';
import changeVideo from './currentVideo.js';
import YOUTUBE_API_KEY from '../config/youtube.js';



var handleVideoSearch = (q) => {
  //TODO:  Write an asynchronous action to handle a video search!

  // store.dispatch({
  //   key: YOUTUBE_API_KEY,
  //   query: q
  // })

  //   return {
  //     type: "CHANGE_VIDEO_LIST",
  //     videos: q
  //   }

  

  const search = {
    key: YOUTUBE_API_KEY,
    query: q
  }
  return (dispatch) => {
    searchYouTube(search,(items)=> {
      dispatch(changeVideo(items[0]))
      dispatch(changeVideoList(items))
    }
  )
  }
};

export default handleVideoSearch;
