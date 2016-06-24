import React from 'react';
import TopTenList from './TopTenList';

class RightNav extends React.Component {
	constructor(){
		super();
		this.state = {
			topTenList: [
				{
					id: 0,
					name: 'the first name',
					description: 'this is a description',
					url: 'http://www.google.com',
					img: 'http://i.imgur.com/LGCyAd9.jpg',
					category: 'Beauty'
				},
				{
					id: 1,
					name: 'this is second',
					description: 'this is the second description',
					url: 'http://www.google.com',
					img: 'http://i.imgur.com/LGCyAd9.jpg',
					category: 'Home'
				},
				{
					id: 2,
					name: 'this is the third',
					description: 'this is the third description',
					url: 'http://www.google.com',
					img: 'http://i.imgur.com/LGCyAd9.jpg',
					category: 'Music'
				}
			]
		}
	}

	renderTopTen(){
		return(
			<section>
				<ul className="topten-ul">
					{
						this.state.topTenList.map(function(item,idx){
							return <TopTenList key={idx} {...item}/>
						})
					}
				</ul>
			</section>
		)
	}

  render() {
    return (
      <section className="hidden-xs hidden-sm col-md-3 col-lg-3 right-nav">
      	<h5 className="category-title">TOP 10</h5>
      	<div>{this.renderTopTen()}</div>
      </section>
    );
  }
}

export default RightNav;