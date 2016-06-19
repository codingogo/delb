import React from 'react';
import ProductList from '../Product/ProductList';

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

  renderBanner(){
    return(
      <section>
        <header>
          <img src="http://publishersconvention.com/wp-content/uploads/2014/12/colorful-triangles-background-800x300.jpg" className="landing-banner col-xs-12"/>
        </header>
      </section> 
    );
  }  

  renderSideNavigation(){
    return(
      <section>
        <div className="hidden-xs col-sm-3 col-lg-2">
          lorem jaskdfja jaksd fjalkdsf
        </div>
      </section>
    ) 
  }

  render() {
    return (
      <section className="container">
        <section className="row">
          <section>
            {this.renderBanner()}
          </section>  

          <section>
            {this.renderSideNavigation()}
          </section>
     
          <section className="col-sm-offset-2 col-sm-10">
            {
              this.state.productList
              ?
              <ProductList productList={this.state.productList}/>
              :
              null 
            }
          </section>
   
        </section> 
      </section>   
    );
  }
}

export default HomePage;