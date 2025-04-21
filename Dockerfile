FROM node:22

COPY . .

RUN npm ci && npm run build

RUN npm i -g serve

CMD [ "serve", "-s", "dist" ]
