import React from 'react';
import FormInput from './FormInput';
import axios from 'axios';

class NewProduct extends React.Component{

    state = {
        name: "Title",
        description: "Great Producg",
        price : 0
    }

    updateName = (t) =>{
        this.setState({name:t});
    }
    
    updateDescription = (t) => {
        this.setState({description:t})
    }
    updatePrice = (t) => {
        this.setState({price:t})
    }
    handleFormSubmit = (e) =>{
        e.preventDefault();
        this.saveAlbum(this.state)
    }

    saveAlbum = async (album) =>{
        axios.post('http://localhost:3000/albums',album).then(result=>{
            console.log(result);
            console.log(result.data);
        })
    }

    render() {
        return (<div><form onSubmit = {this.handleFormSubmit}>
            < div className="form-group">
              <h1>Create new album</h1>
              <FormInput id="albumTitle" title="Album Title" placeholder = "Enter Title" onChange={this.updateName}/>
            
              <label for="albumDescription">Description</label>
              <textarea type="text" className="form-control" id="albumYear" placeholder='Description' onChange={this.updateDescription}/>
              <label for="albumYear">Price</label>
              <input type="text" className="form-control" id="albumYear" placeholder='2019' onChange={this.updatePrice}/>
            </div>
            <button type="button" className="btn btn-light">Cancel</button>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form></div>);
    }
}

export default NewProduct;