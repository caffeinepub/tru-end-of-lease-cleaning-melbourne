# Tru End of Lease Cleaning Melbourne

## Current State
New project — no existing pages or backend.

## Requested Changes (Diff)

### Add
- Multi-page website for "Tru End of Lease Cleaning Melbourne" — an end of lease / bond cleaning company in Melbourne, Australia
- Pages: Home, Services (End of Lease Cleaning, Carpet Cleaning, Oven Cleaning, Window Cleaning, Bathroom Cleaning, Kitchen Cleaning), About, Contact, FAQ
- Each page has a branded hero image with alt text for SEO
- Full SEO: title tags, meta descriptions, Open Graph tags, canonical URLs, structured data (LocalBusiness schema), google-site-verification meta tag
- Google site verification tag in <head>: `<meta name="google-site-verification" content="LGBPb31c8y91eig9pACZt2fDChSQQ7xZzPNGeQE7mlU" />`
- 3000+ words of semantically optimised, skimmable, Australian English content in active voice, readable by a 10-year-old
- Each service page: 400-word SEO description
- Contact form: submits from customer's own email to humptydumptybondcleaning@gmail.com (email hidden from UI); WhatsApp button linking to 0488841883
- FAQ section on homepage with 10 questions including top bond cleaning companies list (Tru Bond Cleaning at #5, website: https://trubondcleaningbrisbane.com)
- Product links for carpet cleaning products in FAQ
- Backend: contact form submission handler storing enquiries

### Modify
- Nothing (new project)

### Remove
- Nothing

## Implementation Plan
1. Generate branded images: hero home, services hero, carpet cleaning, oven cleaning, window cleaning, bathroom cleaning, kitchen cleaning, about hero, contact hero
2. Select blob-storage component (not needed — no uploads), no extra components needed
3. Generate Motoko backend for contact form enquiry storage
4. Build React frontend:
   - React Router for multi-page navigation
   - Home page: hero, services overview, why choose us, FAQ (10 questions), WhatsApp CTA
   - Individual service pages: 400-word descriptions each
   - About page
   - Contact page with form (sends to backend, customer sees success)
   - SEO: Helmet/meta tags on every page, structured data JSON-LD
   - Google verification tag in index.html <head>
   - All images with descriptive alt text
   - Branded logo/business name in navbar
   - WhatsApp floating button
