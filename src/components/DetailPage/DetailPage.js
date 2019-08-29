import React, { Component } from 'react';
import Img from 'gatsby-image';

import scrollToElement from 'scroll-to-element';

import { connectWithStore } from '@store/Store';
import { DetailPageArticle } from './index';
import { PortfolioItem } from '@components/Portfolio';

import './DetailPage.scss';

import {
	FaShoppingCart,
	FaCamera,
	FaPaintBrush,
	FaImage,
	FaThumbtack,
	FaDrumstickBite
} from 'react-icons/fa';

const icons = [
	<FaThumbtack />,
	<FaCamera />,
	<FaPaintBrush />,
	<FaDrumstickBite />,
	<FaImage />,
	<FaShoppingCart />
];

class DetailPageUI extends Component {
	componentDidMount() {
		setTimeout(() => {
			scrollToElement('#detail', {
				ease: 'inOutExpo',
				duration: 1000
			});
		}, 100);
	}

	createReferenceArray = order => {
		const { Portfolio } = this.props;
		const maxLength = [...this.props.Portfolio].length;

		const previousOrderIndex = order <= 0 ? maxLength - 1 : order - 1;
		const lastOrderIndex = order >= maxLength - 1 ? 0 : order + 1;
		const nextOrderIndex = lastOrderIndex >= maxLength - 1 ? 0 : lastOrderIndex + 1;

		const referenceArray = [
			Portfolio.find(({ order }) => order === previousOrderIndex),
			Portfolio.find(({ order }) => order === lastOrderIndex),
			Portfolio.find(({ order }) => order === nextOrderIndex)
		];

		return referenceArray;
	};

	render() {
		const { order, iconName } = this.props.pageData;

		const referenceList = this.createReferenceArray(order).map(
			({ image, name, shortDescription, link, slug, order, iconName }, index) => {
				return (
					<PortfolioItem
						className="detail__portfolio"
						key={`portfolio-item-${index}`}
						image={
							<Img
								fluid={image.fluid}
								className=""
								alt={`Image of ${name} project`}
							/>
						}
						name={name}
						iconName={iconName}
						shortDescription={shortDescription}
						link={link}
						slug={slug}
						order={order}
						locale={this.props.locale}
					/>
				);
			}
		);

		return (
			<section id="detail" className="detail">
				<div className="container detail__grid">
					<DetailPageArticle
						className="detail__article"
						{...this.props.pageData}
						icon={icons.find(({ type: { displayName } }) => displayName === iconName)}
					/>

					{referenceList}
				</div>
			</section>
		);
	}
}

const DetalPage = connectWithStore(DetailPageUI);

export default DetalPage;
