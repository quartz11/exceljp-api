FROM node:16-alpine3.16 AS builder

# create destination directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app


# copy the app, note .dockerignore
COPY package.json /usr/src/app/package.json

RUN npm install
COPY ./ ./


# Stage 2

FROM node:16-alpine3.16
WORKDIR /usr/src/app
COPY package.json /usr/src/app/package.json
COPY --from=builder /usr/src/app .


EXPOSE 3100


CMD [ "node", "server.js" ]