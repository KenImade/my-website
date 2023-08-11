import styled from 'styled-components';

const ProjectsGrid = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    gap: 20px;  // Gap between projects

    @media (max-width: 768px) {  // Mobile breakpoint
        flex-direction: column;
    }
`;

export default ProjectsGrid;
