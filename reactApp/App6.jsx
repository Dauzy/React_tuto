// Events

/*
	This is simple example where we only use one component. 
	We are just adding onClick event that will trigger updateState 
	function once the button is clicked.
*/

import React from 'react';
/*

class App6 extends React.Component{
	constructor(props) {
		super(props);
		
		this.state = {
			data :'Initial data...'
		}

		this.updateState = this.updateState.bind(this);
	}

	updateState(){
		this.setState({data: 'Data is update..'})
	}

	render() {
		return (
	        <div>
	            <button onClick = {this.updateState}>CLICK</button>
	            <h4>{this.state.data}</h4>
         	</div>
      	);
	}
}
*/

/*
	Child Events
	When you need to update state of the parent component from its child, 
	you can create event handler (updateState) in the parent component a
	nd pass it as a prop (updateStateProp) to your child component where you can just call it.
*/


class App6 extends React.Component {

   	constructor(props) {
  		super(props);
		
      	this.state = {
         	data: 'Initial data...'
      	}

      	this.updateState = this.updateState.bind(this);
   	};

   	updateState() {
      	this.setState({data: 'Data updated from the child component...'})
   	}

   	render() {
		return (
	     	<div>
		        <Content myDataProp = {this.state.data} 
		           updateStateProp = {this.updateState}></Content>
	     	</div>
		);
   	}
}

class Content extends React.Component {

    render() {
      	return (
        	<div>
	            <button onClick = {this.props.updateStateProp}>CLICK</button>
	            <h3>{this.props.myDataProp}</h3>
         	</div>
      	);
    }
}


export default App6;