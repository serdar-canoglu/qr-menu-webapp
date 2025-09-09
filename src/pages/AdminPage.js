import { isAuthenticated, logout } from '../auth.js'
import { Calendar } from '../components/Calendar.js'

export class AdminPage {
  render(container) {
    // Check authentication before rendering
    if (!isAuthenticated()) {
      return
    }
    
    container.innerHTML = `
      <div class="admin-container">
        <header class="admin-header">
          <h1>Takvim</h1>
          <button id="logout-btn" class="btn btn-secondary">Çıkış</button>
        </header>
        <div class="admin-content">
          <div id="calendar"></div>
        </div>
      </div>
    `
    
    // Render calendar
    new Calendar().render(container.querySelector('#calendar'))
    
    // Setup logout button
    container.querySelector('#logout-btn').addEventListener('click', () => {
      logout()
    })
  }
}