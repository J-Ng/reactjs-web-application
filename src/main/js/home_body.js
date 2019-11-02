const React = require('react');
const ReactDOM = require('react-dom');

export default class HomeBody extends React.Component {
  render() {
    return (
    	<div>
			<div className="row" style={{backgroundColor:"white",height:"450px",display:"flex",padding:"20px"}}>
			  <div style={{paddingLeft:"5px"}} className="col-sm-4 col-md-4">
	            <h5 className="title">Your Own Brand</h5>
	            <p>
	              Take your company to the next level. Self-service, self-checkout. World-class quality
	            </p>
	          </div>
	          <div className="col-sm-8 col-md-8" style={{flexGrow:"100",backgroundColor:"black"}}>
	            <img src="images/fulcrum-logo.png"
			        style={{marginRight:"5px",backgroundColor:"black"}}>
			  	</img>
	          </div>
			</div>
			<div className="row" style={{backgroundColor:"#D4D4D4" ,height:"450px",padding:"20px"}}>
			  <div className="col-sm-8 col-md-8">
	            <img src="images/fulcrum-logo.png"
			        style={{marginRight:"5px",backgroundColor:"black"}}>
			  	</img>
	          </div>  
			  <div style={{paddingLeft:"5px"}} className="col-sm-4 col-md-4">
	            <h5 className="title">Available. Anytime, anywhere</h5>
	            <p>
	              From your office, from your home. In your laptop and in your phone
	            </p>
	          </div>
			</div>
			<div className="row" style={{backgroundColor:"white",height:"450px",padding:"20px"}}>
			  <div style={{paddingLeft:"5px"}} className="col-sm-4 col-md-4">
	            <h5 className="title">International Audience</h5>
	            <p>
	              Show your product to the world.
	            </p>
	          </div>
	          <div className="col-sm-8 col-md-8">
	            <img src="images/fulcrum-logo.png"
			        style={{marginRight:"5px",backgroundColor:"black"}}>
			  	</img>
	          </div>
			</div>
			<div className="row" style={{backgroundColor:"#D4D4D4" ,height:"450px",padding:"20px"}}>
			  <div className="col-sm-8 col-md-8">
	            <img src="images/fulcrum-logo.png" style={{marginRight:"5px",backgroundColor:"black"}}>
			  	</img>
	          </div>  
			  <div style={{paddingLeft:"5px"}} className="col-sm-4 col-md-4">
	            <h5 className="title">Easy Payment for your clients</h5>
	            <p>
	              Allow online payments to deposit directly into your bank account
	            </p>
	          </div>
			</div>
		</div>
    );
  }
}