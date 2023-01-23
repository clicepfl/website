# [Choice] Node.js version (use -bullseye variants on local arm64/Apple Silicon): 18, 16, 14, 18-bullseye, 16-bullseye, 14-bullseye, 18-buster, 16-buster, 14-buster
ARG VARIANT=18-bullseye
FROM mcr.microsoft.com/vscode/devcontainers/typescript-node:0-${VARIANT}

# the root folder will be mounted at /app in the container
WORKDIR /app

# use "node" user from strapi/base (inherited from node image) with UID/GID 1000 (avoid permission issues with root)
USER node

# expose strapi port
EXPOSE 1337

# install dependencies and run in watch mode
CMD npm install && npm run env:check && npm run develop