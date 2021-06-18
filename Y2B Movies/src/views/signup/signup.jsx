import React from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardTitle, Button, Row, Col
} from 'reactstrap';
import { MDBInput } from "mdbreact";

import img7 from '../../assets/images/background/img5.jpg';

var fullname = ""
var password = ""
var email = ""


function onFullnameChange(e) {
    e.preventDefault();
    fullname = e.target.value
}
function onEmailChange(e) {
    e.preventDefault();
    email = e.target.value
}
function onPasswordChange(e) {
    e.preventDefault();
    password = e.target.value
}

function SignUpHandler(e) {
    e.preventDefault();

    let url = `http://127.0.0.1:5000/api/signup?`;

    fetch(url,{
        method: 'POST',
        headers:{
            'Accept':'application/json',
            'Content-Type':'application/json'
        },
        body: JSON.stringify({'fullname':fullname, 'email':email, 'password':password})
    }).then(resp => resp.json())
    .then(res => {
        if (res['message'] == 'Email Already Exists'){
            document.getElementById('message').innerHTML = "Email Already Exists"
        }
        else if (res['message'] == 'Account Created') {
            window.location.href = "http://localhost:3000/y2bmovies#/signin/";
        }
    })

}

const SignUp = () => {

    return (
    <div>
        <Row>
            <Col sm={{'offset': 4, 'order': 2, 'size': 1}}>
            <Card inverse className="text-center" style={{
                    'backgroundColor': 'RGBA(0,0,0,0)',
                    'borderColor': 'RGBA(0,0,0,0)',
                    'margin':'4.7rem'
                }} >
                    <CardImg width="100%" alt="" />
                    <CardImgOverlay>
                        <CardTitle tag="h1"></CardTitle>
                        <CardText></CardText>
                        <form onSubmit={SignUpHandler}>
                        </form>
                    </CardImgOverlay>
                </Card>
            </Col>
        </Row>
        <Row>
            <Col sm={{'offset': 4, 'order': 2, 'size': 4}}>
            <Card inverse className="text-center">
                    <CardImg width="100%" src={img7} alt="Card image cap" />
                    <CardImgOverlay>
                        <CardTitle tag="h1">Sign Up</CardTitle>
                        <CardText id="message">Join the Community!</CardText>
                        <form onSubmit={SignUpHandler}>
                            <MDBInput hint="Fullname" type="text" onChange={onFullnameChange} />
                            <MDBInput hint="Email" type="email" onChange={onEmailChange} />
                            <MDBInput hint="Password" type="password" onChange={onPasswordChange} />
                            <CardTitle tag="h3" style={{'color':'rgba(0,0,0,0)'}}> . </CardTitle> 
                            <Button className="btn" color="info" onclick={SignUpHandler}> SIGN UP </Button>
                        </form>
                        <CardTitle tag="h3" style={{'color':'rgba(0,0,0,0)'}}> . </CardTitle> 
                        <a href="http://localhost:3000/y2bmovies#/signin/"><CardTitle tag="h4">Already have an account?</CardTitle></a>
                    </CardImgOverlay>
                </Card>
            </Col>
        </Row>
    </div>
    );
}

export default SignUp;
