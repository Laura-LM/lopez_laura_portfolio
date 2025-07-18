# UI Garden Build Checks

A production-ready React component library with automated quality checks, CI/CD pipeline, and Docker deployment.

## **Quick Start**

### **Prerequisites**
- Docker installed
- Node.js 20+
- Git

### **Option 1: Standard Setup**
```bash
git clone <REPO_URL>
cd lopez_laura_ui_garden_build_checks
npm install
npm run format
docker build -t lopez_laura_coding_assignment13 .
docker run -p 8018:8018 lopez_laura_coding_assignment13
```

### **Option 2: Skip Format (if format fails)**
```bash
git clone <REPO_URL>
cd lopez_laura_ui_garden_build_checks
npm install
docker build -t lopez_laura_coding_assignment13 .
docker run -p 8018:8018 lopez_laura_coding_assignment13
```

**Visit: [http://localhost:8018](http://localhost:8018)**

---
## **Quality Checks**

- **Pre-commit hooks**: ESLint, Prettier, Tests
- **GitHub Actions**: Automated CI/CD pipeline
- **Docker build**: Auto-formats and validates code

## **Container Details**

- **Name**: `lopez_laura_coding_assignment13`
- **Port**: `8018`
- **Content**: Production Storybook build

## **Troubleshooting**


**Docker build fails:**
```bash
docker system prune -a
docker build --no-cache -t lopez_laura_coding_assignment13 .
```

**Port busy:**
```bash
docker run -p 8019:8018 lopez_laura_coding_assignment13
```
---