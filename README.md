# Portfolio - Assignment 14: Component Library

This project is a dockerized portfolio website that uses the component library developed during the course. The site showcases your coursework and is delivered as an optimized, tested, and production-ready application.

## Requirements
- Docker installed
- Node.js 20+
- Git

## Usage Instructions

1. Clone the repository:
    ```bash
    git clone <REPO_URL>
    cd lopez_laura_portfolio
    ```

2. Install dependencies and format the code:
    ```bash
    npm install
    npm run format
    ```

3. Build the Docker container:
    ```bash
    docker build -t lopez_laura_coding_assignment14 .
    ```

4. Run the container on port 5575:
    ```bash
    docker run -p 5575:5575 lopez_laura_coding_assignment14
    ```

    The site will be available at [http://localhost:5575](http://localhost:5575)

## Container Details
- **Name**: `lopez_laura_coding_assignment14` (required format: lastname_firstname_coding_assignment14)
- **Working directory**: `/lopez_laura_final_site` inside the container
- **Port**: `5575`
- **Content**: Production build of the portfolio (Storybook)

## Troubleshooting

**If the port is busy:**
```bash
docker run -p 5576:5575 lopez_laura_coding_assignment14
```

---