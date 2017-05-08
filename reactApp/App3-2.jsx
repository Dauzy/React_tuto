/*
	Find Dom Node

	For DOM manipulation, we can use ReactDOM.findDOMNode() method. First we need to import react-dom.
*/

import React from 'react';
import ReactDOM from 'react-dom';

class App32 extends React.Component{
	constructor() {
		super();
		
		this.findDOMNodeHandler = this.findDOMNodeHandler.bind(this);		
	};

	findDOMNodeHandler(){
		var myDiv = document.getElementById('myDiv');
		ReactDOM.findDOMNode(myDiv).style.color = 'red';
	}

	render() {
	  return (
         <div>
            <button onClick = {this.findDOMNodeHandler}>FIND DOM NODE</button>
            <div id="myDiv">NODE</div>
         </div>
      );	
	}

}

export default App32;