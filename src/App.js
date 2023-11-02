import '../node_modules/bootstrap/dist/css/bootstrap.css';
import React, { useState } from 'react';
import { Container, Col, Row, Card, CardBody, CardTitle, CardSubtitle, CardImg, CardText } from 'reactstrap';
import MOCK_DATA from './MOCK_DATA';
import './style.css';



function App() {

  const [getUser, setUser] = useState(MOCK_DATA);
  return (
    getUser.map(result => (
      <Container>
        <center>
          <div>
            <div class="card bg-info-subtle mt-3 mb-3">
              <img src={result.image} class="card-img-top" />
              <div class="card-body">

                <div class="text-section">
                  <h6 class="card-title fw-bold">{result.first_name.concat(" ", result.last_name)}</h6>
                  <p class="card-text"><h6>Email: {result.email}</h6></p>
                  <p class="card-text"><h6>Gender: {result.gender}</h6></p>
                </div>

              </div>
            </div>
          </div>

        </center>
      </Container>
    ))
  )
}

export default App;
