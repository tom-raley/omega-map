# OmegaMap
A decision-support tool that helps identify ideal headquarters locations based on regional access to fresh, healthy, low-fat fish.

````markdown
## React Vite TypeScript App

This is a frontend application built with [React](https://reactjs.org/), [Vite](https://vitejs.dev/), and [TypeScript](https://www.typescriptlang.org/). It connects to a separate server application for backend functionality.

---

## 🛠 Prerequisites

- [Node.js](https://nodejs.org/) (version 18 or higher recommended)
- [npm](https://www.npmjs.com/), [yarn](https://yarnpkg.com/), or [pnpm](https://pnpm.io/)
- A backend server running (required for API communication)

---

## 🚀 Getting Started

### 1. Install Dependencies

Using npm:

```bash
npm install
```

### 2. Set Environment Variables

Create a `.env` file in the project root:

```env
VITE_API_KEY=
VITE_API_BASE_URL=http://localhost:5001
```

### 3. Start the Development Server

```bash
npm run dev
```

Vite will start the app at [http://localhost:5173](http://localhost:5173) (or another available port).

### 4. Start the Backend Server

Make sure the separate server app is running and accessible at the base URL you set in `VITE_API_BASE_URL`.

---

## 📁 Project Structure

```bash
src/
├── components/     # Reusable React components
├── screens/        # Page-level components (routes)
├── helpers/        # Helper functions
├── types/          # Types
├── App.tsx         # Root React component
├── main.tsx        # Entry point
├── vite-env.d.ts   # Vite-specific TypeScript types
```

---

## 📜 Scripts

| Command           | Description                       |
| ----------------- | --------------------------------- |
| `npm run dev`     | Start Vite development server     |
| `npm run build`   | Build for production              |
| `npm run preview` | Preview production build          |
| `npm run lint`    | Run ESLint (not reall working :() |

---

## 📦 Build

To create a production-ready build:

```bash
npm run build
```

To preview the build locally:

```bash
npm run preview
```

---

## ✅ Environment Variables

Environment variables are injected at build time using the `VITE_` prefix.

| Variable            | Description                       |
| ------------------- | --------------------------------- |
| `VITE_API_BASE_URL` | URL for API requests              |
| `VITE_API_KEY`      | Key for API requests              |
