const React = require('react');
const ReactDOM = require('react-dom');

export default class Footer extends React.Component {
  render() {
    return (
    		<div style={{marginTop:"2px",backgroundColor:"#343a40",color:"white"}} className="font-small pt-4 mt-4">
    	      <div className="text-center text-md-left" style={{paddingLeft:"20px",paddingRight:"20px"}}>
    	        <div className="row">
    	          <div style={{paddingLeft:"5px"}} className="col-sm-3 col-md-3">
    	            <h5 className="title">React Technologies Limited</h5>
    	            <p>
    	              For any inquiries, please feel free to send an email to blackcurrant.solutions@gmail.com
    	            </p>
    	          </div>
    	          <div className="col-sm-2 col-md-2">
    	            <h5 className="title">Media</h5>
    	            <hr style={{border:"1px solid white"}}/>
    	            <ul><li className="list-unstyled"><a href="#!">News and Stories</a></li>
    	              <li className="list-unstyled"><a href="#!">Ask us anything</a></li>
    	              <li className="list-unstyled"><a href="#!">Terms and Conditions</a></li>
    	              <li className="list-unstyled"><a href="#!">Privacy Policy</a></li>
    	            </ul>
    	          </div>
    	          <div className="col-sm-2 col-md-2">
	  	            <h5 className="title">Company</h5>
	  	            <hr style={{border:"1px solid white"}}/>
	  	            <ul><li className="list-unstyled"><a href="#!">About Us</a></li>
	  	              <li className="list-unstyled"><a href="#!">Team</a></li>
	  	              <li className="list-unstyled"><a href="#!">We're Hiring!'</a></li>
	  	              <li className="list-unstyled"><a href="#!">Contact Us</a></li>
	  	            </ul>
	  	          </div>
		          <div className="col-sm-2 col-md-2">
		            <h5 className="title">Business</h5>
		            <hr style={{border:"1px solid white"}}/>
		            <ul><li className="list-unstyled"><a href="#!">Advertise with React Technologies</a></li>
		              <li className="list-unstyled"><a href="#!">Priority Placement</a></li>
		              <li className="list-unstyled"><a href="#!">Site Map</a></li>
		              <li className="list-unstyled"><a href="#!">Corporate Sponsoship</a></li>
		            </ul>
		          </div>
		          <div className="col-sm-2 col-md-2">
		            <h5 className="title">Countries</h5>
		            <hr style={{border:"1px solid white"}}/>
		            <ul><li className="list-unstyled"><a href="#!">Singapore</a></li>
		              <li className="list-unstyled"><a href="#!">Hong Kong</a></li>
		              <li className="list-unstyled"><a href="#!">Taiwan</a></li>
		              <li className="list-unstyled"><a href="#!">China</a></li>
		            </ul>
		          </div>
    	        </div>
    	      </div>
    	      <div style={{backgroundColor:"#121720"}} className="footer-copyright text-center py-3">
    	        <div>
    	          &copy; {new Date().getFullYear()} Copyright to <a href="https://www.blackcurrant.com"> React Technologies Limited.</a>
    	        </div>
    	      </div>
    	    </div>
    );
  }
}