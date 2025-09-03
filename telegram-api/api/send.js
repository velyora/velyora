export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'الطريقة غير مسموحة' });
  }

  const { message } = req.body;

  const TELEGRAM_BOT_TOKEN = "6961886563:AAHZwl-UaAWaGgXwzyp1vazRu1Hf37FKX2A";
  const CHAT_ID = "-2399588626";

  const telegramUrl = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;

  try {
    const response = await fetch(telegramUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        text: message,
        parse_mode: "HTML"
      }),
    });

    if (!response.ok) throw new Error('فشل إرسال الرسالة');

    return res.status(200).json({ success: true, message: 'تم إرسال الرسالة' });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
}
