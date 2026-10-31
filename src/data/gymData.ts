export interface Facility {
  id: string;
  name: string;
  tagline: string;
  description: string;
  image: string;
  isAuthentic: boolean;
  highlights: string[];
}

export interface Program {
  id: string;
  title: string;
  category: string;
  shortDesc: string;
  fullDesc: string;
  image: string;
  isAuthentic: boolean;
  keyBenefits: string[];
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  source: string;
}

export interface OperatingHours {
  day: string;
  hours: string;
  openHour: number;
  openMinute: number;
  closeHour: number;
  closeMinute: number;
}

export const GYM_DETAILS = {
  name: "FURY FITNESS",
  tagline: "UNLEASH YOUR INNER STRENGTH.",
  heroHeadline: "BUILT BY DISCIPLINE.\nDEFINED BY STRENGTH.",
  heroSubtext:
    "Your fitness journey deserves more than an ordinary gym. Train harder, get stronger, and become the best version of yourself at FURY FITNESS.",
  address: {
    line1: "2nd Floor, No. 1/554",
    street: "Mambakkam Main Road, VGP Layout",
    area: "Vengavasal",
    city: "Chennai",
    state: "Tamil Nadu",
    pincode: "600100",
    full: "2nd Floor, No. 1/554, Mambakkam Main Road, VGP Layout, Vengavasal, Chennai, Tamil Nadu – 600100",
  },
  phone: "078457 60207",
  phoneFormatted: "+91 78457 60207",
  phoneTel: "+917845760207",
  whatsappNumber: "917845760207",
  googleReviewsCount: 134,
  googleMapsDirectionsUrl:
    "https://www.google.com/maps/dir/?api=1&destination=Fury+Fitness+Vengavasal+Chennai",
  googleMapsEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.7561845607736!2d80.16527!3d12.92336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525e6834b7f329%3A0x8677bf1516e88102!2sFury%20Fitness!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
  logoUrl: "/assets/aistudio/logo_8267c561.jpg",
};

export const OPERATING_HOURS: OperatingHours[] = [
  { day: "Monday", hours: "5:00 AM – 10:00 PM", openHour: 5, openMinute: 0, closeHour: 22, closeMinute: 0 },
  { day: "Tuesday", hours: "5:00 AM – 10:00 PM", openHour: 5, openMinute: 0, closeHour: 22, closeMinute: 0 },
  { day: "Wednesday", hours: "5:00 AM – 10:00 PM", openHour: 5, openMinute: 0, closeHour: 22, closeMinute: 0 },
  { day: "Thursday", hours: "5:00 AM – 10:00 PM", openHour: 5, openMinute: 0, closeHour: 22, closeMinute: 0 },
  { day: "Friday", hours: "5:00 AM – 10:00 PM", openHour: 5, openMinute: 0, closeHour: 22, closeMinute: 0 },
  { day: "Saturday", hours: "5:00 AM – 10:00 PM", openHour: 5, openMinute: 0, closeHour: 22, closeMinute: 0 },
  { day: "Sunday", hours: "6:00 AM – 1:00 PM", openHour: 6, openMinute: 0, closeHour: 13, closeMinute: 0 },
];

export const FACILITIES: Facility[] = [
  {
    id: "modern-equipment",
    name: "Modern Workout Equipment",
    tagline: "Heavy-Duty Bio-Mechanical Stations",
    description:
      "Engineered plate-loaded and selectorized machines designed for optimal resistance curves, safe joint alignment, and maximum muscle recruitment.",
    image: "/assets/aistudio/interior_6307e5de.jpg",
    isAuthentic: true,
    highlights: ["Custom red & black heavy-duty frames", "Full cable pulley crossovers", "Multi-station resistance towers"],
  },
  {
    id: "strength-area",
    name: "Strength Training Area",
    tagline: "Dedicated Power & Hypertrophy Zone",
    description:
      "Extensive Olympic barbells, calibrated cast-iron plates, robust power racks, and precision dumbbells built for serious lifters.",
    image: "/assets/aistudio/traing_7fd3f9e1.webp",
    isAuthentic: true,
    highlights: ["Olympic free weights & benches", "Plate-loaded seated press stations", "Heavy dumbbell racks"],
  },
  {
    id: "cardio-zone",
    name: "Cardio Equipment",
    tagline: "Endurance & Cardiovascular Conditioning",
    description:
      "High-spec commercial treadmills, rowers, and elliptical trainers configured for fat-loss intervals, stamina, and cardiovascular longevity.",
    image: "/src/assets/images/cardio_equipment_zone_1793456498871.jpg",
    isAuthentic: false,
    highlights: ["Interactive telemetry displays", "Paced interval training programs", "Ergometer rowers & treadmills"],
  },
  {
    id: "personal-training",
    name: "Personal Training",
    tagline: "1-on-1 Certified Coaching & Discipline",
    description:
      "Direct guidance on lifting mechanics, progressive overload, structured nutrition, and accountability tailored specifically to your body.",
    image: "/assets/aistudio/gyme_a2d033ce.jpg",
    isAuthentic: true,
    highlights: ["Customized periodized training plans", "Body composition tracking", "Competition & strength coaching"],
  },
  {
    id: "sauna",
    name: "Sauna",
    tagline: "Therapeutic Muscle Recovery & Detox",
    description:
      "Premium Finnish-style thermal heat sauna designed to accelerate metabolic recovery, soothe muscle tension, and lower cortisol post-workout.",
    image: "/src/assets/images/sauna_facility_1793456498026.jpg",
    isAuthentic: false,
    highlights: ["Thermal recovery chamber", "Natural cedar wood interior", "Accelerated circulation & joint relief"],
  },
  {
    id: "shower-facilities",
    name: "Shower Facilities",
    tagline: "Pristine Post-Workout Refreshment",
    description:
      "Hygienic, private shower and changing facilities allowing seamless transitions between early morning workouts and your daily schedule.",
    image: "/src/assets/images/sauna_facility_1793456498026.jpg",
    isAuthentic: false,
    highlights: ["Private shower suites", "High-pressure hot/cold water", "Locker storage & grooming counters"],
  },
  {
    id: "online-classes",
    name: "Online Classes",
    tagline: "Guided Remote Fitness Support",
    description:
      "Digital coaching sessions, mobility routines, and structured home workout guidance when travelling or training remotely.",
    image: "/src/assets/images/athletic_conditioning_1793456498361.jpg",
    isAuthentic: false,
    highlights: ["Virtual form feedback", "Remote conditioning routines", "Trainer consultation via mobile"],
  },
];

export const PROGRAMS: Program[] = [
  {
    id: "strength-training",
    title: "Strength Training",
    category: "Power & Hypertrophy",
    shortDesc:
      "Build raw power, dense lean muscle mass, and indestructible joint integrity through progressive compound lifting.",
    fullDesc:
      "Our strength program utilizes progressive overload across compound lifts—squats, deadlifts, presses, and rows—paired with bio-mechanically matched plate-loaded machines. Suitable for novices building baseline strength to competitive lifters.",
    image: "/assets/aistudio/traing_7fd3f9e1.webp",
    isAuthentic: true,
    keyBenefits: ["Compound lift mastery", "Bone density & joint reinforcement", "Targeted progressive overload"],
  },
  {
    id: "weight-loss",
    title: "Weight Loss Programs",
    category: "Fat Burn & Metabolic Recomp",
    shortDesc:
      "Scientifically structured metabolic conditioning combined with sustainable caloric discipline for lasting fat loss.",
    fullDesc:
      "Target stubborn fat while preserving lean muscle. We merge high-energy functional circuits, monitored heart-rate intervals, and straightforward nutritional advice that fits a realistic Indian lifestyle.",
    image: "/src/assets/images/athletic_conditioning_1793456498361.jpg",
    isAuthentic: false,
    keyBenefits: ["Elevated resting metabolic rate", "High-energy circuit conditioning", "Sustainable nutrition blueprint"],
  },
  {
    id: "personal-training-program",
    title: "Personal Training",
    category: "Dedicated 1-on-1 Guidance",
    shortDesc:
      "Work directly with elite trainers who keep you accountable, eliminate guesswork, and fast-track your physical transformation.",
    fullDesc:
      "Personalized training at Fury Fitness means customized programming, strict movement correction to prevent injury, and constant progression check-ins. Your trainer walks every rep with you.",
    image: "/assets/aistudio/gyme_a2d033ce.jpg",
    isAuthentic: true,
    keyBenefits: ["Injury prevention & biomechanics", "Weekly progress assessments", "Direct coach accountability"],
  },
  {
    id: "conditioning",
    title: "Fitness and Conditioning",
    category: "Stamina & Athletic Power",
    shortDesc:
      "Enhance cardiovascular output, agility, work capacity, and mental resilience for peak daily physical performance.",
    fullDesc:
      "Combining battle ropes, sleds, plyometric drills, and tempo cardio to build an engine that doesn't quit. Feel energized, agile, and ready for whatever physical challenge comes your way.",
    image: "/src/assets/images/cardio_equipment_zone_1793456498871.jpg",
    isAuthentic: false,
    keyBenefits: ["Increased lung capacity & VO2", "Athletic agility & coordination", "Functional multi-plane movement"],
  },
  {
    id: "general-fitness",
    title: "General Fitness",
    category: "Longevity & Lifestyle Health",
    shortDesc:
      "Build daily vitality, mobility, postural correction, and overall health in a welcoming, highly motivating gym culture.",
    fullDesc:
      "Designed for working professionals, students, and fitness enthusiasts wanting consistent healthy habits, reduced stress, and functional stamina for life.",
    image: "/assets/aistudio/interior_6307e5de.jpg",
    isAuthentic: true,
    keyBenefits: ["Posture & spinal mobility", "Stress reduction & mental clarity", "Consistent, sustainable habit"],
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    quote: "Great atmosphere, good equipment, and a very motivating environment.",
    author: "Verified Member",
    role: "Fury Fitness Member",
    source: "Google Reviews",
  },
  {
    id: "t2",
    quote: "The price is very reasonable for the services and facilities provided.",
    author: "Dedicated Athlete",
    role: "Strength & Conditioning Member",
    source: "Google Reviews",
  },
  {
    id: "t3",
    quote: "Love Fury Fitness and the people who run this place.",
    author: "Community Member",
    role: "Regular Trainee",
    source: "Google Reviews",
  },
];

export const GALLERY_ITEMS = [
  {
    id: "g1",
    title: "State Level Championship Podium",
    category: "championship",
    categoryLabel: "Championship & Culture",
    image: "/assets/aistudio/achievmnet_ba180390.jpg",
    isAuthentic: true,
    desc: "Athletes proudly representing on the championship podium with medals and official state honors.",
  },
  {
    id: "g2",
    title: "Main Strength & Turf Training Hall",
    category: "facility",
    categoryLabel: "Facility & Gear",
    image: "/assets/aistudio/interior_6307e5de.jpg",
    isAuthentic: true,
    desc: "Vengavasal centre equipped with heavy-duty red & black machine stations and training turf.",
  },
  {
    id: "g3",
    title: "Targeted Resistance & Plate-Loaded Work",
    category: "training",
    categoryLabel: "Training Action",
    image: "/assets/aistudio/traing_7fd3f9e1.webp",
    isAuthentic: true,
    desc: "Hard work on precision biomechanical plate-loaded seated stations.",
  },
  {
    id: "g4",
    title: "Discipline, Brotherhood & Motivation",
    category: "championship",
    categoryLabel: "Championship & Culture",
    image: "/assets/aistudio/gyme_a2d033ce.jpg",
    isAuthentic: true,
    desc: "The culture of strength: authentic coaching, brotherhood, and collective progress.",
  },
  {
    id: "g5",
    title: "Commercial Cardio & Endurance Line",
    category: "facility",
    categoryLabel: "Facility & Gear",
    image: "/src/assets/images/cardio_equipment_zone_1793456498871.jpg",
    isAuthentic: false,
    desc: "Paced interval running, rowing, and endurance conditioning stations.",
  },
  {
    id: "g6",
    title: "Thermal Sauna & Recovery Suite",
    category: "facility",
    categoryLabel: "Facility & Gear",
    image: "/src/assets/images/sauna_facility_1793456498026.jpg",
    isAuthentic: false,
    desc: "Finnish cedar wood sauna for deep muscular recovery and metabolic revitalization.",
  },
  {
    id: "g7",
    title: "High-Intensity Conditioning",
    category: "training",
    categoryLabel: "Training Action",
    image: "/src/assets/images/athletic_conditioning_1793456498361.jpg",
    isAuthentic: false,
    desc: "Explosive metabolic battle ropes and functional athletic capacity building.",
  },
];

export const WHY_FURY_POINTS = [
  {
    number: "01",
    title: "Well-Equipped Fitness Environment",
    description:
      "A spacious, modern facility with commercial-grade plate-loaded machines, Olympic racks, and diverse equipment built to handle heavy lifting and versatile conditioning.",
  },
  {
    number: "02",
    title: "Personalized Training",
    description:
      "Coaches who analyze your movement patterns and goals to formulate structured routines with real progressive overload—not generic cookie-cutter templates.",
  },
  {
    number: "03",
    title: "Weight Loss Support",
    description:
      "Proven metabolic training routines paired with realistic nutritional guidance to facilitate sustainable fat loss while preserving vital lean muscle tissue.",
  },
  {
    number: "04",
    title: "Motivating Atmosphere",
    description:
      "An energizing, high-drive environment where every member is focused on showing up, pushing limits, and supporting one another.",
  },
  {
    number: "05",
    title: "Affordable & Reasonable Service",
    description:
      "Exceptional gym facilities, premium equipment, and knowledgeable coaching provided at transparent, competitive rates with unmatched value.",
  },
  {
    number: "06",
    title: "Community-Driven Fitness Culture",
    description:
      "A tight-knit brotherhood and sisterhood of fitness enthusiasts and champions who celebrate every milestone, PR, and personal victory.",
  },
];
