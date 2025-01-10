import { validateEmail } from '../utils/validateEmail';

export function handleFormSubmission(formData) {
  if (!validateEmail(formData.email)) {
    throw new Error('Invalid email address');
  }
  // Process form data
  console.log('Form submitted successfully:', formData);
}
