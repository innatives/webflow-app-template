# Webflow React App Example with Hot Reload

A demo React application showcasing the integration of [@xatom/wf-app-hot-reload](https://github.com/xAtomTeam/wf-app-hot-reload) - a Vite plugin that enables seamless hot reloading for Webflow applications during development.

## Development Commands

### Development Mode

```bash
pnpm dev
```

Starts the Vite development server on port 1337. This command:

- Launches your React application in development mode
- Enables Hot Module Replacement (HMR)
- Watches for file changes and automatically updates your Webflow app
- Makes your app available at `http://localhost:1337`

### Building for Production

```bash
pnpm build
```

Prepares your application for production deployment. This command:

1. Runs TypeScript compilation (`tsc -b`)
2. Builds the Vite application for production
3. Bundles your code as a Webflow extension using the Webflow CLI

### Serving the Extension

```bash
pnpm serve
```

Uses the Webflow CLI to serve your extension locally. This is useful for:

- Testing your extension in the Webflow Designer
- Verifying the production build
- Debugging extension-specific functionality

## How It Works

This project demonstrates the implementation of `@xatom/wf-app-hot-reload` in a Vite-based React application. The configuration is done in `vite.config.ts`:

```typescript
import { defineConfig } from "vite";
import wfHotReload from "@xatom/wf-app-hot-reload";

export default defineConfig({
  base: "./", // Required for Webflow extension assets
  plugins: [
    wfHotReload(),
    // other plugins...
  ],
});
```

### Important Configuration Notes

- The `base: "./"` configuration is crucial for Webflow extensions:
  - It ensures all asset paths are relative
  - Allows the extension to load resources correctly when bundled
  - Required for proper functioning in the Webflow Designer environment
  - Prevents absolute path issues in production builds

### Minimal HTML Structure

Unlike traditional web applications, Webflow extensions don't need a complete HTML document structure. Your `index.html` only needs the bare minimum:

```html
<div id="root"></div>
<script type="module" src="/src/main.tsx"></script>
```

This is because:

- Webflow automatically wraps your extension with its own `html`, `head`, and `body` tags
- The Designer environment provides its own document structure
- Additional meta tags, styles, or scripts should be injected through your React application
- The minimal structure keeps your extension lightweight and prevents conflicts with Webflow's environment

## Project Structure

```
webflow-react-app-example/
├── src/                    # Source code
│   ├── assets/            # Static assets
│   ├── App.tsx            # Main application component
│   ├── main.tsx          # Application entry point
│   └── index.css         # Global styles
├── public/                # Public assets
├── index.html            # Minimal HTML entry point
├── vite.config.ts        # Vite configuration with hot reload setup
├── webflow.json          # Webflow extension configuration
└── tsconfig.json         # TypeScript configuration
```

## Development Tips

- Changes to React components will trigger instant updates without page refresh
- The hot reload functionality is for development only - it's automatically disabled in production builds
- Always test your production builds without hot reload before deploying
- Use `pnpm serve` after building to verify your extension works correctly in Webflow Designer
- The development server (port 1337) and the Webflow extension server can run simultaneously
- Keep your HTML structure minimal and let Webflow handle the document wrapper

## Contributing

This is a demo project showcasing the `@xatom/wf-app-hot-reload` plugin. For plugin-specific issues or contributions, please visit the [plugin repository](https://github.com/xAtomTeam/wf-app-hot-reload).

## Support

For questions about:

- This demo project: Open an issue in this repository
- The hot reload plugin: Visit [@xatom/wf-app-hot-reload](https://github.com/xAtomTeam/wf-app-hot-reload)
