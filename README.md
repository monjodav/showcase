# monjodav Portfolio

Jordan's personal portfolio showcasing innovative projects in personal development and sports technology.

## 🚀 Projects Featured

### Herochall
Gamified mobile app for personal development that transforms your growth journey into an engaging adventure.
- **Release**: Q2 2025
- **Platforms**: iOS, Android
- **Tech**: React Native, JavaScript, Supabase, AI

### Athledex
Comprehensive platform connecting athletes and fostering meaningful progress through community.
- **Release**: S2 2025
- **Platforms**: Web, iOS, Android
- **Tech**: Still developing

## 🛠️ Tech Stack

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Fonts**: Poppins (Google Fonts)
- **Animations**: CSS animations with custom keyframes
- **Deployment**: Vercel

## 🚀 Deployment on Vercel

### Method 1: Vercel CLI (Recommended)

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy from project directory**
   ```bash
   cd app-vitrine
   vercel
   ```

4. **Follow the prompts:**
   - Set up and deploy? `Y`
   - Which scope? Choose your account
   - Link to existing project? `N`
   - Project name: `monjodav-portfolio` (or your preference)
   - Directory: `./` (current directory)

### Method 2: GitHub Integration

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio deployment"
   git branch -M main
   git remote add origin https://github.com/yourusername/monjodav-portfolio.git
   git push -u origin main
   ```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will auto-detect the static site

### Method 3: Drag & Drop

1. Go to [vercel.com](https://vercel.com)
2. Drag and drop the `app-vitrine` folder
3. Vercel will automatically deploy

## 🔧 Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Or use the basic start command
npm start
```

The site will be available at `http://localhost:3008`

## 📁 Project Structure

```
app-vitrine/
├── index.html              # Main HTML file
├── public/
│   ├── style.css           # Main stylesheet
│   └── assets/
│       └── images/         # Project images and logos
├── src/
│   └── app.js             # JavaScript functionality
├── vercel.json            # Vercel configuration
├── package.json           # Project dependencies
└── README.md              # This file
```

## 🎨 Features

- **Responsive Design**: Works on all devices
- **Smooth Animations**: Custom CSS animations and transitions
- **Interactive Portfolio**: Dynamic project display with scroll-based navigation
- **Modern UI**: Clean, professional design with platinum effects
- **Performance Optimized**: Fast loading with optimized assets

## 🔗 Live Demo

Once deployed, your portfolio will be available at:
`https://your-project-name.vercel.app`

## 📧 Contact

- **Email**: contact@monjodav.com
- **X (Twitter)**: [@monjodav](https://x.com/monjodav)

---

Built with ❤️ by Jordan | © 2025 monjodav. All rights reserved.
