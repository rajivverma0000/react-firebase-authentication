import React from 'react';
import 'D:/react-firebase-authentication/src/components/SignIn/layout.css';
import Layout from '../SignIn/Layout.js';
 
const Login = ({location}) => {
  return (
    <Layout>
      
     <link rel="stylesheet" href="../components/layout.css"></link>
     <link href="https://fonts.googleapis.com/css?family=Ubuntu" rel="stylesheet"></link>
     <meta name="viewport" content="width=device-width, initial-scale=1" />
     <link rel="stylesheet" href="path/to/font-awesome/css/font-awesome.min.css"></link>
     <title>Sign in</title>
     <div class="main1">
     <p class="sign" align="center">Sign up</p>
     <form class="form1">
     <input class="un" id="userid"type="text" align="center"placeholder="User ID"/>
     <input class="pass" id="password"type="text" align="center" placeholder="Password"/>
     <input class="pass" id="location"type="text" align="center" placeholder="Location"/>
     <form class="form2"action="upload.php" method="post" enctype="multipart/form-data">
     <input class="un" type="file" name="fileToUpload" id="fileToUpload"/>
     <input class="un" type="submit" value="Upload Image" name="submit"/>
     </form>

     <a class="submit" align="center" onClick="signup">Sign up</a>
     </form>
     </div>
     </Layout>
  )
}

export default Login;
