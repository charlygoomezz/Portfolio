import emailjs, { EmailJSResponseStatus } from '@emailjs/nodejs';

export default async function handler(
  req: { method: string; body: Record<string, unknown> },
  res: {
    status: (code: number) => { json: (data: unknown) => void };
  },
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, EMAILJS_PUBLIC_KEY, EMAILJS_PRIVATE_KEY } =
    process.env;

  if (!EMAILJS_PRIVATE_KEY) {
    console.error('EMAILJS_PRIVATE_KEY is not set');
    return res.status(500).json({ error: 'Server misconfiguration: missing private key' });
  }

  try {
    await emailjs.send(
      EMAILJS_SERVICE_ID!,
      EMAILJS_TEMPLATE_ID!,
      req.body as Record<string, unknown>,
      {
        publicKey: EMAILJS_PUBLIC_KEY,
        privateKey: EMAILJS_PRIVATE_KEY,
      },
    );

    return res.status(200).json({ success: true });
  } catch (error) {
    if (error instanceof EmailJSResponseStatus) {
      console.error('EmailJS error:', error.status, error.text);
      return res.status(error.status).json({ error: error.text });
    }

    const message = error instanceof Error ? error.message : 'Internal server error';
    console.error('Unexpected error:', message);
    return res.status(500).json({ error: message });
  }
}
