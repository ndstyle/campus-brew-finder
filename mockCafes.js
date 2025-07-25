// Mock café data with enhanced user identities in reviews
export const mockCafes = [
  {
    id: 1,
    name: "The Study Grind",
    address: "123 Campus Ave, Stanford, CA",
    hours: "6:00 AM - 10:00 PM",
    photos: [
      "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=400&h=300&fit=crop"
    ],
    description: "A cozy spot perfect for long study sessions with excellent wifi and plenty of outlets.",
    tags: ["Great for Studying", "Strong WiFi", "Quiet", "Open Late"],
    recommendations: {
      total: 24,
      recommended: 20,
      notRecommended: 4
    },
    recentRecommendations: [
      {
        id: 1,
        user: {
          id: 1,
          name: "Sarah Mitchell",
          username: "@sarah_m",
          email: "sarah.mitchell@stanford.edu",
          avatar: "SM",
          university: "Stanford University",
          year: "Junior",
          major: "Computer Science",
          joinedDate: "2024-01-15",
          reviewCount: 23,
          helpfulVotes: 156,
          profileImage: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=40&h=40&fit=crop&crop=face"
        },
        recommended: true,
        reason: "Perfect spot for cramming! The wifi is super fast and they have tons of outlets. Coffee is great too - their oat milk latte is my go-to.",
        timestamp: "2h ago",
        helpful: 12,
        tags: ["Great for Studying", "Strong WiFi", "Quiet"]
      },
      {
        id: 2,
        user: {
          id: 2,
          name: "Mike Rodriguez",
          username: "@mike_coffee",
          email: "mike.rodriguez@stanford.edu",
          avatar: "MR",
          university: "Stanford University",
          year: "Senior",
          major: "Economics",
          joinedDate: "2023-09-10",
          reviewCount: 31,
          helpfulVotes: 203,
          profileImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face"
        },
        recommended: true,
        reason: "Great atmosphere for group projects. The baristas know their stuff and the house blend is solid.",
        timestamp: "5h ago",
        helpful: 8,
        tags: ["Good Coffee", "Group Study"]
      },
      {
        id: 3,
        user: {
          id: 3,
          name: "Alex Chen",
          username: "@alex_studies",
          email: "alex.chen@stanford.edu",
          avatar: "AC",
          university: "Stanford University",
          year: "Sophomore",
          major: "Biology",
          joinedDate: "2024-02-20",
          reviewCount: 15,
          helpfulVotes: 89,
          profileImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face"
        },
        recommended: true,
        reason: "My favorite study spot on campus. Never too crowded and the atmosphere is perfect for focus.",
        timestamp: "1d ago",
        helpful: 18,
        tags: ["Quiet", "Great for Studying"]
      }
    ]
  },
  {
    id: 2,
    name: "Campus Brew Co.",
    address: "456 University Blvd, Stanford, CA",
    hours: "7:00 AM - 9:00 PM",
    photos: [
      "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1521017432531-fbd92d768814?w=400&h=300&fit=crop"
    ],
    description: "Popular campus hangout with outdoor seating and locally roasted coffee.",
    tags: ["Outdoor Seating", "Local Roasts", "Social Atmosphere", "Good Coffee"],
    recommendations: {
      total: 18,
      recommended: 14,
      notRecommended: 4
    },
    recentRecommendations: [
      {
        id: 4,
        user: {
          id: 4,
          name: "Emma Thompson",
          username: "@emma_studies",
          email: "emma.thompson@stanford.edu",
          avatar: "ET",
          university: "Stanford University",
          year: "Sophomore",
          major: "Psychology",
          joinedDate: "2024-01-28",
          reviewCount: 19,
          helpfulVotes: 124,
          profileImage: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop&crop=face"
        },
        recommended: true,
        reason: "Love the outdoor patio here! Great for group projects when the weather's nice. Their house blend is solid.",
        timestamp: "1d ago",
        helpful: 15,
        tags: ["Outdoor Seating", "Good Coffee", "Social Atmosphere"]
      },
      {
        id: 5,
        user: {
          id: 5,
          name: "David Kim",
          username: "@david_phd",
          email: "david.kim@stanford.edu",
          avatar: "DK",
          university: "Stanford University",
          year: "PhD",
          major: "Materials Science",
          joinedDate: "2023-08-15",
          reviewCount: 42,
          helpfulVotes: 287,
          profileImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face"
        },
        recommended: false,
        reason: "Gets way too crowded during peak hours. Hard to find a seat and pretty loud for studying.",
        timestamp: "2d ago",
        helpful: 6,
        tags: ["Crowded", "Loud"]
      }
    ]
  },
  {
    id: 3,
    name: "Midnight Oil Café",
    address: "789 Library Way, Stanford, CA",
    hours: "24/7",
    photos: [
      "https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400&h=300&fit=crop"
    ],
    description: "The only 24/7 coffee shop on campus, perfect for late-night study sessions.",
    tags: ["24/7", "Quiet Atmosphere", "Late Night", "Study-Friendly"],
    recommendations: {
      total: 31,
      recommended: 28,
      notRecommended: 3
    },
    recentRecommendations: [
      {
        id: 6,
        user: {
          id: 6,
          name: "Jenny Liu",
          username: "@jenny_cs",
          email: "jenny.liu@stanford.edu",
          avatar: "JL",
          university: "Stanford University",
          year: "Junior",
          major: "Computer Science",
          joinedDate: "2023-11-05",
          reviewCount: 28,
          helpfulVotes: 178,
          profileImage: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=40&h=40&fit=crop&crop=face"
        },
        recommended: true,
        reason: "Lifesaver during finals week! Open 24/7 which is clutch for those all-nighters. Super quiet after 10pm.",
        timestamp: "3d ago",
        helpful: 22,
        tags: ["24/7", "Quiet Atmosphere", "Late Night"]
      },
      {
        id: 7,
        user: {
          id: 7,
          name: "Ryan Park",
          username: "@ryan_coffee",
          email: "ryan.park@stanford.edu",
          avatar: "RP",
          university: "Stanford University",
          year: "Senior",
          major: "Mechanical Engineering",
          joinedDate: "2023-09-20",
          reviewCount: 35,
          helpfulVotes: 245,
          profileImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face"
        },
        recommended: true,
        reason: "Perfect for late night coding sessions. The staff is super friendly even at 2am!",
        timestamp: "4d ago",
        helpful: 16,
        tags: ["24/7", "Study-Friendly", "Late Night"]
      }
    ]
  },
  {
    id: 4,
    name: "Bean There Coffee",
    address: "321 Main St, Stanford, CA",
    hours: "6:30 AM - 8:00 PM",
    photos: [
      "https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop"
    ],
    description: "Trendy spot with Instagram-worthy aesthetics and artisanal pastries.",
    tags: ["Aesthetic Interior", "Good Pastries", "Trendy", "Expensive"],
    recommendations: {
      total: 12,
      recommended: 7,
      notRecommended: 5
    },
    recentRecommendations: [
      {
        id: 8,
        user: {
          id: 8,
          name: "Lisa Wang",
          username: "@lisa_aesthetic",
          email: "lisa.wang@stanford.edu",
          avatar: "LW",
          university: "Stanford University",
          year: "Junior",
          major: "Art History",
          joinedDate: "2024-01-10",
          reviewCount: 21,
          helpfulVotes: 134,
          profileImage: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face"
        },
        recommended: true,
        reason: "Instagram-worthy interior and amazing pastries! Perfect for casual study sessions with friends.",
        timestamp: "2d ago",
        helpful: 11,
        tags: ["Aesthetic Interior", "Good Pastries", "Trendy"]
      },
      {
        id: 9,
        user: {
          id: 5,
          name: "David Kim",
          username: "@david_phd",
          email: "david.kim@stanford.edu",
          avatar: "DK",
          university: "Stanford University",
          year: "PhD",
          major: "Materials Science",
          joinedDate: "2023-08-15",
          reviewCount: 42,
          helpfulVotes: 287,
          profileImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face"
        },
        recommended: false,
        reason: "Coffee is decent but pretty pricey for students. The pastries are amazing though. Can get really loud during peak hours.",
        timestamp: "4d ago",
        helpful: 9,
        tags: ["Expensive", "Loud"]
      }
    ]
  }
];

// Mock user data for authentication and profiles
export const mockUsers = [
  {
    id: 1,
    name: "Sarah Mitchell",
    username: "@sarah_m",
    email: "sarah.mitchell@stanford.edu",
    avatar: "SM",
    university: "Stanford University",
    year: "Junior",
    major: "Computer Science",
    joinedDate: "2024-01-15",
    reviewCount: 23,
    helpfulVotes: 156,
    profileImage: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=40&h=40&fit=crop&crop=face"
  },
  {
    id: 2,
    name: "Mike Rodriguez",
    username: "@mike_coffee",
    email: "mike.rodriguez@stanford.edu",
    avatar: "MR",
    university: "Stanford University",
    year: "Senior",
    major: "Economics",
    joinedDate: "2023-09-10",
    reviewCount: 31,
    helpfulVotes: 203,
    profileImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face"
  },
  {
    id: 3,
    name: "Alex Chen",
    username: "@alex_studies",
    email: "alex.chen@stanford.edu",
    avatar: "AC",
    university: "Stanford University",
    year: "Sophomore",
    major: "Biology",
    joinedDate: "2024-02-20",
    reviewCount: 15,
    helpfulVotes: 89,
    profileImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face"
  }
];

export const getCafesByUniversity = (universitySlug) => {
  // In a real app, this would filter by university
  // For now, return all cafes for any university
  return mockCafes;
};

export const getCafeById = (cafeId) => {
  return mockCafes.find(cafe => cafe.id === parseInt(cafeId));
};

export const getUserById = (userId) => {
  return mockUsers.find(user => user.id === parseInt(userId));
};

export default mockCafes;

