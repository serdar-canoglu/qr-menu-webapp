export class Carousel {
  constructor() {
    this.currentIndex = 0
    this.images = [
      { src: 'https://via.placeholder.com/800x400?text=Restoran+İç+Mekan', alt: 'Restoran İç Mekan' },
      { src: 'https://via.placeholder.com/800x400?text=Lezzetli+Yemekler', alt: 'Lezzetli Yemekler' },
      { src: 'https://via.placeholder.com/800x400?text=Mutfak+Ekibi', alt: 'Mutfak Ekibi' },
      { src: 'https://via.placeholder.com/800x400?text=Atmosfer', alt: 'Atmosfer' },
      { src: 'https://via.placeholder.com/800x400?text=Terras+Alanı', alt: 'Terras Alanı' }
    ]
  }

  render(container) {
    container.innerHTML = `
      <div class="carousel-container">
        <div class="carousel-wrapper">
          <div class="carousel-track" id="carousel-track">
            ${this.images.map((image, index) => `
              <div class="carousel-slide ${index === 0 ? 'active' : ''}">
                <img src="${image.src}" alt="${image.alt}" />
                <div class="carousel-caption">
                  <h3>${image.alt}</h3>
                </div>
              </div>
            `).join('')}
          </div>
          <button class="carousel-btn carousel-btn-prev" id="prev-btn">
            <span>‹</span>
          </button>
          <button class="carousel-btn carousel-btn-next" id="next-btn">
            <span>›</span>
          </button>
        </div>
        <div class="carousel-indicators">
          ${this.images.map((_, index) => `
            <button class="carousel-indicator ${index === 0 ? 'active' : ''}" data-index="${index}"></button>
          `).join('')}
        </div>
      </div>
    `

    this.setupEventListeners(container)
    this.setupTouchEvents(container)
    this.startAutoPlay()
  }

  setupEventListeners(container) {
    const prevBtn = container.querySelector('#prev-btn')
    const nextBtn = container.querySelector('#next-btn')
    const indicators = container.querySelectorAll('.carousel-indicator')

    prevBtn.addEventListener('click', () => this.prevSlide())
    nextBtn.addEventListener('click', () => this.nextSlide())

    indicators.forEach((indicator, index) => {
      indicator.addEventListener('click', () => this.goToSlide(index))
    })

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowLeft') this.prevSlide()
      if (e.key === 'ArrowRight') this.nextSlide()
    })
  }

  setupTouchEvents(container) {
    const track = container.querySelector('#carousel-track')
    let startX = 0
    let endX = 0

    track.addEventListener('touchstart', (e) => {
      startX = e.touches[0].clientX
    })

    track.addEventListener('touchend', (e) => {
      endX = e.changedTouches[0].clientX
      const diff = startX - endX

      if (Math.abs(diff) > 50) { // Minimum swipe distance
        if (diff > 0) {
          this.nextSlide()
        } else {
          this.prevSlide()
        }
      }
    })
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length
    this.updateCarousel()
  }

  prevSlide() {
    this.currentIndex = this.currentIndex === 0 ? this.images.length - 1 : this.currentIndex - 1
    this.updateCarousel()
  }

  goToSlide(index) {
    this.currentIndex = index
    this.updateCarousel()
  }

  updateCarousel() {
    const track = document.querySelector('#carousel-track')
    const slides = document.querySelectorAll('.carousel-slide')
    const indicators = document.querySelectorAll('.carousel-indicator')

    if (track) {
      track.style.transform = `translateX(-${this.currentIndex * 100}%)`
    }

    slides.forEach((slide, index) => {
      slide.classList.toggle('active', index === this.currentIndex)
    })

    indicators.forEach((indicator, index) => {
      indicator.classList.toggle('active', index === this.currentIndex)
    })
  }

  startAutoPlay() {
    setInterval(() => {
      // Only auto-advance if user hasn't interacted recently
      if (!this.userInteracting) {
        this.nextSlide()
      }
    }, 5000)

    // Track user interaction
    document.addEventListener('click', () => {
      this.userInteracting = true
      setTimeout(() => {
        this.userInteracting = false
      }, 10000)
    })
  }
}