export class Hero {
  render(container) {
    container.innerHTML = `
      <section class="hero">
        <div class="hero-content">
          <div class="container">
            <h1 class="hero-title">Hoş Geldiniz</h1>
            <p class="hero-subtitle">Lezzetli yemeklerimizi keşfedin</p>
            <div class="hero-buttons">
              <a href="/gallery" onclick="navigateTo('/gallery'); return false;" class="btn btn-primary">
                Galeriyi Görüntüle
              </a>
              <button class="btn btn-secondary" onclick="scrollToMenu()">
                Menüyü İncele
              </button>
            </div>
          </div>
        </div>
      </section>
    `
    
    // Add scroll to menu function
    window.scrollToMenu = () => {
      const menuSection = document.querySelector('#menu-section')
      if (menuSection) {
        menuSection.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }
}