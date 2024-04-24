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