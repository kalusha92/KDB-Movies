import React, { useEffect, useState } from 'react';
import {
    Card,
    CardText,
    CardBody,
    CardTitle,
    CardSubtitle,
    CardLink,
    Row,
    Col
} from 'reactstrap';
import {Feeds} from '../../components/dashboard-components';

import mov1 from '../../assets/images/movies/movie1.jpg';
import mov2 from '../../assets/images/movies/movie2.jpg';
import mov3 from '../../assets/images/movies/movie3.jpg';
import mov6 from '../../assets/images/movies/movie6.jpg';
import mov7 from '../../assets/images/movies/movie7.jpg';
import mov8 from '../../assets/images/movies/movie8.jpg';

var count = -1
let thumbnails = [mov1, mov2, mov8, mov3, mov6, mov7]

function addToFavorite(e){
    e.preventDefault()
    let movie_id = e.target.id
    let user_id = sessionStorage.getItem('user_id')
    let url = `http://127.0.0.1:5000/api/favorite?user_id=${user_id}&movie_id=${movie_id}&token=${sessionStorage.getItem('token')}`;
    fetch(url,{
        method: 'POST',
    }).then(window.alert("Added To Favorite"))
}


const Cards = () => {
    const [movies, setMovies] = useState([])
    useEffect(() => {
        let url = `http://127.0.0.1:5000/api/movies/genre/2?token=${sessionStorage.getItem('token')}`;

        fetch(url,{
            method: 'GET',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
        }).then(resp => resp.json())
          .then(res => setMovies(res))
    }, [])

    return (
        <div>
            <ul>
            </ul>
            <h5 className="mb-3">Comedy Movies</h5>
            <Row>
                {   
                    movies.map(movie => {
                            count += 1
                            if (count > 5){
                                count = 0
                            }
                        return (
                        <Col xs="12" md="4">
                        <Card>
                            <CardBody>
                                <CardTitle>{movie.title}</CardTitle>
                                <CardSubtitle>{movie.Date}</CardSubtitle>
                            </CardBody>
                            <img width="100%" src={thumbnails[count]} alt="" />
                            <CardBody>
                                <CardText>{movie.Description}</CardText>
                                <CardLink href="http://localhost:3000/y2bmovies?#/ui-components/starter">See More</CardLink>
                                <CardLink href="" >
                                        <i className="mdi mdi-heart-outline" onClick={addToFavorite} id={movie.id}/>
                                    </CardLink>
                                    <CardText>{movie.ratingcount}</CardText>
                                    <Feeds btnLabel="See More" Description={movie.Description} title={movie.title} Date={movie.Date} ratingcount={movie.ratingcount} duration={movie.duration}/>
                            </CardBody>
                        </Card>
                    </Col>
                    )})
                }
            </Row>

            

        </div>
    );
}

export default Cards;


