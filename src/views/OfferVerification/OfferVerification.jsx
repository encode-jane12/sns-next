"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import './OfferVerification.css';

export const offerVerificationData = [
  {
    olNo: 'SNSOL0908518',
    name: 'Shaik Ejas',
    title: 'Senior Operations Manager (Electrical)',
    doj: '9 November 2026',
    location: 'Hyderabad',
    project: 'Hyderabad Metro Phase 2 & 2B',
    status: 'Candidature Cancelled'
  },
  {
    olNo: 'SNSOL0908521',
    name: 'Vishal Bhoyar',
    title: 'Civil Manager (Execution)',
    doj: '16 November 2026',
    location: 'Ahmedabad',
    project: 'Mumbai–Ahmedabad High-Speed Rail',
    status: 'Candidature Cancelled'
  },
  {
    olNo: 'SNSOL0908519',
    name: 'Devang Mehta',
    title: 'Senior Project Manager',
    doj: '14 December 2026',
    location: 'Mumbai',
    project: 'Mumbai–Ahmedabad High-Speed Rail',
    status: 'Verification Ongoing'
  },
  {
    olNo: 'SNSOL0908520',
    name: 'Madhavan Kannan',
    title: 'Project Manager',
    doj: '12 October 2026',
    location: 'Chennai',
    project: 'Chennai Metro Rail Phase-II Project',
    status: 'Candidature Cancelled'
  },
  {
    olNo: 'SNSOL0908517',
    name: 'Mohd Tabish',
    title: 'Assistant Quality Manager',
    doj: '23 November 2026',
    location: 'Delhi',
    project: 'Delhi Metro Phase 4 (Golden Line Extension)',
    status: 'Candidature Cancelled'
  },
  {
    olNo: 'SNSOL0908523',
    name: 'Milan Patel',
    title: 'Senior Construction Manager',
    doj: '14 December 2026',
    location: 'Ahmedabad',
    project: 'Mumbai–Ahmedabad High-Speed Rail',
    status: 'Candidature Cancelled'
  },
  {
    olNo: 'SNSOL0908522',
    name: 'Kartagyakant Tyagi',
    title: 'Deputy Project Manager',
    doj: '19 October 2026',
    location: 'Delhi',
    project: 'Delhi Metro Phase 4 (Golden Line Extension)',
    status: 'Candidature Cancelled'
  },
  {
    olNo: 'SNSOL0908529',
    name: 'Vickey Pandey',
    title: 'Project Manager (Execution)',
    doj: '19 October 2026',
    location: 'Bhopal',
    project: 'Bhopal Metro (Bhoj Metro)',
    status: 'Documents Pending'
  },
  {
    olNo: 'SNSOL0908525',
    name: 'Bashayar Thayal Kappanakal',
    title: 'Senior Electrical Engineer',
    doj: '5 October 2026',
    location: 'Coimbatore',
    project: 'Coimbatore International Airport Expansion',
    status: 'Verification Ongoing'
  },
  {
    olNo: 'SNSOL0908530',
    name: 'Manish Singh',
    title: 'Construction Manager',
    doj: '16 November 2026',
    location: 'Delhi-NCR',
    project: 'Delhi Metro Phase 4 (Golden Line Extension)',
    status: 'Candidature Cancelled'
  },
  {
    olNo: 'SNSOL0908524',
    name: 'Akash Kumar Malik',
    title: 'Senior Site Engineer',
    doj: '2 November 2026',
    location: 'Bhubaneswar',
    project: 'Cuttack-Bhubaneswar Metro Rail',
    status: 'Candidature Cancelled'
  },
  {
    olNo: 'SNSOL0908528',
    name: 'Saurabh Tiwari',
    title: 'Infrastructure Expert',
    doj: '23 November 2026',
    location: 'Delhi',
    project: 'Delhi Metro Phase 4 (Golden Line Extension)',
    status: 'Verification Ongoing'
  },
  {
    olNo: 'SNSOL0908527',
    name: 'Soumyadip Barman',
    title: 'Assistant Project Manager (Mechanical)',
    doj: '23 November 2026',
    location: 'Kolkata',
    project: 'Kolkata Airport Expansion (Phase II)',
    status: 'Candidature Cancelled'
  },
  {
    olNo: 'SNSOL0908532',
    name: 'Omkar Tiwari',
    title: 'QA/QC Manager Civil',
    doj: '16 November 2026',
    location: 'Bhopal',
    project: 'Bhopal Metro (Bhoj Metro)',
    status: 'Candidature Cancelled'
  },
  {
    olNo: 'SNSOL0908531',
    name: 'Ram Lingam',
    title: 'Senior Manager QA/QC',
    doj: '16 November 2026',
    location: 'Chennai',
    project: 'Chennai Metro Rail Phase-II',
    status: 'Candidature Cancelled'
  },
  {
    olNo: 'SNSOL0908526',
    name: 'Bharatesh Khot',
    title: 'Project Manager',
    doj: '16 November 2026',
    location: 'Pune',
    project: 'Pune Metro Expansion (Phase 1 & 2)',
    status: 'Candidature Cancelled'
  },
  {
    olNo: 'SNSOL0908534',
    name: 'Soumen Middey',
    title: 'Assistant Project Manager',
    doj: '19 October 2026',
    location: 'Kolkata',
    project: 'Kolkata Airport Expansion (Phase II)',
    status: 'Candidature Cancelled'
  },
  {
    olNo: 'SNSOL0908533',
    name: 'Faizan Khan',
    title: 'Senior Billing Manager',
    doj: '26 October 2026',
    location: 'Jaipur',
    project: 'Jaipur Metro Phase-2',
    status: 'Candidature Cancelled'
  },
  {
    olNo: 'SNSOL0908535',
    name: 'Raja Mohamed',
    title: 'Project Manager',
    doj: '23 November 2026',
    location: 'Coimbatore',
    project: 'Coimbatore International Airport Expansion',
    status: 'Verification Ongoing'
  },
  {
    olNo: 'SNSOL0908536',
    name: 'Biswanath Pan',
    title: 'Construction Manager (Mechanical)',
    doj: '21 December 2026',
    location: 'Kolkata',
    project: 'Kolkata Airport Expansion (Phase II)',
    status: 'Candidature Cancelled'
  },
  {
    olNo: 'SNSOL0908537',
    name: 'Swapnil Kisku',
    title: 'Deputy Project Manager',
    doj: '16 November 2026',
    location: 'Kolkata',
    project: 'Kolkata Airport Expansion (Phase II)',
    status: 'Candidature Cancelled'
  },
  {
    olNo: 'SNSOL0908538',
    name: 'Sandip Dey',
    title: 'Planning Engineer',
    doj: '21 December 2026',
    location: 'Kolkata',
    project: 'Kolkata Airport Expansion (Phase II)',
    status: 'Documents Pending'
  },
  {
    olNo: 'SNSOL0908539',
    name: 'Sandeep Tomar',
    title: 'Project Manager',
    doj: '19 October 2026',
    location: 'Delhi',
    project: 'Delhi Metro Phase 4 (Golden Line Extension)',
    status: 'Documents Pending'
  },
  {
    olNo: 'SNSOL0908540',
    name: 'Allu Tejeswar',
    title: 'Assistant Project Manager',
    doj: '23 November 2026',
    location: 'Pune',
    project: 'Pune Metro Expansion (Phase 1 & 2)',
    status: 'Documents Pending'
  },
  {
    olNo: 'SNSOL0908541',
    name: 'Rajneesh Kumar',
    title: 'Project Manager',
    doj: '19 October 2026',
    location: 'Delhi',
    project: 'Delhi Metro Phase 4 (Golden Line Extension)',
    status: 'Documents Pending'
  },
  {
    olNo: 'SNSOL0908543',
    name: 'Kovvuru Shanmukharao',
    title: 'Assistant Manager HSE',
    doj: '2 November 2026',
    location: 'Bangalore',
    project: 'Namma Metro Expansion Phase II & IIA',
    status: 'Documents Pending'
  },
  {
    olNo: 'SNSOL0908544',
    name: 'Abhishek',
    title: 'Assistant Manager Construction',
    doj: '21 December 2026',
    location: 'Hyderabad',
    project: 'Hyderabad Metro Phase 2 & 2B',
    status: 'Documents Pending'
  },
  {
    olNo: 'SNSOL0908545',
    name: 'Shesh Nath Shahi',
    title: 'Deputy Project Manager (Quality)',
    doj: '26 October 2026',
    location: 'Lucknow',
    project: 'Lucknow Metro Phase II',
    status: 'Documents Pending'
  },
  {
    olNo: 'SNSOL0908546',
    name: 'A Murfin Arul',
    title: 'Senior QA/QC Engineer',
    doj: '26 October 2026',
    location: 'Coimbatore',
    project: 'Coimbatore International Airport Expansion',
    status: 'Documents Pending'
  },
  {
    olNo: 'SNSOL0908547',
    name: 'Himmat Singh',
    title: 'Project Manager (Electrical)',
    doj: '26 October 2026',
    location: 'Delhi',
    project: 'Delhi Metro Phase 4 (Golden Line Extension)',
    status: 'Documents Pending'
  },
  {
    olNo: 'SNSOL0908548',
    name: 'Tarkeshwar Kumar',
    title: 'Mechanical Engineer',
    doj: '26 October 2026',
    location: 'Ranchi',
    project: 'Ranchi Metro Rail',
    status: 'Verification Ongoing'
  },
  {
    olNo: 'SNSOL0908549',
    name: 'Lalit Kumar',
    title: 'Senior Manager Civil Structure',
    doj: '26 October 2026',
    location: 'Delhi',
    project: 'Delhi Metro Phase 4 (Golden Line Extension)',
    status: 'Documents Pending'
  },
  {
    olNo: 'SNSOL0908550',
    name: 'Rasmi Ranjan Parida',
    title: 'Civil Engineer',
    doj: '23 November 2026',
    location: 'Bhubaneswar',
    project: 'Cuttack-Bhubaneswar Metro Rail',
    status: 'Documents Pending'
  },
  {
    olNo: 'SNSOL0908551',
    name: 'Ravi Kant',
    title: 'Project Incharge',
    doj: '9 November 2026',
    location: 'Kolkata',
    project: 'Kolkata Airport Expansion (Phase II)',
    status: 'Documents Pending'
  },
  {
    olNo: 'SNSOL0908552',
    name: 'Mahesh Babu Davu',
    title: 'Senior Construction Manager',
    doj: '23 November 2026',
    location: 'Hyderabad',
    project: 'Hyderabad Metro Phase 2 & 2B',
    status: 'Documents Pending'
  },
  {
    olNo: 'SNSOL0908553',
    name: 'Satyapal Singh',
    title: 'Assistant Manager (Project)',
    doj: '26 October 2026',
    location: 'Delhi',
    project: 'Delhi Metro Phase 4 (Golden Line Extension)',
    status: 'Documents Pending'
  },
  {
    olNo: 'SNSOL0908554',
    name: 'Anand Kumar Singh',
    title: 'Assistant Manager (Electrical)',
    doj: '26 October 2026',
    location: 'Lucknow',
    project: 'Lucknow Metro Phase II',
    status: 'Documents Pending'
  },
  {
    olNo: 'SNSOL0908555',
    name: 'Mohammad Wahab Alam',
    title: 'Senior Project Manager',
    doj: '23 November 2026',
    location: 'Kolkata',
    project: 'Kolkata Airport Expansion (Phase II)',
    status: 'Documents Pending'
  },
  {
    olNo: 'SNSOL0908556',
    name: 'Raj Kumar Pandit',
    title: 'Senior Foreman Piping',
    doj: '19 October 2026',
    location: 'Lucknow',
    project: 'Lucknow Metro Phase II',
    status: 'Documents Pending'
  },
  {
    olNo: 'SNSOL0908557',
    name: 'Jagdish Prasad Swami',
    title: 'Team Leader (CIVIL)',
    doj: '26 October 2026',
    location: 'Gurugram',
    project: 'Multi-Modal Logistics Park (MMLP)',
    status: 'Documents Pending'
  },
  {
    olNo: 'SNSOL0908558',
    name: 'Ashwani Kumar',
    title: 'Deputy Planning Manager',
    doj: '26 October 2026',
    location: 'Delhi',
    project: 'Delhi Metro Phase 4 (Golden Line Extension)',
    status: 'Documents Pending'
  },
  {
    olNo: 'SNSOL0908559',
    name: 'Arun Kumar Ojha',
    title: 'Assistant Manager (Civil)',
    doj: '21 December 2026',
    location: 'Ahmedabad',
    project: 'Mumbai–Ahmedabad High-Speed Rail',
    status: 'Documents Pending'
  },
  {
    olNo: 'SNSOL0908560',
    name: 'Dinesh Ray',
    title: 'Project Manager (QA/QC)',
    doj: '26 October 2026',
    location: 'Lucknow',
    project: 'Lucknow Metro Phase II',
    status: 'Documents Pending'
  },
  {
    olNo: 'SNSOL0908561',
    name: 'Sanjeev Kumar',
    title: 'Senior QA/QC Manager',
    doj: '26 October 2026',
    location: 'Kolkata',
    project: 'Kolkata Airport Expansion (Phase II)',
    status: 'Documents Pending'
  },
  {
    olNo: 'SNSOL0908562',
    name: 'Pawan Kumar',
    title: 'Senior Manager Operations (Procurement & Sourcing)',
    doj: '26 October 2026',
    location: 'Ahmedabad',
    project: 'Mumbai–Ahmedabad High-Speed Rail',
    status: 'Documents Pending'
  },
  {
    olNo: 'SNSOL0908563',
    name: 'Digvijay Mishra',
    title: 'Deputy Project Manager',
    doj: '26 October 2026',
    location: 'Lucknow',
    project: 'Lucknow Metro Phase II',
    status: 'Documents Pending'
  },
  {
    olNo: 'SNSOL0908564',
    name: 'Sagar Pawar',
    title: 'Principal Structural Designer',
    doj: '26 October 2026',
    location: 'Vadodara',
    project: 'Mumbai–Ahmedabad High-Speed Rail',
    status: 'Documents Pending'
  },
  {
    olNo: 'SNSOL0908565',
    name: 'Sajjad Ali',
    title: 'BIM Coordinator (Architecture and Structure)',
    doj: '26 October 2026',
    location: 'Delhi',
    project: 'Delhi Metro Phase 4 (Golden Line Extension)',
    status: 'Documents Pending'
  },
  {
    olNo: 'SNSOL0908566',
    name: 'Chirag Patwa',
    title: 'Senior Manager Electrical',
    doj: '21 December 2026',
    location: 'Jaipur',
    project: 'Jaipur Metro Phase-2',
    status: 'Documents Pending'
  },
  {
    olNo: 'SNSOL0908567',
    name: 'Gourab Panigrahi',
    title: 'Deputy Project Manager (Procurement)',
    doj: '23 November 2026',
    location: 'Hyderabad',
    project: 'Hyderabad Metro Phase 2 & 2B',
    status: 'Documents Pending'
  },
  {
    olNo: 'SNSOL0908568',
    name: 'Shailendra Kumar Pandey',
    title: 'Senior Safety Officer',
    doj: '2 November 2026',
    location: 'Lucknow',
    project: 'Lucknow Metro Phase II',
    status: 'Documents Pending'
  },
  {
    olNo: 'SNSOL0908569',
    name: 'Arpit kumar',
    title: 'Project Incharge',
    doj: '26 October 2026',
    location: 'Lucknow',
    project: 'Lucknow Metro Phase II',
    status: 'Verification Ongoing'
  },
  {
    olNo: 'SNSOL0908570',
    name: 'Sanjay Kumar',
    title: 'Senior Project Manager',
    doj: '2 November 2026',
    location: 'Lucknow',
    project: 'Lucknow Metro Phase II',
    status: 'Verification Ongoing'
  },
  {
    olNo: 'SNSOL0908571',
    name: 'Amit Kumar Shukla',
    title: 'Project Manager',
    doj: '26 October 2026',
    location: 'Delhi',
    project: 'Delhi Elevated Ring Road (Phase 1)',
    status: 'Documents Pending'
  },
  {
    olNo: 'SNSOL0908572',
    name: 'Kanchan Mondal',
    title: 'QA/QC Manager',
    doj: '26 October 2026',
    location: 'Kolkata',
    project: 'Kolkata Airport Expansion (Phase II)',
    status: 'Documents Pending'
  },
  {
    olNo: 'SNSOL0908573',
    name: 'Vipul Kansal',
    title: 'Assistant Planning Manager',
    doj: '9 November 2026',
    location: 'Lucknow',
    project: 'Lucknow Metro Phase II',
    status: 'Documents Pending'
  },
  {
    olNo: 'SNSOL0908574',
    name: 'Biplab Biswal',
    title: 'Assistant Manager (Project)',
    doj: '2 November 2026',
    location: 'Kolkata',
    project: 'Kolkata Airport Expansion (Phase II)',
    status: 'Documents Pending'
  },
  {
    olNo: 'SNSOL0908575',
    name: 'Indrajit Bhowmick',
    title: 'Senior Site Engineer',
    doj: '2 November 2026',
    location: 'Siliguri',
    project: 'Bagdogra Airport Expansion',
    status: 'Documents Pending'
  },
  {
    olNo: 'SNSOL0908576',
    name: 'Suraj Halder',
    title: 'Mechanical Quality Inspector',
    doj: '9 November 2026',
    location: 'Pune',
    project: 'Pune Metro Phase 2 (Line 4 & Line 4A Extensions)',
    status: 'Documents Pending'
  },
  {
    olNo: 'SNSOL0908577',
    name: 'Saumil Macwan',
    title: 'Deputy Manager',
    doj: '30 November 2026',
    location: 'Ahmedabad',
    project: 'Mumbai–Ahmedabad High-Speed Rail',
    status: 'Documents Pending'
  },
  {
    olNo: 'SNSOL0908578',
    name: 'Vishnu Gawas',
    title: 'Project Head',
    doj: '21 December 2026',
    location: 'Mumbai',
    project: 'Mumbai Metro Line 12 (Kalyan–Taloja South Link)',
    status: 'Documents Pending'
  },
  {
    olNo: 'SNSOL0908579',
    name: 'Braja Bihari Giri',
    title: 'Lead Civil Engineer',
    doj: '2 November 2026',
    location: 'Delhi',
    project: 'Delhi Metro Phase 4 (Golden Line Extension)',
    status: 'Documents Pending'
  },
  {
    olNo: 'SNSOL0908580',
    name: 'Md Danish',
    title: 'Senior QA/QC Engineer',
    doj: '16 November 2026',
    location: 'Lucknow',
    project: 'Lucknow Metro Phase 2',
    status: 'Documents Pending'
  },
  {
    olNo: 'SNSOL0908581',
    name: 'Mehfuz Khan',
    title: 'Construction Manager',
    doj: '7 December 2026',
    location: 'Mumbai',
    project: 'Mumbai Metro Line 12 (Kalyan–Taloja South Link)',
    status: 'Documents Pending'
  },
  {
    olNo: 'SNSOL0908582',
    name: 'Vishnu Dev',
    title: 'Project Manager',
    doj: '26 October 2026',
    location: 'Kochi',
    project: 'Kochi Metro Phase 2 (Pink Line)',
    status: 'Documents Pending'
  },
  {
    olNo: 'SNSOL0908583',
    name: 'Himanshu Purbia',
    title: 'Assistant Manager (Mechanical)',
    doj: '2 November 2026',
    location: 'Udaipur',
    project: 'NH-48 Kherwara Elevated Corridor',
    status: 'Documents Pending'
  },
  {
    olNo: 'SNSOL0908584',
    name: 'Dewesh Vatsayan',
    title: 'Project Manager (Electrical)',
    doj: '1 December 2026',
    location: 'Surat',
    project: 'Surat Metro Phase 1 (Underground Corridors & Remaining Spans)',
    status: 'Documents Pending'
  },
  {
    olNo: 'SNSOL0908585',
    name: 'Harish Kumar Soni',
    title: 'Project Manager (HSE)',
    doj: '1 December 2026',
    location: 'Jaipur',
    project: 'Jaipur Metro Phase 2 (Orange Line)',
    status: 'Verification Ongoing'
  },
  {
    olNo: 'SNSOL0908586',
    name: 'Chandan Chaudhari',
    title: 'Deputy Manager- Projects',
    doj: '28 December 2026',
    location: 'Ahmedabad',
    project: 'Sabarmati Riverfront Phase 3 (Indira Bridge to GIFT City)',
    status: 'Documents Pending'
  },
  {
    olNo: 'SNSOL0908587',
    name: 'Manoj Kumar',
    title: 'Site Engineer',
    doj: '26 October 2026',
    location: 'Delhi',
    project: 'Delhi Metro Phase 4 (Golden Line Extension)',
    status: 'Documents Pending'
  },
  {
    olNo: 'SNSOL0908588',
    name: 'Mohd Gulbahar',
    title: 'Construction Manager',
    doj: '2 November 2026',
    location: 'Delhi',
    project: 'Delhi Metro Phase 4 (Golden Line Extension)',
    status: 'Documents Pending'
  },
  {
    olNo: 'SNSOL0908589',
    name: 'Upendra Chauhan',
    title: 'Senior Electrical Manager',
    doj: '2 November 2026',
    location: 'Ayodhya',
    project: 'Ayodhya 4/6-Lane Ring Road',
    status: 'Documents Pending'
  },
  {
    olNo: 'SNSOL0908590',
    name: 'Mozammil Alam',
    title: 'Project Coordinator Lead',
    doj: '2 November 2026',
    location: 'Mumbai',
    project: 'Mumbai Metro Line 12 (Kalyan–Taloja South Link)',
    status: 'Documents Pending'
  },
  {
    olNo: 'SNSOL0908591',
    name: 'Milap Thanki',
    title: 'Senior Electrical Engineer',
    doj: '28 December 2026',
    location: 'Ahmedabad',
    project: 'Sabarmati Riverfront Phase 3 (Indira Bridge to GIFT City)',
    status: 'Documents Pending'
  },
  {
    olNo: 'SNSOL0908592',
    name: 'Amit Patel',
    title: 'Assistant Manager (Electrical)',
    doj: '23 November 2026',
    location: 'Surat',
    project: 'Surat Metro Phase 1 (Underground Corridors & Corridor 2)',
    status: 'Documents Pending'
  },
  {
    olNo: 'SNSOL0908593',
    name: 'Rajat Kumar Sahoo',
    title: 'Civil Manager',
    doj: '28 December 2026',
    location: 'Cuttack',
    project: 'Cuttack-Bhubaneswar Metro Rail (Phase 1)',
    status: 'Documents Pending'
  },
  {
    olNo: 'SNSOL0908594',
    name: 'Gopalakrishnan Saminathan',
    title: 'Senior QA QC Manager',
    doj: '26 October 2026',
    location: 'Hyderabad',
    project: 'Hyderabad Metro Phase 2 (Airport & Radial Corridors)',
    status: 'Documents Pending'
  },
  {
    olNo: 'SNSOL0908595',
    name: 'Ganesh Nandan',
    title: 'Senior Manager EHS',
    doj: '1 December 2026',
    location: 'Pune',
    project: 'Pune Metro Phase 2 (Line 4 & Line 4A Extensions)',
    status: 'Documents Pending'
  },
  {
    olNo: 'SNSOL0908596',
    name: 'Bijit Ghosh',
    title: 'Senior Safety Manager',
    doj: '9 November 2026',
    location: 'Kolkata',
    project: 'Kolkata Airport Expansion (Phase II)',
    status: 'Documents Pending'
  },
  {
    olNo: 'SNSOL0908597',
    name: 'Arvind Devrani',
    title: 'Deputy Manager (Project)',
    doj: '4 January 2027',
    location: 'Kolkata',
    project: 'Kolkata Metro Line 3 (Purple Line)',
    status: 'Documents Pending'
  },
  {
    olNo: 'SNSOL0908598',
    name: 'Akshay Kumar',
    title: 'Quality Manager',
    doj: '21 October 2026',
    location: 'Mumbai',
    project: 'Mumbai Metro Line 12 (Kalyan–Taloja South Link)',
    status: 'Documents Pending'
  },
  {
    olNo: 'SNSOL0908599',
    name: 'Goutam Halder',
    title: 'Construction Manager',
    doj: '11 January 2027',
    location: 'Kolkata',
    project: 'Kolkata Metro Line 3 (Purple Line)',
    status: 'Documents Pending'
  },
  {
    olNo: 'SNSOL0908600',
    name: 'Nishant Prasoon',
    title: 'Safety Manager',
    doj: '28 December 2026',
    location: 'Delhi',
    project: 'Delhi Metro Phase 4 (Golden Line Extension)',
    status: 'Documents Pending'
  },
  {
    olNo: 'SNSOL0908601',
    name: 'Prabhat Kumar Singh',
    title: 'Senior Construction Manager',
    doj: '9 November 2026',
    location: 'Delhi',
    project: 'Delhi Metro Phase 4 (Golden Line Extension)',
    status: 'Documents Pending'
  },
  {
    olNo: 'SNSOL0908602',
    name: 'Ramesh Jatothu',
    title: 'Senior Operations Manager',
    doj: '30 November 2026',
    location: 'Hyderabad',
    project: 'Hyderabad Metro Phase 2 (Airport & Radial Corridors)',
    status: 'Documents Pending'
  },
  {
    olNo: 'SNSOL0908603',
    name: 'Anupam Chaturvedi',
    title: 'Deputy General Manager (Electrical)',
    doj: '11 January 2027',
    location: 'Ahmedabad',
    project: 'Sabarmati Riverfront Phase 3 (Indira Bridge to GIFT City)',
    status: 'Documents Pending'
  },
  {
    olNo: 'SNSOL0908604',
    name: 'R Chandra Das',
    title: 'Lead Engineer',
    doj: '26 October 2026',
    location: 'Raipur',
    project: 'Raipur-Dhanbad Economic Corridor (NH-43)',
    status: 'Documents Pending'
  },
  {
    olNo: 'SNSOL0908605',
    name: 'T Raja',
    title: 'Deputy Manager (QA/QC)',
    doj: '11 January 2027',
    location: 'Coimbatore',
    project: 'Coimbatore International Airport Expansion',
    status: 'Documents Pending'
  },
  {
    olNo: 'SNSOL0908606',
    name: 'Sudip Chakrabortty',
    title: 'Assistant Manager Electrical',
    doj: '16 November 2026',
    location: 'Raipur',
    project: 'Raipur-Dhanbad Economic Corridor (NH-43)',
    status: 'Documents Pending'
  },
  {
    olNo: 'SNSOL0908607',
    name: 'Onik Kumar',
    title: 'Assistant Construction Manager',
    doj: '30 November 2026',
    location: 'Delhi',
    project: 'Delhi Metro Phase 4 (Golden Line Extension)',
    status: 'Documents Pending'
  },
  {
    olNo: 'SNSOL0908608',
    name: 'Ashim Fouzder',
    title: 'Project Manager (Piping)',
    doj: '16 November 2026',
    location: 'Kolkata',
    project: 'Kolkata Airport Expansion (Phase II)',
    status: 'Documents Pending'
  },
  {
    olNo: 'SNSOL0908609',
    name: 'Valli Soorya S',
    title: 'Senior Manager Projects',
    doj: '28 December 2026',
    location: 'Chennai',
    project: 'Chennai Metro Phase 2',
    status: 'Documents Pending'
  },
  {
    olNo: 'SNSOL0908610',
    name: 'Ahmad Danish',
    title: 'Assistant Manager QS & Billing',
    doj: '7 December 2026',
    location: 'Kolkata',
    project: 'Kolkata Metro Line 3 (Purple Line)',
    status: 'Documents Pending'
  },
  {
    olNo: 'SNSOL0908611',
    name: 'Atanu Dey',
    title: 'Quality Manager',
    doj: '16 November 2026',
    location: 'Kolkata',
    project: 'Kolkata Metro Line 3 (Purple Line)',
    status: 'Documents Pending'
  },
  {
    olNo: 'SNSOL0908612',
    name: 'Santosh Kumar Singh',
    title: 'Senior Electrical Project Lead Manager',
    doj: '16 November 2026',
    location: 'Lucknow',
    project: 'Lucknow Metro Phase 2',
    status: 'Verification Ongoing'
  },
  {
    olNo: 'SNSOL0908613',
    name: 'J Balamurugan',
    title: 'Assistant Project Manager',
    doj: '30 October 2026',
    location: 'Bangalore',
    project: 'Bengaluru Suburban Rail Project (BSRP - Corridors 2 & 4)',
    status: 'Documents Pending'
  },
  {
    olNo: 'SNSOL0908614',
    name: 'Prakash Budhani',
    title: 'Quality Manager (QA/QC)',
    doj: '16 November 2026',
    location: 'Jaipur',
    project: 'Jaipur Metro Phase 2 (Orange Line)',
    status: 'Documents Pending'
  },
  {
    olNo: 'SNSOL0908615',
    name: 'Asheesh Kumar Shrivastav',
    title: 'Deputy Manager (Mechanical)',
    doj: '11 January 2027',
    location: 'Mumbai',
    project: 'Mumbai Metro Line 12 (Kalyan–Taloja South Link)',
    status: 'Documents Pending'
  },
  {
    olNo: 'SNSOL0908616',
    name: 'Rajeev Ranja',
    title: 'Deputy Manager Planning',
    doj: '26 October 2026',
    location: 'Hyderabad',
    project: 'Hyderabad Metro Phase 2 (Airport & Radial Corridors)',
    status: 'Documents Pending'
  },
  {
    olNo: 'SNSOL0908617',
    name: 'Saravana Kumar',
    title: 'Senior Manager EHS',
    doj: '14 December 2026',
    location: 'Hyderabad',
    project: 'Hyderabad Metro Phase 2 (Airport & Radial Corridors)',
    status: 'Documents Pending'
  },
  {
    olNo: 'SNSOL0908618',
    name: 'Vallarasu K',
    title: 'Architect Planner',
    doj: '2 November 2026',
    location: 'Delhi',
    project: 'Delhi Metro Phase 4 (Golden Line Extension)',
    status: 'Documents Pending'
  },
  {
    olNo: 'SNSOL0908619',
    name: 'Rajesh Joshi',
    title: 'Deputy Manager - Electrical',
    doj: '9 November 2026',
    location: 'Dehradun',
    project: 'Dehradun Metro Neo (Phase 1)',
    status: 'Documents Pending'
  },
  {
    olNo: 'SNSOL0908620',
    name: 'Tarigopula Santiramudu',
    title: 'Senior Electrical Engineer',
    doj: '26 October 2026',
    location: 'Hyderabad',
    project: 'Hyderabad Metro Phase 2 (Airport & Radial Corridors)',
    status: 'Documents Pending'
  },
  {
    olNo: 'SNSOL0908621',
    name: 'MD Mahtab',
    title: 'Assistant Project Manager (Piping)',
    doj: '16 November 2026',
    location: 'Kolkata',
    project: 'Kolkata Airport Expansion (Phase II)',
    status: 'Documents Pending'
  },
  {
    olNo: 'SNSOL0908622',
    name: 'Vasudev Rathod',
    title: 'Senior HVAC Designer',
    doj: '11 January 2027',
    location: 'Dubai (UAE)',
    project: 'Al Maktoum International Airport Expansion',
    status: 'Documents Pending'
  },
  {
    olNo: 'SNSOL0908623',
    name: 'Yogesh Mishra',
    title: 'Project Manager',
    doj: '16 November 2026',
    location: 'Mumbai',
    project: 'Mumbai Metro Line 12 (Kalyan–Taloja South Link)',
    status: 'Documents Pending'
  },
  {
    olNo: 'SNSOL0908624',
    name: 'Priya Ranjan',
    title: 'Project Manager',
    doj: '2 November 2026',
    location: 'Delhi',
    project: 'Delhi Metro Phase 4 (Golden Line Extension)',
    status: 'Documents Pending'
  },
  {
    olNo: 'SNSOL0908625',
    name: 'Atul Kumar Mishra',
    title: 'Senior Project Manager',
    doj: '28 December 2026',
    location: 'Delhi',
    project: 'Delhi Metro Phase 4 (Golden Line Extension)',
    status: 'Documents Pending'
  },
  {
    olNo: 'SNSOL0908626',
    name: 'Wasim Shaikh',
    title: 'Senior Manager (Mechanical)',
    doj: '11 January 2027',
    location: 'Ahmedabad',
    project: 'Sabarmati Riverfront Phase 3 (Indira Bridge to GIFT City)',
    status: 'Documents Pending'
  },
  {
    olNo: 'SNSOL0908627',
    name: 'Soumya Chakraborty',
    title: 'Project Lead',
    doj: '7 December 2026',
    location: 'Kolkata',
    project: 'Kolkata Metro Line 3 (Purple Line)',
    status: 'Documents Pending'
  },
  {
    olNo: 'SNSOL0908628',
    name: 'Amjad Khan',
    title: 'Senior Manager Electrical',
    doj: '26 October 2026',
    location: 'Hyderabad',
    project: 'Hyderabad Metro Phase 2 (Airport & Radial Corridors)',
    status: 'Documents Pending'
  },
  {
    olNo: 'SNSOL0908629',
    name: 'Anirudh Kumar',
    title: 'Senior Manager (QA/QC)',
    doj: '16 November 2026',
    location: 'Mumbai',
    project: 'Mumbai Metro Line 12 (Kalyan–Taloja South Link)',
    status: 'Documents Pending'
  },
  {
    olNo: 'SNSOL0908630',
    name: 'Divyapati Sudhakar',
    title: 'Senior Deputy General Manager',
    doj: '28 December 2026',
    location: 'Hyderabad',
    project: 'Hyderabad Metro Phase 2 (Airport & Radial Corridors)',
    status: 'Documents Pending'
  },
  {
    olNo: 'SNSOL0908631',
    name: 'Talasila Bhargava',
    title: 'Electrical Manager',
    doj: '7 December 2026',
    location: 'Hyderabad',
    project: 'Hyderabad Metro Phase 2 (Airport & Radial Corridors)',
    status: 'Documents Pending'
  },
  {
    olNo: 'SNSOL0908632',
    name: 'Labalee Sharma',
    title: 'Project Manager (Electrical and Maintenance)',
    doj: '26 October 2026',
    location: 'Delhi',
    project: 'Delhi Metro Phase 4 (Golden Line Extension)',
    status: 'Verification Ongoing'
  },
  {
    olNo: 'SNSOL0908633',
    name: 'Pritam Maiti',
    title: 'Senior Construction Manager',
    doj: '11 January 2027',
    location: 'Lucknow',
    project: 'Lucknow Metro Phase 2',
    status: 'Documents Pending'
  },
  {
    olNo: 'SNSOL0908634',
    name: 'Manoj Eknath Warhekar',
    title: 'Manager Electrical',
    doj: '11 January 2027',
    location: 'Mumbai',
    project: 'Mumbai Metro Line 12 (Kalyan–Taloja South Link)',
    status: 'Documents Pending'
  },
  {
    olNo: 'SNSOL0908635',
    name: 'Muthu Kumarasamy',
    title: 'Senior Manager (QA/QC)',
    doj: '16 November 2026',
    location: 'Chennai',
    project: 'Chennai Metro Phase 2',
    status: 'Documents Pending'
  },
  {
    olNo: 'SNSOL0908636',
    name: 'Manish Goel',
    title: 'Senior Construction Manager - Civil',
    doj: '9 November 2026',
    location: 'Chandigarh',
    project: 'Chandigarh-Bathinda Expressway',
    status: 'Documents Pending'
  },
  {
    olNo: 'SNSOL0908637',
    name: 'Nur Islam',
    title: 'Senior Manager Quality',
    doj: '14 December 2026',
    location: 'Delhi',
    project: 'Delhi Metro Phase 4 (Golden Line Extension)',
    status: 'Documents Pending'
  },
  {
    olNo: 'SNSOL0908638',
    name: 'Antosh Kumar',
    title: 'Civil Site In-charge',
    doj: '2 November 2026',
    location: 'Pune',
    project: 'Pune Metro Phase 2 (Line 4 & Line 4A Extensions)',
    status: 'Documents Pending'
  },
  {
    olNo: 'SNSOL0908639',
    name: 'Sachin Bhardwaj',
    title: 'Assistant General Manager (Procurement)',
    doj: '16 November 2026',
    location: 'Delhi',
    project: 'Delhi Metro Phase 4 (Golden Line Extension)',
    status: 'Documents Pending'
  },
  {
    olNo: 'SNSOL0908640',
    name: 'Girdhari Singh',
    title: 'Construction Manager',
    doj: '14 December 2026',
    location: 'Delhi',
    project: 'Delhi Metro Phase 4 (Golden Line Extension)',
    status: 'Documents Pending'
  },
  {
    olNo: 'SNSOL0908641',
    name: 'Ranjan Singh',
    title: 'Operations Manager',
    doj: '9 November 2026',
    location: 'Delhi',
    project: 'Delhi Metro Phase 4 (Golden Line Extension)',
    status: 'Documents Pending'
  },
  {
    olNo: 'SNSOL0908642',
    name: 'Indrajit Singh',
    title: 'Store Manager',
    doj: '21 December 2026',
    location: 'Ahmedabad',
    project: 'Sabarmati Riverfront Phase 3 (Indira Bridge to GIFT City)',
    status: 'Documents Pending'
  }
];

const OfferVerification = () => {
  const searchParams = useSearchParams();
  const [searchInput, setSearchInput] = useState('');
  const [activeResult, setActiveResult] = useState(null);
  const [hasSearched, setHasSearched] = useState(false);

  useEffect(() => {
    document.title = 'Authentication Check | SNS Construction';
    const q = searchParams.get('ol') || searchParams.get('q');
    if (q) {
      setSearchInput(q);
      handlePerformSearch(q);
    }
  }, [searchParams]);

  const handlePerformSearch = (queryStr) => {
    const cleanQuery = (queryStr || searchInput).trim().toUpperCase();
    if (!cleanQuery) return;

    setHasSearched(true);
    const match = offerVerificationData.find(
      (item) => item.olNo.toUpperCase() === cleanQuery || item.name.toUpperCase() === cleanQuery
    );
    setActiveResult(match || null);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    handlePerformSearch();
  };

  const getStatusBadgeClass = (status) => {
    if (status === 'Candidature Cancelled') return 'status-badge-cancelled';
    if (status === 'Verification Ongoing') return 'status-badge-ongoing';
    if (status === 'Documents Pending') return 'status-badge-pending';
    return 'status-badge-default';
  };

  const breadcrumbs = [
    { label: 'Home', path: '/' },
    { label: 'Careers', path: '/careers' },
    { label: 'Authentication Check', path: null },
  ];

  return (
    <div className="ol-verify-page">
      {/* Hero Header */}
      <section className="ol-hero-section">
        <div className="ol-container">
          <div className="ol-breadcrumbs">
            {breadcrumbs.map((crumb, idx) => (
              <React.Fragment key={idx}>
                {crumb.path ? (
                  <Link href={crumb.path} className="crumb-link">{crumb.label}</Link>
                ) : (
                  <span className="crumb-current">{crumb.label}</span>
                )}
                {idx < breadcrumbs.length - 1 && <span className="crumb-separator">/</span>}
              </React.Fragment>
            ))}
          </div>

          <div className="ol-hero-content">
            <span className="ol-portal-badge">CORPORATE COMPLIANCE PORTAL</span>
            <h1 className="ol-hero-title">Authentication Check</h1>
            <p className="ol-hero-subtitle">
              Enter your official SNS Construction Offer Letter reference number below to verify candidature status and project allocation records.
            </p>
          </div>
        </div>
      </section>

      {/* Main Container */}
      <section className="ol-main-section ol-container">
        <div className="ol-search-wrapper">
          {/* Search Input Card */}
          <div className="ol-search-card">
            <form onSubmit={handleSearchSubmit} className="ol-search-form">
              <label className="ol-input-label" htmlFor="ol-input">
                Offer Letter Reference Number (OL No.)
              </label>
              <div className="ol-search-box">
                <input
                  id="ol-input"
                  type="text"
                  className="ol-search-input"
                  placeholder="Enter OL No. (e.g. SNSOL0908518)"
                  value={searchInput}
                  onChange={(e) => setSearchInput(e.target.value)}
                  autoComplete="off"
                  required
                />
                <button type="submit" className="ol-submit-btn">
                  Check Status
                </button>
              </div>
            </form>
          </div>

          {/* Results Section - Only rendered after active search */}
          {hasSearched && (
            <div className="ol-results-area">
              {activeResult ? (
                <div className="ol-result-card">
                  {/* Header Banner */}
                  <div className="result-header">
                    <div className="result-header-left">
                      <span className="result-ol-number">{activeResult.olNo}</span>
                      <h2 className="result-candidate-name">{activeResult.name}</h2>
                    </div>
                    <div className="result-header-right">
                      <span className={`status-badge ${getStatusBadgeClass(activeResult.status)}`}>
                        {activeResult.status}
                      </span>
                    </div>
                  </div>

                  {/* Status Alert Banner */}
                  <div className={`status-notice-box notice-${getStatusBadgeClass(activeResult.status)}`}>
                    {activeResult.status === 'Candidature Cancelled' && (
                      <p>
                        <strong>Notice:</strong> This candidature has been marked as <u>Cancelled</u> by SNS Construction HR Compliance Management. The offer letter associated with this reference number is no longer active.
                      </p>
                    )}
                    {activeResult.status === 'Verification Ongoing' && (
                      <p>
                        <strong>Notice:</strong> Background check and credential verification for this candidate are currently <u>In Progress</u>. Final onboarding documentation will follow verification clearance.
                      </p>
                    )}
                    {activeResult.status === 'Documents Pending' && (
                      <p>
                        <strong>Notice:</strong> Required candidate verification documents are currently <u>Pending</u>. Please forward requested documentation to <a href="mailto:hrteam@snsconstructioninc.com">hrteam@snsconstructioninc.com</a>.
                      </p>
                    )}
                  </div>

                  {/* Details Grid */}
                  <div className="result-details-grid">
                    <div className="detail-item">
                      <span className="detail-label">Designation / Role</span>
                      <span className="detail-value highlight">{activeResult.title}</span>
                    </div>

                    <div className="detail-item">
                      <span className="detail-label">Assigned Project</span>
                      <span className="detail-value">{activeResult.project}</span>
                    </div>

                    <div className="detail-item">
                      <span className="detail-label">Project Location</span>
                      <span className="detail-value">{activeResult.location}</span>
                    </div>

                    <div className="detail-item">
                      <span className="detail-label">Expected Date of Joining</span>
                      <span className="detail-value">{activeResult.doj}</span>
                    </div>
                  </div>

                  {/* Footer Seal */}
                  <div className="result-card-footer">
                    <div className="footer-seal">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                        <path d="M9 12l2 2 4-4"/>
                      </svg>
                      <span>Official Record — SNS Construction HR Compliance System</span>
                    </div>
                    <a href="mailto:hrteam@snsconstructioninc.com?subject=Authentication Check Inquiry: " className="contact-hr-btn">
                      Contact HR Compliance
                    </a>
                  </div>
                </div>
              ) : (
                <div className="ol-not-found-card">
                  <div className="not-found-icon">⚠️</div>
                  <h3>No Record Found</h3>
                  <p>
                    No offer letter record matching <strong>"{searchInput}"</strong> was found in our authentication registry. Please verify the OL number format or contact corporate HR.
                  </p>
                  <div className="not-found-actions">
                    <button 
                      onClick={() => { setSearchInput(''); setHasSearched(false); }}
                      className="clear-search-btn"
                    >
                      Try Another Search
                    </button>
                    <a href="mailto:hrteam@snsconstructioninc.com" className="email-support-btn">
                      Email HR Support
                    </a>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default OfferVerification;
