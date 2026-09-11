export const DEPARTURE_CITIES = [
  "Multan",
  "Sahiwal",
  "Faisalabad",
  "Lahore",
  "Gujranwala",
  "Rawalpindi/Islamabad",
] as const;

export interface OfficeLocation {
  city: string;
  name: string;
  type: "Head Office" | "Regional Office" | "Branch Office";
  address: string;
  phone: string;
  isHeadOffice?: boolean;
}

export const OPERATIONAL_OFFICES: OfficeLocation[] = [
  {
    city: "Lahore",
    name: "Lahore Head Office",
    type: "Head Office",
    address: "59 A Commercial, Central Park, Lahore, Pakistan",
    phone: "+92 323 7266292",
    isHeadOffice: true,
  },
  {
    city: "Multan",
    name: "Multan Regional Office",
    type: "Regional Office",
    address: "Operational Branch, Multan, Pakistan",
    phone: "+92 323 7266292",
    isHeadOffice: false,
  },
  {
    city: "Haroonabad",
    name: "Haroonabad Office",
    type: "Branch Office",
    address: "Operational Branch, Haroonabad, Pakistan",
    phone: "+92 323 7266292",
    isHeadOffice: false,
  },
  {
    city: "Chishtian",
    name: "Chishtian Office",
    type: "Branch Office",
    address: "Operational Branch, Chishtian, Pakistan",
    phone: "+92 323 7266292",
    isHeadOffice: false,
  },
  {
    city: "Gujranwala",
    name: "Gujranwala Office",
    type: "Branch Office",
    address: "Operational Branch, Gujranwala, Pakistan",
    phone: "+92 323 7266292",
    isHeadOffice: false,
  },
  {
    city: "Sialkot",
    name: "Sialkot Office",
    type: "Branch Office",
    address: "Operational Branch, Sialkot, Pakistan",
    phone: "+92 323 7266292",
    isHeadOffice: false,
  },
  {
    city: "Rawalpindi",
    name: "Rawalpindi / Islamabad Office",
    type: "Regional Office",
    address: "Operational Branch, Rawalpindi / Islamabad, Pakistan",
    phone: "+92 323 7266292",
    isHeadOffice: false,
  },
];

export interface TourPackage {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  duration: string;
  days: number;
  nights: number;
  destination: string;
  category: "group" | "custom" | "weekend" | "trekking";
  badge: string;
  featured: boolean;
  price: number;
  sharingPrices: {
    quad: number;
    triple: number;
    twin: number;
    privateCouple?: number;
  };
  rating: number;
  reviewsCount: number;
  image: string;
  gallery: string[];
  departureCities: string[];
  departureSchedule?: string;
  upcomingDates: string[];
  tags: string[];
  highlights: string[];
  overview: string;
  itinerary: { day: number; title: string; desc: string }[];
  inclusions: string[];
  exclusions: string[];
}

export interface SiteConfig {
  businessName: string;
  shortName: string;
  tagline: string;
  subTagline: string;
  phone: string;
  hotlineDisplay: string;
  whatsappNumber: string;
  whatsappLink: string;
  email: string;
  registrationId: string;
  registrationNumber: string;
  companyType: string;
  legalName: string;
  addresses: { lahore: string };
  offices: OfficeLocation[];
  socials: { instagram: string; facebook: string; tiktok?: string };
  stats: { label: string; value: string }[];
  categories: any[];
  activities: any[];
  tours: TourPackage[];
  testimonials: any[];
  faqs: any[];
  galleryMoments: any[];
}

export const config: SiteConfig = {
  businessName: "Paradise Trips & Tours",
  shortName: "Paradise Trips & Tours",
  tagline: "Discover Your Paradise Across Pakistan",
  subTagline: "Curated northern expeditions, luxury family retreats, and executive mountain road adventures across Pakistan.",
  phone: "+92 323 7266292",
  hotlineDisplay: "+92 323 7266292",
  whatsappNumber: "923237266292",
  whatsappLink: "https://wa.me/923237266292?text=Hi%20Paradise%20Trips%20%26%20Tours!%20I%20want%20to%20inquire%20about%20your%20upcoming%20tours.",
  email: "info@paradisetrips.com",
  registrationId: "0271937",
  registrationNumber: "0271937",
  companyType: "Private Limited (Pvt Ltd)",
  legalName: "Paradise Trips & Tours (Pvt) Ltd",
  addresses: {
    lahore: "59 A Commercial, Central Park, Lahore, Pakistan",
  },
  offices: OPERATIONAL_OFFICES,
  socials: {
    instagram: "https://www.instagram.com/paradise_trips_and_tours/",
    facebook: "https://www.facebook.com/paradisetravelandtours.official/",
    tiktok: "https://tiktok.com/@paradise_trips_and_tours",
  },
  stats: [
    { label: "Curated Expeditions", value: "950+" },
    { label: "Satisfied Travelers", value: "1,200+" },
    { label: "Verified Reviews", value: "5.0 ★ (8)" },
    { label: "Safety & VIP Protocol", value: "100%" },
  ],
  categories: [
    {
      id: "group",
      title: "Royal Group Expeditions",
      subtitle: "Curated Road Journeys",
      tagline: "Uniting like-minded adventurers on scenic Karakoram road trips with luxury chalets, bonfire music, and cinematic memories.",
      cta: "Explore Group Tours",
      href: "/packages?cat=group",
      badge: "Vibrant Community",
      image: "/images/real_passu_hunza.jpg",
      icon: "Users",
    },
    {
      id: "weekend",
      title: "Weekend Escapes",
      subtitle: "Quick Mountain Resets",
      tagline: "3-day short retreats to Swat, Naran, Azad Kashmir, and Kumrat Valley designed to refresh your mind with zero hassle.",
      cta: "Explore Weekend Trips",
      href: "/packages?cat=weekend",
      badge: "Every Weekend",
      image: "/images/real_swat_malamjabba.jpg",
      icon: "Calendar",
    },
    {
      id: "trekking",
      title: "Alpine Trekking Trails",
      subtitle: "Lakes & Wilderness",
      tagline: "Guided trekking expeditions to high-altitude glacial gems like Katora Lake and Jahaz Banda alpine meadows.",
      cta: "Explore Treks",
      href: "/packages?cat=trekking",
      badge: "Alpine Thrills",
      image: "/images/real_kumrat_katora.jpg",
      icon: "Compass",
    },
    {
      id: "custom",
      title: "Bespoke Private Itineraries",
      subtitle: "Tailor-Made Luxury",
      tagline: "Handcrafted private journeys for discerning families, couples, executive retreats, and private squads with dedicated 4x4 Prado.",
      cta: "Craft Custom Trip",
      href: "/craft-your-tour",
      badge: "100% Customized",
      image: "/images/real_shangrila_skardu.jpg",
      icon: "Compass",
    },
  ],
  activities: [
    {
      title: "Royal Bonfire & Jamming",
      tag: "Bonfire Bethak",
      desc: "Starlit fireside storytelling, live BBQ feasts, mountain tea, and acoustic jamming under the Karakoram galaxy.",
      icon: "Flame",
    },
    {
      title: "Canvas & Clouds",
      tag: "Alpine Art",
      desc: "Guided mountain painting sessions with provided easels, canvases, and paints amidst majestic 8,000m summits.",
      icon: "Palette",
    },
    {
      title: "Tasweer Kushi & Drone Shoots",
      tag: "Cinematic Visuals",
      desc: "Dedicated professional trip photographers capturing aesthetic reels, drone aerials, and 4K portraits.",
      icon: "Camera",
    },
    {
      title: "RoadRang & Interactive Vibes",
      tag: "Community Fun",
      desc: "Curated music playlists, trivia, icebreakers, and bus games that turn strangers into lifelong friends.",
      icon: "Sparkles",
    },
    {
      title: "Sky Lanterns over Glaciers",
      tag: "Night Spectacle",
      desc: "Illuminating the Karakoram and Himalayan nights with floating golden lanterns of hope and aspirations.",
      icon: "Moon",
    },
    {
      title: "Summit Mini Raves & Beats",
      tag: "High-Altitude Beats",
      desc: "Joyful celebratory summit music, glowing lanterns, and high-energy victory dances on alpine passes.",
      icon: "Music",
    },
  ],
  tours: [
    {
      id: "skardu-cocktail-8d",
      slug: "8-days-skardu-shangrila-hunza-deosai-cocktail",
      title: "8 Days — Skardu, Shangrila, Hunza & Deosai Cocktail Expedition",
      subtitle: "The ultimate 3-in-1 mega tour: Shangrila Resort, Deosai Plains, Hunza Attabad Lake, Passu Cones & Lake Saif-ul-Malook.",
      duration: "8 Days / 7 Nights",
      days: 8,
      nights: 7,
      destination: "Skardu, Shangrila, Hunza & Deosai",
      category: "group",
      badge: "COCKTAIL EXPEDITION",
      featured: true,
      price: 38500,
      sharingPrices: {
        quad: 38500,
        triple: 42500,
        twin: 48000,
        privateCouple: 52000,
      },
      rating: 5.0,
      reviewsCount: 8,
      image: "/images/real_shangrila_skardu.jpg",
      gallery: [
        "/images/real_shangrila_skardu.jpg",
        "/images/real_deosai.jpg",
        "/images/real_passu_hunza.jpg",
      ],
      departureCities: [
        "Multan",
        "Sahiwal",
        "Faisalabad",
        "Lahore",
        "Gujranwala",
        "Rawalpindi/Islamabad",
      ],
      departureSchedule: "Every Saturday Morning / Friday Night (8 Days)",
      upcomingDates: [
        "Every Saturday (Weekly Fixed Departure)",
      ],
      tags: [
        "Shangrila Resort",
        "Passu Cones",
        "Deosai Plains",
        "Hunza Valley",
        "Saif-ul-Malook",
        "Live BBQ & Bonfire",
      ],
      highlights: [
        "3-in-1 Cocktail Expedition covering Skardu, Hunza Valley, and Naran Kaghan in one epic circuit",
        "4x4 Safari across the world's second-highest plateau: Deosai Plains, Sheosar Lake, Kala Pani & Bara Pani",
        "Shangrila Resort, Lower & Upper Kachura Lakes, Sadpara Lake, and roaring Mantoka Waterfall",
        "Sarfaranga Cold Desert sunset photography, ATV quad dunes, and historic Serena Shigar Fort",
        "Attabad Lake boat cruising, Hussaini Suspension Bridge, Passu Cones & Khunjerab Pass (Pak-China Border)",
        "Altit & Baltit Forts in Karimabad, legendary Lake Saif-ul-Malook, and panoramic Babusar Top",
      ],
      overview:
        "The ultimate crown jewel of northern Pakistan tourism! Experience eight days of pure wonderland across Baltistan, Hunza, and Kaghan Valley with luxury executive transport, hotel stays, live barbecues, and campfire acoustic jamming.",
      itinerary: [
        {
          day: 1,
          title: "Departure & Scenic Drive to Chilas / Naran",
          desc: "Night departure from Multan, Faisalabad, Lahore, and Islamabad (26 Number). Travel via Hazara Expressway, Balakot, Kiwi Waterfall, and Kaghan to reach Chilas / Naran for dinner and overnight stay.",
        },
        {
          day: 2,
          title: "Journey to Skardu along Indus River & KKH",
          desc: "Travel along the Karakoram Highway and scenic Skardu road. Stop at Nanga Parbat View Point, Astak Nala, and Indus River confluence. Arrive in Skardu Valley for dinner and hotel stay.",
        },
        {
          day: 3,
          title: "Shangrila Resort, Upper Kachura Lake & Shigar Valley",
          desc: "Explore the legendary Shangrila Resort, boat in turquoise Upper Kachura Lake, visit the roaring Mantoka Waterfall and centuries-old Shigar Valley. Overnight in Skardu.",
        },
        {
          day: 4,
          title: "4x4 Jeep Safari to Deosai Plains & Sheosar Lake",
          desc: "Full day 4x4 Jeep expedition to Deosai National Park (Land of Giants). Visit Sadpara Lake, Kala Pani, Bara Pani, and breathtaking Sheosar Lake. Return to Skardu for dinner.",
        },
        {
          day: 5,
          title: "Skardu to Hunza Valley via Astak Nala & Gilgit",
          desc: "Morning drive towards Hunza Valley. Sightseeing at Astak Nala, Haramosh, and Gilgit. Arrive in Hunza Valley by evening for dinner and hotel stay.",
        },
        {
          day: 6,
          title: "Attabad Lake, Passu Cones & Pak-China Border Khunjerab Pass",
          desc: "Visit Attabad Lake & Tunnels, Hussaini Suspension Bridge, Passu Cones, and Passu Glacier. Lunch at Gircha, proceed through Sost to Khunjerab Pass (4,693m). Return for evening BBQ & Bonfire musical night.",
        },
        {
          day: 7,
          title: "Altit & Baltit Forts, Karimabad & Drive to Chilas / Batakundi",
          desc: "Explore historic Altit Fort, Baltit Fort, and Karimabad heritage bazaar. Begin return journey along KKH to Chilas / Batakundi for dinner and overnight stay.",
        },
        {
          day: 8,
          title: "Lake Saif-ul-Malook, Babusar Top & Return Journey",
          desc: "Morning visit to Lake Saif-ul-Malook / Babusar Top, delicious breakfast, and smooth return drive via Hazara Expressway arriving in Islamabad, Lahore, and Multan with lifelong memories.",
        },
      ],
      inclusions: [
        "Luxury Saloon Coaster / Grand Cabin Up Model with fuel, toll taxes & chalans",
        "7 Nights quality hotel stays (4-5 sharing & 2-sharing private rooms for couples)",
        "8 Breakfasts & 7 Wholesome Dinners (Chicken Karahi, Live BBQ, Chicken Biryani, Raita & Salad)",
        "Bonfire, Acoustic Jamming, Photography & Certified Tour Captain",
        "Basic First Aid Kit",
      ],
      exclusions: [
        "Jeep charges for Deosai Plains & Lake Saif-ul-Malook",
        "Entry tickets to Forts, National Parks, Boating & Rafting",
        "Lunches, cold drinks, mineral water & room heating",
        "Personal insurance, medical aid and emergency evacuation",
      ],
    },
    {
      id: "hunza-5d",
      slug: "5-days-hunza-passu-cones-khunjerab-pass",
      title: "5 Days — Hunza Valley, Passu Cones & Khunjerab Pass Expedition",
      subtitle: "Attabad Lake boat cruise, Passu Cones, Naltar Valley ski slope, Altit Fort & the legendary Pak-China Border.",
      duration: "5 Days / 4 Nights",
      days: 5,
      nights: 4,
      destination: "Hunza Valley, Passu Cones & Naltar",
      category: "group",
      badge: "ROYAL KARAKORAM",
      featured: true,
      price: 25500,
      sharingPrices: {
        quad: 25500,
        triple: 28500,
        twin: 32500,
        privateCouple: 36000,
      },
      rating: 5.0,
      reviewsCount: 8,
      image: "/images/real_passu_hunza.jpg",
      gallery: [
        "/images/real_passu_hunza.jpg",
        "/images/real_hunza_attabad.jpg",
        "/images/real_khunjerab.jpg",
      ],
      departureCities: [
        "Multan",
        "Sahiwal",
        "Faisalabad",
        "Lahore",
        "Gujranwala",
        "Rawalpindi/Islamabad",
      ],
      departureSchedule: "Every Thursday Night & Sunday Night (5 Days)",
      upcomingDates: [
        "Every Thursday Night (Weekend Batch)",
        "Every Sunday Night (Mid-Week Batch)",
      ],
      tags: [
        "Passu Cones",
        "Attabad Lake",
        "Khunjerab Pass",
        "Naltar Valley",
        "Altit Fort",
        "Rakaposhi View",
        "Live BBQ",
      ],
      highlights: [
        "Scenic road journey along the Karakoram Highway through the towering 3 Mountain Ranges Junction",
        "Pak-China Border at Khunjerab Pass (4,693m) and Khunjerab National Park wildlife sanctuary",
        "Attabad Lake boat cruising, jet skiing, and photoshoot at iconic Hussaini Suspension Bridge",
        "Cathedral peaks of Passu Cones, Passu Glacier viewpoint, and Gircha village",
        "4x4 Jeep exploration of Naltar Valley, pine forests, ski slope, and Snow Leopard sanctuary",
        "Altit Fort & royal Karimabad heritage market with evening live BBQ and acoustic jamming",
      ],
      overview:
        "Embark on a five-day royal adventure through Hunza Valley. Experience breathtaking turquoise alpine lakes, towering jagged peaks, ancient Silk Route forts, and the highest paved international border in the world.",
      itinerary: [
        {
          day: 1,
          title: "Night Departure via Hazara Motorway to Chilas",
          desc: "Departure from Multan (5:30 PM), Lahore (10:00 PM), Faisalabad (10:00 PM), and Islamabad (3:30 AM). Travel via Hazara Expressway, Besham, Sumer Nala, and Diamer Basha Dam to reach Chilas for dinner and overnight stay.",
        },
        {
          day: 2,
          title: "Scenic Drive to Hunza & Naltar Valley Jeep Safari",
          desc: "Breakfast in Chilas, travel towards Hunza. Stop at Nanga Parbat View Point and 3 Mountain Ranges Junction. Transfer to 4x4 jeeps to explore Naltar Valley, ski slope, and Zero Point. Arrive in Hunza for dinner and hotel stay.",
        },
        {
          day: 3,
          title: "Attabad Lake, Passu Cones & Pak-China Border Khunjerab",
          desc: "Breakfast, visit Attabad Lake & Tunnels. Cross Hussaini Suspension Bridge, photoshoot at Passu Cones and Glacier. Lunch at Gircha, travel through Sost to Khunjerab National Park & China Border. Return to Hunza for BBQ and musical bonfire night.",
        },
        {
          day: 4,
          title: "Altit Fort, Karimabad Heritage Bazaar & Drive to Chilas",
          desc: "Visit the 900-year-old Altit Fort and shop in royal Karimabad bazaar. Begin scenic return drive along KKH. Arrive in Chilas for dinner and overnight stay.",
        },
        {
          day: 5,
          title: "Return Journey to Islamabad, Lahore & Multan",
          desc: "Breakfast at 7:00 AM, scenic drive along KKH / Hazara Motorway with lunch and tea stops. Arrive in Islamabad by 9:00 PM, Lahore by 2:00 AM, and Multan by 5:00 AM.",
        },
      ],
      inclusions: [
        "Private Luxury Air Conditioned / Heated Coaster / High Roof / Daewoo",
        "4 Nights hotel stay (Separate private room for couples, 4-5 sharing standard)",
        "Quality meals: 5 Breakfasts & 3 Dinners (including Live BBQ & Bonfire)",
        "All tolls, road taxes, driver expenses & first aid kit",
      ],
      exclusions: [
        "Jeep charges for Naltar Valley",
        "Entry tickets for Altit Fort, Khunjerab National Park & Boating",
        "Lunches, laundry, extras at hotel & medical insurance",
      ],
    },
    {
      id: "fairy-meadows-5d",
      slug: "5-days-fairy-meadows-nanga-parbat",
      title: "5 Days — Fairy Meadows & Nanga Parbat Base Camp Expedition",
      subtitle: "Alpine meadows, wooden chalets, reflection pool, and the majestic Killer Mountain (8,126m).",
      duration: "5 Days / 4 Nights",
      days: 5,
      nights: 4,
      destination: "Fairy Meadows & Nanga Parbat",
      category: "trekking",
      badge: "ICONIC TREK",
      featured: true,
      price: 26500,
      sharingPrices: {
        quad: 26500,
        triple: 29500,
        twin: 34000,
        privateCouple: 38000,
      },
      rating: 5.0,
      reviewsCount: 8,
      image: "/images/real_fairy_meadows.jpg",
      gallery: [
        "/images/real_fairy_meadows.jpg",
        "/images/real_babusar.jpg",
        "/images/real_passu_hunza.jpg",
      ],
      departureCities: [
        "Multan",
        "Sahiwal",
        "Faisalabad",
        "Lahore",
        "Gujranwala",
        "Rawalpindi/Islamabad",
      ],
      departureSchedule: "Every Thursday Night (5 Days Alpine Trek)",
      upcomingDates: [
        "Every Thursday Night (Weekly Fixed Departure)",
      ],
      tags: [
        "Fairy Meadows",
        "Nanga Parbat (8,126m)",
        "4x4 Jeep Track",
        "Beyal Camp",
        "Reflection Pool",
        "Wooden Chalets",
      ],
      highlights: [
        "Thrilling 4x4 cliffside mountain jeep safari from Raikot Bridge to Tattu village",
        "Scenic alpine pine forest hike up to the magical emerald plateau of Fairy Meadows",
        "Panoramic sunrise & sunset views of the towering killer mountain Nanga Parbat (8,126m)",
        "Day trek to Beyal Camp, German viewpoint, and the crystal Nanga Parbat reflection pool",
        "Cozy stays in rustic wooden cabins overlooking glaciers and starry alpine skies",
        "Evening campfire bonfire, live chicken BBQ feast, and acoustic mountain jamming",
      ],
      overview:
        "Experience the magic of Fairy Meadows on a 5-day adventure surrounded by towering 8,000m peaks, lush alpine landscapes, starry skies, and warm campfire camaraderie.",
      itinerary: [
        {
          day: 1,
          title: "Departure & Scenic Drive to Chilas / Babusar",
          desc: "Night departure from Lahore & Islamabad, traversing Babusar Top / KKH with breakfast and dinner stops.",
        },
        {
          day: 2,
          title: "Raikot Bridge, 4x4 Jeep Safari & Fairy Meadows Trek",
          desc: "Transfer to open 4x4 jeeps at Raikot Bridge. Hike through pine woods up to the magical Fairy Meadows bowl. Sunset reflection pool photography.",
        },
        {
          day: 3,
          title: "Beyal Camp Trek & Nanga Parbat Basepoint",
          desc: "Trek to Beyal Camp and the base viewpoint. Canvas & Clouds painting session, evening live BBQ and mountain Jamming session.",
        },
        {
          day: 4,
          title: "Descent & Journey back to Besham / Naran",
          desc: "Morning sunrise over Nanga Parbat, descent back to Raikot Bridge, drive to riverside hotel for overnight stay.",
        },
        {
          day: 5,
          title: "Return Journey to Islamabad & Lahore",
          desc: "Scenic drive through Hazara motorway with tea stops, arriving in Islamabad and Lahore by late evening.",
        },
      ],
      inclusions: [
        "Luxury AC Saloon Coaster / Grand Cabin transport",
        "4x4 Mountain Jeeps from Raikot Bridge to Tattu",
        "Hotel & Wooden Cabin accommodations on sharing basis",
        "Quality Breakfast & Dinner meals daily (including Live BBQ)",
        "Live Bonfire, BBQ night, and Sky Lanterns",
        "First Aid & Certified Professional Mountain Tour Leads",
      ],
      exclusions: [
        "Lunches and personal snacks/beverages",
        "Porters for personal luggage on trek",
        "Activities not mentioned in itinerary",
        "Emergency evacuation / medical insurance",
      ],
    },
    {
      id: "swat-3d",
      slug: "3-days-swat-kalam-malam-jabba",
      title: "3 Days — Swat Valley, Kalam & Malam Jabba Ski Tour",
      subtitle: "Malam Jabba ski chairlift & zipline, Kalam pine valley, Ushu Forest, and Mahodand Lake.",
      duration: "3 Days / 2 Nights",
      days: 3,
      nights: 2,
      destination: "Swat, Kalam & Malam Jabba",
      category: "weekend",
      badge: "SWITZERLAND OF EAST",
      featured: true,
      price: 16500,
      sharingPrices: {
        quad: 16500,
        triple: 18500,
        twin: 21500,
        privateCouple: 24000,
      },
      rating: 5.0,
      reviewsCount: 8,
      image: "/images/real_swat_malamjabba.jpg",
      gallery: [
        "/images/real_swat_malamjabba.jpg",
        "/images/real_swat_kalam.jpg",
        "/images/real_kumrat_forest.jpg",
      ],
      departureCities: [
        "Multan",
        "Sahiwal",
        "Faisalabad",
        "Lahore",
        "Gujranwala",
        "Rawalpindi/Islamabad",
      ],
      departureSchedule: "Every Thursday Night & Friday Night (3 Days)",
      upcomingDates: [
        "Every Thursday Night (Weekend Express)",
        "Every Friday Night (Weekend Batch)",
      ],
      tags: [
        "Malam Jabba Ski",
        "Kalam Valley",
        "Mahodand Lake",
        "Ushu Pine Forest",
        "Zipline & Chairlift",
        "Live BBQ",
      ],
      highlights: [
        "Malam Jabba 5-star ski resort: Chairlift, extreme zipline, snow hiking & alpine vistas",
        "Kalam Valley lush evergreen pine wilderness, Ushu Forest, and Matiltan Valley",
        "Off-road 4x4 jeep safari to the crystal turquoise waters of Mahodand Lake",
        "Scenic exploration of Paloga Valley and roaring riverside waterfalls",
        "Riverside relaxation along the crystal Swat River & Shamozai",
        "Evening musical campfire bonfire, live chicken BBQ feast, and deluxe hotel stays",
      ],
      overview:
        "Escape to the enchanting Switzerland of the East! Experience the thrilling ski resort of Malam Jabba, the alpine beauty of Kalam, and the pristine glacial waters of Mahodand Lake in a revitalizing 3-day getaway.",
      itinerary: [
        {
          day: 1,
          title: "Drive via Swat Motorway to Malam Jabba Ski Resort",
          desc: "Early morning breakfast in Mingora Swat. Travel up to Malam Jabba Ski Resort. Enjoy chairlift rides, zipline thrills, and mountain hiking. Drive to hotel for dinner and overnight stay.",
        },
        {
          day: 2,
          title: "Kalam Valley, Ushu Forest, Paloga & Mahodand Lake",
          desc: "Breakfast, transfer to coaster / 4x4 jeeps. Travel through scenic Kalam, dense Ushu Forest, Paloga Valley, Matiltan, and glacial Mahodand Lake. Return to hotel for grand BBQ dinner, bonfire, and overnight stay.",
        },
        {
          day: 3,
          title: "Swat River, Shamozai & Smooth Return Journey",
          desc: "Breakfast at 7:00 AM, check-out from hotel. Visit Swat River and Shamozai. Departure back via Swat Motorway / CPEC, arriving in Islamabad and Lahore by late evening.",
        },
      ],
      inclusions: [
        "Private Luxury Air Conditioned / Heated Coaster / High Roof / Daewoo",
        "2 Nights quality hotel stay (Separate room for couples, 4-5 sharing standard)",
        "Quality meals: 3 Breakfasts & 2 Dinners (including Live BBQ & Bonfire)",
        "All tolls, road taxes & basic first aid kit",
      ],
      exclusions: [
        "Mahodand Lake 4x4 Jeep charges",
        "Chairlift, Zipline & activity tickets",
        "Lunches, extras at hotels & personal expenses",
      ],
    },
    {
      id: "naran-3d",
      slug: "3-days-naran-kaghan-shogran-siri-paye",
      title: "3 Days — Naran, Kaghan, Shogran & Siri Paye Meadows",
      subtitle: "Siri Paye rolling alpine meadows, Lake Saif-ul-Malook, Kunhar River rafting, Babusar Top & Lulusar Lake.",
      duration: "3 Days / 2 Nights",
      days: 3,
      nights: 2,
      destination: "Naran, Kaghan & Shogran",
      category: "weekend",
      badge: "ALPINE PARADISE",
      featured: true,
      price: 16000,
      sharingPrices: {
        quad: 16000,
        triple: 18000,
        twin: 21000,
        privateCouple: 23500,
      },
      rating: 5.0,
      reviewsCount: 8,
      image: "/images/real_naran_saifulmalook.jpg",
      gallery: [
        "/images/real_naran_saifulmalook.jpg",
        "/images/real_naran_shogran.jpg",
        "/images/real_babusar.jpg",
      ],
      departureCities: [
        "Multan",
        "Sahiwal",
        "Faisalabad",
        "Lahore",
        "Gujranwala",
        "Rawalpindi/Islamabad",
      ],
      departureSchedule: "Every Thursday Night & Friday Night (3 Days)",
      upcomingDates: [
        "Every Thursday Night (Weekend Express)",
        "Every Friday Night (Weekend Batch)",
      ],
      tags: [
        "Lake Saif-ul-Malook",
        "Shogran Plateau",
        "Siri Paye Meadows",
        "Babusar Top (13,700ft)",
        "Kunhar Rafting",
        "Lulusar Lake",
      ],
      highlights: [
        "4x4 Jeep safari up to the scenic Shogran plateau, Siri Lake & lush rolling Siri Paye meadows",
        "Exhilarating river rafting adventures on the gushing glacial rapids of Kunhar River",
        "Scenic drive to Batakundi waterfall, Burawai, and panoramic Babusar Top (13,700ft)",
        "Crystal turquoise waters of Lulusar Lake nestled in the high-altitude pass",
        "Legendary Lake Saif-ul-Malook safari surrounded by Malika Parbat reflections",
        "Riverside live chicken BBQ, bonfire acoustic jamming, and comfortable mountain hotel stays",
      ],
      overview:
        "Discover the magical landscapes of Kaghan Valley! From the fairytale meadows of Siri Paye to the high-altitude pass of Babusar Top and the turquoise majesty of Lake Saif-ul-Malook, this 3-day escape is packed with nature's wonders.",
      itinerary: [
        {
          day: 1,
          title: "Kawai Waterfall, 4x4 Jeep to Shogran & Siri Paye Meadows",
          desc: "Breakfast in Kawai at 8:00 AM. Transfer to 4x4 jeeps for Shogran, Siri Lake, and the vast rolling Siri Paye Meadows. Return to hotel in Naran / Kaghan for dinner, bonfire, and overnight stay.",
        },
        {
          day: 2,
          title: "Kunhar Rafting, Batakundi, Lulusar Lake & Babusar Top",
          desc: "Breakfast, transfer to coaster. Experience Kunhar River rafting, visit Batakundi Waterfall, Burawai, Moon Restaurant, and drive up to Lulusar Lake and Babusar Top (13,700ft). Return to hotel for dinner and overnight stay.",
        },
        {
          day: 3,
          title: "Lake Saif-ul-Malook Safari & Return Drive",
          desc: "Early morning 4x4 jeep visit to legendary Lake Saif-ul-Malook. Breakfast, check-out and smooth return journey via Hazara Motorway / CPEC, arriving in Islamabad and Lahore by late night.",
        },
      ],
      inclusions: [
        "Private Luxury Air Conditioned / Heated Coaster / High Roof / Daewoo",
        "2 Nights hotel stay (Separate couple rooms available, 4-5 sharing standard)",
        "Quality meals: 3 Breakfasts & 2 Dinners + BBQ & Bonfire",
        "All tolls, road taxes, driver expenses & first aid kit",
      ],
      exclusions: [
        "Jeep charges for Shogran / Siri Paye & Lake Saif-ul-Malook",
        "Kunhar River rafting tickets & chairlift charges",
        "Lunches, laundry, drinks & personal insurance",
      ],
    },
    {
      id: "kashmir-3d",
      slug: "3-days-azad-kashmir-neelum-valley-arang-kel",
      title: "3 Days — Azad Kashmir & Neelum Valley (Arang Kel & Sharda)",
      subtitle: "Dhani Waterfall, Kutton, Keran, Sharda Peeth, cable car lift & hike to dreamy Arang Kel.",
      duration: "3 Days / 2 Nights",
      days: 3,
      nights: 2,
      destination: "Azad Kashmir & Neelum Valley",
      category: "weekend",
      badge: "HEAVEN ON EARTH",
      featured: true,
      price: 15500,
      sharingPrices: {
        quad: 15500,
        triple: 17500,
        twin: 20500,
        privateCouple: 23000,
      },
      rating: 5.0,
      reviewsCount: 8,
      image: "/images/real_kashmir_neelum.jpg",
      gallery: [
        "/images/real_kashmir_neelum.jpg",
        "/images/real_kumrat_forest.jpg",
        "/images/real_naran_shogran.jpg",
      ],
      departureCities: [
        "Multan",
        "Sahiwal",
        "Faisalabad",
        "Lahore",
        "Gujranwala",
        "Rawalpindi/Islamabad",
      ],
      departureSchedule: "Every Thursday Night & Friday Night (3 Days)",
      upcomingDates: [
        "Every Thursday Night (Weekend Batch)",
        "Every Friday Night (Weekend Express)",
      ],
      tags: [
        "Neelum Valley",
        "Arang Kel",
        "Sharda Peeth",
        "Dhani Waterfall",
        "Kutton Waterfall",
        "Keran LoC",
        "Cable Car",
      ],
      highlights: [
        "Scenic mountain drive through Muzaffarabad, Dhani Waterfall, and Neelum Jhelum Dam",
        "Sightseeing at LoC Indo-Pak Chilhana Point & roaring Kutton / Kundal Shahi Waterfalls",
        "Keran riverside border views overlooking Indian-administered Kashmir across Neelum River",
        "Kel cable car chairlift and scenic 30-minute hike to the fairytale emerald pastures of Arang Kel",
        "Visit centuries-old historic Sharda Peeth temple ruins and lush Upper Neelum Valley Park",
        "Riverside hotel stays with evening campfire, live BBQ, and fresh local Kashmiri cuisine",
      ],
      overview:
        "Experience the lush green paradise of Azad Kashmir! Explore the winding Neelum River, majestic mountain waterfalls, border checkpoints, and the breathtaking alpine village of Arang Kel.",
      itinerary: [
        {
          day: 1,
          title: "Muzaffarabad, Dhani Waterfall, LoC Point & Keran / Sharda",
          desc: "Arrival at Muzaffarabad (8:30 AM), breakfast. Travel to Dhani Waterfall, sightseeing at Noseri (Neelum Jhelum) Dam, stop at LoC Indo-Pak Chilhana Point and Kutton Waterfall. Reach Keran / Sharda for dinner and hotel stay.",
        },
        {
          day: 2,
          title: "Jeep to Kel, Cable Car & Hike to Arang Kel (or Ratti Gali Lake)",
          desc: "Breakfast in hotel. 4x4 Jeep drive to Kel. Ride the scenic cable car lift followed by a 30-minute hike to the lush green bowl of Arang Kel. Enjoy photography and meadows. Return to hotel for dinner and overnight stay.",
        },
        {
          day: 3,
          title: "Upper Neelum, Upper Neelum Park & Return Journey",
          desc: "After breakfast, explore Upper Neelum and Upper Neelum Park. Begin return journey with short tea stop at Bhera / Murree Expressway, arriving back home by late night.",
        },
      ],
      inclusions: [
        "Private Luxury Air Conditioned / Heated Coaster / High Roof",
        "2 Nights hotel stay on 4/5 person sharing (Separate couple rooms available)",
        "Quality meals: 3 Breakfasts & 2 Dinners + Live BBQ",
        "All tolls, road taxes, driver expenses & basic first aid kit",
      ],
      exclusions: [
        "Jeep charges (Kel/Sharda) & Arang Kel cable car tickets",
        "Personal clothing, horse riding & gear rent",
        "Extras at hotels (drinks, laundry, phone calls) & medical aid",
      ],
    },
    {
      id: "kumrat-katora-4d",
      slug: "4-days-kumrat-valley-katora-lake-trek",
      title: "4 Days — Kumrat Valley & Katora Lake Trekking Expedition",
      subtitle: "Jahaz Banda alpine meadows, Kumrat waterfall, deodar pine jungle, and the glacial Katora Lake.",
      duration: "4 Days / 3 Nights",
      days: 4,
      nights: 3,
      destination: "Kumrat Valley, Jahaz Banda & Katora Lake",
      category: "trekking",
      badge: "ALPINE TREK",
      featured: true,
      price: 21500,
      sharingPrices: {
        quad: 21500,
        triple: 24000,
        twin: 27500,
        privateCouple: 31000,
      },
      rating: 5.0,
      reviewsCount: 8,
      image: "/images/real_kumrat_katora.jpg",
      gallery: [
        "/images/real_kumrat_katora.jpg",
        "/images/real_kumrat_forest.jpg",
        "/images/real_fairy_meadows.jpg",
      ],
      departureCities: [
        "Multan",
        "Sahiwal",
        "Faisalabad",
        "Lahore",
        "Gujranwala",
        "Rawalpindi/Islamabad",
      ],
      departureSchedule: "Every Wednesday Night (4 Days Trek)",
      upcomingDates: [
        "Every Wednesday Night (Weekly Fixed Departure)",
      ],
      tags: [
        "Kumrat Valley",
        "Katora Lake",
        "Jahaz Banda",
        "Alpine Trekking",
        "Panjkora River",
        "4x4 Jeeps",
        "Bonfire & BBQ",
      ],
      highlights: [
        "Scenic drive through Swat Motorway tunnels, Timergara, Thal & roaring Panjkora River",
        "4x4 Jeep ride into dense Kumrat pine forests and roaring Kumrat Waterfall",
        "3-4 hour scenic alpine mountain hike from Taki Top to the dreamy meadows of Jahaz Banda",
        "High-altitude glacial trek to the deep cobalt bowl of Katora Lake (Bowl Lake)",
        "Starlit meadow stays in rustic chalets / camps with bonfire, live BBQ, and guitar jamming",
        "Certified mountain trek leader, first aid support, and complete 4x4 jeep logistics",
      ],
      overview:
        "An unforgettable 4-day trekking expedition into the untouched wilderness of Upper Dir. Hike through wildflower meadows, camp under celestial skies at Jahaz Banda, and reach the pristine glacial waters of Katora Lake.",
      itinerary: [
        {
          day: 1,
          title: "Departure to Thal, 4x4 Jeep Safari & Kumrat Waterfall",
          desc: "Night departure from Lahore & Islamabad. Breakfast at Chakdara / Rabat, proceed to Thal. Transfer to 4x4 jeeps into Kumrat Valley, explore Kumrat Waterfall and Panjkora River. Dinner and overnight stay in Kumrat.",
        },
        {
          day: 2,
          title: "4x4 Jeeps to Taki Top & Alpine Hike to Jahaz Banda",
          desc: "Breakfast in Kumrat, shift into 4x4 jeeps towards Jahaz Banda base. Start 3-4 hour scenic mountain hike from Taki Top. Arrive in Jahaz Banda meadows. Dinner and overnight stay in Jahaz Banda.",
        },
        {
          day: 3,
          title: "Alpine Trek to Katora Glacial Lake & Campfire BBQ",
          desc: "Breakfast in Jahaz Banda, start the rewarding trek towards majestic Katora Lake. Marvel at glacial reflections and snow peaks. Return to Jahaz Banda for an evening grand bonfire, live BBQ, and overnight stay.",
        },
        {
          day: 4,
          title: "Hike down to Taki Top & Smooth Return Drive",
          desc: "Early morning wakeup call, hike down to Taki Top, shift into 4x4 jeeps to Thal. Breakfast in Thal, board luxury coaster and drive back via Swat Motorway, arriving in Islamabad and Lahore by late evening.",
        },
      ],
      inclusions: [
        "Saloon Coaster / Grand Cabin transport throughout the tour",
        "4x4 Mountain Jeeps (Thal to Kumrat & Taki Top)",
        "3 Nights accommodation (Kumrat hotel + Jahaz Banda meadow chalets/camps)",
        "4 Breakfasts + 3 Dinners (including Live BBQ)",
        "Bonfire, Certified Trek Lead & Guide, All Tolls & Taxes",
      ],
      exclusions: [
        "Activity tickets & personal porter charges for luggage (max 15-20kg luggage allowed)",
        "Lunches, mid-day snacks & cold beverages",
        "Medical insurance, emergency evacuation & personal expenses",
      ],
    },
    {
      id: "kumrat-dojanga-3d",
      slug: "3-days-kumrat-valley-dojanga-kala-chashma",
      title: "3 Days — Kumrat Valley, Dojanga & Kala Chashma Retreat",
      subtitle: "Dense deodar pine forests, roaring Panjkora river, Dojanga confluence point & Kala Chashma.",
      duration: "3 Days / 2 Nights",
      days: 3,
      nights: 2,
      destination: "Kumrat Valley, Upper Dir",
      category: "weekend",
      badge: "FOREST RETREAT",
      featured: true,
      price: 17000,
      sharingPrices: {
        quad: 17000,
        triple: 19000,
        twin: 22000,
        privateCouple: 25000,
      },
      rating: 5.0,
      reviewsCount: 8,
      image: "/images/real_kumrat_forest.jpg",
      gallery: [
        "/images/real_kumrat_forest.jpg",
        "/images/real_kumrat_katora.jpg",
        "/images/real_swat_kalam.jpg",
      ],
      departureCities: [
        "Multan",
        "Sahiwal",
        "Faisalabad",
        "Lahore",
        "Gujranwala",
        "Rawalpindi/Islamabad",
      ],
      departureSchedule: "Every Thursday Night (3 Days Forest Retreat)",
      upcomingDates: [
        "Every Thursday Night (Weekly Fixed Departure)",
      ],
      tags: [
        "Kumrat Valley",
        "Dojanga",
        "Kala Chashma",
        "Kumrat Pine Forest",
        "Panjkora River",
        "4x4 Jeep Safari",
        "Bonfire",
      ],
      highlights: [
        "Scenic highway drive through Swat Motorway tunnels and Timergara to historic Thal",
        "4x4 Jeep safari through the legendary towering deodar pine forests of Kumrat",
        "Visit Dojanga (scenic mountain river confluence point) and Kala Chashma (Black Spring)",
        "Roaring Kumrat Waterfall exploration and crystal Panjkora riverside walks",
        "Riverside lodge / camp stay alongside the fresh rushing waters of Panjkora River",
        "Campfire bonfire, live chicken BBQ feast, and starry night mountain ambiance",
      ],
      overview:
        "Immerse yourself in the tranquility of dense deodar jungles! Kumrat Valley offers fresh pine air, rushing glacial waters, rustic wooden bridges, and serene starry campfire nights.",
      itinerary: [
        {
          day: 1,
          title: "Drive to Thal, 4x4 Jeep Safari into Kumrat Valley",
          desc: "Night departure from Lahore (Thokar Niaz Baig) and Islamabad (26 Number). Breakfast at Rabat / Chakdara, travel to Thal. Transfer to 4x4 jeeps into Kumrat Valley, check-in, visit Kumrat Forest. Dinner & overnight in Kumrat.",
        },
        {
          day: 2,
          title: "Full Day 4x4 Safari: Dojanga, Kala Chashma & Waterfall",
          desc: "Breakfast in Kumrat, full day 4x4 exploration of Dojanga confluence, Kala Chashma (Black Spring), and roaring Kumrat Waterfall. Evening campfire bonfire, live BBQ, and overnight stay in Kumrat.",
        },
        {
          day: 3,
          title: "Early Morning Breakfast & Smooth Return Journey",
          desc: "Early morning breakfast, transfer to jeeps back to Thal. Board luxury saloon coaster, scenic return drive via Swat Motorway, arriving in Islamabad and Lahore by late night.",
        },
      ],
      inclusions: [
        "Saloon Coaster / Grand Cabin transport",
        "4x4 Mountain Jeeps in Kumrat Valley",
        "2 Nights hotel/lodge stay in Kumrat",
        "3 Breakfasts + 2 Dinners (including Live BBQ)",
        "Bonfire, Tour Captain & Guide, All Tolls & Taxes",
      ],
      exclusions: [
        "Activity tickets & personal expenses",
        "Lunches, beverages & laundry",
        "Medical insurance & emergency evacuation",
      ],
    },
  ],
  testimonials: [
    {
      name: "Sara Khan",
      role: "Solo Traveler (Lahore)",
      trip: "8 Days Skardu, Shangrila & Hunza Cocktail",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
      content: "I joined the 8-day Cocktail expedition and had the experience of a lifetime. The Paradise Trips team treated every guest with royal care. The mountain chalets, campfire acoustic jamming, and strict security protocols were exceptional!",
    },
    {
      name: "Barrister Ali Raza & Squad",
      role: "Corporate Retreat (Islamabad)",
      trip: "5 Days Hunza & Passu Cones",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
      content: "The RoadRang vibes, the Naltar 4x4 safari, and the sky lantern ceremony in Hunza were truly magical. Outstanding management, executive transport, and top-tier photography!",
    },
    {
      name: "Dr. Ayesha & Tariq Malik",
      role: "Luxury Couple Escape (Karachi)",
      trip: "5 Days Fairy Meadows & Nanga Parbat",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80",
      content: "Our trip to Fairy Meadows was seamless from start to finish. Beautiful wooden chalets with direct Nanga Parbat view, private couple room, zero hassle, and breathtaking sights. Paradise Trips & Tours is Pakistan's finest travel company!",
    },
    {
      name: "Hamza Bilal & Family",
      role: "Family Vacation (Faisalabad)",
      trip: "3 Days Naran, Shogran & Saif-ul-Malook",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80",
      content: "Traveled with my elderly parents and kids to Shogran and Naran. The hospitality, comfortable seating in the Grand Cabin, and top-tier hotel selections made it totally stress-free. 10/10 recommended for families!",
    },
    {
      name: "Zainab Usman",
      role: "Adventure Squad (Lahore)",
      trip: "4 Days Kumrat Valley & Katora Lake Trek",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&auto=format&fit=crop&q=80",
      content: "The trek to Katora Lake with Paradise Trips captains was exhilarating and well guided. Evening live BBQ and acoustic jamming by the river was unforgettable!",
    },
    {
      name: "Mohammad Omer",
      role: "Group Traveler (Rawalpindi)",
      trip: "3 Days Swat, Kalam & Malam Jabba",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&auto=format&fit=crop&q=80",
      content: "Superb organization and punctual execution. The tour captains made everyone feel like family. Malam Jabba zipline and the evening bonfire in Kalam were highlights of the year!",
    },
  ],
  faqs: [
    {
      q: "Are your group expeditions safe for solo female travelers and families?",
      a: "Absolutely! Over 40% of our travelers are solo female wanderers. We provide dedicated female tour captains, verified family-safe boutique hotels, and separate gender-segregated room sharing options.",
    },
    {
      q: "Where do your tours depart from?",
      a: "Our regular group road trips depart from Multan, Sahiwal, Faisalabad, Lahore, Gujranwala, and Rawalpindi/Islamabad. We also assist travelers from Karachi and other cities with customized connecting travel arrangements.",
    },
    {
      q: "What is included in the tour packages?",
      a: "All packages include executive transport (AC Saloon Coaster / Grand Cabin / 4x4 Mountain Jeeps), quality hotel accommodations, daily breakfast and dinner, bonfires, live BBQ nights, professional tour leads, photography, and road tolls.",
    },
    {
      q: "How can I book a custom private trip with my friends/family?",
      a: "You can use our interactive 'Craft Your Tour' page or message us directly on WhatsApp (+92 323 7266292). We design custom itineraries according to your dates, group size, vehicle preference (Prado, Hiace, Coaster), and hotel tier.",
    },
    {
      q: "What is the booking and payment process?",
      a: "You can reserve your seat with a 50% advance deposit via Bank Transfer, JazzCash, Nayapay, or SadaPay. The remaining 50% is payable on the departure day prior to boarding.",
    },
  ],
  galleryMoments: [
    { title: "Nanga Parbat & Fairy Meadows Reflection", location: "Fairy Meadows", image: "/images/real_fairy_meadows.jpg" },
    { title: "Shangrila Resort & Lower Kachura Lake", location: "Skardu", image: "/images/real_shangrila_skardu.jpg" },
    { title: "Passu Cathedral Cones & Hunza Valley", location: "Hunza Valley", image: "/images/real_passu_hunza.jpg" },
    { title: "Lake Saif-ul-Malook Turquoise Waters", location: "Naran Kaghan", image: "/images/real_naran_saifulmalook.jpg" },
    { title: "Arang Kel Fairytale Green Meadows", location: "Azad Kashmir", image: "/images/real_kashmir_neelum.jpg" },
    { title: "Attabad Lake Crystal Boat Cruise", location: "Hunza Valley", image: "/images/real_hunza_attabad.jpg" },
    { title: "Katora Glacial Lake & Alpine Basin", location: "Kumrat Valley", image: "/images/real_kumrat_katora.jpg" },
    { title: "Malam Jabba Ski Mountain Slopes", location: "Swat Valley", image: "/images/real_swat_malamjabba.jpg" },
  ],
};
