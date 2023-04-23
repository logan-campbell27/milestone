import React from 'react';

class Card extends React.Component{

    handleButtonClick = (event) =>{
        alert("clicked");
        this.props.onClick(this.props.albumId);
    }


    render () {
        return(
            <div className="card" style={{width: '18rem'}}>
            <div className="card-body">
                <h5 className="card-title">{this.props.productName}</h5>
                <p className="card-text">{this.props.productDesc}</p>
                <a href="#" onClick={this.handleButtonClick} className="btn btn-primary">{this.props.buttontext}</a>
            </div>
        </div>
        );
    }
}


export default Card;