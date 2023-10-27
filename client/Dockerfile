FROM node:20-alpine
WORKDIR ./src
COPY package*.json ./
RUN npm install
COPY . .

ARG URL="localhost"
ENV URL $URL
EXPOSE 3000
RUN echo ${URL}
CMD npm start -- -e="$URL"