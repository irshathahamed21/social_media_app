import React from 'react'
import GoogleLogin from 'react-google-login'
import {FcGoogle} from "react-icons/fc"
import {useNavigate} from "react-router-dom"
import logo from "../assets/logo.png"
import logowhite from "../assets/logowhite.png"
import video from "../assets/share.mp4"

import {client} from "../client"


function Login() {
  const navigate = useNavigate()



  const onResponseGoogle = (response) => {
    localStorage.setItem("user", JSON.stringify(response.profileObj))

    const {name, imageUrl, googleId} = response.profileObj
    const doc = {
      _id:googleId,
      _type:"user",
      userName:name,
      image:imageUrl
    }


    console.log(response)

    client.createIfNotExists(doc)
    .then(()=> {
      navigate("/", {replace:true})

    })

  }

  return (
    <div className="flex justify-start items-center flex-col h-screen">
      
      <div className="relative w-full h-full">
        <video
        src = {video}
        type="video/mp4"
        loop
        muted
        autoPlay
        controls={false}
        className="w-full h-full object-cover"


        />
      <div className="absolute flex flex-col justify-center items-center top-0 bottom-0 left-0 right-0 bg-blackOverlay">
      <div className="p-5">
        <img src={logowhite} alt="logo" width = "130px" />

      </div>

      <div className="shadow-2xl">
        <GoogleLogin
        clientId={process.env.REACT_APP_GOOGLE_API}
        render = {(renderProps) => (
          <button
          type = "button"
          className='bg-mainColor flex justify-center items-center p-3 rounded-lg cursor-pointer outline-none'
          onClick={renderProps.onClick}
          disabled = {renderProps.disabled}
          >
            <FcGoogle className='mr-4'/>
            sign in with Google
          </button>
        )}
        onSuccess = {onResponseGoogle}
        onFailure = {onResponseGoogle}
        cookiePolicy="single_host_origin"
        
        
        
        />
      </div>

      </div>
      </div>
    </div>
  )
}

export default Login


// burning sensation in scalp region
// eyes and body telling me to sleep
// feeling of tired
// feeling of stomach burning
// after 4pm today 02 may 2022 huge hungry and while doing work in 
// this project sleep is coming because of hungry and tiredness
