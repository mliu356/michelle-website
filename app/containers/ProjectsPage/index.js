/*
 * FeaturePage
 *
 * List all the features
 */
import React from 'react';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';

import H1 from 'components/H1';
import messages from './messages';
import heart from 'images/yellow_heart_clear.png';
import ProjectCard from './ProjectCard';

export default function ProjectsPage() {
  const projectContent = [
    { 
      key: 0,
      name: "Project1",
      content: "Project1 content",
      image: heart
    },
    {
      key: 1,
      name: "Project2",
      content: "Project2 content",
      image: heart
    }
  ]

  return (
    <div>
      <Helmet>
        <title>Feature Page</title>
        <meta
          name="description"
          content="Feature page of React.js Boilerplate application"
        />
      </Helmet>
      <H1>
        <FormattedMessage {...messages.title} />
      </H1>
      {projectContent.map((project) => <ProjectCard content={project.content} key={project.key} />)}
    </div>
  );
}
