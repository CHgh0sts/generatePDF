# FacturX - Générateur de PDF Professionnel

![Next.js](https://img.shields.io/badge/Next.js-16.0.3-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)
![Prisma](https://img.shields.io/badge/Prisma-ORM-2D3748)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38B2AC)

**FacturX** est une application web moderne permettant de créer, gérer et générer des documents PDF professionnels (factures, devis, bons de commande, bons de livraison) avec un éditeur visuel intuitif et un système d'API pour l'automatisation.

## ✨ Fonctionnalités Principales

### 🎨 Éditeur Visuel Avancé
- **Drag & Drop** : Ajoutez et positionnez des éléments par simple glisser-déposer
- **Éléments multiples** : Texte, images, tableaux, conteneurs, lignes, formes
- **Personnalisation complète** : Couleurs, polices, bordures, alignement, styles
- **Unités flexibles** : Support de px, %, em, rem pour les dimensions
- **Système de conteneurs** : Organisez vos éléments avec des conteneurs imbriqués
- **Variables dynamiques** : Insérez des variables `{{nom}}` pour du contenu dynamique
- **Icônes personnalisées** : Plus de 140 icônes Lucide React disponibles

### 📄 Modèles de Base
- **Facture** : Modèle complet avec tableau de produits et totaux
- **Devis** : Modèle professionnel avec date de validité
- **Bon de commande** : Suivi des commandes avec références
- **Bon de livraison** : Gestion des livraisons avec détails
- **Vide** : Commencez de zéro avec un modèle vierge

### 🔌 API de Génération
- **Routes API personnalisées** : Créez des endpoints pour générer des PDF
- **Mapping de données JSON** : Mappez vos données JSON aux variables du modèle
- **Boucles sur tableaux** : Générez automatiquement des lignes de tableau depuis des arrays JSON
- **Sécurité** : Protection par clé API optionnelle
- **Formats de réponse** : Download, Base64, ou URL
- **Documentation intégrée** : Testez vos routes avec des exemples de données

### 🎯 Tableaux Dynamiques
- **Colonnes personnalisables** : Ajoutez, supprimez, réorganisez les colonnes
- **Styles de texte** : Alignement (gauche, centre, droite), gras, italique, souligné
- **Largeurs ajustables** : Définissez la largeur de chaque colonne
- **Données dynamiques** : Remplissage automatique depuis JSON ou saisie manuelle

### 🎨 Interface Utilisateur
- **Design moderne** : Interface épurée avec Tailwind CSS
- **Responsive** : Fonctionne sur desktop, tablette et mobile
- **Dark mode ready** : Architecture préparée pour le mode sombre
- **Animations fluides** : Transitions et effets visuels soignés

## 🚀 Installation

### Prérequis
- Node.js 18+ 
- npm, yarn, pnpm ou bun
- PostgreSQL (ou autre base de données compatible Prisma)

### Étapes d'installation

1. **Cloner le projet**
```bash
git clone <votre-repo>
cd facturx
```

2. **Installer les dépendances**
```bash
npm install
# ou
yarn install
# ou
pnpm install
```

3. **Configurer la base de données**

Créez un fichier `.env` à la racine du projet :

```env
DATABASE_URL="postgresql://user:password@localhost:5432/facturx"
JWT_SECRET="votre-secret-jwt-tres-securise"
```

4. **Initialiser la base de données**
```bash
npx prisma migrate dev
npx prisma generate
```

5. **Lancer le serveur de développement**
```bash
npm run dev
```

Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur.

## 📁 Structure du Projet

```
facturx/
├── app/
│   ├── api/                    # Routes API
│   │   ├── auth/              # Authentification
│   │   ├── templates/         # Gestion des modèles
│   │   ├── routes/            # Routes API personnalisées
│   │   └── generate/          # Génération de PDF
│   ├── dashboard/             # Interface principale
│   │   ├── builder/           # Éditeur de modèles
│   │   ├── generate/          # Génération de PDF
│   │   └── generateroute/     # Gestion des routes API
│   ├── login/                 # Page de connexion
│   ├── register/              # Page d'inscription
│   └── page.tsx               # Page d'accueil
├── components/                # Composants réutilisables
│   └── InvoiceRenderer.tsx    # Rendu des documents
├── lib/                       # Utilitaires
│   ├── auth.ts               # Gestion de l'authentification
│   └── prisma.ts             # Client Prisma
├── prisma/
│   └── schema.prisma         # Schéma de base de données
└── public/                    # Fichiers statiques
```

## 🎯 Utilisation

### Créer un Modèle

1. Connectez-vous à votre compte
2. Sur le dashboard, cliquez sur "Nouveau Modèle"
3. Choisissez un modèle de base ou commencez de zéro
4. Utilisez l'éditeur pour personnaliser votre document :
   - Glissez-déposez des éléments depuis la barre latérale
   - Ajustez les positions et dimensions
   - Personnalisez les styles et couleurs
   - Insérez des variables avec `{{nomVariable}}`
5. Sauvegardez votre modèle

### Générer un PDF

**Méthode 1 : Interface Web**
1. Cliquez sur "PDF" sur la carte de votre modèle
2. Remplissez les valeurs des variables
3. Ajoutez des lignes aux tableaux si nécessaire
4. Cliquez sur "Générer le PDF"

**Méthode 2 : API**
1. Créez une route API depuis "Générer une Route API"
2. Configurez le mapping de vos données JSON
3. Utilisez l'endpoint généré :

```bash
curl -X POST https://votre-domaine.com/api/generate/votre-slug \
  -H "Content-Type: application/json" \
  -H "X-API-Key: votre-cle-api" \
  -d '{
    "clientName": "Entreprise ABC",
    "invoiceNumber": "F-2025-001",
    "items": [
      {"description": "Service 1", "quantity": 2, "price": 100}
    ]
  }'
```

### Tableaux Dynamiques avec API

Pour générer des lignes de tableau dynamiquement depuis un array JSON :

```json
{
  "depenses": [
    {"item": "Produit 1", "quantite": 2, "prixTTC": 50.00},
    {"item": "Produit 2", "quantite": 1, "prixTTC": 75.00}
  ]
}
```

Dans le mapping de variables :
- Chemin JSON : `depenses[].item`
- Variable modèle : `{{item}}`

L'API créera automatiquement une ligne par élément du tableau.

## 🛠️ Technologies Utilisées

- **Framework** : [Next.js 16](https://nextjs.org/) (App Router)
- **Langage** : [TypeScript](https://www.typescriptlang.org/)
- **Base de données** : [Prisma ORM](https://www.prisma.io/)
- **Styling** : [Tailwind CSS](https://tailwindcss.com/)
- **Drag & Drop** : [dnd-kit](https://dndkit.com/)
- **Icônes** : [Lucide React](https://lucide.dev/)
- **Génération PDF** : [html2canvas](https://html2canvas.hertzen.com/) + [jsPDF](https://github.com/parallax/jsPDF)
- **Authentification** : JWT avec cookies httpOnly

## 🔐 Sécurité

- **Authentification JWT** : Tokens stockés dans des cookies httpOnly
- **Protection CSRF** : Cookies samesite
- **Validation des données** : Validation côté serveur
- **API Keys** : Protection optionnelle des routes API
- **Ownership** : Vérification de propriété des ressources

## 📝 Variables d'Environnement

```env
# Base de données
DATABASE_URL="postgresql://user:password@localhost:5432/facturx"

# JWT
JWT_SECRET="votre-secret-jwt-minimum-32-caracteres"

# Optionnel : CORS Proxy pour images externes
CORS_PROXY_URL="https://cors-anywhere.herokuapp.com/"
```

## 🤝 Contribution

Les contributions sont les bienvenues ! N'hésitez pas à :

1. Fork le projet
2. Créer une branche (`git checkout -b feature/AmazingFeature`)
3. Commit vos changements (`git commit -m 'Add some AmazingFeature'`)
4. Push vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrir une Pull Request

## 📄 Licence

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.

## 🐛 Rapport de Bugs

Si vous trouvez un bug, veuillez ouvrir une issue avec :
- Une description claire du problème
- Les étapes pour reproduire
- Le comportement attendu vs actuel
- Des captures d'écran si pertinent

## 💡 Roadmap

- [ ] Export en formats multiples (PNG, SVG, DOCX)
- [ ] Templates marketplace
- [ ] Collaboration en temps réel
- [ ] Historique des versions
- [ ] Webhooks pour notifications
- [ ] Mode sombre complet
- [ ] Support multilingue
- [ ] Signature électronique
- [ ] Intégration comptabilité

## 📧 Contact

Pour toute question ou suggestion, n'hésitez pas à ouvrir une issue sur GitHub.

---

Développé avec ❤️ par l'équipe FacturX
