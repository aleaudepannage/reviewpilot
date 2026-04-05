export const WHATSAPP_CONFIG = {
  phoneNumber: "33626834020",
  defaultMessage: "Bonjour, je souhaite un audit gratuit de ma fiche Google My Business. Mon entreprise est [nom], secteur [activité], ville [ville].",
} as const

export const CONTACT_EMAIL = "nextlevelagency33@gmail.com"

export function getWhatsAppUrl(message?: string): string {
  const msg = message || WHATSAPP_CONFIG.defaultMessage
  return `https://wa.me/${WHATSAPP_CONFIG.phoneNumber}?text=${encodeURIComponent(msg)}`
}
