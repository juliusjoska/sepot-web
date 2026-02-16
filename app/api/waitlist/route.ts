import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { name, email } = body

    if (!email || !email.trim()) {
      return NextResponse.json({ error: 'Zadejte e-mailovou adresu.' }, { status: 400 })
    }

    // Základní validace e-mailu
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email.trim())) {
      return NextResponse.json({ error: 'Neplatná e-mailová adresa.' }, { status: 400 })
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 465,
      secure: true,
      auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
    })

    await transporter.sendMail({
      from: `"Šepot" <${process.env.SMTP_USER}>`,
      to: process.env.SMTP_TO,
      subject: `[Šepot] Nový zájemce na čekací listině`,
      html: `
        <h2>Nový zájemce o Šepot</h2>
        ${name ? `<p><strong>Jméno:</strong> ${name}</p>` : ''}
        <p><strong>E-mail:</strong> ${email}</p>
        <hr>
        <p style="color:#888;font-size:12px;">Přihlášení přes čekací listinu na sepot.cz</p>
      `,
    })

    // Potvrzovací e-mail zájemci
    await transporter.sendMail({
      from: `"Šepot" <${process.env.SMTP_USER}>`,
      to: email.trim(),
      subject: 'Šepot — Jste na čekací listině!',
      html: `
        <div style="font-family:sans-serif;max-width:500px;margin:0 auto;padding:20px;">
          <h2 style="color:#10b981;">Děkujeme${name ? `, ${name}` : ''}!</h2>
          <p>Byli jste úspěšně přidáni na čekací listinu projektu <strong>Šepot</strong>.</p>
          <p>Budeme vás informovat o:</p>
          <ul>
            <li>Spuštění mobilní aplikace (Android + iOS)</li>
            <li>Novinkách ve vývoji</li>
            <li>Možnosti beta testování</li>
          </ul>
          <p style="color:#888;font-size:13px;">Žádný spam — maximálně 1 e-mail měsíčně. Odhlásit se můžete kdykoliv odpovědí na tento e-mail.</p>
          <hr style="border:none;border-top:1px solid #eee;margin:20px 0;">
          <p style="color:#aaa;font-size:11px;">Šepot — soukromý messenger s end-to-end šifrováním<br>sepot.cz</p>
        </div>
      `,
    })

    // ntfy notifikace
    if (process.env.NTFY_URL) {
      fetch(process.env.NTFY_URL, {
        method: 'POST',
        headers: { Title: `Šepot waitlist: ${name || email}`, Tags: 'lock,bell' },
        body: `Nový zájemce: ${name ? `${name} (${email})` : email}`,
      }).catch(() => {})
    }

    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json({ error: 'Chyba při odesílání. Zkuste to prosím znovu.' }, { status: 500 })
  }
}
