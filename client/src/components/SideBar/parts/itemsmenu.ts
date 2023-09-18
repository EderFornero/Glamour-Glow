import services from '../../../assets/sidebard-icons/services.svg'
import settings from '../../../assets/sidebard-icons/settings.svg'
import users from '../../../assets/sidebard-icons/users.svg'
import report from '../../../assets/sidebard-icons/report.svg'
import balance from '../../../assets/sidebard-icons/balance.svg'

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
  },
  {
    id: '4',
    name: 'Report',
    icon: report
  },
  {
    id: '5',
    name: 'Request Payout',
    icon: balance
  }
]
