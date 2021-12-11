import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Header from './Layout/Header';
import { Container } from 'react-bootstrap';
import HomeScreen from './Screen/HomeScreen';
import CreateIDSCreen from './Screen/Soal3/CreateIDScreen';
import AllCodeScreen from './Screen/Soal3/AllCodeScreen';
import GenerateQRScreen from './Screen/Soal3/GenerateQRScreen';
import TebakanScreen from './Screen/Soal4/TebakanScreen';
import Page404 from './Screen/Page404';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <main style={{paddingTop: '3.5rem'}}>
          <Container>
            <Switch>
              <Route path="/soal4/tebaknomor" component={TebakanScreen} />
              <Route path="/soal3/allId/:id" component={GenerateQRScreen} />
              <Route path="/soal3/allId" component={AllCodeScreen} />
              <Route path="/soal3/createId" component={CreateIDSCreen} />
              <Route path="/" component={HomeScreen} exact />
              <Route path="*" component={Page404} exact />
            </Switch>
          </Container>
        </main>
        {/* <Footer /> */}
      </Router>
    </div>
  );
}

export default App;
