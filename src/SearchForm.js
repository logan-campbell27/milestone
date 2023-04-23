import React from 'react';

class SearchForm extends React.Component{
    state = {inputtext:""};

    handleChangeInput = (event) =>{
        this.setState({inputtext : event.target.value})
        console.log(event.target.value);
    }

    handleFormSubmit = (event) =>{
        alert(this.state.inputtext);
    }

    render(){
        return(
        <div>
            <form onSubmit = {this.handleFormSubmit}>
                <div className="form-group">
                    <label htmlFor="search-term">Search</label>
                    <input onChange={this.handleChangeInput} type="text"className="form-control" placeholder="SearchTerm here"></input>
                </div>
            </form>
        </div>
        );
    }

    // const SearchForm = () => {
    //     return ( <div>
    //         <form>
    //   <div class="form-group">
    //     <label for="exampleInputEmail1">Email address</label>
    //     <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
    //     <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
    //   </div>
    //   <div class="form-group">
    //     <label for="exampleInputPassword1">Password</label>
    //     <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
    //   </div>
    //   <div class="form-check">
    //     <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    //     <label class="form-check-label" for="exampleCheck1">Check me out</label>
    //   </div>
    //   <button type="submit" class="btn btn-primary">Submit</button>
    // </form>
    //     </div>)
    // }
    
    // export default SearchForm;
}
export default SearchForm;