FROM node:22

ARG API_URL
ENV VITE_BACKEND_URL=${API_URL}

COPY . .

RUN npm ci && npm run build

RUN npm i -g serve

CMD [ "serve", "-s", "dist" ]
