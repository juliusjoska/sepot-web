import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { name, email, subject, message } = body

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Vyplňte povinná pole.' }, { status: 400 })
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 465,
      secure: true,
      auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
    })

    await transporter.sendMail({
      from: `"Šepot web" <${process.env.SMTP_USER}>`,
      to: process.env.SMTP_TO,
      replyTo: email,
      subject: `[Šepot] ${subject || 'Nová zpráva z webu'}`,
      html: `
        <h2>Nová zpráva z webu sepot.cz</h2>
        <p><strong>Jméno:</strong> ${name}</p>
        <p><strong>E-mail:</strong> ${email}</p>
        ${subject ? `<p><strong>Předmět:</strong> ${subject}</p>` : ''}
        <p><strong>Zpráva:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
        <hr>
        <p style="color:#888;font-size:12px;">Odesláno z formuláře na sepot.cz</p>
      `,
    })

    // ntfy notification
    if (process.env.NTFY_URL) {
      fetch(process.env.NTFY_URL, {
        method: 'POST',
        headers: { Title: `Sepot: ${name}`, Tags: 'lock,speech_balloon' },
        body: `${name} (${email}): ${message.slice(0, 200)}`,
      }).catch(() => {})
    }

    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json({ error: 'Chyba při odesílání.' }, { status: 500 })
  }
}
