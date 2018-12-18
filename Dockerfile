FROM node:8
WORKDIR /usr/src/app
ENV NODE_ENV=docker
COPY server/ .
COPY package.json ./
RUN npm install
CMD node app.js
# RUN rm -rf ~/.node-gyp
# RUN npm install

