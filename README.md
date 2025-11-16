# React + Vite + Tailwind CSS + Material-UI Project

This project is a modern React application built with the latest versions of React, Vite, Tailwind CSS, and Material-UI (MUI).

## 🚀 Technologies Used

### Core Dependencies
- **React**: ^19.2.0 - Latest version of React
- **React DOM**: ^19.2.0 - React DOM renderer
- **Vite**: ^7.2.2 - Next generation frontend tooling

### UI Libraries
- **Tailwind CSS**: ^4.1.17 - Utility-first CSS framework
- **Material-UI (MUI)**: ^7.3.5 - React component library
- **MUI Icons**: ^7.3.5 - Material Design icons
- **Emotion**: ^11.14.0 - CSS-in-JS library (required for MUI)

### Development Tools
- **PostCSS**: ^8.5.6 - CSS transformation tool
- **Autoprefixer**: ^10.4.22 - PostCSS plugin for vendor prefixes
- **ESLint**: ^9.39.1 - JavaScript linter

## 📦 Installation

All dependencies are already installed. If you need to reinstall them:

```bash
cd react-app
npm install
```

## 🏃 Running the Project

Start the development server:

```bash
cd react-app
npm run dev
```

The application will be available at `http://localhost:5173`

## 🏗️ Build for Production

Create a production build:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## 📁 Project Structure

```
react-app/
├── src/
│   ├── App.jsx          # Main application component (with Tailwind + MUI demo)
│   ├── App.css          # Component styles
│   ├── index.css        # Global styles with Tailwind directives
│   └── main.jsx         # Application entry point
├── public/              # Static assets
├── tailwind.config.js   # Tailwind CSS configuration
├── postcss.config.js    # PostCSS configuration
├── vite.config.js       # Vite configuration
└── package.json         # Project dependencies
```

## 🎨 Using Tailwind CSS

Tailwind utility classes can be used directly in your JSX:

```jsx
<div className="bg-blue-500 text-white p-4 rounded-lg">
  Hello Tailwind!
</div>
```

## 🎭 Using Material-UI

Import and use MUI components:

```jsx
import { Button, Card, Typography } from '@mui/material';
import { Favorite } from '@mui/icons-material';

function MyComponent() {
  return (
    <Card>
      <Typography variant="h5">Hello MUI!</Typography>
      <Button variant="contained" startIcon={<Favorite />}>
        Like
      </Button>
    </Card>
  );
}
```

## 🔄 Combining Tailwind and MUI

You can use both libraries together:

```jsx
<Button variant="contained" className="mt-4 shadow-lg">
  Combined Styling
</Button>
```

## ✅ Version Compatibility

All packages are using their latest compatible versions:
- React 19.2.0 is compatible with MUI 7.3.5
- Tailwind CSS 4.1.17 works seamlessly with Vite 7.2.2
- Emotion 11.14.0 is the required peer dependency for MUI
- All development dependencies are up to date

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🎯 Features Demonstrated

The demo application (`src/App.jsx`) showcases:
1. Tailwind CSS utility classes for styling
2. Material-UI components (Buttons, Cards, Typography)
3. MUI Icons integration
4. Combined usage of both libraries
5. Responsive design with Container component
6. State management with React hooks

## 🔧 Configuration Files

### Tailwind Configuration (`tailwind.config.js`)
Configured to scan all JSX/TSX files for class names.

### PostCSS Configuration (`postcss.config.js`)
Set up with Tailwind CSS and Autoprefixer plugins.

### Vite Configuration (`vite.config.js`)
Configured with React plugin for optimal development experience.

## 📚 Documentation Links

- [React Documentation](https://react.dev)
- [Vite Documentation](https://vitejs.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com)
- [Material-UI Documentation](https://mui.com)

## 🤝 Contributing

Feel free to modify and extend this project according to your needs!

## 📄 License

This project is open source and available under the MIT License.
