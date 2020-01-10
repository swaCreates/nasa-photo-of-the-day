import React, {useState, useEffect} from 'react';
import axios from 'axios';
import ApodCard from './ApodCard';



function ApodList() {

    const [photo, setPhoto]= useState([]);

    useEffect(() => {
        axios
        .get('https://api.nasa.gov/planetary/apod?api_key=sKf1PeqzFRWl4kDX1QTznId3B1WBhr2o3GalEcdo')
        .then(res => {
            setPhoto(res.data);
            console.log(res.data)
        })
        .catch(err => {
            console.log('This is in error: ', err);
        })
    }, []);

    

    return (
        <div className='apod-list'>

            {<ApodCard
            
             key={photo}
             name={photo.copyright} 
             date={photo.date} 
             description={photo.explanation} 
             title={photo.title} 
             url={photo.url} 

            />}


                {/* Had trouble running this code to render the data coming from the api */}

            {/* {Object.values(photo).map((data, index) => {
                return <ApodCard key={index} name={data.copyright} date={data.date} description={data.explanation} title={data.title} url={data.url} /> */}
        
        </div>
    )

}

export default ApodList;

