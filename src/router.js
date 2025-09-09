import { HomePage } from './pages/HomePage.js'
import { GalleryPage } from './pages/GalleryPage.js'
import { AdminPage } from './pages/AdminPage.js'

class Router {
  constructor() {
    this.routes = {
      '/': HomePage,
      '/gallery': GalleryPage,
      '/adminduzenle': AdminPage
    }
    
    this.currentRoute = '/'
  }

  init() {
    // Handle initial load
    this.handleRoute()
    
    // Handle popstate (back/forward buttons)
    window.addEventListener('popstate', () => {
      this.handleRoute()
    })
  }

  handleRoute() {
    const path = window.location.pathname
    this.currentRoute = path
    
    const RouteComponent = this.routes[path] || this.routes['/']
    const contentElement = document.querySelector('#content')
    
    if (contentElement) {
      contentElement.innerHTML = ''
      new RouteComponent().render(contentElement)
    }
  }

  navigate(path) {
    window.history.pushState({}, '', path)
    this.handleRoute()
  }
}

export const router = new Router()

// Global navigation function
window.navigateTo = (path) => {
  router.navigate(path)
}