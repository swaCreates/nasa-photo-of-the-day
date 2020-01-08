import React, {useState, useEffect} from 'react';
import axios from 'axios';


function ApodList() {

    const [photo, setPhoto]= useState([]);

    useEffect(() => {
        axios
        .get('https://api.nasa.gov/planetary/apod?api_key=sKf1PeqzFRWl4kDX1QTznId3B1WBhr2o3GalEcdo')
        .then(res => {
            console.log(res.data);
            setPhoto(res.data);
        })
        .catch(err => {
            console.log('This is in error: ', err);
        })
    }, []);

    return (
        <div>
            
        </div>
    )
}

export default ApodList;

