import { FormSubmission } from '../types/formSubmission';

const AIRTABLE_API_URL = 'https://api.airtable.com/v0/appEduRPHYRx9sG3y/Leads';

interface AirtableSubmission {
  fields: {
    'Full Name': string;
    'Email': string;
    'Business Name': string;
    'Service Type Interested In': string[];
    'Notes': string;
    'Lead Source': string;
    'Lead Stage': string;
    'Assigned To': string;
  };
}

export async function submitToAirtable(data: FormSubmission, source: string): Promise<void> {
  if (!import.meta.env.VITE_AIRTABLE_PAT) {
    throw new Error('Airtable API token not configured');
  }

  const submission: AirtableSubmission = {
    fields: {
      'Full Name': data.full_name,
      'Email': data.email,
      'Business Name': data.company_name,
      'Service Type Interested In': [data.service],
      'Notes': data.problem_description || '',
      'Lead Source': 'Demo Form',
      'Lead Stage': 'New',
      'Assigned To': 'Unassigned'
    }
  };

  try {
    const response = await fetch(AIRTABLE_API_URL, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${import.meta.env.VITE_AIRTABLE_PAT}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(submission)
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('Airtable error:', errorData);
      throw new Error(`Airtable API error: ${JSON.stringify(errorData)}`);
    }

    console.log('Successfully submitted to Airtable');
  } catch (error) {
    console.error('Error submitting to Airtable:', error);
    throw error;
  }
}