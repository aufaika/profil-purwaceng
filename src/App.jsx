import { useState, useEffect } from "react";
import "./App.css";

// --- KUMPULAN IKON PROFESIONAL (SVG) ---
const IconLeaf = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
    <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
  </svg>
);
const IconHome = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    <polyline points="9 22 9 12 15 12 15 22" />
  </svg>
);
const IconShield = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);
const IconBox = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
    <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
    <line x1="12" y1="22.08" x2="12" y2="12" />
  </svg>
);
const IconGift = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="20 12 20 22 4 22 4 12" />
    <rect x="2" y="7" width="20" height="5" />
    <line x1="12" y1="22" x2="12" y2="7" />
    <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z" />
    <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z" />
  </svg>
);
const IconMapPin = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{ marginRight: "8px" }}
  >
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);
const IconPhone = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{ marginRight: "8px" }}
  >
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

function App() {
  const waNumber = "6281234567890"; // Ganti dengan nomor WA UMKM
  const mapsLink =
    "https://www.google.com/maps/search/?api=1&query=warung+bff+basecamp+gunung+bismo+via+sikunang";
  const [activeSection, setActiveSection] = useState("beranda");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["beranda", "tentang", "produk", "galeri", "kontak"];
      const scrollPosition = window.scrollY + 200;

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="app-container">
      {/* NAVBAR */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">
            <div className="img-placeholder logo-placeholder">[LOGO]</div>
            <span className="logo-text">
              KUB
              <br />
              MAJU MAKMUR
            </span>
          </div>
          <div className="nav-links">
            <a
              href="#beranda"
              className={activeSection === "beranda" ? "active" : ""}
            >
              Beranda
            </a>
            <a
              href="#tentang"
              className={activeSection === "tentang" ? "active" : ""}
            >
              Tentang Kami
            </a>
            <a
              href="#produk"
              className={activeSection === "produk" ? "active" : ""}
            >
              Produk
            </a>
            <a
              href="#galeri"
              className={activeSection === "galeri" ? "active" : ""}
            >
              Galeri
            </a>
            <a
              href="#kontak"
              className={activeSection === "kontak" ? "active" : ""}
            >
              Kontak
            </a>
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <header id="beranda" className="hero-section">
        <div className="hero-bg-placeholder img-placeholder">
          [GAMBAR BACKGROUND HERO]
        </div>
        <div className="hero-content">
          <h1>
            Minuman
            <br />
            Purwaceng
            <br />
            <span className="hero-highlight">Asli Dieng</span>
          </h1>
          <p>
            Hangat alami dari dataran tinggi Dieng, dibuat dengan bahan pilihan
            untuk kesejukan dan kebugaran Anda.
          </p>
        </div>
      </header>

      {/* TENTANG KAMI SECTION */}
      <section id="tentang" className="about-section">
        <div className="about-container">
          <div className="about-image">
            <div className="img-placeholder large-placeholder">
              [FOTO KUB BERSAMA]
            </div>
          </div>
          <div className="about-text">
            <h4>Tentang</h4>
            <h2>KUB Maju Makmur</h2>
            <p>
              KUB Maju Makmur merupakan kelompok usaha masyarakat Desa Sikunang,
              Kecamatan Kejajar, Kabupaten Wonosobo yang mengolah purwaceng
              menjadi minuman herbal berkualitas. Kami berkomitmen untuk
              mendukung pemberdayaan ekonomi masyarakat desa dan menghadirkan
              produk alami dari Dieng untuk Anda.
            </p>
            <div className="about-features">
              <div className="feature-item">
                <div className="bullet-point"></div>
                <span>Bahan Baku Lokal Dieng</span>
              </div>
              <div className="feature-item">
                <div className="bullet-point"></div>
                <span>Diproduksi oleh UMKM Desa</span>
              </div>
              <div className="feature-item">
                <div className="bullet-point"></div>
                <span>Proses Higienis & Berkualitas</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MENGENAL PURWACENG SECTION */}
      <section className="mengenal-section">
        <div className="mengenal-bg-placeholder img-placeholder">
          [BACKGROUND DAUN ALAM]
        </div>
        <div className="mengenal-container">
          <div className="mengenal-text">
            <h2>
              Mengenal
              <br />
              Purwaceng
            </h2>
            <p>
              Purwaceng (Pimpinella pruatjan Molk.) adalah tanaman herbal khas
              dataran tinggi Dieng yang telah lama digunakan sebagai minuman
              tradisional. Kini, purwaceng diolah menjadi minuman serbuk praktis
              dengan cita rasa khas dan manfaat alami.
            </p>
          </div>
          <div className="mengenal-images">
            <div className="img-placeholder box-placeholder">[TANAMAN 1]</div>
            <div className="img-placeholder box-placeholder">[TANAMAN 2]</div>
          </div>
        </div>
      </section>

      {/* KATALOG PRODUK */}
      <section id="produk" className="catalog-section">
        <div className="section-title">
          <div className="title-line"></div>
          <h2>Katalog Produk</h2>
          <div className="title-line"></div>
        </div>
        <div className="product-grid">
          {/* Card 1 */}
          <div className="product-card">
            <div className="img-placeholder product-img">[PRODUK 1]</div>
            <div className="product-info">
              <h3>Purwaceng Original</h3>
              <p className="weight">100 gram</p>
              <p className="price">Rp35.000</p>
            </div>
          </div>
          {/* Card 2 */}
          <div className="product-card">
            <div className="img-placeholder product-img">[PRODUK 2]</div>
            <div className="product-info">
              <h3>Purwaceng Jahe</h3>
              <p className="weight">100 gram</p>
              <p className="price">Rp38.000</p>
            </div>
          </div>
          {/* Card 3 */}
          <div className="product-card">
            <div className="img-placeholder product-img">[PRODUK 3]</div>
            <div className="product-info">
              <h3>Purwaceng Gula Aren</h3>
              <p className="weight">100 gram</p>
              <p className="price">Rp38.000</p>
            </div>
          </div>
          {/* Card 4 */}
          <div className="product-card">
            <div className="img-placeholder product-img">[PRODUK 4]</div>
            <div className="product-info">
              <h3>Paket Hemat</h3>
              <p className="weight">250 gram</p>
              <p className="price">Rp85.000</p>
            </div>
          </div>
        </div>
      </section>

      {/* WHY US SECTION */}
      <section className="why-us-section">
        <h2>Kenapa Memilih Produk Kami?</h2>
        <div className="why-us-grid">
          <div className="why-item">
            <div className="why-bullet">
              <IconLeaf />
            </div>
            <p>
              Bahan Baku
              <br />
              Lokal Dieng
            </p>
          </div>
          <div className="why-item">
            <div className="why-bullet">
              <IconHome />
            </div>
            <p>
              Diproduksi oleh
              <br />
              UMKM Desa Sikunang
            </p>
          </div>
          <div className="why-item">
            <div className="why-bullet">
              <IconShield />
            </div>
            <p>
              Proses Produksi
              <br />
              Higienis
            </p>
          </div>
          <div className="why-item">
            <div className="why-bullet">
              <IconBox />
            </div>
            <p>
              Kemasan Praktis
              <br />
              dan Aman
            </p>
          </div>
          <div className="why-item">
            <div className="why-bullet">
              <IconGift />
            </div>
            <p>
              Cocok sebagai
              <br />
              Oleh-oleh Dieng
            </p>
          </div>
        </div>
      </section>

      {/* GALERI SECTION */}
      <section id="galeri" className="gallery-section">
        <h2>Galeri Kegiatan & Produk</h2>
        <div className="gallery-grid">
          <div className="img-placeholder gallery-img">[GALERI 1]</div>
          <div className="img-placeholder gallery-img">[GALERI 2]</div>
          <div className="img-placeholder gallery-img">[GALERI 3]</div>
          <div className="img-placeholder gallery-img">[GALERI 4]</div>
        </div>
      </section>

      {/* FOOTER & KONTAK */}
      <footer id="kontak" className="footer-section">
        <div className="footer-contact-container">
          <div className="contact-card">
            <h3>Lokasi Kami</h3>
            <p>
              <strong>Warung BFF Basecamp Gunung Bismo</strong>
              <br />
              Desa Sikunang, Kecamatan Kejajar
              <br />
              Kabupaten Wonosobo, Jawa Tengah
            </p>
            <a
              href={mapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-map"
              style={{ textDecoration: "none", display: "inline-flex" }}
            >
              <IconMapPin /> Lihat di Google Maps
            </a>
          </div>
          <div className="map-image-container">
            <div className="img-placeholder map-placeholder">
              [FOTO TOKO / PETA]
            </div>
          </div>
          <div className="contact-card">
            <h3>Hubungi Kami</h3>
            <p className="contact-row">Telepon: 0812-3456-7890</p>
            <p className="contact-row">Instagram: @kub_maju_makmur</p>
            <a
              href={`https://wa.me/${waNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-buy mt-3"
              style={{ textDecoration: "none", display: "inline-flex" }}
            >
              <IconPhone /> Pesan via WhatsApp
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-logo">
            <div className="img-placeholder logo-placeholder-small">[LOGO]</div>
            <span>
              KUB
              <br />
              MAJU MAKMUR
            </span>
          </div>
          <div className="footer-tagline">
            <p>
              <strong>Minuman Purwaceng Asli Dieng</strong>
              <br />
              Hangat alami dari dataran tinggi untuk Anda.
            </p>
          </div>
          <div className="footer-social-copy">
            <p>© 2026 KUB Maju Makmur. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* FLOATING WA IKON */}
      <a
        href={`https://wa.me/${waNumber}`}
        target="_blank"
        rel="noopener noreferrer"
        className="floating-wa"
      >
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
      </a>
    </div>
  );
}

export default App;
