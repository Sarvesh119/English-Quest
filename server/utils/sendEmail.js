import nodemailer from 'nodemailer';


const sendEmail = async (options) => {
  const port = parseInt(process.env.EMAIL_PORT || '587');

  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: port,
    secure: port === 587, // true for 465, false for 587
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS ? process.env.EMAIL_PASS.replace(/\s/g, '') : '',
    },
    // REMOVED tls.rejectUnauthorized: false - this was causing production issues
    connectionTimeout: 10000,
    socketTimeout: 10000,
    debug: false, // Set to true only if you need SMTP traffic debugging
    logger: false, // Set to true only if you need detailed logging
  });


  const message = {
    from: `"${process.env.FROM_NAME}" <${process.env.FROM_EMAIL}>`,
    to: options.email,
    subject: options.subject,
    text: options.message,
    html: options.html,
  };


  try {
    console.log(`[sendEmail] 📧 Attempting to send to ${options.email}`);
    console.log('[sendEmail] SMTP Host:', process.env.EMAIL_HOST);
    console.log('[sendEmail] SMTP Port:', port);
    console.log('[sendEmail] Auth User:', process.env.EMAIL_USER);
    console.log('[sendEmail] Auth Pass:', process.env.EMAIL_PASS ? 'SET ✓' : 'NOT SET ✗');

    const info = await transporter.sendMail(message);

    console.log('[sendEmail] ✅ Email sent successfully:', info.messageId);
    console.log('[sendEmail] Message Response:', info.response);

    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error('[sendEmail] ❌ Nodemailer Error:', error.message);
    console.error('[sendEmail] Error Code:', error.code);
    console.error('[sendEmail] Error Command:', error.command);
    console.error('[sendEmail] Full Error:', error);

    return { success: false, error: error.message };
  }
};


export default sendEmail;