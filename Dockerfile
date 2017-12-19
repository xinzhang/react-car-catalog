FROM node:6.11.2-alpine
RUN npm install -g create-react-app
WORKDIR /var/app

# copy package.json seperatelty to install node modules. This is so it can be cached independently
COPY package.json .

RUN npm install --loglevel warn

# copy the server folder if not exist or changed
COPY server server
RUN npm -v

# copy client/web and common seperately. This is so it can be cached independently and webpack dist only built if client/web or common changes
COPY public public
COPY src src
RUN npm run start

# docker compose files run commands to start node in different environments
