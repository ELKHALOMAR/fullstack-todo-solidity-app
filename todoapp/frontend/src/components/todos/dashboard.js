import React, {Fragment, Component } from 'react';
import Form from './form';
import {connect} from 'react-redux';
import {ReadTodos} from '../../actions/todos';
import Todos from './todos';

class Dashboard extends Component {
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
    // if( x.TDcount!==this.props.TDcount ){
    //     this.props.ReadTodos();
    //     console.log('TDcount ', this.props.TDcount )

    // }
    // if(this.props.todos.length !== x.todos.length){
    
    //     this.setState({todos:this.props.todos})
    // }
    // console.log('state', this.state)
    }
    
    render() {
        return (
             <Fragment>
            <Form />
            <Todos todo={this.props.todos}/>
            </Fragment>
        );
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

export default connect(mapStateToProps, {ReadTodos})(Dashboard);
