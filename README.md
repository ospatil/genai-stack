# GenAI Chat Application Stack on AWS

An interactive React application that provides a comprehensive guide to building AI chat applications primarily on AWS.

## Technology Stack

- **Frontend**: React 19 with TypeScript
- **Build Tool**: Vite for fast development and HMR
- **Styling**: Tailwind CSS
- **Icons**: Lucide React for consistent iconography
- **Linting**: ESLint with React-specific rules

## Project Structure

```bash
src/
├── GenAiStack.tsx    # Main component with collapsible sections
├── App.tsx          # Root application component
├── main.tsx         # Application entry point
├── index.css        # Global styles
└── assets/          # Static assets
```

## Developer Workflow

### Getting Started

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd genai-stack
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start development server**

   ```bash
   npm run dev
   ```

4. **Open in browser**
   - Navigate to `http://localhost:5173`

### Development Commands

- `npm run dev` - Start development server with HMR
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Code Quality

The project uses ESLint with React-specific rules. For production applications, consider enabling type-aware lint rules by updating `eslint.config.js`:

```js
// Add to eslint.config.js
extends: [
  tseslint.configs.recommendedTypeChecked,
  // or tseslint.configs.strictTypeChecked
],
languageOptions: {
  parserOptions: {
    project: ['./tsconfig.node.json', './tsconfig.app.json'],
    tsconfigRootDir: import.meta.dirname,
  },
}
```

### Building for Production

```bash
npm run build
```

The built files will be in the `dist/` directory, ready for deployment.

## Component Architecture

The main `GenAiStack` component manages multiple collapsible sections:

- **State Management**: Individual `useState` hooks for each section's expanded state
- **Toggle Functions**: Dedicated handlers for expanding/collapsing sections
- **Conditional Rendering**: Sections only render content when expanded
- **Accessibility**: Clickable headers with visual indicators (chevron icons)
