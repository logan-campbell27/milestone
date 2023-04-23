import React from 'react';

class FormInput extends React.Component{
    state = {inputData:""};

    handleChangeData = (e) =>{
        this.setState({inputData:e.target.value});
        console.log("Contents of input = ", this.state.inputData);
        this.props.onChange(this.state.inputData);
    }

    render(){
        return(
            <div>
                <label for={this.props.id}>{this.props.name}</label>
                <input onChange = {this.handleChangeData} type="text" className="form-control" id={this.props.id} placeholder={this.props.placeholder}/>
            </div>
        )
    }
}
export default FormInput;
