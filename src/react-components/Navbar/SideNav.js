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
          name: 'esign',
          url: ''
        },
        {
          id: 2,
          capital: 'E',
          name: 'ntertainment',
          url: ''
        },
        {
          id: 3,
          capital: 'L',
          name: 'ifestyle',
          url: ''
        },
        {
          id: 4,
          capital: 'B',
          name: 'eauty',
          url: ''
        }
      ]
    }
  }
  handleOnOpen(name){
    this.setState({[name] : {isOpen: true}});
    console.log('open');
  }
  handleOnClose(name){
    this.setState({[name] : {isOpen: false}});
    console.log('close');
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