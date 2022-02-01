FROM node:16

# Create app directory, this is in our container/image
WORKDIR /savuv/src/mf1


# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install --force
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY . .

CMD [ "yarn", "webpack", "serve"]

EXPOSE 8083

