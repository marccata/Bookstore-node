import React, { Component } from 'react';

class Appwarning extends Component {
    render() {
        return (
            <div className="col-12 mt-30">
                <div className="alert alert-warning alert-dismissible fade show" role="alert">
                    Warning: the language switch is not working yet!
                    <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
            </div>
        )
    }
}

export default Appwarning