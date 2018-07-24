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

## Scalable Frontend Architecture

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


## Styled-Component
We were drawn to CSS-in-JS for the reasons mentioned above, but Styled Components in particular has been a great tool for team. Below are the main reasons we chose it.

### Large & Thriving Community
Being on the edge of a new technology is inherently risky, but we were really encouraged by the community surrounding Styled Components. The team is connected to the community and always asking for feedback. We recently started contributing back to this community by open sourcing our internal styled-components-modifiers library, and have other internal tooling we are hoping to open source when it’s ready.

### Template Literal Syntax
Using template literals to write CSS syntax in our components is a huge boost to our team’s productivity. Developers who were brand new to CSS-in-JS could immediately hop in and start writing styles. I probably could get used to writing { fontSize: “24px” }, but having a familiar syntax is really a great feature.

### 
Sass Support & Polished
We also really liked that Sass support was bundled into the lib.
```
const Link = styled.a`
  cursor: pointer;
  text-decoration: none;
  &:hover {
    color: blue;
    text-decoration: underline;
  }
`;
```

Again, writing our styles in this way feels really natural and reduces lines of code at the same time. Along with the basic Sass support, there’s also Polished, a small toolset created by Styled Components to provide additional Sass functionality and other helpful tooling.

### Native Mobile Support
Our team is also in the process of developing a native mobile app with React Native. It was really important for our UI to feel consistent on mobile, and having that bundled into Styled Components is a huge win.
