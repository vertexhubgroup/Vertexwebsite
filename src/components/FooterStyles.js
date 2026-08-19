import styled from 'styled-components';

export const Box = styled.div`
	padding: 72px 24px 22px;
	background: #10212b;
	color: #f5f7f4;
	width: 100%;
`;

export const Container = styled.div`
	max-width: 1240px;
	margin: 0 auto;
`;

export const Column = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
`;

export const Row = styled.div`
	display: grid;
	grid-template-columns: 1.5fr 1fr 1fr 1.5fr;
	gap: 48px;
	padding-bottom: 58px;

	@media (max-width: 800px) {
		grid-template-columns: repeat(2, minmax(0, 1fr));
		gap: 40px 28px;
	}

	@media (max-width: 480px) {
		grid-template-columns: 1fr;
	}
`;

export const FooterLink = styled.a`
	color: #c7d2d0;
	margin-bottom: 13px;
	font-size: 14px;
	line-height: 1.4;
	text-decoration: none;
	transition: color 180ms ease, transform 180ms ease;

	&:hover {
		color: #d8fa58;
		transform: translateX(3px);
	}
`;

export const Heading = styled.p`
	color: #d8fa58;
	font-size: 12px;
	line-height: 1.2;
	letter-spacing: .14em;
	text-transform: uppercase;
	margin: 0 0 20px;
	font-weight: 700;
`;

export const BrandBlock = styled.div`
	.footer-logo {
		display: inline-flex;
		align-items: center;
		margin-bottom: 22px;
	}

	.footer-logo img {
		width: 178px;
		height: auto;
		margin: 0;
		filter: brightness(0) invert(1);
	}

	.brand-copy {
		max-width: 235px;
		color: #9fb0ad;
		font-size: 13px;
		line-height: 1.65;
	}
`;

export const Newsletter = styled.div`
	width: 100%;
	max-width: 360px;

	p {
		color: #c7d2d0;
		font-size: 14px;
		line-height: 1.5;
		margin: -4px 0 16px;
	}

	form {
		display: flex;
		border-bottom: 1px solid #61716f;
	}

	input {
		min-width: 0;
		flex: 1;
		padding: 12px 0;
		border: 0;
		outline: 0;
		background: transparent;
		color: #fff;
		font: inherit;
		font-size: 14px;
	}

	input::placeholder { color: #83938f; }
	input:focus { border-color: #d8fa58; }

	button {
		border: 0;
		background: transparent;
		color: #d8fa58;
		cursor: pointer;
		font: 700 12px 'DM Sans', sans-serif;
		letter-spacing: .04em;
		padding: 12px 0 12px 14px;
	}

	button:hover { color: #fff; }
`;

export const SocialLinks = styled.div`
	display: flex;
	gap: 10px;
	margin-top: 4px;

	a {
		display: grid;
		place-items: center;
		width: 34px;
		height: 34px;
		border: 1px solid #52635f;
		border-radius: 50%;
		color: #c7d2d0;
		transition: color 180ms ease, border-color 180ms ease, transform 180ms ease;
	}

	a:hover {
		color: #d8fa58;
		border-color: #d8fa58;
		transform: translateY(-3px);
	}
`;

export const CompanyInfo = styled.div`
	max-width: 1240px;
	margin: 0 auto;
	padding-top: 20px;
	border-top: 1px solid #31454b;
	color: #83938f;
	font-size: 12px;
	line-height: 1.5;

	p { margin: 0; }
`;
