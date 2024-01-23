FROM node:iron as builder
#create app directory
WORKDIR /usr/src/app
#copy packages
COPY package*.json ./
#install any needed dependencies
RUN npm install
#copy app source
COPY . .
#build using small image
FROM node:iron-alpine

WORKDIR /user/src/app

COPY --from=builder /usr/src/app .

EXPOSE 8090

CMD ["npm", "start"]