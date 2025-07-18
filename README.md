# React component library

This project is a reusable React component library built with Create React App and Storybook. 
All components are styled with Styled Components, fully responsive, and include Storybook controls for easy property editing.

---

# Getting Started

Option 1: Running with Docker (Recommended)

Prerequisites

Docker installed on your machine.
Node.js 20+
Git

# Clone the repository

```sh
git clone <REPO_URL>
cd lopez_laura_ui_garden_build_checks
```

# Install Dependencies
```sh
npm install
```

# Build the Docker image

```sh
docker build -t lopez_laura_coding_assignment13 .
```

# Run the Docker container


```sh
docker run -p 8018:8018 lopez_laura_coding_assignment13

```

**Note:** The container will show nginx logs and appear to "hang" - this is normal! It's running successfully.

# Open Storybook

Visit [http://localhost:8018] in your browser to view the component library.

# Stop the container

**Press `Ctrl+C` in the terminal**