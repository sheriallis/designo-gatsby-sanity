import * as React from "react";
import CallToAction from "../components/CallToAction";
import HomepageHero from "../components/HomepageHero";
import ProjectLinkGrid from "../components/ProjectLinkGrid";
import WorkflowGrid from "../components/WorkflowGrid";

const IndexPage = () => {
  return (
    <>
      <HomepageHero />
      <ProjectLinkGrid />
      <WorkflowGrid />
      <CallToAction />
    </>
  );
};

export default IndexPage;
