import React, {useEffect, useState} from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle, CardSubtitle, CardColumns, CardGroup, CardDeck, CardLink, CardHeader, CardFooter, Button, Row, Col
} from 'reactstrap';
import { MDBInput } from "mdbreact";
import img7 from '../../assets/images/background/img5.jpg';

var email = ""
var password = ""

function onEmailChange(e) {
         e.preventDefault();
        email = e.target.value
}
function onPasswordChange(e) {
         e.preventDefault();
        password = e.target.value
}
function SignInHandler(e) {
        e.preventDefault();

  
        let url = `http://127.0.0.1:5000/api/authenticate?email=${email}&password=${password}`;

        fetch(url,{
            method: 'GET',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
        }).then(resp => resp.json())
        .then(res => {
            if (res['message'] == 'Incorrect credentials'){
                console.log(res['message']);
                document.getElementById('message').innerHTML = "Incorrect credentials"
            }
            else if (res['message'] == 'validated') {
                sessionStorage.setItem('user_id',res['user_id'])
                sessionStorage.setItem('email',email)
                sessionStorage.setItem('token',res['token'])
                window.location.href = "http://localhost:3000/y2bmovies#/ui-components/card";
            }
        })
}

const divStyle = {
    color: 'blue',
    postition: "absolute",
    overflow: "visible"
  };

const SignIn = () => {
    return (
    <div style={divStyle}>
                <Row>
            <Col sm={{'offset': 4, 'order': 2, 'size': 3}}>
            <Card inverse className="text-center" style={{
                    'backgroundColor': 'RGBA(0,0,0,0)',
                    'borderColor': 'RGBA(0,0,0,0)',
                    margin:'6.7rem'
                }} >
                    <CardImg width="100%" alt="" />
                    <CardImgOverlay>
                        <CardTitle tag="h1"></CardTitle>
                        <CardText></CardText>
                        <form onSubmit={SignInHandler}>
                        </form>
                    </CardImgOverlay>
                </Card>
            </Col>
        </Row>
        <Row>
            <col />
            <Col sm={{'offset': 4, 'order': 2, 'size': 4}}>
            <Card inverse className="text-center" style={{
                    'backgroundColor': '#333',
                    'borderColor': '#333',
                    'marginLeft': '4rem',
                }} >
                    <CardImg width="100%" src={img7} alt="Card image cap" />
                    <CardImgOverlay>
                    <CardTitle tag="h3" style={{'color':'rgba(0,0,0,0)'}}> . </CardTitle> 
                    <CardTitle tag="h3" style={{'color':'rgba(0,0,0,0)'}}> . </CardTitle>  
                        <CardTitle tag="h1">Sign In</CardTitle>
                        <CardText id="message"> We've Missed You! </CardText>
                        <form onSubmit={SignInHandler}>
                            <MDBInput hint="Email" type="email" onChange={onEmailChange}/>
                            <MDBInput hint="Password" type="password" onChange={onPasswordChange}/>
                            <CardTitle tag="h6" style={{'color':'rgba(0,0,0,0)'}}> . </CardTitle> 
                            <Button className="btn" color="info" onclick={SignInHandler}> Sign In </Button>
                        </form>
                        <CardTitle tag="h3" style={{'color':'rgba(0,0,0,0)'}}> . </CardTitle> 
                        <a href="http://localhost:3000/y2bmovies#/signup/"><CardTitle tag="h4">Don't have an account yet?</CardTitle></a>
                    </CardImgOverlay>
                </Card>
            </Col>
        </Row>
    </div>
    );
}

export default SignIn;
