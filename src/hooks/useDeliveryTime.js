export const useDeliveryTime = () => {
    const calculateTimes = (cartItems) => {
      let maxTotalTime = 0;
      const itemsWithTimes = cartItems.map(item => {
        const transitTime = (item.distance || 0) * 10;
        const totalTime = item.preparationTime + transitTime + item.deliveryWindow;
        
        if (totalTime > maxTotalTime) {
          maxTotalTime = totalTime;
        }
        
        return {
          ...item,
          transitTime,
          totalTime
        };
      });
  
      return {
        itemsWithTimes,
        maxTotalTime,
        preparationTime: Math.max(...cartItems.map(item => item.preparationTime)),
        deliveryWindow: cartItems[0]?.deliveryWindow || 7
      };
    };
  
    return { calculateTimes };
  };