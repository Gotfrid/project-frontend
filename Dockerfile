FROM node:22

COPY . .

RUN npm ci && npm run build

CMD [ "npm", "run", "preview" ]
