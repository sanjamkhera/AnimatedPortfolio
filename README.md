# Sanjam Khera

## What is it?
This is my personal website. It shows my skills, work history, and projects.

## What's in it?
  - About Me
  - Contact Me
  - My Portfolio
  - Home
  - Brain (a separate part for SVG)
  - Navigation Bar
  - Navigation Link
  - Transition Provider

## What did I use to build it?
  - React (for building the website)
  - Framer Motion (for making things move)
  - Next.js (for making the website work on a server)
  - Tailwind CSS (for making the website look nice)
  - JavaScript (the language I wrote the website in)
  - AWS Elastic Beanstalk (for running the website)
  - Docker (for packaging the website)

## How to set it up
1. Copy the project to your computer:
   ```git clone https://github.com/your-username/your-repo.git```

2. Go to the project folder:
   ```cd your-repo```

3. Get the tools the project needs:
   ```npm install ```
   or
   ```yarn install```

## Running with Docker

The following command will run this project in a Docker: 
```docker run -it -v ${PWD}:/app -p 3000:3000 node:14-alpine sh```  
This command will start a Docker container in interactive mode map the current working directory to a Docker directory at `/app`, and map the ports `3000:3000`.  

Deploying your Next.js app on Vercel is pretty straightforward; you won't need a container since Next.js is built and managed by Vercel itself. However, if you're thinking about running your app on platforms like AWS or Google Cloud Run, you'll need a container.

Many online guides focus on dockerizing Node.js apps but not so much on Next.js apps. I had trouble finding solutions that didn't throw errors, so I'll share what worked for me along with the problems I faced and how I fixed them.


**Dockerfile**
Create a Dockerfile in your project's root with these instructions:

```
Dockerfile
FROM node:18

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD npm run dev
```

Explanation:
- Use the official Node 18 image.
- Set up the working directory, copy package files, install dependencies, copy your code, expose port 3000, and start the development server.

**Building and Running**
To build your Docker image, use:

```bash
docker build -t my-app .
```

And then run it:

```bash
docker run -p 3000:3000 my-app
```

Now your app should be accessible at http://localhost:3000.

**Multi-stage Dockerfile**
For a more efficient build and production-ready setup, use a multi-stage Dockerfile:

```Dockerfile
FROM node:18-alpine as base
RUN apk add --no-cache g++ make python3
WORKDIR /app
COPY package*.json ./
EXPOSE 3000

FROM base as builder
WORKDIR /app
COPY . .
RUN npm run build

FROM base as production
WORKDIR /app
ENV NODE_ENV=production
RUN npm ci
RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001
USER nextjs
COPY --from=builder --chown=nextjs:nodejs /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/public ./public
CMD npm start

FROM base as dev
ENV NODE_ENV=development
RUN npm install
COPY . .
CMD npm run dev
```

**Docker Compose**
For easier management, use Docker Compose. Create a `docker-compose.yml` file:

```yaml
version: '3.8'
services:
  app:
    image: openai-demo-app
    build:
      context: ./
      target: dev
      dockerfile: Dockerfile
    volumes:
      - .:/app
      - /app/node_modules
      - /app/.next
    ports:
      - "3000:3000"
```

Then, build and run with:

```bash
COMPOSE_DOCKER_CLI_BUILD=1 DOCKER_BUILDKIT=1 docker-compose build
docker-compose up
```

Now your app should be running at http://localhost:3000.

**Troubleshooting**
- For macOS users, if Python isn't recognized, try using `node:18` instead of `node:18-alpine`, or add `RUN apk add --no-cache g++ make python3` before other installations in your Dockerfile.
- If Docker Compose can't find the production build directory, add `./app/.next` to volumes in `docker-compose.yml`.

That should cover the basics and help with common issues!