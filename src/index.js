import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail'
import ApprovalCard from './ApprovalCard';

    const App = () =>{
        return(
            <div className="ui container comments">
                <ApprovalCard>
                <CommentDetail author="Sam" timeAgo="Today at 6:30PM" comment="This is nice blogpost" faker={faker.image.image()}/>
                </ApprovalCard>
                <ApprovalCard>
               <CommentDetail author="Alex" timeAgo="Today at 6:30PM" comment="Weather was very nice" faker={faker.image.image()}/>
               </ApprovalCard>
               <ApprovalCard>
               <CommentDetail author="David" timeAgo="Today at 12:30AM" comment="My dad likes me alot" faker={faker.image.image()}/>
               </ApprovalCard>
            </div>
        );
    }

ReactDOM.render(<App/>,document.querySelector('#root'));