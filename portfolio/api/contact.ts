export default async function handler(
  req: { method: string; body: Record<string, unknown> },
  res: {
    status: (code: number) => { json: (data: unknown) => void };
  },
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        service_id: process.env.EMAILJS_SERVICE_ID,
        template_id: process.env.EMAILJS_TEMPLATE_ID,
        user_id: process.env.EMAILJS_PUBLIC_KEY,
        template_params: req.body,
      }),
    });

    const text = await response.text();

    if (!response.ok) {
      console.error('EmailJS API error:', response.status, text);
      return res.status(response.status).json({ error: text });
    }

    return res.status(200).json({ success: true });
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Internal server error';
    console.error('EmailJS fetch error:', message);
    return res.status(500).json({ error: message });
  }
}
