import React, { Component } from 'react';
import './post-status-filter.css';

export default class PostStatusFilter extends Component {
    constructor (props) {
        super(props);

        //заносим кнопки в массив
        this.buttons = [
            {name: 'all', label: 'Все'},
            {name: 'like', label: 'Понравилось'}
        ]
    }
    
    render () {
       
        
        const buttons = this.buttons.map(({name, label} )=> { //каждый раз создавая новую кнопку я буду передавать элемент массива кнопок. Деструктуризация
            const {filter, onFilterSelect} = this.props;
            const active = filter === name; //значение фильтра сраниваем со значением name. во время мапппинга
            // при совпадении active - станет тру.
            const clazz = active ? 'btn-info': 'btn-ounline-secondary'; //в зависимости от условий будет добавляться класс при маппинге.

            return (
                <button 
                    key={name} 
                    type="button"  
                    className={`btn ${clazz}`}
                    onClick={()=> onFilterSelect(name)}> 
                    
                    {label}
                </button>
            )
        })

        return (
            <div className="btn-group">
                {buttons}
            </div>
        )
    }
    
}

 