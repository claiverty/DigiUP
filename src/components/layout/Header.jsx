import { siteConfig } from "../../config/site";
import Logo from "../ui/Logo";

export default function Header() {
  return (
    <header className="site-header">
      <div className="nav-shell">
        <a href="#inicio" aria-label="DigiUP — início" className="brand-link">
          <Logo />
        </a>

        <nav className="desktop-nav" aria-label="Navegação principal">
          {siteConfig.navigation.map((item) => (
            <a href={item.href} key={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <a className="nav-cta" href="#contato">
          Fale com a DigiUP <span aria-hidden="true">→</span>
        </a>

        <details className="mobile-nav">
          <summary aria-label="Abrir menu">Menu</summary>
          <nav aria-label="Navegação móvel">
            {siteConfig.navigation.map((item) => (
              <a href={item.href} key={item.href}>
                {item.label}
              </a>
            ))}
            <a href="#contato">Iniciar projeto</a>
          </nav>
        </details>
      </div>
    </header>
  );
}
