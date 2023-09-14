import { data } from '../../about-us'

interface AboutUsData {
  id: number
  name: string
  image: string
  description: string
  linkedin: string
  github: string
}

export const useAboutUsData = (): AboutUsData[] => {
  return data
}
