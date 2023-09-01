import data from '../../about-us.json';

interface AboutUsData {
  id: number;
  name: string;
  image: string;
  description: string;
  linkedin: string;
  github: string;
}

export const useAboutUsData = (): AboutUsData[] => {
  return data;
};
