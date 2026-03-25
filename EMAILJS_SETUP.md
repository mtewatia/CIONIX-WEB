# EmailJS Integration Setup Guide

EmailJS has been integrated into your CIONIX website. Follow these steps to complete the setup and enable email notifications.

## Step 1: Create EmailJS Account

1. Go to [EmailJS](https://www.emailjs.com/) and sign up for a free account
2. Verify your email address

## Step 2: Create Email Service

1. Log in to EmailJS dashboard
2. Go to **Email Services** (left sidebar)
3. Click **Add Service**
4. Choose your email provider:
   - **Gmail** (recommended for simplicity)
   - **Outlook**
   - **Yahoo**
   - **Custom SMTP**
5. Connect your email account following EmailJS instructions
6. Click **Create Service** and copy your **Service ID** (looks like: `service_xxxxxxxxxx`)

## Step 3: Create Email Template

1. Go to **Email Templates** in the dashboard
2. Click **Create New Template**
3. Name it: `contact_form_template` (or any name)
4. Set up the template with these variables:

### Admin Email Template (receives contact submissions)
```html
<h3>New Contact Form Submission</h3>
<p><strong>Name:</strong> {{from_name}}</p>
<p><strong>Email:</strong> {{from_email}}</p>
<p><strong>Company:</strong> {{company}}</p>
<p><strong>Phone:</strong> {{phone}}</p>
<p><strong>Service/Interest:</strong> {{service}}</p>
<p><strong>Message:</strong></p>
<p>{{message}}</p>
```

5. Copy your **Template ID** (looks like: `template_xxxxxxxxxx`)
6. Set recipient email to: `{{to_email}}`

## Step 4: Get Your Public Key

1. Go to **Account** (top right)
2. Click **API Keys**
3. Copy your **Public Key** (looks like: `xxxxxxxxxxxxxxxxxxx`)

## Step 5: Configure Environment Variables

1. Create `.env.local` file in your project root (same level as `package.json`)

2. Add the following variables:
```
VITE_EMAILJS_SERVICE_ID=service_xxxxxxxxxx
VITE_EMAILJS_TEMPLATE_ID=template_xxxxxxxxxx
VITE_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxxxxxxxx
VITE_ADMIN_EMAIL=your-email@example.com
```

3. Replace the `x` values with your actual credentials from EmailJS

## Step 6: Test the Integration

1. Start your development server: `npm run dev`
2. Go to the contact page: `http://localhost:5173/contact`
3. Fill out the form with test data
4. Submit the form
5. Check both:
   - Your admin email for the submission notification
   - The user's email for the confirmation message

## Integration Points

The following contact forms are now integrated with EmailJS:

1. **Main Contact Page** - `/contact`
   - Sends to: `hello@cionix.com`

2. **Technologies Contact** - `/technologies/contact`
   - Sends to: `tech@cionix.com`

3. **Media Contact** - `/media/contact`
   - Sends to: `media@cionix.com`

4. **Realty Contact** - `/realty/contact`
   - Sends to: `realty@cionix.com`

5. **Medline Contact** - `/medline/contact`
   - Sends to: `medline@cionix.com`

## Email Flow

When a user submits a form:

1. ✅ **Admin receives notification** - Gets the full contact form details
2. ✅ **User receives confirmation** - Gets a message confirming their submission was received
3. ✅ **Button shows loading state** - User sees "Sending..." while processing
4. ✅ **Toast notification** - Success or error message appears on screen

## Troubleshooting

### Emails not sending?
- Check that environment variables are set correctly in `.env.local`
- Verify your EmailJS Service ID, Template ID, and Public Key
- Check that your email service (Gmail, etc.) is properly connected in EmailJS
- Look at the browser console (F12) for error messages

### Only admin receiving emails, not users?
- Make sure the template is set up to send to `{{to_email}}`
- Verify the template includes user email in the recipient field

### Rate limiting?
- EmailJS free plan has a limit (200 emails/day)
- Upgrade your plan if you exceed this

## Security Notes

- ✅ Public Key is safe to expose in front-end code (it's meant for browser use)
- ✅ Service ID and Template ID are also meant for client-side use
- ✅ No backend needed - EmailJS handles all email delivery
- ⚠️ Keep `.env.local` in `.gitignore` to avoid exposing credentials in version control

## Next Steps (Optional)

1. Create custom email templates with your branding
2. Add more template variables as needed
3. Set up EmailJS webhooks for advanced notifications
4. Monitor email delivery in EmailJS dashboard analytics

## Support

- EmailJS Docs: https://www.emailjs.com/docs/
- Contact: support@emailjs.com
