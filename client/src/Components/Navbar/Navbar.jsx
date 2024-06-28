import React from 'react'
import './Navbar.css'
import logo from './logo.ico';
import SearchBar from './SearchBar/SearchBar';
import { RiVideoAddLine } from 'react-icons/ri';
import { IoMdNotificationsOutline } from 'react-icons/io'
import { BiUserCircle } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../../firebase/firebase";

function Navbar({ toggleDrawer }) {
  const provider = new GoogleAuthProvider();

  const CurrentUser = null;
  //   const CurrentUser = {
  //   result: {
  //     email: "abzxy50312@gmail.com",
  //     joinedOn: "2222-07-15T09:57:23.489Z",
  //   },
  // };

  const handleSignIn = async () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        console.log(user);
        // IdP data available using getAdditionalUserInfo(result)
        // ...
      }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);

        console.log(error)
        // ...
      });

  }
  return (
    <div className='Container_Navbar'>
      <div className="Burger_Logo_Navbar">
        <div className="burger" onClick={() => toggleDrawer()}>
          <p></p>
          <p></p>
          <p></p>
        </div>
        <Link to={'/'} className='logo_div_Navbar'>
          <img src={logo} alt="" />
          <p className='logo_title_navbar'>YouTube</p>
        </Link>
      </div>
      <SearchBar />
      <RiVideoAddLine size={22} className={"vid_bell_Navbar"} />
      <div className="apps_Box">
        <p className="appBox"></p>
        <p className="appBox"></p>
        <p className="appBox"></p>
        <p className="appBox"></p>
        <p className="appBox"></p>
        <p className="appBox"></p>
        <p className="appBox"></p>
        <p className="appBox"></p>
        <p className="appBox"></p>
      </div>
      <IoMdNotificationsOutline size={22} className='vid_bell_Navbar' />
      <div className="Auth_cont_Navbar">
        {
          CurrentUser ? (
            <>
              <div className="Chanel_logo_App">
                <p className="fstChar_logo_App">
                  {
                    CurrentUser?.result.name ? (
                      <>
                        {CurrentUser?.result.name.charAt(0).toUpperCase()}
                      </>
                    ) : (<>
                      {CurrentUser?.result.email.charAt(0).toUpperCase()}
                    </>)
                  }
                </p>
              </div>
            </>
          ) : (
            <>
              <div className="Auth_Btn" onClick={handleSignIn}>
                <BiUserCircle size={22} />
                <b>Sign in</b>
              </div>
            </>
          )}
      </div>
    </div>
  )
}

export default Navbar
