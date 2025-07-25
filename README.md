# Josh Hudson Portfolio

![Portfolio Screenshot](./public/img/portfolio-screenshot.png)

A modern, responsive portfolio website built with Nuxt.js showcasing web development projects and skills. Features a clean design with project showcases, about section, and work portfolio.

## 🚀 Features

- **Modern Stack**: Built with Nuxt.js 4, Vue.js 3, and TypeScript
- **Responsive Design**: Mobile-first approach with clean, professional styling
- **Project Showcase**: Dynamic project cards displaying recent work
- **File-based Routing**: Automatic routing with dedicated pages for Home, About, and Work
- **Component Architecture**: Reusable components including project cards and navigation
- **JSON Data Management**: Project data stored in structured JSON format
- **SCSS Styling**: Organized stylesheets with modern CSS practices
- **SEO Optimized**: Meta tags and structured data for better search visibility

## 🛠️ Technologies Used

- **Frontend**: Nuxt.js 4, Vue.js 3, TypeScript
- **Styling**: SCSS, CSS Grid, Flexbox
- **Build Tools**: Vite, ESLint
- **Deployment**: Ready for Vercel, Netlify, or similar platforms

## 📦 Installation

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn package manager

### Setup

1. **Clone the repository**

   ```bash
   git clone https://github.com/joshyhud/josh-nuxt.git
   cd josh-nuxt
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start development server**

   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000` (or the port shown in terminal)

## 🏗️ Build for Production

```bash
# Build the application
npm run build

# Preview the build
npm run preview

# Generate static files (if using SSG)
npm run generate
```

## 📁 Project Structure

```
josh-nuxt/
├── app/
│   ├── app.vue                 # Main layout wrapper
│   └── components/
│       └── project-list.vue    # Recent projects component
├── components/
│   ├── Header.vue              # Navigation header
│   ├── Footer.vue              # Site footer
│   └── ProjectCard.vue         # Reusable project card
├── pages/
│   ├── index.vue               # Homepage
│   ├── about.vue               # About page
│   └── work.vue                # Work portfolio page
├── data/
│   └── projects.json           # Project data
├── assets/
│   └── scss/                   # Stylesheets
├── public/
│   └── img/                    # Static images
├── nuxt.config.ts              # Nuxt configuration
└── package.json                # Dependencies
```

## 🎨 Customization

### Adding New Projects

Edit `data/projects.json` to add new projects:

```json
{
  "id": 7,
  "title": "Your Project Name",
  "description": "Project description...",
  "image": "/img/your-project.png",
  "technologies": ["Tech1", "Tech2"],
  "liveUrl": "https://your-project.com",
  "githubUrl": "https://github.com/username/repo",
  "featured": true,
  "createdAt": "2024-12-01",
  "category": "Web Development"
}
```

### Updating Content

- **Homepage**: Edit `pages/index.vue`
- **About Page**: Edit `pages/about.vue`
- **Work Page**: Edit `pages/work.vue`
- **Navigation**: Update `components/Header.vue`
- **Styling**: Modify files in `assets/scss/`

### Adding Images

Place project images in `public/img/` directory and reference them in your JSON file as `/img/filename.png`

## 📋 Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run generate     # Generate static files
npm run postinstall  # Prepare Nuxt
```

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically on every push

### Netlify

1. Build command: `npm run generate`
2. Publish directory: `dist`

### Traditional Hosting

1. Run `npm run generate`
2. Upload the `dist` folder to your hosting provider

## 🔧 Configuration

Key configuration files:

- `nuxt.config.ts` - Nuxt settings and modules
- `tsconfig.json` - TypeScript configuration
- `eslint.config.mjs` - Linting rules

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Josh Hudson**

- Website: [your-portfolio.com](https://your-portfolio.com)
- GitHub: [@joshyhud](https://github.com/joshyhud)

## 🤝 Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

⭐ Star this repo if you found it helpful!
