import React from 'react';
import { GatsbyImage } from "gatsby-plugin-image";
import styled from 'styled-components';

const Card = styled.div`
  max-width: 250px;
  border-radius: 0.5rem;
  background-color: #fff;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  border: 2px solid white;
  border-radius: 10px;

  a {
    text-decoration: none;
  }
`;

const Content = styled.div`
  padding: 0.5rem;
`;

const Tag = styled.span`
  font-size: 0.7rem;
  font-weight: 300;
  margin: 0.2rem;
  padding: 2px;
`

const Title = styled.h3`
  color: #111827;
  font-size: 1.125rem;
  line-height: 1.75rem;
  font-weight: 600;
`;

const Desc = styled.p`
  margin-top: 0.5rem;
  color: #6B7280;
  font-size: 0.875rem;
  line-height: 1.25rem;
`;

const Action = styled.a`
  display: inline-flex;
  margin: 0.4rem;
  color: #ffffff;
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 500;
  align-items: center;
  gap: 0.25rem;
  background-color: #2563EB;
  padding: 4px 8px;
  border-radius: 4px;
  
  span {
    transition: .3s ease;
  }

  &:hover span {
    transform: translateX(4px);
  }
`;



export default function ProjectCard({ project, imageData }) {
  
  return (
    <>
      <Card>
        {/* Conditionally render the GatsbyImage if imageData is provided */}
        {imageData && <GatsbyImage image={imageData} alt={project.image.alt} />}
        
        <Content>
          {/* Render the project title */}
          <Title>
            <span>{project.title}</span>
          </Title>
          {/* Render the project description */}
          <Desc>{project.description}</Desc>
          {project.tags.map((tag, idx) => <Tag key={idx}>#{tag}</Tag>)}
        </Content>

        {/* Render each link associated with the project */}
        <span>
          {project.links.map(link => <Action key={link.url} href={link.url}>{link.type}</Action>)}
        </span>
      </Card>
    </>
  );
}