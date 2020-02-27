import React, { Component } from 'react';

class Appheader extends Component {

    langValue = (e) => {
        this.props.langValue(e);
    }
 
    render() {
        return (
            <header>
                <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                    <div className="container">
                        <a className="navbar-brand" href="#">Bookstore</a>
                        <div className="btn-group btn-group-toggle" data-toggle="buttons">
                            <label className="btn btn-light active">
                                <input type="radio" name="language" id="langEn" onClick={this.langValue} defaultChecked/> English
                            </label>
                            <label className="btn btn-light">
                                <input type="radio" name="language" id="langEs" onClick={this.langValue}/> Español
                            </label>
                        </div>
                    </div>
                </nav>
            </header>
        )
    }
}

export default Appheader