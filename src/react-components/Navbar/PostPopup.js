import React from 'react';
import Popup from './Popup';
import Actions from '../../actions';

class PostPopup extends React.Component{
  handlePost = () => {
    var newProduct = {
      name: this.refs.name.value,
      link: this.refs.link.value,
      description: this.refs.description.value,
      media: this.refs.media.value,
      upvote: 0,
      maker: {
        name: this.props.user.name,
        avatar: this.props.user.avatar
      }
    }
    
    Actions.addProduct(newProduct);
  };

  render(){
    return(
      <Popup {...this.props} style="post-popup">
        <h3 className="post-header">New Post</h3>
        <form className="form-horizontal">
          <div className="form-group">
            <label htmlFor="listingTitle" className="col-xs-4 col-sm-3 control-label">Name:</label>
            <div className="col-xs-8 col-sm-9 padding-zero-left">
              <input type="text" className="form-control" id="listingTitle" placeholder="name" ref="name"/>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="listingDescription" className="col-xs-4 col-sm-3 control-label">Description:</label>
            <div className="col-xs-8 col-sm-9 padding-zero-left">
              <input type="text" className="form-control" id="listingDescription" placeholder="description" ref="description"/>
            </div> 
          </div> 
          <div className="form-group">
            <label htmlFor="listingLink" className="col-xs-4 col-sm-3 control-label">Web Link:</label>
            <div className="col-xs-8 col-sm-9 padding-zero-left">
              <input type="text" className="form-control" id="listingLink" placeholder="http://www..." ref="link"/>
            </div>  
          </div>
          <div className="form-group">
            <label htmlFor="listingMedia" className="col-xs-4 col-sm-3 control-label">Media link:</label>
            <div className="col-xs-8 col-sm-9 padding-zero-left">
              <input type="text" className="form-control" id="listingMedia" placeholder="image link here.."  ref="media"/>
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