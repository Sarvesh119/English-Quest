import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: path.join(__dirname, '.env') });

async function debugEmail() {
  const port = parseInt(process.env.EMAIL_PORT || '587');
  const user = process.env.EMAIL_USER;
  const pass = process.env.EMAIL_PASS ? process.env.EMAIL_PASS.replace(/\s/g, '') : '';
  
  console.log('--- Email Debug Info ---');
  console.log('Host:', process.env.EMAIL_HOST);
  console.log('Port:', port);
  console.log('User:', user);
  console.log('Pass Length:', pass.length);
  console.log('Secure:', port === 465);
  console.log('------------------------');

  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: port,
    secure: port === 465,
    auth: {
      user: user,
      pass: pass,
    },
    tls: {
      rejectUnauthorized: false
    },
    debug: true, // Enable debug output
    logger: true // Log information to console
  });

  try {
    console.log('Verifying connection...');
    await transporter.verify();
    console.log('Connection verified successfully!');

    console.log('Sending test email...');
    const info = await transporter.sendMail({
      from: `"${process.env.FROM_NAME}" <${process.env.FROM_EMAIL}>`,
      to: user, // Send to yourself
      subject: 'Debug Email Test',
      text: 'If you see this, your email configuration is working!',
      html: '<b>If you see this, your email configuration is working!</b>',
    });

    console.log('Test email sent successfully!');
    console.log('Message ID:', info.messageId);
  } catch (error) {
    console.error('DEBUG ERROR:', error);
  }
}

debugEmail();
