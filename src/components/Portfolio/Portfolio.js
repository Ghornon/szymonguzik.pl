import React from 'react';

import './Portfolio.scss';

/* 
img:
icon:
name:
description:
linkTo:

*/

const Portfolio = () => {
	return (
		<section className="Portfolio">
			<div className="container-fludi portfolio__grid">
				<div className="portfolio__item">
					<header className="header">
						<img src="dist/img/portfolio_ecommerce.jpg" alt="Page 3" />
						<div className="icon">
							<i className="fa fa-shopping-cart" aria-hidden="true" />
						</div>
					</header>

					<footer className="footer">
						<h6>React application</h6>
						<h4>
							<a href="https://github.com/Ghornon/Ecommerce-app">Ecommerce app</a>
						</h4>
					</footer>
				</div>
			</div>
		</section>
	);
};

export default Portfolio;
