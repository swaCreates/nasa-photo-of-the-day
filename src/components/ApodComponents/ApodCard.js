import React from 'react';
import Moment from 'react-moment';
import {Card, Button, Jumbotron} from 'reactstrap';
import styled from 'styled-components';


function ApodCard(props) {

    //styled components

    const Heading= styled.h1`
    font-size: 55px;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
    font-weight: 300;
    `

    // Trying to create button to change the date. I need to refactor my whole project to implement this inside of ApodList file, instead of here.

    // useEffect(()=> {
    //     const dateChange= (e)=> {
    //         e.persist()
    //         console.log(e)
    //         let date= (e.target.valueAsDate)
    //         date= date.toUTCString();
    //         let formattedDate= moment(date).format('YYYY-MM-DD')
    //         console.log(formattedDate);

    //         axios
    //         .get(`https://api.nasa.gov/planetary/apod?api_key=sKf1PeqzFRWl4kDX1QTznId3B1WBhr2o3GalEcdo&date=${formattedDate}`)
    //         .then(res => setPhoto(res.data))
    //         .catch(err => console.log('This is my error: ', err));
            
            
    //     }
    // }, [])


    return (
        <Card className='reactCard'>
            <Jumbotron className='jumbo'>
                <Heading>Welcome to NASA Photo of the Day</Heading>
            </Jumbotron>
            <div className='apod-card'>
                <div className='img'>
                    <img src={props.url} alt= {props.title} />
                </div>
                <div>
                    <h1 class='font'>Topic: {props.title}</h1>
                    <h2 class='font'>Author: {props.name}</h2>
                    <p class='font'>{props.description}</p>
                </div>
                </div>
            <div>
                <div className='btn'>
                    <Button color='primary' className='btn-1'><span role='img'>👍</span></Button>
                    <Button color='primary' className='btn-2'><span role='img'>👎</span></Button>
                </div>
                Date Published: 
                <Moment format='MM-DD-YYYY'>
                 {props.date}
                </Moment>
                <form>
                    <input /*onChange={dateChange}*/ type='date'></input>
                </form>
            </div>
            
        </Card>
    )
}

export default ApodCard;
