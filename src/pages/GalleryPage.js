import { Navigation } from '../components/Navigation.js'
import { Carousel } from '../components/Carousel.js'

export class GalleryPage {
  render(container) {
    container.innerHTML = `
      <div class="page-container">
        <div id="navigation"></div>
        <div class="gallery-content">
          <div class="container">
            <h1>Galeri</h1>
            <p>Restoranımızdan ve yemeklerimizden fotoğraflar</p>
            <div id="carousel"></div>
          </div>
        </div>
      </div>
    `
    
    // Render components
    new Navigation().render(container.querySelector('#navigation'))
    new Carousel().render(container.querySelector('#carousel'))
  }
}