//Component API
//In this tutorial we will explain React component API. 
//We will show you three methods: setState(), forceUpdate and ReactDOM.findDOMNode(). 
import React from 'react';

/*
	Set State

	setState() method is used for updating the state of the component. 
	This method will not replace the state but only add changes to original state.

*/


class App3 extends React.Component{
	constructor() {
		super();
		
		this.state = {
			data: []
		}

		this.setStateHandler = this.setStateHandler.bind(this);
	};


	setStateHandler() {
      var item = "setState..."
      var myArray = this.state.data;
      myArray.push(item)
      this.setState({data: myArray})
   };

   render() {
   		return (
         <div>
            <button onClick = {this.setStateHandler}>SET STATE</button>
            <h4>State Array: {this.state.data}</h4>
         </div>
      );
   }

}


export default App3;

// We started with empty array. Every time we click the button, 
//the state will be updated. If we click it five times, we will get the following output.