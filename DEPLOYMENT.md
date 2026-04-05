# Guide de Déploiement - ReviewPilot

## Étape 1 : Créer le Repository GitHub

1. Va sur https://github.com/new
2. Nom du repository : `reviewpilot` (ou le nom de ton choix)
3. Description : "Landing page ReviewPilot - Gestion de réputation en ligne"
4. Visibilité : **Private** (recommandé) ou Public
5. **NE PAS** initialiser avec README, .gitignore ou license (on a déjà tout)
6. Clique sur "Create repository"

## Étape 2 : Lier le Repository Local

Une fois le repo créé, GitHub va te donner des commandes. Utilise celles-ci :

```bash
# Ajouter le remote (remplace USERNAME par ton username GitHub)
git remote add origin https://github.com/aleaudepannage/reviewpilot.git

# Pousser le code
git push -u origin main
```

## Étape 3 : Déployer sur Vercel

### Option A : Via l'interface Vercel (Recommandé)

1. Va sur https://vercel.com/new
2. Connecte ton compte GitHub si ce n'est pas déjà fait
3. Sélectionne le repository `reviewpilot`
4. Configure les variables d'environnement :
   - Clique sur "Environment Variables"
   - Ajoute : `RESEND_API_KEY` = `ta_clé_resend`
5. Clique sur "Deploy"

### Option B : Via Vercel CLI

```bash
# Installer Vercel CLI
npm i -g vercel

# Se connecter
vercel login

# Déployer
vercel --prod
```

Pendant le déploiement, Vercel va te demander :
- Project name : `reviewpilot` (ou ton choix)
- Which scope : Ton compte
- Link to existing project : No
- In which directory : `./` (laisser par défaut)
- Override settings : No

## Étape 4 : Configurer les Variables d'Environnement sur Vercel

Si tu as déployé via CLI, ajoute les variables d'environnement :

1. Va sur https://vercel.com/dashboard
2. Sélectionne ton projet `reviewpilot`
3. Va dans Settings > Environment Variables
4. Ajoute :
   - **Key** : `RESEND_API_KEY`
   - **Value** : Ta clé API Resend
   - **Environments** : Production, Preview, Development (tous cochés)
5. Clique sur "Save"
6. Redéploie le projet (Settings > Deployments > ... > Redeploy)

## Étape 5 : Configurer un Domaine Personnalisé (Optionnel)

1. Dans ton projet Vercel, va dans Settings > Domains
2. Ajoute ton domaine (ex: reviewpilot.fr)
3. Suis les instructions pour configurer les DNS

## Étape 6 : Configurer Resend avec un Domaine Personnalisé

Pour que les emails ne soient pas marqués comme spam :

1. Va sur https://resend.com/domains
2. Ajoute ton domaine
3. Configure les enregistrements DNS (SPF, DKIM, DMARC)
4. Vérifie le domaine
5. Mets à jour `app/api/contact/route.ts` :
   ```typescript
   from: 'ReviewPilot <contact@tondomaine.com>'
   ```
6. Commit et push les changements

## Vérifications Post-Déploiement

- [ ] Le site est accessible sur l'URL Vercel
- [ ] Le formulaire de contact fonctionne
- [ ] Les emails arrivent bien
- [ ] Le widget WhatsApp fonctionne
- [ ] Toutes les sections s'affichent correctement
- [ ] Le responsive fonctionne (mobile/tablet/desktop)
- [ ] Les animations fonctionnent
- [ ] Le smooth scroll fonctionne

## Commandes Utiles

```bash
# Voir les logs de déploiement
vercel logs

# Lister les déploiements
vercel ls

# Ouvrir le projet dans le navigateur
vercel open

# Voir les variables d'environnement
vercel env ls
```

## Troubleshooting

### Le build échoue
- Vérifie que `RESEND_API_KEY` est bien configuré
- Vérifie les logs : `vercel logs`
- Teste le build en local : `pnpm build`

### Les emails ne partent pas
- Vérifie que `RESEND_API_KEY` est correct
- Vérifie les logs Resend : https://resend.com/logs
- Vérifie que l'email de destination est correct dans `lib/constants.ts`

### Le site est lent
- Vérifie les Core Web Vitals dans Vercel Analytics
- Optimise les images si nécessaire
- Vérifie qu'il n'y a pas d'erreurs dans la console

## URLs Importantes

- **GitHub** : https://github.com/aleaudepannage/reviewpilot
- **Vercel Dashboard** : https://vercel.com/dashboard
- **Resend Dashboard** : https://resend.com/dashboard
- **Vercel Analytics** : https://vercel.com/[ton-projet]/analytics

---

**Date de création** : 23 février 2026
