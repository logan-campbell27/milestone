import React from 'react';
class OneProduct extends React.Component{
    render(){
        return(
        <div className="container">
            <h2>Product Details</h2>
            <div className="row">
                <div className="col col-sm-3">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">{this.props.name}</h5>
                            <p className="card-title">{this.props.price}</p>
                            <p className="card-text">{this.props.description}</p>
                            <a href="#" className="btn btn-primary">Edit</a>
                        </div>
                    </div>
                </div>
            
            </div>
        </div>
        )
        
    }
}
export default OneProduct;