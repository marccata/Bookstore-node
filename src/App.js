import React, { Component } from 'react';
import Appheader from './Appheader';
import './App.css';
import Appfooter from './Appfooter';
import Appsearchbar from './Appsearchbar';
import Appwarning from './Appwarning';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
        books: [],
    };
  }

  componentDidMount() {  
    if (document.getElementById("langEn").checked) {
        var url = "https://api.myjson.com/bins/zyv02";
        this.setState({
            lang: 'en',
        });
    };
    if (document.getElementById("langEs").checked) {
        var url = "https://api.myjson.com/bins/1h3vb3";
        this.setState({
            lang: 'en',
        });
    };
    fetch(url)
    .then(res => res.json())
    .then(data => this.setState({ books: data.books }))
    .catch(error => console.log(error));
  }

  langValue() {
    if (document.getElementById('langEn').checked) {
      console.log('english');
      var langValue = 'en';
    };
    if (document.getElementById('langEs').checked) {
        console.log('spanish');
        var langValue = 'es';
    };
  }

  render(){
    return (
      <div>
        <Appheader langValue={this.langValue} onClick={this.langValue}/>
        <main className="container" id="mainContainer">
          <div className="d-flex flex-wrap">
            <Appwarning />
            <Appsearchbar books={this.state.books}/>
          </div>
        </main>
        <Appfooter />
      </div>
    );
  }
}

export default App;