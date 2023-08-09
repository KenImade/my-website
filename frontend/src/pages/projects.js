import React from "react";
import { Seo, Page, ProjectsSection } from "gatsby-theme-portfolio-minimal";

const projects = () => {
  return (
    <>
        <Seo title="Projects" />
        <Page useSplashScreenAnimation>
            <ProjectsSection></ProjectsSection>
        </Page>
    </>
  )
}
export default projects