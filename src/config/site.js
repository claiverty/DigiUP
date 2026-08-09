const phoneE164 = "+5561998636443";

export const siteConfig = {
  name: "DigiUP",
  url: "https://digiuptech.com.br",
  email: "contatodigiup@gmail.com",
  phoneNumber: "+55 (61) 99863-6443",
  phoneE164,
  founderLinkedin: "https://www.linkedin.com/in/claiverty/",
  socials: [
    { label: "Instagram", href: "https://www.instagram.com/digiuptech/" },
    { label: "LinkedIn", href: "https://www.linkedin.com/company/digiuptech/" },
  ],
  whatsapp: `https://wa.me/${phoneE164.replace("+", "")}?text=Ol%C3%A1%21%20Vim%20pelo%20site%20da%20DigiUP%20e%20gostaria%20de%20conversar%20sobre%20um%20projeto.`,
  navigation: [
    { label: "Soluções", href: "/#solucoes" },
    { label: "Método", href: "/#metodo" },
    { label: "Sobre", href: "/#sobre" },
    { label: "F.A.Q", href: "/#faq" },
  ],
};
