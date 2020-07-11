import React, { Component } from 'react';
import {ReadTodos, CompleteTodo} from '../../actions/todos';

import {connect} from 'react-redux';

export class Todos extends Component {
    constructor(props) {
        super(props)
        this.state = {
             todos:[],
             TDcount:this.props.TDcount
            //  length: this.props.todos.length
        }
    
    }
    componentDidMount(){
        this.props.ReadTodos()
    }
componentDidUpdate(x,y){
    if(this.props.TDcount!== x.TDcount){
    this.props.ReadTodos()
}
// console.log(this.props.TDcount, x.TDcount)

    if(this.props.todos !== x.todos){

        this.setState({todos:this.props.todos})
    }
}

handlechange = () =>{
    console.log(' change made')
}

handleComplete = (arg) =>{
    // e.preventDefault()
    
    this.props.CompleteTodo(arg)
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
     <th>delete</th>
     <th>complete</th>
    </tr>
  </thead>
  <tbody>
  {this.state.todos.map((task ,key) =>{
      return(
        <tr key = {key}>
      <th scope="row">{key} | {task[3].toString()}</th>
      <td>{task[0].toString()}</td>
      <td onChange = {() =>{this.handlechange()}}>{task[1].toString()}</td>
      <td><button  value="delete" className ="btn btn-danger mb-2">delete</button></td>
      <td><button onClick = {() =>{this.handleComplete(task[3].toString())}} value="completed"className="btn btn-primary mb-2">completed</button></td>
    </tr>
      )})}

      </tbody>
</table>
</div>


       );
    }}


    const mapStateToProps = state => ({

        web3: state.todos.web3,
        Myaddress: state.todos.Myaddress,
        connected: state.todos.connected,
        TDaddress: state.todos.TDaddress,
        TDcount: state.todos.TDcount,
        todos: state.todos.todos,
        complededLoop: state.todos.complededLoop,
        todoContract:state.todos.todoContract
        
      
      })

export default connect(mapStateToProps, {ReadTodos, CompleteTodo})(Todos)

  