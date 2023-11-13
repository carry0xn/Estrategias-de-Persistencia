# Fetching the minified node image on apline linux
FROM node:hydrogen-alpine

# Declaring env
ENV NODE_ENV development

# Setting up the work directory
WORKDIR /express-docker

# Copying all the files in our project
COPY . .

# Installing dependencies
RUN npm ci

# Exposing server port
EXPOSE 3000

# Starting our application
CMD [ "node", "app.js" ]
