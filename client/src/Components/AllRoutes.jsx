import React from 'react'
import Home from '../Pages/Home/Home'
import {
    Routes,
    Route,
  } from "react-router-dom";
import Library from '../Pages/Library/Library'
import YourVideos from '../Pages/YourVideos/YourVideos'
import WatchHistory from '../Pages/WatchHistory/WatchHistory';
import WatchLater from '../Pages/WatchLater/WatchLater'
import LikedVideos from '../Pages/LikedVideos/LikedVideos';
import VideoPage from '../Pages/VideoPage/VideoPage'
//import Chanel from '../Pages/Chanel/Chanel'
import Search from '../Pages/Search/Search'
function AllRoutes() {
  return (
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/library' element={<Library/>} />
        <Route path='/history' element={<WatchHistory/>} />
        <Route path='/watchlater' element={<WatchLater/>}/>
        <Route path='/yourvideos' element={<YourVideos/>}/>
        <Route path='/likedvideos' element={<LikedVideos/>}/>
        <Route path='/videopage/:vid' element={<VideoPage/>}/>
        <Route path='/search/:searchQuery' element={<Search/>} />
        {/* <Route 
          path='/chanel/:Cid'
          element={<Chanel 
            setVidUploadPage={setVidUploadPage}
            setEditCreateChanelBtn={setEditCreateChanelBtn}/>}
        /> */}
    </Routes>
  );
}

export default AllRoutes
// import React from 'react'
// import Home from '../Pages/Home/Home'
// import { Route, Routes } from 'react-router-dom'

// function AllRoutes() {
//   return (
//     <Routes>
//         <Route path='/' element={<Home/>} />
//     </Routes>
//   )
// }

// export default AllRoutes
