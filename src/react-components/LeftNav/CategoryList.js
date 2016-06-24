import React from 'react';

class CategoryList extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			showDesign: true,
			showEntertainment: true,
			showLifestyle: true,
			showBeauty: true
		}
	}

	showSelectCategory = () => {
		var selectedCategory = this.props.showWhichCategory;
		console.log(selectedCategory);
	}

	render() {
		return(
			<section>
				<a>
					<li className="category" onClick={this.showSelectCategory}>
						<span className="capital">{this.props.capital}</span>
						{this.props.name}
					</li>
				</a>	
			</section>	
		);
	}
}

export default CategoryList;