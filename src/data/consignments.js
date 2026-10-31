// Central database of consignments for the shipping and cargo tracking portal

export const CONSIGNMENTS = {
  'EXP-BLR-DHN-74192026': {
    id: 'EXP-BLR-DHN-74192026',
    trackingNumber: 'EXP-BLR-DHN-74192026',
    serviceType: 'Surface Express / Air Cargo',
    status: 'OUT FOR DELIVERY',
    statusBadgeColor: 'amber',
    statusMessage: 'Parcel is out for delivery today with executive Rameshwar Yadav in Dhanbad sector. Handover OTP: 4819.',
    deliverySlot: 'Today, 21st October 2026 (by 08:00 PM)',
    deliverySlotHighlight: '21st October 2026 (by 8:00 PM)',
    arrivalStatusText: 'Arriving TODAY',
    progressPercentage: 85,
    grossWeight: '2.25 KG',
    volumetricWeight: '2.30 KG',
    weightDescription: '2.25 KG (Surface Box)',
    dispatchedDate: '14 Oct 2026',
    dispatchedDateTime: '14th October 2026 • 05:20 PM',
    expectedDelivery: '21st October 2026',
    expectedDeliverySubtitle: 'Guaranteed Today',
    handlingTier: 'Priority Handover',
    handlingSubtext: 'OTP Authenticated',
    otp: '4819',

    origin: {
      name: 'Bangalore Fulfillment Center (Origin)',
      facility: 'Bangalore Hub',
      detail: 'Whitefield Linehaul Depot',
      fullAddress: 'SwiftTrack Bangalore Fulfillment Center, Whitefield Linehaul Logistics Park, Bangalore, Karnataka - 560066',
      city: 'Bangalore',
      state: 'Karnataka',
    },

    destination: {
      name: 'Dhanbad, Jharkhand - 828301 (Destination)',
      facility: 'Dhanbad Hub (828301)',
      detail: 'Parasia Distribution Hub',
      pin: '828301',
      location: 'Parasia / Dhanbad',
      fullAddress: 'C/O Parshu Ram Singh, Near TATA Community Center, Shastri Nagar, Punjabidhora, Parasia, Dhanbad, Jharkhand - 828301',
    },

    recipient: {
      name: 'Tarkeshwar Kumar',
      careOf: 'C/O Parshu Ram Singh',
      landmark: 'Near TATA Community Center, Shastri Nagar',
      area: 'Punjabidhora, Parasia, Dhanbad',
      stateWithPin: 'Jharkhand — 828301',
      pin: '828301',
    },

    executive: {
      name: 'Rameshwar Yadav',
      initials: 'RY',
      designation: 'Certified Delivery Associate • Dhanbad City Hub',
      rating: '4.94',
      totalDeliveries: '1,850+ deliveries',
      vehicleNumber: 'JH 10 CA 4921 (Van)',
      active: true,
    },

    support: {
      hubName: 'Parasia Distribution Center',
      hubAddress: 'Main Logistics Park, Near Station Road, Dhanbad - 828301',
      helpline: '1800-245-8820 / 0326-2241900',
    },

    milestones: [
      {
        id: 1,
        title: 'Out for Delivery • Dhanbad City Route',
        timestamp: 'Today, 21 Oct 2026 • 09:15 AM',
        description: 'Package loaded into delivery van and assigned to Delivery Associate Rameshwar Yadav. En route to destination: Near TATA Community Center, Shastri Nagar, Parasia, Dhanbad.',
        status: 'active',
        badge: 'ACTIVE NOW',
        highlight: 'Handover window: Today by 08:00 PM',
        subnote: 'Please provide OTP 4819 to driver',
      },
      {
        id: 2,
        title: 'Arrived at Dhanbad Local Delivery Station',
        timestamp: 'Today, 21 Oct 2026 • 06:40 AM',
        description: 'Package (2.25 KG) received, bag decoded, and sorted for Parasia / Shastri Nagar route (PIN: 828301).',
        status: 'completed',
        facility: 'Dhanbad Central Delivery Facility, Jharkhand',
      },
      {
        id: 3,
        title: 'In Transit • Reached Ranchi Transshipment Center',
        timestamp: '20 Oct 2026 • 08:30 PM',
        description: 'Interstate vehicle arrived and cleared state processing. Parcel dispatched via feeder transit line towards Dhanbad.',
        status: 'completed',
      },
      {
        id: 4,
        title: 'Transit Checkpoint • Central Cargo Corridor',
        timestamp: '18 Oct 2026 • 11:20 AM',
        description: 'Consignment in transit across express highway network with security seal intact.',
        status: 'completed',
      },
      {
        id: 5,
        title: 'Dispatched & Left Bangalore Location',
        timestamp: '14 Oct 2026 • 05:20 PM',
        description: 'Consignment of 2.25 KG departed Bangalore Central Hub en route to destination state Jharkhand.',
        status: 'completed',
        facility: 'Bangalore Central Fulfillment Center, Karnataka',
      },
      {
        id: 6,
        title: 'Consignment Booked & Sealed (2.25 KG)',
        timestamp: '14 Oct 2026 • 11:30 AM',
        description: 'Package verified and manifested to recipient Tarkeshwar Kumar, Dhanbad.',
        status: 'completed',
      },
      {
        id: 7,
        title: 'Delivered (Doorstep Handover)',
        timestamp: 'Expected Today',
        description: 'Handover to Tarkeshwar Kumar upon verification of OTP 4819.',
        status: 'upcoming',
      },
    ],
  },

  'SNS-HYD-DEL-892026': {
    id: 'SNS-HYD-DEL-892026',
    trackingNumber: 'SNS-HYD-DEL-892026',
    serviceType: 'Priority Commercial Freight',
    status: 'IN TRANSIT',
    statusBadgeColor: 'blue',
    statusMessage: 'Consignment is in interstate express transit on National Highway Corridor toward Delhi Sorting Center.',
    deliverySlot: 'Tomorrow, 22nd October 2026 (by 02:00 PM)',
    deliverySlotHighlight: '22nd October 2026 (by 2:00 PM)',
    arrivalStatusText: 'Arriving Tomorrow',
    progressPercentage: 65,
    grossWeight: '18.50 KG',
    volumetricWeight: '20.00 KG',
    weightDescription: '18.50 KG (Reinforced Cargo Crate)',
    dispatchedDate: '19 Oct 2026',
    dispatchedDateTime: '19th October 2026 • 08:00 AM',
    expectedDelivery: '22nd October 2026',
    expectedDeliverySubtitle: 'On Schedule',
    handlingTier: 'Commercial Logistics',
    handlingSubtext: 'Signature Required',
    otp: '6294',

    origin: {
      name: 'Hyderabad Central Logistics Park (Origin)',
      facility: 'Hyderabad Air Freight Hub',
      detail: 'Shamshabad Logistics Sector',
      fullAddress: 'SNS Logistics Hub, Airport Cargo Terminal, Hyderabad, Telangana - 500409',
      city: 'Hyderabad',
      state: 'Telangana',
    },

    destination: {
      name: 'Okhla Industrial Area, New Delhi - 110020 (Destination)',
      facility: 'Delhi South Distribution Center',
      detail: 'Okhla Phase III Facility',
      pin: '110020',
      location: 'Okhla / New Delhi',
      fullAddress: 'Plot 42, Commercial Zone, Okhla Phase III, New Delhi - 110020',
    },

    recipient: {
      name: 'Vikas Malhotra (Apex Infrastructure)',
      careOf: 'Attn: Procurement Division',
      landmark: 'Near Crown Plaza Hotel',
      area: 'Okhla Industrial Area Phase III',
      stateWithPin: 'New Delhi — 110020',
      pin: '110020',
    },

    executive: {
      name: 'Baljeet Singh',
      initials: 'BS',
      designation: 'Interstate Freight Captain • North Corridor',
      rating: '4.91',
      totalDeliveries: '2,400+ shipments',
      vehicleNumber: 'DL 01 AB 7140 (Heavy Vehicle)',
      active: true,
    },

    support: {
      hubName: 'Delhi Central Transshipment Depot',
      hubAddress: 'Bijwasan Freight Terminal, Dwarka Sector 21, New Delhi - 110061',
      helpline: '1800-245-8820 / 011-49821000',
    },

    milestones: [
      {
        id: 1,
        title: 'In Transit • Agra Express Corridor Checkpoint',
        timestamp: 'Today • 10:45 AM',
        description: 'Commercial consignment cleared highway toll & weigh station. Entering Delhi NCR inbound feeder.',
        status: 'active',
        badge: 'ACTIVE NOW',
        highlight: 'Estimated Arrival: Tomorrow 11:00 AM at Okhla Depot',
        subnote: 'Container Seal #99411 Verified',
      },
      {
        id: 2,
        title: 'Departed Nagpur Transit Terminal',
        timestamp: '20 Oct 2026 • 09:15 PM',
        description: 'Crossed Central India Hub. Cargo inspection complete with Zero Transit Delay flags.',
        status: 'completed',
      },
      {
        id: 3,
        title: 'Manifested & Dispatched from Hyderabad Hub',
        timestamp: '19 Oct 2026 • 08:00 AM',
        description: '18.50 KG consignment loaded into sealed long-haul carrier.',
        status: 'completed',
        facility: 'Shamshabad Air Cargo Logistics Park',
      },
      {
        id: 4,
        title: 'Delivered (Doorstep Handover)',
        timestamp: 'Expected Tomorrow',
        description: 'Handover to Vikas Malhotra upon OTP verification.',
        status: 'upcoming',
      },
    ],
  },

  'SNS-BLR-GNO-231026': {
    id: 'SNS-BLR-GNO-231026',
    trackingNumber: 'SNS-BLR-GNO-231026',
    serviceType: 'Surface Express',
    status: 'IN TRANSIT',
    statusBadgeColor: 'blue',
    statusMessage: 'Consignment dispatched from Bangalore and is in transit to Greater Noida.',
    deliverySlot: '30th October 2026',
    deliverySlotHighlight: '30th October 2026',
    arrivalStatusText: 'Arriving 30th October',
    progressPercentage: 35,
    grossWeight: '2.5 KG',
    volumetricWeight: '2.5 KG',
    weightDescription: '2.5 KG',
    dispatchedDate: '23 Oct 2026',
    dispatchedDateTime: '23rd October 2026',
    expectedDelivery: '30th October 2026',
    expectedDeliverySubtitle: 'On Schedule',
    handlingTier: 'Standard Delivery',
    handlingSubtext: 'Delivery to recipient address',
    otp: '6294',

    origin: {
      name: 'Bangalore (Origin)',
      facility: 'Bangalore Hub',
      detail: 'Bangalore, Karnataka',
      fullAddress: 'Bangalore, Karnataka',
      city: 'Bangalore',
      state: 'Karnataka',
    },

    destination: {
      name: 'Greater Noida, Uttar Pradesh - 201310 (Destination)',
      facility: 'Greater Noida Delivery Hub',
      detail: 'Sector PHI 2, Pocket P4',
      pin: '201310',
      location: 'Greater Noida',
      fullAddress: 'House No. A144, Pocket P4, Sector PHI 2, Greater Noida, Uttar Pradesh - 201310',
    },

    recipient: {
      name: 'Labalee Sharma',
      careOf: '',
      landmark: '',
      area: 'House No. A144, Pocket P4, Sector PHI 2, Greater Noida',
      stateWithPin: 'Uttar Pradesh — 201310',
      pin: '201310',
    },

    executive: {
      name: 'Amit Kumar',
      initials: 'AK',
      designation: 'Delivery Associate • Greater Noida Hub',
      rating: '4.82',
      totalDeliveries: '1,200+ deliveries',
      vehicleNumber: 'UP 16 (Delivery Van)',
      active: false,
    },

    support: {
      hubName: 'Greater Noida Delivery Hub',
      hubAddress: 'Greater Noida, Uttar Pradesh - 201310',
      helpline: '',
    },

    milestones: [
      {
        id: 1,
        title: 'Dispatched from Bangalore',
        timestamp: '23 Oct 2026',
        description: '2.5 KG consignment dispatched from Bangalore for delivery to Greater Noida.',
        status: 'active',
        badge: 'IN TRANSIT',
        highlight: 'Expected delivery: 30th October 2026',
        subnote: '',
      },
      {
        id: 2,
        title: 'Consignment Booked',
        timestamp: '23 Oct 2026',
        description: '2.5 KG consignment prepared for dispatch.',
        status: 'completed',
      },
      {
        id: 3,
        title: 'Delivered (Doorstep Handover)',
        timestamp: 'Expected 30th October 2026',
        description: 'Delivery to Labalee Sharma at the Greater Noida address.',
        status: 'upcoming',
      },
    ],
  },

  'SNS-MTH-021126-74FKDK24': {
    id: 'SNS-MTH-021126-74FKDK24',
    trackingNumber: 'SNS-MTH-021126-74FKDK24',
    serviceType: 'Surface Express',
    status: 'DISPATCHED',
    statusBadgeColor: 'blue',
    statusMessage: 'Consignment is in transit to Mathura, Uttar Pradesh.',
    deliverySlot: '20th November 2026',
    deliverySlotHighlight: '20th November 2026',
    arrivalStatusText: 'Arriving 20th November',
    progressPercentage: 25,
    grossWeight: '2.5 KG',
    volumetricWeight: '2.5 KG',
    weightDescription: '2.5 KG',
    dispatchedDate: '02 Nov 2026',
    dispatchedDateTime: '02nd November 2026',
    expectedDelivery: '20th November 2026',
    expectedDeliverySubtitle: 'On Schedule',
    handlingTier: 'Standard Delivery',
    handlingSubtext: 'Delivery to recipient address',
    otp: '7212',

    origin: {
      name: 'Origin Facility (Origin)',
      facility: 'Origin Hub',
      detail: 'Origin details not provided',
      fullAddress: 'Origin details not provided',
      city: '',
      state: '',
    },

    destination: {
      name: 'Mathura, Uttar Pradesh - 281206 (Destination)',
      facility: 'Mathura Delivery Hub',
      detail: 'Village Pavesara, Post Gudera, Block Raya',
      pin: '281206',
      location: 'Mathura',
      fullAddress: 'Village Pavesara, Post Gudera, Block Raya, Mathura, Uttar Pradesh - 281206',
    },

    recipient: {
      name: 'Arpit Kumar',
      careOf: '',
      landmark: '',
      area: 'Village Pavesara, Post Gudera, Block Raya',
      stateWithPin: 'Uttar Pradesh — 281206',
      pin: '281206',
    },

    executive: {
      name: 'Lucky Verma',
      initials: 'RV',
      designation: 'Delivery Associate • Mathura Hub',
      rating: '4.8',
      totalDeliveries: '1,240+',
      vehicleNumber: 'UP85 AB 2741',
      active: true,
    },

    support: {
      hubName: 'Mathura Delivery Hub',
      hubAddress: 'Mathura, Uttar Pradesh - 281206',
      helpline: '',
    },

    milestones: [
      {
        id: 1,
        title: 'Consignment Dispatched',
        timestamp: '02 Nov 2026',
        description: 'Consignment dispatched for delivery to Mathura, Uttar Pradesh.',
        status: 'active',
      },
      {
        id: 2,
        title: 'In Transit to Mathura',
        timestamp: '08 Nov 2026',
        description: 'Consignment is in transit to Mathura, Uttar Pradesh for delivery to Arpit Kumar.',
        status: 'upcoming',
        badge: 'IN TRANSIT',
        highlight: 'Expected delivery: 20th November 2026',
        subnote: '',
      },
      {
        id: 3,
        title: 'Delivered (Doorstep Handover)',
        timestamp: 'Expected 20th November 2026',
        description: 'Delivery to Arpit Kumar at the Mathura address.',
        status: 'upcoming',
      },
    ],
  },
};

// Helper function to find a consignment by ID (case-insensitive & whitespace trimmed)
export function getConsignmentById(id) {
  if (!id) return null;
  const cleanId = id.toString().trim().toUpperCase();

  // Exact or normalized lookup
  if (CONSIGNMENTS[cleanId]) {
    return CONSIGNMENTS[cleanId];
  }

  // Look for partial key match
  const foundKey = Object.keys(CONSIGNMENTS).find(
    (key) => key.toUpperCase() === cleanId || cleanId.includes(key.toUpperCase()) || key.toUpperCase().includes(cleanId)
  );

  if (foundKey) {
    return CONSIGNMENTS[foundKey];
  }

  return null;
}

export const DEMO_TRACKING_IDS = [
  { id: 'EXP-BLR-DHN-74192026', label: 'EXP-BLR-DHN-74192026', desc: 'Out for Delivery (Dhanbad, Jharkhand)' },
  { id: 'SNS-HYD-DEL-892026', label: 'SNS-HYD-DEL-892026', desc: 'In Transit (Hyderabad to New Delhi)' },
  { id: 'SNS-BLR-GNO-231026', label: 'SNS-BLR-GNO-231026', desc: 'In Transit (Bangalore to Greater Noida)' },
  { id: 'SNS-UP-MTH-021126-74FKDK24', label: 'SNS-UP-MTH-021126-74FKDK24', desc: 'In Transit (Mathura, Uttar Pradesh)' },
];
