import { useEffect, useRef } from "react";
import ButtonWords from "../ui/ButtonWords";
import { siteConfig } from "../../config/site";
import { trackLead } from "../../utils/analytics";

export default function Header() {
  const menuRef = useRef(null);

  useEffect(() => {
    const closeOnOutsidePointer = (event) => {
      if (menuRef.current?.open && !menuRef.current.contains(event.target)) {
        menuRef.current.open = false;
      }
    };

    const closeOnEscape = (event) => {
      if (event.key !== "Escape" || !menuRef.current?.open) return;

      menuRef.current.open = false;
      menuRef.current.querySelector("summary")?.focus();
    };

    document.addEventListener("pointerdown", closeOnOutsidePointer);
    document.addEventListener("keydown", closeOnEscape);

    return () => {
      document.removeEventListener("pointerdown", closeOnOutsidePointer);
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, []);

  return (
    <header className="site-header">
      <div className="nav-shell">
        <a href="/" aria-label="DigiUP — início" className="brand-link">
          <img src="/digiup-symbol.svg" alt="" width="36" height="36" />
        </a>

        <div className="nav-controls">
          <details className="site-menu" ref={menuRef}>
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
            aria-label="Falar com a DigiUP pelo WhatsApp"
            href={siteConfig.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackLead("header_contact")}
          >
            <ButtonWords text="Falar com a DigiUP" />
          </a>
        </div>
      </div>
    </header>
  );
}
