# UI Garden – React Component Library

This is a React + TypeScript component library called **UI Garden**. It uses **Storybook** for showcasing components and **Docker** for containerized deployment.

You can clone the repo, build the Docker image, and view all components through Storybook at [http://localhost:8083](http://localhost:8083).

---

## 🧱 Technologies Used

- React + TypeScript
- Styled-components
- Storybook
- Docker

---

## 📥 Clone the Repository

First, clone the GitHub repository to your local machine:

```bash
git clone https://github.com/EdanBandoot/vandal_ethan_ui_garden.git
cd vandal_ethan_ui_garden
```
 Build the Docker Image
 ````
docker build -t vandal_ethan_coding_assignment12 . --no-cache
````
then run the app
````
docker run -d -p 8083:8083 --name vandal_ethan_coding_assignment12 vandal_ethan_coding_assignment12

http://localhost:8083
http://localhost:6006

