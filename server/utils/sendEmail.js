import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

const sendEmail = async (options) => {
  try {
    console.log('[sendEmail] 📧 Sending OTP via Resend API');
    console.log('[sendEmail] To:', options.email);
    console.log('[sendEmail] Subject:', options.subject);

    const { data, error } = await resend.emails.send({
      from: `${process.env.FROM_NAME} <onboarding@resend.dev>`,
      to: options.email,
      subject: options.subject,
      text: options.message,
      html: options.html,
    });

    if (error) {
      console.error('[sendEmail] ❌ Resend Error:', error);
      console.error('[sendEmail] Error message:', error.message);
      return { success: false, error: error.message };
    }

    console.log('[sendEmail] ✅ Email sent successfully via Resend');
    console.log('[sendEmail] Message ID:', data.id);
    return { success: true, messageId: data.id };

  } catch (error) {
    console.error('[sendEmail] ❌ Unexpected Error:', error);
    console.error('[sendEmail] Error:', error.message);
    return { success: false, error: error.message };
  }
};

export default sendEmail;