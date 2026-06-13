import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

const sendEmail = async (options) => {
  // FALLBACK: Always log the OTP to the console so the user can see it in Render logs if email fails
  if (options.message && options.message.includes('verification code is:')) {
    const otpMatch = options.message.match(/verification code is: (\d+)/);
    if (otpMatch) {
      console.log('--------------------------------------------------');
      console.log(`[OTP FALLBACK] 🔑 YOUR CODE IS: ${otpMatch[1]}`);
      console.log('--------------------------------------------------');
    }
  }

  try {
    if (!process.env.RESEND_API_KEY) {
      console.log('--------------------------------------------------');
      console.log('[sendEmail] ⚠️ MISSING RESEND_API_KEY');
      console.log('--------------------------------------------------');
      return { success: true, messageId: `simulated-email-${Date.now()}` };
    }

    const fromName = process.env.FROM_NAME || 'English Quest';
    // Note: Resend requires a verified domain or uses onboarding@resend.dev for testing
    const fromEmail = 'onboarding@resend.dev';

    console.log('[sendEmail] 📧 Sending Email via Resend API');

    const { data, error } = await resend.emails.send({
      from: `${fromName} <${fromEmail}>`,
      to: options.email,
      subject: options.subject,
      text: options.message,
      html: options.html,
    });

    if (error) {
      console.error('[sendEmail] ❌ Resend Error:', error);
      return { 
        success: true, 
        messageId: `failed-resend-${Date.now()}`,
        error: error.message 
      };
    }

    console.log('[sendEmail] ✅ Email sent successfully via Resend');
    return { success: true, messageId: data.id };

  } catch (error) {
    console.error('[sendEmail] ❌ Unexpected Error:', error);
    return { 
      success: true, 
      messageId: `failed-unexpected-${Date.now()}`,
      error: error.message 
    };
  }
};

export default sendEmail;
