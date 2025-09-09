export class Navigation {
  render(container) {
    container.innerHTML = `
      <nav class="navbar">
        <div class="container">
          <div class="navbar-brand">
            <a href="/" onclick="navigateTo('/'); return false;">
              <h2>QR Menü</h2>
            </a>
          </div>
          <div class="navbar-menu" id="navbar-menu">
            <a href="/" onclick="navigateTo('/'); return false;" class="navbar-item">Ana Sayfa</a>
            <a href="/gallery" onclick="navigateTo('/gallery'); return false;" class="navbar-item">Galeri</a>
          </div>
          <div class="navbar-burger" id="navbar-burger">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </nav>
    `
    
    // Mobile menu toggle
    const burger = container.querySelector('#navbar-burger')
    const menu = container.querySelector('#navbar-menu')
    
    burger.addEventListener('click', () => {
      burger.classList.toggle('is-active')
      menu.classList.toggle('is-active')
    })
  }
}