// import React from 'react'
// import vid from '../../component/Video/vid.mp4'
//  import WHL from '../../Components/WHL/WHL'
// //import { useSelector } from 'react-redux';

// function LikedVideo() {
//   //const likedVideoList = useSelector(state=>state.likedVideoReducer)
//   // const LikedVideo = [
//   //   {
//   //     _id: 1,
//   //     video_src: vid,
//   //     Chanel:"62bafe6752cea35a6c30685f",
//   //     title:"video 1",
//   //     Uploader: 'abc',
//   //     description: "description of video 1"
//   //   },
//   //   {
//   //     _id: 2,
//   //     video_src: vid,
//   //     Chanel:"cdd",
//   //     title:"video 2",
//   //     Uploader: 'abc',
//   //     description: "description of video 2"
//   //   },
//   //   {
//   //     _id: 3,
//   //     video_src: vid,
//   //     Chanel:"add",
//   //     title:"video 3",
//   //     Uploader: 'abc',
//   //     description: "description of video 3"
//   //   },
//   //   {
//   //     _id: 4,
//   //     video_src: vid,
//   //     Chanel:"add",
//   //     title:"video 4",
//   //     Uploader: 'abc',
//   //     description: "description of video 3"
//   //   },
//   // ];
//   return (
//       <WHL page={"Liked Videos"}/>
//    )
// }

//  export default LikedVideo

import React from 'react'
import vid from '../../Components/Video/vid.mp4';
import WHL from '../../Components/WHL/WHL';

function LikedVideos() {
  const likedVideo = [
    {
      _id: 1,
      video_src: vid,
      Chanel:"62bafe6752cea35a6c30685f",
      title:"video 1",
      Uploader: 'abc',
      description: "description of video 1"
    },
    {
      _id: 2,
      video_src: vid,
      Chanel:"cdd",
      title:"video 2",
      Uploader: 'abc',
      description: "description of video 2"
    },
    {
      _id: 3,
      video_src: vid,
      Chanel:"add",
      title:"video 3",
      Uploader: 'abc',
      description: "description of video 3"
    },
    {
      _id: 4,
      video_src: vid,
      Chanel:"add",
      title:"video 4",
      Uploader: 'abc',
      description: "description of video 3"
    },
  ];
  return (
    
    <WHL page={"Liked Videos"} videoList={likedVideo}/>
  )
}

export default LikedVideos

