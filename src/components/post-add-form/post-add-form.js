import React, {Component} from 'react';
import { ThemeConsumer } from 'styled-components';
import './post-add-form.css';

export default class PostAddForm extends Component{
    constructor (props) {
        super(props);

        this.state = {
            text: ''
        }

        this.onValueChange=this.onValueChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onValueChange(evt) {
       //в данном случае можно не передавать коллбэк функцию, так как мой новый стэйт не зависит от состояния предыдущего.
       this.setState({
           text : evt.target.value
       })
    }

    onSubmit(evt) {
        evt.preventDefault();
        this.props.onAdd(this.state.text);
        this.setState({
            text: ''
        })
    }

    render() {
    
        return (
            
            <form 
                className="bottom-panel d-flex"
                onSubmit={this.onSubmit} 
                >
                <input
                type="text"
                placeholder="О чем Вы думаете сейчас?"
                className="form-control new-post-label"
                onChange={this.onValueChange}
                value={this.state.text}
                />
                <button
                    type="submit"
                    className="btn btn-outline-secondary">
                    
                    Добавить пост
                    </button>
            </form>
            
        )
    }
    
}
