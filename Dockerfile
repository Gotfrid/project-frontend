FROM node:22

ENV VITE_BACKEND_URL="http://backend:8000"

COPY . .

RUN npm ci && npm build

CMD [ "npm", "run", "preview" ]
