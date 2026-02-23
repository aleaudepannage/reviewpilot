#!/bin/bash

echo "🔍 Vérification du build ReviewPilot..."
echo ""

# Couleurs
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Compteurs
ERRORS=0
WARNINGS=0

# 1. Vérifier que node_modules existe
echo "📦 Vérification des dépendances..."
if [ ! -d "node_modules" ]; then
    echo -e "${RED}❌ node_modules manquant. Exécutez 'pnpm install'${NC}"
    ERRORS=$((ERRORS + 1))
else
    echo -e "${GREEN}✅ Dépendances installées${NC}"
fi

# 2. Vérifier .env.local
echo ""
echo "🔐 Vérification des variables d'environnement..."
if [ ! -f ".env.local" ]; then
    echo -e "${YELLOW}⚠️  .env.local manquant. Copiez .env.local.example${NC}"
    WARNINGS=$((WARNINGS + 1))
else
    if grep -q "your_resend_api_key_here" .env.local; then
        echo -e "${YELLOW}⚠️  RESEND_API_KEY non configuré dans .env.local${NC}"
        WARNINGS=$((WARNINGS + 1))
    else
        echo -e "${GREEN}✅ Variables d'environnement configurées${NC}"
    fi
fi

# 3. Build Next.js
echo ""
echo "🏗️  Build Next.js..."
if npm run build > /dev/null 2>&1; then
    echo -e "${GREEN}✅ Build réussi${NC}"
else
    echo -e "${RED}❌ Échec du build${NC}"
    ERRORS=$((ERRORS + 1))
fi

# 4. Vérifier les fichiers critiques
echo ""
echo "📄 Vérification des fichiers critiques..."
CRITICAL_FILES=(
    "app/page.tsx"
    "app/layout.tsx"
    "app/api/contact/route.ts"
    "lib/constants.ts"
    "components/whatsapp-widget.tsx"
)

for file in "${CRITICAL_FILES[@]}"; do
    if [ ! -f "$file" ]; then
        echo -e "${RED}❌ Fichier manquant: $file${NC}"
        ERRORS=$((ERRORS + 1))
    fi
done

if [ $ERRORS -eq 0 ]; then
    echo -e "${GREEN}✅ Tous les fichiers critiques présents${NC}"
fi

# Résumé
echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
if [ $ERRORS -eq 0 ] && [ $WARNINGS -eq 0 ]; then
    echo -e "${GREEN}✅ SUCCÈS - Prêt pour la production !${NC}"
    exit 0
elif [ $ERRORS -eq 0 ]; then
    echo -e "${YELLOW}⚠️  ATTENTION - $WARNINGS avertissement(s)${NC}"
    exit 0
else
    echo -e "${RED}❌ ÉCHEC - $ERRORS erreur(s), $WARNINGS avertissement(s)${NC}"
    exit 1
fi
