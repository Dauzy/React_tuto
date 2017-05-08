import React from 'react';
// Components
class App1 extends React.Component{
	constructor() {
		super();
		
		this.state = {
			data: 
			[
	            {
	               "id":1,
	               "name":"Foo",
	               "age":"20"
	            },
					
	            {
	               "id":2,
	               "name":"Bar",
	               "age":"30"
	            },
					
	            {
	               "id":3,
	               "name":"Baz",
	               "age":"40"
	            }
         	]
		}
	}


	render(){
		return(

			<div>
	            <Header/>
	            <table>
	               <tbody>
	                  {this.state.data.map((person, i) => <TableRow key = {i} data = {person} />)}
	               </tbody>
	            </table>
         	</div>
		);
	
			{
		//Observe que estamos usando key = {i} dentro de la función map (). 
		//Esto ayudará a React a actualizar sólo los elementos necesarios 
		//en lugar de volver a representar la lista completa cuando algo cambie. 
		//Es enorme aumento de rendimiento para un mayor número de elementos creados dinámicamente.
	}
	}
}


class Header extends React.Component {
   render() {
      return (
         <div>
            <h1>Header</h1>
         </div>
      );
   }
}



class TableRow extends React.Component {
   render() {
      return (
         <tr>
            <td>{this.props.data.id}</td>
            <td>{this.props.data.name}</td>
            <td>{this.props.data.age}</td>
         </tr>
      );
   }
}

export default App1;