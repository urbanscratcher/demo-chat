FROM node:20-alpine
WORKDIR ./src
COPY package*.json ./
RUN npm install
COPY . .

ARG REACT_APP_URL
ENV REACT_APP_URL ${REACT_APP_URL?localhost}
EXPOSE 3000
CMD npm start