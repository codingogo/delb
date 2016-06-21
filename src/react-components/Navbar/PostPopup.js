import React from 'react';
import Popup from './Popup';

class PostPopup extends React.Component{
  handlePost = () => {

  };

  render(){
    return(
      <Popup {...this.props} style="post-popup">
        <h3 className="post-header">New Post</h3>
        <form className="form-horizontal">
          <div className="form-group">
            <label htmlFor="listingTitle" className="col-xs-4 col-sm-3 control-label">Title:</label>
            <div className="col-xs-8 col-sm-9 padding-zero-left">
              <input type="text" className="form-control" id="listingTitle" placeholder="title"/>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="listingDescription" className="col-xs-4 col-sm-3 control-label">Description:</label>
            <div className="col-xs-8 col-sm-9 padding-zero-left">
              <input type="text" className="form-control" id="listingDescription" placeholder="description"/>
            </div> 
          </div> 
          <div className="form-group">
            <label htmlFor="listingLink" className="col-xs-4 col-sm-3 control-label">Web Link:</label>
            <div className="col-xs-8 col-sm-9 padding-zero-left">
              <input type="text" className="form-control" id="listingLink" placeholder="http://www..."/>
            </div>  
          </div>
          <div className="form-group">
            <label htmlFor="listingMedia" className="col-xs-4 col-sm-3 control-label">Media link:</label>
            <div className="col-xs-8 col-sm-9 padding-zero-left">
              <input type="text" className="form-control" id="listingMedia" placeholder="image link here.."/>
            </div>  
          </div>                             

          <footer className="post-footer">
            <button onClick={this.handlePost} className="post-btn">POST</button>
          </footer>
        </form>
      </Popup>
    );
  }
}

export default PostPopup;