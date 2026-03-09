# Stage 1: install dependencies
FROM node:25-alpine AS deps
WORKDIR /app
COPY package*.json .
ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

RUN npm config set fetch-retry-maxtimeout 600000 -g && npm ci


# Stage 2: build
FROM node:25-alpine AS builder
WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY src ./src
COPY public ./public
COPY . .

ENV DIRECTUS_URL=https://clic.epfl.ch/directus
ENV NEXT_PUBLIC_DIRECTUS_URL=https://clic.epfl.ch/directus

RUN apk update
RUN npm run build

# Stage 3: run
FROM node:25-alpine
WORKDIR /app

# switch to unprivileged user from node base image
RUN chown -R node .
USER node

COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./

CMD [ "npm", "start" ]
