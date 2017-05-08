/*
	Force Update

	Sometimes you want to update the component manually. 
	You can achieve this by using forceUpdate() method.	
*/

import React from 'react';

class App31 extends React.Component{
	constructor() {
		super();

	  	this.forceUpdateHandler = this.forceUpdateHandler.bind(this);
	};

  	forceUpdateHandler() {
     	this.forceUpdate();
   	};

   	render(){
      return (
         <div>
            <button onClick = {this.forceUpdateHandler}>FORCE UPDATE</button>
            <h4>Random number: {Math.random()}</h4>
         </div>
      );
   }
}


export default App31;