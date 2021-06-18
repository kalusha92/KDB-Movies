import React, { useEffect, useState } from 'react';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter} from 'mdbreact';
import {
    Modal, ModalHeader, ModalBody, ModalFooter,
    Card,
    CardImg,
    CardImgOverlay,
    CardText,
    CardBody,
    CardTitle,
    CardSubtitle,
    CardColumns,
    CardGroup,
    CardDeck,
    CardLink,
    CardHeader,
    CardFooter,
    Button,
    Row,
    Col
} from 'reactstrap';
import {Feeds} from '../../components/dashboard-components';

import mov1 from '../../assets/images/movies/movie1.jpg';
import mov2 from '../../assets/images/movies/movie2.jpg';
import mov3 from '../../assets/images/movies/movie3.jpg';
import mov4 from '../../assets/images/movies/movie4.jpeg';
import mov6 from '../../assets/images/movies/movie6.jpg';
import mov7 from '../../assets/images/movies/movie7.jpg';
import mov8 from '../../assets/images/movies/movie8.jpg';

import img4 from '../../assets/images/big/img4.jpg';
import img5 from '../../assets/images/big/img5.jpg';
import img6 from '../../assets/images/big/img6.jpg';
import img7 from '../../assets/images/background/img5.jpg';

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
        let url = `http://127.0.0.1:5000/api/movies?token=${sessionStorage.getItem('token')}`;

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
            <h5 className="mb-3">All Movies</h5>
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


