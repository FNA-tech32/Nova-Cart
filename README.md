# Nova Cart

Nova Cart is a React storefront for clothing, jewellery, and electronics. The homepage shows the brand banner, a latest-products grid with category filters, and a footer with the store contact details. Shoppers can open a product, add it to the cart, and continue through login, registration, and checkout.

## Pages

- Home (`/`) with the Nova Cart banner and latest products
- Products (`/product`) with the same catalog and filters
- Product detail (`/product/:id`)
- About (`/about`)
- Contact (`/contact`) with store details and a message form
- Cart (`/cart`)
- Login (`/login`) and Register (`/register`)
- Checkout (`/checkout`)

Product data is loaded from the Fake Store API. Category filters cover men's clothing, women's clothing, jewellery, and electronics. The cart count in the navbar is stored with Redux.

## Contact

These details appear in the footer and on the Contact page:

- Address: 48 Commerce Square, Andheri East, Mumbai 400069
- Phone: +91 22 6100 4800
- Alternative phone: +91 22 6100 4801
- Email: hello@novacart.shop
- Alternative email: support@novacart.shop

## Tech

- React 18
- Vite
- React Router
- Redux Toolkit
- Bootstrap
- Fake Store API

## Getting started

Install dependencies, then start the development server:

```bash
npm install
npm start
```

`npm run dev` does the same thing. Open [http://localhost:3000](http://localhost:3000) to view the store.

## Scripts

- `npm run dev` and `npm start` run the app in development and reload on changes
- `npm run build` creates an optimized production build in the `dist` folder
- `npm run preview` serves the production build locally
