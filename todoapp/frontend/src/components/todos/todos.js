import React, { Component } from 'react';
import {ReadTodos} from '../../actions/todos';

import {connect} from 'react-redux';

export class Todos extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             todos:[]
        }
    
    }
    componentDidMount(){
        this.props.ReadTodos()
    }
componentDidUpdate(x,y){
    if(this.props.todo.length !== x.todo.length){
    
        this.setState({todos:this.props.todo})
    }

    console.log('todo',this.state.todos)

    if( this.props.TDcount!==x.TDcount ){
        this.props.ReadTodos();
        console.log('TDcount ', this.props.TDcount )

    }
    if(this.props.todos.length !== x.todos.length){
    
        this.setState({todos:this.props.todos})
    }
    console.log('state', this.state)
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
      <th scope="row">{key}</th>
      <td>{task[0].toString()}</td>
      <td>{task[1].toString()}</td>
      <td><button value="delete" className="btn btn-danger mb-2">delete</button></td>
      <td><button value="completed"className="btn btn-primary mb-2">completed</button></td>
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

export default connect(mapStateToProps, {ReadTodos})(Todos)

  