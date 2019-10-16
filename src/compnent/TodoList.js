import React, { Component } from 'react';
import TodoItem from './TodoItem';

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value:"",
            listTodo: []
        }
        this.isChange = this.isChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }
    
    isChange = (event) => {
        this.setState({value:event.target.value})
    }

    onSubmit = ()=>{
        let list = this.state.listTodo
        list.push(this.state.value)
        this.setState({listTodo:list})
    }

    render() {
        return (
            
                <div>
                    <div className="card text-white bg-info">
                        <img className="card-img-top" alt="" />
                        <div className="card-body">
                        <h2 className="card-title text-center">TODOLIST</h2>
                        </div>
                    </div>
                    <div className="container mt-4">
                        <div className="row">
                            
                            <form>
                            <div className="btn-group">
                            <input onChange={this.isChange} type="text" className="form-control" aria-describedby="helpId" placeholder = "Insert..." />
                            <button type="reset" className="btn btn-info" onClick={this.onSubmit}>ADD</button>
                            </div>
                            </form>
                        </div>
                        {this.state.listTodo.map((val,index)=>{
                            return (
                                <TodoItem key={index} val={val}/>
                            )
                        })}
                    </div>
                    </div>
            
        );
    }
}

export default TodoList;