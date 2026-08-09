import { siteConfig } from "../../config/site";
import { servicePages } from "../../data/servicePages";
import { trackLead } from "../../utils/analytics";
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
            <a
              href={siteConfig.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackLead("footer_whatsapp")}
            >
              {siteConfig.phoneNumber}
            </a>
            {siteConfig.socials.map((social) => (
              <a
                href={social.href}
                key={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${social.label} da DigiUP`}
              >
                {social.label}
              </a>
            ))}
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
