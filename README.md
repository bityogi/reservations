# Demo Application
##### This app has been built to demonstrate knowledge in skills required for the Sr. React Developer roles at Hilton

### Scripts
##### To Start the Project:
```
react-native run-ios
```
##### To test
```
npm test
```

### Tech Stack
This project uses the following technologies 
* React-Native
* Apollo-Client
* Jest/Enzyme
* Typescript

## GraphQL Queries
This project uses the following 3 queries from the [dev graphql server here](https://us1.prisma.sh/public-luckox-377/reservation-graphql-backend/dev).
* Queries
  * Reservations
  * Reservation
* Mutation
  * createReservation

In addition to the above, the apollo-client is set up to not use cache for `Reservations` and updates the cache on the `createReservation` mutation so as not to fetch the same `reservation` again when it navigates to the `ReservationDetail` screen.


## Honoring the limitations
* This project was generated using `react-native init reservations --template typescript`
* Does not use `Redux` -- currently it uses the `state` on the component itself. However, I would have preferred to create a HoC that managed the state outside of the components but didn't have the time to implement that.
* Also on second thoughts would have preferred to use the `Apollo-Client` as a HoC using a Provider pattern rather than as a separately called function.


## Tests
Only a few tests were created to demonstrate working knowledge. Some mocks and the basic testing dependencies to ensure that all components do render correctly.