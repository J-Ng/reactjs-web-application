const React = require('react');
const ReactDOM = require('react-dom');

export default class Home extends React.Component {
  render() {
    return (
    	<div>
			<div style={{backgroundColor:"white",paddingLeft:"20px",paddingRight:"20px",textAlign:"center",width:"100%",height:"300px"}}>
			  <div style={{paddingLeft:"5px",float:"left",width:"50%",textAlign:"left"}}>
			  <br/>
	            <h2 className="title">Connect</h2>
				  <br/>
	            <h6>
	              Take your company to the next level. Self-service, self-checkout. World-class quality
	            </h6>
	          </div>
	          <div style={{paddingRight:"5px",float:"right",width:"50%"}}>
	            <img src="images/connect.jpg"
			        style={{marginRight:"5px",height:"300px", width:"450px"}}>
			  	</img>
	          </div>
			</div>
			<div style={{backgroundColor:"white",paddingLeft:"20px",paddingRight:"20px",textAlign:"center",width:"100%",height:"300px"}}>
			  <div style={{paddingLeft:"5px",float:"left",width:"50%"}}>
	            <img src="images/business.jpg"
			        style={{marginRight:"5px", height:"300px", width:"450px"}}>
			  	</img>
	          </div>  
			  <div style={{paddingRight:"5px",float:"right",width:"50%",textAlign:"left"}}>
			  <br/>
	            <h2 className="title">Grow</h2>
				  <br/>
	            <h6>
	              From your office, from your home. In your laptop and in your phone
	            </h6>
	          </div>
			</div>
		</div>
    );
  }
}