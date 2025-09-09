export class Calendar {
  constructor() {
    this.currentDate = new Date()
    this.today = new Date()
    this.monthNames = [
      'Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran',
      'Temmuz', 'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık'
    ]
    this.dayNames = ['Pzt', 'Sal', 'Çar', 'Per', 'Cum', 'Cmt', 'Paz']
  }

  render(container) {
    container.innerHTML = `
      <div class="calendar-container">
        <div class="calendar-header">
          <button class="calendar-btn" id="prev-month">‹</button>
          <h3 class="calendar-title" id="calendar-title">
            ${this.monthNames[this.currentDate.getMonth()]} ${this.currentDate.getFullYear()}
          </h3>
          <button class="calendar-btn" id="next-month">›</button>
        </div>
        <div class="calendar-grid">
          <div class="calendar-weekdays">
            ${this.dayNames.map(day => `<div class="weekday">${day}</div>`).join('')}
          </div>
          <div class="calendar-days" id="calendar-days">
            ${this.generateCalendarDays()}
          </div>
        </div>
      </div>
    `

    this.setupEventListeners(container)
  }

  setupEventListeners(container) {
    const prevBtn = container.querySelector('#prev-month')
    const nextBtn = container.querySelector('#next-month')

    prevBtn.addEventListener('click', () => {
      this.currentDate.setMonth(this.currentDate.getMonth() - 1)
      this.updateCalendar(container)
    })

    nextBtn.addEventListener('click', () => {
      this.currentDate.setMonth(this.currentDate.getMonth() + 1)
      this.updateCalendar(container)
    })
  }

  generateCalendarDays() {
    const year = this.currentDate.getFullYear()
    const month = this.currentDate.getMonth()
    
    const firstDay = new Date(year, month, 1)
    const lastDay = new Date(year, month + 1, 0)
    const daysInMonth = lastDay.getDate()
    
    // Get the first day of the week (Monday = 1, Sunday = 0)
    const startDay = firstDay.getDay() === 0 ? 6 : firstDay.getDay() - 1
    
    let daysHTML = ''
    
    // Add empty cells for previous month
    for (let i = 0; i < startDay; i++) {
      daysHTML += '<div class="calendar-day empty"></div>'
    }
    
    // Add days of current month
    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(year, month, day)
      const isToday = this.isSameDay(date, this.today)
      const isWeekend = date.getDay() === 0 || date.getDay() === 6
      
      daysHTML += `
        <div class="calendar-day ${isToday ? 'today' : ''} ${isWeekend ? 'weekend' : ''}">
          ${day}
        </div>
      `
    }
    
    return daysHTML
  }

  updateCalendar(container) {
    const title = container.querySelector('#calendar-title')
    const daysContainer = container.querySelector('#calendar-days')
    
    title.textContent = `${this.monthNames[this.currentDate.getMonth()]} ${this.currentDate.getFullYear()}`
    daysContainer.innerHTML = this.generateCalendarDays()
  }

  isSameDay(date1, date2) {
    return date1.getDate() === date2.getDate() &&
           date1.getMonth() === date2.getMonth() &&
           date1.getFullYear() === date2.getFullYear()
  }
}