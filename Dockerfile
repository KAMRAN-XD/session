FROM node:lts-buster
RUN apt-get update
RUN apt-get install -y ffmpeg imagemagick libwebp-dev
RUN rm -rf /var/lib/apt/lists/*
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
RUN npm install -g qrcode-terminal pm2
COPY . .
EXPOSE 5000
CMD ["npm", "start"]
