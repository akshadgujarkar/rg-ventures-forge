
import emailjs from 'emailjs-com';

export const sendEnquiryNotification = (enquiryData: {
  name: string;
  email: string;
  company?: string | undefined;
  problem: string;
}) => {
  // Initialize EmailJS with your User ID
  emailjs.init(import.meta.env.VITE_EMAILJS_USER_ID);
  
  // Prepare template parameters
  const templateParams = {
    name: enquiryData.name,
    email: enquiryData.email,
    company: enquiryData.company || 'Not provided',
    message: enquiryData.problem,
  };
  
  // Send email using EmailJS
  return emailjs.send(
    import.meta.env.VITE_EMAILJS_SERVICE_ID,
    import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
    templateParams
  );
};
