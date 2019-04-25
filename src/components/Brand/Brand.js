import React from 'react';
import { FaCode, FaPalette } from 'react-icons/fa';
import { connectWithStore } from '@store/Store';
import { BrandItem } from './index';
import './Brand.scss';

const BrandUI = ({ Brand }) => {
	const icons = [<FaPalette />, <FaCode />];
	const brandList = Brand.map((element, index) => (
		<BrandItem
			key={`brand-item-${index}`}
			name={element.title}
			icon={icons.find(({ type: { displayName } }) => displayName === element.iconName)}
			content={element.content.childContentfulRichText.html}
		/>
	));
	return (
		<section className="brand" id="brand">
			<div className="container brand__grid">{brandList}</div>
		</section>
	);
};

const Brand = connectWithStore(BrandUI);
export default Brand;
