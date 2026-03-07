// src/app/api/contact/route.ts
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { name, email, subject, message } = body;

        // Gerekli alanların kontrolü
        if (!name || !email || !message) {
            return NextResponse.json({ error: 'Lütfen zorunlu alanları doldurun.' }, { status: 400 });
        }

        // Mail gönderici ayarları
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        // Gönderilecek mailin içeriği
        const mailOptions = {
            from: process.env.EMAIL_USER, // Kendi mailinden
            to: process.env.EMAIL_USER,   // Yine kendi mailine gelecek
            replyTo: email,               // Yanıtlaya basınca kullanıcının mailine gitsin
            subject: `Portfolyo İletişim: ${subject || 'Konu Belirtilmemiş'}`,
            text: `
            İletişim formundan yeni bir mesaj aldın!
                    
            Ad Soyad: ${name}
            E-posta: ${email}
            Konu: ${subject}
                    
            Mesaj:
            ${message}
            `,
        };

        await transporter.sendMail(mailOptions);

        return NextResponse.json({ success: true, message: 'Mesaj başarıyla gönderildi!' }, { status: 200 });

    } catch (error) {
        console.error('Mail gönderme hatası:', error);
        return NextResponse.json({ error: 'Mesaj gönderilirken bir hata oluştu.' }, { status: 500 });
    }
}