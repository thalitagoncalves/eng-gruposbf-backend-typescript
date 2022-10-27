FROM node:lts

WORKDIR /coin-convert/src

COPY package*.json /coin-convert/src/

RUN npm install --force

COPY . .

EXPOSE 3003

CMD npm run dev