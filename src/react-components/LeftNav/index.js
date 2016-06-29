import React from 'react';
import CategoryList from './CategoryList';


class SideNav extends React.Component {
  constructor(){
    super();
    this.state = { 
      categoryList: [
        {
          id: 1,
          capital: 'D',
          name: 'Design',
          url: '',
          showWhichCategory: {
            showDesign: true,
            showEntertainment: false,
            showLifestyle: false,
            showBeauty: false
          }
        },
        {
          id: 2,
          capital: 'E',
          name: 'Entertainment',
          url: '',
          showWhichCategory: {
            showDesign: false,
            showEntertainment: true,
            showLifestyle: false,
            showBeauty: false
          }
        },
        {
          id: 3,
          capital: 'L',
          name: 'Lifestyle',
          url: '',
          showWhichCategory: {
            showDesign: false,
            showEntertainment: false,
            showLifestyle: true,
            showBeauty: false
          }
        },
        {
          id: 4,
          capital: 'B',
          name: 'Beauty',
          url: '',
          showWhichCategory: {
            showDesign: false,
            showEntertainment: false,
            showLifestyle: false,
            showBeauty: true
          }
        }
      ]
    }
  }

  renderCategory(){
    return(
      <section>
        <ul className="category-canvas">
          {
            this.state.categoryList.map(function(item,idx){
              return <CategoryList key={idx} {...item}/>
            })
          } 
        </ul>           
      </section>
    );
  }

  renderSideNavigation(){
    return(
      <section className="hidden-xs col-sm-2 col-md-2 col-lg-2 left-navbar">
          <h5 className="category-title">CATEGORIES</h5>
          <div>{this.renderCategory()}</div>
      </section>
    ); 
  }

  render() {
    return (
      <section>
        {this.renderSideNavigation()}
      </section>
    );
  }
}

export default SideNav;