# Portfolio

This portfolio website showcases my skills, work history, and projects.

## Technologies Used
The website was built using a variety of modern technologies:
  - React.js (for UI components)
  - Framer Motion (for animations)
  - Next.js (for server-side rendering)
  - Tailwind CSS (for styling)
  - JavaScript (programming language)
  - AWS Elastic EC2 (for deployment), Also deployed on Github Pages: [https://sanjamkhera.github.io/AnimatedPortfolio/] Website Link
  - Docker (for containerization)

## Contents of the Package
### React Components:
  - About Me
  - Contact Information
  - Portfolio Showcase
  - Home
  - Brain (a dedicated section for SVG)
  - Navigation Bar
  - Navigation Links
  - Transition Provider

### DevOps Related Files
**Dockerfile**, creates an image of the portfolio-app.

**docker-compose.yml**, YAML file defining services, networks, and volumes for a Docker application. 
- It defines the `app` service, which is built from the Dockerfile in the current directory. 
- The service mounts the current directory to the `/app` directory in the container, and also mounts `/app/node_modules` and `/app/.next` as separate volumes. The service's port 3000 is mapped to the host's port 3000.

## CI/CD Workflow

The CI/CD workflow is defined in the `deploy-aws.yml` file. 
This workflow is triggered manually (`workflow_dispatch`). The workflow has a single job named `deploy` that runs on the latest Ubuntu runner. The job consists of three steps:

1. **Checkout code**: This step uses the `actions/checkout@v2` action to clone the repository.

2. **Generate deployment package**: This step creates a zip file named `deploy.zip` that contains the application code, excluding certain directories like `.git`, `.github`, `node_modules`, and any existing `deploy.zip` file.

3. **Deploy to AWS**: This step uses the AWS EC2 Server for Deployement. It uses AWS access key and secret access key stored in GitHub secrets.
