# UI Garden Build Checks

A production-ready React component library with automated quality checks, CI/CD pipeline, and Docker deployment.


## **Quick Start with Docker **

### **Prerequisites**
- Docker installed
- Node.js 20+
- Git

### **1. Clone and Setup**
```bash
git clone <REPO_URL>
cd lopez_laura_ui_garden_build_checks
npm install
```

### **2. Build Docker Image**
```bash
docker build -t lopez_laura_coding_assignment13 .
```

### **3. Run Container**
```bash
docker run -p 8018:8018 lopez_laura_coding_assignment13
```

### **4. View Component Library**
**Visit: (http://localhost:8018)**

**Note:** Container will show nginx logs and appear to "hang" - this is normal! Press `Ctrl+C` to stop.

---

## **Development Setup**

### **Install Dependencies**
```bash
npm install
```

### **Available Scripts**
```bash
# Development
npm start                    # Start development server
npm run storybook           # Run Storybook in development

# Testing
npm test                    # Run tests in watch mode
npm run test:ci             # Run tests with coverage (CI)

# Quality Checks
npm run lint                # Run ESLint
npm run lint:fix            # Fix ESLint issues
npm run format              # Format code with Prettier
npm run format:check        # Check Prettier formatting

# Building
npm run build               # Build for production
npm run build-storybook     # Build Storybook for production
```

---

## **Quality Assurance**

### **Pre-commit Hooks (Husky)**
Automatically runs before every commit:
- **ESLint** - Code linting
- **Prettier** - Code formatting  
- **Jest Tests** - Unit tests
- **Type checking** - TypeScript validation

**If any check fails, the commit is blocked.**

### **GitHub Actions CI/CD Pipeline**
Runs on every push to `main` branch:
- Code quality checks
- Test execution with coverage
- Storybook build verification
- Docker image build test
- Automated failure notifications

### **Manual Quality Checks**
```bash
# Run all quality checks locally
npm run lint && npm run format:check && npm run test:ci

# Fix issues automatically
npm run lint:fix && npm run format
```

---

## **Docker Details**

### **Container Specifications**
- **Name**: `lopez_laura_coding_assignment13`
- **Working Directory**: `/lopez_laura_ui_garden_build_checks`
- **Port**: `8018`
- **Base Image**: `nginx:alpine`
- **Content**: Production Storybook build

### **Docker Commands**
```bash
# Build image
docker build -t lopez_laura_coding_assignment13 .

# Run container
docker run -p 8018:8018 lopez_laura_coding_assignment13

# Run in background
docker run -d -p 8018:8018 --name ui-garden lopez_laura_coding_assignment13

# Stop container
docker stop ui-garden

# Remove container
docker rm ui-garden
```

---

## **Testing**

### **Test Coverage**
- Unit tests for all components
- Coverage reports in `coverage/` directory
- Minimum coverage requirements enforced

### **Running Tests**
```bash
npm test                    # Interactive test runner
npm run test:ci             # CI mode with coverage
npm test -- --coverage     # Generate coverage report
```

---


## **CI/CD Pipeline**

### **Workflow Triggers**
- Push to `main` branch
- Pull requests to `main`
- Manual workflow dispatch

### **Pipeline Steps**
1. **Code Checkout**
2. **Node.js Setup** (v20)
3. **Dependencies Installation**
4. **ESLint Check**
5. **Prettier Check**
6. **Test Execution**
7. **Storybook Build**
8. **Docker Build**
9. **Coverage Reports**
10. **Failure Notifications**


### **GitHub Actions (Remote)**
- Runs on every push
- Same checks as pre-commit
- Blocks merges if checks fail
- Sends notifications on failure


## **Contributing**

1. Clone the repository
2. Install dependencies: `npm install`
3. Make your changes
4. Run quality checks: `npm run lint && npm run test:ci`
5. Commit changes (pre-commit hooks will run automatically)
6. Push to GitHub (CI/CD pipeline will run)

---

## **Troubleshooting**

### **Common Issues**

**Pre-commit hooks fail:**
```bash
npm run lint:fix
npm run format
npm test
```

**Docker build fails:**
```bash
docker system prune -a
docker build --no-cache -t lopez_laura_coding_assignment13 .
```

**Port 8018 already in use:**
```bash
docker run -p 8019:8018 lopez_laura_coding_assignment13
```

**Tests fail:**
```bash
npm install
npm run test:ci
```