# QR Menü Web Uygulaması

Modern ve responsive bir QR menü web uygulaması. Restoranlar için dijital menü çözümü sunar.

## Özellikler

- 📱 **Mobil Uyumlu**: Tüm cihazlarda mükemmel görünüm
- 🎨 **Modern Tasarım**: Tutarlı buton sistemi ve responsive tasarım
- 🖼️ **İnteraktif Galeri**: Kaydırmalı carousel ile görsel galeri
- 🔐 **Güvenli Admin Paneli**: Şifre korumalı yönetim alanı
- 📅 **Takvim Entegrasyonu**: Admin panelinde basit takvim görünümü
- ⌨️ **Klavye Desteği**: Tam klavye erişilebilirliği
- 👆 **Dokunmatik Destek**: Mobil cihazlarda swipe desteği

## Kurulum ve Çalıştırma

### Gereksinimler
- Node.js (v16 veya üzeri)
- npm

### Kurulum
```bash
# Depoyu klonlayın
git clone [repo-url]
cd qr-menu-webapp

# Bağımlılıkları yükleyin
npm install

# Çevre değişkenlerini ayarlayın (.env dosyası)
cp .env.example .env

# Geliştirme sunucusunu başlatın
npm run dev
```

### Production Build
```bash
# Production build oluşturun
npm run build

# Build'i önizleyin
npm run preview
```

## Admin Paneli Yapılandırması

### Admin Şifresi Ayarlama

Admin paneline erişim için şifre `.env` dosyasında yapılandırılır:

```env
# .env dosyası
VITE_ADMIN_PASSWORD=your-secure-password-here
```

**Önemli Güvenlik Notları:**
- Production ortamında güçlü bir şifre kullanın
- `.env` dosyasını versiyon kontrolüne eklemeyin
- Hosting sağlayıcınızda environment variables'ları güvenli şekilde ayarlayın

### Admin Paneline Erişim

1. **Gizli URL**: Admin paneli yalnızca `/adminduzenle` URL'sine doğrudan gidilerek erişilebilir
2. **Şifre Koruması**: Doğru şifre girildikten sonra takvim görünümü açılır
3. **Oturum Yönetimi**: Çıkış butonu ile güvenli şekilde oturumu sonlandırabilirsiniz

### Admin Panel Özellikleri

- **Takvim Görünümü**: Basit aylık takvim
- **Navigasyon**: Ay ileri/geri navigation
- **Çıkış Butonu**: Güvenli oturum sonlandırma
- **Responsive Tasarım**: Mobil uyumlu arayüz

## Teknoloji Stack

- **Frontend Framework**: Vite + Vanilla JavaScript
- **Styling**: Modern CSS3 (CSS Custom Properties)
- **Build Tool**: Vite
- **State Management**: Vanilla JavaScript (sessionStorage)
- **Routing**: Custom SPA router

## Proje Yapısı

```
src/
├── components/          # Yeniden kullanılabilir bileşenler
│   ├── Calendar.js     # Takvim bileşeni
│   ├── Carousel.js     # Galeri carousel
│   ├── Hero.js         # Ana sayfa hero section
│   ├── MenuSection.js  # Menü bölümü
│   └── Navigation.js   # Navigasyon bileşeni
├── pages/              # Sayfa bileşenleri
│   ├── AdminPage.js    # Admin paneli
│   ├── GalleryPage.js  # Galeri sayfası
│   └── HomePage.js     # Ana sayfa
├── auth.js             # Authentication logic
├── router.js           # SPA routing
├── main.js             # Ana uygulama dosyası
└── style.css           # Global stiller
```

## Özelleştirme

### Buton Stilleri

Uygulama tutarlı bir buton sistemi kullanır:

```css
.btn                 /* Temel buton stili */
.btn-primary         /* Ana butonlar */
.btn-secondary       /* İkincil butonlar */
.btn-outline         /* Çerçeveli butonlar */
.btn-sm              /* Küçük butonlar */
.btn-lg              /* Büyük butonlar */
```

### Renk Paleti

CSS custom properties ile renk sistemi:

```css
--primary-color: #e74c3c      /* Ana renk */
--secondary-color: #34495e    /* İkincil renk */
--accent-color: #f39c12       /* Vurgu rengi */
```

### Carousel Resimleri

Carousel resimleri `src/components/Carousel.js` dosyasında tanımlanır. Gerçek resimler için placeholder URL'leri değiştirin.

## Deployment

### Environment Variables

Production'da şu environment variable'ları ayarlayın:

```bash
VITE_ADMIN_PASSWORD=your-production-password
NODE_ENV=production
```

### Hosting Sağlayıcıları

Bu uygulama şu platformlarda kolayca deploy edilebilir:

- **Vercel**: `vercel --prod`
- **Netlify**: `npm run build` + dist klasörünü upload
- **GitHub Pages**: GitHub Actions ile otomatik deploy
- **Firebase Hosting**: `firebase deploy`

## Geliştirme

### Scripts

```bash
npm run dev          # Geliştirme sunucusu
npm run build        # Production build
npm run preview      # Build önizleme
```

### Kod Katkısı

1. Fork yapın
2. Feature branch oluşturun (`git checkout -b feature/amazing-feature`)
3. Değişikliklerinizi commit edin (`git commit -m 'Add amazing feature'`)
4. Branch'i push edin (`git push origin feature/amazing-feature`)
5. Pull Request açın

## Lisans

Bu proje MIT lisansı altında lisanslanmıştır.

## Destek

Sorularınız için issue açabilir veya doğrudan iletişime geçebilirsiniz.