import { Navigation } from '../components/Navigation.js'
import { Hero } from '../components/Hero.js'
import { MenuSection } from '../components/MenuSection.js'

export class HomePage {
  render(container) {
    container.innerHTML = `
      <div class="page-container">
        <div id="navigation"></div>
        <div id="hero"></div>
        <div id="menu-section"></div>
        <footer class="footer">
          <div class="container">
            <p>&copy; 2024 Restoranımız. Tüm hakları saklıdır.</p>
          </div>
        </footer>
      </div>
    `
    
    // Render components
    new Navigation().render(container.querySelector('#navigation'))
    new Hero().render(container.querySelector('#hero'))
    new MenuSection().render(container.querySelector('#menu-section'))
  }
}