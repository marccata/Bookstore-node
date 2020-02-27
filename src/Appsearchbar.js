import React, { Component } from 'react';
import Appbooks from './Appbooks';

class Appsearchbar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            searchValue: ""
        };
    }

    searchFilter = (e) => {
        this.setState({
            searchValue: e.target.value
        }, () => {
            this.checkIfEmpty();
        });    
        //TODO WHY IS THIS THEN?
    }

    checkIfEmpty() {
        if(document.getElementById('booksDiv').innerHTML == "") {
            document.getElementById('emptyMessage').style.visibility = 'visible';
        } else {
            document.getElementById('emptyMessage').style.visibility = 'hidden';
        }
    }

    render() {
        return (
            <div className="width-100">
                <div className="col-12">
                    <input className="form-control mr-sm-2 col-12" type="search" placeholder="Search your book" aria-label="Search" id="menuFilter" onChange={this.searchFilter}/>
                </div>
                <Appbooks searchValue={this.state.searchValue} books={this.props.books} langValue={this.props.langValue}/>
                {console.log(this.props.langValue + ' language in search barpage')}
            </div>
        )
    }
}

export default Appsearchbar