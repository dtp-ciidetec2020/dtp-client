FROM node:alpine
ARG FIREBASE_AUTH_TOKEN
WORKDIR '/app'
COPY package.json .
RUN npm install -g firebase-tools
RUN npm install
COPY . .
RUN npm run build
RUN firebase deploy --token $FIREBASE_AUTH_TOKEN
