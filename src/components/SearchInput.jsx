import React from 'react'

class SearchInput extends React.Component {

    constructor (props) {
       super();
        this.state = {
            entry : ""
        }
    }
   

 
onInputChange=(event)=>{
    this.setState({entry:event.target.value})
}
onFormSubmit = (event) =>{
     event.preventDefault();
     this.props.onSearchSubmit(this.state.entry);
}
render(){
    return(
        <div className='ui segments'>
            <form  onSubmit={this.onFormSubmit} className='ui form'>
                <div className='field'>
                    <div className='ui massive icon input'>
                    <input placeholder='Search ....' type='search' 
                    onChange={this.onInputChange} 
                    value={this.state.entry} />
                    <i className='search icon'/>
                    </div>
                </div>
            </form>
        </div>
    )
}
}
export default SearchInput;
