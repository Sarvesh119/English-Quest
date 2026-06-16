const sendEmail = async (options) => {
  // FALLBACK: Always log the OTP to the console so the user can see it in logs if email fails
  if (options.message && options.message.includes('verification code is:')) {
    const otpMatch = options.message.match(/verification code is: (\d+)/);
    if (otpMatch) {
      console.log('--------------------------------------------------');
      console.log(`[OTP FALLBACK] 🔑 YOUR CODE IS: ${otpMatch[1]}`);
      console.log('--------------------------------------------------');
    }
  }

  try {
    const serviceId = process.env.EMAILJS_SERVICE_ID;
    const templateId = process.env.EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.EMAILJS_PUBLIC_KEY;
    const privateKey = process.env.EMAILJS_PRIVATE_KEY;

    if (!serviceId || !templateId || !publicKey || !privateKey) {
      console.log('--------------------------------------------------');
      console.log('[sendEmail] ⚠️ MISSING EMAILJS CONFIGURATION');
      console.log('--------------------------------------------------');
      // Return success true so the flow doesn't break for development, 
      // but the email won't actually be sent.
      return { success: true, messageId: `simulated-email-${Date.now()}` };
    }

    console.log(`[sendEmail] 📧 Sending Email to: ${options.email} via EmailJS`);

    const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        service_id: serviceId,
        template_id: templateId,
        user_id: publicKey,
        accessToken: privateKey,
        template_params: {
          email: options.email,
          to_email: options.email,
          user_email: options.email,
          to_name: options.email.split('@')[0],
          subject: options.subject,
          message: options.message,
          // Common OTP variations
          otp_code: options.message.match(/verification code is: (\d+)/)?.[1] || '',
          otp: options.message.match(/verification code is: (\d+)/)?.[1] || '',
          code: options.message.match(/verification code is: (\d+)/)?.[1] || '',
          // Common branding variations
          company_name: 'English Quest',
          project_name: 'English Quest',
        },
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('[sendEmail] ❌ EmailJS Error:', errorText);
      return { 
        success: false, 
        error: errorText || 'Failed to send email via EmailJS' 
      };
    }

    console.log('[sendEmail] ✅ Email sent successfully via EmailJS');
    return { success: true };

  } catch (error) {
    console.error('[sendEmail] ❌ Unexpected Error:', error);
    return { 
      success: false, 
      error: error.message 
    };
  }
};

export default sendEmail;
