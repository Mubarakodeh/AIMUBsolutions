import { FormSubmission } from '../types/formSubmission';

/**
 * Sends form submission data to a webhook
 * @param data The form submission data
 * @returns Promise that resolves when the webhook request is complete
 */
export async function sendToWebhook(data: FormSubmission): Promise<void> {
  try {
    const webhookUrl = 'https://hook.us2.make.com/gi6gkasvqkqpq2n4d7anrf3mw05laxh0';
    
    // Add timeout to prevent hanging requests
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10000); // 10 second timeout
    
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(data),
      signal: controller.signal
    });
    
    clearTimeout(timeoutId);
    
    if (!response.ok) {
      const errorText = await response.text().catch(() => 'Unknown error');
      throw new Error(`Webhook request failed with status ${response.status}: ${errorText}`);
    }
    
    console.log('Webhook notification sent successfully');
  } catch (error) {
    // More detailed error logging
    if (error instanceof Error) {
      console.error('Error sending webhook notification:', error.message);
    } else {
      console.error('Error sending webhook notification:', error);
    }
    
    // We don't throw the error here to prevent it from affecting the main form submission flow
    // This ensures the form submission process continues even if the webhook fails
  }
}