export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle preflight request
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { name, email, company, project, budget, message } = req.body;

  // Validate required fields
  if (!name || !email || !message) {
    return res.status(400).json({ 
      message: 'Missing required fields: name, email, and message are required' 
    });
  }

  try {
    // Check if we have a valid API key
    if (!process.env.RESEND_API_KEY || process.env.RESEND_API_KEY.startsWith('re_123456789') || process.env.RESEND_API_KEY === 'your_resend_api_key_here') {
      console.log('⚠️  No valid Resend API key found. Email will be simulated.');
      
      // Simulate email sending for development/demo
      console.log('📧 Simulated Email Send:');
      console.log('From: contact@4-anchors.com');
      console.log('To: hello@4-anchors.com');
      console.log('Subject: New Contact Form Submission from', name);
      console.log('Form Data:', { name, email, company, project, budget, message });
      
      // Simulate delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      return res.status(200).json({ 
        message: 'Email simulated successfully (demo mode - no API key configured)',
        simulated: true 
      });
    }

    // Initialize Resend with API key
    const { Resend } = await import('resend');
    const resend = new Resend(process.env.RESEND_API_KEY);

    // Send actual email using Resend
    const emailData = await resend.emails.send({
      from: 'contact@4-anchors.com', // Your verified domain
      to: ['hello@4-anchors.com'], // Your admin email
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #ffffff;">
          <div style="background: linear-gradient(135deg, #0284c7 0%, #0369a1 100%); padding: 30px; text-align: center;">
            <h1 style="color: white; margin: 0; font-size: 28px;">New Contact Form Submission</h1>
            <p style="color: #e0f2fe; margin: 10px 0 0 0;">4anchors Software Solutions</p>
          </div>
          
          <div style="padding: 30px;">
            <div style="background-color: #f8fafc; padding: 25px; border-radius: 12px; margin-bottom: 25px; border-left: 4px solid #0284c7;">
              <h2 style="margin-top: 0; color: #334155; font-size: 20px;">Contact Information</h2>
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #475569; width: 100px;">Name:</td>
                  <td style="padding: 8px 0; color: #1e293b;">${name}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #475569;">Email:</td>
                  <td style="padding: 8px 0; color: #1e293b;"><a href="mailto:${email}" style="color: #0284c7; text-decoration: none;">${email}</a></td>
                </tr>
                ${company ? `
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #475569;">Company:</td>
                  <td style="padding: 8px 0; color: #1e293b;">${company}</td>
                </tr>
                ` : ''}
              </table>
            </div>

            ${project || budget ? `
            <div style="background-color: #f0f9ff; padding: 25px; border-radius: 12px; margin-bottom: 25px; border-left: 4px solid #0ea5e9;">
              <h2 style="margin-top: 0; color: #334155; font-size: 20px;">Project Details</h2>
              <table style="width: 100%; border-collapse: collapse;">
                ${project ? `
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #475569; width: 120px;">Project Type:</td>
                  <td style="padding: 8px 0; color: #1e293b;">${project}</td>
                </tr>
                ` : ''}
                ${budget ? `
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #475569;">Budget:</td>
                  <td style="padding: 8px 0; color: #1e293b;">${budget}</td>
                </tr>
                ` : ''}
              </table>
            </div>
            ` : ''}

            <div style="background-color: #f9fafb; padding: 25px; border-radius: 12px; margin-bottom: 25px; border-left: 4px solid #64748b;">
              <h2 style="margin-top: 0; color: #334155; font-size: 20px;">Message</h2>
              <div style="background-color: white; padding: 20px; border-radius: 8px; border: 1px solid #e2e8f0;">
                <p style="margin: 0; color: #1e293b; line-height: 1.6; white-space: pre-wrap;">${message}</p>
              </div>
            </div>

            <div style="background: linear-gradient(135deg, #f1f5f9 0%, #e2e8f0 100%); padding: 20px; border-radius: 12px; text-align: center;">
              <p style="margin: 0 0 15px 0; color: #475569; font-size: 16px; font-weight: bold;">Quick Actions</p>
              <a href="mailto:${email}?subject=Re: Your inquiry to 4anchors" style="display: inline-block; background: linear-gradient(135deg, #0284c7 0%, #0369a1 100%); color: white; padding: 12px 24px; text-decoration: none; border-radius: 8px; font-weight: bold; margin: 0 10px;">Reply to ${name}</a>
            </div>
          </div>

          <div style="background-color: #f8fafc; padding: 20px; text-align: center; border-top: 1px solid #e2e8f0;">
            <p style="margin: 0; color: #64748b; font-size: 14px;">
              This email was sent from the 4anchors contact form.<br>
              <strong>Reply directly to this email to respond to ${name}.</strong>
            </p>
            <p style="margin: 10px 0 0 0; color: #94a3b8; font-size: 12px;">
              © 2024 4anchors Software Solutions
            </p>
          </div>
        </div>
      `,
      replyTo: email, // Allow direct reply to the sender
    });

    console.log('✅ Email sent successfully:', emailData);
    res.status(200).json({ 
      message: 'Email sent successfully',
      id: emailData.id 
    });

  } catch (error) {
    console.error('❌ Error sending email:', error);
    
    // Provide more specific error messages
    let errorMessage = 'Failed to send email';
    if (error && typeof error.message === 'string') {
      if (error.message.includes('API key')) {
        errorMessage = 'Email service configuration error';
      } else if (error.message.includes('domain')) {
        errorMessage = 'Email domain not verified';
      } else if (error.message.includes('rate limit')) {
        errorMessage = 'Too many requests, please try again later';
      }
    }
    
    // Ensure error is always a string to prevent JSON serialization issues
    const errorDetails = error && typeof error.message === 'string' 
      ? error.message 
      : error && typeof error === 'string' 
        ? error 
        : 'Unknown error occurred';
    
    res.status(500).json({ 
      message: errorMessage,
      error: process.env.NODE_ENV === 'development' ? errorDetails : undefined
    });
  }
}