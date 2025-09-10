// Mock data for SmartBus booking system
// In production, this would come from APIs/CMS

export const cities = [
  { id: 1, name: "Delhi", code: "DEL", state: "Delhi" },
  { id: 2, name: "Gurugram", code: "GGN", state: "Haryana" },
  { id: 3, name: "Lucknow", code: "LKO", state: "Uttar Pradesh" },
  { id: 4, name: "Kanpur", code: "KNP", state: "Uttar Pradesh" },
  { id: 5, name: "Vrindavan", code: "VRN", state: "Uttar Pradesh" },
  { id: 6, name: "Prayagraj", code: "PRG", state: "Uttar Pradesh" },
];

export const routes = [
  {
    id: 1,
    from: "Delhi",
    to: "Gurugram",
    duration: "1h 15m",
    distance: "35 km",
    price: 120,
    busType: "AC Sleeper",
    departure: "07:30",
    arrival: "08:45",
    availableSeats: 18,
  },
  {
    id: 2,
    from: "Delhi",
    to: "Lucknow",
    duration: "7h 30m",
    distance: "550 km",
    price: 850,
    busType: "Volvo AC Sleeper",
    departure: "22:00",
    arrival: "05:30",
    availableSeats: 12,
  },
  {
    id: 3,
    from: "Lucknow",
    to: "Kanpur",
    duration: "2h 45m",
    distance: "85 km",
    price: 280,
    busType: "AC Semi Sleeper",
    departure: "15:30",
    arrival: "18:15",
    availableSeats: 22,
  },
  {
    id: 4,
    from: "Delhi",
    to: "Vrindavan",
    duration: "3h 15m",
    distance: "160 km",
    price: 350,
    busType: "AC Sleeper",
    departure: "06:00",
    arrival: "09:15",
    availableSeats: 16,
  },
  {
    id: 5,
    from: "Prayagraj",
    to: "Lucknow",
    duration: "4h 20m",
    distance: "210 km",
    price: 480,
    busType: "Volvo AC Sleeper",
    departure: "20:45",
    arrival: "01:05",
    availableSeats: 9,
  },
  {
    id: 6,
    from: "Kanpur",
    to: "Delhi",
    duration: "8h 15m",
    distance: "450 km",
    price: 720,
    busType: "AC Sleeper",
    departure: "21:30",
    arrival: "05:45",
    availableSeats: 14,
  },
];

export const features = [
  {
    id: 1,
    title: "Live GPS Tracking",
    description: "Track your bus in real-time with live location updates",
    icon: "MapPin",
  },
  {
    id: 2,
    title: "Flexi Ticket",
    description: "Change your travel date up to 2 hours before departure",
    icon: "Calendar",
  },
  {
    id: 3,
    title: "100% Refund Policy",
    description: "Get full refund if canceled 12 hours prior to departure",
    icon: "Shield",
  },
  {
    id: 4,
    title: "Comfortable Sleepers",
    description: "Premium sleeper seats with extra legroom and comfort",
    icon: "Bed",
  },
  {
    id: 5,
    title: "Clean Toilets",
    description: "Hygienic and well-maintained restroom facilities",
    icon: "Sparkles",
  },
  {
    id: 6,
    title: "Charging Points",
    description: "USB and power outlets available at every seat",
    icon: "Zap",
  },
  {
    id: 7,
    title: "AC Lounges",
    description: "Comfortable waiting lounges at major boarding points",
    icon: "AirVent",
  },
  {
    id: 8,
    title: "On-counter Booking",
    description: "Book tickets at our physical counters in all major cities",
    icon: "Store",
  },
];

export const lounges = [
  {
    id: 1,
    city: "Delhi",
    address: "Ground Floor, ISBT Kashmere Gate, Delhi - 110006",
    hours: "24/7",
    phone: "7668625945",
    image: "/api/placeholder/300/200",
  },
  {
    id: 2,
    city: "Gurugram",
    address: "Sector 14, Near Metro Station, Gurugram - 122001",
    hours: "05:00 AM - 11:00 PM",
    phone: "7668625945",
    image: "/api/placeholder/300/200",
  },
  {
    id: 3,
    city: "Lucknow",
    address: "Charbagh Bus Station, Platform 8, Lucknow - 226004",
    hours: "24/7",
    phone: "7668625945",
    image: "/api/placeholder/300/200",
  },
  {
    id: 4,
    city: "Kanpur",
    address: "Central Bus Station, Civil Lines, Kanpur - 208001",
    hours: "06:00 AM - 10:00 PM",
    phone: "7668625945",
    image: "/api/placeholder/300/200",
  },
  {
    id: 5,
    city: "Vrindavan",
    address: "Krishna Bus Terminal, Vrindavan Road, Vrindavan - 281121",
    hours: "05:00 AM - 09:00 PM",
    phone: "7668625945",
    image: "/api/placeholder/300/200",
  },
  {
    id: 6,
    city: "Prayagraj",
    address: "Civil Lines Bus Stand, Prayagraj - 211001",
    hours: "24/7",
    phone: "7668625945",
    image: "/api/placeholder/300/200",
  },
];

export const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    location: "Delhi",
    rating: 5,
    comment: "Excellent service! The bus was clean, comfortable, and arrived on time. The booking process was smooth.",
  },
  {
    id: 2,
    name: "Raj Patel",
    location: "Lucknow",
    rating: 5,
    comment: "Great experience with SmartBus. Live tracking feature is amazing and the staff is very helpful.",
  },
  {
    id: 3,
    name: "Anjali Singh",
    location: "Kanpur",
    rating: 4,
    comment: "Comfortable journey and good amenities. Would definitely recommend to others.",
  },
  {
    id: 4,
    name: "Rahul Gupta",
    location: "Gurugram",
    rating: 5,
    comment: "Perfect for daily commute. Professional service and always on time.",
  },
  {
    id: 5,
    name: "Kavita Agarwal",
    location: "Vrindavan",
    rating: 5,
    comment: "Safe and comfortable journey. The call booking service is very convenient.",
  },
  {
    id: 6,
    name: "Amit Kumar",
    location: "Prayagraj",
    rating: 4,
    comment: "Good value for money. Clean buses and courteous staff.",
  },
];

export const offers = [
  {
    id: 1,
    title: "Flat ₹200 Cashback",
    description: "Get instant cashback on bookings above ₹1000",
    code: "SMART200",
    validity: "Valid till Dec 31, 2024",
    terms: "Minimum booking amount ₹1000. Valid for new users only.",
  },
  {
    id: 2,
    title: "Weekend Special",
    description: "15% off on weekend travel bookings",
    code: "WEEKEND15",
    validity: "Valid for weekend travel",
    terms: "Valid for bookings on Friday, Saturday, and Sunday travel.",
  },
];

export const faqs = [
  {
    id: 1,
    question: "How can I book a ticket?",
    answer: "You can book tickets online through our website or call us at 7668625945 for phone booking assistance.",
  },
  {
    id: 2,
    question: "What is the cancellation policy?",
    answer: "Get 100% refund if canceled 12 hours prior to departure. 50% refund for cancellations between 2-12 hours before departure.",
  },
  {
    id: 3,
    question: "Can I track my bus live?",
    answer: "Yes, you can track your bus in real-time using our live GPS tracking feature available on our website.",
  },
  {
    id: 4,
    question: "What amenities are available on the bus?",
    answer: "Our buses feature comfortable sleeper seats, clean toilets, charging points, air conditioning, and onboard entertainment.",
  },
  {
    id: 5,
    question: "How early should I reach the boarding point?",
    answer: "Please reach the boarding point at least 30 minutes before the scheduled departure time.",
  },
];

export const seatLayout = {
  lower: [
    [1, 2, null, 3, 4],
    [5, 6, null, 7, 8],
    [9, 10, null, 11, 12],
    [13, 14, null, 15, 16],
    [17, 18, null, 19, 20],
    [21, 22, null, 23, 24],
    [25, 26, null, 27, 28],
  ],
  upper: [
    [29, 30, null, 31, 32],
    [33, 34, null, 35, 36],
    [37, 38, null, 39, 40],
    [41, 42, null, 43, 44],
    [45, 46, null, 47, 48],
    [49, 50, null, 51, 52],
    [53, 54, null, 55, 56],
  ],
};

export const seatStatuses = {
  1: "available", 2: "available", 3: "ladies", 4: "available",
  5: "occupied", 6: "available", 7: "available", 8: "ladies",
  9: "available", 10: "available", 11: "occupied", 12: "available",
  // ... continue for all seats
};