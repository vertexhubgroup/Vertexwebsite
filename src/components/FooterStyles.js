import styled from 'styled-components';

export const Box = styled.div`
padding: 5px 5px;
background: #f3f3f5;
position: absolute;
bottom: 20;
width: 100%;


@media (max-width: 100%) {
	padding: 10px 10px;
}
`;

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	max-width: 1000px;
	margin: 0 auto;
`

export const Column = styled.div`
display: flex;
flex-direction: column;
// text-align: left;
// margin-left: 0px;
`;

export const Row = styled.div`
display: grid;
grid-template-columns: repeat(auto-fill,
						minmax(185px, 1fr));
grid-gap: 25px;

@media (max-width: 100%) {
	grid-template-columns: repeat(auto-fill,
						minmax(200px, 1fr));
}
`;

export const FooterLink = styled.a`
color: black;
margin-bottom: 20px;
font-size: 15px;
text-decoration: none;

&:hover {
	color: #5BC82D;
	transition: 200ms ease-in;
}
`;

export const Heading = styled.p`
font-size: 20px;
color: black;
margin-bottom: 20px;
font-weight: bold;
`;
