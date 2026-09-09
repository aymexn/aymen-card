# Aymen Derouiche — Carte Numérique Personnelle & Portfolio QR

Site portfolio personnel à haute performance et finition niveau Awwwards, conçu comme l'extension numérique immédiate d'une carte de visite physique avec QR code.

Construit pour smartphone en priorité (scan de QR code en situation réelle) tout en offrant une profondeur visuelle, du parallaxe et une fluidité de défilement exemplaires sur grand écran.

---

## Architecture de l'Information (IA en 4 temps)

1. **HERO** : Portrait grand format intégré par masque dégradé, nom, sous-titre à la première personne, devise stylisée (`BUILD · LEARN · CREATE · WORK · EXPLORE`) et accent géométrique 3D discret.
2. **DEUX PARCOURS (TWO PATHS)** : Sélecteur split-panel interactif présentant les deux trajectoires professionnelles :
   - **Tech & Software** (`#tech`) : Architectures SaaS, IA multi-agents, Next.js, Python, PostgreSQL.
   - **Retail & Hospitality** (`#hospitality`) : Rigueur de caisse POS, rush horeca, logistique des stocks, sens client.
   *Les tags de compétences ne sont déclarés qu'une seule fois ici.*
3. **PROJET PHARE (SELECTED WORK)** : Présentation teaser type étude de cas d'**AtlasERP & Agents IA**, métriques de performance, schéma d'architecture et passerelle vers le portfolio complet.
4. **CONTACT DIRECT** : Canaux immédiats (WhatsApp conditionnel, email avec copie en 1 clic et notification toast, LinkedIn, GitHub, appel direct et téléchargement instantané du fichier contact `.vcf`).

---

## Optimisations Ultra-Fast Mobile

- **Suppression du délai de 300ms** : `touch-action: manipulation` et `-webkit-tap-highlight-color: transparent` appliqués à tous les boutons et liens.
- **Physics 120Hz Native Touch** : Lenis smooth-scroll n'est activé que sur les périphériques de bureau avec souris (`pointer: fine`). Sur smartphone, le défilement tactile natif avec accélération matérielle (`-webkit-overflow-scrolling: touch`) est conservé pour une réactivité instantanée sous le doigt.
- **Accélération matérielle & désactivation WebGL sur mobile** : L'accent 3D Three.js est exécuté sur desktop uniquement pour préserver à 100% l'autonomie et les performances CPU/GPU du téléphone.
- **Composants magnétiques transparents au touch** : Les calculs magnétiques sont bypassés sur mobile pour déclencher les clics immédiatement.

---

## Stack Technique

- **Framework** : Next.js 16+ (App Router), React 19, TypeScript
- **Styling** : Tailwind CSS v4, tokens CSS personnalisés (Midnight Navy, Warm Off-White, Luminescent Cyan, Muted Gold)
- **Animation** : Framer Motion, Lenis (desktop smooth-scroll)
- **3D Accent** : Three.js (accent filaire discret, désactivé sur mobile)
- **Icônes** : Lucide React + Icônes vectorielles officielles

---

## Configuration & Variables d'Environnement

Créez un fichier `.env.local` à la racine :

```env
# Numéro WhatsApp au format international sans + ni espaces (ex: 32470123456)
NEXT_PUBLIC_WHATSAPP_NUMBER=""

# Numéro pour appel direct téléphonique (optionnel)
NEXT_PUBLIC_PHONE_NUMBER=""
```

Si `NEXT_PUBLIC_WHATSAPP_NUMBER` n'est pas renseigné, un badge élégant "Bientôt actif" s'affiche automatiquement sans erreur.

---

## Lancer le Projet Localement

```bash
# 1. Installer les dépendances
npm install

# 2. Lancer le serveur de développement
npm run dev

# 3. Ouvrir dans votre navigateur
# http://localhost:3000
```

Pour tester la compilation de production et valider le typage :

```bash
npm run build
```

---

## Déploiement sur Vercel (Zero-Config)

Le projet est entièrement statique et optimisé pour Vercel.

### Option 1 : Via le Dashboard Vercel
1. Importez votre dépôt GitHub sur [vercel.com/new](https://vercel.com/new).
2. Dans **Environment Variables**, ajoutez si souhaité :
   - `NEXT_PUBLIC_WHATSAPP_NUMBER` = votre numéro (ex: `32470123456`)
   - `NEXT_PUBLIC_PHONE_NUMBER` = votre numéro d'appel
3. Cliquez sur **Deploy**.

### Option 2 : Via la CLI Vercel
```bash
npm install -g vercel
vercel
```
Le build static sera généré et déployé en quelques secondes avec zéro configuration supplémentaire.