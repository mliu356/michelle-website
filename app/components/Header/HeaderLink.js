import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default styled(Link)`
  display: inline-flex;
  // padding: 0.25em 1em;
  margin: 8px 16px;
  // padding: 8px 16px 8px 0px;
  // margin: 1em;
  text-decoration: none;
  // border-radius: 4px;
  -webkit-font-smoothing: antialiased;
  -webkit-touch-callout: none;
  user-select: none;
  cursor: pointer;
  outline: 0;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: bold;
  font-size: 24px;
  // border: 1px solid #ffffff;
  color: #ffffff;

  &:active {
    // background: #41addd;
    color: #fff;
    text-decoration: underline;
  }
`;
