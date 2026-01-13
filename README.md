# PathFinder AI – Career Companion for Students

🎯 **AI-powered career guidance platform for Indian students**

A compassionate, emotionally intelligent career mentor that helps students discover their path through adaptive conversations, personality profiling, and realistic career guidance.

## Features

- 🌟 **AI Career Mentor (Diya)** - Chat with an emotionally intelligent AI that understands Indian student psychology
- 💬 **WhatsApp-style Chat** - Familiar interface with voice input support
- 📊 **Career Reports** - Personalized reports with interests, strengths, and career matches
- 👥 **Student Community** - Q&A forum with AI-powered "Best Guidance" summaries
- 🌙 **Dark Mode** - Easy on the eyes, any time of day
- 📱 **Mobile-Ready** - Responsive design that works on all devices

## Tech Stack

- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: Tailwind CSS, Framer Motion
- **AI**: OpenAI GPT-4 API
- **Voice**: Web Speech API

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- OpenAI API key (for AI features)

### Installation

1. Clone the repository:
   ```bash
   cd pathfinder-ai
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   ```bash
   cp .env.example .env.local
   ```
   Edit `.env.local` and add your OpenAI API key.

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
pathfinder-ai/
├── app/                    # Next.js App Router pages
│   ├── page.tsx           # Landing page
│   ├── onboarding/        # Onboarding flow
│   ├── chat/              # AI chat interface
│   ├── report/            # Career report
│   ├── community/         # Q&A forum
│   └── profile/           # User profile
├── components/            # React components
│   ├── layout/           # Layout components
│   └── providers/        # Context providers
├── lib/                   # Utilities & constants
└── public/               # Static assets
```

## Pages

1. **Landing Page** (`/`) - Hero section with CTA, features, testimonials
2. **Onboarding** (`/onboarding`) - Sign up + profile setup
3. **Chat** (`/chat`) - AI mentor conversation
4. **Career Report** (`/report`) - Personalized career insights
5. **Community** (`/community`) - Student Q&A forum
6. **Profile** (`/profile`) - User settings & history

## Demo Mode

The app runs with demo data by default - no API keys required for basic functionality. AI responses are simulated to showcase the conversation flow.

## License

MIT License - feel free to use this for your own projects!

---

Made with 💙 for Indian students
