# Local Development Setup Guide

## Prerequisites

Before running this project locally, ensure you have the following installed:
- Node.js (version 16 or higher)
- npm (comes with Node.js) or yarn
- Git
- Visual Studio Code (VS Code)

## VS Code Setup

1. **Install VS Code Extensions**
   - Tailwind CSS IntelliSense
   - ESLint
   - Prettier
   - TypeScript and JavaScript Language Features
   - ES7+ React/Redux/React-Native snippets

2. **Open Project in VS Code**
```bash
code resume-builder
```
Or open VS Code, go to File > Open Folder and select the project directory.

3. **Configure VS Code Settings**
   - Press `Ctrl+Shift+P` (Windows/Linux) or `Cmd+Shift+P` (Mac)
   - Type "settings" and select "Preferences: Open Settings (JSON)"
   - Add these recommended settings:
```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
}
```

## Step-by-Step Setup Guide

### 1. Clone the Repository
```bash
git clone <your-repository-url>
cd resume-builder
```

### 2. Install Dependencies
This project uses several key dependencies:
```bash
npm install
```

Key packages that will be installed:
- React v18.3.1
- TypeScript
- Tailwind CSS
- shadcn/ui components
- Framer Motion for animations
- React Router for navigation
- React Query for data management
- Various Radix UI components

### 3. Start Development Server
```bash
npm run dev
```
This will start the development server at `http://localhost:5173`

### 4. Build for Production
```bash
npm run build
```

### 5. Preview Production Build
```bash
npm run preview
```

## Project Structure Overview

```
src/
├── components/           # UI components
│   ├── ResumeBuilder/   # Resume-specific components
│   └── ui/              # shadcn/ui components
├── pages/               # Page components
├── types/               # TypeScript types
└── lib/                # Utility functions
```

## Available Scripts

- `npm run dev`: Start development server
- `npm run build`: Build for production
- `npm run preview`: Preview production build
- `npm run lint`: Run ESLint
- `npm run type-check`: Run TypeScript type checking

## Environment Setup

No special environment variables are required for local development.

## Common Issues & Solutions

1. **Build Errors**
   - Run `npm install` to ensure all dependencies are installed
   - Clear npm cache: `npm cache clean --force`

2. **TypeScript Errors**
   - Run `npm run type-check` to identify type issues
   - Ensure TypeScript version matches project requirements

3. **Styling Issues**
   - Ensure Tailwind CSS is properly configured
   - Check tailwind.config.ts for custom theme settings

## VS Code Debugging

1. **Launch Configuration**
   - Press F5 or go to Run > Start Debugging
   - Select "Chrome" as the debug configuration
   - The development server must be running (`npm run dev`)

2. **Debugging Tips**
   - Use breakpoints by clicking the left margin in VS Code
   - Use the Debug Console (View > Debug Console)
   - Watch variables in the Debug sidebar
   - Use the VS Code integrated terminal (View > Terminal)

## Getting Help

If you encounter any issues:
1. Check the error console in your browser
2. Review the terminal output
3. Ensure all dependencies are correctly installed
4. Check for any TypeScript errors
5. Verify your Node.js version is compatible

## Contributing

1. Create a new branch for your feature
2. Make your changes
3. Run tests and type checking
4. Submit a pull request