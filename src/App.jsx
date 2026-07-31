import Home from "./pages/Home";
import ServicePage from "./pages/ServicePage";
import { getServicePage } from "./data/servicePages";

export default function App({ path = "/" }) {
  const service = getServicePage(path);

  if (service) {
    return <ServicePage service={service} />;
  }

  return <Home />;
}
