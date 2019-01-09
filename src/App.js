import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Footer from "./components/footer" 
import Header from "./components/header"
class App extends Component {
  render() {
    return (
      <div className="App">
       {this.props.children}
       <Footer/>
      </div>
    );
  }
}

export default App;
