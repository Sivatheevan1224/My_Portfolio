# 🚀 Sivatheevan's Portfolio

A modern, responsive, and feature-rich portfolio website built with Next.js, TypeScript, and Tailwind CSS. Showcasing my skills, projects, and professional journey with stunning animations and interactive elements.

![Portfolio Preview](https://img.shields.io/badge/Status-Live-success)
![Next.js](https://img.shields.io/badge/Next.js-14-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-38bdf8)

## ✨ Features

### 🎨 **Modern Design**
- **Glassmorphism UI** - Beautiful frosted glass effects throughout
- **Gradient Animations** - Smooth color transitions and text gradients
- **Theme Support** - Light/Dark mode toggle with persistent preference
- **Responsive Design** - Fully optimized for mobile, tablet, and desktop

### 🎭 **Interactive Animations**
- **Framer Motion** - Smooth page transitions and scroll animations
- **Floating Icons** - Animated tech icons in Hero section with mouse tracking
- **Lightning Effects** - Dynamic lightning bolts following mouse movement
- **Mouse Follower Glow** - Interactive gradient glow effect
- **Hover Effects** - Scale, lift, and glow animations on interactive elements
- **Scroll Reveal** - Elements animate in as you scroll

### 📱 **Sections**

#### 🏠 **Hero Section**
- Animated introduction with gradient text
- Social media links with hover effects
- CV download and view buttons
- Scrolling tech stack icons with brand colors
- Interactive floating background icons with mouse parallax
- Lightning bolt effects on mouse movement

#### 👨‍💻 **About Section**
- Services timeline with icons
- Personal bio and description
- Achievement stats with animated numbers
- Hover effects on service cards
- Floating background animations

#### 💼 **Projects Section**
- Project cards with images and descriptions
- Technology tags with color coding
- GitHub repository links
- Live demo links
- Smooth card animations
- Responsive grid layout

#### 🛠️ **Skills Section**
- Interactive category tabs (Frontend, Backend, Database, Other)
- Animated skill cards with icons
- Icon animations on hover (scale, rotate)
- Smooth category transitions
- Individual card hover effects
- Shimmer effects on interaction

#### 🎓 **Education Section**
- Vertical timeline design
- University logos and details
- Timeline dots and connecting lines
- Hover effects on education cards
- Responsive layout

#### 📧 **Contact Section**
- EmailJS integration for contact form
- Form validation with error messages
- Animated input fields
- Success/error toast notifications
- Mailto fallback if EmailJS fails
- Smooth form animations

#### 📄 **Footer**
- Contact information
- Social media links with animations
- Floating WhatsApp button
- Copyright information
- Responsive layout

### 🎯 **Navigation**
- **Smart Navbar** - Intersection Observer for active section detection
- Smooth scroll to sections
- Active section highlighting with glow effect
- Theme toggle button
- Compact glass design
- Mobile hamburger menu
- Responsive breakpoints

### ⚡ **Performance Optimizations**
- Next.js App Router for optimal performance
- Image optimization with Next.js Image
- Client-side rendering for animations
- Efficient re-renders with React hooks
- Lazy loading components
- Optimized bundle size

## 🛠️ Tech Stack

### **Core Framework**
- **Next.js 14** - React framework with App Router
- **React 18** - UI library with latest features
- **TypeScript** - Type-safe development

### **Styling**
- **Tailwind CSS** - Utility-first CSS framework
- **Custom CSS** - Global styles and animations
- **Responsive Design** - Mobile-first approach

### **Animations**
- **Framer Motion** - Production-ready animation library
- **Custom Animations** - CSS keyframes and transitions

### **Icons**
- **React Icons** - Icon library (Fi, Si, Fa)
- **Simple Icons** - Brand logos and tech icons

### **Forms & Notifications**
- **EmailJS** - Email service integration
- **React Hot Toast** - Toast notifications

### **Development Tools**
- **ESLint** - Code linting
- **PostCSS** - CSS processing
- **Git** - Version control

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm, yarn, pnpm, or bun

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/Sivatheevan1224/My_Portfolio.git
cd My_Portfolio_Siva
```

2. **Install dependencies**
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. **Set up environment variables** (Optional - for EmailJS)
Create a `.env.local` file in the root directory:
```env
NEXT_PUBLIC_EMAIL_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAIL_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAIL_API_ID=your_public_key
```

4. **Run the development server**
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

5. **Open your browser**
Navigate to [http://localhost:3000](http://localhost:3000)

## 📦 Build for Production

```bash
npm run build
npm run start
```

## 🎨 Customization

### Update Personal Information
Edit the constants in `/constants/index.tsx`:
- Personal details (name, bio, etc.)
- Social media links
- Projects and descriptions
- Skills and technologies
- Education history

### Modify Theme Colors
Edit `/app/globals.css` for:
- Color schemes
- Custom gradients
- Animation timings

### Adjust Components
All components are in `/components/`:
- `Hero.tsx` - Landing section
- `About.tsx` - About section
- `Projects.tsx` - Projects showcase
- `Skills.tsx` - Skills display
- `EducationSection.tsx` - Education timeline
- `ContactForm.tsx` - Contact form
- `Navbar.tsx` - Navigation bar
- `Footer.tsx` - Footer section

## 📱 Features Breakdown

### Theme System
- Light/Dark mode toggle
- Persistent theme preference using localStorage
- Smooth theme transitions
- Theme-aware components

### Responsive Design
- Mobile-first approach
- Breakpoints: xs, sm, md, lg, xl, 2xl
- Touch-friendly interactions
- Optimized for all screen sizes

### Animation System
- Scroll-triggered animations
- Hover effects
- Page transitions
- Loading states
- Micro-interactions

### Contact Form
- Client-side validation
- EmailJS integration
- Mailto fallback
- Success/error handling
- Toast notifications

## 🌐 Browser Support
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## 📄 License
This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Sivatheevan**
- GitHub: [@Sivatheevan1224](https://github.com/Sivatheevan1224)
- LinkedIn: [sivatheevan](https://www.linkedin.com/in/sivatheevan)
- Email: sivatheevan1224@gmail.com

## 🙏 Acknowledgments
- Next.js team for the amazing framework
- Framer Motion for smooth animations
- Tailwind CSS for utility-first styling
- React Icons for comprehensive icon library
- EmailJS for email service integration

## 📈 Future Enhancements
- [ ] Blog section
- [ ] CMS integration
- [ ] Analytics dashboard
- [ ] Multi-language support
- [ ] Performance metrics
- [ ] SEO optimization

---

⭐ **Star this repo** if you found it helpful!

💬 **Questions?** Feel free to open an issue or reach out!
