const React = require('react');
const ReactDOM = require('react-dom');
const client = require('./client');
import Header from './header';
import Footer from './footer';
import Home from './home';
import About from './about';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'

class App extends React.Component {

	constructor(props) {
		super(props);
		this.state = {employees: []};
	}

	componentDidMount() {
		client({method: 'GET', path: '/api/products'}).done(response => {
			this.setState({products: response.entity._embedded.products});
		});
	}

	render() {
		return (
		<div>
			<Header />
			  <Router>
			    <div>
			      <Route path="/home" component={Home} />
			      <Route path="/about" component={About} />
			    </div>
			  </Router>
			  <ProductList products={this.state.products}/>
			<Footer />
		</div>
		)
	}
}

class ProductList extends React.Component{
	render() {
		const products = this.props.products.map(product =>
			<Product key={product._links.self.href} product={product}/>
		);
		return (
			<table>
				<tbody>
					<tr>
						<th>Product Name</th>
						<th>Product Description</th>
						<th>Brand</th>
					</tr>
					{employees}
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

ReactDOM.render(
	<App />,
	document.getElementById('react')
)
