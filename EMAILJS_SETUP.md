# EmailJS Setup Guide for Contact Form

This guide will help you set up EmailJS to receive emails from your portfolio contact form.

## Step 1: Create EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## Step 2: Create Email Service

1. In your EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, Yahoo, etc.)
4. Follow the setup instructions for your provider
5. Note down your **Service ID** (you'll need this later)

### For Gmail:
- You may need to enable 2-factor authentication
- Create an App Password for EmailJS

## Step 3: Create Email Template

1. Go to **Email Templates** in your dashboard
2. Click **Create New Template**
3. Set up your template with these variables:

```
Subject: New Contact Form Message: {{subject}}

From: {{from_name}} ({{from_email}})
Subject: {{subject}}

Message:
{{message}}

---
This message was sent from your portfolio contact form.
```

### Template Variables to Include:
- `{{from_name}}` - Sender's name
- `{{from_email}}` - Sender's email
- `{{subject}}` - Email subject
- `{{message}}` - Email message
- `{{to_name}}` - Your name (recipient)

4. Test your template
5. Note down your **Template ID**

## Step 4: Get Your Public Key

1. Go to **Account** in your dashboard
2. Find your **Public Key** (also called User ID)
3. Copy this key

## Step 5: Update Configuration

1. Open `src/config/emailjs.js`
2. Replace the placeholder values with your actual EmailJS credentials:

```javascript
export const emailjsConfig = {
  PUBLIC_KEY: 'your-actual-public-key',
  SERVICE_ID: 'your-actual-service-id', 
  TEMPLATE_ID: 'your-actual-template-id',
};
```

## Step 6: Test Your Contact Form

1. Start your development server: `npm run dev`
2. Navigate to the contact section
3. Fill out and submit the test form
4. Check your email inbox for the message

## Troubleshooting

### Common Issues:

1. **"EmailJS not configured" error**
   - Make sure you've replaced all placeholder values in `emailjs.js`

2. **Messages not being received**
   - Check your spam/junk folder
   - Verify your email service setup in EmailJS dashboard
   - Test the template directly in EmailJS dashboard

3. **403 Forbidden errors**
   - Check your Public Key is correct
   - Ensure your domain is allowed in EmailJS settings

4. **Rate limiting**
   - EmailJS free plan has limits (200 emails/month)
   - Consider upgrading if you need more

### EmailJS Pricing:
- **Free**: 200 emails/month
- **Personal**: $15/month for 1,000 emails
- **Team**: $35/month for 5,000 emails

## Security Notes

- Your EmailJS Public Key is safe to expose in client-side code
- Never expose your Private Key
- Consider setting up domain restrictions in EmailJS dashboard
- Monitor your usage to avoid hitting limits

## Testing Template

You can use this test data to verify your setup:

```
Name: Test User
Email: test@example.com
Subject: Test Message
Message: This is a test message from the contact form.
```

Once everything is working, you should receive emails at the address configured in your EmailJS service!
