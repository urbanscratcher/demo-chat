FROM node:20-alpine
WORKDIR ./src
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
ARG URL
CMD ["npm", "start"]