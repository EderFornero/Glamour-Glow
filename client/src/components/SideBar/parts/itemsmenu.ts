import calendar from '../../../assets/sidebard-icons/calendar.svg'
import dashboard from '../../../assets/sidebard-icons/dashboard.svg'
import message from '../../../assets/sidebard-icons/messages.svg'
import services from '../../../assets/sidebard-icons/services.svg'
import settings from '../../../assets/sidebard-icons/settings.svg'
import users from '../../../assets/sidebard-icons/users.svg'

export const menuItems = [
  {
    name: 'Home',
    icon: dashboard
  },
  {
    name: 'Settings',
    icon: settings,
    items: ['Display', 'Interface']
  },
  {
    name: 'Services',
    icon: services,
    items: ['List', 'Create', 'Edit']
  },
  {
    name: 'Calendar',
    icon: calendar
  },
  {
    name: 'Clients',
    icon: users
  },
  {
    name: 'Messages',
    icon: message
  }
]