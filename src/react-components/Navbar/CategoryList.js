import React from 'react';

class CategoryList extends React.Component {
	render() {
		return(
			<section>
				<a>
					<li className="category">
						<span className="capital">{this.props.capital}</span>
						{this.props.name}
					</li>
				</a>	
			</section>	
		);
	}
}

export default CategoryList;