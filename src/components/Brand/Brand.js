import React from 'react';
import { FaCode, FaPalette } from 'react-icons/fa';

import { BrandItem } from './index';
import './Brand.scss';

const Brand = () => {
	return (
		<section className="brand">
			<div className="container brand__grid">
				<BrandItem
					name="Developer"
					icon={<FaCode />}
					paragraph="A brand is only as successful as its implementation, great products should not be defined by design alone, but also by functionality and great user experience. Developers need to strive for clean, elegant and efficient code to assure long-term sustainability and keep software's maintainability."
				/>

				<BrandItem
					name="Designer"
					icon={<FaPalette />}
					paragraph="Designing is a challenge for human creativity. The task of a designer is not just to create a drawing or a web page template, but to address the needs of the market and the customer so as to create a cohesive whole. Designing something that is supposed to be effiecient and eye-friendly is a challenge."
				/>
			</div>
		</section>
	);
};

export default Brand;
