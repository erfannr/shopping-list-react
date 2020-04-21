import React, { Component } from 'react';

import TodoList from "./TodoList"

export default class Card extends Component {
    constructor() {
        super();
        this.state = {
            shoppingList: [],
            image : "",
            list :"",
            description : "",

        };
    }

    // componentWillMount(){
    //     localStorage.getItem(shoppingList && this.state({
    //         shoppingList:JSON.parse(localStorage.getItem("shoppingList"))
    //     }))
    // }

    componentDidMount = () => {
        const list = window.localStorage.getItem('list');
        const parsedList = JSON.parse(list);
        if(list == null){
            return false
        }
        else{
            this.setState({
                list: parsedList,
            })
            console.log(this.state.list);
        }
    }
    render() {
        return (
            <div className="container">
            
            </div>
        );
    }
}



















// import React from 'react';

// function Card(props) {
//     return (
//         <div className="container">
//             <div className='card mb-3'>
//                 <div className='row no-gutters'>
//                     <div className='col-md-6'>
//                         <img
//                             src={props.list.image}
//                             className='card-img'
//                             alt='shopping-list'
//                         />
//                     </div>
//                     <div className='col-md-6'>
//                         <div className='card-body'>
//                             <h5 className='card-title'>{props.list.list}</h5>
//                             <p className='card-text'>{props.list.description}</p>
//                             <p className='card-text'>
//                                 <small className='text-muted'>
//                                     Last updated 3 mins ago
//                             </small>
//                             </p>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Card;
