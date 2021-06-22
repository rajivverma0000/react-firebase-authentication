import React from 'react';
import 'D:/react-firebase-authentication/src/components/SignIn/layout.css';
import Layout from 'D:/react-firebase-authentication/src/components/SignIn/Layout';
import Navigation from '../Navigation/Navigation'
const Login = ({location}) => {
  return (
    <Layout>
      
     <link rel="stylesheet" href="../components/layout.css"></link>
     <link href="https://fonts.googleapis.com/css?family=Ubuntu" rel="stylesheet"></link>
     <meta name="viewport" content="width=device-width, initial-scale=1" />
     <link rel="stylesheet" href="path/to/font-awesome/css/font-awesome.min.css"></link>
     <title>Sign in</title>
     <div class="main">
     <p class="sign" align="center">Sign in</p>
     <form class="form1">
     <input class="un" type="text" align="center" placeholder="Username"/>
     <input class="pass" type="password" align="center" placeholder="Password"/>
     <a class="submit" align="center">Sign in</a>
     <p class="forgot" align="center"><a href="#">Forgot Password?</a>
     </p>
     </form>
     </div>
     </Layout>
  )
}

export default Login;
