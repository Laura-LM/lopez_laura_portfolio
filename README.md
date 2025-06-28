This project is a reusable React component library built with Create React App and Storybook. 
All components are styled with Styled Components, fully responsive, and include Storybook controls for easy property editing.

---

# Getting Started

# Option 1: Running with Docker (Recommended)

# Prerequisites

- Docker installed on your machine.

# Clone the repository

```sh
git clone <REPO_URL>
cd lopez_laura_ui_garden
```

# Build the Docker image

```sh
docker build -t laura_lopez_coding_assignment12 .
```

# Run the Docker container


```sh
docker run --rm -p 8083:8083 --name laura_lopez_coding_assignment12 laura_lopez_coding_assignment12
```

**Note:** The container will show nginx logs and appear to "hang" - this is normal! It's running successfully.

# Open Storybook

Visit [http://localhost:8083] in your browser to view the component library.

# Stop the container

**Press `Ctrl+C` in the terminal**



# Option 2: Running Locally (Development)

# Prerequisites

-Node.js (version 18 or higher)

## Clone and setup

```sh
git clone <REPO_URL>
cd lopez_laura_ui_garden
npm install
```

# Run Storybook in development mode

```sh
npm run storybook
```

# Open Storybook

Visit [http://localhost:6006] in your browser to view the component library.

---


# Testing

To run tests locally (optional, outside Docker):

```sh
npm install
npm test
```

---

# Notes

- All components have a default and a disabled state.  
- Disabled state is visually indicated (greyed out, not-allowed cursor).
- Storybook controls allow you to change text, background color, and other props live.
- The Docker container serves the production Storybook build on port 8083 as required.

---

## Container Details

- **Image name:** `laura_lopez_coding_assignment12`
- **Container name:** `laura_lopez_coding_assignment12`
- **Working directory:** `/laura_lopez_ui_garden`
- **Port:** `8083`