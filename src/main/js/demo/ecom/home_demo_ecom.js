const React = require('react');
const ReactDOM = require('react-dom');
const client = require('./../../client');

export default class HomeDemoEcom extends React.Component {

  constructor(props) {
	super(props);
	this.state = {products: []};
  }
	
  componentDidMount() {
	client({method: 'GET', path: '/api/test'}).done(response => {
			this.setState({products: response.entity});
	});
  }

  render() {
    return (
    	<div style={{padding:"20px",display:"flex"}}>
			<ProductList products={this.state.products}/>
		</div>
    );
  }
}

class ProductList extends React.Component{
	render() {
		const products = this.props.products.map(product =>
			<Product key={product} product={product}/>
		);
		return (
			<table>
				<tbody>
					<tr>
						<th>Product Name</th>
						<th>Product Description</th>
						<th>Brand</th>
					</tr>
					{products}
				</tbody>
			</table>
		)
	}
}

class Product extends React.Component{
	render() {
		return (
			<tr>
				<td>{this.props.product.productName}</td>
				<td>{this.props.product.productDescription}</td>
				<td>{this.props.product.brand}</td>
			</tr>
		)
	}
}