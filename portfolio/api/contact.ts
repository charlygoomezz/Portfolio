import emailjs from '@emailjs/nodejs';

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
    await emailjs.send(
      process.env.EMAILJS_SERVICE_ID!,
      process.env.EMAILJS_TEMPLATE_ID!,
      req.body as Record<string, unknown>,
      {
        publicKey: process.env.EMAILJS_PUBLIC_KEY,
        privateKey: process.env.EMAILJS_PRIVATE_KEY,
      },
    );

    return res.status(200).json({ success: true });
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Internal server error';
    console.error('EmailJS error:', message);
    return res.status(500).json({ error: message });
  }
}
