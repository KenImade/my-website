import React, { useState, useEffect } from 'react';
import { Seo, Page, Section} from "gatsby-theme-portfolio-minimal";
import { graphql, useStaticQuery } from "gatsby"
import styled from 'styled-components';
import ProjectCard from '../components/ProjectCard';
import FilterButton from '../components/FilterButton';
import ProjectsGrid from '../components/ProjectsGrid';
import projectsData from '../data/projectsData.json';

const FilterContainer = styled.div`
  margin-bottom: 20px;
`;

const Projects = () => {
  const [filteredProjects, setFilteredProjects] = useState(projectsData.data);
  const [filter, setFilter] = useState('');

  // Extract unique categories
  const categories = Array.from(new Set(projectsData.data.map(p => p.category)));

  useEffect(() => {
    if (filter === '') {
      setFilteredProjects(projectsData.data);
    } else {
      setFilteredProjects(projectsData.data.filter(p => p.category === filter));
    }
  }, [filter]);

  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { extension: { regex: "/(jpg|jpeg|png)/" } }) {
        nodes {
          relativePath
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  `);

  return (
    <>
        <Seo title="Projects" />
        <Page useSplashScreenAnimation>
          <Section>
            <h3 className="style-module--Heading--2c002">Projects</h3>
            <FilterContainer>
              <label>Filter by Category: </label>
              {categories.map(category => (
                <FilterButton 
                  key={category}
                  label={category}
                  isactive={filter === category}
                  onClick={() => setFilter(category)}
                />
              ))}
              <FilterButton 
                label="Clear Filter"
                isactive={filter === ''}
                onClick={() => setFilter('')}
              />
            </FilterContainer>
            <ProjectsGrid>
              {filteredProjects.map((project, idx) => {
                const imageNode = data.allFile.nodes.find(node => node.relativePath === project.image.src);
                const imageData = imageNode.childImageSharp.gatsbyImageData;
                return <ProjectCard key={idx} project={project} imageData={imageData} />;
              })}
            </ProjectsGrid>
          </Section>
        </Page>
    </>
  );
}

export default Projects;