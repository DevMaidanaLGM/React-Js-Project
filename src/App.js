
import './App.css';

import About from './views/about'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/container';
import Row from 'react-bootstrap/row';
import Col from 'react-bootstrap/col';

function App() {
  return (


<div>
    <Container className="bg-black mainContainer" fluid>
      <Row>
        <Col>

          <div>

            <About />

          </div>

        </Col>
      </Row>
    </Container>
</div>



  );
}

export default App;
