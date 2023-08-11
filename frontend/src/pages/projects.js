import React, { useState, useEffect } from 'react';
import { Seo, Page, Section} from "gatsby-theme-portfolio-minimal";
import { graphql, useStaticQuery } from "gatsby"
import styled from 'styled-components';
import ProjectCard from '../components/ProjectCard';
import FilterButton from '../components/FilterButton';
import ProjectsGrid from '../components/ProjectsGrid';

// Sample data
const projectsData = [
  {
    "visible": true,
    "category": "data visualization",
    "title": "Add content and deploy!",
    "description": "Get up and running within minutes. Just install the starter, add your content, deploy it, and there you go! This starter works seamlessly with hosts like Netlify. Photo by Clément H on Unsplash.",
    "tags": ["Content Integration", "Ready-2-Deploy"],
    "image": {
      "src": "images/clement-h-95YRwf6CNw8-unsplash.jpg",
      "alt": "Quick Setup",
      "linkTo": "https://github.com/konstantinmuenster/gatsby-starter-portfolio-minimal-theme"
    },
    "links": [
      {
        "type": "github",
        "url": "https://github.com/konstantinmuenster/gatsby-starter-portfolio-minimal-theme"
      },
      {
        "type": "external",
        "url": "https://www.gatsbyjs.org/docs/mdx/writing-pages/"
      }
    ]
  },
  {
    "visible": true,
    "category": "web development",
    "title": "E commerce website",
    "description": "Get up and running within minutes. Just install the starter, add your content, deploy it, and there you go! This starter works seamlessly with hosts like Netlify. Photo by Clément H on Unsplash.",
    "tags": ["Content Integration", "Ready-2-Deploy"],
    "image": {
      "src": "images/clement-h-95YRwf6CNw8-unsplash.jpg",
      "alt": "Quick Setup",
      "linkTo": "https://github.com/konstantinmuenster/gatsby-starter-portfolio-minimal-theme"
    },
    "links": [
      {
        "type": "github",
        "url": "https://github.com/konstantinmuenster/gatsby-starter-portfolio-minimal-theme"
      },
      {
        "type": "external",
        "url": "https://www.gatsbyjs.org/docs/mdx/writing-pages/"
      }
    ]
  },
  {
    "visible": true,
    "category": "web development",
    "title": "E commerce website",
    "description": "Get up and running within minutes. Just install the starter, add your content, deploy it, and there you go! This starter works seamlessly with hosts like Netlify. Photo by Clément H on Unsplash.",
    "tags": ["Content Integration", "Ready-2-Deploy"],
    "image": {
      "src": "images/clement-h-95YRwf6CNw8-unsplash.jpg",
      "alt": "Quick Setup",
      "linkTo": "https://github.com/konstantinmuenster/gatsby-starter-portfolio-minimal-theme"
    },
    "links": [
      {
        "type": "github",
        "url": "https://github.com/konstantinmuenster/gatsby-starter-portfolio-minimal-theme"
      },
      {
        "type": "external",
        "url": "https://www.gatsbyjs.org/docs/mdx/writing-pages/"
      }
    ]
  },
  {
    "visible": true,
    "category": "web development",
    "title": "E commerce website",
    "description": "Get up and running within minutes. Just install the starter, add your content, deploy it, and there you go! This starter works seamlessly with hosts like Netlify. Photo by Clément H on Unsplash.",
    "tags": ["Content Integration", "Ready-2-Deploy"],
    "image": {
      "src": "images/clement-h-95YRwf6CNw8-unsplash.jpg",
      "alt": "Quick Setup",
      "linkTo": "https://github.com/konstantinmuenster/gatsby-starter-portfolio-minimal-theme"
    },
    "links": [
      {
        "type": "github",
        "url": "https://github.com/konstantinmuenster/gatsby-starter-portfolio-minimal-theme"
      },
      {
        "type": "external",
        "url": "https://www.gatsbyjs.org/docs/mdx/writing-pages/"
      }
    ]
  },
  {
    "visible": true,
    "category": "web development",
    "title": "E commerce website",
    "description": "Get up and running within minutes. Just install the starter, add your content, deploy it, and there you go! This starter works seamlessly with hosts like Netlify. Photo by Clément H on Unsplash.",
    "tags": ["Content Integration", "Ready-2-Deploy"],
    "image": {
      "src": "images/clement-h-95YRwf6CNw8-unsplash.jpg",
      "alt": "Quick Setup",
      "linkTo": "https://github.com/konstantinmuenster/gatsby-starter-portfolio-minimal-theme"
    },
    "links": [
      {
        "type": "github",
        "url": "https://github.com/konstantinmuenster/gatsby-starter-portfolio-minimal-theme"
      },
      {
        "type": "external",
        "url": "https://www.gatsbyjs.org/docs/mdx/writing-pages/"
      }
    ]
  },
  {
    "visible": true,
    "category": "web development",
    "title": "E commerce website",
    "description": "Get up and running within minutes. Just install the starter, add your content, deploy it, and there you go! This starter works seamlessly with hosts like Netlify. Photo by Clément H on Unsplash.",
    "tags": ["Content Integration", "Ready-2-Deploy"],
    "image": {
      "src": "images/clement-h-95YRwf6CNw8-unsplash.jpg",
      "alt": "Quick Setup",
      "linkTo": "https://github.com/konstantinmuenster/gatsby-starter-portfolio-minimal-theme"
    },
    "links": [
      {
        "type": "github",
        "url": "https://github.com/konstantinmuenster/gatsby-starter-portfolio-minimal-theme"
      },
      {
        "type": "external",
        "url": "https://www.gatsbyjs.org/docs/mdx/writing-pages/"
      }
    ]
  },
  {
    "visible": true,
    "category": "web development",
    "title": "E commerce website",
    "description": "Get up and running within minutes. Just install the starter, add your content, deploy it, and there you go! This starter works seamlessly with hosts like Netlify. Photo by Clément H on Unsplash.",
    "tags": ["Content Integration", "Ready-2-Deploy"],
    "image": {
      "src": "images/clement-h-95YRwf6CNw8-unsplash.jpg",
      "alt": "Quick Setup",
      "linkTo": "https://github.com/konstantinmuenster/gatsby-starter-portfolio-minimal-theme"
    },
    "links": [
      {
        "type": "github",
        "url": "https://github.com/konstantinmuenster/gatsby-starter-portfolio-minimal-theme"
      },
      {
        "type": "external",
        "url": "https://www.gatsbyjs.org/docs/mdx/writing-pages/"
      }
    ]
  },
  {
    "visible": true,
    "category": "web development",
    "title": "E commerce website",
    "description": "Get up and running within minutes. Just install the starter, add your content, deploy it, and there you go! This starter works seamlessly with hosts like Netlify. Photo by Clément H on Unsplash.",
    "tags": ["Content Integration", "Ready-2-Deploy"],
    "image": {
      "src": "images/clement-h-95YRwf6CNw8-unsplash.jpg",
      "alt": "Quick Setup",
      "linkTo": "https://github.com/konstantinmuenster/gatsby-starter-portfolio-minimal-theme"
    },
    "links": [
      {
        "type": "github",
        "url": "https://github.com/konstantinmuenster/gatsby-starter-portfolio-minimal-theme"
      },
      {
        "type": "external",
        "url": "https://www.gatsbyjs.org/docs/mdx/writing-pages/"
      }
    ]
  },
  {
    "visible": true,
    "category": "web development",
    "title": "E commerce website",
    "description": "Get up and running within minutes. Just install the starter, add your content, deploy it, and there you go! This starter works seamlessly with hosts like Netlify. Photo by Clément H on Unsplash.",
    "tags": ["Content Integration", "Ready-2-Deploy"],
    "image": {
      "src": "images/clement-h-95YRwf6CNw8-unsplash.jpg",
      "alt": "Quick Setup",
      "linkTo": "https://github.com/konstantinmuenster/gatsby-starter-portfolio-minimal-theme"
    },
    "links": [
      {
        "type": "github",
        "url": "https://github.com/konstantinmuenster/gatsby-starter-portfolio-minimal-theme"
      },
      {
        "type": "external",
        "url": "https://www.gatsbyjs.org/docs/mdx/writing-pages/"
      }
    ]
  },
  {
    "visible": true,
    "category": "web development",
    "title": "E commerce website",
    "description": "Get up and running within minutes. Just install the starter, add your content, deploy it, and there you go! This starter works seamlessly with hosts like Netlify. Photo by Clément H on Unsplash.",
    "tags": ["Content Integration", "Ready-2-Deploy"],
    "image": {
      "src": "images/clement-h-95YRwf6CNw8-unsplash.jpg",
      "alt": "Quick Setup",
      "linkTo": "https://github.com/konstantinmuenster/gatsby-starter-portfolio-minimal-theme"
    },
    "links": [
      {
        "type": "github",
        "url": "https://github.com/konstantinmuenster/gatsby-starter-portfolio-minimal-theme"
      },
      {
        "type": "external",
        "url": "https://www.gatsbyjs.org/docs/mdx/writing-pages/"
      }
    ]
  },
  {
    "visible": true,
    "category": "web development",
    "title": "E commerce website",
    "description": "Get up and running within minutes. Just install the starter, add your content, deploy it, and there you go! This starter works seamlessly with hosts like Netlify. Photo by Clément H on Unsplash.",
    "tags": ["Content Integration", "Ready-2-Deploy"],
    "image": {
      "src": "images/clement-h-95YRwf6CNw8-unsplash.jpg",
      "alt": "Quick Setup",
      "linkTo": "https://github.com/konstantinmuenster/gatsby-starter-portfolio-minimal-theme"
    },
    "links": [
      {
        "type": "github",
        "url": "https://github.com/konstantinmuenster/gatsby-starter-portfolio-minimal-theme"
      },
      {
        "type": "external",
        "url": "https://www.gatsbyjs.org/docs/mdx/writing-pages/"
      }
    ]
  },
  {
    "visible": true,
    "category": "web development",
    "title": "E commerce website",
    "description": "Get up and running within minutes. Just install the starter, add your content, deploy it, and there you go! This starter works seamlessly with hosts like Netlify. Photo by Clément H on Unsplash.",
    "tags": ["Content Integration", "Ready-2-Deploy"],
    "image": {
      "src": "images/clement-h-95YRwf6CNw8-unsplash.jpg",
      "alt": "Quick Setup",
      "linkTo": "https://github.com/konstantinmuenster/gatsby-starter-portfolio-minimal-theme"
    },
    "links": [
      {
        "type": "github",
        "url": "https://github.com/konstantinmuenster/gatsby-starter-portfolio-minimal-theme"
      },
      {
        "type": "external",
        "url": "https://www.gatsbyjs.org/docs/mdx/writing-pages/"
      }
    ]
  }
];

const FilterContainer = styled.div`
  margin-bottom: 20px;
`;

const Projects = () => {
  const [filteredProjects, setFilteredProjects] = useState(projectsData);
  const [filter, setFilter] = useState('');

  // Extract unique categories
  const categories = Array.from(new Set(projectsData.map(p => p.category)));

  useEffect(() => {
    if (filter === '') {
      setFilteredProjects(projectsData);
    } else {
      setFilteredProjects(projectsData.filter(p => p.category === filter));
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
            <h3 class="style-module--Heading--2c002">Projects</h3>
            <FilterContainer>
              <label>Filter by Category: </label>
              {categories.map(category => (
                <FilterButton 
                  key={category}
                  label={category}
                  isActive={filter === category}
                  onClick={() => setFilter(category)}
                />
              ))}
              <FilterButton 
                label="Clear Filter"
                isActive={filter === ''}
                onClick={() => setFilter('')}
              />
            </FilterContainer>
            <ProjectsGrid>
              {filteredProjects.map(project => {
                const imageNode = data.allFile.nodes.find(node => node.relativePath === project.image.src);
                const imageData = imageNode.childImageSharp.gatsbyImageData;
                return <ProjectCard key={project.title} project={project} imageData={imageData} />;
              })}
            </ProjectsGrid>
          </Section>
        </Page>
    </>
  );
}

export default Projects;