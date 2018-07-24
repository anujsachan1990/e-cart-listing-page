# E-Commerce Listing Page

Next.js is a lightweight framework for static and server‑rendered applications.

## Technology Stack
- Next.js (for server side rendering)
- React JS (Isomorphic Behaviour)
- Style Component (for Component Style Reusability)
- Node-fetch (for serverside API call)
- eslint-config-airbnb (ensure code quality)
- YARN / NPM for package Dependencies
- ES6 


## Setup

- git clone https://github.com/anujsachan1990/e-cart-listing-page.git
- cd e-cart-listing-page
- Yarn install or npm install
- yarn run dev or npm run dev
- open url [http://localhost:3000/](http://localhost:3000/)

## Forntend Architecture

This Architecture with the methodology Atomic Design using a few cool things, like Styled-compomemt,ES6 and Next.js and ReactJS. 
Feel free to test, change e adapt everything. 

[**Read full article**](https://medium.com/@danilowoznica/atomic-design-with-react-e7aea8152957)
```
├── components
│   ├── atoms
│   │   ├── Image
│   │   │   ├── Image.js
│   │   │   └── index.js
│   │   ├── SelectBox
│   │   │   ├── SelectBox.js
│   │   │   └── index.js
│   │   └── Tag
│   │       ├── Tag.js
│   │       └── index.js
│   ├── molecules
│   │   ├── Filters
│   │   │   ├── Filters.js
│   │   │   ├── Filters.style.js
│   │   │   └── index.js
│   │   └── Product
│   │       ├── Product.js
│   │       ├── Product.style.js
│   │       └── index.js
│   ├── organisms
│   │   └── ProductList
│   │       ├── ProductList.js
│   │       ├── ProductList.style.js
│   │       └── index.js
│   └── templates
│       └── listingPage.js
├── constants
│   └── index.js
├── global
│   ├── config.js
│   ├── lang.js
│   ├── services.js
│   └── withStyle.js
└── styles
    ├── theme
    │   └── colors.js
    └── typography.js

```
## Next.js

Next.js is a universal JavaScript framework that runs in the browser and the server. It offers developers an easy way to get started, and as it uses React.js for templating it is also a straightforward way for developers with React experience to get productive fast.

### How Next can improve your life
- Ease of use. Forget about setting up webpack, react router, react and react-dom. It’s all     included right out of the box!
-  Code splitting out of the box.
-  Performance for first page load.
-  Improved SEO.
- Server Side Rendering to achive isomorphic Behaviour.