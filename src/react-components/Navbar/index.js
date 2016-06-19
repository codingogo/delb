import React from 'react';
import LoginPopup from './LoginPopup';
import PostPopup from './PostPopup';

class Navbar extends React.Component {
  constructor(){
    super();
    this.state = {
      popupStatus: false
    }
  }

  showPopup = () => {
    this.setState({popupStatus: true});
  };

  hidePopup = () => {
    this.setState({popupStatus: false});
  };

  renderProductSearch(){
    return(
      <section className="product-search-box">
        <input className="product-search form-control" placeholder="Search"/>
      </section>
    );
  }

  renderLogo() {
    return (
      <section>
        <img src="./img/delb.png" className="brand-logo"/><span className="brand-title">delb</span>
      </section>
    );
  }

  renderUser() {
    return (
      <section className="right-side">
        {
          this.props.user
          ?
          // Display Post link here
          <section>
            <span>
              <a href="#" onClick={this.showPopup} className="login-btn">POST</a>
            </span>
            <PostPopup status={this.state.popupStatus} hidePopup={this.hidePopup}/>
          </section>
          :
          // Display Login link here
          <section>
            <a href="#" onClick={this.showPopup} className="login-btn">Login</a>
            <LoginPopup status={this.state.popupStatus} hidePopup={this.hidePopup}/>
          </section>
        }
      </section>
    );
  }

  renderToggleNav() {
    return (
      <section className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header row"> 
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="#">{this.renderLogo()}</a>
            <span className="nav-list-search col-xs-4 col-xs-offset-2">{this.renderProductSearch()}</span>        
          </div> 
          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav navbar-right">
              <li className="nav-list-item">{this.renderUser()}</li>
            </ul>  
          </div>
        </div>           
      </section>
    )
  }

  render(){
    return (
      <section>
        <section>
          {this.renderToggleNav()} 
        </section>
      </section>
    );
  }
}

export default Navbar;