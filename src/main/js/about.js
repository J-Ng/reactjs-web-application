const React = require('react');
const ReactDOM = require('react-dom');

export default class About extends React.Component {
  render() {
    return (
    	<div style={{padding:"20px",display:"flex"}}>
		    <div className="video">
		    	<iframe style={{width:"560",height:"315",src:"https://www.youtube.com/embed/h_xleopwba0",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:"true"}}></iframe>
		    </div>
		    <div style={{width:"20px"}}/>
			<div style={{flexGrow:"100"}} className="col-sm-4 col-md-4">
	          <h5 className="title">Avantera Technologies Limited</h5>
	          <p>
	            It started with an idea. Jose and Monica was having a discussion about the IT industry in the Philippines and have to realize there is still so much room for growth in the IT Industry in the Philippines.
	          </p>
	        </div>
		</div>
    );
  }
}