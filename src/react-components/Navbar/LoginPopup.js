import React from 'react';
import Popup from './Popup';

class LoginPopup extends React.Component {
  render(){
    return(
      <Popup {...this.props} style="login-popup">
        
        <img src="/img/dummy.png"/>
        
        <h1 className="absolute">(hide)</h1>
        <h2>Login to Join The Community</h2>
        <p>CodeHunt is a Community to share and geek out</p>
        <button className="facebook-btn">Login with Facebook</button>
        <p>We will never post to Facebook without your permission.</p>
     

      </Popup>
    );
  }
}

export default LoginPopup;