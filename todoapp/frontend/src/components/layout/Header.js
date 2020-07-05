import React, { Component } from 'react'
import {connect} from 'react-redux';
import Proptypes from 'prop-types';
import {fetchData, LoadAddress} from '../../actions/todos';
export class Header extends Component {
    
  componentDidMount() {

    this.props.fetchData();
    
      
  
 }
 componentDidUpdate(x, y){
 
  this.props.LoadAddress();

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
        <a className="nav-link" href="#">Features</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Pricing</a>
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
  Myaddress: state.todos.Myaddress

})
export default connect(mapStateToProps, {fetchData, LoadAddress})(Header)
