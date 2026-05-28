import { Car, ActivityLog, DailyMetricData } from './types';

export const INITIAL_CARS: Car[] = [
  {
    id: 'car-1',
    make: 'Tesla',
    model: 'Model 3',
    year: 2022,
    price: 38400,
    mileage: 18200,
    fuelType: 'Electric',
    transmission: 'Automatic',
    bodyType: 'Sedan',
    exteriorColor: 'Pearl White Multi-Coat',
    interiorColor: 'All Black premium',
    engine: 'Dual Motor All-Wheel Drive',
    drivetrain: 'AWD',
    features: ['Autopilot', 'Panoramic Glass Roof', 'Heated Seats (Front & Rear)', '15-inch Touchscreen', 'Premium Audio System', 'Wireless Charging', 'Sentry Mode'],
    description: 'Immaculate single-owner Tesla Model 3 Long Range. Features dual motor AWD, outstanding battery health (96% capacity), and full premium interior. Garaged daily, charging mostly done at home. Autopilot is included, and physical tires are in excellent condition.',
    imageUrl: 'https://picsum.photos/seed/tesla3/800/600',
    condition: 'Excellent',
    history: {
      owners: 1,
      accidents: 0,
      serviceHistory: 'Full digital service logs via Tesla. Excellent health checklist.'
    },
    seller: {
      name: 'Eleanor Vance',
      phone: '(415) 555-0182',
      email: 'eleanor.v@ev-owners.com',
      rating: 4.9,
      location: 'San Francisco, CA'
    }
  },
  {
    id: 'car-2',
    make: 'Ford',
    model: 'F-150 Lightning',
    year: 2023,
    price: 64900,
    mileage: 8400,
    fuelType: 'Electric',
    transmission: 'Automatic',
    bodyType: 'Truck',
    exteriorColor: 'Antimatter Blue Metallic',
    interiorColor: 'Medium Dark Slate',
    engine: 'Dual Motor Extended Range Battery',
    drivetrain: '4WD',
    features: ['Pro Power Onboard (9.6kW)', 'Ford Co-Pilot360', 'Sync 4A with 15.5-inch Screen', 'Phone As A Key', 'Tow Package', 'Mega Power Frunk'],
    description: 'Nearly brand new Ford F-150 Lightning Lariat. Features the highly sought-after Extended Range battery yielding up to 515 kilometers. Impeccable condition, zero scratches. Includes 9.6kW Pro Power Onboard generator, perfect for worksites or backup home power.',
    imageUrl: 'https://picsum.photos/seed/fordf150/800/600',
    condition: 'Excellent',
    history: {
      owners: 1,
      accidents: 0,
      serviceHistory: 'First annual inspection completed at Ford Dealership. Software updated.'
    },
    seller: {
      name: 'Marcus Miller',
      phone: '(512) 555-0144',
      email: 'marcus.m@lightning-pro.com',
      rating: 4.8,
      location: 'Austin, TX'
    }
  },
  {
    id: 'car-3',
    make: 'Toyota',
    model: 'RAV4 Hybrid',
    year: 2021,
    price: 31200,
    mileage: 29500,
    fuelType: 'Hybrid',
    transmission: 'Automatic',
    bodyType: 'SUV',
    exteriorColor: 'Magnetic Gray Metallic',
    interiorColor: 'Black SofTex',
    engine: '2.5L 4-Cylinder CVT',
    drivetrain: 'AWD',
    features: ['Toyota Safety Sense 2.0', 'Apple CarPlay & Android Auto', 'Power Moonroof', 'All-Weather Floor Mats', 'Blind Spot Monitor', 'Heated Front Seats'],
    description: 'Exceptionally maintained Toyota RAV4 XLE Premium Hybrid. Consistently achieves over 40 MPG combined. Single owner car, regularly serviced at local Toyota dealer. Excellent family commuter with AWD stability and robust luggage capacity.',
    imageUrl: 'https://picsum.photos/seed/toyotarav4/800/600',
    condition: 'Very Good',
    history: {
      owners: 1,
      accidents: 0,
      serviceHistory: 'Full service history (every 8,000 km) documented at Toyota of Seattle.'
    },
    seller: {
      name: 'Sarah Jenkins',
      phone: '(206) 555-0155',
      email: 'sjenkins@toyotafans.org',
      rating: 4.7,
      location: 'Seattle, WA'
    }
  },
  {
    id: 'car-4',
    make: 'Porsche',
    model: '911 Carrera',
    year: 2020,
    price: 108500,
    mileage: 14200,
    fuelType: 'Gasoline',
    transmission: 'Automatic',
    bodyType: 'Coupe',
    exteriorColor: 'Guards Red',
    interiorColor: 'Black Leather with Satin Accents',
    engine: '3.0L Twin-Turbo H6',
    drivetrain: 'RWD',
    features: ['PDK 8-speed Transmission', 'Sport Chrono Package', '20/21-inch Carrera S Wheels', 'Bose Surround Sound', 'PASM Sport Suspension', 'LED Headlights with PDLS+'],
    description: 'Stunning Guards Red 911 (Type 992) Carrera Coupe. Highly optioned with PDK dual clutch transmission, Sport Chrono package, and active suspension. Flawless ceramic coating, garage kept under satin cover, driven only in dry summer environments.',
    imageUrl: 'https://picsum.photos/seed/porsche911/800/600',
    condition: 'Excellent',
    history: {
      owners: 2,
      accidents: 0,
      serviceHistory: 'Serviced strictly at certified Porsche Centers. Brake fluid and spark plugs serviced early.'
    },
    seller: {
      name: 'Richard Foster',
      phone: '(310) 555-0199',
      email: 'rfoster@carreracollectors.com',
      rating: 5.0,
      location: 'Los Angeles, CA'
    }
  },
  {
    id: 'car-5',
    make: 'Chevrolet',
    model: 'Suburban',
    year: 2019,
    price: 42000,
    mileage: 68000,
    fuelType: 'Gasoline',
    transmission: 'Automatic',
    bodyType: 'SUV',
    exteriorColor: 'Satin Steel Gray',
    interiorColor: 'Cocoa/Dune Leather',
    engine: '5.3L V8 FlexFuel',
    drivetrain: '4WD',
    features: ['9 Passenger Seating', 'Rear Seat Entertainment System', 'Bose Audio System', 'Remote Start', 'Max Trailering Package', 'Lane Keep Assist'],
    description: 'Perfect family transport vehicle with unmatched space and towing prowess. Chevrolet Suburban LT 4WD loaded with entertainment screens, leather seating, and Max Trailering equipment. Excellent mechanical shape. Minor highway pebble chips on hood.',
    imageUrl: 'https://picsum.photos/seed/chevysuburban/800/600',
    condition: 'Good',
    history: {
      owners: 2,
      accidents: 1,
      serviceHistory: 'Minor bumper replacement due to parking lot tap (fully documented). Engine flawless.'
    },
    seller: {
      name: 'David Larsson',
      phone: '(612) 555-0131',
      email: 'dlarsson.family@chevymail.com',
      rating: 4.5,
      location: 'Minneapolis, MN'
    }
  },
  {
    id: 'car-6',
    make: 'Honda',
    model: 'Civic',
    year: 2018,
    price: 18500,
    mileage: 52100,
    fuelType: 'Gasoline',
    transmission: 'Manual',
    bodyType: 'Hatchback',
    exteriorColor: 'Sonic Gray Pearl',
    interiorColor: 'Black Cloth',
    engine: '1.5L Turbocharged 4-Cylinder',
    drivetrain: 'FWD',
    features: ['6-Speed Manual Transmission', 'Turbo Boost Gauge', '18-inch Alloy Wheels', 'Honda Sensing Suite', 'Sport Pedals', 'Apple CarPlay'],
    description: 'Fun, economical, and ultra-reliable Honda Civic Sport Touring Hatchback. Rare manual 6-speed transmission that shifts beautifully. Sonic Gray Pearl paint gets lots of compliments. Consistently driven with synthetic oil changed every 8,000 km.',
    imageUrl: 'https://picsum.photos/seed/hondacivic/800/600',
    condition: 'Very Good',
    history: {
      owners: 1,
      accidents: 0,
      serviceHistory: 'Full service log kept at Honda Dealership. New front brakes installed recently.'
    },
    seller: {
      name: 'Toby Parker',
      phone: '(303) 555-0111',
      email: 'toby.parker@civictuner.net',
      rating: 4.9,
      location: 'Denver, CO'
    }
  },
  {
    id: 'car-7',
    make: 'Hyundai',
    model: 'Ioniq 5',
    year: 2022,
    price: 44200,
    mileage: 12500,
    fuelType: 'Electric',
    transmission: 'Automatic',
    bodyType: 'SUV',
    exteriorColor: 'Cyber Gray Metallic',
    interiorColor: 'Dark Teal with Gray accents',
    engine: '77.4 kWh Battery Pack Single Motor',
    drivetrain: 'RWD',
    features: ['800V Ultra-Fast Charging', 'Relaxation Comfort Driver Seat', 'Smart Cruise Control with Lane Driving Assist', 'Head-Up Display', 'V2L (Vehicle To Load)', '12.3-inch Dual Screens'],
    description: 'Award-winning Hyundai Ioniq 5 SEL. Retails futuristic retro styling, ultra-fast 800V charging (from 10% to 80% in 18 minutes), and superb highway cabin comfort. Kept immaculate, zero paint flaws, software updated regularly.',
    imageUrl: 'https://picsum.photos/seed/hyundaiioniq5/800/600',
    condition: 'Excellent',
    history: {
      owners: 1,
      accidents: 0,
      serviceHistory: 'Only battery diagnostic and wiper updates performed. Tires rotated at 12,000 km.'
    },
    seller: {
      name: 'Jane Kim',
      phone: '(619) 555-0177',
      email: 'janekim@evse-guide.com',
      rating: 4.9,
      location: 'San Diego, CA'
    }
  }
];

export const INITIAL_METRICS: DailyMetricData[] = [
  { date: 'May 20', views: 320, leads: 18, searches: 240 },
  { date: 'May 21', views: 410, leads: 22, searches: 310 },
  { date: 'May 22', views: 380, leads: 15, searches: 290 },
  { date: 'May 23', views: 490, leads: 31, searches: 380 },
  { date: 'May 24', views: 560, leads: 35, searches: 420 },
  { date: 'May 25', views: 610, leads: 42, searches: 490 },
  { date: 'May 26', views: 645, leads: 48, searches: 512 }
];

export const INITIAL_LOGS: ActivityLog[] = [
  {
    id: 'log-1',
    timestamp: '15:11:04',
    type: 'view',
    carId: 'car-1',
    carName: 'Tesla Model 3',
    message: 'User from San Francisco, CA viewed Tesla Model 3',
    userLocation: 'San Francisco, CA'
  },
  {
    id: 'log-2',
    timestamp: '15:13:22',
    type: 'search',
    carName: 'All Cars',
    message: 'Anonymous user searched for "Electric" bodyType "Sedan"',
    userLocation: 'Seattle, WA'
  },
  {
    id: 'log-3',
    timestamp: '15:15:40',
    type: 'enquiry',
    carId: 'car-4',
    carName: 'Porsche 911 Carrera',
    message: 'Lead sent to Richard Foster regarding specs of Porsche 911 Carrera',
    userLocation: 'Los Angeles, CA'
  },
  {
    id: 'log-4',
    timestamp: '15:18:12',
    type: 'view',
    carId: 'car-3',
    carName: 'Toyota RAV4 Hybrid',
    message: 'User from Denver, CO viewed Toyota RAV4 Hybrid',
    userLocation: 'Denver, CO'
  },
  {
    id: 'log-5',
    timestamp: '15:19:55',
    type: 'update',
    carId: 'car-2',
    carName: 'Ford F-150 Lightning',
    message: 'CMS Agent updated price of Ford F-150 Lightning from $65,500 to $64,900',
    userLocation: 'Austin, TX'
  }
];

export const US_LOCATIONS = [
  'San Francisco, CA',
  'Austin, TX',
  'Seattle, WA',
  'Los Angeles, CA',
  'Denver, CO',
  'Boston, MA',
  'Miami, FL',
  'Chicago, IL',
  'New York, NY',
  'Portland, OR'
];

export const RANDOM_NAMES = [
  'Liam Neeson',
  'Sophia Loren',
  'Noah Clark',
  'Olivia Vance',
  'Oliver Twist',
  'Emma Frost',
  'Lucas Kane',
  'Isabella Ross',
  'Elijah Wood',
  'Mia Wallace'
];
