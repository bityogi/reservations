

export const getReservation = async (id: string) => {

  return new Promise((resolve) => {
    const reservation = {
      id: "1234",
      name: "Test User",
      hoteName: "Test Hotel",
      arrivalDate: new Date('10/10/2020'),
      departureDate: new Date('11/10/2020')
    }

    resolve(reservation);
  });
  
  
} 