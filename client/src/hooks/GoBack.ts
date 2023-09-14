import { useNavigate } from 'react-router-dom';

export const useGoBack = (): (() => void) => {
  const navigate = useNavigate();

  const goBack = (): void => {
    navigate(-1);
  };

  return goBack;
};
