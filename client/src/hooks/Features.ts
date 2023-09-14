import { data } from '../../ecommerceFeatures'

interface Features {
  icon: string
  title: string
  description: string
}

export const useFeatures = (): Features[] => {
  return data
}
