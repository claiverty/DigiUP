import { siteConfig } from "../../config/site";
import Logo from "../ui/Logo";
import { trackLead } from "../../utils/analytics";

export default function Header() {
  return (
    <header className="site-header">
      <div className="nav-shell">
        <a href="/" aria-label="DigiUP — início" className="brand-link">
          <Logo />
        </a>

        <nav className="desktop-nav" aria-label="Navegação principal">
          {siteConfig.navigation.map((item) => (
            <a href={item.href} key={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <a
          className="nav-cta"
          href="/#contato"
          onClick={() => trackLead("header_contact")}
        >
          Fale com a DigiUP
          <svg className="nav-cta__icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M5 12h14m-6-6 6 6-6 6" />
          </svg>
        </a>

        <details className="mobile-nav">
          <summary aria-label="Abrir menu">
            <span className="mobile-nav__icon" aria-hidden="true">
              <i />
              <i />
              <i />
            </span>
          </summary>
          <nav aria-label="Navegação móvel">
            {siteConfig.navigation.map((item) => (
              <a href={item.href} key={item.href}>
                {item.label}
              </a>
            ))}
            <a href="/#contato" onClick={() => trackLead("mobile_menu_contact")}>
              Iniciar projeto
            </a>
          </nav>
        </details>
      </div>
    </header>
  );
}
