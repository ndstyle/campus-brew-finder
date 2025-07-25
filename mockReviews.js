// Mock data for user reviews
export const mockReviews = [
  {
    id: 1,
    user: {
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=40&h=40&fit=crop&crop=face",
      username: "sarah_m"
    },
    coffeeShop: "The Study Grind",
    rating: 5,
    tags: ["quiet", "strong wifi", "study-friendly"],
    reviewText: "Perfect spot for cramming! The wifi is super fast and they have tons of outlets. Coffee is great too - their oat milk latte is my go-to. Gets busy around finals but worth the wait.",
    timestamp: "2h ago"
  },
  {
    id: 2,
    user: {
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face",
      username: "mike_coffee"
    },
    coffeeShop: "Campus Brew Co.",
    rating: 4,
    tags: ["outdoor seating", "group study", "local roasts"],
    reviewText: "Love the outdoor patio here! Great for group projects when the weather's nice. Their house blend is solid and the baristas are super friendly. Only downside is it can get loud during peak hours.",
    timestamp: "5h ago"
  },
  {
    id: 3,
    user: {
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face",
      username: "emma_studies"
    },
    coffeeShop: "Midnight Oil Café",
    rating: 5,
    tags: ["24/7", "quiet atmosphere", "late night"],
    reviewText: "Lifesaver during finals week! Open 24/7 which is clutch for those all-nighters. Super quiet after 10pm and they have great late night snacks. The cold brew is amazing.",
    timestamp: "1d ago"
  },
  {
    id: 4,
    user: {
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face",
      username: "alex_grad"
    },
    coffeeShop: "The Study Grind",
    rating: 4,
    tags: ["power outlets", "study-friendly", "good pastries"],
    reviewText: "Solid choice for long study sessions. Plenty of outlets and comfortable seating. Their croissants are fresh in the morning. Can get crowded but they manage the space well.",
    timestamp: "2d ago"
  },
  {
    id: 5,
    user: {
      avatar: "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?w=40&h=40&fit=crop&crop=face",
      username: "jenny_cs"
    },
    coffeeShop: "Campus Brew Co.",
    rating: 3,
    tags: ["group study", "loud", "good coffee"],
    reviewText: "Coffee is really good but it's pretty loud most of the time. Better for group work than solo studying. The iced americano is my favorite here.",
    timestamp: "3d ago"
  },
  {
    id: 6,
    user: {
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=40&h=40&fit=crop&crop=face",
      username: "david_phd"
    },
    coffeeShop: "Midnight Oil Café",
    rating: 5,
    tags: ["quiet atmosphere", "comfortable seating", "good lighting"],
    reviewText: "Perfect for dissertation writing. The lighting is great and the chairs are actually comfortable for long sessions. Staff is respectful of people working. Highly recommend!",
    timestamp: "4d ago"
  }
];

// Available tags for reviews
export const availableTags = [
  "quiet",
  "loud", 
  "study-friendly",
  "group study",
  "strong wifi",
  "weak wifi",
  "power outlets",
  "outdoor seating",
  "comfortable seating",
  "good lighting",
  "24/7",
  "open late",
  "good coffee",
  "good pastries",
  "local roasts",
  "late night snacks"
];

