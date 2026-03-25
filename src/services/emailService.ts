interface ContactFormData {
  name: string;
  email: string;
  message: string;
  company?: string;
  phone?: string;
  service?: string;
  subject?: string;
}

const CONTACT_API_URL = import.meta.env.VITE_CONTACT_API_URL || "/api/contact";

const sendToApi = async (payload: Record<string, unknown>) => {
  const response = await fetch(CONTACT_API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    const content = await response.text();
    throw new Error(`Contact API failed: ${response.status} ${content}`);
  }

  return response.json();
};

export const sendContactEmail = async (formData: ContactFormData) => {
  return await sendToApi({
    type: "contact",
    admin_email: process.env.VITE_ADMIN_EMAIL || "hello@cionix.com",
    ...formData,
  });
};

export const sendContactEmailToAdmin = async (formData: ContactFormData, adminEmail: string) => {
  return await sendToApi({
    type: "contact",
    admin_email: adminEmail,
    ...formData,
  });
};
