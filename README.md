# Abun - AI Content Dashboard

![Dashboard Preview](https://github.com/user-attachments/assets/1b1325e4-ed10-46cb-a889-31dcfc244ea2)

A modern, responsive dashboard for managing AI-generated content built with React, TypeScript, and shadcn/ui components.

## Features

- 🎨 Modern and clean UI design with shadcn/ui components
- 📱 Fully responsive layout
- 🌓 Light/Dark theme support
- ⚡ Fast and optimized performance
- 🔍 Real-time search functionality
- 📊 Advanced data table with sorting and filtering
- 🎯 Status-based content filtering
- 📝 Detailed article view with loading states
- 🛣️ Client-side routing with React Router
- 💅 Tailwind CSS for styling
- 🔄 Loading states and skeletons for better UX

## Tech Stack

- React 18
- TypeScript
- Tailwind CSS
- shadcn/ui Components
- React Router
- Lucide Icons
- Vite

## Project Structure

```
src/
├── components/
│   ├── articles/
│   │   └── article-view.tsx
│   ├── dashboard/
│   │   ├── columns.tsx
│   │   ├── dashboard.tsx
│   │   ├── data-table.tsx
│   │   └── sidebar.tsx
│   ├── ui/
│   │   └── [shadcn/ui components]
│   ├── loading-screen.tsx
│   ├── not-found.tsx
│   └── theme-provider.tsx
├── lib/
│   ├── data.ts
│   └── utils.ts
├── App.tsx
└── main.tsx
```

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

## Features in Detail

### Dashboard View
- Collapsible sidebar navigation
- Status-based tabs for content filtering
- Real-time search functionality
- Advanced data table with:
  - Sorting
  - Filtering
  - Pagination
  - Row selection
  - Action buttons

### Article Management
- View detailed article information
- Status tracking (Generated, Published, Scheduled, Archived)
- Traffic and keyword metrics
- Word count tracking
- Creation date tracking

### User Interface
- Clean and modern design
- Responsive layout for all screen sizes
- Loading skeletons for better UX
- Smooth transitions and animations
- Intuitive navigation

### Performance Optimizations
- Lazy loading of components
- Route-based code splitting
- Optimized bundle size
- Fast development server with Vite

## Screenshots

### Article View Dashboard
![Article View Dasboard](https://github.com/user-attachments/assets/9e1be199-8f1a-49aa-9af3-c261a0f09300)

## Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Code Quality

The project uses:
- ESLint for code linting
- TypeScript for type safety
- Prettier for code formatting

### Commit Messages

We follow the [Conventional Commits](https://www.conventionalcommits.org/) specification:

- `feat:` New features
- `fix:` Bug fixes
- `docs:` Documentation changes
- `style:` Code style changes
- `refactor:` Code refactoring
- `perf:` Performance improvements
- `test:` Test updates
- `chore:` Maintenance tasks

Example:
```
feat: add article view component
fix: resolve table sorting issue
docs: update README with new features
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a pull request

## License

MIT License - feel free to use this project for your own purposes.
