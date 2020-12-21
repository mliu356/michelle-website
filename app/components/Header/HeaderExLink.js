import styled from 'styled-components';

const HeaderExLink = styled.a`
display: inline-flex;
padding: 0.25em 0em;
margin: 8px 4px;
text-decoration: none;
-webkit-font-smoothing: antialiased;
-webkit-touch-callout: none;
user-select: none;
cursor: pointer;
outline: 0;
font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
font-weight: bold;
font-size: 24px;
color: #ffffff;
align: bottom;

&:active {
  // background: #41addd;
  color: #fff;
  text-decoration: underline;
}
`

export default HeaderExLink;
