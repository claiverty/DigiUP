import ButtonWords from "../ui/ButtonWords";
import { siteConfig } from "../../config/site";
import { trackLead } from "../../utils/analytics";

export default function Header() {
  return (
    <header className="site-header">
      <div className="nav-shell">
        <a href="/" aria-label="DigiUP — início" className="brand-link">
          <img src="/digiup-symbol.svg" alt="" width="36" height="36" />
        </a>

        <div className="nav-controls">
          <details className="site-menu">
            <summary>
              <span className="site-menu__icon" aria-hidden="true">
                <i />
                <i />
              </span>
              <span>Menu</span>
            </summary>
            <nav className="site-menu__panel" aria-label="Navegação principal">
              {siteConfig.navigation.map((item) => (
                <a
                  href={item.href}
                  key={item.href}
                  onClick={(event) => event.currentTarget.closest("details")?.removeAttribute("open")}
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </details>

          <a
            className="nav-cta hero-button"
            aria-label="Falar com a DigiUP"
            href="/#contato"
            onClick={() => trackLead("header_contact")}
          >
            <ButtonWords text="Falar com a DigiUP" />
          </a>
        </div>
      </div>
    </header>
  );
}
