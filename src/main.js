import './style.css'
import { router } from './router.js'
import { checkAuthStatus } from './auth.js'

// Initialize the app
document.querySelector('#app').innerHTML = `
  <div id="main-container">
    <div id="content"></div>
  </div>
`

// Initialize router
router.init()

// Check for admin authentication
checkAuthStatus()
