export class MenuSection {
  constructor() {
    this.menuItems = [
      {
        category: 'Ana Yemekler',
        items: [
          { name: 'Izgara Köfte', price: '₺85', description: 'Özel baharatlarla marine edilmiş köfte' },
          { name: 'Tavuk Şiş', price: '₺75', description: 'Izgara tavuk göğsü, garnitür ile' },
          { name: 'Adana Kebap', price: '₺90', description: 'Geleneksel adana kebap, lavash ekmek ile' }
        ]
      },
      {
        category: 'İçecekler',
        items: [
          { name: 'Türk Çayı', price: '₺15', description: 'Geleneksel demli çay' },
          { name: 'Türk Kahvesi', price: '₺25', description: 'Köpüklü Türk kahvesi' },
          { name: 'Ayran', price: '₺20', description: 'Taze ayran' }
        ]
      },
      {
        category: 'Tatlılar',
        items: [
          { name: 'Baklava', price: '₺45', description: 'Antep fıstıklı baklava' },
          { name: 'Künefe', price: '₺50', description: 'Sıcak künefe, dondurma ile' },
          { name: 'Sütlaç', price: '₺30', description: 'Ev yapımı sütlaç' }
        ]
      }
    ]
  }

  render(container) {
    const menuHTML = this.menuItems.map(category => `
      <div class="menu-category">
        <h3 class="category-title">${category.category}</h3>
        <div class="menu-items">
          ${category.items.map(item => `
            <div class="menu-item">
              <div class="item-info">
                <h4 class="item-name">${item.name}</h4>
                <p class="item-description">${item.description}</p>
              </div>
              <div class="item-price">${item.price}</div>
            </div>
          `).join('')}
        </div>
      </div>
    `).join('')

    container.innerHTML = `
      <section class="menu-section">
        <div class="container">
          <h2 class="section-title">Menümüz</h2>
          <div class="menu-content">
            ${menuHTML}
          </div>
        </div>
      </section>
    `
  }
}