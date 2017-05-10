// ReactJS - Forms

/*
	In example below we are setting input form with value = {this.state.data}. 
	This allow us to update state whenever input value changes. We are using onChange 
	event that will watch input changes and update state accordingly.
*/

import React from 'react'

class App5 extends React.Component{
	constructor(props) {
		super(props);
		
		this.state = {
			data: 'Initia data...'
		}

		this.updateState = this.updateState.bind(this)

	};

	updateState(e){
		this.setState({data: e.target.value});
	}

   	render() {
    	return (
	        <div>
	            <input type = "text" value = {this.state.data} 
	               onChange = {this.updateState} />
        	    <h4>{this.state.data}</h4>
	        </div>
      	);
   	}
}

export default App5;