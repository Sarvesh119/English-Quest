/**
 * Dummy SMS utility for sending OTP codes.
 * In a production environment, you would integrate this with a service like Twilio, Vonage, or AWS SNS.
 */

const sendSMS = async (options) => {
  try {
    const { mobileNumber, message } = options;
    
    console.log('--------------------------------------------------');
    console.log(`[SMS UTILITY] 📱 Sending SMS to: ${mobileNumber}`);
    console.log(`[SMS UTILITY] ✉️ Message: ${message}`);
    console.log('--------------------------------------------------');

    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Return success
    return {
      success: true,
      messageId: `simulated-sms-${Date.now()}`
    };
  } catch (error) {
    console.error('[SMS UTILITY] ❌ Error sending SMS:', error);
    return {
      success: false,
      error: error.message
    };
  }
};

export default sendSMS;
