export const WHATSAPP_CONFIG = {
  phoneNumber: "33626834020",
  defaultMessage: "Bonjour, je souhaite analyser ma réputation en ligne et voir comment l'améliorer.",
} as const

export const CONTACT_EMAIL = "nextlevelagency33@gmail.com"

export function getWhatsAppUrl(message?: string): string {
  const msg = message || WHATSAPP_CONFIG.defaultMessage
  return `https://wa.me/${WHATSAPP_CONFIG.phoneNumber}?text=${encodeURIComponent(msg)}`
}
