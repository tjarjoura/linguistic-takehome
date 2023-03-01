FROM node:19.7

WORKDIR /usr/src/app

COPY . .
RUN npm install
RUN npm run build

CMD [ "node", "dist/src/main.js" ]
