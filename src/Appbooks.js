import React, { Component } from 'react';

class Appbooks extends Component {
    render() {        
        if (this.props.langValue === 'en') {
            return (
                <div>
                    <div  className="d-flex flex-wrap width-100" id="booksDiv">
                        {this.props.books.filter(book => book.title.toLowerCase().includes(this.props.searchValue.toLowerCase()) || this.props.searchValue === "").map((books, i) => {
                            return(
                                <div className="card flip-card col-lg-4" key={i}>
                                    <div className="flip-card-inner">
                                        <div className="flip-card-front">
                                            <img className="card-img-top" src={books.cover} alt={books.title}></img>
                                        </div>
                                        <div className="card-body flip-card-back d-flex align-items-center">
                                            <div>
                                                <h5 className="card-title">{ books.title }</h5>
                                                <p className="card-text">{ books.description }</p>
                                                <a data-fancybox="gallery" href={books.detail} className="btn btn-light">See in detail</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    <div id="emptyMessage" className="container">
                        <div className="alert   alert-secondary" role="alert">Your search has no matches...</div>
                    </div>
                </div>
            );
            
        }
        if (this.props.langValue === 'es') {
            return(
                <div>
                    {console.log('Spanish books')}
                </div>
            )
            /*
            return (
                <div>
                    <div  className="d-flex flex-wrap width-100" id="booksDiv">
                        {this.props.books.filter(book => book.titulo.toLowerCase().includes(this.props.searchValue.toLowerCase()) || this.props.searchValue === "").map((books, i) => {
                            return(
                                <div className="card flip-card col-lg-4" key={i}>
                                    <div className="flip-card-inner">
                                        <div className="flip-card-front">
                                            <img className="card-img-top" src={books.portada} alt={books.titulo}></img>
                                        </div>
                                        <div className="card-body flip-card-back d-flex align-items-center">
                                            <div>
                                                <h5 className="card-title">{ books.titulo }</h5>
                                                <p className="card-text">{ books.descripcion }</p>
                                                <a data-fancybox="gallery" href={books.detalle} className="btn btn-light">See in detail</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    <div id="emptyMessage" className="container">
                        <div className="alert   alert-secondary" role="alert">Your search has no matches...</div>
                    </div>
                </div>
            );*/
            
        }
    }
}

export default Appbooks