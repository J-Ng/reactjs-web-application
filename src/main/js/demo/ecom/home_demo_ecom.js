const React = require('react');
const ReactDOM = require('react-dom');
const client = require('./../../client');
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { Card, Button, CardGroup } from 'react-bootstrap';

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
			<ProductListView products={this.state.products}/>
			<ProductGridView />
		</div>
    );
  }
}

class ProductListView extends React.Component{
	render() {
		const products = this.props.products.map(product =>
			<ProductListItem key={product} product={product}/>
		);
		  return (
		    <List style={{width:"100%",maxWidth:"360",backgroundColor:"theme.palette.background.paper"}}>
		      {products}
		    </List>
		  );
	}
}

class ProductListItem extends React.Component {
	render() {
		return (
			<ListItem alignItems="flex-start">
		        <ListItemAvatar>
		          <Avatar src="/images/no_image.png" />
		        </ListItemAvatar>
		        <ListItemText
		          primary={this.props.product.productName}
		          secondary={
		            <React.Fragment>
		              <Typography component="span" variant="body2" style={{display:"inline"}} color="textPrimary">
		                {this.props.product.productDescription}
		              </Typography>
		              {this.props.product.brand}
		            </React.Fragment>
		          }
		        />
		      <Divider variant="inset" component="li" />
		   </ListItem>
		)
	}
}

class ProductGridView extends React.Component {
	render() {
		return (
				<CardGroup>
				<Card style={{ width: '18rem' }}>
				  <Card.Img variant="top" src="/images/no_image.png" />
				  <Card.Body>
				    <Card.Title>Card Title</Card.Title>
				    <Card.Text>
				      Some quick example text to build on the card title and make up the bulk of
				      the card's content.
				    </Card.Text>
				    <Button variant="primary">Go somewhere</Button>
				  </Card.Body>
				</Card>
				<Card style={{ width: '18rem' }}>
				  <Card.Img variant="top" src="/images/no_image.png" />
				  <Card.Body>
				    <Card.Title>Card Title</Card.Title>
				    <Card.Text>
				      Some quick example text to build on the card title and make up the bulk of
				      the card's content.
				    </Card.Text>
				    <Button variant="primary">Go somewhere</Button>
				  </Card.Body>
				</Card>
				<Card style={{ width: '18rem' }}>
				  <Card.Img variant="top" src="/images/no_image.png" />
				  <Card.Body>
				    <Card.Title>Card Title</Card.Title>
				    <Card.Text>
				      Some quick example text to build on the card title and make up the bulk of
				      the card's content.
				    </Card.Text>
				    <Button variant="primary">Go somewhere</Button>
				  </Card.Body>
				</Card>
				</CardGroup>
			  )
	}
}