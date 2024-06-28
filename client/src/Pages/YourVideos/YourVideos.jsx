import React from "react";
import LeftSideBar from '../../Components/LeftSideBar/LeftSideBar'
import ShowVideoGrid from '../../Components/ShowVideoGrid/ShowVideoGrid'
import vid from '../../Components/Video/vid.mp4'
import './YourVideos.css'

function YourVideos() {
  const vids = [
    {
      _id: 1,
      video_src: vid,
      Chanel: "62bafe6752cea35a6c30685f",
      title: "video 1",
      Uploader: "abc",
      description: "description of  video 1",
    },
    {
      _id: 2,
      video_src: vid,
      Chanel: "cdd",
      title: "video 2",
      Uploader: "abc",
      description: "description of  video 2",
    },
    {
      _id: 3,
      video_src: vid,
      Chanel: "add",
      title: "video 3",
      Uploader: "abc",
      description: "description of  video 3",
    },
    {
      _id: 4,
      video_src: vid,
      Chanel: "add",
      title: "video 3",
      Uploader: "abc",
      description: "description of  video 3",
    },
  ];

  return (
    <div className='container_pages_App'>
        <LeftSideBar/>
      <div className='container2_pages_App'>
        <div className="conatiner_yourVideo">
           <h1>Your video</h1>
           <ShowVideoGrid vids={vids}/>
        </div>
      </div>
    </div>
  )
}

export default YourVideos
