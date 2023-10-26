FROM node:20-alpine
WORKDIR ./src
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
ENV URL=${URL}
CMD ["npm", "start"]