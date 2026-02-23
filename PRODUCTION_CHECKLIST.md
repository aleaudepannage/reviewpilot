# Checklist de Mise en Production - ReviewPilot

## ✅ Avant le Déploiement

### Configuration
- [ ] Configurer `RESEND_API_KEY` dans les variables d'environnement de production
- [ ] Vérifier que l'email de destination est correct dans `lib/constants.ts`
- [ ] Configurer un domaine personnalisé pour Resend (remplacer `onboarding@resend.dev`)
- [ ] Vérifier le numéro WhatsApp dans `lib/constants.ts`

### Tests Fonctionnels
- [ ] Tester le formulaire de contact (envoi d'email)
- [ ] Tester tous les liens de navigation (scroll smooth)
- [ ] Tester le widget WhatsApp
- [ ] Tester tous les CTA (boutons d'action)
- [ ] Vérifier le responsive (mobile, tablet, desktop)

### Tests Visuels
- [ ] Vérifier toutes les sections sur desktop
- [ ] Vérifier toutes les sections sur mobile
- [ ] Vérifier les animations et transitions
- [ ] Vérifier les couleurs et le contraste
- [ ] Vérifier les polices et la typographie

### Performance
- [ ] Exécuter `pnpm build` sans erreurs
- [ ] Exécuter `pnpm verify` avec succès
- [ ] Vérifier la taille du build (< 50MB)
- [ ] Tester le temps de chargement initial

### SEO & Analytics
- [ ] Vérifier les meta tags dans `app/layout.tsx`
- [ ] Vérifier que Vercel Analytics est configuré
- [ ] Vérifier le favicon et les icônes
- [ ] Vérifier le titre et la description

## 🚀 Déploiement

### Sur Vercel (Recommandé)
```bash
# Installer Vercel CLI
npm i -g vercel

# Se connecter
vercel login

# Déployer
vercel --prod
```

### Variables d'Environnement Vercel
1. Aller dans Project Settings > Environment Variables
2. Ajouter `RESEND_API_KEY` avec votre clé API
3. Redéployer si nécessaire

## ✅ Après le Déploiement

### Tests en Production
- [ ] Tester le formulaire de contact en production
- [ ] Vérifier que les emails arrivent bien
- [ ] Tester le widget WhatsApp
- [ ] Vérifier tous les liens et CTA
- [ ] Tester sur différents navigateurs (Chrome, Firefox, Safari)
- [ ] Tester sur mobile réel (iOS et Android)

### Monitoring
- [ ] Vérifier les logs Vercel
- [ ] Vérifier les analytics
- [ ] Configurer des alertes d'erreur (optionnel)

### Documentation
- [ ] Documenter l'URL de production
- [ ] Documenter les accès (Vercel, Resend, etc.)
- [ ] Partager les credentials avec l'équipe

## 🔧 Configuration Resend

### Domaine Personnalisé
1. Aller sur https://resend.com/domains
2. Ajouter votre domaine
3. Configurer les DNS (SPF, DKIM, DMARC)
4. Vérifier le domaine
5. Mettre à jour `from:` dans `app/api/contact/route.ts`

Exemple:
```typescript
from: 'ReviewPilot <contact@votredomaine.com>'
```

## 📊 Métriques de Succès

### Performance
- Temps de chargement initial: < 2s
- First Contentful Paint: < 1.5s
- Time to Interactive: < 3s

### Fonctionnel
- Taux de succès formulaire: > 95%
- Taux de livraison email: > 98%
- Disponibilité: > 99.9%

## 🆘 En Cas de Problème

### Formulaire ne fonctionne pas
1. Vérifier `RESEND_API_KEY` dans les variables d'environnement
2. Vérifier les logs Vercel
3. Vérifier les logs Resend
4. Tester l'API en local

### Emails non reçus
1. Vérifier le spam
2. Vérifier l'email de destination dans `lib/constants.ts`
3. Vérifier les logs Resend
4. Vérifier la configuration DNS si domaine personnalisé

### Build échoue
1. Exécuter `pnpm build` en local
2. Vérifier les erreurs TypeScript
3. Vérifier les dépendances
4. Nettoyer `.next` et rebuilder

## 📞 Support

- Documentation Next.js: https://nextjs.org/docs
- Documentation Resend: https://resend.com/docs
- Documentation Vercel: https://vercel.com/docs

---

**Date de dernière mise à jour**: 23 février 2026
