import React from 'react';

function ApodCard(props) {


    return (
        <div className='apod-card'>
            <div className='img'>
                {props.url}
            </div>
            <div>
                <h1>Title: {props.title}</h1>
                <h2>Author: {props.name}</h2>
                <p>{props.description}</p>
            </div>
            <div>
                Date: {props.date}
            </div>
        </div>
    )
}

export default ApodCard;
