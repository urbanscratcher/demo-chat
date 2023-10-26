FROM node:20-alpine
WORKDIR .
EXPOSE 5001

COPY package*.json ./
RUN npm install

COPY . .
CMD ["node", "index.js"]