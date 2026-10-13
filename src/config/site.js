const phoneE164 = "+5561996419441";
const defaultWhatsAppMessage =
  "Olá! Vim pelo site da DigiUP e gostaria de conversar sobre um projeto.";

export function getWhatsAppUrl(message = defaultWhatsAppMessage) {
  return `https://wa.me/${phoneE164.replace("+", "")}?text=${encodeURIComponent(message)}`;
}

export const siteConfig = {
  name: "DigiUP",
  url: "https://digiuptech.com.br",
  email: "contatodigiup@gmail.com",
  phoneNumber: "+55 (61) 99641-9441",
  phoneE164,
  founderLinkedin: "https://www.linkedin.com/in/claiverty/",
  socials: [
    { label: "Instagram", href: "https://www.instagram.com/digiuptech/" },
    { label: "LinkedIn", href: "https://www.linkedin.com/company/digiuptech/" },
  ],
  whatsapp: getWhatsAppUrl(),
  navigation: [
    { label: "Soluções", href: "/#solucoes" },
    { label: "Método", href: "/#metodo" },
    { label: "Sobre", href: "/#sobre" },
    { label: "F.A.Q", href: "/#faq" },
  ],
};
