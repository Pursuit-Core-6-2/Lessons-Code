import React from 'react';
import ProductItem from './ProductItem'

class ProductsPage extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [
        { name: "Ultra Boost", manufacturer: "Adidas", price: 160, qty: 5 },
        { name: "Air Force One Low", manufacturer: "Nike", price: 100, qty: 3 },
        { name: "Classic Leather", manufacturer: "Reebok", price: 120, qty: 4 },
        { name: "Sk8-Hi", manufacturer: "Vans", price: 60, qty: 10 }
      ]
    };
  }

  handleBuyClick = (itemName) => {
    const { products } = this.state;

    let newProducts = products.map(product => {
      if (product.name === itemName && product.qty > 0) {
        return {
          name: product.name,
          manufacturer: product.manufacturer,
          price: product.price,
          qty: product.qty - 1
        };
      } else {
        return product;
      }
    });

    console.log('old', products)
    console.log('new', newProducts)
    this.setState({
      products: newProducts
    });
  };

  render() {
    const { products } = this.state;
    let a = 2;

    const listItems = products.map((product) => {
      return (
        <ProductItem
          key={product.name}
          name={product.name}
          manufacturer={product.manufacturer}
          price={product.price}
          qty={product.qty}
          handleBuyClick={this.handleBuyClick}
        />
      )
    })

    return (
      <div className="products-page">
        <ul>
          {listItems}
        </ul>
      </div>
    )
  }
}

export default ProductsPage;
