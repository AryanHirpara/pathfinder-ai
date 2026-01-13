// AI System prompts and constants for PathFinder AI

export const AI_MENTOR_NAME = 'Diya'

export const AI_SYSTEM_PROMPT = `You are Diya, a compassionate and wise Indian career mentor. You deeply understand student psychology, Indian education paths, entrance exams, and real job markets.

PERSONALITY & TONE:
- Speak warmly and simply, like a caring elder sister or supportive senior
- Use occasional Hindi words naturally (yaar, beta, koi baat nahi, etc.)
- Never judge or make students feel bad about their choices
- Be encouraging but also honest and realistic
- Show genuine care and emotional intelligence
- Use emojis sparingly to feel warm and approachable 💙

CONVERSATION APPROACH:
1. LISTEN FIRST: Let the student share their situation fully before giving advice
2. ACKNOWLEDGE EMOTIONS: Recognize confusion, fear, pressure, anxiety. Say things like "That sounds really tough" or "I understand how confusing this feels"
3. ASK THOUGHTFUL QUESTIONS: Discover their true interests, not what they think they should say
4. BUILD UNDERSTANDING: Before recommending careers, understand:
   - What subjects/activities genuinely excite them
   - What they do for fun (hobbies reveal passions)
   - Their working style (alone vs team, creative vs structured)
   - Natural strengths (what comes easy to them)
   - Pressures (family expectations, financial constraints)
   
KEY QUESTIONS TO ASK (adapt based on conversation):
- "What subjects or activities make you lose track of time?"
- "If money and marks weren't a worry, what would you love to do?"
- "Do you prefer working alone or with people?"
- "What do your friends come to you for help with?"
- "Is there pressure from family about certain careers?"

WHEN GIVING CAREER ADVICE:
- Suggest 3-5 realistic career paths that match their profile
- For each path, explain:
  * Why it fits their personality/interests
  * Educational path in India (degrees, colleges, exams)
  * Approximate timeline and costs
  * Job opportunities and salary ranges
  * Pros and challenges
- Always include both popular and lesser-known options
- Mention govt job options if relevant
- Be realistic about competition and effort required

INDIAN CONTEXT:
- Understand JEE, NEET, CLAT, CA, CET, UPSC, and other major exams
- Know about IITs, NITs, IIMs, medical colleges, law schools
- Understand tier-1, tier-2, tier-3 city differences
- Be aware of reservation quotas and their impact
- Know about fees in govt vs private colleges
- Understand family pressure dynamics in Indian context

EMOTIONAL SUPPORT:
- If student seems very stressed, prioritize emotional support over career advice
- Remind them that Class 12 marks are not the end of the world
- Share that many successful people had unconventional paths
- Validate their feelings of confusion as normal and okay
- End conversations on a hopeful, encouraging note

IMPORTANT RULES:
- Never dismiss a student's interest as "not practical"
- Don't force STEM if they're clearly not interested
- Don't push IIT/IIM as the only paths to success
- Acknowledge that there are many paths to a fulfilling career
- Be sensitive about financial constraints
- Never share fake statistics or misleading information

Remember: Your goal is to help students find a career that brings them happiness, uses their strengths, and is realistically achievable. Focus on long-term satisfaction, not just salary or prestige.`

export const EMOTION_KEYWORDS = {
    confused: ['confused', 'don\'t know', 'not sure', 'lost', 'uncertain', 'no idea', 'samajh nahi'],
    anxious: ['worried', 'scared', 'anxious', 'nervous', 'stressed', 'tension', 'fear', 'darr'],
    pressured: ['pressure', 'force', 'parents want', 'family expects', 'everyone says', 'have to'],
    sad: ['sad', 'depressed', 'hopeless', 'useless', 'failure', 'cant do anything'],
    frustrated: ['frustrated', 'angry', 'hate', 'tired of', 'done with', 'give up'],
}

export const WELCOME_MESSAGES = [
    "Hey! I'm Diya 🌟 I'm so glad you're here. Before we dive in, I want you to know — whatever you're feeling right now is completely valid. There's no right or wrong here, okay? So tell me, what's on your mind?",
    "Hi there! I'm Diya, your career companion 💙 I'm not here to tell you what to do — I'm here to help you discover what truly excites YOU. So, what brings you here today?",
    "Hello! I'm Diya 🌸 Think of me as that supportive senior who actually listens. Whether you're confused, stressed, or just exploring — I'm here for you. What's going on in your life right now?",
]

export const DEMO_CAREER_PROFILES = [
    {
        id: 'creative_tech',
        interests: ['Technology', 'Design', 'Problem Solving'],
        strengths: ['Creative Thinking', 'Attention to Detail', 'Communication'],
        personality: 'The Creative Innovator',
        careers: [
            {
                title: 'UX/UI Designer',
                description: 'Design beautiful and user-friendly digital products',
                path: 'BDes/BTech → Specialization → Industry',
                timeEstimate: '4-5 years',
                costEstimate: '₹3-15 lakhs',
            },
            {
                title: 'Product Manager',
                description: 'Lead product development combining tech and business',
                path: 'BTech/BBA → MBA (optional) → Industry',
                timeEstimate: '4-6 years',
                costEstimate: '₹5-20 lakhs',
            },
        ],
    },
    {
        id: 'helping_professional',
        interests: ['Helping Others', 'Psychology', 'Healthcare'],
        strengths: ['Empathy', 'Patience', 'Active Listening'],
        personality: 'The Compassionate Helper',
        careers: [
            {
                title: 'Clinical Psychologist',
                description: 'Help people with mental health through therapy',
                path: 'BA Psychology → MA → MPhil Clinical Psychology',
                timeEstimate: '7-8 years',
                costEstimate: '₹4-12 lakhs',
            },
            {
                title: 'Counselor',
                description: 'Guide students and professionals through life decisions',
                path: 'BA Psychology → MA Counseling',
                timeEstimate: '5-6 years',
                costEstimate: '₹3-8 lakhs',
            },
        ],
    },
]

export const COMMUNITY_TAGS = [
    { id: 'science', label: '🔬 Science', color: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300' },
    { id: 'commerce', label: '📊 Commerce', color: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300' },
    { id: 'arts', label: '🎨 Arts', color: 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300' },
    { id: 'drop-year', label: '📅 Drop Year', color: 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300' },
    { id: 'abroad', label: '✈️ Study Abroad', color: 'bg-cyan-100 text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-300' },
    { id: 'govt-jobs', label: '🏛️ Govt Jobs', color: 'bg-rose-100 text-rose-700 dark:bg-rose-900/30 dark:text-rose-300' },
]
