# Resume Builder Application

## Overview

This is a modern, interactive resume builder application built with React, TypeScript, and Tailwind CSS. It features multiple professionally designed templates and a responsive user interface.

## Tech Stack

- **React**: Frontend library for building user interfaces
- **TypeScript**: Static typing for JavaScript
- **Tailwind CSS**: Utility-first CSS framework
- **shadcn/ui**: High-quality React components
- **Framer Motion**: Animation library
- **React Router**: Client-side routing
- **React Query**: Data fetching and state management

## Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── ResumeBuilder/   # Resume-specific components
│   │   ├── templates/   # Different resume templates
│   │   ├── HeroSection.tsx
│   │   └── TemplateSelector.tsx
│   └── ui/             # shadcn/ui components
├── pages/              # Page components
├── types/              # TypeScript type definitions
├── lib/               # Utility functions
└── App.tsx            # Main application component
```

## Key Features

### 1. Multiple Resume Templates

The application offers six distinct resume templates:
- Modern Minimal
- Professional Classic
- Creative Tech
- Bold Impact
- Elegant Simple
- Dynamic Tech

Each template is implemented as a separate component in `src/components/ResumeBuilder/templates/`.

### 2. Template Selection

The `TemplateSelector` component (`src/components/ResumeBuilder/TemplateSelector.tsx`) provides an interactive interface for users to choose their preferred template. It uses:
- Grid layout for responsive design
- Hover effects and animations
- Accessibility features (ARIA labels)

### 3. Resume Data Structure

Resume data is typed using TypeScript interfaces in `src/types/resume.ts`:

```typescript
export interface ResumeData {
  template: ResumeTemplate;
  personalInfo: {
    firstName: string;
    lastName: string;
    // ... other fields
  };
  education: Education[];
  experience: Experience[];
  skills: Skill[];
  languages: Language[];
  projects: Project[];
}
```

### 4. Responsive Design

The application is fully responsive with:
- Mobile-first approach
- Flexible layouts using Tailwind CSS
- Desktop recommendation for optimal experience
- Automatic mobile detection and user notification

### 5. Animations and Transitions

- Framer Motion animations in the HeroSection
- Smooth template transitions
- Interactive hover effects
- Loading states and transitions

## Code Examples

### Template Implementation

```typescript
const ModernMinimal = ({ data }: { data: ResumeData }) => {
  return (
    <div className="max-w-[21cm] mx-auto bg-white p-4 md:p-8">
      {/* Template structure */}
    </div>
  );
};
```

### Mobile Detection

```typescript
useEffect(() => {
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  if (isMobile) {
    toast({
      title: "Desktop Recommended",
      description: "For the best experience, we recommend using a desktop browser.",
    });
  }
}, []);
```

## Styling System

The project uses Tailwind CSS with custom configuration:

- Custom colors (resume-primary, resume-secondary, etc.)
- Responsive breakpoints
- Custom animations
- Extended theme configuration

### Common Tailwind Classes

- Layout: `flex`, `grid`, `container`
- Spacing: `p-4`, `m-2`, `gap-4`
- Typography: `text-2xl`, `font-bold`
- Colors: `bg-white`, `text-gray-800`
- Responsive: `md:flex-row`, `lg:grid-cols-3`

## Development

1. Clone the repository
2. Install dependencies:
```bash
npm install
```
3. Start development server:
```bash
npm run dev
```

## Best Practices

1. **Component Organization**
   - Each template is a separate component
   - Reusable UI components in `/components/ui`
   - Page-level components in `/pages`

2. **TypeScript Usage**
   - Strong typing for all components and functions
   - Interface definitions for data structures
   - Type safety for props and state

3. **Responsive Design**
   - Mobile-first approach
   - Breakpoint-based layouts
   - Flexible container widths

4. **Performance**
   - Lazy loading of templates
   - Optimized animations
   - Efficient state management

5. **Accessibility**
   - ARIA labels
   - Semantic HTML
   - Keyboard navigation
   - Screen reader support

## Deployment

The application can be deployed using:
1. Open [Lovable](https://lovable.dev/projects/07a4d314-dad7-47a3-b4ae-ace2437956f4)
2. Click on Share -> Publish

For custom domain deployment, use Netlify following our [Custom domains](https://docs.lovable.dev/tips-tricks/custom-domain/) documentation.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

This project is open source and available under the MIT License.
