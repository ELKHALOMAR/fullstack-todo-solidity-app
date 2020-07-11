import React, { Component } from 'react'
import {connect} from 'react-redux';
import Proptypes from 'prop-types';
import {ReadTodos,TodoCount, LoadBC_FAIL, fetchData, LoadAddress, LoadBC_isListening, LoadBC_Request} from '../../actions/todos';
import todos from '../../reducers/todos';
export class Header extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        TDcount : ''
      }
    }
    


componentDidMount() {

    this.props.fetchData();
    this.props.TodoCount();
    this.props.LoadAddress()


 }
componentDidUpdate(x, y){
  this.props.TodoCount()

//  console.log('ThisProp_TDcount', this.props.TDcount,'PreviousProps_TDcount', x.TDcount,'State_TDcount', this.state.TDcount)
  // this.props.TodoCount()
  //  console.log('xx', this.props.TDcount, x.TDcount)
if(this.props.TDcount !== x.TDcount ){
this.setState({
  TDcount:  this.props.TDcount
})
console.log('xx2', this.state.TDcount, x.TDcount)

}
// if(this.props.Myaddress !== x.Myaddress){
// this.props.LoadAddress()
// }
 }


 
  render() {


        return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="#">Navbar</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavDropdown">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <a className="nav-link" href="#">{this.props.Myaddress} <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">{this.state.TDcount}</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">{this.props.connected?<h5 style ={{color: "green"}}>connected</h5>:<h1 style={{color: "red"}}>disconnected</h1>}
</a>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown link
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a className="dropdown-item" href="#">Action</a>
          <a className="dropdown-item" href="#">Another action</a>
          <a className="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
    </ul>
  </div>
</nav>
        )
    }
}


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
export default connect(mapStateToProps, {ReadTodos, TodoCount, LoadBC_FAIL, fetchData, LoadAddress, LoadBC_isListening, LoadBC_Request})(Header)
