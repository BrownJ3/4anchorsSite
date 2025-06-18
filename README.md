# 4anchors - Software Development Company Website

A modern, responsive website for 4anchors software development company built with React, TypeScript, and Tailwind CSS.

## Features

- 🎨 Modern, professional design with smooth animations
- 📱 Fully responsive across all devices
- ⚡ Fast performance with Vite
- 📧 Contact form with Resend email integration
- 🎯 SEO optimized
- ♿ Accessible design

## Setup

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Set up environment variables:**
   ```bash
   cp .env.example .env
   ```
   
   Add your Resend API key to the `.env` file:
   ```
   RESEND_API_KEY=your_actual_resend_api_key
   ```

3. **Configure Resend:**
   - Sign up at [resend.com](https://resend.com)
   - Verify your domain (e.g., `4anchors.dev`)
   - Get your API key from the dashboard
   - Update the `from` email in `api/contact.js` to use your verified domain

4. **Start development server:**
   ```bash
   npm run dev
   ```

## Contact Form Setup

The contact form uses Resend for email delivery. To set it up:

1. **Verify your domain** in Resend dashboard
2. **Update the API endpoint** in `api/contact.js`:
   - Change `from: 'contact@4anchors.dev'` to your verified domain
   - Update `to: ['hello@4anchors.dev']` to your admin email

3. **Deploy the API endpoint** (if using Vercel, the `api/` folder will be automatically deployed as serverless functions)

## Deployment

This project is optimized for deployment on:
- **Vercel** (recommended - automatic API routes)
- **Netlify** (with Netlify Functions)
- **Any static hosting** (frontend only)

For Vercel deployment:
```bash
npm run build
```

The `api/contact.js` file will automatically become a serverless function.

## Email Template

The contact form sends beautifully formatted HTML emails with:
- Contact information
- Project details
- Budget information
- Message content
- Reply-to functionality

## Tech Stack

- **Frontend:** React 18, TypeScript, Tailwind CSS
- **Build Tool:** Vite
- **Email Service:** Resend
- **Icons:** Lucide React
- **Deployment:** Vercel/Netlify ready

## License

© 2024 4anchors. All rights reserved.