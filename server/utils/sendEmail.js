import nodemailer from 'nodemailer';

const sendEmail = async (options) => {
  try {
    const port = parseInt(process.env.EMAIL_PORT || '587');
    const user = process.env.EMAIL_USER;
    const pass = process.env.EMAIL_PASS ? process.env.EMAIL_PASS.replace(/\s/g, '') : '';

    console.log('[sendEmail] 📧 Sending Email via Nodemailer');
    console.log('[sendEmail] Host:', process.env.EMAIL_HOST);
    console.log('[sendEmail] To:', options.email);

    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: port,
      secure: port === 465, // true for 465, false for other ports
      auth: {
        user: user,
        pass: pass,
      },
      tls: {
        // Do not fail on invalid certs
        rejectUnauthorized: false
      }
    });

    const mailOptions = {
      from: `"${process.env.FROM_NAME}" <${process.env.FROM_EMAIL || user}>`,
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