FROM node:22-alpine 

WORKDIR /work

COPY package*.json /work/
RUN npm ci --only=production

COPY . /work/

ENV NODE_ENV=production
ENV PORT=8080

USER node 

EXPOSE 8080
ENTRYPOINT [ "node", "server.js" ]