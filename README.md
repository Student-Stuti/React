# React

To create a react app with vite and tailwind :

Step 1: In terminal npm create vite@latest
write project name

Step 2: Select react and javascript

Step 3: cd projectname

Step 4: npm i

Step 5 : npm run dev

To install tailwind with react app

Step 1: In terminal enter one by one npm install -D tailwindcss postcss autoprefixer
                                     npm install -D tailwindcss@3.4.17
                                     npx tailwindcss init -p

Step 2: A file will be created tailwind.config.js in this file add "./index.html",
"./src/\*_/_.{js,ts,jsx,tsx}"

/** @type {import('tailwindcss').Config} \*/
export default {
content: [
"./index.html",
"./src/**/\*.{js,ts,jsx,tsx}"
],
theme: {
extend: {},
},
plugins: [],
}

Step 3: Add these 3 files in index.css
@tailwind base;
@tailwind components;
@tailwind utilities;

Step 4: npm run dev
