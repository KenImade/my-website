import React from 'react';
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardLink,
  MDBListGroup,
  MDBListGroupItem
} from 'mdb-react-ui-kit';

export default function ProjectCard({project}) {
  return (
    <MDBCard>
      <MDBCardImage position='top' alt={project.image.alt} src={project.image.src} />
      <MDBCardBody>
        <MDBCardTitle>{project.title}</MDBCardTitle>
        <MDBCardText>
          {project.description}
        </MDBCardText>
      </MDBCardBody>
      <MDBListGroup flush>
        {
            project.tags.map((tag, idx) => 
                <MDBListGroupItem key = {idx}>{tag}</MDBListGroupItem>)
        }
      </MDBListGroup>
      <MDBCardBody>
        {
            project.links.map((link, idx) => <MDBCardLink key={idx} href={link.url}>{link.type}</MDBCardLink>)
        }
      </MDBCardBody>
    </MDBCard>
  );
}