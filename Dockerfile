FROM node:10-alpine
 
WORKDIR /app
 
COPY . /app
 
RUN npm install
 
EXPOSE 2000
 
CMD [ "node", "app.js" ]
