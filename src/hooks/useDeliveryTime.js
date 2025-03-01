import { useCallback } from 'react';

export const useDeliveryTime = () => {
  const calculateTimes = useCallback((distance) => {
    const total = distance * 10;
    return {
      preparation: 20,
      transit: total - 27, // 20 (prep) + 7 (window) = 27
      deliveryWindow: 7,
      total
    };
  }, []);

  return { calculateTimes };
};