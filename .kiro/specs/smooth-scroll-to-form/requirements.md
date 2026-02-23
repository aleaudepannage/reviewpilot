# Requirements Document

## Introduction

Cette fonctionnalité améliore l'expérience utilisateur lors de la navigation vers le formulaire de diagnostic gratuit depuis les différents CTAs (Call-To-Action) présents sur la landing page. L'objectif est de fournir un scroll fluide et optimisé qui centre visuellement le formulaire dans la fenêtre, avec un décalage approprié pour éviter que le header fixe ne cache le contenu, et d'ajouter une animation subtile pour attirer l'attention sur le formulaire.

## Glossary

- **CTA (Call-To-Action)**: Bouton ou lien incitant l'utilisateur à effectuer une action (ex: "Passer à l'action", "Évaluer ma réputation")
- **Smooth_Scroll**: Comportement de défilement fluide et animé de la page
- **Form_Section**: Section de la page contenant le formulaire de diagnostic (id="pricing")
- **Header**: Barre de navigation fixe en haut de la page
- **Viewport**: Zone visible de la fenêtre du navigateur
- **Scroll_Offset**: Décalage vertical appliqué lors du scroll pour éviter que le header ne cache le contenu
- **Fade_In**: Animation d'apparition progressive (opacité 0 à 1)
- **Slide_Up**: Animation de glissement vers le haut
- **Form_Container**: Bloc complet du formulaire incluant le titre, les champs et le bouton de soumission

## Requirements

### Requirement 1: Navigation fluide vers le formulaire

**User Story:** En tant qu'utilisateur, je veux que le scroll vers le formulaire soit fluide et agréable, afin d'avoir une expérience de navigation professionnelle et moderne.

#### Acceptance Criteria

1. WHEN un utilisateur clique sur un CTA avec href="#pricing", THE Smooth_Scroll SHALL déclencher un défilement animé vers la Form_Section
2. THE Smooth_Scroll SHALL utiliser le comportement natif "smooth" du navigateur pour l'animation
3. WHEN le scroll est déclenché, THE Smooth_Scroll SHALL compléter l'animation en moins de 1000ms
4. THE Smooth_Scroll SHALL empêcher le comportement par défaut du navigateur (saut instantané)

### Requirement 2: Centrage vertical optimal du formulaire

**User Story:** En tant qu'utilisateur, je veux que le formulaire soit centré verticalement dans mon écran après le scroll, afin de pouvoir le voir entièrement sans avoir à ajuster manuellement ma position.

#### Acceptance Criteria

1. WHEN la Form_Section est plus petite que le Viewport, THE Smooth_Scroll SHALL centrer verticalement la Form_Section dans le Viewport
2. WHEN la Form_Section est plus grande que le Viewport, THE Smooth_Scroll SHALL positionner le haut de la Form_Section juste en dessous du Header
3. THE Smooth_Scroll SHALL calculer la position de scroll en tenant compte de la hauteur du Viewport
4. THE Smooth_Scroll SHALL calculer la position de scroll en tenant compte de la hauteur de la Form_Section

### Requirement 3: Décalage pour le header fixe

**User Story:** En tant qu'utilisateur, je veux que le header ne cache pas le haut du formulaire après le scroll, afin de pouvoir lire le titre et accéder à tous les champs sans obstruction.

#### Acceptance Criteria

1. THE Smooth_Scroll SHALL appliquer un Scroll_Offset minimal de 80px pour compenser la hauteur du Header
2. WHEN le scroll est calculé, THE Smooth_Scroll SHALL soustraire le Scroll_Offset de la position finale
3. THE Smooth_Scroll SHALL garantir que le Form_Container est entièrement visible après le scroll
4. THE Smooth_Scroll SHALL empêcher que la position de scroll soit négative

### Requirement 4: Animation visuelle du formulaire

**User Story:** En tant qu'utilisateur, je veux voir une animation subtile quand le formulaire apparaît, afin d'attirer mon attention sur le contenu important et de rendre l'expérience plus engageante.

#### Acceptance Criteria

1. WHEN la Form_Section entre dans le Viewport, THE Form_Container SHALL déclencher une animation Fade_In
2. WHEN la Form_Section entre dans le Viewport, THE Form_Container SHALL déclencher une animation Slide_Up
3. THE Form_Container SHALL compléter l'animation Fade_In en 600ms maximum
4. THE Form_Container SHALL compléter l'animation Slide_Up en 600ms maximum
5. THE Form_Container SHALL utiliser une courbe d'animation ease-out pour un effet naturel
6. WHEN l'animation est terminée, THE Form_Container SHALL rester dans son état final visible

### Requirement 5: Compatibilité multi-appareils

**User Story:** En tant qu'utilisateur mobile ou desktop, je veux que le scroll fluide fonctionne de manière optimale sur mon appareil, afin d'avoir une expérience cohérente quelle que soit ma plateforme.

#### Acceptance Criteria

1. THE Smooth_Scroll SHALL fonctionner correctement sur les navigateurs desktop (Chrome, Firefox, Safari, Edge)
2. THE Smooth_Scroll SHALL fonctionner correctement sur les navigateurs mobile (iOS Safari, Chrome Mobile)
3. WHEN l'appareil est en mode mobile, THE Smooth_Scroll SHALL ajuster le Scroll_Offset pour les headers mobiles
4. WHEN l'appareil est en mode mobile, THE Smooth_Scroll SHALL prendre en compte la hauteur réduite du Viewport
5. THE Smooth_Scroll SHALL détecter automatiquement la taille du Viewport lors du redimensionnement de la fenêtre

### Requirement 6: Gestion des CTAs multiples

**User Story:** En tant qu'utilisateur, je veux que tous les CTAs de la page (Hero, CtaSection) déclenchent le même comportement de scroll fluide, afin d'avoir une expérience cohérente peu importe d'où je clique.

#### Acceptance Criteria

1. THE Smooth_Scroll SHALL intercepter tous les clics sur les liens avec href="#pricing"
2. WHEN un CTA dans Hero est cliqué, THE Smooth_Scroll SHALL déclencher le scroll vers la Form_Section
3. WHEN un CTA dans CtaSection est cliqué, THE Smooth_Scroll SHALL déclencher le scroll vers la Form_Section
4. THE Smooth_Scroll SHALL appliquer le même comportement de centrage pour tous les CTAs
5. THE Smooth_Scroll SHALL appliquer la même animation pour tous les CTAs

### Requirement 7: Performance et accessibilité

**User Story:** En tant qu'utilisateur avec des préférences d'accessibilité ou une connexion lente, je veux que le scroll fluide respecte mes paramètres système et ne dégrade pas les performances, afin d'avoir une expérience accessible et rapide.

#### Acceptance Criteria

1. WHEN l'utilisateur a activé "prefers-reduced-motion", THE Smooth_Scroll SHALL désactiver les animations et utiliser un scroll instantané
2. THE Smooth_Scroll SHALL maintenir un taux de rafraîchissement de 60fps minimum pendant l'animation
3. THE Smooth_Scroll SHALL utiliser des propriétés CSS optimisées (transform, opacity) pour les animations
4. THE Smooth_Scroll SHALL nettoyer les event listeners lors du démontage du composant
5. WHEN le scroll est en cours, THE Smooth_Scroll SHALL permettre à l'utilisateur d'interrompre l'animation en scrollant manuellement
