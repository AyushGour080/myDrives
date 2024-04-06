import React from 'react'
import { app } from '../../App';
import { Credentials } from 'realm-web';


const login = async () => {

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
    <div className=" content-center flex flex-col justify-center">
      <div>
        <h1 className=' font-bold text-5xl text-center my-7'>Login</h1>

      </div>
      <div className=' centered-div'>
        <div className=' flex flex-col justify-center space-y-5 '>
          <label htmlFor="user" ><input type="text" name='user' placeholder='Enter email' className=' rounded-lg text-center'/></label>
          <label htmlFor="password"><input type="password" name='password' placeholder='Enter passsword' className=' rounded-lg text-center'/></label>
          <div>
          <button type="submit" className=' bg- px-4 py-1 rounded-lg my-3 w-20 ml-24  border-black ' style={{ borderWidth: "0.5px" }}>login</button>
          </div>
        </div>
      </div>
    </div>
  )
}
