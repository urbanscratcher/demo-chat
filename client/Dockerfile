FROM node:20-alpine
WORKDIR ./src
COPY package*.json ./
RUN pnpm install
COPY . .
EXPOSE 3000
ARG URL
CMD ["pnpm", "start"]