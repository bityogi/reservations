import { ReservationType } from '../../../util/types';

const testReservationsData = [
  {
    "name": "James Bond",
    "arrivalDate": "12 Aug 2019",
    "hotelName": "Hilton Asheville",
    "id": "cjz948ddfv4xr0b55o1ubc6nt",
    "departureDate": "13 Aug 2019"
  },
  {
    "name": "Prem Govinda",
    "arrivalDate": "10/1/2019",
    "hotelName": "The Hilton in Asheville",
    "id": "cjz92zrpbuoix0b55a90yapaf",
    "departureDate": "10/10/2019"
  },
  {
    "name": "Douglas",
    "arrivalDate": "08/21/2019",
    "hotelName": "Embassy Suites by Hilton Chicago Downtown Magnificent Mile",
    "id": "bxidglh27ko",
    "departureDate": "08/24/2019"
  },
  {
    "name": "adam-test",
    "arrivalDate": "05/10/2019",
    "hotelName": "Tapestry Collection",
    "id": "cjz5negtep2bg0b555q3azde1",
    "departureDate": "08/10/2019"
  },
  {
    "name": "adam-test",
    "arrivalDate": "05/10/1994",
    "hotelName": "Hilton",
    "id": "cjz5koksgr8ai0b88j74h92dj",
    "departureDate": "08/10/2019"
  },
  {
    "name": "adam-test",
    "arrivalDate": "07/10/2019",
    "hotelName": "Waldorf",
    "id": "cjz5hdviiohb60b55ca68n50x",
    "departureDate": "08/10/2019"
  },
  {
    "name": "adam-test",
    "arrivalDate": "08/09/2019",
    "hotelName": "Hilton",
    "id": "cjz4njk4domzs0b88f8xg56ld",
    "departureDate": "08/09/2019"
  },
  {
    "name": "adam-test",
    "arrivalDate": "07/09/2019",
    "hotelName": "Waldorf",
    "id": "cjz4nev4cl94c0b55fnejmznz",
    "departureDate": "08/09/2019"
  },
  {
    "name": "adam-test",
    "arrivalDate": "07/09/2019",
    "hotelName": "Waldorf",
    "id": "cjz4nev4bomon0b889hj11x0g",
    "departureDate": "08/09/2019"
  },
  {
    "name": "adam-test",
    "arrivalDate": "07/09/2019",
    "hotelName": "Hilton",
    "id": "cjz4abzxsjvs10b55wur7npt5",
    "departureDate": "08/09/2019"
  },
  {
    "name": "adam-test",
    "arrivalDate": "06/09/2019",
    "hotelName": "Hilton",
    "id": "cjz4a7hmvnoxl0b88dt4xio6q",
    "departureDate": "08/09/2019"
  },
  {
    "name": "adam-test",
    "arrivalDate": "04/09/2019",
    "hotelName": "Waldorf",
    "id": "cjz49t3psjti50b55jiaik8tv",
    "departureDate": "08/09/2019"
  },
  {
    "name": "adam-test",
    "arrivalDate": "08/09/2019",
    "hotelName": "Hilton",
    "id": "cjz49rzqcjtfh0b555h72kxl1",
    "departureDate": "08/09/2019"
  },
  {
    "name": "adam-test",
    "arrivalDate": "06/09/2019",
    "hotelName": "Hilton",
    "id": "cjz49p691nn5w0b88scgc4wmz",
    "departureDate": "08/09/2019"
  },
  {
    "name": "adam-test",
    "arrivalDate": "04/09/2019",
    "hotelName": "Hilton",
    "id": "cjz49ocbajstt0b555muidcxu",
    "departureDate": "08/09/2019"
  },
  {
    "name": "adam-test",
    "arrivalDate": "12/09/2019",
    "hotelName": "Hilton",
    "id": "cjz49htzgjs2x0b556hszh3z3",
    "departureDate": "08/09/2019"
  },
  {
    "name": "JahsDa",
    "arrivalDate": "1/10/2019",
    "hotelName": "Ss",
    "id": "cjz29ryoeavui0b55fqwuamzh",
    "departureDate": "4/10/2019"
  },
  {
    "name": "",
    "arrivalDate": "",
    "hotelName": "",
    "id": "cjypwynkhuw4u0b99ftcr2yus",
    "departureDate": ""
  },
  {
    "name": "",
    "arrivalDate": "",
    "hotelName": "",
    "id": "cjypa2adyrovs0b996t1b5pha",
    "departureDate": ""
  },
  {
    "name": "",
    "arrivalDate": "",
    "hotelName": "",
    "id": "cjyp7tozercnh0b99oxco4vpi",
    "departureDate": ""
  }
]

export const getReservations = async () => {
  
  return new Promise((resolve) => {
    return testReservationsData.map((r) => ({
      ...r,
      arrivalDate: new Date(r.arrivalDate),
      departureDate: new Date(r.departureDate)
    }));
  });
  
} 