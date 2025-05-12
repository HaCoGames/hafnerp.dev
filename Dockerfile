FROM node:22-slim

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

ENV PYTHONPATH=${PYTHONPATH}:${PWD}
ENV PORT 4200


COPY package.json package-lock.json ./

RUN npm install -g serve
RUN npm install

COPY . .

RUN npm run build 

CMD ["serve", "-s", "-l", "4200", "./dist"]