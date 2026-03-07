// src/data/blog.ts

export interface BlogPost {
    id: string;
    slug: string;
    title: string;
    excerpt: string; // Listede görünen kısa özet
    content: string; // Detaydaki uzun yazı (HTML formatında)
    date: string;
    readTime: string;
    category: string;
    tags: string[];
    image?: string; // Blog kapak resmi (Opsiyonel)
}

export const blogPosts: BlogPost[] = [
    {
        id: "1",
        slug: "nextjs-14-server-actions",
        title: "Next.js 14 ve Server Actions Devrimi",
        excerpt: "API route yazmadan backend işlemlerini doğrudan bileşen içinde nasıl yaparsınız? Next.js 14 ile gelen yenilikleri inceliyoruz.",
        content: `
      <p>Next.js 14, React ekosisteminde kartları yeniden dağıtıyor. Özellikle <strong>Server Actions</strong> özelliği, frontend geliştiricilerinin backend mantığını yazma şeklini kökten değiştiriyor.</p>
      
      <h2>Server Actions Nedir?</h2>
      <p>Geleneksel yöntemde, bir formu sunucuya göndermek için önce bir API route (örn: <code>/api/submit</code>) oluşturur, sonra client tarafında <code>fetch</code> veya <code>axios</code> ile bu adrese istek atardık. Server Actions ile bu aradaki katman kalkıyor.</p>

      <h3>Avantajları Neler?</h3>
      <ul>
        <li><strong>Daha Az Kod:</strong> Boilerplate kodlardan kurtulun.</li>
        <li><strong>Tip Güvenliği:</strong> TypeScript ile tam uyum.</li>
        <li><strong>Progressive Enhancement:</strong> JavaScript kapalı olsa bile çalışabilen formlar.</li>
      </ul>

      <p>Bu teknoloji, özellikle form ağırlıklı uygulamalarda geliştirme hızını %50 oranında artırabilir.</p>
    `,
        date: "15 Ara 2025",
        readTime: "5 dk",
        category: "Teknoloji",
        tags: ["Next.js", "React", "Backend"],
        image: "/images/blog/nextjs-cover.jpg" // Public klasörüne temsili resim koyabilirsin
    },
    {
        id: "2",
        slug: "temiz-kod-prensipleri",
        title: "Clean Code: Kodunuzu Geleceğe Hazırlayın",
        excerpt: "Kod sadece bilgisayarlar için değil, insanlar için de yazılır. Sürdürülebilir yazılımın temel taşları.",
        content: `
      <p>Yazılım geliştirmede en büyük maliyet, kodu yazmak değil, onu okumak ve bakımını yapmaktır. Robert C. Martin'in dediği gibi: <em>"Kod okuma oranı, yazma oranından 10 kat fazladır."</em></p>

      <h2>İsimlendirme Sanatı</h2>
      <p>Değişken isimleri niyetini belli etmelidir. <code>const d = 5;</code> yerine <code>const daysSinceCreation = 5;</code> kullanmak, kodun kendi kendini belgelemesini sağlar.</p>

      <h2>Fonksiyonlar</h2>
      <p>Bir fonksiyon sadece tek bir iş yapmalıdır (Single Responsibility Principle). Eğer fonksiyonunuzda "ve" kelimesi geçiyorsa (örn: Kullanıcıyı oluştur VE email at), muhtemelen o fonksiyonu bölmelisiniz.</p>
    `,
        date: "20 Ara 2025",
        readTime: "8 dk",
        category: "Yazılım Mühendisliği",
        tags: ["Clean Code", "Best Practices"],
        image: "/images/blog/code-cover.jpg"
    },
    {
        id: "3",
        slug: "yapay-zeka-entegrasyonu",
        title: "Web Sitelerine AI Entegrasyonu: Chatbot ve Ötesi",
        excerpt: "OpenAI API kullanarak kendi web sitenize nasıl akıllı bir asistan eklersiniz? Adım adım rehber.",
        content: `
      <p>Yapay zeka artık lüks değil, bir standart haline geliyor. Kullanıcılar artık statik SSS sayfaları yerine, sorularına anında cevap veren asistanlar istiyor.</p>

      <h2>Nasıl Başlanır?</h2>
      <p>İlk adım, OpenAI'dan bir API anahtarı almaktır. Ardından Next.js API Routes kullanarak güvenli bir backend katmanı oluşturmalısınız. Asla API anahtarınızı client tarafında (React bileşeninde) saklamayın!</p>

      <p>Bu blog serisinde, kendi portfolyo siteme nasıl bir AI asistan eklediğimi detaylıca anlatacağım.</p>
    `,
        date: "22 Ara 2025",
        readTime: "6 dk",
        category: "Yapay Zeka",
        tags: ["AI", "OpenAI", "Chatbot"],
        image: "/images/blog/ai-cover.jpg"
    }
];