import React from 'react';

function ApodCard(props) {


    return (
        <div>
            <div className='apod-card'>
                <div className='img'>
                    <img src={props.url} alt='image of flaming star nebula' />
                </div>
                <div>
                    <h1><span>Topic:</span> {props.title}</h1>
                    <h2><span>Author:</span> {props.name}</h2>
                    <p>{props.description}</p>
                </div>
                </div>
            <div>
                Date Published: {props.date}
            </div>
        </div>
    )
}

export default ApodCard;
