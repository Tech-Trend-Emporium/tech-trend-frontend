# 🖥️ Tech Trend Emporium Frontend

This repository contains the **frontend application** for **Tech Trend Emporium**, built with **React 18**, **Vite**, and **TailwindCSS**.  
It provides a **modern and responsive user interface** for interacting with the e-commerce backend.

## 📌 Vision

- Deliver a **fast and user-friendly** e-commerce web interface.
- Leverage **React + Vite** for high-performance builds and modern development workflows.
- Ensure **scalability**, **reusability**, and **clean architecture** for components and state management.
- Integrate seamlessly with the **Tech Trend Emporium API** (built with .NET 8 + PostgreSQL).
- Support **role-based features** for `ADMIN`, `EMPLOYEE`, and `SHOPPER` users.

## 🏗️ Architecture Overview

The frontend follows a **modular architecture** based on reusable UI components and feature-driven folder structure.

**Main principles:**
- Separation of UI, logic, and data-fetching concerns.
- Global state management through **Context API** or **Redux Toolkit**.
- REST communication with backend services via **Axios** or **Fetch API**.
- Routing handled by **React Router DOM**.

**Structure Example:**
```plaintext
src/
 ├── assets/              # Static assets (images, icons, etc.)
 ├── components/          # Reusable UI components (buttons, forms, etc.)
 ├── contexts/            # Global state and providers
 ├── hooks/               # Custom React hooks
 ├── pages/               # Route-based pages
 ├── services/            # API service definitions (Axios clients)
 ├── styles/              # Tailwind config & global styles
 ├── utils/               # Helpers and utility functions
 ├── App.jsx              # Main app entry
 └── main.jsx             # Vite entry point
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v18+)
- npm or yarn
- Docker (optional, for containerized setup)
- The backend API running locally or remotely

### 🧱 Run Locally (Development)

Clone the repository:
```bash
git clone https://github.com/Tech-Trend-Emporium/tech-trend-frontend.git
cd tech-trend-frontend
```
Install dependencies:
```bash
npm install
```
Run the development server:
```bash
npm run dev
```
The app will be available at:
👉 http://localhost:5173

## 🐳 Run with Docker

Build and run the container:
```bash
docker build -t techtrend-frontend .
docker run -p 5173:5173 techtrend-frontend
```
Or, if using Docker Compose (with backend + frontend):
```bash
docker-compose up --build
```
This will start:
- ⚙️ Frontend → http://localhost:5173
- 🧩 Backend → http://localhost:8080

## ⚙️ Environment Variables

Create a `.env` file in the project root with the following:

```bash
VITE_API_BASE_URL=http://localhost:8080/api
VITE_APP_NAME=Tech Trend Emporium
```

These variables are injected by Vite at build time and available via:
```javascript
import.meta.env.VITE_API_BASE_URL
```

## 🧪 Testing & Quality

Recommended setup (optional but encouraged):

- **Vitest** or **Jest** for unit testing
- **React Testing Library** for component tests
- **ESLint + Prettier** for code style consistency

Run tests:
```bash
npm run test
```
Check lint errors:
```bash
npm run lint
```

## 🔄 CI/CD (GitHub Actions + Azure)

CI pipeline (on push/PR to main or feature branches):
- Install dependencies
- Lint and test
- Build optimized production bundle
- Build Docker image tagged with commit SHA
- Push image to **Azure Container Registry (ACR)**

CD pipeline (on merge to main):
- Deploy container to **Azure Static Web App** or **Azure Container Instances**
- Connect to backend API via environment variable
- Use **Azure Key Vault** for secrets

Workflows defined under `.github/workflows/`.


## 📖 Documentation

- `/docs/` → Design decisions, UI guidelines, component documentation.
- `/src/services/` → API interaction layer.
- `/src/components/` → Reusable UI components.

## 🤝 Contributing

We follow a **Trunk-Based Development** strategy:
- All changes go through Pull Requests.
- Each PR should be **small and focused**.
- Follow naming conventions: `feature/`, `fix/`, `refactor/`.

Run formatter before pushing:
```bash
npm run format
```

## 🗺️ Roadmap

- [ ] Add authentication flow (login/register)
- [ ] Integrate user role-based views (ADMIN, EMPLOYEE, SHOPPER)
- [ ] Improve API error handling
- [ ] Add dark mode toggle
- [ ] Integrate analytics and performance monitoring
- [ ] Add unit and E2E tests (Cypress)

## 📜 License

MIT License. See LICENSE.