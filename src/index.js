import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail'

    const App = () =>{
        return(
            <div className="ui container comments">
               <CommentDetail author="Sam" timeAgo="Today at 6:30PM" comment="This is nice blogpost" faker={faker.image.image()}/>
               <CommentDetail author="Alex" timeAgo="Today at 6:30PM" comment="Weather was very nice" faker={faker.image.image()}/>
               <CommentDetail author="David" timeAgo="Today at 12:30AM" comment="My dad likes me alot" faker={faker.image.image()}/>
            </div>
        );
    }

ReactDOM.render(<App/>,document.querySelector('#root'));