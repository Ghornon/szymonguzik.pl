import React, { Component } from 'react';
import Img from 'gatsby-image';
import { FormattedMessage } from 'react-intl';

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
	FaDrumstickBite,
	FaPen,
	FaGithub
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
			const vw = window.innerWidth > 1200;
			scrollToElement('#detail', {
				align: vw ? 'middle' : 'top',
				ease: 'inOutQuad',
				duration: 600
			});
		}, 500);
	}

	createReferenceArray = order => {
		const { Portfolio } = this.props;
		const maxLength = [...this.props.Portfolio].length;
		const previousOrderIndex = order <= 0 ? maxLength - 1 : order - 1;
		const nextOrderIndex = order >= maxLength - 1 ? 0 : order + 1;

		const referenceArray = [
			Portfolio.find(({ order }) => order === previousOrderIndex),
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

					<div className="detail__jumbotron jumbotron">
						<header className="jumbotron__header">
							<div className="detail__icon">
								<FaPen />
							</div>
							<h6 className="detail__heading detail__heading--secondary">
								<FormattedMessage id="Portfolio.header.heading-secondary" />
							</h6>
							<h4 className="detail__heading detail__heading--primary detail__heading--uppercase">
								<FormattedMessage id="Portfolio.header.heading-primary" />
							</h4>
						</header>

						<footer className="jumbotron__footer">
							<p className="jumbotron__paragraph">
								<FormattedMessage id="Portfolio.footer.firstline" />
							</p>
							<p className="detail__paragraph">
								<FormattedMessage id="Portfolio.footer.secoundline" />
								<a href="https://github.com/Ghornon" className="jumbotron__link">
									github <FaGithub className="jumbotron__link-icon" />
								</a>
								<FormattedMessage id="Portfolio.footer.thirdline" />
							</p>
						</footer>
					</div>

					{referenceList}
				</div>
			</section>
		);
	}
}

const DetalPage = connectWithStore(DetailPageUI);

export default DetalPage;
