import Home from "./pages/Home";
import ServicePage from "./pages/ServicePage";
import { getServicePage } from "./data/servicePages";
import { getLocalPage } from "./data/localPages";
import useScrollReveal from "./hooks/useScrollReveal";
import useSmoothScroll from "./hooks/useSmoothScroll";

export default function App({ path = "/" }) {
  useSmoothScroll();
  useScrollReveal(path);

  const service = getServicePage(path) || getLocalPage(path);

  if (service) {
    return <ServicePage service={service} />;
  }

  return <Home />;
}
