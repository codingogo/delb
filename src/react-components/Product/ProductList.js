import React from 'react';
import ProductItem from './ProductItem';

var ProductList = React.createClass( {
  render: function() {
    return (
      <ul className="product-list">
          { 
            this.props.productList.map(function(item,idx){
              return <ProductItem key={idx} pid={item.key} {...item}/>
            })
          }      
      </ul>
    );
  }
});

export default ProductList;






