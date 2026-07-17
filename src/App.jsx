import "./App.css";

function App() {
  const waNumber = "6281234567890"; // Ganti dengan nomor WA UMKM

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
            <a href="#beranda">Beranda</a>
            <a href="#tentang">Tentang Kami</a>
            <a href="#produk">Produk</a>
            <a href="#galeri">Galeri</a>
            <a href="#kontak">Kontak</a>
          </div>
          <a
            href={`https://wa.me/${waNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-nav"
          >
            📞 Pesan via WhatsApp
          </a>
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
          <a href="#produk" className="btn-primary">
            🛒 Pesan Sekarang
          </a>
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
                <span style={{ fontSize: "24px" }}>🌱</span>
                <span>
                  Bahan Baku
                  <br />
                  Lokal Dieng
                </span>
              </div>
              <div className="feature-item">
                <span style={{ fontSize: "24px" }}>🏠</span>
                <span>
                  Diproduksi oleh
                  <br />
                  UMKM Desa
                </span>
              </div>
              <div className="feature-item">
                <span style={{ fontSize: "24px" }}>✅</span>
                <span>
                  Proses Higienis &<br />
                  Berkualitas
                </span>
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
          <span style={{ fontSize: "28px" }}>🌱</span>
          <h2>Katalog Produk</h2>
          <span style={{ fontSize: "28px" }}>🌱</span>
        </div>
        <div className="product-grid">
          {/* Card 1 */}
          <div className="product-card">
            <div className="img-placeholder product-img">[PRODUK 1]</div>
            <div className="product-info">
              <h3>Purwaceng Original</h3>
              <p className="weight">100 gram</p>
              <p className="price">Rp35.000</p>
              <button className="btn-buy">🛒 Pesan</button>
            </div>
          </div>
          {/* Card 2 */}
          <div className="product-card">
            <div className="img-placeholder product-img">[PRODUK 2]</div>
            <div className="product-info">
              <h3>Purwaceng Jahe</h3>
              <p className="weight">100 gram</p>
              <p className="price">Rp38.000</p>
              <button className="btn-buy">🛒 Pesan</button>
            </div>
          </div>
          {/* Card 3 */}
          <div className="product-card">
            <div className="img-placeholder product-img">[PRODUK 3]</div>
            <div className="product-info">
              <h3>Purwaceng Gula Aren</h3>
              <p className="weight">100 gram</p>
              <p className="price">Rp38.000</p>
              <button className="btn-buy">🛒 Pesan</button>
            </div>
          </div>
          {/* Card 4 */}
          <div className="product-card">
            <div className="img-placeholder product-img">[PRODUK 4]</div>
            <div className="product-info">
              <h3>Paket Hemat</h3>
              <p className="weight">250 gram</p>
              <p className="price">Rp85.000</p>
              <button className="btn-buy">🛒 Pesan</button>
            </div>
          </div>
        </div>
      </section>

      {/* WHY US SECTION */}
      <section className="why-us-section">
        <h2>Kenapa Memilih Produk Kami?</h2>
        <div className="why-us-grid">
          <div className="why-item">
            <span style={{ fontSize: "32px" }}>🌱</span>
            <p>
              Bahan Baku
              <br />
              Lokal Dieng
            </p>
          </div>
          <div className="why-item">
            <span style={{ fontSize: "32px" }}>🏠</span>
            <p>
              Diproduksi oleh
              <br />
              UMKM Desa Sikunang
            </p>
          </div>
          <div className="why-item">
            <span style={{ fontSize: "32px" }}>✅</span>
            <p>
              Proses Produksi
              <br />
              Higienis
            </p>
          </div>
          <div className="why-item">
            <span style={{ fontSize: "32px" }}>📦</span>
            <p>
              Kemasan Praktis
              <br />
              dan Aman
            </p>
          </div>
          <div className="why-item">
            <span style={{ fontSize: "32px" }}>🎁</span>
            <p>
              Cocok sebagai
              <br />
              Oleh-oleh Khas Dieng
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
              <strong>KUB Maju Makmur</strong>
              <br />
              Desa Sikunang, Kecamatan Kejajar
              <br />
              Kabupaten Wonosobo, Jawa Tengah
            </p>
            <button className="btn-map">📍 Lihat di Google Maps</button>
          </div>
          <div className="map-image-container">
            <div className="img-placeholder map-placeholder">[PETA LOKASI]</div>
          </div>
          <div className="contact-card">
            <h3>Hubungi Kami</h3>
            <p className="contact-row">📞 0812-3456-7890</p>
            <p className="contact-row">📸 @kub_maju_makmur</p>
            <button className="btn-buy mt-3">📞 Pesan via WhatsApp</button>
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
            <div className="footer-icons">📸 📞</div>
            <p>© 2026 KUB Maju Makmur. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* FLOATING WA */}
      <a
        href={`https://wa.me/${waNumber}`}
        target="_blank"
        rel="noopener noreferrer"
        className="floating-wa"
      >
        📞
      </a>
    </div>
  );
}

export default App;
