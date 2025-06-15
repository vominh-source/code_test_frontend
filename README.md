# G-SCORES
A web application for THPT 2024 exam score lookup and analysis – search by registration number, categorize performance levels, view subject-wise statistics and top 10 Group A students.



![Homepage](https://github.com/nlanhduy/ai-video-generator/blob/main/public/images/step-1/homepage.png)

<!-- Replace with actual image URL if available -->

<div align="center">
  <p align="center">
    An web app for looking exam score
    <a href="https://www.youtube.com/watch?v=IrU6liVYhrU">View Demo</a>
  </p>
</div>

## 🎬 Features Overview

### 📝 **Feature 1: Search Score**

-**Input**: Candidate Number.
![Search Score](https://github.com/nlanhduy/ai-video-generator/blob/main/public/images/step-1/content-genrator.png)

### 🎤 **Feature 2: Subject Overview**

- **Description**: User chooses the subject to view and analyze the score distribution. The application will display a statistical chart showing the number of students falling into four performance levels:

- Excellent (≥ 8 points)

- Good (6 ≤ score < 8)

- Average (4 ≤ score < 6)

- Poor (< 4 points)

![Subject Overview](https://github.com/nlanhduy/ai-video-generator/blob/main/public/images/step-2/voice.png)

### 🖼️ **Feature 3: All Subject Overview**
- **Description**: This feature kinda similar to feature 2 (Subject Overview), but the difference is that it will show the chart for all subjects.
![All Subject Overview](https://github.com/nlanhduy/ai-video-generator/blob/main/public/images/step-3/choose-style.png)

### ✂️ **Feature 4: Top 10 Group A Students**
- **Description**: This feature displays a ranked list of the top 10 students with the highest total scores in Group A, which includes three subjects: Math, Physics, and Chemistry.
![Top 10 Group A Students](https://github.com/nlanhduy/ai-video-generator/blob/main/public/images/step-4/edit-timeline.png)

## Technology Stack

### Development Environment

- **Operating System**: Microsoft Windows
- **IDE**: Visual Studio Code
- **Design & Analysis**: Mermaid (UML diagrams and workflow modeling)
- **Database**: No traditional database (API-based services)

### Frontend & Core Technologies

- **Framework**: Next.js (latest version)
- **UI Library**: React
- **Styling**: TailwindCSS
- **Runtime**: Node.js

## Project Architecture

This AI Video Generator follows a modern web application architecture:

- 🎨 **Frontend (Next.js)**  
  Handles user interface, step-by-step workflow, and real-time previews

- ⚡ **AI Processing (Cloudflare Workers)**  
  Manages AI model integrations and content processing

- 🔗 **External APIs**  
  Integrates with Gemini, ElevenLabs, Shotstack, and YouTube APIs

## Purpose

This AI Video Generator was developed as an innovative solution to democratize
video content creation in the AI era. The platform addresses the growing demand
for automated, high-quality video production by combining multiple AI
technologies into a seamless, user-friendly workflow.

---

> 📂 Repositories:
>
> -Front-end: []
> -Back-end: []

Feel free to explore, contribute, or fork the project!
