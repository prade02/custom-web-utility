import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom'
import './index.css';
import Header from './Header';
import B64Convert from './Components/Base64Convert';

class App extends React.Component{

  render(){
    return(
      <BrowserRouter>
        <Header>
          <Route path="/base64/convert" component={ B64Convert } />
        </Header>
      </BrowserRouter>
    );
  }
}

ReactDOM.render(<App />,document.getElementById('root'));
