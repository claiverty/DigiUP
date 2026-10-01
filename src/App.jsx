import Home from "./pages/Home";
import ServicePage from "./pages/ServicePage";
import CaseStudyPage from "./pages/CaseStudyPage";
import { getServicePage } from "./data/servicePages";
import { getLocalPage } from "./data/localPages";
import { getCaseStudy } from "./data/caseStudies";
import useScrollReveal from "./hooks/useScrollReveal";
import useSmoothScroll from "./hooks/useSmoothScroll";

export default function App({ path = "/" }) {
  useSmoothScroll();
  useScrollReveal(path);

  const service = getServicePage(path) || getLocalPage(path);
  const project = getCaseStudy(path);

  if (project) {
    return <CaseStudyPage project={project} />;
  }

  if (service) {
    return <ServicePage service={service} />;
  }

  return <Home />;
}
