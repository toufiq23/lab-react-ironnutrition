import 'bulma/css/bulma.css';
import React from 'react';

export default class NewFood extends React.Component{
	state = {
		name: '',
		calories: '',
		image: ''
	}

	handleChange(e){
		let {name, value} = e.target;
		this.setState({[name]: value});
	}

	handleFormSubmit = (e) => {
		e.preventDefault();

		this.props.addNewFood(this.state);

		this.setState({
			name: '',
			calories: '',
			image: ''
		})
	}

	render(){
		return(
			<div className="block mt-4">
				<form onSubmit={this.handleFormSubmit}>
					<div>
						<label htmlFor="name">Name:</label>
						<div>
							<input className ='input is-normal' type="text" name="name" value={this.state.name} onChange={(e) => this.handleChange(e)}/>
						</div>
						<label htmlFor='calories'>Number of calories:</label>
						<div>
							<input 
								className ='input is-normal'
								type="number" 
								name="calories" 
								value={this.state.calories} 
								onChange={(e) => this.handleChange(e)} />
						</div>

						<label htmlFor='image'>Image:</label>
						<div>
							<input 
								className ='input is-normal'
								type="text" 
								name='image'
								value={this.state.image}
								onChange={(e) => this.handleChange(e)}
								/>
						</div>
						
						<button className="button is-info">Submit</button>
					</div>
				</form>
			</div>
		)
	}
}