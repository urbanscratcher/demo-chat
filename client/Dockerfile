FROM node:20-alpine
WORKDIR ./src
COPY package*.json ./
RUN npm install
ARG URL
ENV URL=${URL}
COPY . .
EXPOSE 3000
CMD ["npm", "start"]