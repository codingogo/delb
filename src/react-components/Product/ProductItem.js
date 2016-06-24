import React from 'react';
import ProductPopup from './ProductPopup';
import Upvote from './Upvote';

class ProductItem extends React.Component {
  constructor(){
    super();
    this.state = {
      productPopupStatus: false
    }
  }

  showProductPopup = () => {
    this.setState({productPopupStatus: true});
  };

  hideProductPopup = () => {
    this.setState({productPopupStatus: false});
  };  


  renderNewWindowIcon(){
    return (
      <a className="product-item-link" href={this.props.link}><span><i className="fa fa-external-link" aria-hidden="true"></i></span></a>
    )
  }

  renderInfoSession(){
    var text = this.props.description;
    var length = 42;
    var trimmedText = text.length > length ? text.substring(0, length - 3) + "...": text;
    console.log(trimmedText);
    return (
      <section className="product-item-info">
        <h5 onClick={this.showProductPopup} className="clickable">{this.props.name}</h5>
          <p class="trimmed-text">{trimmedText}</p>
        <a href="#"><img className="small-avatar" src={this.props.maker.avatar}/></a>
      </section>      
    )
  }

  render() {
    return (
      <li className="product-item">
       
        <Upvote {...this.props} />  
     
        <div className="product-img">  
          <span></span>     
          <img className="product-item-media clickable" src={this.props.media} onClick={this.showProductPopup} />
        </div>         
        <div className="info-area">
          {this.renderInfoSession()}
        </div>
        <div className="new-window-area">
          {this.renderNewWindowIcon()}  
        </div>  
        <ProductPopup {...this.props} status={this.state.productPopupStatus} hidePopup={this.hideProductPopup} />
      </li>
    );
  }
}

export default ProductItem;