import React, {Component} from 'react';
import App from './App';
import Header from './header';

class Main extends Component{
	render(){
		return (<div>
			<Header/>
			<App/>
		       </div>);	
	}
}

React.render(<Main />, document.getElementById('root'));
