# Brain Nourishment Landing Page

A comprehensive landing page and assessment platform designed to help users understand and improve their digital wellness habits, specifically focusing on phone addiction and screen time management.

## 🌟 Feature

### Landing Page
- **Hero Section**: Compelling introduction with clear value proposition
- **Shock Section**: Eye-opening statistics about phone addiction
- **Offer Section**: Product/service presentation with benefits
- **Social Proof**: Testimonials and credibility indicators
- **Final CTA**: Strong call-to-action for conversion
- **Last Chance**: Urgency-driven final conversion opportunity

### Interactive Assessment
- **Phone Addiction Quiz**: Comprehensive assessment tool
- **Progress Tracking**: Visual progress indicators
- **Results Display**: Detailed analysis and recommendations
- **Achievement Badges**: Gamification elements
- **Email Collection**: Lead generation integration

### Additional Features
- **Leaderboard**: Community engagement and competition
- **Responsive Design**: Optimized for all devices
- **Modern UI**: Clean, warm aesthetic with earthy color palette
- **Interactive Modals**: Enhanced user experience
- **Floating Action Button**: Easy access to key actions

## 🎨 Design System

### Color Palette
- **Background**: `#f0e9d9` - Warm beige base
- **Secondary Background**: `#f1eada` - Light cards and sections
- **Primary Accent**: `#ca6e3f` - Orange buttons and highlights
- **Primary Accent Hover**: `#ca6d41` - Interactive states
- **Text**: `#1b201c` - Dark readable text
- **Dark Sections**: `#1a1f1b` - Navbar and footer

### Typography
- Clean, readable fonts optimized for web
- Proper hierarchy with consistent sizing
- Excellent contrast ratios for accessibility

## 🛠️ Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Styling**: Tailwind CSS v4
- **Language**: TypeScript
- **Components**: React functional components with hooks
- **Icons**: Lucide React
- **Responsive**: Mobile-first design approach

## 📁 Project Structure

\`\`\`
src/
├── app/
│   ├── (quiz)/                    # Quiz route group
│   │   ├── quiz/
│   │   │   └── page.tsx          # Main quiz page
│   │   └── _components/          # Quiz-specific components
│   │       ├── achievement-badges.tsx
│   │       ├── CustomModal.tsx
│   │       ├── email-collector.tsx
│   │       ├── progress-bar.tsx
│   │       ├── quiz-container.tsx
│   │       ├── results-display.tsx
│   │       └── shareable-card.tsx
│   ├── (leaderboard)/            # Leaderboard route group
│   │   ├── leaderboard/
│   │   │   └── page.tsx          # Leaderboard page
│   │   └── _components/
│   │       └── Leaderboard.tsx
│   ├── components/               # Shared components
│   │   ├── navbar.tsx
│   │   ├── footer.tsx
│   │   ├── hero-section.tsx
│   │   ├── shock-section.tsx
│   │   ├── offer-section.tsx
│   │   ├── social-proof-section.tsx
│   │   ├── final-cta-section.tsx
│   │   ├── last-chance-section.tsx
│   │   ├── floating-action-button.tsx
│   │   ├── exit-modal.tsx
│   │   └── message-modal.tsx
│   ├── globals.css              # Global styles
│   └── page.tsx                 # Main landing page
├── data/
│   └── player.tsx               # Leaderboard data
└── README.md
\`\`\`

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. **Clone the repository**
   \`\`\`bash
   git clone <repository-url>
   cd brain-nourishment-landingpage
   \`\`\`

2. **Install dependencies**
   \`\`\`bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   \`\`\`

3. **Run the development server**
   \`\`\`bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   \`\`\`

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📱 Responsive Design

The application is fully responsive and optimized for:
- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: 1024px+

Key responsive features:
- Flexible grid layouts
- Scalable typography
- Touch-friendly interactive elements
- Optimized images and media queries

## 🎯 Usage

### Main Landing Page
Visit the root URL to access the main landing page with all conversion-optimized sections.

### Take the Quiz
- Click "Start Test" in the navbar
- Navigate to `/quiz` to begin the phone addiction assessment
- Complete all questions to receive personalized results

### View Leaderboard
- Access `/leaderboard` to see community rankings
- Compare your results with other users
- Track progress over time

## 🔧 Development

### Key Components

- **Landing Sections**: Modular components for each page section
- **Quiz System**: Multi-step assessment with progress tracking
- **Modal System**: Reusable modal components for various interactions
- **Responsive Navigation**: Mobile-friendly navbar with smooth scrolling

### Customization

The color scheme can be easily modified by updating the color values in the component files. The design system uses consistent color variables throughout.

## 📊 Performance

- Optimized for Core Web Vitals
- Lazy loading for images and components
- Minimal bundle size with tree shaking
- Fast page transitions with Next.js App Router

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📞 Support

For support and questions, please open an issue in the repository or contact the development team.

---

Built with ❤️ for digital wellness and healthier phone habits.
