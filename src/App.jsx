import Home from "./pages/Home";
import ServicePage from "./pages/ServicePage";
import { getServicePage } from "./data/servicePages";
import { getLocalPage } from "./data/localPages";

export default function App({ path = "/" }) {
  const service = getServicePage(path) || getLocalPage(path);

  if (service) {
    return <ServicePage service={service} />;
  }

  return <Home />;
}
