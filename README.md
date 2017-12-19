# Demo of React Car Catalog

## Highlights 
- Create-React-App
- Server side with repository pattern
- Mutiple actions
- Jest testing
  (snapshot issue with react 16 and enzyme 3)

## Start
- npm install
- npm start
- npm run test

## Running with docker-compose <recommended>
(Notes: there seems to be issues with create-react-app working with node 9 for now, so it is recommended to running the app with docker compose. Some pakcage will stop node 9 to run npm install)

- docker-compose up
- browse the application from http://localhost:3500

## Docker 
docker image build -t xz/car-catalog .
docker run -d -p 3500:3000 xz/car-catalog:latest


