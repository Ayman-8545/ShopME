# ShopMe — Frontend

React + Vite + Tailwind CSS v4 frontend for the ShopMe e-commerce project,
built from the Google Stitch designs.

## Pages included

- **Home** (`/`) — hero, category showcase, featured products
- **Products** (`/products`) — category filters, sort, product grid
- **Product Detail** (`/products/:id`) — gallery, quantity, add to cart
- **Cart** (`/cart`) — cart items, quantity controls, order summary
- **Checkout** (`/checkout`) — shipping form, order summary
- **Login / Sign Up** (`/login`)

The Admin Dashboard from the Stitch export was not converted yet — ask if you
want that added.

## Running the project

```bash
npm install
npm run dev
```

Then open the URL shown in the terminal (usually http://localhost:5173).

## Current state

- Products are mock data in `src/data/products.js` — swap this for real API
  calls to your Node/Express + MySQL backend once it's ready.
- Cart state lives in React state (`App.jsx`) — it resets on page refresh.
  Once the backend exists, this should move to a real cart (DB-backed or
  persisted in localStorage as an interim step).
- The design tokens (colors, spacing, fonts) from the Stitch export are
  defined in `src/index.css` under `@theme`, and used throughout via
  Tailwind utility classes like `bg-primary-container`, `text-headline-lg`,
  `p-lg`, etc.

## Project structure

```
src/
  components/    Navbar, Footer, ProductCard, Icon (shared UI)
  pages/         One file per route
  data/          Mock product data (temporary, until backend is wired up)
  App.jsx        Routes + cart state
  index.css      Design tokens + Tailwind import
```
