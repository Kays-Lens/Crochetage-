# 🧶 L'Atelier de Clémence — Site Vitrine Artisanal (Crochet & Tricot)

> [!NOTE]
> Le site vitrine pour les créations artisanales en crochet, tricot et fait main est prêt ! Il est accessible localement à l'adresse **`http://localhost:8080`** et à la racine de votre dossier de travail `c:\Users\DEL\MobiDrive\Crochetage`.

---

## 🌟 Aperçu du Design & Visuels Générés

Le site adopte une direction artistique **Chic & Chaleureuse**, mettant à l'honneur un effet **Glassmorphism de haute précision** (verre dépoli, reflets lumineux, orbes flottants animés et thèmes Clair / Sombre interchangeables).

````carousel
![Hero Banner - Créations au crochet et tricot](C:\Users\DEL\.gemini\antigravity-ide\brain\11f3ada4-3951-4e5a-9589-56cba8b58c24\hero_crochet_artisanal_1790649324252.png)
<!-- slide -->
![Clémence - Artiste & Créatrice](C:\Users\DEL\.gemini\antigravity-ide\brain\11f3ada4-3951-4e5a-9589-56cba8b58c24\artisan_portrait_1790649348775.png)
<!-- slide -->
![Peluches & Doudous Amigurumi](C:\Users\DEL\.gemini\antigravity-ide\brain\11f3ada4-3951-4e5a-9589-56cba8b58c24\amigurumi_creations_1790649384086.png)
<!-- slide -->
![Vêtements et Gilets Tricotés Main](C:\Users\DEL\.gemini\antigravity-ide\brain\11f3ada4-3951-4e5a-9589-56cba8b58c24\knitted_apparel_1790649407845.png)
<!-- slide -->
![Décoration Bohème d'Intérieur](C:\Users\DEL\.gemini\antigravity-ide\brain\11f3ada4-3951-4e5a-9589-56cba8b58c24\home_decor_1790649427110.png)
````

---

## 🚀 Sections & Fonctionnalités Clés

### 1. 🏠 Page d'Accueil & En-Tête Glassmorphism
- **Navbar Flottante en Verre** avec effet de flou `backdrop-filter`, bouton de bascule de Thème (Light/Dark Glass) et bouton CTA d'action rapide.
- **Hero Section Sublimée** avec titre en dégradé rose/terracotta/or, badges statistiques animés, sous-titres éco-responsables et visuel principal du produit.
- **Bandeau Engagements** (100% Artisanal, Laines Bio Oeko-Tex, Sur-Mesure, Emballage Cadeau Poétique).

### 2. 🖼️ Galerie Interactive des Créations
- **Filtres par Catégories dynamiques** (*Toutes*, *Amigurumis & Doudous*, *Vêtements & Mode*, *Décoration*, *Accessoires*).
- **Cartes Glassmorphic** avec effets de survol, badges d'état (*En Stock*, *Sur Commande*), étiquettes (*Best-Seller*, *Coup de Cœur*).
- **Système de Favoris / Likes interactif** avec sauvegarde du nombre de mentions "J'aime".
- **Modal Lightbox de Détail** : affichage grand format avec conseils d'entretien, matières utilisées, dimensions exactes et bouton de réservation direct.

### 3. 👩‍🎨 Section À Propos & Processus Créatif
- **Histoire de Clémence**, la créatrice passionnée, sa vision éco-responsable et ses valeurs zéro déchet.
- **Timeline en 4 étapes** expliquant la confection d'une pièce : *Croquis & Échange ➔ Choix des fils ➔ Crochetage minutieux ➔ Envoi féerique*.

### 4. 🧰 Services & Prestations
- Grille de services détaillant : *Créations Naissance*, *Tricot & Mode Sur-Mesure*, *Déco d'Intérieur & Macramé*, et *Ateliers & Cours de Crochet*.

### 5. 🎨 Simulateur & Estimateur Sur-Mesure (Projet Interactif)
- **Calculateur en temps réel** :
  1. Choix du type de création (Doudou, Vêtement, Déco, Accessoire).
  2. Sélection de la palette de couleurs (Pastel Douceur, Terracotta, Vert Sauge, Monochrome).
  3. Options de personnalisation (Broderie du prénom, Coffret Cadeau, Livraison Express).
- **Aperçu visuel dynamique** actualisant instantanément l'estimation du prix et le délai de réalisation.
- **Bouton d'envoi direct vers le formulaire de contact** avec pré-remplissage du message !

### 6. 💬 Témoignages & FAQ
- **Carrousel d'avis clients** avec notes 5 étoiles et transition automatique.
- **Accordion FAQ interactif** répondant aux questions d'entretien, de délais et d'expédition.

### 7. ✉️ Formulaire de Contact & Footer Glassmorphic
- **Formulaire complet** avec validation dynamique des champs et notification *Toast* de confirmation.
- **Informations directes de l'atelier** (Email, Téléphone, Bordeaux, Réseaux sociaux).
- **Footer complet** avec inscription à la newsletter, liens rapides et engagements de la marque.

### 8. 📱 Responsive & Ergonomie Mobile
- Menu latéral **Drawer coulissant** spécialement conçu pour smartphones et tablettes.
- Interface tactile optimisée avec zones d'interaction larges.

---

## 📁 Architecture des Fichiers

```
Crochetage/
├── index.html                   # Structure HTML5 sémantique & SEO
├── assets/
│   ├── css/
│   │   └── style.css            # Design system Glassmorphism & Responsive
│   ├── js/
│   │   └── main.js              # Logique JS (Calculateur, Filtres, Dark Mode, Modal)
│   └── images/
│       ├── hero.png             # Visuel principal Hero
│       ├── artisan.png          # Portrait de la créatrice
│       ├── amigurumi.png        # Peluches et doudous
│       ├── clothing.png         # Gilets et tricot
│       └── decor.png            # Suspension et déco d'intérieur
```

---

## 💻 Comment Tester le Site

Le serveur local est déjà en cours d'exécution. Vous pouvez le consulter directement dans votre navigateur :

```bash
http://localhost:8080
```

Pour relancer le serveur manuellement si nécessaire :
```powershell
python -m http.server 8080
```
