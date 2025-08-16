# 🌟 Laura Lopez - Portfolio Website

> **Assignment 14: Portfolio**  

## Project Overview

This portfolio is a React-based website that demonstrates the reuse of custom UI components developed throughout the course. The application is fully containerized, and featuring a modern design with a cream-colored theme and responsive layout.


## Technology Stack

- **Frontend**: React 18 + TypeScript
- **Styling**: CSS3 + Styled Components
- **Build Tool**: Vite
- **Testing**: Jest + React Testing Library
- **Code Quality**: ESLint + Prettier
- **Containerization**: Docker + Nginx
- **Components**: Custom UI Component Library

## Requirements

- **Docker**: Latest version
- **Node.js**: Version 20+
- **Git**: For version control
- **Web Browser**: Modern browser supporting ES6+

## Quick Start

### Clone the Repository
```bash
git clone https://github.com/Laura-LM/lopez_laura_portfolio.git
cd lopez_laura_portfolio
```

### Install Dependencies
```bash
npm install
```

### Format Code
```bash
npm run format
```

### Build Docker Container
```bash
docker build -t lopez_laura_coding_assignment14 .
```
### Container Name Conflict
```bash
# Remove existing container first
docker rm lopez_laura_coding_assignment14
```

### Run the Portfolio
```bash
docker run -p 5575:5575 --name lopez_laura_coding_assignment14 lopez_laura_coding_assignment14
```

**Portfolio is now live at:** [http://localhost:5575](http://localhost:5575)

## Development Commands
### Local Development
```bash
# Start development server
npm run dev

# Run tests
npm test

# Run tests with coverage
npm run test:coverage

# Lint code
npm run lint

# Format code
npm run format
```