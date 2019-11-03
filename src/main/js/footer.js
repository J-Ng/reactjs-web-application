const React = require('react');
const ReactDOM = require('react-dom');

export default class Footer extends React.Component {
  render() {
    return (
    		<div style={{marginTop:"2px",backgroundColor:"#343a40",color:"white"}} className="font-small pt-4 mt-4">
    	      <div className="text-center text-md-left" style={{paddingLeft:"20px",paddingRight:"20px"}}>
    	        <div className="row">
    	          <div style={{paddingLeft:"5px"}} className="col-sm-3 col-md-3">
    	            <h5 className="title">Avantera Technologies Limited</h5>
    	            <p>
    	              For any inquiries, please feel free to send an email to avantera.technologies@gmail.com
    	            </p>
    	          </div>
    	          <div className="col-sm-2 col-md-2">
    	            <h5 className="title">Useful Links 1</h5>
    	            <hr style={{border:"1px solid white"}}/>
    	            <ul><li className="list-unstyled"><a href="#!">Home</a></li>
    	              <li className="list-unstyled"><a href="#!">About</a></li>
    	              <li className="list-unstyled"><a href="#!">FAQ</a></li>
    	              <li className="list-unstyled"><a href="#!">Contact Us</a></li>
    	            </ul>
    	          </div>
    	          <div className="col-sm-2 col-md-2">
	  	            <h5 className="title">Useful Links 2</h5>
	  	            <hr style={{border:"1px solid white"}}/>
	  	            <ul><li className="list-unstyled"><a href="#!">Home</a></li>
	  	              <li className="list-unstyled"><a href="#!">About</a></li>
	  	              <li className="list-unstyled"><a href="#!">FAQ</a></li>
	  	              <li className="list-unstyled"><a href="#!">Contact Us</a></li>
	  	            </ul>
	  	          </div>
		          <div className="col-sm-2 col-md-2">
		            <h5 className="title">Useful Links 3</h5>
		            <hr style={{border:"1px solid white"}}/>
		            <ul><li className="list-unstyled"><a href="#!">Home</a></li>
		              <li className="list-unstyled"><a href="#!">About</a></li>
		              <li className="list-unstyled"><a href="#!">FAQ</a></li>
		              <li className="list-unstyled"><a href="#!">Contact Us</a></li>
		            </ul>
		          </div>
		          <div className="col-sm-2 col-md-2">
		            <h5 className="title">Useful Links 4</h5>
		            <hr style={{border:"1px solid white"}}/>
		            <ul><li className="list-unstyled"><a href="#!">Home</a></li>
		              <li className="list-unstyled"><a href="#!">About</a></li>
		              <li className="list-unstyled"><a href="#!">FAQ</a></li>
		              <li className="list-unstyled"><a href="#!">Contact Us</a></li>
		            </ul>
		          </div>
    	        </div>
    	      </div>
    	      <div style={{backgroundColor:"#121720"}} className="footer-copyright text-center py-3">
    	        <div>
    	          &copy; {new Date().getFullYear()} Copyright to <a href="https://www.avanteratechnologies.com"> Avantera Technologies Limited.</a>
    	        </div>
    	      </div>
    	    </div>
    );
  }
}