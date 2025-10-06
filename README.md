# Ride Guardian - Production Setup (Standalone)

This is a production-ready version of the Ride Guardian game that uses a standalone Tailwind CSS build, eliminating the need for Node.js or npm.

## Option 1: Standalone Tailwind CLI (Recommended)

### Download Standalone Tailwind CLI

1. **Download the standalone Tailwind CLI:**
   - Visit: https://github.com/tailwindlabs/tailwindcss/releases/latest
   - Download `tailwindcss-windows-x64.exe` (for Windows)
   - Rename it to `tailwindcss.exe`
   - Place it in this folder

2. **Build CSS using standalone CLI:**
   ```bash
   # For development (with watch mode)
   .\tailwindcss.exe -i .\src\input.css -o .\dist\output.css --watch

   # For production (minified)
   .\tailwindcss.exe -i .\src\input.css -o .\dist\output.css --minify
   ```

3. **Open the game:**
   Open `index.html` in your browser to play the game.

## Option 2: Pre-built CSS (Ready to Use)

If you don't want to install anything, I've created a pre-built CSS file that you can use immediately.

1. **Use the pre-built CSS:**
   - The `dist/output.css` file is already generated and ready to use
   - Simply open `index.html` in your browser

2. **To make changes:**
   - Edit the HTML or custom styles
   - Use Option 1 to rebuild CSS if needed

## Quick Start (No Installation Required)

1. Open `index.html` in your web browser
2. The game should work immediately with the pre-built CSS
3. No server or build process needed for basic usage

## File Structure

```
ride-guardian-production/
├── dist/
│   └── output.css          # Generated Tailwind CSS (created after build)
├── src/
│   └── input.css           # Source Tailwind CSS with custom styles
├── index.html              # Main HTML file (uses ./dist/output.css)
├── package.json            # Node.js dependencies and scripts
├── tailwind.config.js      # Tailwind configuration
└── README.md              # This file
```

## Key Changes from CDN Version

1. **Replaced CDN link** with local CSS build: `./dist/output.css`
2. **Custom Tailwind configuration** with your brand colors and design tokens
3. **Component-based CSS** using `@apply` directives for maintainability
4. **Production optimization** with CSS purging and minification
5. **Custom gradient classes** defined in `tailwind.config.js`

## Custom Design Tokens

The following custom classes are available:
- `bg-pink` - Your brand pink color (#FF00BF)
- `text-dark` - Dark text color (#333447)
- `bg-gradient-logo` - Logo gradient
- `bg-gradient-main` - Main background gradient
- `card` - Card component with shadow and background
- `btn-primary` - Primary button style
- `btn-ghost` - Secondary button style
- `glass-card` - Glass morphism effect
- `timer-circle` - Timer component styling

## Development Workflow

1. **Start development:** `npm run dev` (runs Tailwind in watch mode)
2. **Edit files:** Make changes to `index.html` or `src/input.css`
3. **CSS automatically rebuilds** when you save changes
4. **For production:** Run `npm run build` to create optimized CSS

## Benefits of This Setup

- ✅ **No CDN Dependencies:** Works completely offline
- ✅ **Better Performance:** Smaller CSS bundle (only used classes)
- ✅ **Production Ready:** Optimized and minified CSS
- ✅ **No Node.js Required:** Standalone executable option
- ✅ **Customizable:** Easy to modify design tokens
- ✅ **Fast Loading:** Smaller file sizes than CDN version

## Making Style Changes

If you want to modify styles:

1. **Download standalone Tailwind CLI** (see Option 1 above)
2. **Edit `src/input.css`** for custom styles
3. **Edit `tailwind.config.js`** for configuration changes
4. **Run the build command** to regenerate `dist/output.css`
5. **Refresh your browser** to see changes

## Browser Compatibility

This setup works with all modern browsers and doesn't require an internet connection.