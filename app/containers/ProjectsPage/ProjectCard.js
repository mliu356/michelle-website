import PropTypes from 'prop-types';
import styled from 'styled-components';

import React from 'react';

const ProjectCardContainer = styled.section`
  margin: 1em auto;
//   margin-top: 0;
  background-color: #cce7e8;
`;

ProjectCard.propTypes = {
    content: PropTypes.string,
  };

export default function ProjectCard(props) {
    return <ProjectCardContainer>
        <p>{props.content}</p>
    </ProjectCardContainer>;
};
