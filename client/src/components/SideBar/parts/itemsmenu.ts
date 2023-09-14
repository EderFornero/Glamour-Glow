import calendar from '../../../assets/sidebard-icons/calendar.svg'
import message from '../../../assets/sidebard-icons/messages.svg'
import services from '../../../assets/sidebard-icons/services.svg'
import settings from '../../../assets/sidebard-icons/settings.svg'
import users from '../../../assets/sidebard-icons/users.svg'

export const menuItems = [
  {
    id: '2',
    name: 'Settings',
    icon: settings,
    items: ['Display', 'Interface']
  },
  {
    id: '3',
    name: 'Services',
    icon: services,
    items: ['List', 'Create', 'Edit']
  },
  {
    id: '4',
    name: 'Calendar',
    icon: calendar
  },
  {
    id: '5',
    name: 'Clients',
    icon: users
  },
  {
    id: '6',
    name: 'Messages',
    icon: message
  }
]
