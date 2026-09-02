// Centralized contact configuration
// Edit this file or set environment variables in Vercel / .env.local

export const CONTACT = {
  name: "Aymen Derouiche",
  title: "AI Systems & Product Engineer",
  location: "Mons, Belgique",
  email: "aymen.derouiche@gmail.com",
  phone: process.env.NEXT_PUBLIC_PHONE_NUMBER || "+32XXXXXXXXX",
  whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "",
  linkedin: "https://linkedin.com/in/aymen-derouiche",
  github: "https://github.com/aymexn",
  portfolioUrl: "https://aymenderouiche.com",
};

export function getWhatsAppUrl(): string | null {
  const number = CONTACT.whatsappNumber.replace(/[^0-9]/g, "");
  if (!number) return null;
  return `https://wa.me/${number}`;
}

export function downloadVCard(): void {
  const phoneClean = CONTACT.phone.includes("X") ? "" : CONTACT.phone;
  const vcard = [
    "BEGIN:VCARD",
    "VERSION:3.0",
    "N:Derouiche;Aymen;;;",
    "FN:Aymen Derouiche",
    "TITLE:AI Systems & Product Engineer",
    "ORG:Aymen Derouiche",
    `EMAIL;TYPE=INTERNET,PREF:${CONTACT.email}`,
    phoneClean ? `TEL;TYPE=CELL,VOICE:${phoneClean}` : "",
    `URL:${CONTACT.linkedin}`,
    `URL;TYPE=GitHub:${CONTACT.github}`,
    "ADR;TYPE=HOME:;;;Mons;;;Belgique",
    "NOTE:Aymen — I build, I learn, I create, I work, I explore. Tech, Design, Operations, Life.",
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
