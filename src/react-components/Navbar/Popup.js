import React from 'react';

class Popup extends React.Component {
  renderPopupContent(){
    return(
      <section className="popup">
        <section className="popup-wrap">
          <a href="" onClick={this.props.hidePopup}><span><i className="fa fa-2x fa-times popup-close"></i></span></a>
        </section>
        <section className={"popup-content " + this.props.style}>
         <section>{this.props.children}</section>
        </section>
      </section>
    );
  }

  render() {
    return (
      <section>
        {
          this.props.status? this.renderPopupContent() : null
        }
      </section>
    );
  }
}

export default Popup;