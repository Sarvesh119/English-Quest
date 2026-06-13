import nodemailer from 'nodemailer';

const sendEmail = async (options) => {
  try {
    const port = parseInt(process.env.EMAIL_PORT || '587');
    const user = process.env.EMAIL_USER;
    const pass = process.env.EMAIL_PASS ? process.env.EMAIL_PASS.replace(/\s/g, '') : '';

    if (!process.env.EMAIL_HOST) {
      console.log('--------------------------------------------------');
      console.log('[sendEmail] ⚠️ MISSING EMAIL_HOST CONFIGURATION');
      console.log(`[sendEmail] 📧 Simulated Email to: ${options.email}`);
      console.log(`[sendEmail] ✉️ Subject: ${options.subject}`);
      console.log('--------------------------------------------------');
      return { success: true, messageId: `simulated-email-${Date.now()}` };
    }

    const fromName = process.env.FROM_NAME || 'English Quest';
    const fromEmail = process.env.FROM_EMAIL || user;

    console.log('[sendEmail] 📧 Sending Email via Nodemailer');
    console.log('[sendEmail] Config:', {
      host: process.env.EMAIL_HOST,
      port: port,
      user: user,
      from: `"${fromName}" <${fromEmail}>`
    });
    console.log('[sendEmail] To:', options.email);

    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: port,
      secure: port === 465, 
      auth: {
        user: user,
        pass: pass,
      },
      connectionTimeout: 10000, 
      greetingTimeout: 10000,   
      socketTimeout: 10000,     
      tls: {
        rejectUnauthorized: false
      }
    });

    const mailOptions = {
      from: `"${fromName}" <${fromEmail}>`,
      to: options.email,
      subject: options.subject,
      text: options.message,
      html: options.html,
    };

    const info = await transporter.sendMail(mailOptions);

    console.log('[sendEmail] ✅ Email sent successfully');
    console.log('[sendEmail] Message ID:', info.messageId);
    return { success: true, messageId: info.messageId };

  } catch (error) {
    console.error('[sendEmail] ❌ Nodemailer Error:', error);
    return { success: false, error: error.message };
  }
};

export default sendEmail;