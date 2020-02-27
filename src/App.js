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
        langValue: 'en'
    };
  }

  componentDidMount() {  
    this.makeFetch();
  }

  makeFetch() {  
    console.log('fetch made');
    if (document.getElementById("langEn").checked) {var url = "https://api.myjson.com/bins/zyv02";};
    if (document.getElementById("langEs").checked) {var url = "https://api.myjson.com/bins/1h3vb3";};
    fetch(url)
    .then(res => res.json())
    .then(data => this.setState({ books: data.books }))
    .catch(error => console.log(error));
  }

  langValue = () => {
    if (document.getElementById('langEn').checked) {
      console.log('english');
      this.setState({
        langValue: 'en'
      });
    };
    if (document.getElementById('langEs').checked) {
      console.log('spanish');
      this.setState({
        langValue: 'es'
      });
    };
    this.makeFetch();
  }

  render(){
    return (
      <div>
        <Appheader langValue={this.langValue} onClick={this.langValue}/>
        <main className="container" id="mainContainer">
          <div className="d-flex flex-wrap">
            <Appwarning />
            <Appsearchbar books={this.state.books} langValue={this.state.langValue}/>
          </div>
        </main>
        <Appfooter />
      </div>
    );
  }
}

export default App;