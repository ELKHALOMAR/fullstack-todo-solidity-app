

import React, { Component } from 'react'
import {connect} from 'react-redux';
import {AddTodo, ReadTodos} from '../../actions/todos';

 class Form extends Component {

  constructor(props){
    super(props)
    this.state= {
      data: ''
    }
  }

  
handleSubmit = (event) => {
    // const formData = new FormData(event.target);
    event.preventDefault();
    this.props.AddTodo(this.state.data);
    this.props.ReadTodos();
      

}

handleChange = (event) => {
event.preventDefault()
console.log(event.target.value)
this.setState({
  data:event.target.value
})


}
  render() {
    return (
  <form onSubmit = {this.handleSubmit} className="form-inline d-flex justify-content-center pt-4">

         <div>{this.state.data}</div>

<div className="form-group mb-2">
  <label for="inputPassword2" className="sr-only">Add Todo</label>
  <textarea onChange = {this.handleChange} class="form-control" id="exampleFormControlTextarea1" rows="3" required></textarea>

  {/* <input onChange = {this.handleChange}  type="text" className="form-control" id="inputPassword2" placeholder="Add Todo"/> */}
</div>

<button type="submit" className="btn btn-primary mb-2">ADD</button>

</form>
    )
  }
}

const mapStateToProps = state => ({


  TDcount: state.todos.TDcount


})

export default connect(mapStateToProps, {AddTodo, ReadTodos})(Form)