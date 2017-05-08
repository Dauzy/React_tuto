//JSX AND COMPONENTS

import React from 'react';

class App extends React.Component {
   render() {

   		var i = 1;
    	{/* adding styles */}
    	var myStyle = {
    		fontSize: 100,
         	color: '#FF0000'
      	}

      	return(

      		

	        <div>
	         	<h1>{1+1}</h1> 
	         	<h1 style={myStyle}>Header</h1>
	            <h2>Content</h2>
	            <h2>{i == 1 ? 'True' : 'False'}</h2>	
	            <p >This is the content!!!</p>
	            <p data-myattribute = "somevalue">This is the content with custom attribute!!!</p>  
	        	<Header/>
	        	<Content/>
	        </div>
      	);
   }
}	


class Header extends React.Component{
	render() {
		return(
			<div>
				<h1>Header by class Header</h1>
			</div>
		);
	}
}

class Content extends React.Component{
	render() {
		return(
			<div>
				<h2>Content by class Content</h2>
			</div>
		);
	}
}

export default App;