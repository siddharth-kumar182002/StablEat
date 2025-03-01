export const useDeliveryTime = () => {
    const calculateTimes = (distance, cartItems) => {
      const preparationTime = Math.max(...cartItems.map(item => item.preparationTime));
      const transitTime = distance * 10;
      const deliveryWindow = cartItems[0]?.deliveryWindow || 7;
      
      return {
        preparation: preparationTime,
        transit: transitTime,
        deliveryWindow,
        total: preparationTime + transitTime + deliveryWindow
      };
    };
  
    return { calculateTimes };
  };