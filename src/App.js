import React from 'react';
import Card from './Card';
 import NavBar from './NavBar';
import { Router, Route, Routes} from 'react-router';
import './App.css';
import datasource from './datasource';
import ProductList from './ProductList';
import OneProduct from './OneProduct';
// //import albums from './albums.json'
import SearchForm from './SearchForm';
import NewProduct from './NewProduct';


class App extends React.Component{
    state = {productlist : [], searchphrase : "", currentlySelectedProduct:-1};

     componentDidMount(){
         this.loadProducts();
    }
    updateSearchResults = (phrase) => {
        console.log("phrase = ", phrase);
        this.setState({searchphrase:phrase});
    }
    loadProducts = async () =>{
        const response = await datasource.get('/products');
        this.setState({productlist: response.data});
    }
    updateSingleProduct = (id) =>{
        var indexnumber = 0;
        for(var i = 0; i < this.state.productlist.length; i++){
            if(this.state.albumlist[i].id === id){
                indexnumber = i;
            }
        }
        
    }
    

    render() {
       return(
        <div>
             <NavBar/>
           <Routes>
           <Route exact path="/" render = { () =>{
               return (
                   <div>
                   <SearchForm onSubmit={this.updateSearchResults}/>
                   <ProductList productList={this.state.productlist} onClick={this.updateSingleProduct}/>
                   </div>
                   
           
               )
           }}/>
           <Route exact path = "/new" component = {NewProduct}/>
           <Route exact path = "/show/:productId" render = {()=> <OneProduct album={this.state.productlist[this.state.currentlySelectedProduct]}/>} />
           </Routes>
        </div>
       
       );
    }
}

export default App;