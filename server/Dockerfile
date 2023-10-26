FROM node:20-alpine
WORKDIR .
COPY package*.json ./
RUN pnpm install
COPY . .
EXPOSE 5001
CMD ["node", "index.js"]