# Laura Lopez UI Component Library

This project is a reusable React component library built with Create React App and Storybook. 
All components are styled with Styled Components, fully responsive, and include Storybook controls for easy property editing.

---

## 🚀 Features

- **Component Library**: Button, Label, Text, Table (with Header, Row, Cell, Footer), Dropdown, Radio Button, Img, Hero Image, Card.
- **Styled Components**: All components use styled-components for styling.
- **Responsiveness**: Components are responsive and adapt to different screen sizes.
- **Storybook**: Visual documentation with controls for text, color, and disabled state.
- **Testing**: Each component has at least two tests (visibility and disabled state color).
- **Dockerized**: Easily run the Storybook site in a container on port 8083.

---

## 🧑‍💻 Getting Started

### Prerequisites

- [Docker](https://www.docker.com/) installed on your machine.

### Clone the repository

```sh
git clone <REPO_URL>
cd lopez_laura_ui_garden
```

### Build the Docker image

```sh
docker build -t lopez_laura_coding_assignment12 .
```

### Run the Docker container

```sh
docker run --rm -p 8083:8083 --name lopez_laura_coding_assignment12 lopez_laura_coding_assignment12
```

### Open Storybook

Visit [http://localhost:8083](http://localhost:8083) in your browser to view the component library.

---


## 🧪 Testing

To run tests locally (optional, outside Docker):

```sh
npm install
npm test
```

---

## 📝 Notes

- All components have a default and a disabled state.  
- Disabled state is visually indicated (greyed out, not-allowed cursor).
- Storybook controls allow you to change text, background color, and other props live.
- The Docker container serves the production Storybook build on port 8083 as required.

---

## 📦 Container Details

- **Image name:** `lopez_laura_coding_assignment12`
- **Container name:** `lopez_laura_coding_assignment12`
- **Working directory:** `/lopez_laura_ui_garden`
- **Port:** `8083`

---

## 👩‍💻 Author

Laura Lopez

---
