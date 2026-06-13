import twilio from 'twilio';

/**
 * SMS utility for sending OTP codes using Twilio.
 * Requires the following environment variables:
 * - TWILIO_ACCOUNT_SID
 * - TWILIO_AUTH_TOKEN
 * - TWILIO_PHONE_NUMBER
 */

const sendSMS = async (options) => {
  try {
    const { mobileNumber, message } = options;

    // Check if Twilio credentials are provided
    if (process.env.TWILIO_ACCOUNT_SID && process.env.TWILIO_AUTH_TOKEN && process.env.TWILIO_PHONE_NUMBER) {
      console.log(`[SMS UTILITY] 📱 Sending real SMS via Twilio to: ${mobileNumber}`);
      
      const client = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

      const response = await client.messages.create({
        body: message,
        from: process.env.TWILIO_PHONE_NUMBER,
        to: mobileNumber
      });

      console.log(`[SMS UTILITY] ✅ Twilio SMS sent: ${response.sid}`);
      return {
        success: true,
        messageId: response.sid
      };
    } else {
      // Fallback to simulation if credentials are missing
      console.log('--------------------------------------------------');
      console.log('[SMS UTILITY] ⚠️ MISSING TWILIO CREDENTIALS');
      console.log(`[SMS UTILITY] 📱 Simulated SMS to: ${mobileNumber}`);
      console.log(`[SMS UTILITY] ✉️ Message: ${message}`);
      console.log('--------------------------------------------------');

      // Return success anyway so the flow continues in dev
      return {
        success: true,
        messageId: `simulated-sms-${Date.now()}`
      };
    }
  } catch (error) {
    console.error('[SMS UTILITY] ❌ Error sending SMS:', error);
    return {
      success: false,
      error: error.message
    };
  }
};

export default sendSMS;
