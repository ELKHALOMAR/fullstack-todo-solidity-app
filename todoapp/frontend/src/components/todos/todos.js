import React, { Component } from 'react';


export class Todos extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             todos:[]
        }
    }
componentDidUpdate(x,y){
    if(this.props.todo.length !== x.todo.length){
    
        this.setState({todos:this.props.todo})
    }

    console.log('todo',this.state.todos)
}
    render() {
        return (  
<div className="table-responsive">

<table className="table table-striped">

<thead>
    <tr>
      <th>#</th>
      <th>todo</th>
      <th>state</th>
    </tr>
  </thead>
  <tbody>
  {this.state.todos.map((task ,key) =>{
      return(
        <tr key = {key}>
      <th scope="row">{key}</th>
      <td>{task[0].toString()}</td>
      <td>{task[1].toString()}</td>
    </tr>
      )})}

      </tbody>
</table>
</div>


       );
    }}



export default Todos

  {/* <div className="table-responsive">

<table className="table table-striped">


  <thead>
    <tr>
      <th>#</th>
      <th>todo</th>
      <th>state</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <th scope="row">1</th>
      <td></td>
      <td>Moss</td>
    </tr>

    <tr>
      <th scope="row">2</th>
      <td>Anna</td>
      <td>Wintour</td>
    </tr>

    <tr>
      <th scope="row">4</th>
      <td>Jerry</td>
      <td>Horwitz</td>
    </tr>

  </tbody>
 
</table>

</div> */}