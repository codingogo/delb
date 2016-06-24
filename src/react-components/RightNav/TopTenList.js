import React from 'react';

class TopTenList extends React.Component {
	render(){
		return(
			<section>
				<a>
					<li className="topten">
					<img src={this.props.img} alt="" className="topten-img"/>
					<span className="topten-name">{this.props.name}</span>
					<div className="topten-description">{this.props.description}</div>
					<div className="topten-category">{this.props.category}</div>
					</li>
				</a>
			</section>
		);
	}
}

export default TopTenList;