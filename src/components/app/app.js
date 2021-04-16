import React, {Component} from 'react';

import AppHeader from '../app-header/';
import SearchPanel from '../search-panel/';
import PostStatusFilter from '../post-status-filter/';
import PostList from '../post-list/';
import PostAddForm from '../post-add-form/';

import './app.css';
/* import style from './App.module.css'; */
import styled from 'styled-components';

const AppBlock = styled.div`
    margin: 0 auto;
    max-width: 800px;
`


export default class App extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            data: [
                {label: 'Going to learn React', important: true, like: false, id: 1},
                {label: 'That is so good', important: false, like: false, id: 2},
                {label: 'I need a brake', important: false, like: false, id: 3}
            ]
        };

        this.deleteItem = this.deleteItem.bind(this);
        this.addItem = this.addItem.bind(this);
        this.onToggleImportant = this.onToggleImportant.bind(this);
        this.onToggleLiked = this.onToggleLiked.bind(this);
 
        this.maxId = 4; //начиная с этого ИД я буду генерировать новые посты. id: this.maxId++
    }

    deleteItem(id) {
        this.setState(({data})=> {
            //узнаем на каком месте стоит пост.
            const index = data.findIndex(elem => elem.id === id)
            
            //создаем 2 части исходного массива до удаленного элемента и после. а затем соединяем. 
            const before = data.slice(0, index);
            const after = data.slice(index + 1);

            const newArr = [...before, ...after];

            return {
                data: newArr
            }
        });
    }

    addItem(body) {
        const newItem = {
            label: body,
            important: false,
            id: this.maxId++
        };

        this.setState(({data})=> {
            const newArr = [...data, newItem]
            return {
                data: newArr
            }
        });
    }

    onToggleImportant(id) {
        this.setState(({data}) => {
            const index = data.findIndex((elem) => elem.id === id); 

            const old = data[index]; 

            const newItem = {...old, important: !old.important}; 

            const newArr = [...data.slice(0, index), newItem, ...data.slice(index+1)];

            return {
                data: newArr
            }
    })

}


    onToggleLiked(id) { //тут нам надо знать предыдущее состояние стэйта, чтобы его поменять.
        this.setState(({data}) => {
            // находим определенный пост, получаю свойство лайк и меняю его состояние. ненапрямую.создать новый массив и заменить дата
            const index = data.findIndex((elem) => elem.id === id); // это у нас ид равен порядоковому номеру поста, в жизни же может быть иначе

            const old = data[index]; //сохраняем полученный пост в переменну

            const newItem = {...old, like: !old.like}; // в олд я так помещю все, что было в объекте по индексы
            //то, что идет за объектом (like) перезапишет свойство старого объекта.
            // теперь в ньюайтем новый объект, с новым измененным свойством лайк
            //теперь надо создать новый массив объектов,чтобы заменить им стэйт

            const newArr = [...data.slice(0, index), newItem, ...data.slice(index+1)];

            return {
                data: newArr
            }
    })

    }


    render() {
        const liked = this.state.data.filter(elem => elem.like === true).length;
        const allPosts = this.state.data.length;



        return (
            <AppBlock>
                <AppHeader 
                    liked={liked}
                    allPosts={allPosts}/>
                <div className="search-panel d-flex">
                    <SearchPanel/>
                    <PostStatusFilter/>
                </div>
                <PostList 
                    posts={this.state.data}
                    onDelete={this.deleteItem}
                    onToggleImportant={this.onToggleImportant} // функция отвечает за стэйт импортант, который будет в каждом компоненте
                    onToggleLiked={this.onToggleLiked}/> {/* // функция отвечает за стэйт лайк, который будет в каждом компоненте */}
                <PostAddForm
                    onAdd={this.addItem}/>
                                
            </AppBlock>
            
            ) 
    }
    
    
}
