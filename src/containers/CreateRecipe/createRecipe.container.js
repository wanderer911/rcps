import React from 'react';
import { connect } from 'react-redux';
import { recipeActions } from '../../actions';

class CreatePage extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			title: '',
			description: '',
			submitted: false
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	handleChange(e){
		const { name, value } = e.target;
		this.setState({ [name]: value });
	}
	handleSubmit(e){
		e.preventDefault();
 
		this.setState({ submitted: true });
		const { title, description } = this.state;
		const { dispatch } = this.props;
		if (title && description) {
			dispatch(recipeActions.createRecipe(title, description));
		}
	}
	render(){
		const { title, description, submitted } = this.state;
		return (
			<div className="col-sm-12 col-md-8 col-lg-6">
				<h2>Create new recipe</h2>
				<form name="form" onSubmit={this.handleSubmit}>
					<div className={'form-group' + (submitted && !title ? ' has-error' : '')}>
						<label htmlFor="title">Title</label>
						<input type="text" className="form-control" name="title" value={title} onChange={this.handleChange} />
						{submitted && !title &&
                <div className="help-block">Title is required</div>
						}
					</div>
					<div className={'form-group' + (submitted && !description ? ' has-error' : '')}>
						<label htmlFor="description">Description</label>
						<textarea type="text" className="form-control" name="description" style={{height:'200px'}} value={description} onChange={this.handleChange} />
						{submitted && !description &&
                <div className="help-block">Description is required</div>
						}
					</div>
					<div className="form-group">
						<button className="btn btn-primary">Ok</button>
					</div>
				</form>
			</div>);
	}

}

const connectedCreatePage = connect()(CreatePage);
export { connectedCreatePage as CreatePage };