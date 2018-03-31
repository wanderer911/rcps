import React from 'react';

class RecipesVersions extends React.Component {
	constructor(props){
		super(props);
		this.state ={showAll:false};
		this.handleClick = this.handleClick.bind(this);

	}
	handleClick(e){
		this.setState({ 
			showAll: !this.state.showAll });
	}
	render(){
		let {item}= this.props;
		let element;
		if (this.state.showAll){
			element = <div>
				<p>{item.title}</p>
				<p>{item.description}</p>
			</div>;
		}
		return (
			<div>
				<div className="list-group-item list-group-item-primary row version"  onClick={this.handleClick} >
					<div className="offset-sm-1"><i>{item.updated}</i></div>
					<div className="offset-sm-1">{item.title}</div>
				</div>
				<div>{element}</div>
			</div>

		);
	}
}

export { RecipesVersions };