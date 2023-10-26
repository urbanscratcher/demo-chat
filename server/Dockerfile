FROM node:20-alpine
WORKDIR .
COPY package*.json ./
RUN npm ci
COPY . .
EXPOSE 5001
CMD ["node", "index.js"]