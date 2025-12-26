# Support Page Setup Guide

The `/support` page has been created with a Q&A section and a contact form that sends emails via Resend.

## Setup Instructions

### 1. Install Resend (if not already installed)

You'll need to install the Resend package. Since yarn wasn't available during setup, please run:

```bash
npm install resend
# or
yarn add resend
```

### 2. Configure Resend API Key

1. Sign up for a Resend account at [resend.com](https://resend.com)
2. Get your API key from the Resend dashboard
3. Add your API key to your `.env` file:

```bash
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxx
```

### 3. Verify Domain with Resend

To send emails from `contact@yourshadowai.com`, you need to verify your domain with Resend:

1. Go to your Resend dashboard
2. Navigate to "Domains"
3. Add `yourshadowai.com`
4. Add the DNS records provided by Resend to your domain's DNS settings
5. Wait for verification (usually takes a few minutes to a few hours)

### 4. Test the Contact Form

Once everything is set up:

1. Visit `/support` on your website
2. Fill out the contact form
3. Submit the form
4. Check that you receive the email at `contact@yourshadowai.com`

## Features

### Q&A Section
- 8 frequently asked questions with expandable accordion
- Clean, modern design matching your existing site
- Smooth animations
- Only one FAQ open at a time

### Contact Form
- Fields: Name, Email, Subject (dropdown), Message, Urgent checkbox
- Email validation
- Sends to: `contact@yourshadowai.com`
- From: `contact@yourshadowai.com`
- Reply-to is set to the sender's email for easy replies
- Success/error messaging
- Loading states
- Form resets after successful submission

## File Structure

```
src/
├── pages/
│   ├── support.astro          # Support page with FAQ and form
│   └── api/
│       └── support.ts          # API endpoint for sending emails
└── .env.example                # Updated with RESEND_API_KEY
```

## Troubleshooting

### Email not sending?
1. Check that `RESEND_API_KEY` is set in your `.env` file
2. Verify your domain is verified in Resend dashboard
3. Check the browser console and server logs for errors

### Form submission errors?
1. Make sure all required fields are filled
2. Check that the email format is valid
3. Check the API endpoint is working at `/api/support`

## Design Notes

The support page uses:
- Gradient background matching your homepage
- White button styling like your CTA
- Shadow-blue accent color for links and focus states
- Backdrop blur and gradient glow effects
- Fully responsive design
- Clean, minimalist approach

## Next Steps

If you want to add more features:
- Add a support ticket system with Supabase
- Send confirmation emails to users
- Add file upload capability
- Create email templates with branded design
- Add analytics to track support requests
