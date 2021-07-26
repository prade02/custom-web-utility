import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom'
import './index.css';
import Header from './Header';
import B64Encode from './Components/Base64Encode';
import B64Decode from './Components/Base64Decode';

class App extends React.Component{

  render(){
    return(
      <BrowserRouter>
        <Header>
          <Route path="/base64/encode" component={ B64Encode } />
          <Route path="/base64/decode" component={ B64Decode } />
        </Header>
      </BrowserRouter>
    );
  }
}

ReactDOM.render(<App />,document.getElementById('root'));
