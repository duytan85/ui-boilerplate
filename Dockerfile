FROM node:10.15.3

MAINTAINER duytan-hoang.com - Duytan Hoang <duytanhoang85@gmail.com>

EXPOSE 3000

COPY . /var/www
WORKDIR /var/www

RUN yarn

ARG NODE_ENV=''
ENV NODE_ENV=${NODE_ENV}

# RUN npm rebuild node-sass --force
RUN yarn test
RUN NODE_ENV=${NODE_ENV} yarn run build
RUN yarn lint

CMD NODE_ENV=${NODE_ENV} yarn start
