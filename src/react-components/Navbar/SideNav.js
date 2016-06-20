import React from 'react';

class SideNav extends React.Component {

  renderCategory(){
    return(
      <section>
        
      </section>
    );
  }

  renderSideNavigation(){
    return(
      <section className="hidden-xs col-sm-2 col-lg-2 left-navbar">
          lorem jaskdfja jaksd fjalkdsf
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