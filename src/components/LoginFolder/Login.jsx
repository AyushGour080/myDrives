import React from 'react'
import { app } from '../../App';
import { Credentials } from 'realm-web';


const login= async()=>{

  let email = "xyz@gmail.com"
  let password = "111111"
        // Create an email/password credential
        const credentials = Credentials.emailPassword(email, password);
        // Authenticate the user
        const user = await app.logIn(credentials);
        // `App.currentUser` updates to match the logged in user
        console.assert(user.id === app.currentUser.id);

        console.log("user logged in with user id" + user.id)
        return user;
      
}

export const Login = () => {
  return (
    <div className=' text-pink-700'>
        
        <button onClick={login}>Login </button>
    </div>
  )
}
