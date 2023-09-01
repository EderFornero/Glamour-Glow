import data from '../../ecommerceFeatures.json';

interface Features {
  icon: string;
  title: string;
  description: string;
}

export const useFeatures = (): Features[] => {
  return data;
};
