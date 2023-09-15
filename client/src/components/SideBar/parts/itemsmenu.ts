import services from '../../../assets/sidebard-icons/services.svg'
import settings from '../../../assets/sidebard-icons/settings.svg'
import users from '../../../assets/sidebard-icons/users.svg'

export const menuItems = [
  {
    id: '1',
    name: 'Settings',
    icon: settings,
    items: ['Display', 'Interface']
  },
  {
    id: '2',
    name: 'Services',
    icon: services,
    items: ['List', 'Create']
  },
  {
    id: '3',
    name: 'Clients',
    icon: users
  }
]
