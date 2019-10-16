import React, { Component } from 'react';

class TodoItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            checked: false,
            background:""
        }
        this.changeColor = this.changeColor.bind(this)   
    }   
    

    changeColor = () => {
        this.setState({
            checked: !this.state.checked,
            background: !this.state.checked===true?"#33FFFF":""
        });
    }
    render() {
        return (
            <div onClick={this.changeColor} className="custom-control custom-checkbox " style={{backgroundColor: this.state.background}}>
                <input type="checkbox" checked={this.state.checked} className="custom-control-input"  />
                <label className="custom-control-label">{this.props.val}</label>
            </div>
        );
    }
}

export default TodoItem;