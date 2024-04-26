FROM node:20-alpine3.18 as builder
WORKDIR /app
COPY package*.json ./
RUN npm install --production
# Install Tailwind CSS
RUN npm install tailwindcss
COPY . .
RUN npm run build
EXPOSE 3000
CMD [ "npm","run", "start" ]