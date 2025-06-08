<<<<<<< HEAD
# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
```
=======
# frontend page redesign challenge
### The challenge is to redesign the following webpage to look completely different from the original page while keeping functionality intact.

![image (1)](https://github.com/user-attachments/assets/ccde9813-d29e-4c36-917c-7253192f7365)


## Setup Instructions

1. **Clone the repository:**
 
   ```bash
   git clone git@github.com:ismail-97/frontend-page-redesign-challenge.git

2. **Install Dependencies:**

   ```bash
   npm install

3. **Start the development server**

   ```bash
   npm run dev

4. **Open in browser**
   Navigate to: http://localhost:5173/select-skip


## Technolgies used
- React with TypeScript.
- Bootstrap and custom CSS for styling and responsiveness.

## Design Approach

- Initial idea is using slider to show all availble skips, but this is somehow NOT COMPLETELY DIFFERENT as required.
- Second idea is to show only one skip depending on user selection, but what if a user wants to compare between available skip options?
- The FINAL design decition is to combine both ideas: 
  1. The user select a prefered skip size.
  2. The selected skip is displayed with a comparison table with its closest skips.
>>>>>>> 6e06a956cdec72ac3f83a56165e688eafef78c61
