const React = require('react');
const ReactDOM = require('react-dom');

export default class Footer extends React.Component {
  render() {
    return (
    		<div style={{marginTop:"2px",backgroundColor:"#343a40",color:"white"}} className="font-small pt-4 mt-4">
    	      <div className="text-center text-md-left">
    	        <div className="row">
    	          <div style={{paddingLeft:"5px"}} className="col-sm-4 col-md-4">
    	            <h5 className="title">Fulcrum Technologies Limited</h5>
    	            <p>
    	              For any inquiries, please feel free to send an email to fulcrum.technologies@gmail.com
    	            </p>
    	          </div>
    	          <div className="col-sm-6 col-md-6">
    	            <h5 className="title">Useful Links</h5>
    	            <ul>
    	              <li className="list-unstyled">
    	                <a href="#!">Home</a>
    	              </li>
    	              <li className="list-unstyled">
    	                <a href="#!">About</a>
    	              </li>
    	              <li className="list-unstyled">
    	                <a href="#!">FAQ</a>
    	              </li>
    	              <li className="list-unstyled">
    	                <a href="#!">Contact Us</a>
    	              </li>
    	            </ul>
    	          </div>
    	        </div>
    	      </div>
    	      <div style={{backgroundColor:"#121720"}} className="footer-copyright text-center py-3">
    	        <div>
    	          &copy; {new Date().getFullYear()} Copyright to <a href="https://www.fulcrum.com"> Fulcrum Technologies Limited.</a>
    	        </div>
    	      </div>
    	    </div>
    );
  }
}