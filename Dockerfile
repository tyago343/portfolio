FROM node:alpine

WORKDIR /app

COPY . .

RUN yarn install

RUN yarn build

ADD https://github.com/ufoscout/docker-compose-wait/releases/download/2.9.0/wait /wait
RUN chmod +x /wait

EXPOSE 3001

CMD /wait && yarn start