FROM node:18-bullseye-slim

WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY helloapp/ .
EXPOSE 3000
CMD ["node", "index.mjs"]

