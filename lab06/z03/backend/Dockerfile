FROM node:latest
RUN apt update && apt install -y iputils-ping
WORKDIR /app
COPY ./package.json .
RUN npm install
COPY . .
CMD ["npm", "start"]