import 'bulma/css/bulma.css';
import React from 'react';

export default class Search extends React.Component{
	state = {
        search: ''
    }

	changeHandler = (e) => {
			this.setState({search: e.target.value}, this.handleSubmit);
			console.log(this.state.search);
			this.handleSubmit();
	}

	handleSubmit = () => {
			this.props.searchTerm(this.state)
	}

	render(){
		return(
			<div>
				<form>
					<input className ='input search-bar' type="text" name="search" value={this.state.search} onChange={this.changeHandler}/>
				</form>
			</div>
		)
	}
}