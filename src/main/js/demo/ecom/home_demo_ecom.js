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
import { Container, Row, Col, Card, Button, CardGroup, Pagination } from 'react-bootstrap';

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
    	<div style={{padding:"20px", width:"100%", alignItems:"center"}}>
    	   <div>
                <form action="/" method="get" style={{padding:"20px", width:"100%", alignItems:"center"}}>
                    <label htmlFor="header-search" style={{padding:"20px", textAlign:"center"}}>
                        <span className="visually-hidden">Search products</span>
                    </label>
                    <input
                        type="text"
                        id="header-search"
                        placeholder="Shirt, Pants, Socks..."
                        name="s" style={{padding:"20px", width:"80%"}} />
                    <button type="submit">Search</button>
                </form>
           </div>
           <div>
               {/*<productlistview products={this.state.products}/>*/}
               <ProductGridView products={this.state.products}/>
		   </div>
		</div>
    );
  }
}

class ProductGridView extends React.Component {
	render() {
        const products = this.props.products.map((product, index) =>
            <ProductGridItem key={index} product={product}/>
        );
          return (
              <div style={{width:"100%"}}>
                <Container fluid>
                    <Row>
                        {products}
                    </Row>
                </Container>
                <Pagination size="lg" style={{padding:"20px", width:"100%", alignItems:"center"}}>
                    <Pagination.Item key={1} active={true}>
                          1
                    </Pagination.Item>
                    <Pagination.Item key={2} active={false}>
                          2
                    </Pagination.Item>
                    <Pagination.Item key={3} active={false}>
                          3
                    </Pagination.Item>
                </Pagination>
              </div>
          );
	}
}

class ProductGridItem extends React.Component {
	render() {
		return (
		   <Col>
               <Card style={{ width: '250px', height:"400px" }}>
                  <Card.Img variant="top" src={`data:image/jpeg;base64,${this.props.product.img}`} style={{ width: '250px', height:"250px" }} />
                  <Card.Body>
                    <Card.Title>{this.props.product.productName}</Card.Title>
                    <Card.Text>
                      {this.props.product.productDescription}
                    </Card.Text>
                    <Button variant="primary">Add to Cart</Button>
                  </Card.Body>
                </Card>
           </Col>
		)
	}
}

class ProductListView extends React.Component{
	render() {
		const products = this.props.products.map((product, index) =>
			<ProductListItem key={index} product={product}/>
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
