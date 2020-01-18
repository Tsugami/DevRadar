FROM node:12.2.0-alpine

# set working directory
WORKDIR /app

# install and cache app dependencies
COPY package.json .
COPY yarn.lock .
RUN yarn install

EXPOSE 3333

# start app
CMD ["yarn", "start"]