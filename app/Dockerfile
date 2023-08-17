FROM node:18-alpine

RUN apk update
ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /app
COPY package.json package-lock.json ./
RUN npm config set fetch-retry-maxtimeout 600000 -g && npm ci

COPY . .
RUN npm run build

# switch to unprivileged user from node base image
RUN chown -R node .
USER node

CMD [ "npm", "start" ]
