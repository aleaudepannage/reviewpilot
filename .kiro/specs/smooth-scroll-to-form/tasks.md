# Implementation Plan: Smooth Scroll to Form

## Overview

Ce plan d'implémentation transforme le design en étapes concrètes de développement. L'approche consiste à améliorer le composant `SmoothScroll` existant avec un calcul de position optimisé, puis à ajouter les animations CSS au composant `Pricing`. Chaque tâche inclut des sous-tâches de test pour valider les propriétés de correction définies dans le design.

## Tasks

- [ ] 1. Améliorer le composant SmoothScroll avec calcul de position optimisé
  - Extraire la fonction `calculateOptimalScrollPosition` du composant existant
  - Implémenter la logique de centrage vertical pour les petites sections
  - Implémenter la logique de positionnement header-aware pour les grandes sections
  - Ajouter la validation des dimensions et la gestion d'erreur
  - Ajouter le support de prefers-reduced-motion
  - _Requirements: 1.1, 1.4, 2.1, 2.2, 3.2, 3.4, 7.1_

- [ ]* 1.1 Écrire les tests de propriété pour le calcul de position
  - **Property 2: Optimal centering for small sections**
  - **Validates: Requirements 2.1**

- [ ]* 1.2 Écrire les tests de propriété pour les grandes sections
  - **Property 3: Header-aware positioning for large sections**
  - **Validates: Requirements 2.2**

- [ ]* 1.3 Écrire les tests de propriété pour la soustraction d'offset
  - **Property 4: Offset subtraction in scroll calculation**
  - **Validates: Requirements 3.2**

- [ ]* 1.4 Écrire les tests de propriété pour les positions non-négatives
  - **Property 5: Non-negative scroll position**
  - **Validates: Requirements 3.4**

- [ ]* 1.5 Écrire les tests unitaires pour les cas limites
  - Tester avec viewport très petit (mobile)
  - Tester avec section très grande
  - Tester avec dimensions invalides (NaN)
  - _Requirements: 3.1, 3.4_

- [ ] 2. Améliorer la gestion des événements dans SmoothScroll
  - Implémenter l'interception des clics sur tous les liens href="#pricing"
  - Ajouter la prévention du comportement par défaut
  - Assurer le nettoyage des event listeners lors du démontage
  - _Requirements: 1.1, 1.4, 6.1, 7.4_

- [ ]* 2.1 Écrire les tests de propriété pour l'interception des clics
  - **Property 1: Click interception for anchor links**
  - **Validates: Requirements 1.1, 1.4, 6.1**

- [ ]* 2.2 Écrire les tests de propriété pour le cleanup
  - **Property 10: Event listener cleanup**
  - **Validates: Requirements 7.4**

- [ ]* 2.3 Écrire les tests unitaires pour les cas d'erreur
  - Tester avec élément cible introuvable
  - Tester avec href invalide
  - _Requirements: 1.1_

- [ ] 3. Checkpoint - Vérifier que le scroll fluide fonctionne
  - Ensure all tests pass, ask the user if questions arise.

- [ ] 4. Ajouter les animations CSS au composant Pricing
  - Créer les keyframes fadeInUp dans globals.css
  - Ajouter les classes pricing-form-animate et visible
  - Implémenter le support de prefers-reduced-motion dans le CSS
  - Configurer la durée d'animation à 600ms avec ease-out
  - _Requirements: 4.1, 4.3, 4.5, 4.6, 7.1, 7.3_

- [ ]* 4.1 Écrire les tests unitaires pour les animations CSS
  - Vérifier que la durée est 600ms
  - Vérifier que la courbe est ease-out
  - Vérifier que les propriétés utilisées sont transform et opacity
  - Vérifier que animation-fill-mode est forwards
  - _Requirements: 4.3, 4.5, 7.3_

- [ ] 5. Implémenter la détection de visibilité dans Pricing
  - Ajouter le state isVisible et le ref sectionRef
  - Implémenter IntersectionObserver avec threshold 0.2
  - Configurer rootMargin à '-80px 0px 0px 0px' pour compenser le header
  - Ajouter le fallback pour les navigateurs sans IntersectionObserver
  - Appliquer conditionnellement la classe 'visible' au Form_Container
  - _Requirements: 4.1, 4.6_

- [ ]* 5.1 Écrire les tests de propriété pour le déclenchement d'animation
  - **Property 6: Animation trigger on visibility**
  - **Validates: Requirements 4.1**

- [ ]* 5.2 Écrire les tests de propriété pour la persistance de l'état
  - **Property 7: Animation state persistence**
  - **Validates: Requirements 4.6**

- [ ]* 5.3 Écrire les tests unitaires pour les cas d'erreur
  - Tester le fallback sans IntersectionObserver
  - Tester avec différents seuils de visibilité
  - _Requirements: 4.1_

- [ ] 6. Implémenter la réactivité au redimensionnement
  - Assurer que calculateOptimalScrollPosition utilise window.innerHeight en temps réel
  - Vérifier que les calculs sont corrects après redimensionnement
  - _Requirements: 5.3, 5.5_

- [ ]* 6.1 Écrire les tests de propriété pour la réactivité au viewport
  - **Property 8: Viewport resize responsiveness**
  - **Validates: Requirements 5.5**

- [ ]* 6.2 Écrire les tests unitaires pour les différentes tailles de viewport
  - Tester avec viewport desktop (1920x1080)
  - Tester avec viewport tablet (768x1024)
  - Tester avec viewport mobile (375x667)
  - _Requirements: 5.3, 5.4_

- [ ] 7. Implémenter le support de prefers-reduced-motion
  - Ajouter la détection du media query dans SmoothScroll
  - Utiliser behavior: 'auto' quand prefers-reduced-motion est activé
  - Ajouter le media query CSS pour désactiver les animations
  - _Requirements: 7.1_

- [ ]* 7.1 Écrire les tests de propriété pour reduced motion
  - **Property 9: Reduced motion preference**
  - **Validates: Requirements 7.1**

- [ ]* 7.2 Écrire les tests unitaires pour les préférences d'accessibilité
  - Tester avec prefers-reduced-motion: reduce
  - Tester avec prefers-reduced-motion: no-preference
  - Vérifier que le fallback fonctionne si non supporté
  - _Requirements: 7.1_

- [ ] 8. Checkpoint final - Vérifier l'intégration complète
  - Ensure all tests pass, ask the user if questions arise.

- [ ] 9. Intégration et validation finale
  - Vérifier que tous les CTAs (Hero, CtaSection) déclenchent le scroll
  - Vérifier que le formulaire est correctement centré sur desktop et mobile
  - Vérifier que les animations se déclenchent correctement
  - Vérifier que prefers-reduced-motion est respecté
  - _Requirements: 1.1, 2.1, 2.2, 4.1, 6.1, 7.1_

- [ ]* 9.1 Écrire les tests d'intégration
  - Tester le flux complet: clic CTA → scroll → animation
  - Tester avec différents CTAs (Hero, CtaSection)
  - Tester sur différentes tailles de viewport
  - _Requirements: 1.1, 6.1_

## Notes

- Les tâches marquées avec `*` sont optionnelles et peuvent être sautées pour un MVP plus rapide
- Chaque tâche référence les requirements spécifiques pour la traçabilité
- Les checkpoints assurent une validation incrémentale
- Les tests de propriétés valident les propriétés de correction universelles
- Les tests unitaires valident les exemples spécifiques et les cas limites
- Framework de test recommandé: fast-check pour les tests de propriétés, Jest + React Testing Library pour les tests unitaires
- Configuration minimale: 100 itérations par test de propriété
