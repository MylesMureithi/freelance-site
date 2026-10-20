# Freelance Website

My personal freelance site for selling fixed-price web development packages. Clients can pick a package, see the price, delivery time and revision rounds, read how a project runs, see the ways to pay, and send a request, with no Fiverr account required.

**Live site:** https://damper-webdev.vercel.app/

## Features

- Package picker with live price, 50% deposit, delivery time and revision rounds, plus a "Something else" option for custom quotes
- Recent work cards with screenshots and links
- "How a project runs" section covering the full process from brief to launch
- Ways to pay: card and mobile money (Paystack payment links), PayPal, and bank transfer
- FAQ covering payment, ownership, revisions and what's not included
- Contact form (Formspree) that is pre-filled with the chosen package
- Responsive layout with a mobile menu

## Tech stack

- React 18
- Vite
- Plain CSS with custom properties
- Formspree (contact form)
- Vercel (hosting)

## Project structure

```
src/
  components/   Header, Hero, PackagePicker, Work, Steps,
                Payments, Faq, ContactForm, Footer
  data/site.js  All editable content
  assets/       Project screenshots
  App.jsx       Assembles the page
  index.css     All styles
public/         Favicon files
```

## Run locally

```bash
npm install
npm run dev
```

Other commands:

```bash
npm run build     # production build into dist/
npm run preview   # preview the production build
```

## Editing the content

Nearly everything on the site lives in `src/data/site.js`:

- `SITE`: contact details and the Formspree endpoint
- `PACKAGES`: names, prices, delivery times and revision rounds
- `WORK`: portfolio projects
- `STEPS`, `PAYMENTS`, `FAQ`: the matching sections

To use the contact form, create a form at [formspree.io](https://formspree.io) and paste its endpoint into `SITE.formspree`.

## Deployment

The site deploys to Vercel automatically on every push to `main`.