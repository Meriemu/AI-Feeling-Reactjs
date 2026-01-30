# AI-Feeling-Reactjs 🎭

## Qu'est-ce que ce projet permet de faire ? 🇫🇷

**AI-Feeling-Reactjs** est une application web interactive qui analyse vos émotions et sentiments à travers vos mots. Elle vous permet de :

- ✍️ **Exprimer vos sentiments** : Écrivez ce que vous ressentez dans le champ de texte
- 🤖 **Analyse par IA** : L'application utilise l'intelligence artificielle (modèle Hugging Face `cardiffnlp/twitter-roberta-base-sentiment`) pour analyser le sentiment de votre texte
- 😊 **Recevoir une réponse encourageante** : Selon que votre sentiment est positif, négatif ou neutre, l'application vous répond avec un message d'encouragement personnalisé et des emojis

### Cas d'utilisation
- Journal émotionnel quotidien
- Comprendre l'état d'esprit de vos messages
- Obtenir un soutien et des encouragements basés sur votre humeur

---

## What does this project do? 🇬🇧

**AI-Feeling-Reactjs** is an interactive web application that analyzes your emotions and feelings through your words. It allows you to:

- ✍️ **Express your feelings**: Write what you feel in the text field
- 🤖 **AI Analysis**: The application uses artificial intelligence (Hugging Face model `cardiffnlp/twitter-roberta-base-sentiment`) to analyze the sentiment of your text
- 😊 **Get an encouraging response**: Depending on whether your sentiment is positive, negative, or neutral, the application responds with a personalized encouraging message and emojis

### Use cases
- Daily emotional journal
- Understand the mood of your messages
- Get support and encouragement based on your mood

---

## Technologies utilisées / Technologies used 🛠️

- **React.js** - Frontend framework
- **Hugging Face API** - Sentiment analysis AI model
- **Express.js** - Backend API server
- **Axios** - HTTP requests
- **SCSS** - Styling

---

## Installation et Configuration / Installation and Setup 📦

### Prérequis / Prerequisites
- Node.js (v14 ou supérieur / v14 or higher)
- npm ou yarn
- Un token API Hugging Face / A Hugging Face API token

### Installation

1. **Cloner le repository / Clone the repository**
```bash
git clone https://github.com/Meriemu/AI-Feeling-Reactjs.git
cd AI-Feeling-Reactjs
```

2. **Installer les dépendances / Install dependencies**
```bash
npm install
```

3. **Configurer les variables d'environnement / Set up environment variables**

Créer un fichier `.env` à la racine du projet avec votre token Hugging Face :
Create a `.env` file in the root directory with your Hugging Face token:

```
HF_API_TOKEN=your_huggingface_api_token_here
```

Pour obtenir un token gratuit / To get a free token:
- Créez un compte sur [Hugging Face](https://huggingface.co/)
- Allez dans Settings > Access Tokens
- Créez un nouveau token / Create a new token

---

## Utilisation / Usage 🚀

### Démarrer l'application / Start the application

**Mode développement / Development mode:**
```bash
npm start
```
Ouvre l'application sur [http://localhost:3000](http://localhost:3000)
Opens the app at [http://localhost:3000](http://localhost:3000)

**Démarrer le serveur backend / Start the backend server:**
```bash
node api/server.js
```
Le serveur tourne sur le port 5000 / The server runs on port 5000

---

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

---

## Structure du projet / Project Structure 📁

```
AI-Feeling-Reactjs/
├── api/
│   └── server.js           # Backend Express server for sentiment API
├── public/                 # Public assets
├── src/
│   ├── App.js             # Main application component
│   ├── Feelings.jsx       # Sentiment input and display component
│   ├── randomFeelings.js  # Response messages database
│   ├── styles/            # SCSS stylesheets
│   └── images/            # Image assets
├── package.json
└── README.md
```

---

## Comment ça marche ? / How does it work? 🔍

1. **L'utilisateur entre un texte** / **User enters text** expressing their feelings
2. **Le frontend envoie le texte au backend** / **Frontend sends text to backend** via POST request
3. **Le backend appelle l'API Hugging Face** / **Backend calls Hugging Face API** with the sentiment analysis model
4. **L'IA analyse le sentiment** / **AI analyzes sentiment** (positive, negative, or neutral)
5. **L'application sélectionne une réponse** / **App selects a response** from the randomFeelings database
6. **Un message encourageant s'affiche** / **An encouraging message is displayed** with emojis

---

## Déploiement / Deployment 🌐

Ce projet peut être déployé sur / This project can be deployed on:
- Vercel (configuration incluse / configuration included)
- Netlify
- Heroku
- GitHub Pages

---

## Auteur / Author 👩‍💻

**Meryem ACHEMLAL** ツ

---

## Licence / License 📄

Ce projet est un projet open source. / This project is an open source project.

---

## Contribuer / Contributing 🤝

Les contributions sont les bienvenues ! N'hésitez pas à ouvrir une issue ou une pull request.
Contributions are welcome! Feel free to open an issue or pull request.
