// src/app/api/ai/route.ts
import { NextResponse } from 'next/server';
import OpenAI from 'openai';

export const dynamic = 'force-dynamic';

export async function POST(req: Request) {
    try {
        const apiKey = process.env.OPENAI_API_KEY;
        if (!apiKey) {
            return NextResponse.json({ 
                reply: 'AI analizi için OPENAI_API_KEY yapılandırması gereklidir. (Proje detayları yukarıda mevcuttur)' 
            });
        }

        const openai = new OpenAI({ apiKey });
        const { type, content, context, lang = 'tr' } = await req.json();

        let messages: any[] = [];

        // ==========================================
        // SENARYO 1: BLOG ÖZETLEME
        // ==========================================
        if (type === 'summarize') {
            const systemPrompt = lang === 'en' 
                ? `You are a senior tech editor. Summarize the given text into its 3 most impactful main ideas without boring the reader.
                   RULES:
                   1. Never use numbering like "1., 2., 3.".
                   2. Put a relevant emoji at the beginning of each point.
                   3. Do NOT use any Markdown characters like asterisks (*), hashes (#), or underscores (_). Keep it plain text.
                   4. Use a professional, modern, and fluent English tone.`
                : `Sen kıdemli bir teknoloji editörüsün. Verilen metni okuyucuyu sıkmadan, en vurucu 3 ana fikriyle özetle. 
                   KURALLAR:
                   1. Asla "1., 2., 3." gibi numaralandırma kullanma.
                   2. Her maddenin başına konuya uygun bir emoji koy.
                   3. Asla yıldız (*), diyez (#) veya alt çizgi (_) gibi Markdown işaretleri KULLANMA. Metin tamamen düz (plain text) olsun.
                   4. Metin dilin profesyonel, modern ve akıcı olsun.`;

            messages = [
                { role: "system", content: systemPrompt },
                { role: "user", content: `Metni özetle:\n\n${content}` }
            ];
        }

        // ==========================================
        // SENARYO 2: PROJE ANALİZİ (Recruiter vs Developer)
        // ==========================================
        if (type === 'project_analysis') {
            let systemPrompt = "";

            if (context === 'recruiter') {
                systemPrompt = lang === 'en'
                    ? `You are a visionary Product Manager. You are pitching this project to investors or HR specialists. Do NOT go into code details.
                       RULES:
                       Never use numbering (1,2,3) and Markdown characters (*, #, _). Reply in 3 bullet points using exactly the following format in plain text:
                       
                       🎯 Problem Solved: [Brief explanation]
                       💡 User Benefit: [Brief explanation]
                       🚀 Commercial Value & Vision: [Brief explanation]`
                    : `Sen vizyoner bir Ürün Yöneticisisin (Product Manager). Bu projeyi yatırımcılara veya İK uzmanlarına satıyorsun. Kod detaylarına asla girme.
                       KURALLAR:
                       Asla numaralandırma (1,2,3) ve Markdown işaretleri (*, #, _) KULLANMA. Sadece aşağıdaki formatı birebir koruyarak 3 madde halinde düz metin yanıt ver:
                       
                       🎯 Çözülen Problem: [Buraya kısa ve vurucu açıklama]
                       💡 Kullanıcı Faydası: [Buraya kısa ve vurucu açıklama]
                       🚀 Ticari Değer & Vizyon: [Buraya kısa ve vurucu açıklama]`;
            } else if (context === 'developer') {
                systemPrompt = lang === 'en'
                    ? `You are the Lead Software Architect (CTO). You are explaining this project to other Senior engineers. Focus on engineering facts rather than fancy words.
                       RULES:
                       Never use numbering (1,2,3) and Markdown characters (*, #, _). Reply in 3 bullet points using exactly the following format in plain text:
                       
                       ⚙️ Architectural Decisions: [Why was this tech chosen?]
                       🧠 Technical Solution: [How was the challenge overcome?]
                       ⚡ Scalability: [How can the system handle more load?]`
                    : `Sen Lead Software Architect (CTO) pozisyonundasın. Bu projeyi diğer Senior mühendislere anlatıyorsun. Süslü kelimeler yerine mühendislik gerçeklerine odaklan.
                       KURALLAR:
                       Asla numaralandırma (1,2,3) ve Markdown işaretleri (*, #, _) KULLANMA. Sadece aşağıdaki formatı birebir koruyarak 3 madde halinde düz metin yanıt ver:
                       
                       ⚙️ Mimari Kararlar: [Hangi teknoloji neden seçildi?]
                       🧠 Teknik Çözüm: [Karşılaşılan zorluk nasıl aşıldı?]
                       ⚡ Ölçeklenebilirlik: [Sistem nasıl daha fazla yük kaldırır?]`;
            }

            messages = [
                { role: "system", content: systemPrompt },
                { role: "user", content: `Proje Başlığı: ${content.title}\nTeknolojiler: ${Array.isArray(content.tags) ? content.tags.join(', ') : content.tags}\nAçıklama: ${content.description}` }
            ];
        }

        const completion = await openai.chat.completions.create({
            model: "gpt-4o-mini",
            messages: messages,
            max_tokens: 350,
            temperature: 0.7,
        });

        const reply = completion.choices[0].message.content;
        return NextResponse.json({ reply });

    } catch (error) {
        console.error('OpenAI Error:', error);
        return NextResponse.json({ error: 'Bir hata oluştu.' }, { status: 500 });
    }
}