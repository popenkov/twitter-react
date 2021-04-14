import React, {Component} from 'react';
import './post-list-item.scss';

export default class PostListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            important: false,
            like: false
        };
        this.onImportant = this.onImportant.bind(this); // привязываем для метода контекст
        this.onLike = this.onLike.bind(this);
    }

    onImportant() {
        this.setState(({important}) => ({ //деструктурируем объект и записываем в important значение state.important
            important: !important // чтобы тру становилось фолс и наоборот
        })) 
    }

    onLike() {
        this.setState(({like}) => ({ 
            like: !like 
        })) 
    }



    render () { // возвращает верстку
        const {label, onDelete} = this.props; // так получаем свойства из переданного в PostListItem пропса

        //до этого мы получаем important из пропса, а нам надо из стэйта
        const {important, like} = this.state;

        let classnames = "app-list-item d-flex justify-content-between";
        if (important) {
            classnames += " important"; //пробел перед названием класса, так как мы делаем строку и может быть ошибка
            }
        // у нас есть класс для лайков и прописываем такое же условие
        if (like) {
            classnames += " like"; //пробел перед названием класса, так как мы делаем строку и может быть ошибка
            }

        return ( // он всегда что-то возвращает (верстку)
                <div className={classnames}>
                <span className="app-list-item-label" onClick={this.onLike}>
                    {label}
                </span>
                <div className="d-flex justify-content-center align-items-center">
                    <button type="button" classList="btn-star btn-sm" onClick={this.onImportant}>
                        <i className="fa fa-star"></i>
                    </button>

                    <button 
                    type="button" 
                    classList="btn-trash btn-sm"
                    onClick={onDelete}>
                        <i className="fa fa-trash-o"></i>
                    </button>

                    <i className="fa fa-heart"></i>                
                </div>
                </div>
            )
    
    }
}

