import React from 'react';

import ProductList from '../Product/ProductList';
import SideNav from '../Navbar/SideNav';
import RightNav from '../Navbar/RightNav';


class HomePage extends React.Component {
  constructor() {
    super();
    this.state = {
      productList: [
        {
          id: 1,
          name: 'Codecademy',
          link: 'https://codecademy.com',
          media: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcT5CrWnvAtb-y_CbD4o7185O6oU19bchop5p3v60GyUgbR95o1zQw',
          upvote: 169,
          description: 'Code for anyone',
          maker: {
            name: 'lee',
            avatar: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcT5CrWnvAtb-y_CbD4o7185O6oU19bchop5p3v60GyUgbR95o1zQw'
          }
        },
        {
          id: 2,
          name: 'CodeOrg',
          link: 'https://code.org',
          media: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcT5CrWnvAtb-y_CbD4o7185O6oU19bchop5p3v60GyUgbR95o1zQw',
          upvote: 369,
          description: 'Code for the people',
          maker: {
            name: 'joe',
            avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWC7-nifZMQ4vSpLU9l8huofiPNf-P6OOD94NloW5Ez7SDjgfH'
          }
        }
      ]
    }
  }

  renderLandingBanner() {
    return(
      <section className="landing-banner">
      </section>
    );
  }

  renderProductList() {
    return(
      <section className="col-xs-12 col-sm-10 col-md-10 col-lg-8 product-list-canvas">
        {
          this.state.productList
          ?
          <ProductList productList={this.state.productList}/>
          :
          null 
        }
      </section>      
    );
  }

  renderSideNav() {
    return (
      <SideNav/>
    );
  }

  renderRightNav() {
    return (
      <RightNav/>
    );
  }


  render() {
    return (
      <section className="container">
        <section className="row">
         
            {this.renderLandingBanner() }
        
          
            {this.renderSideNav()}
     
          
            {this.renderProductList()}
          
            {this.renderRightNav()}
        </section> 
      </section>   
    );
  }
}

export default HomePage;