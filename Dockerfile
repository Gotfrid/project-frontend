FROM node:22

ENV CYPRESS_BASE_URL="http://0.0.0.0:4173"

COPY . .

RUN npm ci && npm run build

CMD [ "npm", "run", "preview" ]
