import nodemailer from 'nodemailer';

const sendEmail = async (options) => {
  const port = parseInt(process.env.EMAIL_PORT || '587');
  
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: port,
    secure: port === 465, // true for 465, false for others (like 587)
    auth: {
      user: process.env.EMAIL_USER,
      // Strip spaces from App Password if present
      pass: process.env.EMAIL_PASS ? process.env.EMAIL_PASS.replace(/\s/g, '') : '',
    },
    tls: {
      rejectUnauthorized: false 
    },
    debug: true, // Show SMTP traffic in server console
    logger: true, // Log details in server console
    connectionTimeout: 5000,
    greetingTimeout: 5000,
    socketTimeout: 5000,
  });

  const message = {
    from: `"${process.env.FROM_NAME}" <${process.env.FROM_EMAIL}>`,
    to: options.email,
    subject: options.subject,
    text: options.message,
    html: options.html,
  };

  try {
    console.log(`Attempting to send email to ${options.email} via ${process.env.EMAIL_HOST}...`);
    const info = await transporter.sendMail(message);
    console.log('Email sent successfully:', info.messageId);
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error('Nodemailer Error:', error.message);
    return { success: false, error: error.message };
  }
};

export default sendEmail;
