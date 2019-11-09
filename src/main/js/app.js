const React = require('react');
const ReactDOM = require('react-dom');
import Header from './header';
import Footer from './footer';
import HomeMain from './home_main';
import HomeDemoEcom from './demo/ecom/home_demo_ecom';
import About from './about';
import { Route,BrowserRouter,Redirect,Switch } from 'react-router-dom'

class App extends React.Component {

	render() {
		return (
		<div>
			<Header />
            <BrowserRouter>
			    <Switch>
			      <Route exact path="/home" component={HomeMain} />
			      <Route exact path="/about" component={About} />
			      <Route exact path="/demo/homeDemoEcom" component={HomeDemoEcom} />
                  <Redirect from='*' to='/' />
			    </Switch>
	        </BrowserRouter>
			<Footer />
		</div>
		)
	}
}


ReactDOM.render(
	<App />,
	document.getElementById('react')
)
