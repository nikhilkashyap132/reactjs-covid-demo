import React, {useEffect,useState} from "react";
import Card from 'react-bootstrap/Card'
import CardDeck from "react-bootstrap/CardDeck";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import "../App.css";

function Homepage() {
  const [latest,setLatest]=useState("");
  useEffect(()=>{
    axios
      
      //setTimeout(() => {
        .get("https://covid-api.mmediagroup.fr/v1/cases")
        .then(res=>{
          setLatest(res.data);
        })
        .catch(err=>{
          console.log(err);
        })
     // }, 3000);
      
      
  },[]);

  return (
    <CardDeck>
  <Card bg="secondary" text="white" className="text-center" style={{margin: "10px" }}>
    
    <Card.Body>
      <Card.Title>Cases</Card.Title>
      <Card.Text>
        100
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small >Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card bg="danger" text="white" className="text-center" style={{margin: "10px" }}>
    
    <Card.Body>
      <Card.Title>Death</Card.Title>
      <Card.Text>
      0
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small >Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card bg="success" text="white" className="text-center" style={{margin: "10px" }}>
    
    <Card.Body>
      <Card.Title>Recovered</Card.Title>
      <Card.Text>
      95
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small >Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
</CardDeck>
);
}

  
  export default Homepage;