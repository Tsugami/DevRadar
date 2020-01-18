FROM node:12.2.0-alpine

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH
ENV NODE_ENV development
ENV API_URL http://localhost:3333

# install and cache app dependencies
COPY package.json .
COPY yarn.lock .
RUN yarn install --silent
RUN yarn add react-scripts@3.3.0 -g --silent

# start app
CMD ["yarn", "start"]