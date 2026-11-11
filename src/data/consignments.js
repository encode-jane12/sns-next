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
    status: 'DELIVERY ATTEMPTED',
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
    status: 'DELIVERY ATTEMPTED',
    statusBadgeColor: 'blue',
    statusMessage: 'Delivery was reattempted twice. The next delivery attempt is scheduled for 4th November 2026.',
    deliverySlot: '4th November 2026',
    deliverySlotHighlight: '4th November 2026',
    arrivalStatusText: 'Arriving 4th November',
    progressPercentage: 65,
    grossWeight: '2.5 KG',
    volumetricWeight: '2.5 KG',
    weightDescription: '2.5 KG',
    dispatchedDate: '23 Oct 2026',
    dispatchedDateTime: '23rd October 2026',
    expectedDelivery: '4th November 2026',
    expectedDeliverySubtitle: 'Rescheduled after two delivery attempts',
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
        status: 'completed',
      },
      {
        id: 3,
        title: 'Delivery reattempted twice',
        timestamp: 'Latest update',
        description: 'Two delivery attempts have been made. The next delivery attempt is scheduled for 4th November 2026.',
        status: 'active',
        badge: 'DELIVERY ATTEMPTED',
        highlight: 'Rescheduled delivery: 4th November 2026',
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
        id: 4,
        title: 'Delivered (Doorstep Handover)',
        timestamp: 'Expected 4th November 2026',
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
    statusMessage: 'Consignment is in dispatched to Mathura, Uttar Pradesh.',
    deliverySlot: '20th November 2026',
    deliverySlotHighlight: '20th November 2026',
    arrivalStatusText: 'Arriving 20th November',
    progressPercentage: 35,
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
      name: 'Bangalore (Origin)',
      facility: 'Bangalore Hub',
      detail: 'Bangalore, Karnataka',
      fullAddress: 'Bangalore, Karnataka',
      city: 'Bangalore',
      state: 'Karnataka',
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
      initials: 'LV',
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

  'SNS-MUM-061126-LK': {
    id: 'SNS-MUM-061126-LK',
    trackingNumber: 'SNS-MUM-061126-LK',
    serviceType: 'Surface Express',
    status: 'Booked',
    statusBadgeColor: 'blue',
    statusMessage: 'Consignment is in booked for Mumbai, Maharashtra.',
    deliverySlot: '21st November 2026',
    deliverySlotHighlight: '21st November 2026',
    arrivalStatusText: 'Arriving 21st November',
    progressPercentage: 25,
    grossWeight: '2.5 KG',
    volumetricWeight: '2.5 KG',
    weightDescription: '2.5 KG',
    dispatchedDate: '09 Nov 2026',
    dispatchedDateTime: '09th November 2026',
    expectedDelivery: '21st November 2026',
    expectedDeliverySubtitle: 'On Schedule',
    handlingTier: 'Standard Delivery',
    handlingSubtext: 'Delivery to recipient address',
    otp: '6834',

    origin: {
      name: 'Bangalore (Origin)',
      facility: 'Bangalore Hub',
      detail: 'Bangalore, Karnataka',
      fullAddress: 'Bangalore, Karnataka',
      city: 'Bangalore',
      state: 'Karnataka',
    },

    destination: {
      name: 'Dahisar East, Mumbai, Maharashtra - 400068 (Destination)',
      facility: 'Mumbai Delivery Hub',
      detail: 'Sahakar Vista, Ashish Complex, Anand Nagar',
      pin: '400068',
      location: 'Dahisar East, Mumbai',
      fullAddress: 'Flat No-301, A Wing, Sahakar Vista, Ashish Complex, Anand Nagar, Dahisar East, Mumbai - 400068',
    },

    recipient: {
      name: 'Laxmikant Kolakur',
      careOf: '',
      landmark: 'Ashish Complex',
      area: 'Flat No-301, A Wing, Sahakar Vista, Anand Nagar, Dahisar East, Mumbai',
      stateWithPin: 'Maharashtra — 400068',
      pin: '400068',
    },

    executive: {
      name: 'Amit Patil',
      initials: 'AP',
      designation: 'Delivery Associate • Mumbai Delivery Hub',
      rating: '4.86',
      totalDeliveries: '1,240+ deliveries',
      vehicleNumber: 'MH 02 FG 6381 (Van)',
      active: true,
    },

    support: {
      hubName: 'Mumbai Delivery Hub',
      hubAddress: 'Dahisar East, Mumbai, Maharashtra - 400068',
      helpline: '',
    },

    milestones: [
      {
        id: 1,
        title: 'Consignment Booked',
        timestamp: '06 Nov 2026',
        description: 'Consignment booked for delivery to Laxmikant Kolakur in Mumbai.',
        status: 'completed',
      },
      {
        id: 2,
        title: 'Consignment Dispatched',
        timestamp: '09 Nov 2026',
        description: 'Consignment dispatched for delivery to Mumbai, Maharashtra.',
        status: 'active',
      },
      {
        id: 1,
        title: 'In Transit to Mumbai',
        timestamp: '10 Nov 2026',
        description: 'Consignment is in transit to Mumbai, Maharashtra for delivery to Laxmikant Kolakur.',
        status: 'upcoming',
        badge: 'IN TRANSIT',
        highlight: 'Expected delivery: 21st November 2026',
        subnote: '',
      },
      {
        id: 4,
        title: 'Delivered (Doorstep Handover)',
        timestamp: 'Expected 21st November 2026',
        description: 'Delivery to Laxmikant Kolakur at the Dahisar East address.',
        status: 'upcoming',
      },
    ],
  },

  'SNS-UP-GZB-041126-ST': {
    id: 'SNS-UP-GZB-041126-ST',
    trackingNumber: 'SNS-UP-GZB-041126-ST',
    serviceType: 'Surface Express',
    status: 'BOOKED',
    statusBadgeColor: 'blue',
    statusMessage: 'Consignment is in booked for Sahibabad, Ghaziabad, Uttar Pradesh.',
    deliverySlot: '18th November 2026',
    deliverySlotHighlight: '18th November 2026',
    arrivalStatusText: 'Arriving 18th November',
    progressPercentage: 25,
    grossWeight: '2.5 KG',
    volumetricWeight: '2.5 KG',
    weightDescription: '2.5 KG',
    dispatchedDate: '07 Nov 2026',
    dispatchedDateTime: '07th November 2026',
    expectedDelivery: '18th November 2026',
    expectedDeliverySubtitle: 'On Schedule',
    handlingTier: 'Standard Delivery',
    handlingSubtext: 'Delivery to recipient address',
    otp: '9874',

    origin: {
      name: 'Bangalore (Origin)',
      facility: 'Bangalore Hub',
      detail: 'Bangalore, Karnataka',
      fullAddress: 'Bangalore, Karnataka',
      city: 'Bangalore',
      state: 'Karnataka',
    },

    destination: {
      name: 'Sahibabad, Ghaziabad, Uttar Pradesh - 201005 (Destination)',
      facility: 'Ghaziabad Delivery Hub',
      detail: 'Shyampark Extension, Block A',
      pin: '201005',
      location: 'Sahibabad, Ghaziabad',
      fullAddress: 'C/O Adv. Rajneesh Tiwari, 138A, Block A, Shyampark Extension, Sahibabad, Ghaziabad, Uttar Pradesh - 201005',
    },

    recipient: {
      name: 'Saurabh Tiwari',
      careOf: 'C/O Adv. Rajneesh Tiwari',
      landmark: '138A, Block A, Shyampark Extension',
      area: 'Sahibabad, Ghaziabad',
      stateWithPin: 'Uttar Pradesh — 201005',
      pin: '201005',
    },

    executive: {
      name: 'Ashish Raj',
      initials: 'AR',
      designation: 'Delivery Executive',
      rating: '4.86',
      totalDeliveries: '1,240+ deliveries',
      vehicleNumber: 'Not provided',
      active: true,
    },

    support: {
      hubName: 'Ghaziabad Delivery Hub',
      hubAddress: 'Ghaziabad, Uttar Pradesh',
      helpline: 'Not provided',
    },

    milestones: [
      {
        id: 1,
        title: 'Consignment Booked',
        timestamp: '04 Nov 2026',
        description: 'Consignment booked for delivery to Saurabh Tiwari in Sahibabad, Ghaziabad.',
        status: 'completed',
      },
      {
        id: 2,
        title: 'Consignment Dispatched',
        timestamp: '07 Nov 2026',
        description: 'Consignment dispatched for delivery to Ghaziabad, Uttar Pradesh.',
        status: 'active',
      },
      {
        id: 3,
        title: 'In Transit to Ghaziabad',
        timestamp: '09 Nov 2026',
        description: 'Consignment is in transit to Sahibabad, Ghaziabad, Uttar Pradesh for delivery to Saurabh Tiwari.',
        status: 'upcoming',
        badge: 'IN TRANSIT',
        highlight: 'Expected delivery: 18th November 2026',
        subnote: '',
      },
      {
        id: 4,
        title: 'Delivered (Doorstep Handover)',
        timestamp: 'Expected 18th November 2026',
        description: 'Delivery to Saurabh Tiwari at the Sahibabad address.',
        status: 'upcoming',
      },
    ],
  },

  'SNS-TS-HYD-041126-DS': {
    id: 'SNS-TS-HYD-041126-DS',
    trackingNumber: 'SNS-TS-HYD-041126-DS',
    serviceType: 'Surface Express',
    status: 'BOOKED',
    statusBadgeColor: 'amber',
    statusMessage: 'Consignment is in transit to Hyderabad, Telangana.',
    deliverySlot: '20th November 2026',
    deliverySlotHighlight: '20th November 2026',
    arrivalStatusText: 'Arriving 20th November',
    progressPercentage: 15,
    grossWeight: '2.5 KG',
    volumetricWeight: '2.5 KG',
    weightDescription: '2.5 KG',
    dispatchedDate: '07 Nov 2026',
    dispatchedDateTime: '07th November 2026',
    expectedDelivery: '20th November 2026',
    expectedDeliverySubtitle: 'On Schedule',
    handlingTier: 'Standard Delivery',
    handlingSubtext: 'Delivery to recipient address',
    otp: '1289',

    origin: {
      name: 'Bangalore (Origin)',
      facility: 'Bangalore Hub',
      detail: 'Bangalore, Karnataka',
      fullAddress: 'Bangalore, Karnataka',
      city: 'Bangalore',
      state: 'Karnataka',
    },

    destination: {
      name: 'Yousufguda, Hyderabad, Telangana - 500045 (Destination)',
      facility: 'Hyderabad Delivery Hub',
      detail: 'Near Carlton School',
      pin: '500045',
      location: 'Yousufguda, Hyderabad',
      fullAddress: 'Flat No:201, Sai Krishna Anandanilayam Apartment, Yousufguda, Near Carlton School, Hyderabad, Telangana - 500045',
    },

    recipient: {
      name: 'Divyapati Sudhakar',
      careOf: '',
      landmark: 'Near Carlton School',
      area: 'Yousufguda, Hyderabad',
      stateWithPin: 'Telangana — 500045',
      pin: '500045',
    },

    executive: {
      name: 'Raju Kumar',
      initials: 'RK',
      designation: 'Delivery Executive',
      rating: '4.8 / 5',
      totalDeliveries: '1,240',
      vehicleNumber: 'TS 09 AB 4821',
      active: true,
    },

    support: {
      hubName: 'Hyderabad Delivery Hub',
      hubAddress: 'Hyderabad, Telangana',
      helpline: 'Not provided',
    },

    milestones: [
      {
        id: 1,
        title: 'Consignment Booked',
        timestamp: '04 Nov 2026',
        description: 'Consignment booked for delivery to Divyapati Sudhakar in Yousufguda, Hyderabad.',
        status: 'completed',
      },
      {
        id: 2,
        title: 'Consignment Dispatched',
        timestamp: '07 Nov 2026',
        description: 'Consignment dispatched for delivery to Hyderabad, Telangana.',
        status: 'active',
      },
      {
        id: 3,
        title: 'In Transit to Hyderabad',
        timestamp: '09 Nov 2026',
        description: 'Consignment is in transit to Yousufguda, Hyderabad, Telangana for delivery to Divyapati Sudhakar.',
        status: 'upcoming',
        badge: 'IN TRANSIT',
        highlight: 'Expected delivery: 20th November 2026',
        subnote: '',
      },
      {
        id: 4,
        title: 'Delivered (Doorstep Handover)',
        timestamp: 'Expected 20th November 2026',
        description: 'Delivery to Divyapati Sudhakar at the Yousufguda address.',
        status: 'upcoming',
      },
    ],
  },

  'SNS-MH-MUM-101126-LK': {
    id: 'SNS-MH-MUM-101126-LK',
    trackingNumber: 'SNS-MH-MUM-101126-LK',
    serviceType: 'Surface Express',
    status: 'BOOKED',
    statusBadgeColor: 'amber',
    statusMessage: 'Consignment is Booked for Dahisar, Mumbai, Maharashtra.',
    deliverySlot: '26th November 2026',
    deliverySlotHighlight: '26th November 2026',
    arrivalStatusText: 'Arriving 26th November',
    progressPercentage: 15,
    grossWeight: '2.5 KG',
    volumetricWeight: '2.5 KG',
    weightDescription: '2.5 KG',
    dispatchedDate: '11 Nov 2026',
    dispatchedDateTime: '11th November 2026',
    expectedDelivery: '26th November 2026',
    expectedDeliverySubtitle: 'On Schedule',
    handlingTier: 'Standard Delivery',
    handlingSubtext: 'Delivery to recipient address',
    otp: '3823',

    origin: {
      name: 'Bangalore (Origin)',
      facility: 'Bangalore Hub',
      detail: 'Bangalore, Karnataka',
      fullAddress: 'Bangalore, Karnataka',
      city: 'Bangalore',
      state: 'Karnataka',
    },

    destination: {
      name: 'Dahisar, Mumbai, Maharashtra (Destination)',
      facility: 'Mumbai Delivery Hub',
      detail: 'Anand Nagar',
      pin: 'Not provided',
      location: 'Anand Nagar, Dahisar, Mumbai',
      fullAddress: 'Sahakar Vista, Flat No 301, A Wing, Ashish Complex, Anand Nagar, Dahisar, Mumbai',
    },

    recipient: {
      name: 'Laxmikant Kolakur',
      careOf: '',
      landmark: 'Ashish Complex',
      area: 'Anand Nagar, Dahisar, Mumbai',
      stateWithPin: 'Maharashtra',
      pin: 'Not provided',
    },

    executive: {
      name: 'Amit Patil',
      initials: 'AP',
      designation: 'Delivery Executive',
      rating: '4.8 / 5',
      totalDeliveries: '1,240',
      vehicleNumber: 'MH 02 AB 4821',
      active: true,
    },

    support: {
      hubName: 'Mumbai Delivery Hub',
      hubAddress: 'Mumbai, Maharashtra',
      helpline: 'Not provided',
    },

    milestones: [
      {
        id: 1,
        title: 'Consignment Booked',
        timestamp: '10 Nov 2026',
        description: 'Consignment booked for delivery to Laxmikant Kolakur in Anand Nagar, Dahisar.',
        status: 'completed',
      },
      {
        id: 2,
        title: 'Consignment Dispatched',
        timestamp: '11 Nov 2026',
        description: 'Consignment dispatched for delivery to Dahisar, Mumbai, Maharashtra.',
        status: 'active',
      },
      {
        id: 3,
        title: 'In Transit to Dahisar',
        timestamp: '15 Nov 2026',
        description: 'Consignment is in transit to Anand Nagar, Dahisar for delivery to Laxmikant Kolakur.',
        status: 'upcoming',
        badge: 'IN TRANSIT',
        highlight: 'Expected delivery: 26th November 2026',
        subnote: '',
      },
      {
        id: 4,
        title: 'Delivered (Doorstep Handover)',
        timestamp: 'Expected 26th November 2026',
        description: 'Delivery to Laxmikant Kolakur at the Sahakar Vista address.',
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
  { id: 'SNS-MUM-061126-LK', label: 'SNS-MUM-061126-LK', desc: 'In Transit (Mumbai, Maharashtra)' },
];
