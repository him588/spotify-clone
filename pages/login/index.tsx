import { getProviders, signIn } from 'next-auth/react';
import React from 'react';

function Login() {
  return (
    <div>
       <button onClick={()=>signIn("spotify",{callbackUrl:"/home"})} >Login</button>
    </div>
  );
}

export default Login;

