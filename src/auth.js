// Admin authentication system
const ADMIN_PASSWORD = import.meta.env.VITE_ADMIN_PASSWORD || 'admin123'

export function checkAuthStatus() {
  // Check if we're on admin route and if authenticated
  if (window.location.pathname === '/adminduzenle') {
    const isAuthenticated = sessionStorage.getItem('adminAuthenticated') === 'true'
    if (!isAuthenticated) {
      showLoginForm()
      return false
    }
  }
  return true
}

export function authenticate(password) {
  if (password === ADMIN_PASSWORD) {
    sessionStorage.setItem('adminAuthenticated', 'true')
    return true
  }
  return false
}

export function logout() {
  sessionStorage.removeItem('adminAuthenticated')
  showLoginForm()
}

export function isAuthenticated() {
  return sessionStorage.getItem('adminAuthenticated') === 'true'
}

function showLoginForm() {
  const contentElement = document.querySelector('#content')
  if (contentElement) {
    contentElement.innerHTML = `
      <div class="login-container">
        <div class="login-form">
          <h2>Yönetici Girişi</h2>
          <form id="login-form">
            <div class="form-group">
              <label for="password">Şifre:</label>
              <input type="password" id="password" required>
            </div>
            <button type="submit" class="btn btn-primary">Giriş Yap</button>
            <div id="error-message" class="error-message" style="display: none;">
              Hatalı şifre!
            </div>
          </form>
        </div>
      </div>
    `
    
    const form = document.querySelector('#login-form')
    form.addEventListener('submit', (e) => {
      e.preventDefault()
      const password = document.querySelector('#password').value
      
      if (authenticate(password)) {
        // Re-render the admin page
        window.location.reload()
      } else {
        document.querySelector('#error-message').style.display = 'block'
        document.querySelector('#password').value = ''
      }
    })
  }
}