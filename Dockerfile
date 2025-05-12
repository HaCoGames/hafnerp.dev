FROM node:22-slim AS build

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY package.json package-lock.json ./

RUN npm install -g serve
RUN npm install

COPY . .

RUN npm run build


FROM build AS delivery

ENV PYTHONPATH=${PYTHONPATH}:${PWD}
ENV PORT 4200

USER node

CMD ["serve", "-s", "-l", "4200", "./dist"]