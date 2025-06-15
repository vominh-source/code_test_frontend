# G-SCORES
A web application for THPT 2024 exam score lookup and analysis – search by registration number, categorize performance levels, view subject-wise statistics and top 10 Group A students.



![Homepage](https://github.com/vominh-source/code_test_frontend/blob/main/public/readme_images/home_page.png)

<!-- Replace with actual image URL if available -->

<div align="center">
  <p align="center">
    An web app for looking exam score
    <a href="https://youtu.be/TftywGnUuWE">View Demo</a>
  </p>
</div>

## 📝 HOW TO RUN
### 🧑‍💻 Guideline
- My project include 2 folder: backend and front end.
- Run backend then run front end.
- After run front end, go to [https](http://localhost:3000) to view the project
### 🖥️ Frontend

- **Link**: [https://github.com/vominh-source/code_test_frontend](https://github.com/vominh-source/code_test_frontend)

```bash
npm install 
npm run dev
```

### 🛠️ Backend

- **Link**: [https://github.com/vominh-source/code_test_backend](https://github.com/vominh-source/code_test_backend)

```bash
npm install              # Install project dependencies
npm run db:dev:up        # Start PostgreSQL container via Docker
npm run prisma:dev:deploy  # Apply Prisma migrations to the database
npm run start:dev        # Start NestJS server in development mode
```




---




## 🎬 Features Overview

### 📝 **Feature 1: Search Score**

- **Description**: User will enter candidate number and receive the result of subjects.
![Search Score](https://github.com/vominh-source/code_test_frontend/blob/main/public/readme_images/search_scores.png)

### 🎤 **Feature 2: Subject Overview**

- **Description**: User chooses the subject to view and analyze the score distribution. The application will display a statistical chart showing the number of students falling into four performance levels:

- Excellent (≥ 8 points)

- Good (6 ≤ score < 8)

- Average (4 ≤ score < 6)

- Poor (< 4 points)

![Subject Overview](https://github.com/vominh-source/code_test_frontend/blob/main/public/readme_images/subject_overview.png)

### 🖼️ **Feature 3: All Subject Overview**
- **Description**: This feature kinda similar to feature 2 (Subject Overview), but the difference is that it will show the chart for all subjects.
![All Subject Overview](https://github.com/vominh-source/code_test_frontend/blob/main/public/readme_images/all_subjects_overview.png)

### ✂️ **Feature 4: Top 10 Group A Students**
- **Description**: This feature displays a ranked list of the top 10 students with the highest total scores in Group A, which includes three subjects: Math, Physics, and Chemistry.
![Top 10 Group A Students](https://github.com/vominh-source/code_test_frontend/blob/main/public/readme_images/top_10_A.png)

## 🧑‍💻 Tech Stack

### 🖥️ Frontend

- **Framework**: Next.js (latest)
- **UI Library**: React.js (Hooks)
- **Styling**: Tailwind CSS (with **TailAdmin** template)
- **Charts**: Recharts (score visualizations)

### ⚙️ Backend

- **Framework**: NestJS (TypeScript)
- **ORM**: Prisma
- **Database**: PostgreSQL
- **Dev Tools**: Prisma Studio, Docker

---

## 🏗️ Architecture

The application follows a modern full-stack architecture:

- 🎨 **Frontend (Next.js + TailAdmin)**  
  Provides an interactive UI for score lookup, chart-based analysis, and ranking

- ⚙️ **Backend (NestJS)**  
  Handles API logic, data processing, and classification by score level

- 📊 **Data Visualization**  
  Subject-wise score distribution displayed using Recharts

- 🐳 **Containerized Environment**  
  PostgreSQL and backend managed via Docker for consistency and portability

---

Feel free to explore, contribute, or fork the project!
