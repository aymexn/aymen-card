// Centralized contact configuration
// WhatsApp: 0465 10 46 88 (Belgian international format: +32 465 10 46 88)

export const CONTACT = {
  name: "Aymen Derouiche",
  status: "Étudiant polyvalent",
  title: "Vente · Caisse · Horeca · Service client · Logistique",
  secondaryTitle: "Software · Full-Stack · AI · Systems",
  location: "Mons, Belgique",
  email: "aymen.derouiche@gmail.com",
  phone: process.env.NEXT_PUBLIC_PHONE_NUMBER || "+32465104688",
  phoneDisplay: "0465 10 46 88",
  phoneDisplayIntl: "+32 465 10 46 88",
  whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "32465104688",
  whatsappDisplay: "0465 10 46 88",
  whatsappDisplayIntl: "+32 465 10 46 88",
  linkedin: "https://linkedin.com/in/aymen-derouiche",
  github: "https://github.com/aymexn",
  portfolioUrl: "https://aymenderouiche.com",
};

export function getWhatsAppUrl(): string {
  const number = CONTACT.whatsappNumber.replace(/[^0-9]/g, "");
  return `https://wa.me/${number || "32465104688"}`;
}

export function downloadVCard(): void {
  const vcard = [
    "BEGIN:VCARD",
    "VERSION:3.0",
    "N:Derouiche;Aymen;;;",
    "FN:Aymen Derouiche",
    "TITLE:Étudiant polyvalent — Vente, Horeca & Tech",
    "ORG:Aymen Derouiche",
    `EMAIL;TYPE=INTERNET,PREF:${CONTACT.email}`,
    `TEL;TYPE=CELL,VOICE:${CONTACT.phoneDisplayIntl}`,
    `URL:${CONTACT.linkedin}`,
    `URL;TYPE=Portfolio:${CONTACT.portfolioUrl}`,
    "ADR;TYPE=HOME:;;;Mons;;;Belgique",
    "NOTE:Aymen Derouiche — Étudiant polyvalent disponible immédiatement à Mons pour missions en vente, caisse, horeca, service client et logistique.",
    "END:VCARD",
  ]
    .filter(Boolean)
    .join("\r\n");

  const blob = new Blob([vcard], { type: "text/vcard;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.setAttribute("download", "Aymen-Derouiche.vcf");
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}
