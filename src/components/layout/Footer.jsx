import { siteConfig } from "../../config/site";
import { servicePages } from "../../data/servicePages";
import Logo from "../ui/Logo";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="section-container footer__top">
        <div>
          <Logo />
          <p>Tecnologia para negócios que querem ir além.</p>
        </div>
        <div className="footer__nav">
          <div>
            <strong>Menu</strong>
            {siteConfig.navigation.map((item) => (
              <a href={item.href} key={item.href}>
                {item.label}
              </a>
            ))}
          </div>
          <div>
            <strong>Soluções</strong>
            {servicePages.map((service) => (
              <a href={service.path} key={service.path}>
                {service.label}
              </a>
            ))}
          </div>
          <div>
            <strong>Contato</strong>
            <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
            <span>{siteConfig.location}</span>
          </div>
        </div>
      </div>
      <div className="section-container footer__bottom">
        <span>© {new Date().getFullYear()} DigiUP. Todos os direitos reservados.</span>
        <span>Move forward. Move UP.</span>
      </div>
    </footer>
  );
}
