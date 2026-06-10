const vocabularyData = [
  {
    "word": "Agenda",
    "meaning": "A list of items to be discussed at a formal meeting.",
    "synonym": "Schedule",
    "antonym": "Disorder",
    "example": "The chair called for any additions to the agenda.",
    "category": "Business English",
    "difficulty": "Easy"
  },
  {
    "word": "Benchmark",
    "meaning": "A standard or point of reference against which things may be compared.",
    "synonym": "Standard",
    "antonym": "Guess",
    "example": "The company set a new benchmark for quality in the industry.",
    "category": "Business English",
    "difficulty": "Medium"
  },
  {
    "word": "Collaboration",
    "meaning": "The action of working with someone to produce something.",
    "synonym": "Cooperation",
    "antonym": "Resistance",
    "example": "The project was a successful collaboration between two departments.",
    "category": "Business English",
    "difficulty": "Medium"
  },
  {
    "word": "Deadline",
    "meaning": "The latest time or date by which something should be completed.",
    "synonym": "Limit",
    "antonym": "Continuance",
    "example": "We are working hard to meet the Friday deadline.",
    "category": "Business English",
    "difficulty": "Easy"
  },
  {
    "word": "Efficiency",
    "meaning": "The state or quality of being efficient.",
    "synonym": "Productivity",
    "antonym": "Incompetence",
    "example": "The new machinery has increased the factory's efficiency.",
    "category": "Business English",
    "difficulty": "Medium"
  },
  {
    "word": "Forecast",
    "meaning": "A prediction or estimate of future events.",
    "synonym": "Prediction",
    "antonym": "Hindsight",
    "example": "The sales forecast for the next quarter looks promising.",
    "category": "Business English",
    "difficulty": "Medium"
  },
  {
    "word": "Growth",
    "meaning": "The process of increasing in size, amount, or importance.",
    "synonym": "Expansion",
    "antonym": "Decline",
    "example": "The company has experienced rapid growth over the last year.",
    "category": "Business English",
    "difficulty": "Easy"
  },
  {
    "word": "Hierarchy",
    "meaning": "A system in which members of an organization are ranked according to status.",
    "synonym": "Ranking",
    "antonym": "Equality",
    "example": "The corporate hierarchy can be difficult to navigate for new employees.",
    "category": "Business English",
    "difficulty": "Hard"
  },
  {
    "word": "Innovation",
    "meaning": "The action or process of innovating.",
    "synonym": "Modernization",
    "antonym": "Stagnation",
    "example": "Innovation is key to staying competitive in the tech market.",
    "category": "Business English",
    "difficulty": "Medium"
  },
  {
    "word": "Jargon",
    "meaning": "Special words or expressions used by a profession that are difficult for others to understand.",
    "synonym": "Terminology",
    "antonym": "Standard",
    "example": "Legal jargon can be very confusing for non-lawyers.",
    "category": "Business English",
    "difficulty": "Medium"
  },
  {
    "word": "KPI",
    "meaning": "Key Performance Indicator; a quantifiable measure of performance.",
    "synonym": "Metric",
    "antonym": "N/A",
    "example": "Customer satisfaction is one of our most important KPIs.",
    "category": "Business English",
    "difficulty": "Hard"
  },
  {
    "word": "Leverage",
    "meaning": "Use something to maximum advantage.",
    "synonym": "Utilize",
    "antonym": "Waste",
    "example": "We should leverage our strengths to gain more market share.",
    "category": "Business English",
    "difficulty": "Hard"
  },
  {
    "word": "Milestone",
    "meaning": "A significant stage or event in the development of something.",
    "synonym": "Landmark",
    "antonym": "Trivia",
    "example": "Completing the prototype was a major milestone for the team.",
    "category": "Business English",
    "difficulty": "Medium"
  },
  {
    "word": "Negotiation",
    "meaning": "Discussion aimed at reaching an agreement.",
    "synonym": "Bargaining",
    "antonym": "Disagreement",
    "example": "The contract is currently under negotiation.",
    "category": "Business English",
    "difficulty": "Medium"
  },
  {
    "word": "Outsourcing",
    "meaning": "Obtaining goods or services from an outside or foreign supplier.",
    "synonym": "Contracting",
    "antonym": "Insourcing",
    "example": "The company is considering outsourcing its IT support.",
    "category": "Business English",
    "difficulty": "Medium"
  },
  {
    "word": "Profitability",
    "meaning": "The degree to which a business or activity yields profit or financial gain.",
    "synonym": "Lucrativeness",
    "antonym": "Loss",
    "example": "We need to improve the profitability of our online store.",
    "category": "Business English",
    "difficulty": "Medium"
  },
  {
    "word": "Quarter",
    "meaning": "A period of three months in a corporate financial year.",
    "synonym": "Term",
    "antonym": "N/A",
    "example": "The fourth quarter earnings exceeded expectations.",
    "category": "Business English",
    "difficulty": "Easy"
  },
  {
    "word": "Revenue",
    "meaning": "Income, especially when of a company or organization.",
    "synonym": "Income",
    "antonym": "Expenditure",
    "example": "The company's annual revenue reached one billion dollars.",
    "category": "Business English",
    "difficulty": "Medium"
  },
  {
    "word": "Stakeholder",
    "meaning": "A person with an interest or concern in something, especially a business.",
    "synonym": "Partner",
    "antonym": "Outsider",
    "example": "All stakeholders were invited to the town hall meeting.",
    "category": "Business English",
    "difficulty": "Hard"
  },
  {
    "word": "Transparency",
    "meaning": "The condition of being transparent.",
    "synonym": "Clarity",
    "antonym": "Opacity",
    "example": "The management promised more transparency in their decision-making.",
    "category": "Business English",
    "difficulty": "Medium"
  },
  {
    "word": "Venture",
    "meaning": "A risky or daring journey or undertaking.",
    "synonym": "Enterprise",
    "antonym": "Security",
    "example": "The new joint venture will focus on renewable energy.",
    "category": "Business English",
    "difficulty": "Medium"
  },
  {
    "word": "Workflow",
    "meaning": "The sequence of industrial, administrative, or other processes through which a piece of work passes.",
    "synonym": "Process",
    "antonym": "Stoppage",
    "example": "We need to streamline our workflow to be more productive.",
    "category": "Business English",
    "difficulty": "Medium"
  },
  {
    "word": "Yield",
    "meaning": "Produce or provide a natural, agricultural, or industrial product.",
    "synonym": "Profit",
    "antonym": "Shortfall",
    "example": "The investment is expected to yield high returns.",
    "category": "Business English",
    "difficulty": "Medium"
  },
  {
    "word": "Acquisition",
    "meaning": "An asset or object bought or obtained.",
    "synonym": "Purchase",
    "antonym": "Divestment",
    "example": "The acquisition of the smaller startup was finalized yesterday.",
    "category": "Business English",
    "difficulty": "Hard"
  },
  {
    "word": "Branding",
    "meaning": "The promotion of a particular product or company by means of advertising and distinctive design.",
    "synonym": "Marketing",
    "antonym": "Generic",
    "example": "The company's branding is easily recognized worldwide.",
    "category": "Business English",
    "difficulty": "Easy"
  },
  {
    "word": "Compliance",
    "meaning": "The action or fact of complying with a wish or command.",
    "synonym": "Obedience",
    "antonym": "Defiance",
    "example": "The company must ensure compliance with new safety regulations.",
    "category": "Business English",
    "difficulty": "Hard"
  },
  {
    "word": "Diversification",
    "meaning": "The process of a business enlarging or varying its range of products or field of operation.",
    "synonym": "Variety",
    "antonym": "Specialization",
    "example": "Diversification is a strategy to reduce investment risk.",
    "category": "Business English",
    "difficulty": "Hard"
  },
  {
    "word": "Equity",
    "meaning": "The value of the shares issued by a company.",
    "synonym": "Shares",
    "antonym": "Debt",
    "example": "Employees were offered equity in the company as part of their bonus.",
    "category": "Business English",
    "difficulty": "Hard"
  },
  {
    "word": "Freelancer",
    "meaning": "A person who works as a writer, designer, etc., selling their work or services by the hour, day, job, etc.",
    "synonym": "Contractor",
    "antonym": "Employee",
    "example": "She decided to leave her job and work as a freelancer.",
    "category": "Business English",
    "difficulty": "Easy"
  },
  {
    "word": "Globalization",
    "meaning": "The process by which businesses or other organizations develop international influence.",
    "synonym": "Integration",
    "antonym": "Isolationism",
    "example": "Globalization has opened up new markets for small businesses.",
    "category": "Business English",
    "difficulty": "Medium"
  },
  {
    "word": "Infrastructure",
    "meaning": "The basic physical and organizational structures and facilities needed for the operation of a society or enterprise.",
    "synonym": "Framework",
    "antonym": "Chaos",
    "example": "The city's infrastructure needs urgent repairs.",
    "category": "Business English",
    "difficulty": "Hard"
  },
  {
    "word": "Networking",
    "meaning": "The action or process of interacting with others to exchange information and develop professional or social contacts.",
    "synonym": "Connecting",
    "antonym": "Isolation",
    "example": "Networking is essential for career advancement.",
    "category": "Business English",
    "difficulty": "Medium"
  },
  {
    "word": "Optimization",
    "meaning": "The action of making the best or most effective use of a situation or resource.",
    "synonym": "Maximization",
    "antonym": "Wastage",
    "example": "Search engine optimization helps websites rank higher in results.",
    "category": "Business English",
    "difficulty": "Medium"
  },
  {
    "word": "Productivity",
    "meaning": "The effectiveness of productive effort, especially in industry, as measured in terms of the rate of output per unit of input.",
    "synonym": "Output",
    "antonym": "Idleness",
    "example": "Flexible working hours can often lead to higher productivity.",
    "category": "Business English",
    "difficulty": "Medium"
  },
  {
    "word": "Resign",
    "meaning": "Voluntarily leave a job or other position.",
    "synonym": "Quit",
    "antonym": "Apply",
    "example": "He decided to resign from his position to pursue other interests.",
    "category": "Business English",
    "difficulty": "Easy"
  },
  {
    "word": "Amazing",
    "meaning": "Causing great surprise or wonder; astonishing.",
    "synonym": "Wonderful",
    "antonym": "Ordinary",
    "example": "The view from the top of the mountain was amazing.",
    "category": "Daily Conversation",
    "difficulty": "Easy"
  },
  {
    "word": "Bored",
    "meaning": "Feeling weary and restless through lack of interest.",
    "synonym": "Uninterested",
    "antonym": "Excited",
    "example": "The children got bored during the long movie.",
    "category": "Daily Conversation",
    "difficulty": "Easy"
  },
  {
    "word": "Clumsy",
    "meaning": "Awkward in movement or in in handling things.",
    "synonym": "Awkward",
    "antonym": "Graceful",
    "example": "I'm so clumsy; I just dropped my glass of water.",
    "category": "Daily Conversation",
    "difficulty": "Medium"
  },
  {
    "word": "Delicious",
    "meaning": "Highly pleasant to the taste.",
    "synonym": "Tasty",
    "antonym": "Disgusting",
    "example": "This chocolate cake is absolutely delicious.",
    "category": "Daily Conversation",
    "difficulty": "Easy"
  },
  {
    "word": "Eager",
    "meaning": "Strongly wanting to do or have something.",
    "synonym": "Enthusiastic",
    "antonym": "Indifferent",
    "example": "The students were eager to learn about the new topic.",
    "category": "Daily Conversation",
    "difficulty": "Medium"
  },
  {
    "word": "Friendly",
    "meaning": "Kind and pleasant.",
    "synonym": "Amiable",
    "antonym": "Hostile",
    "example": "The neighbors are very friendly and welcoming.",
    "category": "Daily Conversation",
    "difficulty": "Easy"
  },
  {
    "word": "Grateful",
    "meaning": "Feeling or showing an appreciation of kindness; thankful.",
    "synonym": "Thankful",
    "antonym": "Ungrateful",
    "example": "I am so grateful for all your help.",
    "category": "Daily Conversation",
    "difficulty": "Easy"
  },
  {
    "word": "Happy",
    "meaning": "Feeling or showing pleasure or contentment.",
    "synonym": "Joyful",
    "antonym": "Sad",
    "example": "They are a very happy family.",
    "category": "Daily Conversation",
    "difficulty": "Easy"
  },
  {
    "word": "Interesting",
    "meaning": "Arousing curiosity or interest; holding or catching the attention.",
    "synonym": "Engaging",
    "antonym": "Boring",
    "example": "I read an interesting article about space travel today.",
    "category": "Daily Conversation",
    "difficulty": "Easy"
  },
  {
    "word": "Jealous",
    "meaning": "Feeling or showing envy of someone or their achievements and advantages.",
    "synonym": "Envious",
    "antonym": "Content",
    "example": "He felt jealous when his friend got a new car.",
    "category": "Daily Conversation",
    "difficulty": "Medium"
  },
  {
    "word": "Kind",
    "meaning": "Having or showing a friendly, generous, and considerate nature.",
    "synonym": "Generous",
    "antonym": "Cruel",
    "example": "It was very kind of you to lend me your umbrella.",
    "category": "Daily Conversation",
    "difficulty": "Easy"
  },
  {
    "word": "Lonely",
    "meaning": "Sad because one has no friends or company.",
    "synonym": "Solitary",
    "antonym": "Social",
    "example": "He felt lonely after his roommate moved out.",
    "category": "Daily Conversation",
    "difficulty": "Easy"
  },
  {
    "word": "Moody",
    "meaning": "(of a person) given to unpredictable changes of mood, especially sudden bouts of gloominess or sullenness.",
    "synonym": "Temperamental",
    "antonym": "Stable",
    "example": "Teenagers are often described as being moody.",
    "category": "Daily Conversation",
    "difficulty": "Medium"
  },
  {
    "word": "Nervous",
    "meaning": "Easily agitated or alarmed; tending to be anxious; highly strung.",
    "synonym": "Anxious",
    "antonym": "Confident",
    "example": "I always get nervous before a big presentation.",
    "category": "Daily Conversation",
    "difficulty": "Easy"
  },
  {
    "word": "Optimistic",
    "meaning": "Hopeful and confident about the future.",
    "synonym": "Positive",
    "antonym": "Pessimistic",
    "example": "She is optimistic that she will get the job.",
    "category": "Daily Conversation",
    "difficulty": "Medium"
  },
  {
    "word": "Patient",
    "meaning": "Able to accept or tolerate delays, problems, or suffering without becoming annoyed or anxious.",
    "synonym": "Tolerant",
    "antonym": "Impatient",
    "example": "You need to be patient when learning a new skill.",
    "category": "Daily Conversation",
    "difficulty": "Easy"
  },
  {
    "word": "Quiet",
    "meaning": "Making little or no noise.",
    "synonym": "Silent",
    "antonym": "Loud",
    "example": "The library is a quiet place to study.",
    "category": "Daily Conversation",
    "difficulty": "Easy"
  },
  {
    "word": "Relaxed",
    "meaning": "Free from tension and anxiety.",
    "synonym": "Calm",
    "antonym": "Stressed",
    "example": "I feel very relaxed after a long vacation.",
    "category": "Daily Conversation",
    "difficulty": "Easy"
  },
  {
    "word": "Serious",
    "meaning": "Acting or speaking sincerely and in earnest, rather than in a joking or half-hearted manner.",
    "synonym": "Solemn",
    "antonym": "Frivolous",
    "example": "He is a very serious student who studies hard.",
    "category": "Daily Conversation",
    "difficulty": "Easy"
  },
  {
    "word": "Tired",
    "meaning": "In need of sleep or rest; weary.",
    "synonym": "Exhausted",
    "antonym": "Energetic",
    "example": "I'm so tired I could sleep for twelve hours.",
    "category": "Daily Conversation",
    "difficulty": "Easy"
  },
  {
    "word": "Upset",
    "meaning": "Unhappy, disappointed, or worried.",
    "synonym": "Distressed",
    "antonym": "Happy",
    "example": "She was upset because she lost her phone.",
    "category": "Daily Conversation",
    "difficulty": "Easy"
  },
  {
    "word": "Vibrant",
    "meaning": "Full of energy and enthusiasm.",
    "synonym": "Lively",
    "antonym": "Dull",
    "example": "The city has a vibrant nightlife.",
    "category": "Daily Conversation",
    "difficulty": "Medium"
  },
  {
    "word": "Worried",
    "meaning": "Anxious or troubled about actual or potential problems.",
    "synonym": "Anxious",
    "antonym": "Carefree",
    "example": "Her parents were worried when she didn't come home on time.",
    "category": "Daily Conversation",
    "difficulty": "Easy"
  },
  {
    "word": "Youthful",
    "meaning": "Having the qualities that are typical of young people.",
    "synonym": "Young",
    "antonym": "Elderly",
    "example": "She has a very youthful appearance for her age.",
    "category": "Daily Conversation",
    "difficulty": "Medium"
  },
  {
    "word": "Zealous",
    "meaning": "Having or showing zeal.",
    "synonym": "Fervent",
    "antonym": "Apathetic",
    "example": "The zealous supporters cheered for their team.",
    "category": "Daily Conversation",
    "difficulty": "Hard"
  },
  {
    "word": "Awkward",
    "meaning": "Causing difficulty; hard to do or deal with.",
    "synonym": "Clumsy",
    "antonym": "Graceful",
    "example": "There was an awkward silence after he asked the question.",
    "category": "Daily Conversation",
    "difficulty": "Medium"
  },
  {
    "word": "Brave",
    "meaning": "Ready to face and endure danger or pain; showing courage.",
    "synonym": "Courageous",
    "antonym": "Cowardly",
    "example": "The brave firefighter rescued the cat from the tree.",
    "category": "Daily Conversation",
    "difficulty": "Easy"
  },
  {
    "word": "Careful",
    "meaning": "Making sure of avoiding potential danger, mishap, or harm; cautious.",
    "synonym": "Cautious",
    "antonym": "Careless",
    "example": "Be careful when you cross the street.",
    "category": "Daily Conversation",
    "difficulty": "Easy"
  },
  {
    "word": "Doubtful",
    "meaning": "Feeling uncertain about something.",
    "synonym": "Uncertain",
    "antonym": "Certain",
    "example": "It is doubtful whether the weather will improve tomorrow.",
    "category": "Daily Conversation",
    "difficulty": "Medium"
  },
  {
    "word": "Energetic",
    "meaning": "Showing or involving great activity or vitality.",
    "synonym": "Active",
    "antonym": "Lethargic",
    "example": "She is a very energetic person who loves to run.",
    "category": "Daily Conversation",
    "difficulty": "Easy"
  },
  {
    "word": "Famous",
    "meaning": "Known about by many people.",
    "synonym": "Well-known",
    "antonym": "Unknown",
    "example": "He is a famous actor who has won many awards.",
    "category": "Daily Conversation",
    "difficulty": "Easy"
  },
  {
    "word": "Gentle",
    "meaning": "Having or showing a mild, kind, or tender temperament or character.",
    "synonym": "Mild",
    "antonym": "Rough",
    "example": "She gave him a gentle reminder to finish his work.",
    "category": "Daily Conversation",
    "difficulty": "Easy"
  },
  {
    "word": "Healthy",
    "meaning": "In good health.",
    "synonym": "Fit",
    "antonym": "Sick",
    "example": "Eating fruits and vegetables is part of a healthy diet.",
    "category": "Daily Conversation",
    "difficulty": "Easy"
  },
  {
    "word": "Impatient",
    "meaning": "Having or showing a tendency to be quickly irritated or provoked.",
    "synonym": "Restless",
    "antonym": "Patient",
    "example": "He was impatient for the results of the test.",
    "category": "Daily Conversation",
    "difficulty": "Medium"
  },
  {
    "word": "Lucky",
    "meaning": "Having, bringing, or resulting from good luck.",
    "synonym": "Fortunate",
    "antonym": "Unlucky",
    "example": "I was lucky enough to win a trip to Hawaii.",
    "category": "Daily Conversation",
    "difficulty": "Easy"
  },
  {
    "word": "Messy",
    "meaning": "Untidy or dirty.",
    "synonym": "Untidy",
    "antonym": "Neat",
    "example": "His room is always messy.",
    "category": "Daily Conversation",
    "difficulty": "Easy"
  },
  {
    "word": "Noisy",
    "meaning": "Making a lot of noise.",
    "synonym": "Loud",
    "antonym": "Quiet",
    "example": "The street is very noisy during the day.",
    "category": "Daily Conversation",
    "difficulty": "Easy"
  },
  {
    "word": "Adaptable",
    "meaning": "Able to adjust to new conditions.",
    "synonym": "Flexible",
    "antonym": "Inflexible",
    "example": "In a fast-paced environment, being adaptable is a huge advantage.",
    "category": "Interview Preparation",
    "difficulty": "Medium"
  },
  {
    "word": "Analytical",
    "meaning": "Relating to or using analysis or logical reasoning.",
    "synonym": "Logical",
    "antonym": "Illogical",
    "example": "She has strong analytical skills and can solve complex problems.",
    "category": "Interview Preparation",
    "difficulty": "Hard"
  },
  {
    "word": "Committed",
    "meaning": "Feeling dedication and loyalty to a cause, activity, or job.",
    "synonym": "Dedicated",
    "antonym": "Uncommitted",
    "example": "The team is committed to delivering high-quality results.",
    "category": "Interview Preparation",
    "difficulty": "Medium"
  },
  {
    "word": "Creative",
    "meaning": "Relating to or involving the imagination or original ideas.",
    "synonym": "Imaginative",
    "antonym": "Unimaginative",
    "example": "The marketing team came up with a very creative campaign.",
    "category": "Interview Preparation",
    "difficulty": "Medium"
  },
  {
    "word": "Decisive",
    "meaning": "Having or showing the ability to make decisions quickly and effectively.",
    "synonym": "Determined",
    "antonym": "Indecisive",
    "example": "A leader must be decisive in times of crisis.",
    "category": "Interview Preparation",
    "difficulty": "Hard"
  },
  {
    "word": "Enthusiastic",
    "meaning": "Having or showing intense and eager enjoyment, interest, or approval.",
    "synonym": "Eager",
    "antonym": "Apathetic",
    "example": "She is very enthusiastic about the new project.",
    "category": "Interview Preparation",
    "difficulty": "Medium"
  },
  {
    "word": "Flexible",
    "meaning": "Able to change or be changed easily according to the situation.",
    "synonym": "Adaptable",
    "antonym": "Rigid",
    "example": "I have flexible working hours, which is very convenient.",
    "category": "Interview Preparation",
    "difficulty": "Medium"
  },
  {
    "word": "Goal-oriented",
    "meaning": "Focused on achieving a particular goal or result.",
    "synonym": "Driven",
    "antonym": "Aimless",
    "example": "We are looking for a goal-oriented individual for this sales role.",
    "category": "Interview Preparation",
    "difficulty": "Medium"
  },
  {
    "word": "Hardworking",
    "meaning": "Tending to work with energy and commitment; diligent.",
    "synonym": "Diligent",
    "antonym": "Lazy",
    "example": "He is a hardworking employee who always goes the extra mile.",
    "category": "Interview Preparation",
    "difficulty": "Easy"
  },
  {
    "word": "Independent",
    "meaning": "Free from outside control; not depending on another's authority.",
    "synonym": "Self-reliant",
    "antonym": "Dependent",
    "example": "She is an independent worker who doesn't need much supervision.",
    "category": "Interview Preparation",
    "difficulty": "Medium"
  },
  {
    "word": "Knowledgeable",
    "meaning": "Intelligent and well informed.",
    "synonym": "Informed",
    "antonym": "Ignorant",
    "example": "He is very knowledgeable about current market trends.",
    "category": "Interview Preparation",
    "difficulty": "Medium"
  },
  {
    "word": "Leader",
    "meaning": "The person who leads or commands a group, organization, or country.",
    "synonym": "Chief",
    "antonym": "Follower",
    "example": "She is a natural leader who inspires her team.",
    "category": "Interview Preparation",
    "difficulty": "Easy"
  },
  {
    "word": "Motivated",
    "meaning": "Provided with a motive; having an incentive or strong desire to do something.",
    "synonym": "Driven",
    "antonym": "Demotivated",
    "example": "The bonus scheme was designed to keep the staff motivated.",
    "category": "Interview Preparation",
    "difficulty": "Medium"
  },
  {
    "word": "Organized",
    "meaning": "Arranged in a systematic way.",
    "synonym": "Systematic",
    "antonym": "Disorganized",
    "example": "She is very organized and keeps track of all her tasks.",
    "category": "Interview Preparation",
    "difficulty": "Medium"
  },
  {
    "word": "Passionate",
    "meaning": "Having, showing, or caused by strong feelings or beliefs.",
    "synonym": "Enthusiastic",
    "antonym": "Indifferent",
    "example": "He is passionate about environmental conservation.",
    "category": "Interview Preparation",
    "difficulty": "Medium"
  },
  {
    "word": "Proactive",
    "meaning": "(of a person, policy, or action) creating or controlling a situation by causing something to happen rather than responding to it after it has happened.",
    "synonym": "Enterprising",
    "antonym": "Reactive",
    "example": "A proactive approach is needed to prevent future problems.",
    "category": "Interview Preparation",
    "difficulty": "Hard"
  },
  {
    "word": "Reliable",
    "meaning": "Consistently good in quality or performance; able to be trusted.",
    "synonym": "Dependable",
    "antonym": "Unreliable",
    "example": "She is a reliable employee who never misses a deadline.",
    "category": "Interview Preparation",
    "difficulty": "Medium"
  },
  {
    "word": "Self-disciplined",
    "meaning": "The ability to control one's feelings and overcome one's weaknesses.",
    "synonym": "Controlled",
    "antonym": "Indisciplined",
    "example": "Working from home requires being very self-disciplined.",
    "category": "Interview Preparation",
    "difficulty": "Hard"
  },
  {
    "word": "Team player",
    "meaning": "A person who plays or works well as a member of a team or group.",
    "synonym": "Collaborator",
    "antonym": "Individualist",
    "example": "We are looking for a team player who can work well with others.",
    "category": "Interview Preparation",
    "difficulty": "Easy"
  },
  {
    "word": "Versatile",
    "meaning": "Able to adapt or be adapted to many different functions or activities.",
    "synonym": "Multifaceted",
    "antonym": "Inflexible",
    "example": "He is a versatile actor who can play many different roles.",
    "category": "Interview Preparation",
    "difficulty": "Hard"
  },
  {
    "word": "Ambition",
    "meaning": "A strong desire to do or to achieve something, typically requiring determination and hard work.",
    "synonym": "Aspiration",
    "antonym": "Laziness",
    "example": "Her ambition is to become the CEO of the company.",
    "category": "Interview Preparation",
    "difficulty": "Medium"
  },
  {
    "word": "Career",
    "meaning": "An occupation undertaken for a significant period of a person's life and with opportunities for progress.",
    "synonym": "Profession",
    "antonym": "Hobby",
    "example": "He has had a very successful career in journalism.",
    "category": "Interview Preparation",
    "difficulty": "Easy"
  },
  {
    "word": "Experience",
    "meaning": "Practical contact with and observation of facts or events.",
    "synonym": "Practice",
    "antonym": "Inexperience",
    "example": "She has ten years of experience in the industry.",
    "category": "Interview Preparation",
    "difficulty": "Easy"
  },
  {
    "word": "Feedback",
    "meaning": "Information about reactions to a product, a person's performance of a task, etc., used as a basis for improvement.",
    "synonym": "Commentary",
    "antonym": "Silence",
    "example": "I would appreciate your feedback on my proposal.",
    "category": "Interview Preparation",
    "difficulty": "Medium"
  },
  {
    "word": "Integrity",
    "meaning": "The quality of being honest and having strong moral principles; moral uprightness.",
    "synonym": "Honesty",
    "antonym": "Dishonesty",
    "example": "He is a man of great integrity and is highly respected.",
    "category": "Interview Preparation",
    "difficulty": "Hard"
  },
  {
    "word": "Management",
    "meaning": "The process of dealing with or controlling things or people.",
    "synonym": "Administration",
    "antonym": "Disorder",
    "example": "The project failed due to poor management.",
    "category": "Interview Preparation",
    "difficulty": "Easy"
  },
  {
    "word": "Opportunity",
    "meaning": "A set of circumstances that makes it possible to do something.",
    "synonym": "Chance",
    "antonym": "Obstacle",
    "example": "This job is a great opportunity for career growth.",
    "category": "Interview Preparation",
    "difficulty": "Easy"
  },
  {
    "word": "Professionalism",
    "meaning": "The competence or skill expected of a professional.",
    "synonym": "Expertise",
    "antonym": "Amateurism",
    "example": "She handled the difficult situation with great professionalism.",
    "category": "Interview Preparation",
    "difficulty": "Hard"
  },
  {
    "word": "Qualification",
    "meaning": "A quality or accomplishment that makes someone suitable for a particular job or task.",
    "synonym": "Certificate",
    "antonym": "Incompetence",
    "example": "What are your qualifications for this position?",
    "category": "Interview Preparation",
    "difficulty": "Medium"
  },
  {
    "word": "Resilient",
    "meaning": "(of a person or animal) able to withstand or recover quickly from difficult conditions.",
    "synonym": "Tough",
    "antonym": "Fragile",
    "example": "She is a resilient person who never gives up.",
    "category": "Interview Preparation",
    "difficulty": "Hard"
  },
  {
    "word": "Skills",
    "meaning": "The ability to do something well; expertise.",
    "synonym": "Expertise",
    "antonym": "Inability",
    "example": "What specific skills do you bring to this role?",
    "category": "Interview Preparation",
    "difficulty": "Easy"
  },
  {
    "word": "Talent",
    "meaning": "Natural aptitude or skill.",
    "synonym": "Gift",
    "antonym": "Inability",
    "example": "She has a real talent for public speaking.",
    "category": "Interview Preparation",
    "difficulty": "Easy"
  },
  {
    "word": "Understanding",
    "meaning": "The ability to understand something; comprehension.",
    "synonym": "Comprehension",
    "antonym": "Misunderstanding",
    "example": "Do you have a clear understanding of your responsibilities?",
    "category": "Interview Preparation",
    "difficulty": "Easy"
  },
  {
    "word": "Visionary",
    "meaning": "(especially of a person) thinking about or planning the future with imagination or wisdom.",
    "synonym": "Inspired",
    "antonym": "Short-sighted",
    "example": "He is a visionary leader who changed the industry.",
    "category": "Interview Preparation",
    "difficulty": "Hard"
  },
  {
    "word": "Academic",
    "meaning": "Relating to education and scholarship.",
    "synonym": "Scholarly",
    "antonym": "Practical",
    "example": "She has achieved great academic success.",
    "category": "IELTS",
    "difficulty": "Medium"
  },
  {
    "word": "Beneficial",
    "meaning": "Favorable or advantageous; resulting in good.",
    "synonym": "Helpful",
    "antonym": "Harmful",
    "example": "Regular exercise is beneficial for your health.",
    "category": "IELTS",
    "difficulty": "Medium"
  },
  {
    "word": "Consequences",
    "meaning": "A result or effect of an action or condition.",
    "synonym": "Result",
    "antonym": "Cause",
    "example": "You must consider the consequences of your decisions.",
    "category": "IELTS",
    "difficulty": "Medium"
  },
  {
    "word": "Drastic",
    "meaning": "Likely to have a strong or far-reaching effect; radical and extreme.",
    "synonym": "Extreme",
    "antonym": "Mild",
    "example": "The government took drastic measures to reduce pollution.",
    "category": "IELTS",
    "difficulty": "Hard"
  },
  {
    "word": "Essential",
    "meaning": "Absolutely necessary; extremely important.",
    "synonym": "Crucial",
    "antonym": "Optional",
    "example": "Patience is essential for anyone who wants to learn a new language.",
    "category": "IELTS",
    "difficulty": "Medium"
  },
  {
    "word": "Fluctuating",
    "meaning": "Rise and fall irregularly in number or amount.",
    "synonym": "Varying",
    "antonym": "Stable",
    "example": "The price of gold is constantly fluctuating.",
    "category": "IELTS",
    "difficulty": "Hard"
  },
  {
    "word": "Gigantic",
    "meaning": "Of very great size or substance; huge.",
    "synonym": "Enormous",
    "antonym": "Tiny",
    "example": "The ship hit a gigantic iceberg in the middle of the night.",
    "category": "IELTS",
    "difficulty": "Medium"
  },
  {
    "word": "Hazardous",
    "meaning": "Risky; dangerous.",
    "synonym": "Dangerous",
    "antonym": "Safe",
    "example": "Working with chemicals can be hazardous to your health.",
    "category": "IELTS",
    "difficulty": "Hard"
  },
  {
    "word": "Impact",
    "meaning": "The action of one object coming forcibly into contact with another.",
    "synonym": "Influence",
    "antonym": "Insignificance",
    "example": "The new law will have a major impact on small businesses.",
    "category": "IELTS",
    "difficulty": "Medium"
  },
  {
    "word": "Justify",
    "meaning": "Show or prove to be right or reasonable.",
    "synonym": "Explain",
    "antonym": "Condemn",
    "example": "How can you justify such a high expense?",
    "category": "IELTS",
    "difficulty": "Medium"
  },
  {
    "word": "Keen",
    "meaning": "Having or showing eagerness or enthusiasm.",
    "synonym": "Eager",
    "antonym": "Apathetic",
    "example": "He is a keen student who always asks insightful questions.",
    "category": "IELTS",
    "difficulty": "Medium"
  },
  {
    "word": "Logical",
    "meaning": "Of or according to the rules of logic or formal argument.",
    "synonym": "Rational",
    "antonym": "Illogical",
    "example": "It is a logical conclusion based on the evidence.",
    "category": "IELTS",
    "difficulty": "Medium"
  },
  {
    "word": "Magnitude",
    "meaning": "The great size or extent of something.",
    "synonym": "Extents",
    "antonym": "Smallness",
    "example": "We did not realize the magnitude of the problem at first.",
    "category": "IELTS",
    "difficulty": "Hard"
  },
  {
    "word": "Notable",
    "meaning": "Worthy of attention or notice; remarkable.",
    "synonym": "Remarkable",
    "antonym": "Common",
    "example": "There has been a notable increase in sales this month.",
    "category": "IELTS",
    "difficulty": "Medium"
  },
  {
    "word": "Obvious",
    "meaning": "Easily perceived or understood; clear, self-evident, or apparent.",
    "synonym": "Clear",
    "antonym": "Hidden",
    "example": "It is obvious that she is not happy with the situation.",
    "category": "IELTS",
    "difficulty": "Easy"
  },
  {
    "word": "Precise",
    "meaning": "Marked by exactness and accuracy of expression or detail.",
    "synonym": "Exact",
    "antonym": "Vague",
    "example": "She gave a precise description of the suspect.",
    "category": "IELTS",
    "difficulty": "Medium"
  },
  {
    "word": "Quality",
    "meaning": "The standard of something as measured against other things of a similar kind.",
    "synonym": "Standard",
    "antonym": "Inferiority",
    "example": "We are committed to providing high-quality service.",
    "category": "IELTS",
    "difficulty": "Easy"
  },
  {
    "word": "Recent",
    "meaning": "Having happened, begun, or been done only a short time ago.",
    "synonym": "Lately",
    "antonym": "Old",
    "example": "There have been many recent developments in the field of medicine.",
    "category": "IELTS",
    "difficulty": "Easy"
  },
  {
    "word": "Significant",
    "meaning": "Sufficiently great or important to be worthy of attention; noteworthy.",
    "synonym": "Important",
    "antonym": "Minor",
    "example": "There has been a significant change in the company's strategy.",
    "category": "IELTS",
    "difficulty": "Medium"
  },
  {
    "word": "Tremendous",
    "meaning": "Very great in amount, scale, or intensity.",
    "synonym": "Enormous",
    "antonym": "Slight",
    "example": "The team put in a tremendous effort to win the game.",
    "category": "IELTS",
    "difficulty": "Medium"
  },
  {
    "word": "Ultimate",
    "meaning": "Being or happening at the end of a process; final.",
    "synonym": "Final",
    "antonym": "Initial",
    "example": "The ultimate goal of the project is to reduce costs.",
    "category": "IELTS",
    "difficulty": "Medium"
  },
  {
    "word": "Valid",
    "meaning": "(of an argument or point) having a sound basis in logic or fact; reasonable or cogent.",
    "synonym": "Reasonable",
    "antonym": "Invalid",
    "example": "You must have a valid reason for missing the meeting.",
    "category": "IELTS",
    "difficulty": "Medium"
  },
  {
    "word": "Widespread",
    "meaning": "Found or distributed over a large area or number of people.",
    "synonym": "Common",
    "antonym": "Limited",
    "example": "The use of smartphones is now widespread throughout the world.",
    "category": "IELTS",
    "difficulty": "Medium"
  },
  {
    "word": "Zenith",
    "meaning": "The time at which something is most powerful or successful.",
    "synonym": "Peak",
    "antonym": "Nadir",
    "example": "At the zenith of his career, he was the most famous man in the world.",
    "category": "IELTS",
    "difficulty": "Hard"
  },
  {
    "word": "Abundant",
    "meaning": "Existing or available in large quantities; plentiful.",
    "synonym": "Plentiful",
    "antonym": "Scarce",
    "example": "The area has an abundant supply of fresh water.",
    "category": "IELTS",
    "difficulty": "Medium"
  },
  {
    "word": "Brief",
    "meaning": "Of short duration.",
    "synonym": "Short",
    "antonym": "Long",
    "example": "She gave a brief summary of the report.",
    "category": "IELTS",
    "difficulty": "Easy"
  },
  {
    "word": "Complex",
    "meaning": "Consisting of many different and connected parts.",
    "synonym": "Complicated",
    "antonym": "Simple",
    "example": "The human brain is a very complex organ.",
    "category": "IELTS",
    "difficulty": "Medium"
  },
  {
    "word": "Diverse",
    "meaning": "Showing a great deal of variety; very different.",
    "synonym": "Varied",
    "antonym": "Similar",
    "example": "The city has a very diverse population.",
    "category": "IELTS",
    "difficulty": "Medium"
  },
  {
    "word": "Enormous",
    "meaning": "Very large in size, quantity, or extent.",
    "synonym": "Huge",
    "antonym": "Small",
    "example": "The project took an enormous amount of time and effort.",
    "category": "IELTS",
    "difficulty": "Medium"
  },
  {
    "word": "Fundamental",
    "meaning": "Forming a necessary base or core; of central importance.",
    "synonym": "Basic",
    "antonym": "Secondary",
    "example": "Freedom of speech is a fundamental human right.",
    "category": "IELTS",
    "difficulty": "Medium"
  },
  {
    "word": "Gradual",
    "meaning": "Taking place or progressing slowly or by degrees.",
    "synonym": "Slow",
    "antonym": "Sudden",
    "example": "There has been a gradual improvement in the economy.",
    "category": "IELTS",
    "difficulty": "Medium"
  },
  {
    "word": "Holistic",
    "meaning": "Characterized by comprehension of the parts of something as intimately interconnected and explicable only by reference to the whole.",
    "synonym": "Comprehensive",
    "antonym": "Segmented",
    "example": "The clinic takes a holistic approach to patient care.",
    "category": "IELTS",
    "difficulty": "Hard"
  },
  {
    "word": "Immense",
    "meaning": "Extremely large or great, especially in scale or degree.",
    "synonym": "Enormous",
    "antonym": "Tiny",
    "example": "The museum is an immense building that takes hours to explore.",
    "category": "IELTS",
    "difficulty": "Medium"
  },
  {
    "word": "Justification",
    "meaning": "The action of showing something to be right or reasonable.",
    "synonym": "Reason",
    "antonym": "Condemnation",
    "example": "There is no justification for such behavior.",
    "category": "IELTS",
    "difficulty": "Hard"
  },
  {
    "word": "Abstract",
    "meaning": "Existing in thought or as an idea but not having a physical or concrete existence.",
    "synonym": "Theoretical",
    "antonym": "Concrete",
    "example": "Love is an abstract concept that is difficult to define.",
    "category": "TOEFL",
    "difficulty": "Hard"
  },
  {
    "word": "Biased",
    "meaning": "Unfairly prejudiced for or against someone or something.",
    "synonym": "Prejudiced",
    "antonym": "Impartial",
    "example": "The news report was criticized for being biased.",
    "category": "TOEFL",
    "difficulty": "Medium"
  },
  {
    "word": "Coherent",
    "meaning": "(of an argument, theory, or policy) logical and consistent.",
    "synonym": "Logical",
    "antonym": "Incoherent",
    "example": "She failed to provide a coherent explanation for her actions.",
    "category": "TOEFL",
    "difficulty": "Hard"
  },
  {
    "word": "Distinguish",
    "meaning": "Recognize or treat (someone or something) as different.",
    "synonym": "Differentiate",
    "antonym": "Confuse",
    "example": "It is difficult to distinguish between the two types of birds.",
    "category": "TOEFL",
    "difficulty": "Medium"
  },
  {
    "word": "Evaluate",
    "meaning": "Form an idea of the amount, number, or value of; assess.",
    "synonym": "Assess",
    "antonym": "Ignore",
    "example": "The teacher will evaluate the students' work at the end of the term.",
    "category": "TOEFL",
    "difficulty": "Medium"
  },
  {
    "word": "Finite",
    "meaning": "Having limits or bounds.",
    "synonym": "Limited",
    "antonym": "Infinite",
    "example": "Natural resources are finite and must be used carefully.",
    "category": "TOEFL",
    "difficulty": "Hard"
  },
  {
    "word": "Guarantee",
    "meaning": "A formal promise or assurance (typically in writing) that certain conditions will be fulfilled.",
    "synonym": "Promise",
    "antonym": "Uncertainty",
    "example": "The product comes with a one-year guarantee.",
    "category": "TOEFL",
    "difficulty": "Medium"
  },
  {
    "word": "Hypothesis",
    "meaning": "A proposed explanation made on the basis of limited evidence as a starting point for further investigation.",
    "synonym": "Theory",
    "antonym": "Fact",
    "example": "The scientists are testing a new hypothesis about the cause of the disease.",
    "category": "TOEFL",
    "difficulty": "Hard"
  },
  {
    "word": "Illustrate",
    "meaning": "Provide (a book, newspaper, etc.) with pictures.",
    "synonym": "Explain",
    "antonym": "Obscure",
    "example": "The teacher used examples to illustrate the point.",
    "category": "TOEFL",
    "difficulty": "Medium"
  },
  {
    "word": "Judicial",
    "meaning": "Of, by, or appropriate to a court or judge.",
    "synonym": "Legal",
    "antonym": "Illegal",
    "example": "The case is currently going through the judicial system.",
    "category": "TOEFL",
    "difficulty": "Hard"
  },
  {
    "word": "Kinship",
    "meaning": "Blood relationship.",
    "synonym": "Relationship",
    "antonym": "Enmity",
    "example": "The two tribes share a strong sense of kinship.",
    "category": "TOEFL",
    "difficulty": "Hard"
  },
  {
    "word": "Liberal",
    "meaning": "Open to new behavior or opinions and willing to discard traditional values.",
    "synonym": "Open-minded",
    "antonym": "Conservative",
    "example": "He has very liberal views on education.",
    "category": "TOEFL",
    "difficulty": "Medium"
  },
  {
    "word": "Modify",
    "meaning": "Make partial or minor changes to (something), typically so as to improve it or to make it less extreme.",
    "synonym": "Alter",
    "antonym": "Maintain",
    "example": "We need to modify the design to meet the new requirements.",
    "category": "TOEFL",
    "difficulty": "Medium"
  },
  {
    "word": "Negate",
    "meaning": "Nullify; make ineffective.",
    "synonym": "Cancel",
    "antonym": "Confirm",
    "example": "The new evidence negates the previous theory.",
    "category": "TOEFL",
    "difficulty": "Hard"
  },
  {
    "word": "Objective",
    "meaning": "(of a person or their judgment) not influenced by personal feelings or opinions in considering and representing facts.",
    "synonym": "Impartial",
    "antonym": "Subjective",
    "example": "A judge must remain objective when hearing a case.",
    "category": "TOEFL",
    "difficulty": "Medium"
  },
  {
    "word": "Parallel",
    "meaning": "(of lines, planes, surfaces, or objects) side by side and having the same distance continuously between them.",
    "synonym": "Similar",
    "antonym": "Different",
    "example": "The two roads run parallel to each other.",
    "category": "TOEFL",
    "difficulty": "Medium"
  },
  {
    "word": "Quantitative",
    "meaning": "Relating to, measuring, or measured by the quantity of something rather than its quality.",
    "synonym": "Numerical",
    "antonym": "Qualitative",
    "example": "The study used quantitative methods to analyze the data.",
    "category": "TOEFL",
    "difficulty": "Hard"
  },
  {
    "word": "Rational",
    "meaning": "Based on or in accordance with reason or logic.",
    "synonym": "Logical",
    "antonym": "Irrational",
    "example": "He made a rational decision based on the available information.",
    "category": "TOEFL",
    "difficulty": "Hard"
  },
  {
    "word": "Sequence",
    "meaning": "A particular order in which related events, movements, or things follow each other.",
    "synonym": "Order",
    "antonym": "Disorder",
    "example": "The events happened in a logical sequence.",
    "category": "TOEFL",
    "difficulty": "Medium"
  },
  {
    "word": "Theory",
    "meaning": "A system of ideas intended to explain something, especially one based on general principles independent of the thing to be explained.",
    "synonym": "Hypothesis",
    "antonym": "Fact",
    "example": "Darwin's theory of evolution changed the way we think about the world.",
    "category": "TOEFL",
    "difficulty": "Medium"
  },
  {
    "word": "Utilize",
    "meaning": "Make practical and effective use of.",
    "synonym": "Use",
    "antonym": "Waste",
    "example": "We should utilize all the resources available to us.",
    "category": "TOEFL",
    "difficulty": "Medium"
  },
  {
    "word": "Variation",
    "meaning": "A change or difference in condition, amount, or level, typically with certain limits.",
    "synonym": "Change",
    "antonym": "Uniformity",
    "example": "There is a wide variation in temperatures throughout the year.",
    "category": "TOEFL",
    "difficulty": "Medium"
  },
  {
    "word": "Welfare",
    "meaning": "The health, happiness, and fortunes of a person or group.",
    "synonym": "Well-being",
    "antonym": "Misery",
    "example": "The government is responsible for the welfare of its citizens.",
    "category": "TOEFL",
    "difficulty": "Medium"
  },
  {
    "word": "Zeal",
    "meaning": "Great energy or enthusiasm in pursuit of a cause or an objective.",
    "synonym": "Enthusiasm",
    "antonym": "Apathy",
    "example": "His zeal for the project was infectious.",
    "category": "TOEFL",
    "difficulty": "Hard"
  },
  {
    "word": "Advocate",
    "meaning": "A person who publicly supports or recommends a particular cause or policy.",
    "synonym": "Supporter",
    "antonym": "Opponent",
    "example": "She is a strong advocate for women's rights.",
    "category": "TOEFL",
    "difficulty": "Medium"
  },
  {
    "word": "Barrier",
    "meaning": "A fence or other obstacle that prevents movement or access.",
    "synonym": "Obstacle",
    "antonym": "Opening",
    "example": "Language barriers can make communication difficult.",
    "category": "TOEFL",
    "difficulty": "Easy"
  },
  {
    "word": "Capacity",
    "meaning": "The maximum amount that something can contain.",
    "synonym": "Volume",
    "antonym": "Empty",
    "example": "The stadium was filled to capacity for the concert.",
    "category": "TOEFL",
    "difficulty": "Medium"
  },
  {
    "word": "Decline",
    "meaning": "(typically of something regarded as good) become smaller, fewer, or less; decrease.",
    "synonym": "Decrease",
    "antonym": "Increase",
    "example": "There has been a decline in the number of smokers in recent years.",
    "category": "TOEFL",
    "difficulty": "Medium"
  },
  {
    "word": "Evolve",
    "meaning": "Develop gradually, especially from a simple to a more complex form.",
    "synonym": "Develop",
    "antonym": "Stagnate",
    "example": "Technology continues to evolve at a rapid pace.",
    "category": "TOEFL",
    "difficulty": "Medium"
  },
  {
    "word": "Facilitate",
    "meaning": "Make (an action or process) easy or easier.",
    "synonym": "Ease",
    "antonym": "Hinder",
    "example": "The new software is designed to facilitate communication between teams.",
    "category": "TOEFL",
    "difficulty": "Hard"
  },
  {
    "word": "Generate",
    "meaning": "Cause (a physical or chemical process) to occur.",
    "synonym": "Produce",
    "antonym": "Destroy",
    "example": "The solar panels generate electricity from sunlight.",
    "category": "TOEFL",
    "difficulty": "Medium"
  },
  {
    "word": "Hence",
    "meaning": "As a consequence; for this reason.",
    "synonym": "Therefore",
    "antonym": "Regardless",
    "example": "The data is inaccurate, hence the results are unreliable.",
    "category": "TOEFL",
    "difficulty": "Hard"
  },
  {
    "word": "Imply",
    "meaning": "Strongly suggest the truth or existence of (something not expressly stated).",
    "synonym": "Suggest",
    "antonym": "State",
    "example": "His words imply that he is not coming to the party.",
    "category": "TOEFL",
    "difficulty": "Medium"
  },
  {
    "word": "Journal",
    "meaning": "A newspaper or magazine that deals with a particular subject or professional activity.",
    "synonym": "Diary",
    "antonym": "N/A",
    "example": "He published his research in a prestigious scientific journal.",
    "category": "TOEFL",
    "difficulty": "Medium"
  },
  {
    "word": "Aberration",
    "meaning": "A departure from what is normal, usual, or expected, typically one that is unwelcome.",
    "synonym": "Anomaly",
    "antonym": "Normality",
    "example": "The failure of the system was a temporary aberration.",
    "category": "Competitive Exams",
    "difficulty": "Hard"
  },
  {
    "word": "Belligerent",
    "meaning": "Hostile and aggressive.",
    "synonym": "Aggressive",
    "antonym": "Peaceful",
    "example": "The customer became belligerent when his request was denied.",
    "category": "Competitive Exams",
    "difficulty": "Hard"
  },
  {
    "word": "Cacophony",
    "meaning": "A harsh, discordant mixture of sounds.",
    "synonym": "Din",
    "antonym": "Harmony",
    "example": "A cacophony of car horns woke me up this morning.",
    "category": "Competitive Exams",
    "difficulty": "Hard"
  },
  {
    "word": "Deference",
    "meaning": "Humble submission and respect.",
    "synonym": "Respect",
    "antonym": "Disrespect",
    "example": "He addressed the judge with great deference.",
    "category": "Competitive Exams",
    "difficulty": "Hard"
  },
  {
    "word": "Ephemeral",
    "meaning": "Lasting for a very short time.",
    "synonym": "Short-lived",
    "antonym": "Permanent",
    "example": "The beauty of the sunset is ephemeral.",
    "category": "Competitive Exams",
    "difficulty": "Hard"
  },
  {
    "word": "Fastidious",
    "meaning": "Very attentive to and concerned about accuracy and detail.",
    "synonym": "Meticulous",
    "antonym": "Careless",
    "example": "He is very fastidious about keeping his workspace clean.",
    "category": "Competitive Exams",
    "difficulty": "Hard"
  },
  {
    "word": "Garrulous",
    "meaning": "Excessively talkative, especially on trivial matters.",
    "synonym": "Talkative",
    "antonym": "Taciturn",
    "example": "The garrulous old man told us stories for hours.",
    "category": "Competitive Exams",
    "difficulty": "Hard"
  },
  {
    "word": "Harangue",
    "meaning": "A lengthy and aggressive speech.",
    "synonym": "Tirade",
    "antonym": "N/A",
    "example": "The politician gave a long harangue against the new policy.",
    "category": "Competitive Exams",
    "difficulty": "Hard"
  },
  {
    "word": "Iconoclast",
    "meaning": "A person who attacks cherished beliefs or institutions.",
    "synonym": "Rebel",
    "antonym": "Conformist",
    "example": "The artist was known as an iconoclast who challenged traditional styles.",
    "category": "Competitive Exams",
    "difficulty": "Hard"
  },
  {
    "word": "Juxtapose",
    "meaning": "Place or deal with close together for contrasting effect.",
    "synonym": "Contrast",
    "antonym": "Separate",
    "example": "The exhibition juxtaposes modern and traditional art.",
    "category": "Competitive Exams",
    "difficulty": "Hard"
  },
  {
    "word": "Laconic",
    "meaning": "(of a person, speech, or style of writing) using very few words.",
    "synonym": "Brief",
    "antonym": "Verbose",
    "example": "He gave a laconic reply to the question.",
    "category": "Competitive Exams",
    "difficulty": "Hard"
  },
  {
    "word": "Malleable",
    "meaning": "(of a metal or other material) able to be hammered or pressed permanently out of shape without breaking or cracking.",
    "synonym": "Flexible",
    "antonym": "Rigid",
    "example": "Gold is a very malleable metal.",
    "category": "Competitive Exams",
    "difficulty": "Hard"
  },
  {
    "word": "Nefarious",
    "meaning": "(typically of an action or activity) wicked or criminal.",
    "synonym": "Wicked",
    "antonym": "Good",
    "example": "The villain had a nefarious plot to take over the city.",
    "category": "Competitive Exams",
    "difficulty": "Hard"
  },
  {
    "word": "Obsequious",
    "meaning": "Obedient or attentive to an excessive or servile degree.",
    "synonym": "Servile",
    "antonym": "Arrogant",
    "example": "The waiter was obsequious, constantly checking if we needed anything.",
    "category": "Competitive Exams",
    "difficulty": "Hard"
  },
  {
    "word": "Paradigm",
    "meaning": "A typical example or pattern of something; a model.",
    "synonym": "Model",
    "antonym": "N/A",
    "example": "The new discovery led to a paradigm shift in the field of science.",
    "category": "Competitive Exams",
    "difficulty": "Hard"
  },
  {
    "word": "Querulous",
    "meaning": "Complaining in a petulant or whining manner.",
    "synonym": "Complaining",
    "antonym": "Cheerful",
    "example": "The querulous customer was never satisfied with the service.",
    "category": "Competitive Exams",
    "difficulty": "Hard"
  },
  {
    "word": "Reticent",
    "meaning": "Not revealing one's thoughts or feelings readily.",
    "synonym": "Reserved",
    "antonym": "Talkative",
    "example": "He is very reticent about his private life.",
    "category": "Competitive Exams",
    "difficulty": "Hard"
  },
  {
    "word": "Sycophant",
    "meaning": "A person who acts obsequiously toward someone important in order to gain advantage.",
    "synonym": "Flatterer",
    "antonym": "Critic",
    "example": "He is surrounded by sycophants who always agree with him.",
    "category": "Competitive Exams",
    "difficulty": "Hard"
  },
  {
    "word": "Taciturn",
    "meaning": "(of a person) reserved or uncommunicative in speech; saying little.",
    "synonym": "Quiet",
    "antonym": "Garrulous",
    "example": "The taciturn farmer rarely spoke to his neighbors.",
    "category": "Competitive Exams",
    "difficulty": "Hard"
  },
  {
    "word": "Ubiquitous",
    "meaning": "Present, appearing, or found everywhere.",
    "synonym": "Omnipresent",
    "antonym": "Rare",
    "example": "Cell phones are ubiquitous in modern society.",
    "category": "Competitive Exams",
    "difficulty": "Hard"
  },
  {
    "word": "Venerate",
    "meaning": "Regard with great respect; revere.",
    "synonym": "Revere",
    "antonym": "Despise",
    "example": "In some cultures, people venerate their ancestors.",
    "category": "Competitive Exams",
    "difficulty": "Hard"
  },
  {
    "word": "Wanton",
    "meaning": "(of a cruel or violent action) deliberate and unprovoked.",
    "synonym": "Deliberate",
    "antonym": "Justifiable",
    "example": "The act of wanton vandalism was condemned by everyone.",
    "category": "Competitive Exams",
    "difficulty": "Hard"
  },
  {
    "word": "Xerophilous",
    "meaning": "(of a plant or animal) adapted to a very dry environment.",
    "synonym": "Dry-loving",
    "antonym": "Hydrophilous",
    "example": "Cacti are xerophilous plants that thrive in deserts.",
    "category": "Competitive Exams",
    "difficulty": "Hard"
  },
  {
    "word": "Yoke",
    "meaning": "A wooden crosspiece that is fastened over the necks of two animals and attached to the plow or cart that they are to pull.",
    "synonym": "Burden",
    "antonym": "Freedom",
    "example": "The people lived under the yoke of a cruel dictator for years.",
    "category": "Competitive Exams",
    "difficulty": "Hard"
  },
  {
    "word": "Zephyr",
    "meaning": "A soft gentle breeze.",
    "synonym": "Breeze",
    "antonym": "Gale",
    "example": "A warm zephyr blew through the open window.",
    "category": "Competitive Exams",
    "difficulty": "Hard"
  },
  {
    "word": "Alacrity",
    "meaning": "Brisk and cheerful readiness.",
    "synonym": "Eagerness",
    "antonym": "Apathy",
    "example": "She accepted the invitation with alacrity.",
    "category": "Competitive Exams",
    "difficulty": "Hard"
  },
  {
    "word": "Burgeon",
    "meaning": "Begin to grow or increase rapidly; flourish.",
    "synonym": "Flourish",
    "antonym": "Decline",
    "example": "The new city is burgeoning with new businesses.",
    "category": "Competitive Exams",
    "difficulty": "Hard"
  },
  {
    "word": "Capricious",
    "meaning": "Given to sudden and unaccountable changes of mood or behavior.",
    "synonym": "Unpredictable",
    "antonym": "Stable",
    "example": "The capricious weather made it difficult to plan the outdoor event.",
    "category": "Competitive Exams",
    "difficulty": "Hard"
  },
  {
    "word": "Desultory",
    "meaning": "Lacking a plan, purpose, or enthusiasm.",
    "synonym": "Aimless",
    "antonym": "Methodical",
    "example": "He had a desultory conversation with his neighbor.",
    "category": "Competitive Exams",
    "difficulty": "Hard"
  },
  {
    "word": "Enervate",
    "meaning": "Cause (someone) to feel drained of energy or vitality; weaken.",
    "synonym": "Weaken",
    "antonym": "Energize",
    "example": "The hot sun enervated the hikers.",
    "category": "Competitive Exams",
    "difficulty": "Hard"
  },
  {
    "word": "Foment",
    "meaning": "Instigate or stir up (an undesirable or violent sentiment or course of action).",
    "synonym": "Instigate",
    "antonym": "Quell",
    "example": "The protesters were accused of trying to foment a revolution.",
    "category": "Competitive Exams",
    "difficulty": "Hard"
  },
  {
    "word": "Gainsay",
    "meaning": "Deny or contradict (a fact or statement).",
    "synonym": "Deny",
    "antonym": "Confirm",
    "example": "It is difficult to gainsay the evidence presented in the case.",
    "category": "Competitive Exams",
    "difficulty": "Hard"
  },
  {
    "word": "Hubris",
    "meaning": "Excessive pride or self-confidence.",
    "synonym": "Arrogance",
    "antonym": "Humility",
    "example": "The politician's hubris led to his downfall.",
    "category": "Competitive Exams",
    "difficulty": "Hard"
  },
  {
    "word": "Inchoate",
    "meaning": "Just begun and so not fully formed or developed; rudimentary.",
    "synonym": "Rudimentary",
    "antonym": "Developed",
    "example": "The project is still in its inchoate stages.",
    "category": "Competitive Exams",
    "difficulty": "Hard"
  },
  {
    "word": "Loquacious",
    "meaning": "Tending to talk a great deal; talkative.",
    "synonym": "Talkative",
    "antonym": "Taciturn",
    "example": "The loquacious student was always getting into trouble for talking in class.",
    "category": "Competitive Exams",
    "difficulty": "Hard"
  },
  {
    "word": "Mendacious",
    "meaning": "Not telling the truth; lying.",
    "synonym": "Lying",
    "antonym": "Truthful",
    "example": "The mendacious politician was caught in several lies.",
    "category": "Competitive Exams",
    "difficulty": "Hard"
  },
  {
    "word": "Nadir",
    "meaning": "The lowest point in the fortunes of a person or organization.",
    "synonym": "Low point",
    "antonym": "Zenith",
    "example": "The failure of the project was the nadir of his career.",
    "category": "Competitive Exams",
    "difficulty": "Hard"
  },
  {
    "word": "Opaque",
    "meaning": "Not able to be seen through; not transparent.",
    "synonym": "Unclear",
    "antonym": "Transparent",
    "example": "The windows were opaque with dust.",
    "category": "Competitive Exams",
    "difficulty": "Hard"
  },
  {
    "word": "Paucity",
    "meaning": "The presence of something only in small or insufficient quantities or amounts; scarcity.",
    "synonym": "Scarcity",
    "antonym": "Abundance",
    "example": "There is a paucity of evidence to support the claim.",
    "category": "Competitive Exams",
    "difficulty": "Hard"
  },
  {
    "word": "Quiescent",
    "meaning": "In a state or period of inactivity or dormancy.",
    "synonym": "Inactive",
    "antonym": "Active",
    "example": "The volcano has been quiescent for hundreds of years.",
    "category": "Competitive Exams",
    "difficulty": "Hard"
  },
  {
    "word": "Recalcitrant",
    "meaning": "Having an obstinately uncooperative attitude toward authority or discipline.",
    "synonym": "Uncooperative",
    "antonym": "Cooperative",
    "example": "The recalcitrant student refused to follow the teacher's instructions.",
    "category": "Competitive Exams",
    "difficulty": "Hard"
  },
  {
    "word": "Salubrious",
    "meaning": "Health-giving; healthy.",
    "synonym": "Healthy",
    "antonym": "Unhealthy",
    "example": "The mountain air is very salubrious.",
    "category": "Competitive Exams",
    "difficulty": "Hard"
  },
  {
    "word": "Umbrage",
    "meaning": "Offense or annoyance.",
    "synonym": "Offense",
    "antonym": "Satisfaction",
    "example": "He took umbrage at the suggestion that he was cheating.",
    "category": "Competitive Exams",
    "difficulty": "Hard"
  },
  {
    "word": "Vacillate",
    "meaning": "Alternate or waver between different opinions or actions; be indecisive.",
    "synonym": "Waver",
    "antonym": "Decide",
    "example": "He vacillated between the two job offers for weeks.",
    "category": "Competitive Exams",
    "difficulty": "Hard"
  },
  {
    "word": "Wary",
    "meaning": "Feeling or showing caution about possible dangers or problems.",
    "synonym": "Cautious",
    "antonym": "Trusting",
    "example": "Be wary of strangers who offer you free gifts.",
    "category": "Competitive Exams",
    "difficulty": "Hard"
  },
  {
    "word": "Yelp",
    "meaning": "A short sharp cry, especially of pain or alarm.",
    "synonym": "Cry",
    "antonym": "Silence",
    "example": "The dog gave a yelp when I accidentally stepped on its tail.",
    "category": "Competitive Exams",
    "difficulty": "Hard"
  },
  {
    "word": "Zealot",
    "meaning": "A person who is fanatical and uncompromising in pursuit of their religious, political, or other ideals.",
    "synonym": "Fanatic",
    "antonym": "Moderate",
    "example": "He is a religious zealot who spends all his time at the temple.",
    "category": "Competitive Exams",
    "difficulty": "Hard"
  },
  {
    "word": "Abstain",
    "meaning": "Restrain oneself from doing or enjoying something.",
    "synonym": "Refrain",
    "antonym": "Indulge",
    "example": "He chose to abstain from alcohol for health reasons.",
    "category": "Competitive Exams",
    "difficulty": "Hard"
  },
  {
    "word": "Banal",
    "meaning": "So lacking in originality as to be obvious and boring.",
    "synonym": "Trite",
    "antonym": "Original",
    "example": "The movie had a banal plot that we had seen many times before.",
    "category": "Competitive Exams",
    "difficulty": "Hard"
  },
  {
    "word": "Castigate",
    "meaning": "Reprimand (someone) severely.",
    "synonym": "Reprimand",
    "antonym": "Praise",
    "example": "The teacher castigated the students for their poor performance.",
    "category": "Competitive Exams",
    "difficulty": "Hard"
  },
  {
    "word": "Diatribe",
    "meaning": "A forceful and bitter verbal attack against someone or something.",
    "synonym": "Attack",
    "antonym": "Praise",
    "example": "The editor wrote a diatribe against the new government policy.",
    "category": "Competitive Exams",
    "difficulty": "Hard"
  },
  {
    "word": "Ebullient",
    "meaning": "Cheerful and full of energy.",
    "synonym": "Exuberant",
    "antonym": "Depressed",
    "example": "She was ebullient after receiving the good news.",
    "category": "Competitive Exams",
    "difficulty": "Hard"
  },
  {
    "word": "Facetious",
    "meaning": "Treating serious issues with deliberately inappropriate humor.",
    "synonym": "Joking",
    "antonym": "Serious",
    "example": "He made a facetious remark about the situation.",
    "category": "Competitive Exams",
    "difficulty": "Hard"
  },
  {
    "word": "Glib",
    "meaning": "(of words or the person speaking them) fluent and voluble but insincere and shallow.",
    "synonym": "Slick",
    "antonym": "Sincere",
    "example": "The glib salesman tried to convince us to buy the car.",
    "category": "Competitive Exams",
    "difficulty": "Hard"
  },
  {
    "word": "Haughty",
    "meaning": "Arrogantly superior and disdainful.",
    "synonym": "Arrogant",
    "antonym": "Humble",
    "example": "The haughty woman refused to speak to the waiter.",
    "category": "Competitive Exams",
    "difficulty": "Hard"
  },
  {
    "word": "Inimical",
    "meaning": "Tending to obstruct or harm.",
    "synonym": "Harmful",
    "antonym": "Friendly",
    "example": "High interest rates are inimical to economic growth.",
    "category": "Competitive Exams",
    "difficulty": "Hard"
  },
  {
    "word": "Jocular",
    "meaning": "Fond of or characterized by joking; humorous or playful.",
    "synonym": "Playful",
    "antonym": "Solemn",
    "example": "He has a very jocular personality and is always making people laugh.",
    "category": "Competitive Exams",
    "difficulty": "Hard"
  },
  {
    "word": "Kindle",
    "meaning": "Light or set on fire.",
    "synonym": "Ignite",
    "antonym": "Extinguish",
    "example": "We used dry leaves to kindle the campfire.",
    "category": "Competitive Exams",
    "difficulty": "Hard"
  },
  {
    "word": "Luminous",
    "meaning": "Full of or shedding light; bright or shining, especially in the dark.",
    "synonym": "Bright",
    "antonym": "Dark",
    "example": "The watch has a luminous dial that is easy to read at night.",
    "category": "Competitive Exams",
    "difficulty": "Hard"
  },
  {
    "word": "Mitigate",
    "meaning": "Make less severe, serious, or painful.",
    "synonym": "Alleviate",
    "antonym": "Aggravate",
    "example": "The new laws are designed to mitigate the effects of climate change.",
    "category": "Competitive Exams",
    "difficulty": "Hard"
  },
  {
    "word": "Nascent",
    "meaning": "(especially of a process or organization) just coming into existence and beginning to display signs of future potential.",
    "synonym": "Emerging",
    "antonym": "Dying",
    "example": "The nascent space tourism industry is still in its early stages.",
    "category": "Competitive Exams",
    "difficulty": "Hard"
  },
  {
    "word": "Obviate",
    "meaning": "Remove (a need or difficulty).",
    "synonym": "Preclude",
    "antonym": "Require",
    "example": "The new software obviates the need for manual data entry.",
    "category": "Competitive Exams",
    "difficulty": "Hard"
  },
  {
    "word": "Pious",
    "meaning": "Devoutly religious.",
    "synonym": "Devout",
    "antonym": "Impious",
    "example": "She is a pious woman who attends church every Sunday.",
    "category": "Competitive Exams",
    "difficulty": "Hard"
  },
  {
    "word": "Qualm",
    "meaning": "An uneasy feeling of doubt, worry, or fear, especially about one's own conduct; a misgiving.",
    "synonym": "Misgiving",
    "antonym": "Confidence",
    "example": "He had no qualms about lying to his boss.",
    "category": "Competitive Exams",
    "difficulty": "Hard"
  },
  {
    "word": "Rarefy",
    "meaning": "Make or become less dense or solid.",
    "synonym": "Thin",
    "antonym": "Condense",
    "example": "The mountain air begins to rarefy at high altitudes.",
    "category": "Competitive Exams",
    "difficulty": "Hard"
  },
  {
    "word": "Satiate",
    "meaning": "Satisfied to the full; sated.",
    "synonym": "Satisfy",
    "antonym": "Starve",
    "example": "The buffet dinner was enough to satiate everyone's hunger.",
    "category": "Competitive Exams",
    "difficulty": "Hard"
  },
  {
    "word": "Tenuous",
    "meaning": "Very slender or fine; insubstantial.",
    "synonym": "Weak",
    "antonym": "Strong",
    "example": "The link between the two events is tenuous at best.",
    "category": "Competitive Exams",
    "difficulty": "Hard"
  },
  {
    "word": "Usury",
    "meaning": "The illegal action or practice of lending money at unreasonably high rates of interest.",
    "synonym": "Exploitation",
    "antonym": "Generosity",
    "example": "The loan sharks were arrested for usury.",
    "category": "Competitive Exams",
    "difficulty": "Hard"
  },
  {
    "word": "Vex",
    "meaning": "Make (someone) feel annoyed, frustrated, or worried, especially with trivial matters.",
    "synonym": "Annoy",
    "antonym": "Please",
    "example": "The constant noise from the construction site began to vex the neighbors.",
    "category": "Competitive Exams",
    "difficulty": "Hard"
  },
  {
    "word": "Winsome",
    "meaning": "Attractive or appealing in appearance or character.",
    "synonym": "Charming",
    "antonym": "Unattractive",
    "example": "She has a winsome smile that wins everyone over.",
    "category": "Competitive Exams",
    "difficulty": "Hard"
  },
  {
    "word": "Yore",
    "meaning": "Of long ago or former times (used in nostalgic or mock-nostalgic recollection).",
    "synonym": "Past",
    "antonym": "Present",
    "example": "In the days of yore, knights fought for their honor.",
    "category": "Competitive Exams",
    "difficulty": "Hard"
  },
  {
    "word": "Zen",
    "meaning": "A state of calm attentiveness in which one's actions are guided by intuition rather than by conscious effort.",
    "synonym": "Calm",
    "antonym": "Agitation",
    "example": "He reached a state of zen while meditating in the garden.",
    "category": "Competitive Exams",
    "difficulty": "Hard"
  },
  {
    "word": "Agility",
    "meaning": "Ability to move quickly and easily.",
    "synonym": "Nimbleness",
    "antonym": "Clumsiness",
    "example": "The cat showed great agility in jumping between the rooftops.",
    "category": "IELTS",
    "difficulty": "Medium"
  },
  {
    "word": "Bland",
    "meaning": "Lacking strong features or characteristics and therefore uninteresting.",
    "synonym": "Dull",
    "antonym": "Spicy",
    "example": "The soup was a bit bland and needed more salt.",
    "category": "Daily Conversation",
    "difficulty": "Easy"
  },
  {
    "word": "Cherish",
    "meaning": "Protect and care for (someone) lovingly.",
    "synonym": "Treasure",
    "antonym": "Neglect",
    "example": "I will always cherish the memories of our childhood.",
    "category": "Daily Conversation",
    "difficulty": "Medium"
  },
  {
    "word": "Deficit",
    "meaning": "The amount by which something, especially a sum of money, is too small.",
    "synonym": "Shortfall",
    "antonym": "Surplus",
    "example": "The country is facing a large budget deficit.",
    "category": "Business English",
    "difficulty": "Hard"
  },
  {
    "word": "Elegant",
    "meaning": "Pleasingly graceful and stylish in appearance or manner.",
    "synonym": "Graceful",
    "antonym": "Clumsy",
    "example": "She wore an elegant black dress to the party.",
    "category": "Daily Conversation",
    "difficulty": "Medium"
  },
  {
    "word": "Fragile",
    "meaning": "(of an object) easily broken or damaged.",
    "synonym": "Delicate",
    "antonym": "Strong",
    "example": "Be careful with that vase; it's very fragile.",
    "category": "Daily Conversation",
    "difficulty": "Easy"
  },
  {
    "word": "Grandeur",
    "meaning": "Splendor and impressiveness, especially of appearance or style.",
    "synonym": "Splendor",
    "antonym": "Simplicity",
    "example": "The grandeur of the palace left everyone speechless.",
    "category": "IELTS",
    "difficulty": "Hard"
  },
  {
    "word": "Hypocrisy",
    "meaning": "The practice of claiming to have moral standards or beliefs to which one's own behavior does not conform.",
    "synonym": "Insincerity",
    "antonym": "Sincerity",
    "example": "His actions were a clear example of hypocrisy.",
    "category": "Competitive Exams",
    "difficulty": "Hard"
  },
  {
    "word": "Inevitable",
    "meaning": "Certain to happen; unavoidable.",
    "synonym": "Unavoidable",
    "antonym": "Avoidable",
    "example": "Change is inevitable in life.",
    "category": "IELTS",
    "difficulty": "Medium"
  },
  {
    "word": "Juvenile",
    "meaning": "For or relating to young people.",
    "synonym": "Youthful",
    "antonym": "Adult",
    "example": "The court deals with cases involving juvenile offenders.",
    "category": "TOEFL",
    "difficulty": "Medium"
  },
  {
    "word": "Kindred",
    "meaning": "One's family and relations.",
    "synonym": "Related",
    "antonym": "Unrelated",
    "example": "They are kindred spirits who share many common interests.",
    "category": "TOEFL",
    "difficulty": "Hard"
  },
  {
    "word": "Lethargic",
    "meaning": "Affected by lethargy; sluggish and apathetic.",
    "synonym": "Sluggish",
    "antonym": "Energetic",
    "example": "The hot weather made everyone feel lethargic.",
    "category": "IELTS",
    "difficulty": "Hard"
  },
  {
    "word": "Mutual",
    "meaning": "(of a feeling or action) experienced or done by each of two or more parties toward the other or others.",
    "synonym": "Reciprocal",
    "antonym": "One-sided",
    "example": "They have a mutual respect for each other's work.",
    "category": "Daily Conversation",
    "difficulty": "Medium"
  },
  {
    "word": "Noble",
    "meaning": "Belonging to a hereditary class with high social or political status; aristocratic.",
    "synonym": "Aristocratic",
    "antonym": "Common",
    "example": "He was born into a noble family.",
    "category": "TOEFL",
    "difficulty": "Medium"
  },
  {
    "word": "Obsolete",
    "meaning": "No longer produced or used; out of date.",
    "synonym": "Outdated",
    "antonym": "Modern",
    "example": "Typewriters are now largely obsolete.",
    "category": "TOEFL",
    "difficulty": "Hard"
  },
  {
    "word": "Plausible",
    "meaning": "(of an argument or statement) seeming reasonable or probable.",
    "synonym": "Reasonable",
    "antonym": "Implausible",
    "example": "The explanation sounded plausible to the jury.",
    "category": "IELTS",
    "difficulty": "Hard"
  },
  {
    "word": "Quota",
    "meaning": "A fixed share of something that a person or group is entitled to receive or is bound to contribute.",
    "synonym": "Share",
    "antonym": "N/A",
    "example": "The factory has a daily production quota.",
    "category": "Business English",
    "difficulty": "Medium"
  },
  {
    "word": "Radiant",
    "meaning": "Sending out light; shining or glowing brightly.",
    "synonym": "Bright",
    "antonym": "Dull",
    "example": "She looked radiant on her wedding day.",
    "category": "Daily Conversation",
    "difficulty": "Medium"
  },
  {
    "word": "Scarcity",
    "meaning": "The state of being scarce or in short supply; shortage.",
    "synonym": "Shortage",
    "antonym": "Abundance",
    "example": "The scarcity of food led to a humanitarian crisis.",
    "category": "IELTS",
    "difficulty": "Medium"
  },
  {
    "word": "Trivial",
    "meaning": "Of little value or importance.",
    "synonym": "Unimportant",
    "antonym": "Significant",
    "example": "We should not waste time on trivial matters.",
    "category": "Daily Conversation",
    "difficulty": "Medium"
  },
  {
    "word": "Unique",
    "meaning": "Being the only one of its kind; unlike anything else.",
    "synonym": "Individual",
    "antonym": "Common",
    "example": "Every person has a unique fingerprint.",
    "category": "Daily Conversation",
    "difficulty": "Easy"
  },
  {
    "word": "Vague",
    "meaning": "Of uncertain, indefinite, or unclear character or meaning.",
    "synonym": "Unclear",
    "antonym": "Clear",
    "example": "He gave a vague description of the suspect.",
    "category": "Daily Conversation",
    "difficulty": "Medium"
  },
  {
    "word": "Yearn",
    "meaning": "Have an intense feeling of longing for something, typically something that one has lost or been separated from.",
    "synonym": "Long",
    "antonym": "Dislike",
    "example": "She yearns for the day when she can return to her home country.",
    "category": "Daily Conversation",
    "difficulty": "Hard"
  },
  {
    "word": "Zesty",
    "meaning": "Having a strong, pleasant, and somewhat spicy flavor.",
    "synonym": "Spicy",
    "antonym": "Bland",
    "example": "The salad dressing has a zesty lemon flavor.",
    "category": "Daily Conversation",
    "difficulty": "Medium"
  },
  {
    "word": "Bae",
    "meaning": "A term of endearment for a partner; stands for 'before anyone else'.",
    "synonym": "Sweetheart",
    "antonym": "N/A",
    "example": "I'm going to the movies with my bae tonight.",
    "category": "Slang & Idioms",
    "difficulty": "Easy"
  },
  {
    "word": "Ghost",
    "meaning": "To suddenly end all contact with someone without explanation.",
    "synonym": "Abandon",
    "antonym": "Engage",
    "example": "He ghosted her after their third date.",
    "category": "Slang & Idioms",
    "difficulty": "Easy"
  },
  {
    "word": "Flex",
    "meaning": "To show off one's status, wealth, or achievements.",
    "synonym": "Boast",
    "antonym": "Humble",
    "example": "He was flexing his new expensive watch on social media.",
    "category": "Slang & Idioms",
    "difficulty": "Easy"
  },
  {
    "word": "Empirical",
    "meaning": "Based on observation or experience rather than theory.",
    "synonym": "Experimental",
    "antonym": "Theoretical",
    "example": "They provided empirical evidence to support their findings.",
    "category": "Academic English",
    "difficulty": "Hard"
  },
  {
    "word": "Scalability",
    "meaning": "The capacity to be changed in size or scale.",
    "synonym": "Adaptability",
    "antonym": "Rigidity",
    "example": "The cloud platform offers great scalability for growing businesses.",
    "category": "Technology & IT",
    "difficulty": "Medium"
  },
  {
    "word": "Encryption",
    "meaning": "The process of converting information or data into a code.",
    "synonym": "Coding",
    "antonym": "Decryption",
    "example": "Data encryption is essential for secure online transactions.",
    "category": "Technology & IT",
    "difficulty": "Medium"
  },
  {
    "word": "Salty",
    "meaning": "Being upset, angry, or bitter, especially over something minor.",
    "synonym": "Bitter",
    "antonym": "Happy",
    "example": "He's still salty because he lost the game.",
    "category": "Slang & Idioms",
    "difficulty": "Easy"
  },
  {
    "word": "No cap",
    "meaning": "Used to emphasize that one is not lying; 'seriously'.",
    "synonym": "Truthfully",
    "antonym": "Lying",
    "example": "That was the best burger I've ever had, no cap.",
    "category": "Slang & Idioms",
    "difficulty": "Easy"
  },
  {
    "word": "Clout",
    "meaning": "Influence or power, especially in politics or social media.",
    "synonym": "Influence",
    "antonym": "Obscurity",
    "example": "She's just doing it for the clout.",
    "category": "Slang & Idioms",
    "difficulty": "Medium"
  },
  {
    "word": "Sus",
    "meaning": "Short for suspicious; giving the impression of being dishonest or strange.",
    "synonym": "Suspicious",
    "antonym": "Trustworthy",
    "example": "That guy over there is acting a bit sus.",
    "category": "Slang & Idioms",
    "difficulty": "Easy"
  },
  {
    "word": "Bet",
    "meaning": "An expression of agreement or approval; 'okay' or 'challenge accepted'.",
    "synonym": "Agreed",
    "antonym": "Refuse",
    "example": "A: 'Want to go grab pizza?' B: 'Bet.'",
    "category": "Slang & Idioms",
    "difficulty": "Easy"
  },
  {
    "word": "Methodology",
    "meaning": "A system of methods used in a particular area of study or activity.",
    "synonym": "Procedure",
    "antonym": "N/A",
    "example": "The methodology used in the study was clearly outlined in the report.",
    "category": "Academic English",
    "difficulty": "Hard"
  },
  {
    "word": "Literature Review",
    "meaning": "A comprehensive summary of previous research on a topic.",
    "synonym": "Overview",
    "antonym": "N/A",
    "example": "The first chapter of the thesis is a literature review of the field.",
    "category": "Academic English",
    "difficulty": "Medium"
  },
  {
    "word": "Algorithm",
    "meaning": "A process or set of rules to be followed in calculations or other problem-solving operations, especially by a computer.",
    "synonym": "Procedure",
    "antonym": "N/A",
    "example": "The social media algorithm determines what content you see.",
    "category": "Technology & IT",
    "difficulty": "Hard"
  },
  {
    "word": "Blockchain",
    "meaning": "A system in which a record of transactions made in bitcoin or another cryptocurrency are maintained across several computers.",
    "synonym": "Ledger",
    "antonym": "N/A",
    "example": "Blockchain technology is the foundation of many cryptocurrencies.",
    "category": "Technology & IT",
    "difficulty": "Hard"
  },
  {
    "word": "Cloud Computing",
    "meaning": "The practice of using a network of remote servers hosted on the internet to store, manage, and process data.",
    "synonym": "Online storage",
    "antonym": "On-premise",
    "example": "Many businesses are moving their data to cloud computing for better accessibility.",
    "category": "Technology & IT",
    "difficulty": "Medium"
  },
  {
    "word": "Cybersecurity",
    "meaning": "The state of being protected against the criminal or unauthorized use of electronic data.",
    "synonym": "Data protection",
    "antonym": "Vulnerability",
    "example": "Cybersecurity is a top priority for modern organizations.",
    "category": "Technology & IT",
    "difficulty": "Hard"
  },
  {
    "word": "API",
    "meaning": "Application Programming Interface; a set of functions and procedures allowing the creation of applications that access the features or data of an operating system, application, or other service.",
    "synonym": "Interface",
    "antonym": "N/A",
    "example": "The developer used an API to integrate the weather data into the app.",
    "category": "Technology & IT",
    "difficulty": "Hard"
  },
  {
    "word": "Tea",
    "meaning": "Gossip or juicy information about someone's personal life.",
    "synonym": "Gossip",
    "antonym": "Silence",
    "example": "So, what's the tea? Tell me everything!",
    "category": "Slang & Idioms",
    "difficulty": "Easy"
  },
  {
    "word": "Vibe Check",
    "meaning": "A process by which a person or situation is assessed to see if they are 'okay' or 'cool'.",
    "synonym": "Assessment",
    "antonym": "N/A",
    "example": "We need to do a vibe check on the new roommate.",
    "category": "Slang & Idioms",
    "difficulty": "Easy"
  },
  {
    "word": "Living Rent Free",
    "meaning": "When you can't stop thinking about something, usually something annoying or funny.",
    "synonym": "Obsession",
    "antonym": "Forgotten",
    "example": "That embarrassing moment is living rent free in my head.",
    "category": "Slang & Idioms",
    "difficulty": "Medium"
  },
  {
    "word": "Slay",
    "meaning": "To do something exceptionally well or to look very attractive.",
    "synonym": "Excel",
    "antonym": "Fail",
    "example": "You absolutely slayed that presentation!",
    "category": "Slang & Idioms",
    "difficulty": "Easy"
  },
  {
    "word": "Main Character Energy",
    "meaning": "Behaving like the lead in a movie; being confident and centered.",
    "synonym": "Confidence",
    "antonym": "Shyness",
    "example": "She's walking into the room with serious main character energy.",
    "category": "Slang & Idioms",
    "difficulty": "Medium"
  },
  {
    "word": "Synthesize",
    "meaning": "To combine different ideas, styles, or systems into a single whole.",
    "synonym": "Combine",
    "antonym": "Separate",
    "example": "You need to synthesize the information from all three sources for your essay.",
    "category": "Academic English",
    "difficulty": "Hard"
  },
  {
    "word": "Nuance",
    "meaning": "A subtle difference in or shade of meaning, expression, or sound.",
    "synonym": "Subtlety",
    "antonym": "Obviousness",
    "example": "A good translator understands the nuances of both languages.",
    "category": "Academic English",
    "difficulty": "Hard"
  },
  {
    "word": "Ambigous",
    "meaning": "Open to more than one interpretation; not having one obvious meaning.",
    "synonym": "Unclear",
    "antonym": "Clear",
    "example": "The results of the study were somewhat ambiguous.",
    "category": "Academic English",
    "difficulty": "Medium"
  },
  {
    "word": "Correlation",
    "meaning": "A mutual relationship or connection between two or more things.",
    "synonym": "Connection",
    "antonym": "Difference",
    "example": "There is a strong correlation between poverty and poor health.",
    "category": "Academic English",
    "difficulty": "Medium"
  },
  {
    "word": "Data Mining",
    "meaning": "The practice of examining large databases in order to generate new information.",
    "synonym": "Data analysis",
    "antonym": "N/A",
    "example": "Companies use data mining to understand customer buying patterns.",
    "category": "Technology & IT",
    "difficulty": "Hard"
  },
  {
    "word": "Open Source",
    "meaning": "Denoting software for which the original source code is made freely available and may be redistributed and modified.",
    "synonym": "Free software",
    "antonym": "Proprietary",
    "example": "Linux is a famous example of open source software.",
    "category": "Technology & IT",
    "difficulty": "Medium"
  },
  {
    "word": "Bandwidth",
    "meaning": "The range of frequencies within a given band used for transmitting a signal.",
    "synonym": "Capacity",
    "antonym": "N/A",
    "example": "I don't have the mental bandwidth to deal with this right now.",
    "category": "Technology & IT",
    "difficulty": "Medium"
  },
  {
    "word": "Backend",
    "meaning": "The part of a computer system or application that is not directly accessed by the user, typically responsible for data storage.",
    "synonym": "Server-side",
    "antonym": "Frontend",
    "example": "Our backend is built with Node.js and Express.",
    "category": "Technology & IT",
    "difficulty": "Medium"
  },
  {
    "word": "Accountability",
    "meaning": "The fact or condition of being accountable; responsibility.",
    "synonym": "Responsibility",
    "antonym": "Irresponsibility",
    "example": "There is a lack of accountability in the department.",
    "category": "Business English",
    "difficulty": "Hard"
  },
  {
    "word": "Agenda",
    "meaning": "A list of items to be discussed at a formal meeting.",
    "synonym": "Schedule",
    "antonym": "Disorder",
    "example": "The chair called for any additions to the agenda.",
    "category": "Business English",
    "difficulty": "Easy"
  },
  {
    "word": "Benchmark",
    "meaning": "A standard or point of reference against which things may be compared.",
    "synonym": "Standard",
    "antonym": "Guess",
    "example": "The company set a new benchmark for quality in the industry.",
    "category": "Business English",
    "difficulty": "Medium"
  },
  {
    "word": "Collaboration",
    "meaning": "The action of working with someone to produce something.",
    "synonym": "Cooperation",
    "antonym": "Resistance",
    "example": "The project was a successful collaboration between two departments.",
    "category": "Business English",
    "difficulty": "Medium"
  },
  {
    "word": "Deadline",
    "meaning": "The latest time or date by which something should be completed.",
    "synonym": "Limit",
    "antonym": "Continuance",
    "example": "We are working hard to meet the Friday deadline.",
    "category": "Business English",
    "difficulty": "Easy"
  },
  {
    "word": "Efficiency",
    "meaning": "The state or quality of being efficient.",
    "synonym": "Productivity",
    "antonym": "Incompetence",
    "example": "The new machinery has increased the factory's efficiency.",
    "category": "Business English",
    "difficulty": "Medium"
  },
  {
    "word": "Forecast",
    "meaning": "A prediction or estimate of future events.",
    "synonym": "Prediction",
    "antonym": "Hindsight",
    "example": "The sales forecast for the next quarter looks promising.",
    "category": "Business English",
    "difficulty": "Medium"
  },
  {
    "word": "Growth",
    "meaning": "The process of increasing in size, amount, or importance.",
    "synonym": "Expansion",
    "antonym": "Decline",
    "example": "The company has experienced rapid growth over the last year.",
    "category": "Business English",
    "difficulty": "Easy"
  },
  {
    "word": "Hierarchy",
    "meaning": "A system in which members of an organization are ranked according to status.",
    "synonym": "Ranking",
    "antonym": "Equality",
    "example": "The corporate hierarchy can be difficult to navigate for new employees.",
    "category": "Business English",
    "difficulty": "Hard"
  },
  {
    "word": "Innovation",
    "meaning": "The action or process of innovating.",
    "synonym": "Modernization",
    "antonym": "Stagnation",
    "example": "Innovation is key to staying competitive in the tech market.",
    "category": "Business English",
    "difficulty": "Medium"
  },
  {
    "word": "Jargon",
    "meaning": "Special words or expressions used by a profession that are difficult for others to understand.",
    "synonym": "Terminology",
    "antonym": "Standard",
    "example": "Legal jargon can be very confusing for non-lawyers.",
    "category": "Business English",
    "difficulty": "Medium"
  },
  {
    "word": "KPI",
    "meaning": "Key Performance Indicator; a quantifiable measure of performance.",
    "synonym": "Metric",
    "antonym": "N/A",
    "example": "Customer satisfaction is one of our most important KPIs.",
    "category": "Business English",
    "difficulty": "Hard"
  },
  {
    "word": "Leverage",
    "meaning": "Use something to maximum advantage.",
    "synonym": "Utilize",
    "antonym": "Waste",
    "example": "We should leverage our strengths to gain more market share.",
    "category": "Business English",
    "difficulty": "Hard"
  },
  {
    "word": "Milestone",
    "meaning": "A significant stage or event in the development of something.",
    "synonym": "Landmark",
    "antonym": "Trivia",
    "example": "Completing the prototype was a major milestone for the team.",
    "category": "Business English",
    "difficulty": "Medium"
  },
  {
    "word": "Negotiation",
    "meaning": "Discussion aimed at reaching an agreement.",
    "synonym": "Bargaining",
    "antonym": "Disagreement",
    "example": "The contract is currently under negotiation.",
    "category": "Business English",
    "difficulty": "Medium"
  },
  {
    "word": "Outsourcing",
    "meaning": "Obtaining goods or services from an outside or foreign supplier.",
    "synonym": "Contracting",
    "antonym": "Insourcing",
    "example": "The company is considering outsourcing its IT support.",
    "category": "Business English",
    "difficulty": "Medium"
  },
  {
    "word": "Profitability",
    "meaning": "The degree to which a business or activity yields profit or financial gain.",
    "synonym": "Lucrativeness",
    "antonym": "Loss",
    "example": "We need to improve the profitability of our online store.",
    "category": "Business English",
    "difficulty": "Medium"
  },
  {
    "word": "Quarter",
    "meaning": "A period of three months in a corporate financial year.",
    "synonym": "Term",
    "antonym": "N/A",
    "example": "The fourth quarter earnings exceeded expectations.",
    "category": "Business English",
    "difficulty": "Easy"
  },
  {
    "word": "Revenue",
    "meaning": "Income, especially when of a company or organization.",
    "synonym": "Income",
    "antonym": "Expenditure",
    "example": "The company's annual revenue reached one billion dollars.",
    "category": "Business English",
    "difficulty": "Medium"
  },
  {
    "word": "Stakeholder",
    "meaning": "A person with an interest or concern in something, especially a business.",
    "synonym": "Partner",
    "antonym": "Outsider",
    "example": "All stakeholders were invited to the town hall meeting.",
    "category": "Business English",
    "difficulty": "Hard"
  },
  {
    "word": "Transparency",
    "meaning": "The condition of being transparent.",
    "synonym": "Clarity",
    "antonym": "Opacity",
    "example": "The management promised more transparency in their decision-making.",
    "category": "Business English",
    "difficulty": "Medium"
  },
  {
    "word": "Venture",
    "meaning": "A risky or daring journey or undertaking.",
    "synonym": "Enterprise",
    "antonym": "Security",
    "example": "The new joint venture will focus on renewable energy.",
    "category": "Business English",
    "difficulty": "Medium"
  },
  {
    "word": "Workflow",
    "meaning": "The sequence of industrial, administrative, or other processes through which a piece of work passes.",
    "synonym": "Process",
    "antonym": "Stoppage",
    "example": "We need to streamline our workflow to be more productive.",
    "category": "Business English",
    "difficulty": "Medium"
  },
  {
    "word": "Yield",
    "meaning": "Produce or provide a natural, agricultural, or industrial product.",
    "synonym": "Profit",
    "antonym": "Shortfall",
    "example": "The investment is expected to yield high returns.",
    "category": "Business English",
    "difficulty": "Medium"
  },
  {
    "word": "Absorb",
    "meaning": "To take in something, such as liquid or information.",
    "synonym": "Soak up",
    "antonym": "Eject",
    "example": "Plants absorb nutrients from the soil.",
    "category": "Daily Conversation",
    "difficulty": "Medium"
  },
  {
    "word": "Admire",
    "meaning": "To find someone or something attractive and pleasant to look at.",
    "synonym": "Appreciate",
    "antonym": "Scorn",
    "example": "I really admire your courage.",
    "category": "Daily Conversation",
    "difficulty": "Easy"
  },
  {
    "word": "Afford",
    "meaning": "To be able to buy or do something because you have enough money or time.",
    "synonym": "Pay for",
    "antonym": "Lack",
    "example": "I can't afford to buy a new car.",
    "category": "Daily Conversation",
    "difficulty": "Easy"
  },
  {
    "word": "Amazing",
    "meaning": "Causing great surprise or wonder; astonishing.",
    "synonym": "Wonderful",
    "antonym": "Ordinary",
    "example": "The view from the top of the mountain was amazing.",
    "category": "Daily Conversation",
    "difficulty": "Easy"
  },
  {
    "word": "Announce",
    "meaning": "To make something known or tell people about something officially.",
    "synonym": "Declare",
    "antonym": "Hide",
    "example": "The government has announced a new plan to reduce taxes.",
    "category": "Daily Conversation",
    "difficulty": "Easy"
  },
  {
    "word": "Anxious",
    "meaning": "Worried and nervous.",
    "synonym": "Worried",
    "antonym": "Calm",
    "example": "I'm feeling a bit anxious about the exam.",
    "category": "Daily Conversation",
    "difficulty": "Medium"
  },
  {
    "word": "Awkward",
    "meaning": "Difficult to use, do, or deal with.",
    "synonym": "Difficult",
    "antonym": "Easy",
    "example": "There was an awkward silence.",
    "category": "Daily Conversation",
    "difficulty": "Medium"
  },
  {
    "word": "Belief",
    "meaning": "The feeling of being certain that something exists or is true.",
    "synonym": "Faith",
    "antonym": "Doubt",
    "example": "It's my belief that things will get better.",
    "category": "Daily Conversation",
    "difficulty": "Easy"
  },
  {
    "word": "Brief",
    "meaning": "Lasting only a short time or containing few words.",
    "synonym": "Short",
    "antonym": "Long",
    "example": "I'll give you a brief summary of the report.",
    "category": "Daily Conversation",
    "difficulty": "Easy"
  },
  {
    "word": "Brilliant",
    "meaning": "Extremely intelligent or skilled.",
    "synonym": "Bright",
    "antonym": "Dull",
    "example": "He's a brilliant scientist.",
    "category": "Daily Conversation",
    "difficulty": "Easy"
  },
  {
    "word": "Cautious",
    "meaning": "A cautious person avoids unnecessary risks.",
    "synonym": "Careful",
    "antonym": "Reckless",
    "example": "He's very cautious with his money.",
    "category": "Daily Conversation",
    "difficulty": "Medium"
  },
  {
    "word": "Cheerful",
    "meaning": "Happy and positive.",
    "synonym": "Happy",
    "antonym": "Sad",
    "example": "She's always so cheerful.",
    "category": "Daily Conversation",
    "difficulty": "Easy"
  },
  {
    "word": "Comfortable",
    "meaning": "Provides a pleasant state of being relaxed and free from pain.",
    "synonym": "Cozy",
    "antonym": "Uncomfortable",
    "example": "These shoes are very comfortable.",
    "category": "Daily Conversation",
    "difficulty": "Easy"
  },
  {
    "word": "Curious",
    "meaning": "Interested in learning about people or things around you.",
    "synonym": "Inquisitive",
    "antonym": "Indifferent",
    "example": "I was curious to know what would happen next.",
    "category": "Daily Conversation",
    "difficulty": "Easy"
  },
  {
    "word": "Decline",
    "meaning": "To gradually become less, worse, or lower.",
    "synonym": "Decrease",
    "antonym": "Increase",
    "example": "There has been a decline in the number of smokers.",
    "category": "Daily Conversation",
    "difficulty": "Medium"
  },
  {
    "word": "Deserve",
    "meaning": "To have earned something or be given something because of your actions or qualities.",
    "synonym": "Earn",
    "antonym": "N/A",
    "example": "You deserve a rest after all that hard work.",
    "category": "Daily Conversation",
    "difficulty": "Easy"
  },
  {
    "word": "Elegant",
    "meaning": "Graceful and attractive in appearance or behavior.",
    "synonym": "Graceful",
    "antonym": "Clumsy",
    "example": "She looked very elegant in her new dress.",
    "category": "Daily Conversation",
    "difficulty": "Medium"
  },
  {
    "word": "Enormous",
    "meaning": "Extremely large.",
    "synonym": "Huge",
    "antonym": "Tiny",
    "example": "The project took an enormous amount of time.",
    "category": "Daily Conversation",
    "difficulty": "Easy"
  },
  {
    "word": "Frequent",
    "meaning": "Happening often.",
    "synonym": "Common",
    "antonym": "Rare",
    "example": "The two friends are in frequent contact.",
    "category": "Daily Conversation",
    "difficulty": "Easy"
  },
  {
    "word": "Grateful",
    "meaning": "Feeling or showing an appreciation of kindness; thankful.",
    "synonym": "Thankful",
    "antonym": "Ungrateful",
    "example": "I'm grateful for your help.",
    "category": "Daily Conversation",
    "difficulty": "Easy"
  },
  {
    "word": "Hesitate",
    "meaning": "To pause before you do or say something, often because you are uncertain or nervous.",
    "synonym": "Pause",
    "antonym": "Continue",
    "example": "She hesitated before answering the question.",
    "category": "Daily Conversation",
    "difficulty": "Medium"
  },
  {
    "word": "Ignorant",
    "meaning": "Not having enough knowledge, understanding, or information about something.",
    "synonym": "Uninformed",
    "antonym": "Knowledgeable",
    "example": "Many people are ignorant of their rights.",
    "category": "Daily Conversation",
    "difficulty": "Medium"
  },
  {
    "word": "Inspire",
    "meaning": "To make someone feel that they want to do something and can do it.",
    "synonym": "Motivate",
    "antonym": "Discourage",
    "example": "His success inspired me to work harder.",
    "category": "Daily Conversation",
    "difficulty": "Medium"
  },
  {
    "word": "Jealous",
    "meaning": "Upset and angry because someone that you love seems interested in another person.",
    "synonym": "Envious",
    "antonym": "Confident",
    "example": "He's very jealous of his brother's success.",
    "category": "Daily Conversation",
    "difficulty": "Easy"
  },
  {
    "word": "Loyal",
    "meaning": "Firm and not changing in your friendship with or support for a person or an organization.",
    "synonym": "Faithful",
    "antonym": "Disloyal",
    "example": "He's a loyal friend.",
    "category": "Daily Conversation",
    "difficulty": "Easy"
  },
  {
    "word": "Magnificent",
    "meaning": "Very good, beautiful, or deserving to be admired.",
    "synonym": "Splendid",
    "antonym": "Ordinary",
    "example": "The view from the top is magnificent.",
    "category": "Daily Conversation",
    "difficulty": "Medium"
  },
  {
    "word": "Objective",
    "meaning": "Something that you plan to do or achieve.",
    "synonym": "Goal",
    "antonym": "N/A",
    "example": "My main objective is to learn English.",
    "category": "Daily Conversation",
    "difficulty": "Easy"
  },
  {
    "word": "Patience",
    "meaning": "The ability to wait, or to continue doing something despite difficulties.",
    "synonym": "Tolerance",
    "antonym": "Impatience",
    "example": "Learning to play the piano takes a lot of patience.",
    "category": "Daily Conversation",
    "difficulty": "Easy"
  },
  {
    "word": "Reject",
    "meaning": "To refuse to accept, use, or believe something or someone.",
    "synonym": "Refuse",
    "antonym": "Accept",
    "example": "The company rejected my application.",
    "category": "Daily Conversation",
    "difficulty": "Easy"
  },
  {
    "word": "Sincere",
    "meaning": "(of a person, feelings, or behavior) not pretending or lying; honest.",
    "synonym": "Honest",
    "antonym": "Insincere",
    "example": "Please accept my sincere apologies.",
    "category": "Daily Conversation",
    "difficulty": "Medium"
  },
  {
    "word": "Accommodate",
    "meaning": "To provide someone with a place to live or to be stored in.",
    "synonym": "House",
    "antonym": "Reject",
    "example": "The hotel can accommodate up to 500 guests.",
    "category": "IELTS",
    "difficulty": "Medium"
  },
  {
    "word": "Accumulate",
    "meaning": "To collect a large number of things over a long period of time.",
    "synonym": "Gather",
    "antonym": "Disperse",
    "example": "We've accumulated a lot of junk over the years.",
    "category": "IELTS",
    "difficulty": "Medium"
  },
  {
    "word": "Advocate",
    "meaning": "To publicly support or suggest an idea, development, or way of doing something.",
    "synonym": "Support",
    "antonym": "Oppose",
    "example": "She advocates taking a more long-term view.",
    "category": "IELTS",
    "difficulty": "Hard"
  },
  {
    "word": "Aggregate",
    "meaning": "Something formed by adding together several amounts or things.",
    "synonym": "Total",
    "antonym": "Individual",
    "example": "The aggregate demand for the product is increasing.",
    "category": "IELTS",
    "difficulty": "Hard"
  },
  {
    "word": "Alleviate",
    "meaning": "To make something bad such as pain or problems less severe.",
    "synonym": "Relieve",
    "antonym": "Aggravate",
    "example": "The drugs did nothing to alleviate her pain.",
    "category": "IELTS",
    "difficulty": "Hard"
  },
  {
    "word": "Ambiguous",
    "meaning": "Having or expressing more than one possible meaning, sometimes intentionally.",
    "synonym": "Unclear",
    "antonym": "Clear",
    "example": "The results of the study were somewhat ambiguous.",
    "category": "IELTS",
    "difficulty": "Hard"
  },
  {
    "word": "Amend",
    "meaning": "To change the words of a text, especially a law or a legal document.",
    "synonym": "Modify",
    "antonym": "Maintain",
    "example": "The law was amended to include new safety regulations.",
    "category": "IELTS",
    "difficulty": "Medium"
  },
  {
    "word": "Analogy",
    "meaning": "A comparison between things that have similar features, often used to help explain a principle or idea.",
    "synonym": "Comparison",
    "antonym": "Difference",
    "example": "He drew an analogy between the brain and a computer.",
    "category": "IELTS",
    "difficulty": "Hard"
  },
  {
    "word": "Appreciate",
    "meaning": "To understand a situation and realize that it is important.",
    "synonym": "Understand",
    "antonym": "Overlook",
    "example": "We appreciate that you are busy.",
    "category": "IELTS",
    "difficulty": "Medium"
  },
  {
    "word": "Arbitrary",
    "meaning": "Based on chance rather than being planned or based on reason.",
    "synonym": "Random",
    "antonym": "Reasoned",
    "example": "The decision was completely arbitrary.",
    "category": "IELTS",
    "difficulty": "Hard"
  },
  {
    "word": "Aspect",
    "meaning": "One part of a situation, problem, subject, etc.",
    "synonym": "Feature",
    "antonym": "Whole",
    "example": "Which aspect of the job do you enjoy most?",
    "category": "IELTS",
    "difficulty": "Medium"
  },
  {
    "word": "Assemble",
    "meaning": "To come together in a single place or bring parts together in a single group.",
    "synonym": "Gather",
    "antonym": "Disperse",
    "example": "The students assembled in the hall.",
    "category": "IELTS",
    "difficulty": "Medium"
  },
  {
    "word": "Assess",
    "meaning": "To judge or decide the amount, value, quality, or importance of something.",
    "synonym": "Evaluate",
    "antonym": "Ignore",
    "example": "We need to assess the situation.",
    "category": "IELTS",
    "difficulty": "Medium"
  },
  {
    "word": "Assign",
    "meaning": "To give a particular job or piece of work to someone.",
    "synonym": "Allocate",
    "antonym": "Keep",
    "example": "The teacher assigned each student a topic.",
    "category": "IELTS",
    "difficulty": "Medium"
  },
  {
    "word": "Assist",
    "meaning": "To help.",
    "synonym": "Help",
    "antonym": "Hinder",
    "example": "I'll assist you with your luggage.",
    "category": "IELTS",
    "difficulty": "Easy"
  },
  {
    "word": "Assume",
    "meaning": "To accept something to be true without question or proof.",
    "synonym": "Presume",
    "antonym": "Know",
    "example": "I assume that you are coming to the party.",
    "category": "IELTS",
    "difficulty": "Medium"
  },
  {
    "word": "Assure",
    "meaning": "To tell someone confidently that something is true, so that they do not worry.",
    "synonym": "Guarantee",
    "antonym": "Doubt",
    "example": "I can assure you that everything will be fine.",
    "category": "IELTS",
    "difficulty": "Medium"
  },
  {
    "word": "Attach",
    "meaning": "To fasten, join, or connect something.",
    "synonym": "Join",
    "antonym": "Separate",
    "example": "I'll attach the file to the email.",
    "category": "IELTS",
    "difficulty": "Easy"
  },
  {
    "word": "Attain",
    "meaning": "To reach or succeed in getting something.",
    "synonym": "Achieve",
    "antonym": "Fail",
    "example": "He attained his goal of becoming a doctor.",
    "category": "IELTS",
    "difficulty": "Hard"
  },
  {
    "word": "Attitude",
    "meaning": "A feeling or opinion about something or someone, or a way of behaving that is caused by this.",
    "synonym": "Mindset",
    "antonym": "N/A",
    "example": "She has a very positive attitude.",
    "category": "IELTS",
    "difficulty": "Easy"
  },
  {
    "word": "Attribute",
    "meaning": "A quality or characteristic that someone or something has.",
    "synonym": "Quality",
    "antonym": "N/A",
    "example": "Patience is one of his best attributes.",
    "category": "IELTS",
    "difficulty": "Hard"
  },
  {
    "word": "Author",
    "meaning": "The writer of a book, article, play, etc.",
    "synonym": "Writer",
    "antonym": "Reader",
    "example": "Who is the author of this book?",
    "category": "IELTS",
    "difficulty": "Easy"
  },
  {
    "word": "Authority",
    "meaning": "The moral or legal right or ability to control.",
    "synonym": "Power",
    "antonym": "Weakness",
    "example": "He has the authority to sign the contract.",
    "category": "IELTS",
    "difficulty": "Medium"
  },
  {
    "word": "Automate",
    "meaning": "To make a process in a factory or office operate by machines or computers, in order to reduce the amount of work done by humans.",
    "synonym": "Computerize",
    "antonym": "Manual",
    "example": "The factory has been automated.",
    "category": "IELTS",
    "difficulty": "Medium"
  },
  {
    "word": "Available",
    "meaning": "Able to be bought or used.",
    "synonym": "Accessible",
    "antonym": "Unavailable",
    "example": "The book is available in all good bookshops.",
    "category": "IELTS",
    "difficulty": "Easy"
  },
  {
    "word": "Aware",
    "meaning": "Knowing that something exists, or having knowledge or experience of a particular thing.",
    "synonym": "Conscious",
    "antonym": "Unaware",
    "example": "I'm aware of the problem.",
    "category": "IELTS",
    "difficulty": "Easy"
  },
  {
    "word": "Behalf",
    "meaning": "Representing.",
    "synonym": "Representation",
    "antonym": "N/A",
    "example": "I'm writing on behalf of my client.",
    "category": "IELTS",
    "difficulty": "Medium"
  },
  {
    "word": "Benefit",
    "meaning": "A helpful or good effect, or something intended to help.",
    "synonym": "Advantage",
    "antonym": "Disadvantage",
    "example": "The new law will benefit everyone.",
    "category": "IELTS",
    "difficulty": "Easy"
  },
  {
    "word": "Bias",
    "meaning": "The action of supporting or opposing a particular person or thing in an unfair way, because of allowing personal opinions to influence your judgment.",
    "synonym": "Prejudice",
    "antonym": "Fairness",
    "example": "The report was criticized for being biased.",
    "category": "IELTS",
    "difficulty": "Hard"
  },
  {
    "word": "Bond",
    "meaning": "A close connection joining two or more people.",
    "synonym": "Connection",
    "antonym": "Division",
    "example": "There is a strong bond between the two brothers.",
    "category": "IELTS",
    "difficulty": "Medium"
  },
  {
    "word": "Brief",
    "meaning": "Lasting only a short time or containing few words.",
    "synonym": "Short",
    "antonym": "Long",
    "example": "I'll give you a brief summary of the report.",
    "category": "IELTS",
    "difficulty": "Easy"
  },
  {
    "word": "Bulk",
    "meaning": "Large size or mass.",
    "synonym": "Mass",
    "antonym": "Tiny",
    "example": "The bulk of the work is done.",
    "category": "IELTS",
    "difficulty": "Medium"
  },
  {
    "word": "Capable",
    "meaning": "Able to do something.",
    "synonym": "Able",
    "antonym": "Incapable",
    "example": "She is capable of doing anything she sets her mind to.",
    "category": "IELTS",
    "difficulty": "Medium"
  },
  {
    "word": "Capacity",
    "meaning": "The total amount that can be contained or produced.",
    "synonym": "Volume",
    "antonym": "Empty",
    "example": "The stadium was filled to capacity.",
    "category": "IELTS",
    "difficulty": "Medium"
  },
  {
    "word": "Category",
    "meaning": "A type, or a group of things having some features that are the same.",
    "synonym": "Type",
    "antonym": "N/A",
    "example": "Which category does this word belong to?",
    "category": "IELTS",
    "difficulty": "Easy"
  },
  {
    "word": "Cease",
    "meaning": "To stop something.",
    "synonym": "Stop",
    "antonym": "Continue",
    "example": "The rain has ceased.",
    "category": "IELTS",
    "difficulty": "Hard"
  },
  {
    "word": "Challenge",
    "meaning": "(the situation of being faced with) something that needs great mental or physical effort in order to be done successfully and therefore tests a person's ability.",
    "synonym": "Problem",
    "antonym": "Ease",
    "example": "Learning a new language is a great challenge.",
    "category": "IELTS",
    "difficulty": "Medium"
  },
  {
    "word": "Channel",
    "meaning": "A way of communicating with people or getting something done.",
    "synonym": "Way",
    "antonym": "N/A",
    "example": "The two countries are using diplomatic channels.",
    "category": "IELTS",
    "difficulty": "Medium"
  },
  {
    "word": "Chart",
    "meaning": "A drawing that shows information in a simple way, often using lines and curves to show amounts.",
    "synonym": "Graph",
    "antonym": "N/A",
    "example": "The chart shows the increase in sales.",
    "category": "IELTS",
    "difficulty": "Easy"
  },
  {
    "word": "Chemical",
    "meaning": "Any basic substance that is used in or produced by a reaction involving atoms or molecules.",
    "synonym": "Substance",
    "antonym": "N/A",
    "example": "The factory was accused of dumping chemicals into the river.",
    "category": "IELTS",
    "difficulty": "Medium"
  },
  {
    "word": "Abandon",
    "meaning": "To leave someone or something forever.",
    "synonym": "Leave",
    "antonym": "Stay",
    "example": "The family had to abandon their home during the flood.",
    "category": "TOEFL",
    "difficulty": "Medium"
  },
  {
    "word": "Abbreviate",
    "meaning": "To make a word or phrase shorter by using only the first letters of each word.",
    "synonym": "Shorten",
    "antonym": "Lengthen",
    "example": "Information Technology is often abbreviated to IT.",
    "category": "TOEFL",
    "difficulty": "Medium"
  },
  {
    "word": "Abundant",
    "meaning": "More than enough.",
    "synonym": "Plentiful",
    "antonym": "Scarce",
    "example": "The area has an abundant supply of fresh water.",
    "category": "TOEFL",
    "difficulty": "Hard"
  },
  {
    "word": "Accompany",
    "meaning": "To go somewhere with someone.",
    "synonym": "Escort",
    "antonym": "Leave",
    "example": "Children must be accompanied by an adult.",
    "category": "TOEFL",
    "difficulty": "Medium"
  },
  {
    "word": "Accumulate",
    "meaning": "To collect a large number of things over a long period of time.",
    "synonym": "Gather",
    "antonym": "Disperse",
    "example": "We've accumulated a lot of junk over the years.",
    "category": "TOEFL",
    "difficulty": "Medium"
  },
  {
    "word": "Accurate",
    "meaning": "Correct, exact, and without any mistakes.",
    "synonym": "Precise",
    "antonym": "Inaccurate",
    "example": "Is this information accurate?",
    "category": "TOEFL",
    "difficulty": "Medium"
  },
  {
    "word": "Acknowledge",
    "meaning": "To accept, admit, or recognize something, or the truth or existence of something.",
    "synonym": "Admit",
    "antonym": "Deny",
    "example": "She acknowledged that she had made a mistake.",
    "category": "TOEFL",
    "difficulty": "Medium"
  },
  {
    "word": "Acquire",
    "meaning": "To get something.",
    "synonym": "Get",
    "antonym": "Lose",
    "example": "He acquired a lot of wealth.",
    "category": "TOEFL",
    "difficulty": "Medium"
  },
  {
    "word": "Adapt",
    "meaning": "To change something to suit different conditions or uses.",
    "synonym": "Adjust",
    "antonym": "Maintain",
    "example": "It took him a long time to adapt to his new surroundings.",
    "category": "TOEFL",
    "difficulty": "Medium"
  },
  {
    "word": "Adequate",
    "meaning": "Enough or satisfactory for a particular purpose.",
    "synonym": "Enough",
    "antonym": "Inadequate",
    "example": "The food was adequate for our needs.",
    "category": "TOEFL",
    "difficulty": "Medium"
  },
  {
    "word": "Adjacent",
    "meaning": "Very near, next to, or touching.",
    "synonym": "Next to",
    "antonym": "Distant",
    "example": "The two houses are adjacent.",
    "category": "TOEFL",
    "difficulty": "Hard"
  },
  {
    "word": "Adjust",
    "meaning": "To change something slightly, especially to make it more correct, effective, or suitable.",
    "synonym": "Alter",
    "antonym": "Maintain",
    "example": "You can adjust the height of the chair.",
    "category": "TOEFL",
    "difficulty": "Easy"
  },
  {
    "word": "Administer",
    "meaning": "To control the operation or management of something.",
    "synonym": "Manage",
    "antonym": "N/A",
    "example": "The economy was administered by the government.",
    "category": "TOEFL",
    "difficulty": "Medium"
  },
  {
    "word": "Adopt",
    "meaning": "To legally take another person's child into your own family and take care of him or her as your own child.",
    "synonym": "Take in",
    "antonym": "Reject",
    "example": "They decided to adopt a baby.",
    "category": "TOEFL",
    "difficulty": "Easy"
  },
  {
    "word": "Advocate",
    "meaning": "To publicly support or suggest an idea, development, or way of doing something.",
    "synonym": "Support",
    "antonym": "Oppose",
    "example": "She advocates taking a more long-term view.",
    "category": "TOEFL",
    "difficulty": "Hard"
  },
  {
    "word": "Affect",
    "meaning": "To have an influence on someone or something, or to cause a change in someone or something.",
    "synonym": "Influence",
    "antonym": "Ignore",
    "example": "The weather can affect your mood.",
    "category": "TOEFL",
    "difficulty": "Easy"
  },
  {
    "word": "Aggregate",
    "meaning": "Something formed by adding together several amounts or things.",
    "synonym": "Total",
    "antonym": "Individual",
    "example": "The aggregate demand for the product is increasing.",
    "category": "TOEFL",
    "difficulty": "Hard"
  },
  {
    "word": "Alleviate",
    "meaning": "To make something bad such as pain or problems less severe.",
    "synonym": "Relieve",
    "antonym": "Aggravate",
    "example": "The drugs did nothing to alleviate her pain.",
    "category": "TOEFL",
    "difficulty": "Hard"
  },
  {
    "word": "Allocate",
    "meaning": "To give something to someone as their share of a total amount, to use in a particular way.",
    "synonym": "Assign",
    "antonym": "Withhold",
    "example": "The government has allocated funds for the project.",
    "category": "TOEFL",
    "difficulty": "Hard"
  },
  {
    "word": "Alter",
    "meaning": "To change something, usually slightly, or to cause the characteristics of something to change.",
    "synonym": "Change",
    "antonym": "Maintain",
    "example": "We had to alter our plans because of the rain.",
    "category": "TOEFL",
    "difficulty": "Medium"
  },
  {
    "word": "Alternative",
    "meaning": "An alternative plan or method is one that you can use if you do not want to use another one.",
    "synonym": "Other",
    "antonym": "Standard",
    "example": "Is there an alternative way?",
    "category": "TOEFL",
    "difficulty": "Medium"
  },
  {
    "word": "Ambiguous",
    "meaning": "Having or expressing more than one possible meaning, sometimes intentionally.",
    "synonym": "Unclear",
    "antonym": "Clear",
    "example": "The results of the study were somewhat ambiguous.",
    "category": "TOEFL",
    "difficulty": "Hard"
  },
  {
    "word": "Amend",
    "meaning": "To change the words of a text, especially a law or a legal document.",
    "synonym": "Modify",
    "antonym": "Maintain",
    "example": "The law was amended to include new safety regulations.",
    "category": "TOEFL",
    "difficulty": "Medium"
  },
  {
    "word": "Analogy",
    "meaning": "A comparison between things that have similar features, often used to help explain a principle or idea.",
    "synonym": "Comparison",
    "antonym": "Difference",
    "example": "He drew an analogy between the brain and a computer.",
    "category": "TOEFL",
    "difficulty": "Hard"
  },
  {
    "word": "Analyze",
    "meaning": "To study or examine something in detail, in order to discover more about it.",
    "synonym": "Examine",
    "antonym": "Ignore",
    "example": "The scientists analyzed the results of the experiment.",
    "category": "TOEFL",
    "difficulty": "Medium"
  },
  {
    "word": "Annotate",
    "meaning": "To add a short explanation or opinion to a text or drawing.",
    "synonym": "Comment",
    "antonym": "N/A",
    "example": "The teacher annotated the student's essay.",
    "category": "TOEFL",
    "difficulty": "Hard"
  },
  {
    "word": "Anticipate",
    "meaning": "To imagine or expect that something will happen.",
    "synonym": "Expect",
    "antonym": "Ignore",
    "example": "We anticipate that sales will increase.",
    "category": "TOEFL",
    "difficulty": "Medium"
  },
  {
    "word": "Apparent",
    "meaning": "Able to be seen or understood.",
    "synonym": "Obvious",
    "antonym": "Hidden",
    "example": "It was apparent that she was not telling the truth.",
    "category": "TOEFL",
    "difficulty": "Medium"
  },
  {
    "word": "Append",
    "meaning": "To add something to the end of a piece of writing.",
    "synonym": "Add",
    "antonym": "Remove",
    "example": "The author appended a bibliography to the book.",
    "category": "TOEFL",
    "difficulty": "Hard"
  },
  {
    "word": "Appreciate",
    "meaning": "To understand a situation and realize that it is important.",
    "synonym": "Understand",
    "antonym": "Overlook",
    "example": "We appreciate that you are busy.",
    "category": "TOEFL",
    "difficulty": "Medium"
  },
  {
    "word": "Approach",
    "meaning": "To come near or nearer to something or someone in space, time, quality, or amount.",
    "synonym": "Come near",
    "antonym": "Leave",
    "example": "The plane is approaching the airport.",
    "category": "TOEFL",
    "difficulty": "Easy"
  },
  {
    "word": "Appropriate",
    "meaning": "Suitable or right for a particular situation or person.",
    "synonym": "Suitable",
    "antonym": "Inappropriate",
    "example": "Is this movie appropriate for children?",
    "category": "TOEFL",
    "difficulty": "Medium"
  },
  {
    "word": "Approximate",
    "meaning": "Not completely accurate but close.",
    "synonym": "Rough",
    "antonym": "Exact",
    "example": "What is the approximate cost?",
    "category": "TOEFL",
    "difficulty": "Medium"
  },
  {
    "word": "Arbitrary",
    "meaning": "Based on chance rather than being planned or based on reason.",
    "synonym": "Random",
    "antonym": "Reasoned",
    "example": "The decision was completely arbitrary.",
    "category": "TOEFL",
    "difficulty": "Hard"
  },
  {
    "word": "Area",
    "meaning": "A particular part of a place, piece of land, or country.",
    "synonym": "Part",
    "antonym": "N/A",
    "example": "Which area of the city do you live in?",
    "category": "TOEFL",
    "difficulty": "Easy"
  },
  {
    "word": "Aspect",
    "meaning": "One part of a situation, problem, subject, etc.",
    "synonym": "Feature",
    "antonym": "Whole",
    "example": "Which aspect of the job do you enjoy most?",
    "category": "TOEFL",
    "difficulty": "Medium"
  },
  {
    "word": "Assemble",
    "meaning": "To come together in a single place or bring parts together in a single group.",
    "synonym": "Gather",
    "antonym": "Disperse",
    "example": "The students assembled in the hall.",
    "category": "TOEFL",
    "difficulty": "Medium"
  },
  {
    "word": "Assess",
    "meaning": "To judge or decide the amount, value, quality, or importance of something.",
    "synonym": "Evaluate",
    "antonym": "Ignore",
    "example": "We need to assess the situation.",
    "category": "TOEFL",
    "difficulty": "Medium"
  },
  {
    "word": "Assign",
    "meaning": "To give a particular job or piece of work to someone.",
    "synonym": "Allocate",
    "antonym": "Keep",
    "example": "The teacher assigned each student a topic.",
    "category": "TOEFL",
    "difficulty": "Medium"
  },
  {
    "word": "Assist",
    "meaning": "To help.",
    "synonym": "Help",
    "antonym": "Hinder",
    "example": "I'll assist you with your luggage.",
    "category": "TOEFL",
    "difficulty": "Easy"
  },
  {
    "word": "Assume",
    "meaning": "To accept something to be true without question or proof.",
    "synonym": "Presume",
    "antonym": "Know",
    "example": "I assume that you are coming to the party.",
    "category": "TOEFL",
    "difficulty": "Medium"
  },
  {
    "word": "Accommodate",
    "meaning": "To provide someone with a place to live or to be stored in.",
    "synonym": "House",
    "antonym": "Reject",
    "example": "The hotel can accommodate up to 500 guests.",
    "category": "Interview Preparation",
    "difficulty": "Medium"
  },
  {
    "word": "Achieve",
    "meaning": "To finish something successfully or to get something to a desired standard.",
    "synonym": "Accomplish",
    "antonym": "Fail",
    "example": "He achieved his goal of becoming a doctor.",
    "category": "Interview Preparation",
    "difficulty": "Medium"
  },
  {
    "word": "Address",
    "meaning": "To speak or write to someone.",
    "synonym": "Speak to",
    "antonym": "Ignore",
    "example": "I'll address the issue in the meeting.",
    "category": "Interview Preparation",
    "difficulty": "Medium"
  },
  {
    "word": "Advise",
    "meaning": "To give someone advice.",
    "synonym": "Counsel",
    "antonym": "Mislead",
    "example": "I would advise you to wait until tomorrow.",
    "category": "Interview Preparation",
    "difficulty": "Easy"
  },
  {
    "word": "Allow",
    "meaning": "To give someone permission for something.",
    "synonym": "Permit",
    "antonym": "Forbid",
    "example": "I won't allow you to go.",
    "category": "Interview Preparation",
    "difficulty": "Easy"
  },
  {
    "word": "Analyze",
    "meaning": "To study or examine something in detail, in order to discover more about it.",
    "synonym": "Examine",
    "antonym": "Ignore",
    "example": "The scientists analyzed the results of the experiment.",
    "category": "Interview Preparation",
    "difficulty": "Medium"
  },
  {
    "word": "Anticipate",
    "meaning": "To imagine or expect that something will happen.",
    "synonym": "Expect",
    "antonym": "Ignore",
    "example": "We anticipate that sales will increase.",
    "category": "Interview Preparation",
    "difficulty": "Medium"
  },
  {
    "word": "Apply",
    "meaning": "To request something, usually officially, especially in writing or by sending in a form.",
    "synonym": "Request",
    "antonym": "N/A",
    "example": "I'm applying for a job.",
    "category": "Interview Preparation",
    "difficulty": "Easy"
  },
  {
    "word": "Appreciate",
    "meaning": "To recognize how good someone or something is and to value him, her, or it.",
    "synonym": "Value",
    "antonym": "Disregard",
    "example": "I really appreciate all your help.",
    "category": "Interview Preparation",
    "difficulty": "Easy"
  },
  {
    "word": "Arrange",
    "meaning": "To plan, prepare for, or organize something.",
    "synonym": "Organize",
    "antonym": "Disorganize",
    "example": "I'll arrange a meeting for next week.",
    "category": "Interview Preparation",
    "difficulty": "Easy"
  },
  {
    "word": "Assist",
    "meaning": "To help.",
    "synonym": "Help",
    "antonym": "Hinder",
    "example": "I'll assist you with your luggage.",
    "category": "Interview Preparation",
    "difficulty": "Easy"
  },
  {
    "word": "Assume",
    "meaning": "To accept something to be true without question or proof.",
    "synonym": "Presume",
    "antonym": "Know",
    "example": "I assume that you are coming to the party.",
    "category": "Interview Preparation",
    "difficulty": "Medium"
  },
  {
    "word": "Assure",
    "meaning": "To tell someone confidently that something is true, so that they do not worry.",
    "synonym": "Guarantee",
    "antonym": "Doubt",
    "example": "I can assure you that everything will be fine.",
    "category": "Interview Preparation",
    "difficulty": "Medium"
  },
  {
    "word": "Attend",
    "meaning": "To go to an event, place, etc.",
    "synonym": "Go to",
    "antonym": "Miss",
    "example": "I'll attend the meeting.",
    "category": "Interview Preparation",
    "difficulty": "Easy"
  },
  {
    "word": "Attract",
    "meaning": "(of people, things, places, etc.) to pull or draw someone or something towards them, by the qualities they have, especially good ones.",
    "synonym": "Draw",
    "antonym": "Repel",
    "example": "The museum attracts millions of visitors every year.",
    "category": "Interview Preparation",
    "difficulty": "Easy"
  },
  {
    "word": "Audit",
    "meaning": "To make an official examination of the accounts of a business and produce a report.",
    "synonym": "Inspect",
    "antonym": "Ignore",
    "example": "The company's accounts are audited every year.",
    "category": "Interview Preparation",
    "difficulty": "Hard"
  },
  {
    "word": "Authority",
    "meaning": "The moral or legal right or ability to control.",
    "synonym": "Power",
    "antonym": "Weakness",
    "example": "He has the authority to sign the contract.",
    "category": "Interview Preparation",
    "difficulty": "Medium"
  },
  {
    "word": "Automate",
    "meaning": "To make a process in a factory or office operate by machines or computers, in order to reduce the amount of work done by humans.",
    "synonym": "Computerize",
    "antonym": "Manual",
    "example": "The factory has been automated.",
    "category": "Interview Preparation",
    "difficulty": "Medium"
  },
  {
    "word": "Average",
    "meaning": "The result you get by adding two or more amounts together and dividing the total by the number of amounts.",
    "synonym": "Mean",
    "antonym": "N/A",
    "example": "What is the average cost?",
    "category": "Interview Preparation",
    "difficulty": "Easy"
  },
  {
    "word": "Avoid",
    "meaning": "To stay away from someone or something.",
    "synonym": "Shun",
    "antonym": "Meet",
    "example": "I'm trying to avoid sugar.",
    "category": "Interview Preparation",
    "difficulty": "Easy"
  },
  {
    "word": "Abate",
    "meaning": "To become less active, less intense, or less in amount.",
    "synonym": "Decrease",
    "antonym": "Increase",
    "example": "The storm has started to abate.",
    "category": "Competitive Exams",
    "difficulty": "Hard"
  },
  {
    "word": "Abhor",
    "meaning": "To hate a way of behaving or thinking, often because you think it is not moral.",
    "synonym": "Detest",
    "antonym": "Love",
    "example": "I abhor all forms of racism.",
    "category": "Competitive Exams",
    "difficulty": "Hard"
  },
  {
    "word": "Abject",
    "meaning": "The state of being extremely unhappy, poor, unsuccessful, etc.",
    "synonym": "Miserable",
    "antonym": "Excellent",
    "example": "They live in abject poverty.",
    "category": "Competitive Exams",
    "difficulty": "Hard"
  },
  {
    "word": "Abjure",
    "meaning": "To state publicly that you no longer agree with a belief or a way of behaving.",
    "synonym": "Renounce",
    "antonym": "Accept",
    "example": "He abjured his allegiance to the king.",
    "category": "Competitive Exams",
    "difficulty": "Hard"
  },
  {
    "word": "Abnegation",
    "meaning": "The act of not allowing yourself to have something, especially something you like or want.",
    "synonym": "Self-denial",
    "antonym": "Indulgence",
    "example": "He was a model of self-abnegation.",
    "category": "Competitive Exams",
    "difficulty": "Hard"
  },
  {
    "word": "Abominate",
    "meaning": "To hate something very much.",
    "synonym": "Loathe",
    "antonym": "Love",
    "example": "I abominate all forms of cruelty.",
    "category": "Competitive Exams",
    "difficulty": "Hard"
  },
  {
    "word": "Abortive",
    "meaning": "An abortive attempt or plan is one that is stopped because it is not successful.",
    "synonym": "Unsuccessful",
    "antonym": "Successful",
    "example": "They made an abortive attempt to escape.",
    "category": "Competitive Exams",
    "difficulty": "Hard"
  },
  {
    "word": "Abrasive",
    "meaning": "Rude and unfriendly.",
    "synonym": "Harsh",
    "antonym": "Gentle",
    "example": "She has a rather abrasive manner.",
    "category": "Competitive Exams",
    "difficulty": "Hard"
  },
  {
    "word": "Abridge",
    "meaning": "To make a book, play, or piece of writing shorter by removing details and information that is not important.",
    "synonym": "Shorten",
    "antonym": "Lengthen",
    "example": "The book was abridged for children.",
    "category": "Competitive Exams",
    "difficulty": "Hard"
  },
  {
    "word": "Abrogate",
    "meaning": "To end a law, agreement, or custom formally.",
    "synonym": "Abolish",
    "antonym": "Establish",
    "example": "The treaty was abrogated in 1929.",
    "category": "Competitive Exams",
    "difficulty": "Hard"
  },
  {
    "word": "Abscond",
    "meaning": "To go away suddenly and secretly in order to escape from somewhere.",
    "synonym": "Escape",
    "antonym": "Stay",
    "example": "Two prisoners absconded last night.",
    "category": "Competitive Exams",
    "difficulty": "Hard"
  },
  {
    "word": "Absolve",
    "meaning": "To free someone from guilt, blame, or responsibility for something.",
    "synonym": "Exonerate",
    "antonym": "Blame",
    "example": "The report absolved her from all blame.",
    "category": "Competitive Exams",
    "difficulty": "Hard"
  },
  {
    "word": "Abstain",
    "meaning": "To not do something, especially something enjoyable that is bad for your health.",
    "synonym": "Refrain",
    "antonym": "Indulge",
    "example": "He chose to abstain from alcohol.",
    "category": "Competitive Exams",
    "difficulty": "Hard"
  },
  {
    "word": "Abstemious",
    "meaning": "Not doing things that give you pleasure, especially not eating good food or drinking alcohol.",
    "synonym": "Temperate",
    "antonym": "Self-indulgent",
    "example": "He was a hard-working, abstemious man.",
    "category": "Competitive Exams",
    "difficulty": "Hard"
  },
  {
    "word": "Abstruse",
    "meaning": "Not known or understood by many people.",
    "synonym": "Obscure",
    "antonym": "Clear",
    "example": "The subject is rather abstruse.",
    "category": "Competitive Exams",
    "difficulty": "Hard"
  },
  {
    "word": "Abysmal",
    "meaning": "Very bad.",
    "synonym": "Terrible",
    "antonym": "Excellent",
    "example": "The standard of the work was abysmal.",
    "category": "Competitive Exams",
    "difficulty": "Hard"
  },
  {
    "word": "Accede",
    "meaning": "To agree to do what people have asked you to do.",
    "synonym": "Agree",
    "antonym": "Refuse",
    "example": "He acceded to their demands.",
    "category": "Competitive Exams",
    "difficulty": "Hard"
  },
  {
    "word": "Acclaim",
    "meaning": "To give public approval and praise.",
    "synonym": "Praise",
    "antonym": "Criticize",
    "example": "The movie was acclaimed by critics.",
    "category": "Competitive Exams",
    "difficulty": "Hard"
  },
  {
    "word": "Acclivity",
    "meaning": "An upward slope.",
    "synonym": "Slope",
    "antonym": "Declivity",
    "example": "The car struggled to climb the acclivity.",
    "category": "Competitive Exams",
    "difficulty": "Hard"
  },
  {
    "word": "Accolade",
    "meaning": "Praise and approval.",
    "synonym": "Honor",
    "antonym": "Criticism",
    "example": "The Nobel Prize is the ultimate accolade.",
    "category": "Competitive Exams",
    "difficulty": "Hard"
  },
  {
    "word": "Accomplice",
    "meaning": "A person who helps someone else to commit a crime or to do something morally wrong.",
    "synonym": "Partner",
    "antonym": "Enemy",
    "example": "He was an accomplice in the robbery.",
    "category": "Competitive Exams",
    "difficulty": "Hard"
  },
  {
    "word": "Accord",
    "meaning": "(a formal) agreement.",
    "synonym": "Agreement",
    "antonym": "Disagreement",
    "example": "The two countries signed a peace accord.",
    "category": "Competitive Exams",
    "difficulty": "Hard"
  },
  {
    "word": "Accoutre",
    "meaning": "To dress or arm someone for a particular activity.",
    "synonym": "Equip",
    "antonym": "Strip",
    "example": "The soldiers were fully accoutred for battle.",
    "category": "Competitive Exams",
    "difficulty": "Hard"
  },
  {
    "word": "Accretion",
    "meaning": "A gradual increase or growth by the addition of new layers or parts.",
    "synonym": "Growth",
    "antonym": "Loss",
    "example": "The accretion of ice on the wings of the plane is dangerous.",
    "category": "Competitive Exams",
    "difficulty": "Hard"
  },
  {
    "word": "Accrue",
    "meaning": "To increase in number or amount over a period of time.",
    "synonym": "Accumulate",
    "antonym": "Decrease",
    "example": "Interest will accrue on the account.",
    "category": "Competitive Exams",
    "difficulty": "Hard"
  },
  {
    "word": "Acerbic",
    "meaning": "Used to describe something that is spoken or written in a way that is direct, clever, and cruel.",
    "synonym": "Sharp",
    "antonym": "Gentle",
    "example": "The movie received acerbic reviews.",
    "category": "Competitive Exams",
    "difficulty": "Hard"
  },
  {
    "word": "Acme",
    "meaning": "The highest point or stage of something.",
    "synonym": "Peak",
    "antonym": "Nadir",
    "example": "He was at the acme of his career.",
    "category": "Competitive Exams",
    "difficulty": "Hard"
  },
  {
    "word": "Acoustics",
    "meaning": "The scientific study of sound, or the qualities of a room that make it easy or difficult to hear in.",
    "synonym": "Sound",
    "antonym": "N/A",
    "example": "The acoustics of the hall are excellent.",
    "category": "Competitive Exams",
    "difficulty": "Hard"
  },
  {
    "word": "Acquiesce",
    "meaning": "To accept or agree to something, often unwillingly.",
    "synonym": "Agree",
    "antonym": "Disagree",
    "example": "He acquiesced to the plan.",
    "category": "Competitive Exams",
    "difficulty": "Hard"
  },
  {
    "word": "Acrid",
    "meaning": "An acrid smell or taste is strong and unpleasant and stings your nose or throat.",
    "synonym": "Bitter",
    "antonym": "Sweet",
    "example": "The air was filled with acrid smoke.",
    "category": "Competitive Exams",
    "difficulty": "Hard"
  },
  {
    "word": "Acrimonious",
    "meaning": "Full of anger, arguments, and bad feeling.",
    "synonym": "Bitter",
    "antonym": "Friendly",
    "example": "The meeting ended in acrimonious debate.",
    "category": "Competitive Exams",
    "difficulty": "Hard"
  },
  {
    "word": "Actuate",
    "meaning": "To make a machine or device start to work.",
    "synonym": "Activate",
    "antonym": "Stop",
    "example": "The mechanism is actuated by a spring.",
    "category": "Competitive Exams",
    "difficulty": "Hard"
  },
  {
    "word": "Acumen",
    "meaning": "Skill in making correct decisions and judgments in a particular subject, such as business or politics.",
    "synonym": "Insight",
    "antonym": "Stupidity",
    "example": "He has considerable business acumen.",
    "category": "Competitive Exams",
    "difficulty": "Hard"
  },
  {
    "word": "Adage",
    "meaning": "A wise saying or proverb.",
    "synonym": "Proverb",
    "antonym": "N/A",
    "example": "He is fond of using old adages.",
    "category": "Competitive Exams",
    "difficulty": "Hard"
  },
  {
    "word": "Adamant",
    "meaning": "Impossible to persuade, or unwilling to change an opinion or decision.",
    "synonym": "Stubborn",
    "antonym": "Flexible",
    "example": "She was adamant that she was right.",
    "category": "Competitive Exams",
    "difficulty": "Hard"
  },
  {
    "word": "Adduce",
    "meaning": "To give reasons why you think something is true.",
    "synonym": "Cite",
    "antonym": "N/A",
    "example": "He adduced several reasons for his decision.",
    "category": "Competitive Exams",
    "difficulty": "Hard"
  },
  {
    "word": "Adept",
    "meaning": "Having a natural ability to do something that needs skill.",
    "synonym": "Skilled",
    "antonym": "Incompetent",
    "example": "He is very adept at playing the piano.",
    "category": "Competitive Exams",
    "difficulty": "Hard"
  },
  {
    "word": "Adhere",
    "meaning": "To stick firmly.",
    "synonym": "Stick",
    "antonym": "Detach",
    "example": "The stamp failed to adhere to the envelope.",
    "category": "Competitive Exams",
    "difficulty": "Hard"
  },
  {
    "word": "Adipose",
    "meaning": "Relating to animal fat.",
    "synonym": "Fatty",
    "antonym": "Lean",
    "example": "The human body stores energy in adipose tissue.",
    "category": "Competitive Exams",
    "difficulty": "Hard"
  },
  {
    "word": "Adjacent",
    "meaning": "Very near, next to, or touching.",
    "synonym": "Next to",
    "antonym": "Distant",
    "example": "The two houses are adjacent.",
    "category": "Competitive Exams",
    "difficulty": "Hard"
  },
  {
    "word": "Adjoin",
    "meaning": "To be very near, next to, or touching.",
    "synonym": "Border",
    "antonym": "N/A",
    "example": "The two rooms adjoin each other.",
    "category": "Competitive Exams",
    "difficulty": "Hard"
  },
  {
    "word": "Adjourn",
    "meaning": "To have a pause or rest during a formal meeting or trial.",
    "synonym": "Postpone",
    "antonym": "Continue",
    "example": "The meeting was adjourned until tomorrow.",
    "category": "Competitive Exams",
    "difficulty": "Hard"
  },
  {
    "word": "Adjudge",
    "meaning": "To announce a decision or judgment officially.",
    "synonym": "Judge",
    "antonym": "N/A",
    "example": "He was adjudged guilty.",
    "category": "Competitive Exams",
    "difficulty": "Hard"
  },
  {
    "word": "Adjuration",
    "meaning": "An earnest appeal.",
    "synonym": "Plea",
    "antonym": "N/A",
    "example": "He made an adjuration for help.",
    "category": "Competitive Exams",
    "difficulty": "Hard"
  },
  {
    "word": "Adjunct",
    "meaning": "Something added or connected to a larger or more important thing.",
    "synonym": "Addition",
    "antonym": "Main",
    "example": "The school has several adjunct buildings.",
    "category": "Competitive Exams",
    "difficulty": "Hard"
  },
  {
    "word": "Adjure",
    "meaning": "To ask or order someone to do something very formally.",
    "synonym": "Order",
    "antonym": "N/A",
    "example": "I adjure you to tell the truth.",
    "category": "Competitive Exams",
    "difficulty": "Hard"
  },
  {
    "word": "Administer",
    "meaning": "To control the operation or management of something.",
    "synonym": "Manage",
    "antonym": "N/A",
    "example": "The economy was administered by the government.",
    "category": "Competitive Exams",
    "difficulty": "Hard"
  },
  {
    "word": "Admonish",
    "meaning": "To tell someone that they have done something wrong.",
    "synonym": "Reprimand",
    "antonym": "Praise",
    "example": "The teacher admonished the students for their behavior.",
    "category": "Competitive Exams",
    "difficulty": "Hard"
  },
  {
    "word": "Adroit",
    "meaning": "Very skilful and quick in the way you think or move.",
    "synonym": "Skilful",
    "antonym": "Clumsy",
    "example": "He is very adroit at dealing with difficult situations.",
    "category": "Competitive Exams",
    "difficulty": "Hard"
  },
  {
    "word": "Adulation",
    "meaning": "Very great admiration or praise for someone, especially when it is more than is deserved.",
    "synonym": "Praise",
    "antonym": "Criticism",
    "example": "The actor was greeted with adulation.",
    "category": "Competitive Exams",
    "difficulty": "Hard"
  },
  {
    "word": "Danger",
    "meaning": "The possibility of harm or death to someone.",
    "synonym": "Risk",
    "antonym": "Safety",
    "example": "There is a real danger of fire.",
    "category": "Daily Conversation",
    "difficulty": "Easy"
  },
  {
    "word": "Dare",
    "meaning": "To be brave enough to do something difficult or dangerous.",
    "synonym": "Venture",
    "antonym": "Fear",
    "example": "I don't dare go into that dark house.",
    "category": "Daily Conversation",
    "difficulty": "Easy"
  },
  {
    "word": "Dark",
    "meaning": "With little or no light.",
    "synonym": "Dim",
    "antonym": "Light",
    "example": "The room was dark.",
    "category": "Daily Conversation",
    "difficulty": "Easy"
  },
  {
    "word": "Data",
    "meaning": "Information, especially facts or numbers, collected to be examined and considered and used to help decision-making, or information in an electronic form that can be stored and used by a computer.",
    "synonym": "Information",
    "antonym": "N/A",
    "example": "The data is very interesting.",
    "category": "Daily Conversation",
    "difficulty": "Easy"
  },
  {
    "word": "Date",
    "meaning": "A particular day of the month or year, often given by a number, a name, or both.",
    "synonym": "Day",
    "antonym": "N/A",
    "example": "What is the date today?",
    "category": "Daily Conversation",
    "difficulty": "Easy"
  },
  {
    "word": "Daughter",
    "meaning": "Your female child.",
    "synonym": "N/A",
    "antonym": "Son",
    "example": "She has a beautiful daughter.",
    "category": "Daily Conversation",
    "difficulty": "Easy"
  },
  {
    "word": "Day",
    "meaning": "A period of 24 hours.",
    "synonym": "N/A",
    "antonym": "Night",
    "example": "It's a beautiful day.",
    "category": "Daily Conversation",
    "difficulty": "Easy"
  },
  {
    "word": "Dead",
    "meaning": "Not now living.",
    "synonym": "Lifeless",
    "antonym": "Alive",
    "example": "The plant is dead.",
    "category": "Daily Conversation",
    "difficulty": "Easy"
  },
  {
    "word": "Deal",
    "meaning": "An agreement or an arrangement, especially in business.",
    "synonym": "Agreement",
    "antonym": "N/A",
    "example": "It's a deal!",
    "category": "Daily Conversation",
    "difficulty": "Easy"
  },
  {
    "word": "Dear",
    "meaning": "Loved or valued very much.",
    "synonym": "Beloved",
    "antonym": "Hated",
    "example": "She is a very dear friend.",
    "category": "Daily Conversation",
    "difficulty": "Easy"
  },
  {
    "word": "Death",
    "meaning": "The end of life.",
    "synonym": "N/A",
    "antonym": "Life",
    "example": "The death of his father was a great shock.",
    "category": "Daily Conversation",
    "difficulty": "Easy"
  },
  {
    "word": "Debate",
    "meaning": "A serious discussion of a subject in which many people take part.",
    "synonym": "Discussion",
    "antonym": "Agreement",
    "example": "The debate was very interesting.",
    "category": "Daily Conversation",
    "difficulty": "Easy"
  },
  {
    "word": "Debt",
    "meaning": "Something, especially money, that is owed to someone else, or the state of owing something.",
    "synonym": "Loan",
    "antonym": "Asset",
    "example": "He has a lot of debt.",
    "category": "Daily Conversation",
    "difficulty": "Easy"
  },
  {
    "word": "Decade",
    "meaning": "A period of ten years.",
    "synonym": "N/A",
    "antonym": "N/A",
    "example": "The country has changed a lot over the last decade.",
    "category": "Daily Conversation",
    "difficulty": "Easy"
  },
  {
    "word": "December",
    "meaning": "The 12th month of the year.",
    "synonym": "N/A",
    "antonym": "N/A",
    "example": "My birthday is in December.",
    "category": "Daily Conversation",
    "difficulty": "Easy"
  },
  {
    "word": "Decide",
    "meaning": "To choose something, especially after thinking about several possibilities.",
    "synonym": "Choose",
    "antonym": "Hesitate",
    "example": "I can't decide which one to buy.",
    "category": "Daily Conversation",
    "difficulty": "Easy"
  },
  {
    "word": "Decision",
    "meaning": "A choice that you make about something after thinking about several possibilities.",
    "synonym": "Choice",
    "antonym": "Indecision",
    "example": "It was a difficult decision.",
    "category": "Daily Conversation",
    "difficulty": "Easy"
  },
  {
    "word": "Declare",
    "meaning": "To announce something clearly, firmly, publicly, or officially.",
    "synonym": "Announce",
    "antonym": "Hide",
    "example": "The government has declared a state of emergency.",
    "category": "Daily Conversation",
    "difficulty": "Easy"
  },
  {
    "word": "Decline",
    "meaning": "To gradually become less, worse, or lower.",
    "synonym": "Decrease",
    "antonym": "Increase",
    "example": "There has been a decline in the number of smokers.",
    "category": "Daily Conversation",
    "difficulty": "Easy"
  },
  {
    "word": "Decorate",
    "meaning": "To add something to an object or a place, in order to make it more attractive.",
    "synonym": "Adorn",
    "antonym": "Strip",
    "example": "They are decorating the room for the party.",
    "category": "Daily Conversation",
    "difficulty": "Easy"
  },
  {
    "word": "Decrease",
    "meaning": "To become less, or to make something become less.",
    "synonym": "Decline",
    "antonym": "Increase",
    "example": "The population is decreasing.",
    "category": "Daily Conversation",
    "difficulty": "Easy"
  },
  {
    "word": "Deep",
    "meaning": "Going or being a long way down from the top or surface.",
    "synonym": "Profound",
    "antonym": "Shallow",
    "example": "The water is very deep.",
    "category": "Daily Conversation",
    "difficulty": "Easy"
  },
  {
    "word": "Defeat",
    "meaning": "To win against someone in a fight, war, or competition.",
    "synonym": "Beat",
    "antonym": "Surrender",
    "example": "The team was defeated.",
    "category": "Daily Conversation",
    "difficulty": "Easy"
  },
  {
    "word": "Defend",
    "meaning": "To protect someone or something from attack.",
    "synonym": "Protect",
    "antonym": "Attack",
    "example": "We must defend our country.",
    "category": "Daily Conversation",
    "difficulty": "Easy"
  },
  {
    "word": "Define",
    "meaning": "To say what the meaning of something, especially a word, is.",
    "synonym": "Explain",
    "antonym": "N/A",
    "example": "How would you define success?",
    "category": "Daily Conversation",
    "difficulty": "Easy"
  },
  {
    "word": "Definite",
    "meaning": "Fixed, certain, or clear.",
    "synonym": "Certain",
    "antonym": "Indefinite",
    "example": "I'll give you a definite answer tomorrow.",
    "category": "Daily Conversation",
    "difficulty": "Easy"
  },
  {
    "word": "Degree",
    "meaning": "(a unit of measurement of) temperature or the size of an angle.",
    "synonym": "Unit",
    "antonym": "N/A",
    "example": "The temperature is 20 degrees.",
    "category": "Daily Conversation",
    "difficulty": "Easy"
  },
  {
    "word": "Delay",
    "meaning": "To make something happen at a later time than originally planned or expected.",
    "synonym": "Postpone",
    "antonym": "Hurry",
    "example": "The flight was delayed.",
    "category": "Daily Conversation",
    "difficulty": "Easy"
  },
  {
    "word": "Delicate",
    "meaning": "Easily broken or damaged.",
    "synonym": "Fragile",
    "antonym": "Strong",
    "example": "The flowers are very delicate.",
    "category": "Daily Conversation",
    "difficulty": "Easy"
  },
  {
    "word": "Delicious",
    "meaning": "Having a very pleasant taste or smell.",
    "synonym": "Tasty",
    "antonym": "Disgusting",
    "example": "The food was delicious.",
    "category": "Daily Conversation",
    "difficulty": "Easy"
  },
  {
    "word": "Delight",
    "meaning": "Great pleasure, satisfaction, or happiness.",
    "synonym": "Joy",
    "antonym": "Displeasure",
    "example": "The children were full of delight.",
    "category": "Daily Conversation",
    "difficulty": "Easy"
  },
  {
    "word": "Deliver",
    "meaning": "To take goods, letters, parcels, etc. to people's houses or places of work.",
    "synonym": "Transport",
    "antonym": "Keep",
    "example": "The letter was delivered this morning.",
    "category": "Daily Conversation",
    "difficulty": "Easy"
  },
  {
    "word": "Demand",
    "meaning": "To ask for something forcefully, in a way that shows that you do not expect to be refused.",
    "synonym": "Request",
    "antonym": "Grant",
    "example": "The workers are demanding higher wages.",
    "category": "Daily Conversation",
    "difficulty": "Easy"
  },
  {
    "word": "Democracy",
    "meaning": "The belief in freedom and equality between people, or a system of government based on this belief, in which power is either held by elected representatives or directly by the people themselves.",
    "synonym": "Republic",
    "antonym": "Dictatorship",
    "example": "Which country is a democracy?",
    "category": "Daily Conversation",
    "difficulty": "Easy"
  },
  {
    "word": "Demonstrate",
    "meaning": "To show or make make something clear.",
    "synonym": "Show",
    "antonym": "Hide",
    "example": "The teacher demonstrated the experiment.",
    "category": "Daily Conversation",
    "difficulty": "Easy"
  },
  {
    "word": "Deny",
    "meaning": "To say that something is not true.",
    "synonym": "Admit",
    "antonym": "Confirm",
    "example": "He denied the allegations.",
    "category": "Daily Conversation",
    "difficulty": "Easy"
  },
  {
    "word": "Depart",
    "meaning": "To go away or leave, especially on a journey.",
    "synonym": "Leave",
    "antonym": "Arrive",
    "example": "The train departs at 10 o'clock.",
    "category": "Daily Conversation",
    "difficulty": "Easy"
  },
  {
    "word": "Department",
    "meaning": "A part of an organization such as a school, business, or government which deals with a particular area of study or work.",
    "synonym": "Division",
    "antonym": "N/A",
    "example": "Which department do you work in?",
    "category": "Daily Conversation",
    "difficulty": "Easy"
  },
  {
    "word": "Depend",
    "meaning": "To be decided by or change according to something else.",
    "synonym": "Rely",
    "antonym": "N/A",
    "example": "It depends on the weather.",
    "category": "Daily Conversation",
    "difficulty": "Easy"
  },
  {
    "word": "Deposit",
    "meaning": "To leave something somewhere.",
    "synonym": "Leave",
    "antonym": "Remove",
    "example": "You must deposit the keys at the reception.",
    "category": "Daily Conversation",
    "difficulty": "Easy"
  },
  {
    "word": "Depress",
    "meaning": "To make someone feel unhappy and without hope for the future.",
    "synonym": "Sadden",
    "antonym": "Cheer up",
    "example": "The news depressed me.",
    "category": "Daily Conversation",
    "difficulty": "Easy"
  },
  {
    "word": "Depth",
    "meaning": "The distance from the top or surface to the bottom of something.",
    "synonym": "Deepness",
    "antonym": "Height",
    "example": "What is the depth of the pool?",
    "category": "Daily Conversation",
    "difficulty": "Easy"
  },
  {
    "word": "Derive",
    "meaning": "To get something from something else.",
    "synonym": "Get",
    "antonym": "Give",
    "example": "The word is derived from Latin.",
    "category": "Daily Conversation",
    "difficulty": "Easy"
  },
  {
    "word": "Describe",
    "meaning": "To say or write what someone or something is like.",
    "synonym": "Explain",
    "antonym": "N/A",
    "example": "Can you describe the suspect?",
    "category": "Daily Conversation",
    "difficulty": "Easy"
  },
  {
    "word": "Desert",
    "meaning": "An area, often covered with sand or rocks, where there is very little rain and not many plants.",
    "synonym": "Waste",
    "antonym": "Forest",
    "example": "The Sahara is a huge desert.",
    "category": "Daily Conversation",
    "difficulty": "Easy"
  },
  {
    "word": "Deserve",
    "meaning": "To have earned something or be given something because of your actions or qualities.",
    "synonym": "Earn",
    "antonym": "N/A",
    "example": "You deserve a rest after all that hard work.",
    "category": "Daily Conversation",
    "difficulty": "Easy"
  },
  {
    "word": "Design",
    "meaning": "To make or draw plans for something, for example clothes or buildings.",
    "synonym": "Plan",
    "antonym": "N/A",
    "example": "Who designed this dress?",
    "category": "Daily Conversation",
    "difficulty": "Easy"
  },
  {
    "word": "Desire",
    "meaning": "A strong feeling that you want something.",
    "synonym": "Wish",
    "antonym": "Hatred",
    "example": "He has a strong desire to learn English.",
    "category": "Daily Conversation",
    "difficulty": "Easy"
  },
  {
    "word": "Desk",
    "meaning": "A type of table that you can work at, often one with drawers.",
    "synonym": "Table",
    "antonym": "N/A",
    "example": "I'll leave the keys on the desk.",
    "category": "Daily Conversation",
    "difficulty": "Easy"
  },
  {
    "word": "Desperate",
    "meaning": "Very serious or bad.",
    "synonym": "Hopeless",
    "antonym": "Hopeful",
    "example": "The situation is desperate.",
    "category": "Daily Conversation",
    "difficulty": "Easy"
  },
  {
    "word": "Audit",
    "meaning": "To make an official examination of the accounts of a business and produce a report.",
    "synonym": "Inspect",
    "antonym": "Ignore",
    "example": "The company's accounts are audited every year.",
    "category": "Business English",
    "difficulty": "Hard"
  },
  {
    "word": "Bankruptcy",
    "meaning": "The state of being unable to pay your debts.",
    "synonym": "Insolvency",
    "antonym": "Solvency",
    "example": "The company filed for bankruptcy last week.",
    "category": "Business English",
    "difficulty": "Hard"
  },
  {
    "word": "Boardroom",
    "meaning": "A room where the people who control a company or organization meet.",
    "synonym": "Conference room",
    "antonym": "N/A",
    "example": "The meeting was held in the boardroom.",
    "category": "Business English",
    "difficulty": "Medium"
  },
  {
    "word": "Brainstorming",
    "meaning": "A process in which a group of people meet to suggest a lot of new ideas for a particular problem or subject very quickly.",
    "synonym": "Idea generation",
    "antonym": "N/A",
    "example": "We had a brainstorming session this morning.",
    "category": "Business English",
    "difficulty": "Easy"
  },
  {
    "word": "Brand",
    "meaning": "A type of product made by a particular company.",
    "synonym": "Label",
    "antonym": "N/A",
    "example": "Which brand of soap do you use?",
    "category": "Business English",
    "difficulty": "Easy"
  },
  {
    "word": "Broker",
    "meaning": "A person who buys and sells foreign money, shares in companies, etc., for other people.",
    "synonym": "Agent",
    "antonym": "N/A",
    "example": "He is a stock broker.",
    "category": "Business English",
    "difficulty": "Medium"
  },
  {
    "word": "Budget",
    "meaning": "The amount of money you have available to spend.",
    "synonym": "Allowance",
    "antonym": "N/A",
    "example": "What is the budget for the project?",
    "category": "Business English",
    "difficulty": "Easy"
  },
  {
    "word": "Campaign",
    "meaning": "A planned series of mathematical activities that are intended to achieve a particular aim.",
    "synonym": "Drive",
    "antonym": "N/A",
    "example": "The marketing campaign was a huge success.",
    "category": "Business English",
    "difficulty": "Medium"
  },
  {
    "word": "Capital",
    "meaning": "A large amount of money used for starting a new business.",
    "synonym": "Funds",
    "antonym": "N/A",
    "example": "The company needs more capital.",
    "category": "Business English",
    "difficulty": "Medium"
  },
  {
    "word": "Cartel",
    "meaning": "A group of similar independent companies who join together to control prices and limit competition.",
    "synonym": "Monopoly",
    "antonym": "N/A",
    "example": "The oil cartel agreed to reduce production.",
    "category": "Business English",
    "difficulty": "Hard"
  },
  {
    "word": "Chairman",
    "meaning": "A person in charge of a meeting or organization.",
    "synonym": "Chair",
    "antonym": "N/A",
    "example": "The chairman called the meeting to order.",
    "category": "Business English",
    "difficulty": "Easy"
  },
  {
    "word": "Commission",
    "meaning": "A payment to someone who sells goods that is directly related to the amount of goods sold, or a system that uses such payments.",
    "synonym": "Fee",
    "antonym": "N/A",
    "example": "The salesman gets a 10% commission on every sale.",
    "category": "Business English",
    "difficulty": "Medium"
  },
  {
    "word": "Commodity",
    "meaning": "A substance or product that can be traded, bought, or sold.",
    "synonym": "Product",
    "antonym": "N/A",
    "example": "Oil is a very important commodity.",
    "category": "Business English",
    "difficulty": "Hard"
  },
  {
    "word": "Compensation",
    "meaning": "Money that is paid to someone because they have been hurt, or because something has been lost or damaged.",
    "synonym": "Payment",
    "antonym": "N/A",
    "example": "The company paid him compensation for his injuries.",
    "category": "Business English",
    "difficulty": "Hard"
  },
  {
    "word": "Competitor",
    "meaning": "A person, team, or company that is competing against others.",
    "synonym": "Rival",
    "antonym": "Ally",
    "example": "The two companies are competitors.",
    "category": "Business English",
    "difficulty": "Easy"
  },
  {
    "word": "Conglomerate",
    "meaning": "A large company that is formed by joining together several different companies.",
    "synonym": "Corporation",
    "antonym": "N/A",
    "example": "The company is a huge conglomerate.",
    "category": "Business English",
    "difficulty": "Hard"
  },
  {
    "word": "Consolidated",
    "meaning": "Joined together into a single whole.",
    "synonym": "United",
    "antonym": "Divided",
    "example": "The two companies consolidated their operations.",
    "category": "Business English",
    "difficulty": "Medium"
  },
  {
    "word": "Consultant",
    "meaning": "Someone who is paid to give expert advice or training on a particular subject.",
    "synonym": "Expert",
    "antonym": "N/A",
    "example": "She is a management consultant.",
    "category": "Business English",
    "difficulty": "Medium"
  },
  {
    "word": "Consumer",
    "meaning": "A person who buys goods or services for their own use.",
    "synonym": "Customer",
    "antonym": "Producer",
    "example": "Consumer demand is increasing.",
    "category": "Business English",
    "difficulty": "Easy"
  },
  {
    "word": "Contract",
    "meaning": "A legal document that states and explains a formal agreement between two or more people or groups, or the agreement itself.",
    "synonym": "Agreement",
    "antonym": "N/A",
    "example": "I've signed the contract.",
    "category": "Business English",
    "difficulty": "Easy"
  },
  {
    "word": "Corporation",
    "meaning": "A large company or group of companies that is controlled as a single organization.",
    "synonym": "Company",
    "antonym": "N/A",
    "example": "He works for a large corporation.",
    "category": "Business English",
    "difficulty": "Easy"
  },
  {
    "word": "Cost",
    "meaning": "The amount of money that is needed to buy, pay for, or do something.",
    "synonym": "Price",
    "antonym": "N/A",
    "example": "What is the cost of the trip?",
    "category": "Business English",
    "difficulty": "Easy"
  },
  {
    "word": "Credit",
    "meaning": "A method of paying for goods or services at a later time, usually paying interest as well as the original money.",
    "synonym": "Loan",
    "antonym": "Debit",
    "example": "I'll pay by credit card.",
    "category": "Business English",
    "difficulty": "Easy"
  },
  {
    "word": "Currency",
    "meaning": "The money that is used in a particular country at a particular time.",
    "synonym": "Money",
    "antonym": "N/A",
    "example": "What is the local currency?",
    "category": "Business English",
    "difficulty": "Easy"
  },
  {
    "word": "Customer",
    "meaning": "A person who buys goods or a service.",
    "synonym": "Client",
    "antonym": "Seller",
    "example": "The customer is always right.",
    "category": "Business English",
    "difficulty": "Easy"
  },
  {
    "word": "Cycle",
    "meaning": "A series of events that are regularly repeated in the same order.",
    "synonym": "Sequence",
    "antonym": "N/A",
    "example": "The business cycle is very interesting.",
    "category": "Business English",
    "difficulty": "Easy"
  },
  {
    "word": "Debt",
    "meaning": "Something, especially money, that is owed to someone else, or the state of owing something.",
    "synonym": "Loan",
    "antonym": "Asset",
    "example": "He has a lot of debt.",
    "category": "Business English",
    "difficulty": "Easy"
  },
  {
    "word": "Default",
    "meaning": "To fail to do something, especially to pay a debt, that you have a legal duty to do.",
    "synonym": "Fail",
    "antonym": "Pay",
    "example": "The company defaulted on its loan.",
    "category": "Business English",
    "difficulty": "Hard"
  },
  {
    "word": "Deficit",
    "meaning": "The amount by which something, especially a sum of money, is too small.",
    "synonym": "Shortfall",
    "antonym": "Surplus",
    "example": "The country has a large budget deficit.",
    "category": "Business English",
    "difficulty": "Hard"
  },
  {
    "word": "Delivery",
    "meaning": "The act of taking goods, letters, parcels, etc. to people's houses or places of work.",
    "synonym": "Transport",
    "antonym": "Keep",
    "example": "The delivery was delayed.",
    "category": "Business English",
    "difficulty": "Easy"
  },
  {
    "word": "Ability",
    "meaning": "The power or skill to do something.",
    "synonym": "Skill",
    "antonym": "Inability",
    "example": "He has the ability to speak three languages.",
    "category": "Daily Conversation",
    "difficulty": "Easy"
  },
  {
    "word": "Able",
    "meaning": "Having the power, skill, means, or opportunity to do something.",
    "synonym": "Capable",
    "antonym": "Unable",
    "example": "He was able to read at the age of four.",
    "category": "Daily Conversation",
    "difficulty": "Easy"
  },
  {
    "word": "Above",
    "meaning": "In or to a higher place than; over.",
    "synonym": "Over",
    "antonym": "Below",
    "example": "The sun rose above the horizon.",
    "category": "Daily Conversation",
    "difficulty": "Easy"
  },
  {
    "word": "Abroad",
    "meaning": "In or to a foreign country or countries.",
    "synonym": "Overseas",
    "antonym": "Home",
    "example": "She often goes abroad on business.",
    "category": "Daily Conversation",
    "difficulty": "Easy"
  },
  {
    "word": "Accept",
    "meaning": "To agree to take something.",
    "synonym": "Receive",
    "antonym": "Reject",
    "example": "Please accept this small gift.",
    "category": "Daily Conversation",
    "difficulty": "Easy"
  },
  {
    "word": "Accident",
    "meaning": "An unfortunate incident that happens unexpectedly and unintentionally.",
    "synonym": "Mishap",
    "antonym": "Plan",
    "example": "He had a car accident.",
    "category": "Daily Conversation",
    "difficulty": "Easy"
  },
  {
    "word": "According",
    "meaning": "As stated by or in.",
    "synonym": "As per",
    "antonym": "Contrary",
    "example": "According to the weather report, it will rain tomorrow.",
    "category": "Daily Conversation",
    "difficulty": "Easy"
  },
  {
    "word": "Account",
    "meaning": "A report or description of an event or experience.",
    "synonym": "Report",
    "antonym": "N/A",
    "example": "She gave a detailed account of her trip.",
    "category": "Daily Conversation",
    "difficulty": "Easy"
  },
  {
    "word": "Across",
    "meaning": "From one side to the other of something.",
    "synonym": "Over",
    "antonym": "Along",
    "example": "He walked across the street.",
    "category": "Daily Conversation",
    "difficulty": "Easy"
  },
  {
    "word": "Act",
    "meaning": "To take action; do something.",
    "synonym": "Perform",
    "antonym": "Wait",
    "example": "You need to act quickly.",
    "category": "Daily Conversation",
    "difficulty": "Easy"
  },
  {
    "word": "Action",
    "meaning": "The fact or process of doing something, typically to achieve an aim.",
    "synonym": "Deed",
    "antonym": "Inaction",
    "example": "Actions speak louder than words.",
    "category": "Daily Conversation",
    "difficulty": "Easy"
  },
  {
    "word": "Activity",
    "meaning": "A thing that a person or group does or has done.",
    "synonym": "Task",
    "antonym": "Rest",
    "example": "What is your favorite activity?",
    "category": "Daily Conversation",
    "difficulty": "Easy"
  },
  {
    "word": "Actually",
    "meaning": "As a matter of fact; in fact.",
    "synonym": "Really",
    "antonym": "Possibly",
    "example": "I actually saw him yesterday.",
    "category": "Daily Conversation",
    "difficulty": "Easy"
  },
  {
    "word": "Add",
    "meaning": "To join something to something else so as to increase the size, number, or amount.",
    "synonym": "Join",
    "antonym": "Subtract",
    "example": "Add some sugar to the tea.",
    "category": "Daily Conversation",
    "difficulty": "Easy"
  },
  {
    "word": "Address",
    "meaning": "The particulars of the place where someone lives or an organization is situated.",
    "synonym": "Location",
    "antonym": "N/A",
    "example": "What is your home address?",
    "category": "Daily Conversation",
    "difficulty": "Easy"
  },
  {
    "word": "Admit",
    "meaning": "To confess to be true or to be the case.",
    "synonym": "Confess",
    "antonym": "Deny",
    "example": "He admitted his mistake.",
    "category": "Daily Conversation",
    "difficulty": "Easy"
  },
  {
    "word": "Adult",
    "meaning": "A person who is fully grown or developed.",
    "synonym": "Grown-up",
    "antonym": "Child",
    "example": "Tickets are cheaper for children than for adults.",
    "category": "Daily Conversation",
    "difficulty": "Easy"
  },
  {
    "word": "Advice",
    "meaning": "Guidance or recommendations offered with regard to prudent future action.",
    "synonym": "Counsel",
    "antonym": "Mislead",
    "example": "Can you give me some advice?",
    "category": "Daily Conversation",
    "difficulty": "Easy"
  },
  {
    "word": "Afford",
    "meaning": "To have enough money to pay for.",
    "synonym": "Pay for",
    "antonym": "N/A",
    "example": "I can't afford a new car.",
    "category": "Daily Conversation",
    "difficulty": "Easy"
  },
  {
    "word": "Afraid",
    "meaning": "Feeling fear or anxiety; frightened.",
    "synonym": "Scared",
    "antonym": "Brave",
    "example": "Don't be afraid.",
    "category": "Daily Conversation",
    "difficulty": "Easy"
  },
  {
    "word": "After",
    "meaning": "In the time following (an event or another period of time).",
    "synonym": "Later",
    "antonym": "Before",
    "example": "We'll go for a walk after dinner.",
    "category": "Daily Conversation",
    "difficulty": "Easy"
  },
  {
    "word": "Afternoon",
    "meaning": "The time from noon or lunchtime to evening.",
    "synonym": "N/A",
    "antonym": "Morning",
    "example": "Good afternoon!",
    "category": "Daily Conversation",
    "difficulty": "Easy"
  },
  {
    "word": "Again",
    "meaning": "Another time; once more.",
    "synonym": "Once more",
    "antonym": "Never",
    "example": "Can you say that again?",
    "category": "Daily Conversation",
    "difficulty": "Easy"
  },
  {
    "word": "Against",
    "meaning": "In opposition to.",
    "synonym": "Opposed to",
    "antonym": "For",
    "example": "The team is playing against its biggest rival.",
    "category": "Daily Conversation",
    "difficulty": "Easy"
  },
  {
    "word": "Age",
    "meaning": "The length of time that a person has lived or a thing has existed.",
    "synonym": "Years",
    "antonym": "N/A",
    "example": "What is your age?",
    "category": "Daily Conversation",
    "difficulty": "Easy"
  },
  {
    "word": "Ago",
    "meaning": "In the past.",
    "synonym": "Back",
    "antonym": "Future",
    "example": "It happened two years ago.",
    "category": "Daily Conversation",
    "difficulty": "Easy"
  },
  {
    "word": "Agree",
    "meaning": "To have the same opinion about something.",
    "synonym": "Concur",
    "antonym": "Disagree",
    "example": "I agree with you.",
    "category": "Daily Conversation",
    "difficulty": "Easy"
  },
  {
    "word": "Ahead",
    "meaning": "Further forward in space or time.",
    "synonym": "Forward",
    "antonym": "Behind",
    "example": "The road ahead is clear.",
    "category": "Daily Conversation",
    "difficulty": "Easy"
  },
  {
    "word": "Air",
    "meaning": "The invisible gaseous substance surrounding the earth.",
    "synonym": "Atmosphere",
    "antonym": "N/A",
    "example": "We need fresh air.",
    "category": "Daily Conversation",
    "difficulty": "Easy"
  },
  {
    "word": "Airport",
    "meaning": "A complex of runways and buildings for the take-off, landing, and maintenance of civil aircraft.",
    "synonym": "Airfield",
    "antonym": "N/A",
    "example": "I'm going to the airport.",
    "category": "Daily Conversation",
    "difficulty": "Easy"
  },
  {
    "word": "Alarm",
    "meaning": "An anxious awareness of danger.",
    "synonym": "Fear",
    "antonym": "Calm",
    "example": "The fire alarm went off.",
    "category": "Daily Conversation",
    "difficulty": "Easy"
  },
  {
    "word": "All",
    "meaning": "Used to refer to the whole quantity or amount of something.",
    "synonym": "Whole",
    "antonym": "None",
    "example": "All the students were present.",
    "category": "Daily Conversation",
    "difficulty": "Easy"
  },
  {
    "word": "Allow",
    "meaning": "To give (someone) permission to do something.",
    "synonym": "Permit",
    "antonym": "Forbid",
    "example": "My parents allow me to go to the party.",
    "category": "Daily Conversation",
    "difficulty": "Easy"
  },
  {
    "word": "Almost",
    "meaning": "Not quite; very nearly.",
    "synonym": "Nearly",
    "antonym": "Entirely",
    "example": "I'm almost finished.",
    "category": "Daily Conversation",
    "difficulty": "Easy"
  },
  {
    "word": "Alone",
    "meaning": "Having no one else present.",
    "synonym": "Solitary",
    "antonym": "Together",
    "example": "He lives alone.",
    "category": "Daily Conversation",
    "difficulty": "Easy"
  },
  {
    "word": "Along",
    "meaning": "Moving in a constant direction on (a path or any more or less horizontal surface).",
    "synonym": "Beside",
    "antonym": "Across",
    "example": "We walked along the beach.",
    "category": "Daily Conversation",
    "difficulty": "Easy"
  },
  {
    "word": "Already",
    "meaning": "Before or by now or the time in question.",
    "synonym": "By now",
    "antonym": "Later",
    "example": "I've already eaten.",
    "category": "Daily Conversation",
    "difficulty": "Easy"
  },
  {
    "word": "Also",
    "meaning": "In addition; too.",
    "synonym": "Too",
    "antonym": "N/A",
    "example": "He is also a doctor.",
    "category": "Daily Conversation",
    "difficulty": "Easy"
  },
  {
    "word": "Always",
    "meaning": "At all times; on all occasions.",
    "synonym": "Constantly",
    "antonym": "Never",
    "example": "I always wake up at 7 o'clock.",
    "category": "Daily Conversation",
    "difficulty": "Easy"
  },
  {
    "word": "Amaze",
    "meaning": "To surprise someone greatly; fill with astonishment.",
    "synonym": "Astonish",
    "antonym": "Bore",
    "example": "She amazed me with her talent.",
    "category": "Daily Conversation",
    "difficulty": "Easy"
  },
  {
    "word": "Amount",
    "meaning": "A quantity of something, especially the total of a thing or things in number, size, value, or extent.",
    "synonym": "Quantity",
    "antonym": "N/A",
    "example": "What is the total amount?",
    "category": "Daily Conversation",
    "difficulty": "Easy"
  },
  {
    "word": "Ancient",
    "meaning": "Belonging to the very distant past and no longer in existence.",
    "synonym": "Antique",
    "antonym": "Modern",
    "example": "The ancient Egyptians built the pyramids.",
    "category": "Daily Conversation",
    "difficulty": "Easy"
  },
  {
    "word": "Angry",
    "meaning": "Feeling or showing strong annoyance, displeasure, or hostility; full of anger.",
    "synonym": "Irritated",
    "antonym": "Happy",
    "example": "Don't be angry with me.",
    "category": "Daily Conversation",
    "difficulty": "Easy"
  },
  {
    "word": "Animal",
    "meaning": "A living organism that feeds on organic matter, typically having specialized sense organs and nervous system and able to respond rapidly to stimuli.",
    "synonym": "Creature",
    "antonym": "Plant",
    "example": "The lion is a dangerous animal.",
    "category": "Daily Conversation",
    "difficulty": "Easy"
  },
  {
    "word": "Another",
    "meaning": "Used to refer to an additional person or thing of the same type as one already mentioned or known about; one more; a further.",
    "synonym": "One more",
    "antonym": "Same",
    "example": "Would you like another cup of tea?",
    "category": "Daily Conversation",
    "difficulty": "Easy"
  },
  {
    "word": "Answer",
    "meaning": "A thing said, written, or done to deal with or as a reaction to a question, statement, or situation.",
    "synonym": "Reply",
    "antonym": "Question",
    "example": "What is your answer?",
    "category": "Daily Conversation",
    "difficulty": "Easy"
  },
  {
    "word": "Anxious",
    "meaning": "Experiencing worry, unease, or nervousness, typically about an imminent event or something with an uncertain outcome.",
    "synonym": "Nervous",
    "antonym": "Confident",
    "example": "I'm feeling anxious about the interview.",
    "category": "Daily Conversation",
    "difficulty": "Easy"
  },
  {
    "word": "Any",
    "meaning": "Used to refer to one or some of a thing or number of things, no matter how much or many.",
    "synonym": "Some",
    "antonym": "None",
    "example": "Do you have any money?",
    "category": "Daily Conversation",
    "difficulty": "Easy"
  },
  {
    "word": "Anyone",
    "meaning": "Any person or people.",
    "synonym": "Anybody",
    "antonym": "Nobody",
    "example": "Is anyone there?",
    "category": "Daily Conversation",
    "difficulty": "Easy"
  },
  {
    "word": "Anything",
    "meaning": "Used to refer to a thing, no matter what.",
    "synonym": "A thing",
    "antonym": "Nothing",
    "example": "Is there anything else?",
    "category": "Daily Conversation",
    "difficulty": "Easy"
  },
  {
    "word": "Anyway",
    "meaning": "Used to confirm or support a point or idea just mentioned.",
    "synonym": "Regardless",
    "antonym": "N/A",
    "example": "Anyway, let's get back to work.",
    "category": "Daily Conversation",
    "difficulty": "Easy"
  },
  {
    "word": "Anywhere",
    "meaning": "At, in, or to any place.",
    "synonym": "Anyplace",
    "antonym": "Nowhere",
    "example": "You can sit anywhere.",
    "category": "Daily Conversation",
    "difficulty": "Easy"
  },
  {
    "word": "Apart",
    "meaning": "(of two or more people or things) separated by a specified distance in time or space.",
    "synonym": "Separated",
    "antonym": "Together",
    "example": "The two houses are 100 meters apart.",
    "category": "Daily Conversation",
    "difficulty": "Easy"
  },
  {
    "word": "Apartment",
    "meaning": "A set of rooms forming an individual residence, typically on one floor and within a larger building.",
    "synonym": "Flat",
    "antonym": "N/A",
    "example": "They live in a small apartment.",
    "category": "Daily Conversation",
    "difficulty": "Easy"
  },
  {
    "word": "Appear",
    "meaning": "To come into sight; become visible or noticeable, typically without visible agent or apparent cause.",
    "synonym": "Emerge",
    "antonym": "Vanish",
    "example": "The sun appeared from behind the clouds.",
    "category": "Daily Conversation",
    "difficulty": "Easy"
  },
  {
    "word": "Apple",
    "meaning": "The round fruit of a tree of the rose family, which typically has thin green or red skin and crisp flesh.",
    "synonym": "N/A",
    "antonym": "N/A",
    "example": "I ate an apple for lunch.",
    "category": "Daily Conversation",
    "difficulty": "Easy"
  },
  {
    "word": "Apply",
    "meaning": "To make a formal application or request.",
    "synonym": "Request",
    "antonym": "N/A",
    "example": "I'm applying for a job.",
    "category": "Daily Conversation",
    "difficulty": "Easy"
  },
  {
    "word": "Appoint",
    "meaning": "To assign a job or role to (someone).",
    "synonym": "Assign",
    "antonym": "Dismiss",
    "example": "He was appointed as the new manager.",
    "category": "Daily Conversation",
    "difficulty": "Easy"
  },
  {
    "word": "Area",
    "meaning": "A region or part of a town, a country, or the world.",
    "synonym": "Region",
    "antonym": "N/A",
    "example": "This is a quiet area.",
    "category": "Daily Conversation",
    "difficulty": "Easy"
  },
  {
    "word": "Argue",
    "meaning": "To give reasons or cite evidence in support of an idea, action, or theory, typically with the aim of persuading others to share one's view.",
    "synonym": "Debate",
    "antonym": "Agree",
    "example": "They are always arguing.",
    "category": "Daily Conversation",
    "difficulty": "Easy"
  },
  {
    "word": "Arm",
    "meaning": "Each of the two upper limbs of the human body from the shoulder to the hand.",
    "synonym": "N/A",
    "antonym": "Leg",
    "example": "He broke his arm.",
    "category": "Daily Conversation",
    "difficulty": "Easy"
  },
  {
    "word": "Around",
    "meaning": "So as to surround or encircle (someone or something).",
    "synonym": "Round",
    "antonym": "In",
    "example": "He walked around the park.",
    "category": "Daily Conversation",
    "difficulty": "Easy"
  },
  {
    "word": "Arrive",
    "meaning": "To reach a destination.",
    "synonym": "Reach",
    "antonym": "Leave",
    "example": "The train arrived on time.",
    "category": "Daily Conversation",
    "difficulty": "Easy"
  },
  {
    "word": "Art",
    "meaning": "The expression or application of human creative skill and imagination, typically in a visual form such as painting or sculpture, producing works to be appreciated primarily for their beauty or emotional power.",
    "synonym": "Creativity",
    "antonym": "N/A",
    "example": "She is interested in modern art.",
    "category": "Daily Conversation",
    "difficulty": "Easy"
  },
  {
    "word": "Article",
    "meaning": "A piece of writing included with others in a newspaper, magazine, or other publication.",
    "synonym": "Piece",
    "antonym": "N/A",
    "example": "I read an interesting article today.",
    "category": "Daily Conversation",
    "difficulty": "Easy"
  },
  {
    "word": "Artist",
    "meaning": "A person who creates paintings or drawings as a profession or hobby.",
    "synonym": "Painter",
    "antonym": "N/A",
    "example": "He is a famous artist.",
    "category": "Daily Conversation",
    "difficulty": "Easy"
  },
  {
    "word": "As",
    "meaning": "Used to indicate that something happens during the time when something else is taking place.",
    "synonym": "While",
    "antonym": "N/A",
    "example": "As I was walking home, I saw a cat.",
    "category": "Daily Conversation",
    "difficulty": "Easy"
  },
  {
    "word": "Ask",
    "meaning": "To say something in order to obtain information or advice.",
    "synonym": "Question",
    "antonym": "Answer",
    "example": "Can I ask you a question?",
    "category": "Daily Conversation",
    "difficulty": "Easy"
  },
  {
    "word": "Asleep",
    "meaning": "In a state of sleep.",
    "synonym": "Sleeping",
    "antonym": "Awake",
    "example": "He is fast asleep.",
    "category": "Daily Conversation",
    "difficulty": "Easy"
  },
  {
    "word": "Assistant",
    "meaning": "A person who ranks below a senior person and whose job is to help them.",
    "synonym": "Helper",
    "antonym": "Boss",
    "example": "She is my assistant.",
    "category": "Daily Conversation",
    "difficulty": "Easy"
  },
  {
    "word": "At",
    "meaning": "Expressing location or arrival in a particular place or position.",
    "synonym": "In",
    "antonym": "Off",
    "example": "I'm at home.",
    "category": "Daily Conversation",
    "difficulty": "Easy"
  },
  {
    "word": "Attack",
    "meaning": "An aggressive and violent act against a person or place.",
    "synonym": "Assault",
    "antonym": "Defend",
    "example": "The army launched an attack.",
    "category": "Daily Conversation",
    "difficulty": "Easy"
  },
  {
    "word": "Attempt",
    "meaning": "An act of trying to do something, especially something difficult.",
    "synonym": "Try",
    "antonym": "Give up",
    "example": "This is my second attempt.",
    "category": "Daily Conversation",
    "difficulty": "Easy"
  },
  {
    "word": "Attend",
    "meaning": "To be present at (an event, meeting, or function).",
    "synonym": "Be present",
    "antonym": "Miss",
    "example": "I'll attend the meeting.",
    "category": "Daily Conversation",
    "difficulty": "Easy"
  },
  {
    "word": "Attention",
    "meaning": "Notice taken of someone or something; the regarding of someone or something as interesting or important.",
    "synonym": "Notice",
    "antonym": "Ignore",
    "example": "Pay attention!",
    "category": "Daily Conversation",
    "difficulty": "Easy"
  },
  {
    "word": "Attract",
    "meaning": "To cause someone to have a liking for or interest in something.",
    "synonym": "Draw",
    "antonym": "Repel",
    "example": "The museum attracts many visitors.",
    "category": "Daily Conversation",
    "difficulty": "Easy"
  },
  {
    "word": "August",
    "meaning": "The eighth month of the year.",
    "synonym": "N/A",
    "antonym": "N/A",
    "example": "I'm going on holiday in August.",
    "category": "Daily Conversation",
    "difficulty": "Easy"
  },
  {
    "word": "Aunt",
    "meaning": "The sister of one's father or mother or the wife of one's uncle.",
    "synonym": "N/A",
    "antonym": "Uncle",
    "example": "My aunt is a teacher.",
    "category": "Daily Conversation",
    "difficulty": "Easy"
  },
  {
    "word": "Author",
    "meaning": "A writer of a book, article, or report.",
    "synonym": "Writer",
    "antonym": "Reader",
    "example": "Who is the author of this book?",
    "category": "Daily Conversation",
    "difficulty": "Easy"
  },
  {
    "word": "Autumn",
    "meaning": "The season after summer and before winter, in which leaves fall from the trees; fall.",
    "synonym": "Fall",
    "antonym": "Spring",
    "example": "I love the colors of autumn.",
    "category": "Daily Conversation",
    "difficulty": "Easy"
  },
  {
    "word": "Available",
    "meaning": "Able to be used or obtained; at someone's disposal.",
    "synonym": "Accessible",
    "antonym": "Unavailable",
    "example": "Is this seat available?",
    "category": "Daily Conversation",
    "difficulty": "Easy"
  },
  {
    "word": "Average",
    "meaning": "A number expressing the central or typical value in a set of data, in particular the mode, median, or (most commonly) the mean, which is calculated by dividing the sum of the values in the set by their number.",
    "synonym": "Mean",
    "antonym": "N/A",
    "example": "The average age of the students is 20.",
    "category": "Daily Conversation",
    "difficulty": "Easy"
  },
  {
    "word": "Avoid",
    "meaning": "To keep away from or stop oneself from doing (something).",
    "synonym": "Shun",
    "antonym": "Face",
    "example": "Try to avoid bad habits.",
    "category": "Daily Conversation",
    "difficulty": "Easy"
  },
  {
    "word": "Awake",
    "meaning": "Not asleep.",
    "synonym": "Conscious",
    "antonym": "Asleep",
    "example": "I was wide awake.",
    "category": "Daily Conversation",
    "difficulty": "Easy"
  },
  {
    "word": "Away",
    "meaning": "At a distance from a particular person or place.",
    "synonym": "Far",
    "antonym": "Near",
    "example": "Go away!",
    "category": "Daily Conversation",
    "difficulty": "Easy"
  },
  {
    "word": "Baby",
    "meaning": "A very young child.",
    "synonym": "Infant",
    "antonym": "Adult",
    "example": "The baby is crying.",
    "category": "Daily Conversation",
    "difficulty": "Easy"
  },
  {
    "word": "Back",
    "meaning": "The rear surface of the human body from the shoulders to the hips.",
    "synonym": "Rear",
    "antonym": "Front",
    "example": "He turned his back on me.",
    "category": "Daily Conversation",
    "difficulty": "Easy"
  },
  {
    "word": "Bad",
    "meaning": "Of poor quality; low standard.",
    "synonym": "Poor",
    "antonym": "Good",
    "example": "This is a bad idea.",
    "category": "Daily Conversation",
    "difficulty": "Easy"
  },
  {
    "word": "Bag",
    "meaning": "A flexible container with an opening at the top, used for carrying things.",
    "synonym": "Sack",
    "antonym": "N/A",
    "example": "I'm carrying a heavy bag.",
    "category": "Daily Conversation",
    "difficulty": "Easy"
  },
  {
    "word": "Ball",
    "meaning": "A solid or hollow spherical or egg-shaped object that is kicked, thrown, or hit in a game.",
    "synonym": "Sphere",
    "antonym": "N/A",
    "example": "He kicked the ball.",
    "category": "Daily Conversation",
    "difficulty": "Easy"
  },
  {
    "word": "Banana",
    "meaning": "A long curved fruit which grows in clusters and has soft pulpy flesh and yellow skin when ripe.",
    "synonym": "N/A",
    "antonym": "N/A",
    "example": "I like bananas.",
    "category": "Daily Conversation",
    "difficulty": "Easy"
  },
  {
    "word": "Bank",
    "meaning": "A financial establishment that invests money deposited by customers, pays it out when required, makes loans at interest, and exchanges currency.",
    "synonym": "N/A",
    "antonym": "N/A",
    "example": "I'm going to the bank.",
    "category": "Daily Conversation",
    "difficulty": "Easy"
  },
  {
    "word": "Bar",
    "meaning": "A counter in a pub, restaurant, or cafe across which drinks or refreshments are served.",
    "synonym": "Counter",
    "antonym": "N/A",
    "example": "Let's go to the bar.",
    "category": "Daily Conversation",
    "difficulty": "Easy"
  },
  {
    "word": "Base",
    "meaning": "The lowest part or edge of something, especially the part on which it rests or is supported.",
    "synonym": "Bottom",
    "antonym": "Top",
    "example": "The base of the mountain.",
    "category": "Daily Conversation",
    "difficulty": "Easy"
  },
  {
    "word": "Basic",
    "meaning": "Forming an essential foundation or starting point; fundamental.",
    "synonym": "Fundamental",
    "antonym": "Advanced",
    "example": "This is a basic rule.",
    "category": "Daily Conversation",
    "difficulty": "Easy"
  },
  {
    "word": "Bath",
    "meaning": "An act of washing one's body in a large container of water.",
    "synonym": "Wash",
    "antonym": "N/A",
    "example": "I'm going to take a bath.",
    "category": "Daily Conversation",
    "difficulty": "Easy"
  },
  {
    "word": "Bathroom",
    "meaning": "A room containing a bath or shower and typically also a washbasin and a toilet.",
    "synonym": "Restroom",
    "antonym": "N/A",
    "example": "Where is the bathroom?",
    "category": "Daily Conversation",
    "difficulty": "Easy"
  },
  {
    "word": "Be",
    "meaning": "To exist.",
    "synonym": "Exist",
    "antonym": "Die",
    "example": "I want to be a doctor.",
    "category": "Daily Conversation",
    "difficulty": "Easy"
  },
  {
    "word": "Beach",
    "meaning": "A pebbly or sandy shore, especially by the ocean between high- and low-water marks.",
    "synonym": "Shore",
    "antonym": "N/A",
    "example": "We spent the day at the beach.",
    "category": "Daily Conversation",
    "difficulty": "Easy"
  },
  {
    "word": "Beautiful",
    "meaning": "Pleasing the senses or mind aesthetically.",
    "synonym": "Lovely",
    "antonym": "Ugly",
    "example": "This is a beautiful flower.",
    "category": "Daily Conversation",
    "difficulty": "Easy"
  },
  {
    "word": "Because",
    "meaning": "For the reason that; since.",
    "synonym": "Since",
    "antonym": "N/A",
    "example": "I'm happy because I passed the exam.",
    "category": "Daily Conversation",
    "difficulty": "Easy"
  },
  {
    "word": "Become",
    "meaning": "To begin to be.",
    "synonym": "Grow into",
    "antonym": "N/A",
    "example": "He became a famous actor.",
    "category": "Daily Conversation",
    "difficulty": "Easy"
  },
  {
    "word": "Bed",
    "meaning": "A piece of furniture for sleep or rest, typically a framework with a mattress and coverings.",
    "synonym": "N/A",
    "antonym": "N/A",
    "example": "I'm going to bed.",
    "category": "Daily Conversation",
    "difficulty": "Easy"
  },
  {
    "word": "Bedroom",
    "meaning": "A room for sleeping in.",
    "synonym": "N/A",
    "antonym": "N/A",
    "example": "This is my bedroom.",
    "category": "Daily Conversation",
    "difficulty": "Easy"
  },
  {
    "word": "Beer",
    "meaning": "An alcoholic drink made from yeast-fermented malt flavored with hops.",
    "synonym": "N/A",
    "antonym": "N/A",
    "example": "Would you like a beer?",
    "category": "Daily Conversation",
    "difficulty": "Easy"
  },
  {
    "word": "Before",
    "meaning": "During the period of time preceding (a particular event or time).",
    "synonym": "Prior to",
    "antonym": "After",
    "example": "I'll see you before dinner.",
    "category": "Daily Conversation",
    "difficulty": "Easy"
  },
  {
    "word": "Begin",
    "meaning": "To start; perform or undergo the first part of (an action or activity).",
    "synonym": "Start",
    "antonym": "End",
    "example": "The show will begin at 8 o'clock.",
    "category": "Daily Conversation",
    "difficulty": "Easy"
  },
  {
    "word": "Beginning",
    "meaning": "The point in time or space at which something starts.",
    "synonym": "Start",
    "antonym": "End",
    "example": "This is the beginning of the movie.",
    "category": "Daily Conversation",
    "difficulty": "Easy"
  },
  {
    "word": "Behind",
    "meaning": "At or to the far side of (something), typically so as to be hidden by it.",
    "synonym": "Rear",
    "antonym": "Front",
    "example": "He was hiding behind the tree.",
    "category": "Daily Conversation",
    "difficulty": "Easy"
  },
  {
    "word": "Believe",
    "meaning": "To accept that (a statement) is true or that someone is telling the truth.",
    "synonym": "Trust",
    "antonym": "Doubt",
    "example": "I believe you.",
    "category": "Daily Conversation",
    "difficulty": "Easy"
  },
  {
    "word": "Below",
    "meaning": "At a lower level or layer than.",
    "synonym": "Under",
    "antonym": "Above",
    "example": "The sun is below the horizon.",
    "category": "Daily Conversation",
    "difficulty": "Easy"
  },
  {
    "word": "Beside",
    "meaning": "At the side of; next to.",
    "synonym": "Next to",
    "antonym": "Far from",
    "example": "Sit beside me.",
    "category": "Daily Conversation",
    "difficulty": "Easy"
  },
  {
    "word": "Best",
    "meaning": "Of the most excellent or desirable type or quality.",
    "synonym": "Finest",
    "antonym": "Worst",
    "example": "This is the best day ever.",
    "category": "Daily Conversation",
    "difficulty": "Easy"
  },
  {
    "word": "Better",
    "meaning": "More desirable, satisfactory, or effective.",
    "synonym": "Superior",
    "antonym": "Worse",
    "example": "I feel better today.",
    "category": "Daily Conversation",
    "difficulty": "Easy"
  },
  {
    "word": "Between",
    "meaning": "At, into, or across the space separating (two objects or regions).",
    "synonym": "Amid",
    "antonym": "N/A",
    "example": "The house is between the two trees.",
    "category": "Daily Conversation",
    "difficulty": "Easy"
  },
  {
    "word": "Beyond",
    "meaning": "At or to the further side of.",
    "synonym": "Past",
    "antonym": "N/A",
    "example": "The park is beyond the school.",
    "category": "Daily Conversation",
    "difficulty": "Easy"
  },
  {
    "word": "Bicycle",
    "meaning": "A vehicle consisting of two wheels held in a frame one behind the other, propelled by pedals and steered with handlebars attached to the front wheel.",
    "synonym": "Bike",
    "antonym": "N/A",
    "example": "I'm riding my bicycle.",
    "category": "Daily Conversation",
    "difficulty": "Easy"
  },
  {
    "word": "Big",
    "meaning": "Of considerable size, extent, or intensity.",
    "synonym": "Large",
    "antonym": "Small",
    "example": "That's a big house.",
    "category": "Daily Conversation",
    "difficulty": "Easy"
  },
  {
    "word": "Bill",
    "meaning": "A printed or written statement of the money owed for goods or services.",
    "synonym": "Invoice",
    "antonym": "N/A",
    "example": "Can I have the bill, please?",
    "category": "Daily Conversation",
    "difficulty": "Easy"
  },
  {
    "word": "Bird",
    "meaning": "A warm-blooded egg-laying vertebrate distinguished by the possession of feathers, wings, and a beak and (typically) by being able to fly.",
    "synonym": "N/A",
    "antonym": "N/A",
    "example": "The bird is singing.",
    "category": "Daily Conversation",
    "difficulty": "Easy"
  },
  {
    "word": "Birthday",
    "meaning": "The anniversary of the day on which a person was born, typically treated as an occasion for celebration and the giving of gifts.",
    "synonym": "N/A",
    "antonym": "N/A",
    "example": "Happy Birthday!",
    "category": "Daily Conversation",
    "difficulty": "Easy"
  },
  {
    "word": "Black",
    "meaning": "Of the very darkest color owing to the absence of or complete absorption of light; the opposite of white.",
    "synonym": "Dark",
    "antonym": "White",
    "example": "He's wearing a black suit.",
    "category": "Daily Conversation",
    "difficulty": "Easy"
  },
  {
    "word": "Blood",
    "meaning": "The red liquid that circulates in the arteries and veins of humans and other vertebrate animals, carrying oxygen to and carbon dioxide from the tissues of the body.",
    "synonym": "N/A",
    "antonym": "N/A",
    "example": "He lost a lot of blood.",
    "category": "Daily Conversation",
    "difficulty": "Easy"
  },
  {
    "word": "Blue",
    "meaning": "Of a color intermediate between green and violet, as of the sky or sea on a sunny day.",
    "synonym": "Azure",
    "antonym": "N/A",
    "example": "The sky is blue.",
    "category": "Daily Conversation",
    "difficulty": "Easy"
  },
  {
    "word": "Board",
    "meaning": "A long, thin, flat piece of wood or other hard material, used for floors or other building purposes.",
    "synonym": "Plank",
    "antonym": "N/A",
    "example": "The teacher wrote on the board.",
    "category": "Daily Conversation",
    "difficulty": "Easy"
  },
  {
    "word": "Boat",
    "meaning": "A small vessel for traveling on water.",
    "synonym": "Ship",
    "antonym": "N/A",
    "example": "We're going on a boat trip.",
    "category": "Daily Conversation",
    "difficulty": "Easy"
  },
  {
    "word": "Body",
    "meaning": "The physical structure of a person or an animal, including the bones, flesh, and organs.",
    "synonym": "Physique",
    "antonym": "Soul",
    "example": "He has a strong body.",
    "category": "Daily Conversation",
    "difficulty": "Easy"
  },
  {
    "word": "Bone",
    "meaning": "Any of the pieces of hard, whitish tissue making up the skeleton in humans and other vertebrates.",
    "synonym": "N/A",
    "antonym": "N/A",
    "example": "He broke a bone.",
    "category": "Daily Conversation",
    "difficulty": "Easy"
  },
  {
    "word": "Book",
    "meaning": "A written or printed work consisting of pages glued or sewn together along one side and bound in covers.",
    "synonym": "Volume",
    "antonym": "N/A",
    "example": "I'm reading a good book.",
    "category": "Daily Conversation",
    "difficulty": "Easy"
  },
  {
    "word": "Boot",
    "meaning": "A sturdy item of footwear covering the foot and ankle, and sometimes also the lower leg.",
    "synonym": "Shoe",
    "antonym": "N/A",
    "example": "I'm wearing my boots.",
    "category": "Daily Conversation",
    "difficulty": "Easy"
  },
  {
    "word": "Border",
    "meaning": "A line separating two countries, administrative divisions, or other areas.",
    "synonym": "Boundary",
    "antonym": "Center",
    "example": "We crossed the border.",
    "category": "Daily Conversation",
    "difficulty": "Easy"
  },
  {
    "word": "Bore",
    "meaning": "To make someone feel weary and uninterested by tedious talk or dullness.",
    "synonym": "Tire",
    "antonym": "Interest",
    "example": "The movie was so boring.",
    "category": "Daily Conversation",
    "difficulty": "Easy"
  },
  {
    "word": "Algorithm",
    "meaning": "A process or set of rules to be followed in calculations or other problem-solving operations.",
    "synonym": "Procedure",
    "antonym": "N/A",
    "example": "The social media algorithm determines what you see.",
    "category": "Technology & IT",
    "difficulty": "Hard"
  },
  {
    "word": "Application",
    "meaning": "A program or piece of software designed to fulfill a particular purpose.",
    "synonym": "App",
    "antonym": "N/A",
    "example": "I downloaded a new application for photo editing.",
    "category": "Technology & IT",
    "difficulty": "Easy"
  },
  {
    "word": "Authentication",
    "meaning": "The process or action of verifying the identity of a user or process.",
    "synonym": "Verification",
    "antonym": "N/A",
    "example": "Two-factor authentication adds an extra layer of security.",
    "category": "Technology & IT",
    "difficulty": "Medium"
  },
  {
    "word": "Backup",
    "meaning": "A copy of a file or other item of data made in case the original is lost or damaged.",
    "synonym": "Copy",
    "antonym": "Original",
    "example": "Always keep a backup of your important files.",
    "category": "Technology & IT",
    "difficulty": "Easy"
  },
  {
    "word": "Bandwidth",
    "meaning": "The transmission capacity of a computer network or other telecommunication system.",
    "synonym": "Capacity",
    "antonym": "N/A",
    "example": "The video is buffering because of low bandwidth.",
    "category": "Technology & IT",
    "difficulty": "Medium"
  },
  {
    "word": "Binary",
    "meaning": "A system of numerical notation to the base 2.",
    "synonym": "Digital",
    "antonym": "Analog",
    "example": "Computers process information in binary form.",
    "category": "Technology & IT",
    "difficulty": "Medium"
  },
  {
    "word": "Bit",
    "meaning": "The smallest unit of data in a computer.",
    "synonym": "Binary digit",
    "antonym": "N/A",
    "example": "A byte consists of eight bits.",
    "category": "Technology & IT",
    "difficulty": "Easy"
  },
  {
    "word": "Blog",
    "meaning": "A regularly updated website or web page, typically one run by an individual or small group.",
    "synonym": "Weblog",
    "antonym": "N/A",
    "example": "She writes a travel blog.",
    "category": "Technology & IT",
    "difficulty": "Easy"
  },
  {
    "word": "Bluetooth",
    "meaning": "A standard for the short-range wireless interconnection of mobile phones, computers, and other electronic devices.",
    "synonym": "Wireless",
    "antonym": "Wired",
    "example": "Connect your headphones via Bluetooth.",
    "category": "Technology & IT",
    "difficulty": "Easy"
  },
  {
    "word": "Boot",
    "meaning": "To start (a computer) and load its operating system.",
    "synonym": "Start up",
    "antonym": "Shut down",
    "example": "Wait for the computer to boot.",
    "category": "Technology & IT",
    "difficulty": "Easy"
  },
  {
    "word": "Browser",
    "meaning": "A program with a graphical user interface for displaying HTML files.",
    "synonym": "Web browser",
    "antonym": "N/A",
    "example": "Which browser do you use?",
    "category": "Technology & IT",
    "difficulty": "Easy"
  },
  {
    "word": "Bug",
    "meaning": "An error, flaw, or fault in a computer program or system.",
    "synonym": "Error",
    "antonym": "Fix",
    "example": "The latest update fixed a major bug.",
    "category": "Technology & IT",
    "difficulty": "Easy"
  },
  {
    "word": "Byte",
    "meaning": "A group of binary digits or bits (usually eight) operated on as a unit.",
    "synonym": "N/A",
    "antonym": "N/A",
    "example": "A kilobyte is 1024 bytes.",
    "category": "Technology & IT",
    "difficulty": "Easy"
  },
  {
    "word": "Cache",
    "meaning": "A hardware or software component that stores data so that future requests for that data can be served faster.",
    "synonym": "Storage",
    "antonym": "N/A",
    "example": "Clear your browser cache to see the changes.",
    "category": "Technology & IT",
    "difficulty": "Medium"
  },
  {
    "word": "Chip",
    "meaning": "A tiny wafer of semiconducting material used to make an integrated circuit.",
    "synonym": "Microchip",
    "antonym": "N/A",
    "example": "The computer uses a powerful processor chip.",
    "category": "Technology & IT",
    "difficulty": "Easy"
  },
  {
    "word": "Cloud",
    "meaning": "A network of remote servers hosted on the internet and used to store, manage, and process data in place of local servers or personal computers.",
    "synonym": "Online storage",
    "antonym": "Local",
    "example": "Store your photos in the cloud.",
    "category": "Technology & IT",
    "difficulty": "Easy"
  },
  {
    "word": "Code",
    "meaning": "Program instructions.",
    "synonym": "Software",
    "antonym": "N/A",
    "example": "He's writing code for a new game.",
    "category": "Technology & IT",
    "difficulty": "Easy"
  },
  {
    "word": "Command",
    "meaning": "An instruction to a computer to perform a specific task.",
    "synonym": "Instruction",
    "antonym": "N/A",
    "example": "Enter the command in the terminal.",
    "category": "Technology & IT",
    "difficulty": "Easy"
  },
  {
    "word": "Compiler",
    "meaning": "A program that translates computer code written in one programming language into another language.",
    "synonym": "Translator",
    "antonym": "N/A",
    "example": "The compiler reported several syntax errors.",
    "category": "Technology & IT",
    "difficulty": "Hard"
  },
  {
    "word": "Computer",
    "meaning": "An electronic device for storing and processing data.",
    "synonym": "PC",
    "antonym": "N/A",
    "example": "I use my computer for work every day.",
    "category": "Technology & IT",
    "difficulty": "Easy"
  },
  {
    "word": "Cookie",
    "meaning": "A small piece of data sent from a website and stored on the user's computer by the user's web browser while the user is browsing.",
    "synonym": "Tracker",
    "antonym": "N/A",
    "example": "This website uses cookies to improve your experience.",
    "category": "Technology & IT",
    "difficulty": "Easy"
  },
  {
    "word": "CPU",
    "meaning": "Central Processing Unit; the primary component of a computer that acts as its 'control center'.",
    "synonym": "Processor",
    "antonym": "N/A",
    "example": "The CPU is the brain of the computer.",
    "category": "Technology & IT",
    "difficulty": "Medium"
  },
  {
    "word": "Crash",
    "meaning": "(of a computer, system, or software) to stop functioning suddenly and unexpectedly.",
    "synonym": "Fail",
    "antonym": "Run",
    "example": "My computer crashed and I lost my work.",
    "category": "Technology & IT",
    "difficulty": "Easy"
  },
  {
    "word": "Cursor",
    "meaning": "A movable indicator on a computer screen identifying the point that will be affected by input from the user.",
    "synonym": "Pointer",
    "antonym": "N/A",
    "example": "Move the cursor to the top of the screen.",
    "category": "Technology & IT",
    "difficulty": "Easy"
  },
  {
    "word": "Data",
    "meaning": "Facts and statistics collected together for reference or analysis.",
    "synonym": "Information",
    "antonym": "N/A",
    "example": "We need to analyze the data.",
    "category": "Technology & IT",
    "difficulty": "Easy"
  },
  {
    "word": "Database",
    "meaning": "A structured set of data held in a computer.",
    "synonym": "Data store",
    "antonym": "N/A",
    "example": "The information is stored in a central database.",
    "category": "Technology & IT",
    "difficulty": "Medium"
  },
  {
    "word": "Debug",
    "meaning": "Identify and remove errors from (computer hardware or software).",
    "synonym": "Fix",
    "antonym": "N/A",
    "example": "He spent all night debugging the program.",
    "category": "Technology & IT",
    "difficulty": "Medium"
  },
  {
    "word": "Desktop",
    "meaning": "The working area of a computer screen.",
    "synonym": "N/A",
    "antonym": "N/A",
    "example": "I have too many icons on my desktop.",
    "category": "Technology & IT",
    "difficulty": "Easy"
  },
  {
    "word": "Digital",
    "meaning": "(of signals or data) expressed as series of the digits 0 and 1.",
    "synonym": "Electronic",
    "antonym": "Analog",
    "example": "We live in a digital age.",
    "category": "Technology & IT",
    "difficulty": "Easy"
  },
  {
    "word": "Directory",
    "meaning": "A file system cataloging structure in which references to other computer files, and possibly other directories, are kept.",
    "synonym": "Folder",
    "antonym": "N/A",
    "example": "Go to the root directory.",
    "category": "Technology & IT",
    "difficulty": "Medium"
  },
  {
    "word": "Disk",
    "meaning": "A flat, thin, round object of magnetic or optical material which can be used to store data.",
    "synonym": "Drive",
    "antonym": "N/A",
    "example": "Insert the disk into the drive.",
    "category": "Technology & IT",
    "difficulty": "Easy"
  },
  {
    "word": "Domain",
    "meaning": "A distinct subset of the internet with addresses sharing a common suffix or under the control of a particular organization or individual.",
    "synonym": "Address",
    "antonym": "N/A",
    "example": "What is your domain name?",
    "category": "Technology & IT",
    "difficulty": "Easy"
  },
  {
    "word": "Download",
    "meaning": "Copy (data) from one computer system to another, typically over the internet.",
    "synonym": "Get",
    "antonym": "Upload",
    "example": "Download the file from the website.",
    "category": "Technology & IT",
    "difficulty": "Easy"
  },
  {
    "word": "Driver",
    "meaning": "A program that controls the operation of a particular type of device attached to a computer.",
    "synonym": "Device driver",
    "antonym": "N/A",
    "example": "You need to update your printer driver.",
    "category": "Technology & IT",
    "difficulty": "Medium"
  },
  {
    "word": "Email",
    "meaning": "Messages distributed by electronic means from one computer user to one or more recipients via a network.",
    "synonym": "Electronic mail",
    "antonym": "N/A",
    "example": "Send me an email.",
    "category": "Technology & IT",
    "difficulty": "Easy"
  },
  {
    "word": "Encryption",
    "meaning": "The process of converting information or data into a code, especially to prevent unauthorized access.",
    "synonym": "Coding",
    "antonym": "Decryption",
    "example": "Data encryption is essential for security.",
    "category": "Technology & IT",
    "difficulty": "Hard"
  },
  {
    "word": "Ethernet",
    "meaning": "A system for connecting a number of computer systems to form a local area network.",
    "synonym": "Network",
    "antonym": "N/A",
    "example": "Connect the computer via Ethernet cable.",
    "category": "Technology & IT",
    "difficulty": "Medium"
  },
  {
    "word": "File",
    "meaning": "A collection of data, programs, etc., stored in a computer's memory or on a storage device.",
    "synonym": "Document",
    "antonym": "N/A",
    "example": "Open the file.",
    "category": "Technology & IT",
    "difficulty": "Easy"
  },
  {
    "word": "Firewall",
    "meaning": "A part of a computer system or network that is designed to block unauthorized access while permitting outward communication.",
    "synonym": "Security",
    "antonym": "N/A",
    "example": "The firewall blocked the suspicious connection.",
    "category": "Technology & IT",
    "difficulty": "Medium"
  },
  {
    "word": "Flash",
    "meaning": "A type of non-volatile computer memory that can be electrically erased and reprogrammed.",
    "synonym": "N/A",
    "antonym": "N/A",
    "example": "Use a flash drive to transfer files.",
    "category": "Technology & IT",
    "difficulty": "Easy"
  },
  {
    "word": "Folder",
    "meaning": "A virtual container within a digital file system in which groups of computer files and other folders can be kept and organized.",
    "synonym": "Directory",
    "antonym": "N/A",
    "example": "Create a new folder.",
    "category": "Technology & IT",
    "difficulty": "Easy"
  },
  {
    "word": "Font",
    "meaning": "A set of type of one particular face and size.",
    "synonym": "Typeface",
    "antonym": "N/A",
    "example": "Change the font size.",
    "category": "Technology & IT",
    "difficulty": "Easy"
  },
  {
    "word": "Format",
    "meaning": "The way in which something is arranged or set out.",
    "synonym": "Layout",
    "antonym": "N/A",
    "example": "What is the file format?",
    "category": "Technology & IT",
    "difficulty": "Easy"
  },
  {
    "word": "Frame",
    "meaning": "A single image in a sequence of pictures.",
    "synonym": "Image",
    "antonym": "N/A",
    "example": "The video has a high frame rate.",
    "category": "Technology & IT",
    "difficulty": "Medium"
  },
  {
    "word": "Freeware",
    "meaning": "Software that is available free of charge.",
    "synonym": "Free software",
    "antonym": "Paid software",
    "example": "This program is freeware.",
    "category": "Technology & IT",
    "difficulty": "Easy"
  },
  {
    "word": "Function",
    "meaning": "A section of code that performs a specific task.",
    "synonym": "Procedure",
    "antonym": "N/A",
    "example": "Define a new function.",
    "category": "Technology & IT",
    "difficulty": "Medium"
  },
  {
    "word": "Gateway",
    "meaning": "A device used to connect two different networks.",
    "synonym": "N/A",
    "antonym": "N/A",
    "example": "The gateway is down.",
    "category": "Technology & IT",
    "difficulty": "Medium"
  },
  {
    "word": "Gigabyte",
    "meaning": "A unit of information equal to one billion bytes.",
    "synonym": "GB",
    "antonym": "N/A",
    "example": "The file size is 2 gigabytes.",
    "category": "Technology & IT",
    "difficulty": "Easy"
  },
  {
    "word": "Glitch",
    "meaning": "A sudden, usually temporary, malfunction or fault in an equipment or program.",
    "synonym": "Error",
    "antonym": "N/A",
    "example": "The system suffered a minor glitch.",
    "category": "Technology & IT",
    "difficulty": "Easy"
  },
  {
    "word": "Graphics",
    "meaning": "The products of the graphic arts, especially commercial design or illustration.",
    "synonym": "Images",
    "antonym": "N/A",
    "example": "The game has great graphics.",
    "category": "Technology & IT",
    "difficulty": "Easy"
  },
  {
    "word": "Hacker",
    "meaning": "A person who uses computers to gain unauthorized access to data.",
    "synonym": "Intruder",
    "antonym": "Security expert",
    "example": "A hacker gained access to the system.",
    "category": "Technology & IT",
    "difficulty": "Easy"
  },
  {
    "word": "Hard Drive",
    "meaning": "A high-capacity, self-contained storage device containing a read-write mechanism plus one or more hard disks, inside a sealed unit.",
    "synonym": "Hard disk",
    "antonym": "N/A",
    "example": "My hard drive is full.",
    "category": "Technology & IT",
    "difficulty": "Easy"
  },
  {
    "word": "Hardware",
    "meaning": "The physical parts of a computer and related devices.",
    "synonym": "Equipment",
    "antonym": "Software",
    "example": "The hardware needs to be replaced.",
    "category": "Technology & IT",
    "difficulty": "Easy"
  },
  {
    "word": "Heap",
    "meaning": "A specialized tree-based data structure.",
    "synonym": "N/A",
    "antonym": "N/A",
    "example": "The memory is allocated from the heap.",
    "category": "Technology & IT",
    "difficulty": "Hard"
  },
  {
    "word": "Homepage",
    "meaning": "The introductory page of a website.",
    "synonym": "N/A",
    "antonym": "N/A",
    "example": "Go back to the homepage.",
    "category": "Technology & IT",
    "difficulty": "Easy"
  },
  {
    "word": "Host",
    "meaning": "A computer or other device connected to a computer network.",
    "synonym": "Server",
    "antonym": "N/A",
    "example": "The website is hosted on a remote server.",
    "category": "Technology & IT",
    "difficulty": "Medium"
  },
  {
    "word": "HTML",
    "meaning": "HyperText Markup Language; the standard markup language for documents designed to be displayed in a web browser.",
    "synonym": "N/A",
    "antonym": "N/A",
    "example": "The website is written in HTML.",
    "category": "Technology & IT",
    "difficulty": "Medium"
  },
  {
    "word": "HTTP",
    "meaning": "HyperText Transfer Protocol; an application protocol for distributed, collaborative, hypermedia information systems.",
    "synonym": "N/A",
    "antonym": "N/A",
    "example": "The browser uses HTTP to communicate with the server.",
    "category": "Technology & IT",
    "difficulty": "Medium"
  },
  {
    "word": "Icon",
    "meaning": "A symbol or graphic representation on a screen of a program, option, or window.",
    "synonym": "Symbol",
    "antonym": "N/A",
    "example": "Click on the icon to open the app.",
    "category": "Technology & IT",
    "difficulty": "Easy"
  },
  {
    "word": "Input",
    "meaning": "Data that a computer receives.",
    "synonym": "Entry",
    "antonym": "Output",
    "example": "Enter the input data.",
    "category": "Technology & IT",
    "difficulty": "Easy"
  },
  {
    "word": "Install",
    "meaning": "Place or fix (equipment or machinery) in position ready for use.",
    "synonym": "Set up",
    "antonym": "Uninstall",
    "example": "Install the latest updates.",
    "category": "Technology & IT",
    "difficulty": "Easy"
  },
  {
    "word": "Interface",
    "meaning": "A device or program enabling a user to communicate with a computer.",
    "synonym": "N/A",
    "antonym": "N/A",
    "example": "The user interface is very friendly.",
    "category": "Technology & IT",
    "difficulty": "Medium"
  },
  {
    "word": "Internet",
    "meaning": "A global computer network providing a variety of information and communication facilities.",
    "synonym": "Web",
    "antonym": "N/A",
    "example": "I use the internet for research.",
    "category": "Technology & IT",
    "difficulty": "Easy"
  },
  {
    "word": "IP Address",
    "meaning": "Internet Protocol address; a numerical label assigned to each device connected to a computer network.",
    "synonym": "Address",
    "antonym": "N/A",
    "example": "What is your IP address?",
    "category": "Technology & IT",
    "difficulty": "Medium"
  },
  {
    "word": "Java",
    "meaning": "A high-level, class-based, object-oriented programming language.",
    "synonym": "N/A",
    "antonym": "N/A",
    "example": "The program is written in Java.",
    "category": "Technology & IT",
    "difficulty": "Medium"
  },
  {
    "word": "JavaScript",
    "meaning": "A programming language that is one of the core technologies of the World Wide Web.",
    "synonym": "JS",
    "antonym": "N/A",
    "example": "JavaScript is used for web development.",
    "category": "Technology & IT",
    "difficulty": "Medium"
  },
  {
    "word": "Kernel",
    "meaning": "The core of an operating system.",
    "synonym": "Core",
    "antonym": "N/A",
    "example": "The kernel manages the system resources.",
    "category": "Technology & IT",
    "difficulty": "Hard"
  },
  {
    "word": "Keyboard",
    "meaning": "A panel of keys that operate a computer or typewriter.",
    "synonym": "N/A",
    "antonym": "N/A",
    "example": "I need a new keyboard.",
    "category": "Technology & IT",
    "difficulty": "Easy"
  },
  {
    "word": "Kilobyte",
    "meaning": "A unit of memory or data equal to 1024 bytes.",
    "synonym": "KB",
    "antonym": "N/A",
    "example": "The file size is 500 kilobytes.",
    "category": "Technology & IT",
    "difficulty": "Easy"
  },
  {
    "word": "Laptop",
    "meaning": "A computer that is portable and suitable for use while traveling.",
    "synonym": "Notebook",
    "antonym": "N/A",
    "example": "I'm working on my laptop.",
    "category": "Technology & IT",
    "difficulty": "Easy"
  },
  {
    "word": "Link",
    "meaning": "A relationship between two things.",
    "synonym": "Connection",
    "antonym": "N/A",
    "example": "Click on the link to visit the website.",
    "category": "Technology & IT",
    "difficulty": "Easy"
  },
  {
    "word": "Linux",
    "meaning": "An open-source Unix-like operating system based on the Linux kernel.",
    "synonym": "N/A",
    "antonym": "N/A",
    "example": "I use Linux on my server.",
    "category": "Technology & IT",
    "difficulty": "Medium"
  },
  {
    "word": "Load",
    "meaning": "Transfer (data) into a computer memory from another storage device.",
    "synonym": "Charge",
    "antonym": "Unload",
    "example": "Wait for the page to load.",
    "category": "Technology & IT",
    "difficulty": "Easy"
  },
  {
    "word": "Log in",
    "meaning": "Go through the procedures to begin use of a computer system.",
    "synonym": "Sign in",
    "antonym": "Log out",
    "example": "Log in to your account.",
    "category": "Technology & IT",
    "difficulty": "Easy"
  },
  {
    "word": "Loop",
    "meaning": "A sequence of instructions that is continually repeated until a certain condition is reached.",
    "synonym": "Iteration",
    "antonym": "N/A",
    "example": "The program enters an infinite loop.",
    "category": "Technology & IT",
    "difficulty": "Medium"
  },
  {
    "word": "Malware",
    "meaning": "Software that is specifically designed to disrupt, damage, or gain unauthorized access to a computer system.",
    "synonym": "Virus",
    "antonym": "Security software",
    "example": "The malware infected the whole network.",
    "category": "Technology & IT",
    "difficulty": "Medium"
  },
  {
    "word": "Memory",
    "meaning": "The faculty by which the mind stores and remembers information.",
    "synonym": "Storage",
    "antonym": "N/A",
    "example": "The computer needs more memory.",
    "category": "Technology & IT",
    "difficulty": "Easy"
  },
  {
    "word": "Menu",
    "meaning": "A list of commands or facilities displayed on screen.",
    "synonym": "N/A",
    "antonym": "N/A",
    "example": "Open the file menu.",
    "category": "Technology & IT",
    "difficulty": "Easy"
  },
  {
    "word": "Message",
    "meaning": "A verbal, written, or recorded communication sent to or left for a recipient who cannot be contacted directly.",
    "synonym": "Communication",
    "antonym": "N/A",
    "example": "Send me a message.",
    "category": "Technology & IT",
    "difficulty": "Easy"
  },
  {
    "word": "Microchip",
    "meaning": "A tiny wafer of semiconducting material used to make an integrated circuit.",
    "synonym": "Chip",
    "antonym": "N/A",
    "example": "The microchip is very small.",
    "category": "Technology & IT",
    "difficulty": "Easy"
  },
  {
    "word": "Modem",
    "meaning": "A combined device for modulation and demodulation.",
    "synonym": "N/A",
    "antonym": "N/A",
    "example": "The modem is connected to the phone line.",
    "category": "Technology & IT",
    "difficulty": "Easy"
  },
  {
    "word": "Monitor",
    "meaning": "A screen which displays an image from a computer.",
    "synonym": "Screen",
    "antonym": "N/A",
    "example": "The monitor is very large.",
    "category": "Technology & IT",
    "difficulty": "Easy"
  },
  {
    "word": "Motherboard",
    "meaning": "A printed circuit board containing the principal components of a computer or other device.",
    "synonym": "Mainboard",
    "antonym": "N/A",
    "example": "The CPU is attached to the motherboard.",
    "category": "Technology & IT",
    "difficulty": "Medium"
  },
  {
    "word": "Mouse",
    "meaning": "A small handheld device that is dragged across a flat surface to move the cursor on a computer screen.",
    "synonym": "N/A",
    "antonym": "N/A",
    "example": "Use the mouse to click on the button.",
    "category": "Technology & IT",
    "difficulty": "Easy"
  },
  {
    "word": "Multimedia",
    "meaning": "Using more than one medium of expression or communication.",
    "synonym": "N/A",
    "antonym": "N/A",
    "example": "The presentation is a multimedia experience.",
    "category": "Technology & IT",
    "difficulty": "Easy"
  },
  {
    "word": "Network",
    "meaning": "A group or system of interconnected people or things.",
    "synonym": "Web",
    "antonym": "Isolation",
    "example": "The computer is connected to the network.",
    "category": "Technology & IT",
    "difficulty": "Easy"
  },
  {
    "word": "Node",
    "meaning": "A point in a network or diagram at which lines or pathways intersect or branch.",
    "synonym": "Point",
    "antonym": "N/A",
    "example": "Each computer is a node in the network.",
    "category": "Technology & IT",
    "difficulty": "Hard"
  },
  {
    "word": "Offline",
    "meaning": "Not connected to the internet.",
    "synonym": "Disconnected",
    "antonym": "Online",
    "example": "I'm working offline.",
    "category": "Technology & IT",
    "difficulty": "Easy"
  },
  {
    "word": "Online",
    "meaning": "Connected to the internet.",
    "synonym": "Connected",
    "antonym": "Offline",
    "example": "The shop is online.",
    "category": "Technology & IT",
    "difficulty": "Easy"
  },
  {
    "word": "Open Source",
    "meaning": "Software for which the original source code is made freely available and may be redistributed and modified.",
    "synonym": "N/A",
    "antonym": "Proprietary",
    "example": "Linux is an open-source operating system.",
    "category": "Technology & IT",
    "difficulty": "Medium"
  },
  {
    "word": "Operating System",
    "meaning": "The software that supports a computer's basic functions.",
    "synonym": "OS",
    "antonym": "N/A",
    "example": "Which operating system are you using?",
    "category": "Technology & IT",
    "difficulty": "Medium"
  },
  {
    "word": "Output",
    "meaning": "Data that a computer sends.",
    "synonym": "Production",
    "antonym": "Input",
    "example": "The output is displayed on the screen.",
    "category": "Technology & IT",
    "difficulty": "Easy"
  },
  {
    "word": "Packet",
    "meaning": "A small unit of data sent over a network.",
    "synonym": "Data packet",
    "antonym": "N/A",
    "example": "The information is sent in packets.",
    "category": "Technology & IT",
    "difficulty": "Medium"
  },
  {
    "word": "Password",
    "meaning": "A secret word or phrase used to gain access to a computer system.",
    "synonym": "Secret code",
    "antonym": "N/A",
    "example": "Enter your password.",
    "category": "Technology & IT",
    "difficulty": "Easy"
  },
  {
    "word": "Patch",
    "meaning": "A piece of software designed to update a computer program or its supporting data.",
    "synonym": "Update",
    "antonym": "N/A",
    "example": "The latest patch fixed several security issues.",
    "category": "Technology & IT",
    "difficulty": "Medium"
  },
  {
    "word": "PC",
    "meaning": "Personal Computer.",
    "synonym": "Computer",
    "antonym": "N/A",
    "example": "I'm using my PC.",
    "category": "Technology & IT",
    "difficulty": "Easy"
  },
  {
    "word": "Peripheral",
    "meaning": "A device that is connected to a computer but not part of the core computer architecture.",
    "synonym": "Device",
    "antonym": "Core",
    "example": "Printers are computer peripherals.",
    "category": "Technology & IT",
    "difficulty": "Medium"
  },
  {
    "word": "Pixel",
    "meaning": "A minute area of illumination on a display screen.",
    "synonym": "Dot",
    "antonym": "N/A",
    "example": "The image has high pixel density.",
    "category": "Technology & IT",
    "difficulty": "Easy"
  },
  {
    "word": "Platform",
    "meaning": "A standard for the hardware of a full computer system.",
    "synonym": "N/A",
    "antonym": "N/A",
    "example": "The game is available on multiple platforms.",
    "category": "Technology & IT",
    "difficulty": "Medium"
  },
  {
    "word": "Plugin",
    "meaning": "A software component that adds a specific feature to an existing computer program.",
    "synonym": "Add-on",
    "antonym": "N/A",
    "example": "Install the plugin for extra features.",
    "category": "Technology & IT",
    "difficulty": "Easy"
  },
  {
    "word": "Podcast",
    "meaning": "A digital audio file made available on the internet for downloading.",
    "synonym": "N/A",
    "antonym": "N/A",
    "example": "I listen to podcasts every day.",
    "category": "Technology & IT",
    "difficulty": "Easy"
  },
  {
    "word": "Port",
    "meaning": "A connection point or interface between a computer and other computers or peripheral devices.",
    "synonym": "Interface",
    "antonym": "N/A",
    "example": "Connect the mouse to the USB port.",
    "category": "Technology & IT",
    "difficulty": "Easy"
  },
  {
    "word": "Portal",
    "meaning": "An internet site providing access or links to other sites.",
    "synonym": "Gateway",
    "antonym": "N/A",
    "example": "The student portal provides access to all your grades.",
    "category": "Technology & IT",
    "difficulty": "Medium"
  },
  {
    "word": "Processor",
    "meaning": "A part of a computer that handles the basic instructions and processes objects as assigned.",
    "synonym": "CPU",
    "antonym": "N/A",
    "example": "The processor is very fast.",
    "category": "Technology & IT",
    "difficulty": "Easy"
  },
  {
    "word": "Program",
    "meaning": "A series of coded software instructions to control the operation of a computer or other machine.",
    "synonym": "Software",
    "antonym": "N/A",
    "example": "I'm learning a new programming language.",
    "category": "Technology & IT",
    "difficulty": "Easy"
  },
  {
    "word": "Protocol",
    "meaning": "A set of rules governing the exchange or transmission of data between devices.",
    "synonym": "Rules",
    "antonym": "N/A",
    "example": "The HTTP protocol is used for web communication.",
    "category": "Technology & IT",
    "difficulty": "Medium"
  },
  {
    "word": "RAM",
    "meaning": "Random Access Memory.",
    "synonym": "Memory",
    "antonym": "N/A",
    "example": "The computer has 8GB of RAM.",
    "category": "Technology & IT",
    "difficulty": "Easy"
  },
  {
    "word": "Reboot",
    "meaning": "Restart (a computer system).",
    "synonym": "Restart",
    "antonym": "Shut down",
    "example": "The computer needs to reboot.",
    "category": "Technology & IT",
    "difficulty": "Easy"
  },
  {
    "word": "Resolution",
    "meaning": "The number of pixels on a display screen.",
    "synonym": "Clarity",
    "antonym": "N/A",
    "example": "The screen has high resolution.",
    "category": "Technology & IT",
    "difficulty": "Easy"
  },
  {
    "word": "Router",
    "meaning": "A device that forwards data packets between computer networks.",
    "synonym": "N/A",
    "antonym": "N/A",
    "example": "The router is connected to the modem.",
    "category": "Technology & IT",
    "difficulty": "Easy"
  },
  {
    "word": "Scan",
    "meaning": "Convert (a document or picture) into digital form.",
    "synonym": "Digitize",
    "antonym": "N/A",
    "example": "Scan the document and send it to me.",
    "category": "Technology & IT",
    "difficulty": "Easy"
  },
  {
    "word": "Screen",
    "meaning": "A flat surface on which images from a computer are displayed.",
    "synonym": "Monitor",
    "antonym": "N/A",
    "example": "The screen is very bright.",
    "category": "Technology & IT",
    "difficulty": "Easy"
  },
  {
    "word": "Screenshot",
    "meaning": "An image of the data displayed on the screen of a computer or mobile device.",
    "synonym": "Screen capture",
    "antonym": "N/A",
    "example": "Take a screenshot of the error message.",
    "category": "Technology & IT",
    "difficulty": "Easy"
  },
  {
    "word": "Search Engine",
    "meaning": "A program that searches for and identifies items in a database that correspond to keywords or characters specified by the user, used especially for finding particular sites on the World Wide Web.",
    "synonym": "N/A",
    "antonym": "N/A",
    "example": "Google is the most popular search engine.",
    "category": "Technology & IT",
    "difficulty": "Easy"
  },
  {
    "word": "Server",
    "meaning": "A computer or computer program which manages access to a centralized resource or service in a network.",
    "synonym": "Host",
    "antonym": "N/A",
    "example": "The server is currently unavailable.",
    "category": "Technology & IT",
    "difficulty": "Medium"
  },
  {
    "word": "Software",
    "meaning": "The programs and other operating information used by a computer.",
    "synonym": "Program",
    "antonym": "Hardware",
    "example": "The software needs to be updated.",
    "category": "Technology & IT",
    "difficulty": "Easy"
  },
  {
    "word": "Spam",
    "meaning": "Irrelevant or unsolicited messages sent over the internet, typically to a large number of users.",
    "synonym": "Junk mail",
    "antonym": "N/A",
    "example": "Check your spam folder.",
    "category": "Technology & IT",
    "difficulty": "Easy"
  },
  {
    "word": "Spreadsheet",
    "meaning": "An electronic document in which data is arranged in the rows and columns of a grid and can be manipulated and used in calculations.",
    "synonym": "N/A",
    "antonym": "N/A",
    "example": "The information is in a spreadsheet.",
    "category": "Technology & IT",
    "difficulty": "Easy"
  },
  {
    "word": "Storage",
    "meaning": "The action or method of storing data for future use.",
    "synonym": "Memory",
    "antonym": "N/A",
    "example": "The computer has 1TB of storage.",
    "category": "Technology & IT",
    "difficulty": "Easy"
  },
  {
    "word": "System",
    "meaning": "A group of interacting or interdependent component parts forming a complex/intricate whole.",
    "synonym": "Structure",
    "antonym": "N/A",
    "example": "The system is working correctly.",
    "category": "Technology & IT",
    "difficulty": "Easy"
  },
  {
    "word": "Tablet",
    "meaning": "A portable computer with a touchscreen interface.",
    "synonym": "N/A",
    "antonym": "N/A",
    "example": "I'm using my tablet.",
    "category": "Technology & IT",
    "difficulty": "Easy"
  },
  {
    "word": "Terminal",
    "meaning": "A device with a screen and keyboard used to communicate with a computer.",
    "synonym": "Console",
    "antonym": "N/A",
    "example": "Open the terminal.",
    "category": "Technology & IT",
    "difficulty": "Medium"
  },
  {
    "word": "Toolbar",
    "meaning": "A strip of icons used to perform certain functions.",
    "synonym": "N/A",
    "antonym": "N/A",
    "example": "The toolbar is at the top of the screen.",
    "category": "Technology & IT",
    "difficulty": "Easy"
  },
  {
    "word": "Update",
    "meaning": "Make (something) more modern or up to date.",
    "synonym": "Upgrade",
    "antonym": "Downgrade",
    "example": "The update is ready to be installed.",
    "category": "Technology & IT",
    "difficulty": "Easy"
  },
  {
    "word": "Upload",
    "meaning": "Transfer (data) from one computer system to another, typically over the internet.",
    "synonym": "Send",
    "antonym": "Download",
    "example": "Upload the video to the website.",
    "category": "Technology & IT",
    "difficulty": "Easy"
  },
  {
    "word": "URL",
    "meaning": "Uniform Resource Locator; the address of a web page.",
    "synonym": "Web address",
    "antonym": "N/A",
    "example": "What is the URL of the website?",
    "category": "Technology & IT",
    "difficulty": "Easy"
  },
  {
    "word": "USB",
    "meaning": "Universal Serial Bus; a common interface that enables communication between devices and a host controller.",
    "synonym": "N/A",
    "antonym": "N/A",
    "example": "Connect the drive to the USB port.",
    "category": "Technology & IT",
    "difficulty": "Easy"
  },
  {
    "word": "User",
    "meaning": "A person who uses a computer or network service.",
    "synonym": "Operator",
    "antonym": "N/A",
    "example": "The user entered their password.",
    "category": "Technology & IT",
    "difficulty": "Easy"
  },
  {
    "word": "Virus",
    "meaning": "A piece of code which is capable of copying itself and typically has a detrimental effect, such as corrupting the system or destroying data.",
    "synonym": "Malware",
    "antonym": "Security software",
    "example": "The virus infected the whole computer.",
    "category": "Technology & IT",
    "difficulty": "Easy"
  },
  {
    "word": "Website",
    "meaning": "A set of related web pages located under a single domain name.",
    "synonym": "Site",
    "antonym": "N/A",
    "example": "I'm visiting the website.",
    "category": "Technology & IT",
    "difficulty": "Easy"
  },
  {
    "word": "Wi-Fi",
    "meaning": "A facility allowing computers, smartphones, or other devices to connect to the internet or communicate with one another wirelessly within a particular area.",
    "synonym": "Wireless network",
    "antonym": "Wired",
    "example": "Connect to the Wi-Fi.",
    "category": "Technology & IT",
    "difficulty": "Easy"
  },
  {
    "word": "Window",
    "meaning": "A rectangular area on a computer screen in which a program or message is displayed.",
    "synonym": "N/A",
    "antonym": "N/A",
    "example": "Open a new window.",
    "category": "Technology & IT",
    "difficulty": "Easy"
  },
  {
    "word": "Workstation",
    "meaning": "A desktop computer that is more powerful than a normal PC.",
    "synonym": "N/A",
    "antonym": "N/A",
    "example": "The workstation is used for video editing.",
    "category": "Technology & IT",
    "difficulty": "Medium"
  },
  {
    "word": "Zip File",
    "meaning": "A computer file whose contents are compressed for storage or transmission.",
    "synonym": "Compressed file",
    "antonym": "N/A",
    "example": "Download the zip file.",
    "category": "Technology & IT",
    "difficulty": "Easy"
  },
  {
    "word": "Abstract",
    "meaning": "Existing in thought or as an idea but not having a physical or concrete existence.",
    "synonym": "Theoretical",
    "antonym": "Concrete",
    "example": "The concept of justice is often discussed in abstract terms.",
    "category": "Academic English",
    "difficulty": "Hard"
  },
  {
    "word": "Academic",
    "meaning": "Relating to education and scholarship.",
    "synonym": "Scholarly",
    "antonym": "Non-academic",
    "example": "The school has high academic standards.",
    "category": "Academic English",
    "difficulty": "Easy"
  },
  {
    "word": "Analyze",
    "meaning": "Examine (something) in detail, typically for purposes of explanation and interpretation.",
    "synonym": "Examine",
    "antonym": "Ignore",
    "example": "The scientists analyzed the results of the experiment.",
    "category": "Academic English",
    "difficulty": "Medium"
  },
  {
    "word": "Argument",
    "meaning": "A reason or set of reasons given in support of an idea, action or theory.",
    "synonym": "Reasoning",
    "antonym": "N/A",
    "example": "He presented a strong argument for the new policy.",
    "category": "Academic English",
    "difficulty": "Medium"
  },
  {
    "word": "Assumption",
    "meaning": "A thing that is accepted as true or as certain to happen, without proof.",
    "synonym": "Supposition",
    "antonym": "Certainty",
    "example": "We made an assumption that the project would be finished on time.",
    "category": "Academic English",
    "difficulty": "Medium"
  },
  {
    "word": "Author",
    "meaning": "A writer of a book, article, or report.",
    "synonym": "Writer",
    "antonym": "Reader",
    "example": "Who is the author of this book?",
    "category": "Academic English",
    "difficulty": "Easy"
  },
  {
    "word": "Authority",
    "meaning": "The power or right to give orders, make decisions, and enforce obedience.",
    "synonym": "Power",
    "antonym": "Weakness",
    "example": "He has the authority to sign the contract.",
    "category": "Academic English",
    "difficulty": "Medium"
  },
  {
    "word": "Bias",
    "meaning": "Inclination or prejudice for or against one person or group, especially in a way considered to be unfair.",
    "synonym": "Prejudice",
    "antonym": "Fairness",
    "example": "The report was criticized for its bias.",
    "category": "Academic English",
    "difficulty": "Medium"
  },
  {
    "word": "Bibliography",
    "meaning": "A list of the books of a specific author or publisher, or on a specific subject.",
    "synonym": "Reference list",
    "antonym": "N/A",
    "example": "The bibliography is at the end of the book.",
    "category": "Academic English",
    "difficulty": "Medium"
  },
  {
    "word": "Citation",
    "meaning": "A quotation from or reference to a book, paper, or author, especially in a scholarly work.",
    "synonym": "Reference",
    "antonym": "N/A",
    "example": "The author provided several citations to support his claims.",
    "category": "Academic English",
    "difficulty": "Medium"
  },
  {
    "word": "Claim",
    "meaning": "State or assert that something is the case, typically without providing evidence or proof.",
    "synonym": "Assert",
    "antonym": "Deny",
    "example": "He claims that he saw a UFO.",
    "category": "Academic English",
    "difficulty": "Medium"
  },
  {
    "word": "Conclusion",
    "meaning": "The end or finish of an event, process, or text of writing.",
    "synonym": "End",
    "antonym": "Beginning",
    "example": "The conclusion of the study was clear.",
    "category": "Academic English",
    "difficulty": "Medium"
  },
  {
    "word": "Context",
    "meaning": "The circumstances that form the setting for an event, statement, or idea, and in terms of which it can be fully understood.",
    "synonym": "Setting",
    "antonym": "N/A",
    "example": "Which context does this word belong to?",
    "category": "Academic English",
    "difficulty": "Medium"
  },
  {
    "word": "Criterion",
    "meaning": "A principle or standard by which something may be judged or decided.",
    "synonym": "Standard",
    "antonym": "N/A",
    "example": "What is the main criterion for the award?",
    "category": "Academic English",
    "difficulty": "Medium"
  },
  {
    "word": "Criticize",
    "meaning": "Indicate the faults of (someone or something) in a disapproving way.",
    "synonym": "Blame",
    "antonym": "Praise",
    "example": "Don't criticize him.",
    "category": "Academic English",
    "difficulty": "Medium"
  },
  {
    "word": "Data",
    "meaning": "Facts and statistics collected together for reference or analysis.",
    "synonym": "Information",
    "antonym": "N/A",
    "example": "We need to analyze the data.",
    "category": "Academic English",
    "difficulty": "Easy"
  },
  {
    "word": "Definition",
    "meaning": "A statement of the exact meaning of a word, especially in a dictionary.",
    "synonym": "Meaning",
    "antonym": "N/A",
    "example": "What is the definition of success?",
    "category": "Academic English",
    "difficulty": "Easy"
  },
  {
    "word": "Demonstrate",
    "meaning": "Clearly show the existence or truth of (something) by giving proof or evidence.",
    "synonym": "Show",
    "antonym": "Hide",
    "example": "The teacher demonstrated the experiment.",
    "category": "Academic English",
    "difficulty": "Easy"
  },
  {
    "word": "Describe",
    "meaning": "Give a detailed account in words of (someone or something).",
    "synonym": "Explain",
    "antonym": "N/A",
    "example": "Can you describe the suspect?",
    "category": "Academic English",
    "difficulty": "Easy"
  },
  {
    "word": "Detail",
    "meaning": "An individual fact or item.",
    "synonym": "Particular",
    "antonym": "General",
    "example": "The report is very detailed.",
    "category": "Academic English",
    "difficulty": "Easy"
  },
  {
    "word": "Develop",
    "meaning": "Grow or cause to grow and become more mature, advanced, or elaborate.",
    "synonym": "Grow",
    "antonym": "Decline",
    "example": "The company has developed a new product.",
    "category": "Academic English",
    "difficulty": "Easy"
  },
  {
    "word": "Difference",
    "meaning": "A point or way in which people or things are not the same.",
    "synonym": "Contrast",
    "antonym": "Similarity",
    "example": "What is the difference between the two?",
    "category": "Academic English",
    "difficulty": "Easy"
  },
  {
    "word": "Discussion",
    "meaning": "The action or process of talking about something in order to reach a decision or to exchange ideas.",
    "synonym": "Debate",
    "antonym": "Silence",
    "example": "We had a long discussion.",
    "category": "Academic English",
    "difficulty": "Easy"
  },
  {
    "word": "Education",
    "meaning": "The process of receiving or giving systematic instruction, especially at a school or university.",
    "synonym": "Instruction",
    "antonym": "N/A",
    "example": "Education is very important.",
    "category": "Academic English",
    "difficulty": "Easy"
  },
  {
    "word": "Effect",
    "meaning": "A change which is a result or consequence of an action or other cause.",
    "synonym": "Result",
    "antonym": "Cause",
    "example": "The new law will have a positive effect.",
    "category": "Academic English",
    "difficulty": "Easy"
  },
  {
    "word": "Evidence",
    "meaning": "The available body of facts or information indicating whether a belief or proposition is true or valid.",
    "synonym": "Proof",
    "antonym": "Guess",
    "example": "There is no evidence to support the claim.",
    "category": "Academic English",
    "difficulty": "Easy"
  },
  {
    "word": "Example",
    "meaning": "A thing characteristic of its kind or illustrating a general rule.",
    "synonym": "Illustration",
    "antonym": "N/A",
    "example": "Give me an example.",
    "category": "Academic English",
    "difficulty": "Easy"
  },
  {
    "word": "Explanation",
    "meaning": "A statement or account that makes something clear.",
    "synonym": "Description",
    "antonym": "Confusion",
    "example": "The explanation was very clear.",
    "category": "Academic English",
    "difficulty": "Easy"
  },
  {
    "word": "Fact",
    "meaning": "A thing that is known or proved to be true.",
    "synonym": "Truth",
    "antonym": "Fiction",
    "example": "That's a fact.",
    "category": "Academic English",
    "difficulty": "Easy"
  },
  {
    "word": "Hypothesis",
    "meaning": "A proposed explanation made on the basis of limited evidence as a starting point for further investigation.",
    "synonym": "Theory",
    "antonym": "Fact",
    "example": "The researcher formulated a hypothesis.",
    "category": "Academic English",
    "difficulty": "Hard"
  },
  {
    "word": "Identify",
    "meaning": "Establish or indicate who or what (someone or something) is.",
    "synonym": "Establish",
    "antonym": "N/A",
    "example": "Identify the main points.",
    "category": "Academic English",
    "difficulty": "Easy"
  },
  {
    "word": "Information",
    "meaning": "Facts provided or learned about something or someone.",
    "synonym": "Data",
    "antonym": "N/A",
    "example": "I need more information.",
    "category": "Academic English",
    "difficulty": "Easy"
  },
  {
    "word": "Investigation",
    "meaning": "The action of investigating something or someone; formal or systematic examination or research.",
    "synonym": "Examination",
    "antonym": "N/A",
    "example": "The investigation is ongoing.",
    "category": "Academic English",
    "difficulty": "Medium"
  },
  {
    "word": "Knowledge",
    "meaning": "Facts, information, and skills acquired by a person through experience or education; the theoretical or practical understanding of a subject.",
    "synonym": "Understanding",
    "antonym": "Ignorance",
    "example": "Knowledge is power.",
    "category": "Academic English",
    "difficulty": "Easy"
  },
  {
    "word": "Method",
    "meaning": "A particular procedure for accomplishing or approaching something, especially a systematic or established one.",
    "synonym": "Procedure",
    "antonym": "N/A",
    "example": "What is the best method?",
    "category": "Academic English",
    "difficulty": "Easy"
  },
  {
    "word": "Perspective",
    "meaning": "A particular attitude toward or way of regarding something; a point of view.",
    "synonym": "Point of view",
    "antonym": "N/A",
    "example": "What is your perspective on this?",
    "category": "Academic English",
    "difficulty": "Medium"
  },
  {
    "word": "Problem",
    "meaning": "A matter or situation regarded as unwelcome or harmful and needing to be dealt with and overcome.",
    "synonym": "Issue",
    "antonym": "Solution",
    "example": "There is a problem.",
    "category": "Academic English",
    "difficulty": "Easy"
  },
  {
    "word": "Process",
    "meaning": "A series of actions or steps taken in order to achieve a particular end.",
    "synonym": "Procedure",
    "antonym": "N/A",
    "example": "The process is very complicated.",
    "category": "Academic English",
    "difficulty": "Easy"
  },
  {
    "word": "Project",
    "meaning": "An individual or collaborative enterprise that is carefully planned and designed to achieve a particular aim.",
    "synonym": "Enterprise",
    "antonym": "N/A",
    "example": "The project was a huge success.",
    "category": "Academic English",
    "difficulty": "Easy"
  },
  {
    "word": "Quality",
    "meaning": "The standard of something as measured against other things of a similar kind; the degree of excellence of something.",
    "synonym": "Standard",
    "antonym": "N/A",
    "example": "The quality is very good.",
    "category": "Academic English",
    "difficulty": "Easy"
  },
  {
    "word": "Question",
    "meaning": "A sentence worded or expressed so as to elicit information.",
    "synonym": "Inquiry",
    "antonym": "Answer",
    "example": "Can I ask you a question?",
    "category": "Academic English",
    "difficulty": "Easy"
  },
  {
    "word": "Reference",
    "meaning": "The action of mentioning or alluding to something.",
    "synonym": "Mention",
    "antonym": "N/A",
    "example": "The author provided several references.",
    "category": "Academic English",
    "difficulty": "Easy"
  },
  {
    "word": "Report",
    "meaning": "A spoken or written account of something that one has observed, heard, done, or investigated.",
    "synonym": "Account",
    "antonym": "N/A",
    "example": "I need to write a report.",
    "category": "Academic English",
    "difficulty": "Easy"
  },
  {
    "word": "Research",
    "meaning": "The systematic investigation into and study of materials and sources in order to establish facts and reach new conclusions.",
    "synonym": "Investigation",
    "antonym": "N/A",
    "example": "He's doing research on renewable energy.",
    "category": "Academic English",
    "difficulty": "Medium"
  },
  {
    "word": "Result",
    "meaning": "A consequence, effect, or outcome of something.",
    "synonym": "Outcome",
    "antonym": "Cause",
    "example": "The result was clear.",
    "category": "Academic English",
    "difficulty": "Easy"
  },
  {
    "word": "Review",
    "meaning": "A formal assessment or examination of something with the possibility or intention of instituting change if necessary.",
    "synonym": "Assessment",
    "antonym": "N/A",
    "example": "I need to review the document.",
    "category": "Academic English",
    "difficulty": "Easy"
  },
  {
    "word": "Scholarship",
    "meaning": "Academic study or achievement; learning of a high level.",
    "synonym": "Learning",
    "antonym": "Ignorance",
    "example": "He is a man of great scholarship.",
    "category": "Academic English",
    "difficulty": "Hard"
  },
  {
    "word": "Source",
    "meaning": "A place, person, or thing from which something comes or can be obtained.",
    "synonym": "Origin",
    "antonym": "N/A",
    "example": "What is the source of the information?",
    "category": "Academic English",
    "difficulty": "Easy"
  },
  {
    "word": "Status",
    "meaning": "The relative social, professional, or other standing of someone or something.",
    "synonym": "Standing",
    "antonym": "N/A",
    "example": "What is the current status?",
    "category": "Academic English",
    "difficulty": "Easy"
  },
  {
    "word": "Study",
    "meaning": "The devotion of time and attention to acquiring knowledge on an academic subject, especially by means of books.",
    "synonym": "Learning",
    "antonym": "Ignorance",
    "example": "He spent all day studying.",
    "category": "Academic English",
    "difficulty": "Easy"
  },
  {
    "word": "Success",
    "meaning": "The accomplishment of an aim or purpose.",
    "synonym": "Achievement",
    "antonym": "Failure",
    "example": "Success takes hard work.",
    "category": "Academic English",
    "difficulty": "Easy"
  },
  {
    "word": "Summary",
    "meaning": "A brief statement or account of the main points of something.",
    "synonym": "Abstract",
    "antonym": "N/A",
    "example": "Give me a brief summary.",
    "category": "Academic English",
    "difficulty": "Easy"
  },
  {
    "word": "System",
    "meaning": "A set of principles or procedures according to which something is done; an organized scheme or method.",
    "synonym": "Method",
    "antonym": "N/A",
    "example": "The system is working correctly.",
    "category": "Academic English",
    "difficulty": "Easy"
  },
  {
    "word": "Theory",
    "meaning": "A supposition or a system of ideas intended to explain something, especially one based on general principles independent of the thing to be explained.",
    "synonym": "Supposition",
    "antonym": "Fact",
    "example": "That's a very interesting theory.",
    "category": "Academic English",
    "difficulty": "Medium"
  },
  {
    "word": "Topic",
    "meaning": "A matter dealt with in a text, discourse, or conversation; a subject.",
    "synonym": "Subject",
    "antonym": "N/A",
    "example": "What is the topic of the discussion?",
    "category": "Academic English",
    "difficulty": "Easy"
  },
  {
    "word": "University",
    "meaning": "An educational institution designed for instruction, examination, or both, of students in many branches of advanced learning, conferring degrees in various faculties, and often embodying colleges and a similar institution.",
    "synonym": "College",
    "antonym": "N/A",
    "example": "I'm going to university next year.",
    "category": "Academic English",
    "difficulty": "Easy"
  },
  {
    "word": "Validity",
    "meaning": "The quality of being logically or factually sound; soundness or cogency.",
    "synonym": "Soundness",
    "antonym": "Invalidity",
    "example": "The validity of the study was questioned.",
    "category": "Academic English",
    "difficulty": "Medium"
  },
  {
    "word": "Value",
    "meaning": "The regard that something is held to deserve; the importance, worth, or usefulness of something.",
    "synonym": "Worth",
    "antonym": "N/A",
    "example": "What is the value of this?",
    "category": "Academic English",
    "difficulty": "Easy"
  },
  {
    "word": "Version",
    "meaning": "A particular form of something differing in certain respects from an earlier form or other forms of the same type of thing.",
    "synonym": "Form",
    "antonym": "N/A",
    "example": "What is the latest version?",
    "category": "Academic English",
    "difficulty": "Easy"
  },
  {
    "word": "Work",
    "meaning": "Activity involving mental or physical effort done in order to achieve a purpose or result.",
    "synonym": "Effort",
    "antonym": "Rest",
    "example": "Work hard and you will succeed.",
    "category": "Academic English",
    "difficulty": "Easy"
  },
  {
    "word": "Writing",
    "meaning": "The activity or skill of marking coherent words on paper or another medium.",
    "synonym": "Inscribing",
    "antonym": "N/A",
    "example": "I enjoy writing.",
    "category": "Academic English",
    "difficulty": "Easy"
  },
  {
    "word": "A-game",
    "meaning": "One's best performance.",
    "synonym": "Best",
    "antonym": "Worst",
    "example": "Bring your A-game.",
    "category": "Slang & Idioms",
    "difficulty": "Easy"
  },
  {
    "word": "Bae",
    "meaning": "Before Anyone Else; a term of endearment.",
    "synonym": "Sweetheart",
    "antonym": "N/A",
    "example": "I'm going to the movies with my bae.",
    "category": "Slang & Idioms",
    "difficulty": "Easy"
  },
  {
    "word": "Bet",
    "meaning": "An expression of agreement or approval.",
    "synonym": "Agreed",
    "antonym": "No way",
    "example": "A: 'Want to go out?' B: 'Bet.'",
    "category": "Slang & Idioms",
    "difficulty": "Easy"
  },
  {
    "word": "Big Yikes",
    "meaning": "Used to express intense embarrassment or shock.",
    "synonym": "Ouch",
    "antonym": "N/A",
    "example": "That was a big yikes moment.",
    "category": "Slang & Idioms",
    "difficulty": "Easy"
  },
  {
    "word": "Bop",
    "meaning": "A very good song.",
    "synonym": "Hit",
    "antonym": "Flop",
    "example": "This song is a bop!",
    "category": "Slang & Idioms",
    "difficulty": "Easy"
  },
  {
    "word": "Cap",
    "meaning": "To lie.",
    "synonym": "Lie",
    "antonym": "Truth",
    "example": "No cap, that's the truth.",
    "category": "Slang & Idioms",
    "difficulty": "Easy"
  },
  {
    "word": "Chill",
    "meaning": "Relaxed.",
    "synonym": "Relaxed",
    "antonym": "Anxious",
    "example": "He's a very chill guy.",
    "category": "Slang & Idioms",
    "difficulty": "Easy"
  },
  {
    "word": "Clout",
    "meaning": "Influence or power.",
    "synonym": "Influence",
    "antonym": "Obscurity",
    "example": "She's just doing it for the clout.",
    "category": "Slang & Idioms",
    "difficulty": "Easy"
  },
  {
    "word": "Cringe",
    "meaning": "Feeling intense embarrassment or awkwardness.",
    "synonym": "Embarrassing",
    "antonym": "Cool",
    "example": "That was so cringe.",
    "category": "Slang & Idioms",
    "difficulty": "Easy"
  },
  {
    "word": "Drip",
    "meaning": "Style or fashion.",
    "synonym": "Style",
    "antonym": "N/A",
    "example": "He's got that drip.",
    "category": "Slang & Idioms",
    "difficulty": "Easy"
  },
  {
    "word": "Extra",
    "meaning": "Over the top or dramatic.",
    "synonym": "Dramatic",
    "antonym": "Low-key",
    "example": "Stop being so extra.",
    "category": "Slang & Idioms",
    "difficulty": "Easy"
  },
  {
    "word": "Fam",
    "meaning": "Close friends or family.",
    "synonym": "Family",
    "antonym": "Strangers",
    "example": "What's up, fam?",
    "category": "Slang & Idioms",
    "difficulty": "Easy"
  },
  {
    "word": "Flex",
    "meaning": "To show off.",
    "synonym": "Show off",
    "antonym": "Humble",
    "example": "He's flexing his new watch.",
    "category": "Slang & Idioms",
    "difficulty": "Easy"
  },
  {
    "word": "G.O.A.T.",
    "meaning": "Greatest of All Time.",
    "synonym": "The best",
    "antonym": "The worst",
    "example": "He's the G.O.A.T.",
    "category": "Slang & Idioms",
    "difficulty": "Easy"
  },
  {
    "word": "Ghost",
    "meaning": "To suddenly end all contact with someone.",
    "synonym": "Abandon",
    "antonym": "N/A",
    "example": "She ghosted him.",
    "category": "Slang & Idioms",
    "difficulty": "Easy"
  },
  {
    "word": "Gucci",
    "meaning": "Good or cool.",
    "synonym": "Good",
    "antonym": "Bad",
    "example": "It's all gucci.",
    "category": "Slang & Idioms",
    "difficulty": "Easy"
  },
  {
    "word": "High-key",
    "meaning": "Used to express something openly or intensely.",
    "synonym": "Openly",
    "antonym": "Low-key",
    "example": "I high-key love this song.",
    "category": "Slang & Idioms",
    "difficulty": "Easy"
  },
  {
    "word": "Hype",
    "meaning": "Excitement.",
    "synonym": "Excitement",
    "antonym": "N/A",
    "example": "The hype was real.",
    "category": "Slang & Idioms",
    "difficulty": "Easy"
  },
  {
    "word": "Ick",
    "meaning": "A sudden feeling of disgust or repulsion.",
    "synonym": "Disgust",
    "antonym": "Attraction",
    "example": "He gave me the ick.",
    "category": "Slang & Idioms",
    "difficulty": "Easy"
  },
  {
    "word": "Left on read",
    "meaning": "When someone reads your message but doesn't reply.",
    "synonym": "Ignored",
    "antonym": "Replied",
    "example": "He left me on read.",
    "category": "Slang & Idioms",
    "difficulty": "Easy"
  },
  {
    "word": "Lit",
    "meaning": "Exciting or cool.",
    "synonym": "Exciting",
    "antonym": "Boring",
    "example": "The party was lit.",
    "category": "Slang & Idioms",
    "difficulty": "Easy"
  },
  {
    "word": "Low-key",
    "meaning": "Used to express something subtly or quietly.",
    "synonym": "Subtly",
    "antonym": "High-key",
    "example": "I low-key want to go home.",
    "category": "Slang & Idioms",
    "difficulty": "Easy"
  },
  {
    "word": "Main Character Energy",
    "meaning": "Being the center of attention.",
    "synonym": "N/A",
    "antonym": "N/A",
    "example": "She's got serious main character energy.",
    "category": "Slang & Idioms",
    "difficulty": "Easy"
  },
  {
    "word": "No cap",
    "meaning": "Seriously; I'm not lying.",
    "synonym": "Truthfully",
    "antonym": "Lying",
    "example": "No cap, that was amazing.",
    "category": "Slang & Idioms",
    "difficulty": "Easy"
  },
  {
    "word": "On fleek",
    "meaning": "Perfect or stylish.",
    "synonym": "Perfect",
    "antonym": "Messy",
    "example": "Her eyebrows are on fleek.",
    "category": "Slang & Idioms",
    "difficulty": "Easy"
  },
  {
    "word": "Opp",
    "meaning": "Opposition or enemy.",
    "synonym": "Enemy",
    "antonym": "Friend",
    "example": "He's an opp.",
    "category": "Slang & Idioms",
    "difficulty": "Easy"
  },
  {
    "word": "Period",
    "meaning": "Used to emphasize a statement.",
    "synonym": "That's it",
    "antonym": "N/A",
    "example": "She's the best, period.",
    "category": "Slang & Idioms",
    "difficulty": "Easy"
  },
  {
    "word": "Receipts",
    "meaning": "Evidence or proof.",
    "synonym": "Proof",
    "antonym": "N/A",
    "example": "Show me the receipts.",
    "category": "Slang & Idioms",
    "difficulty": "Easy"
  },
  {
    "word": "Rizz",
    "meaning": "Charisma, especially in attracting partners.",
    "synonym": "Charisma",
    "antonym": "N/A",
    "example": "He's got serious rizz.",
    "category": "Slang & Idioms",
    "difficulty": "Easy"
  },
  {
    "word": "Salty",
    "meaning": "Angry or bitter.",
    "synonym": "Bitter",
    "antonym": "Happy",
    "example": "Don't be so salty.",
    "category": "Slang & Idioms",
    "difficulty": "Easy"
  },
  {
    "word": "Savage",
    "meaning": "Brutally honest or fierce.",
    "synonym": "Fierce",
    "antonym": "Gentle",
    "example": "That was a savage comeback.",
    "category": "Slang & Idioms",
    "difficulty": "Easy"
  },
  {
    "word": "Ship",
    "meaning": "To support a romantic relationship between two people.",
    "synonym": "Support",
    "antonym": "N/A",
    "example": "I ship them.",
    "category": "Slang & Idioms",
    "difficulty": "Easy"
  },
  {
    "word": "Shook",
    "meaning": "Shocked or surprised.",
    "synonym": "Shocked",
    "antonym": "N/A",
    "example": "I was shook.",
    "category": "Slang & Idioms",
    "difficulty": "Easy"
  },
  {
    "word": "Slay",
    "meaning": "To do something exceptionally well.",
    "synonym": "Excel",
    "antonym": "Fail",
    "example": "You slayed that performance.",
    "category": "Slang & Idioms",
    "difficulty": "Easy"
  },
  {
    "word": "Snack",
    "meaning": "Someone who looks very attractive.",
    "synonym": "Attractive",
    "antonym": "N/A",
    "example": "He's a snack.",
    "category": "Slang & Idioms",
    "difficulty": "Easy"
  },
  {
    "word": "Stan",
    "meaning": "An overzealous or obsessive fan.",
    "synonym": "Superfan",
    "antonym": "N/A",
    "example": "I'm a BTS stan.",
    "category": "Slang & Idioms",
    "difficulty": "Easy"
  },
  {
    "word": "Sus",
    "meaning": "Suspicious.",
    "synonym": "Suspicious",
    "antonym": "Trustworthy",
    "example": "That looks sus.",
    "category": "Slang & Idioms",
    "difficulty": "Easy"
  },
  {
    "word": "Tea",
    "meaning": "Gossip.",
    "synonym": "Gossip",
    "antonym": "N/A",
    "example": "Spill the tea.",
    "category": "Slang & Idioms",
    "difficulty": "Easy"
  },
  {
    "word": "Thirsty",
    "meaning": "Desperate for attention.",
    "synonym": "Desperate",
    "antonym": "N/A",
    "example": "He's so thirsty.",
    "category": "Slang & Idioms",
    "difficulty": "Easy"
  },
  {
    "word": "Vibe",
    "meaning": "Atmosphere or feeling.",
    "synonym": "Atmosphere",
    "antonym": "N/A",
    "example": "I like the vibe of this place.",
    "category": "Slang & Idioms",
    "difficulty": "Easy"
  },
  {
    "word": "Woke",
    "meaning": "Alert to social injustice.",
    "synonym": "Aware",
    "antonym": "Ignorant",
    "example": "He's very woke.",
    "category": "Slang & Idioms",
    "difficulty": "Easy"
  },
  {
    "word": "Yeet",
    "meaning": "To throw something with force.",
    "synonym": "Throw",
    "antonym": "Catch",
    "example": "He yeeted the ball.",
    "category": "Slang & Idioms",
    "difficulty": "Easy"
  }
];

export default vocabularyData;