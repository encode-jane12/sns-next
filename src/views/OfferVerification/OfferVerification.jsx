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
    olNo: 'SNSOL0908548',
    name: 'Tarkeshwar Kumar',
    title: 'Mechanical Engineer',
    doj: '26 October 2026',
    location: 'Ranchi',
    project: 'Ranchi Metro Rail',
    status: 'Verification Ongoing'
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
    olNo: 'SNSOL0908585',
    name: 'Harish Kumar Soni',
    title: 'Project Manager (HSE)',
    doj: '1 December 2026',
    location: 'Jaipur',
    project: 'Jaipur Metro Phase 2 (Orange Line)',
    status: 'Verification Ongoing'
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
    olNo: 'SNSOL0908630',
    name: 'Divyapati Sudhakar',
    title: 'Senior Deputy General Manager',
    doj: '28 December 2026',
    location: 'Hyderabad',
    project: 'Hyderabad Metro Phase 2 (Airport & Radial Corridors)',
    status: 'Verification Ongoing'
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
    status: 'Verification Ongoing'
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
  },
  {
    olNo: 'SNSOL0908643',
    name: 'Navneet Kumar',
    title: 'Project Engineer - Civil',
    doj: '9 November 2026',
    location: 'Delhi',
    project: 'Delhi Metro Phase 4 (Golden Line Extension)',
    status: 'Documents Pending'
  },
  {
    olNo: 'SNSOL0908644',
    name: 'Ramesh',
    title: 'Assistant QA/QC Manager - Electrical',
    doj: '9 November 2026',
    location: 'Chennai',
    project: 'Chennai Metro Phase 2',
    status: 'Documents Pending'
  },
  {
    olNo: 'SNSOL0908645',
    name: 'Gaurav Bhavsar',
    title: 'Project Manager',
    doj: '9 November 2026',
    location: 'Bhopal',
    project: 'Bhopal Metro Phase 1 (Blue Line)',
    status: 'Documents Pending'
  },
  {
    olNo: 'SNSOL0908646',
    name: 'Mohammed Naser Khan',
    title: 'Senior BIM Manager',
    doj: '21 December 2026',
    location: 'Hyderabad',
    project: 'Hyderabad Metro Phase 2 (Airport & Radial Corridors)',
    status: 'Verification Ongoing'
  },
  {
    olNo: 'SNSOL0908647',
    name: 'Suraj Kumar Singh',
    title: 'Piping Engineer',
    doj: '7 December 2026',
    location: 'Delhi',
    project: 'Delhi Metro Phase 4 (Golden Line Extension)',
    status: 'Documents Pending'
  },
  {
    olNo: 'SNSOL0908648',
    name: 'Ravinder Singh Dahiya',
    title: 'Project Manager',
    doj: '21 December 2026',
    location: 'Jaipur',
    project: 'Jaipur Metro Phase 2 (Orange Line)',
    status: 'Documents Pending'
  },
  {
    olNo: 'SNSOL0908649',
    name: 'Sudharsan Rajaraman',
    title: 'Senior Executive HSE',
    doj: '14 December 2026',
    location: 'Coimbatore',
    project: 'Coimbatore International Airport Expansion',
    status: 'Documents Pending'
  },
  {
    olNo: 'SNSOL0908650',
    name: 'Neeraj Sinha',
    title: 'Senior Manager (Instrumentation)',
    doj: '11 January 2027',
    location: 'Kolkata',
    project: 'Kolkata Metro Line 3 (Purple Line)',
    status: 'Documents Pending'
  },
  {
    olNo: 'SNSOL0908651',
    name: 'Nabinananda Mukherjee',
    title: 'Senior Manager (Quality Control)',
    doj: '16 November 2026',
    location: 'Kolkata',
    project: 'Kolkata Metro Line 3 (Purple Line)',
    status: 'Documents Pending'
  },
  {
    olNo: 'SNSOL0908652',
    name: 'Gangeshwar Yadav',
    title: 'Assistant Manager - Safety',
    doj: '9 November 2026',
    location: 'Kolkata',
    project: 'Kolkata Metro Line 3 (Purple Line)',
    status: 'Documents Pending'
  },
  {
    olNo: 'SNSOL0908653',
    name: 'Debabrata Sarkar',
    title: 'Assistant Engineer',
    doj: '4 January 2027',
    location: 'Kolkata',
    project: 'Kolkata Metro Line 3 (Purple Line)',
    status: 'Documents Pending'
  },
  {
    olNo: 'SNSOL0908654',
    name: 'Novel Babu',
    title: 'Project Manager',
    doj: '30 October 2026',
    location: 'Lucknow',
    project: 'Lucknow Metro Phase 2',
    status: 'Documents Pending'
  },
  {
    olNo: 'SNSOL0908655',
    name: 'Rajendra Valake',
    title: 'Assistant Project Manager',
    doj: '9 November 2026',
    location: 'Mumbai',
    project: 'Mumbai Metro Line 12 (Kalyan–Taloja South Link)',
    status: 'Documents Pending'
  },
  {
    olNo: 'SNSOL0908656',
    name: 'Shahbaz Shameem',
    title: 'Senior Project Engineer',
    doj: '16 November 2026',
    location: 'Delhi',
    project: 'Delhi Metro Phase 4 (Golden Line Extension)',
    status: 'Documents Pending'
  },
  {
    olNo: 'SNSOL0908657',
    name: 'Mohammad Wasif Jan',
    title: 'Civil Engineer',
    doj: '2 November 2026',
    location: 'Bangalore',
    project: 'Bengaluru Suburban Rail Project (BSRP - Corridors 2 & 4)',
    status: 'Documents Pending'
  },
  {
    olNo: 'SNSOL0908658',
    name: 'Kartik Maity',
    title: 'Assistant Construction Manager',
    doj: '18 January 2027',
    location: 'Raipur',
    project: 'Raipur-Dhanbad Economic Corridor (NH-43)',
    status: 'Documents Pending'
  },
  {
    olNo: 'SNSOL0908659',
    name: 'Shubham Kumar Yadav',
    title: 'Deputy Project Manager',
    doj: '9 November 2026',
    location: 'Delhi',
    project: 'Delhi Metro Phase 4 (Golden Line Extension)',
    status: 'Documents Pending'
  },
  {
    olNo: 'SNSOL0908660',
    name: 'Vivek Kumar Singh',
    title: 'Assistant Project Manager',
    doj: '16 November 2026',
    location: 'Lucknow',
    project: 'Lucknow Metro Phase 2',
    status: 'Documents Pending'
  },
  {
    olNo: 'SNSOL0908661',
    name: 'Vikash Kumar',
    title: 'Deputy Project Manager',
    doj: '16 November 2026',
    location: 'Pune',
    project: 'Pune Metro Phase 2 (Line 4 & Line 4A Extensions)',
    status: 'Documents Pending'
  },
  {
    olNo: 'SNSOL0908662',
    name: 'Vivek Kumar Mishra',
    title: 'Deputy Mechanical Manager',
    doj: '18 January 2027',
    location: 'Jaipur',
    project: 'Jaipur Metro Phase 2 (Orange Line)',
    status: 'Documents Pending'
  },
  {
    olNo: 'SNSOL0908663',
    name: 'Jagveer Singh',
    title: 'Senior Project Engineer',
    doj: '4 January 2027',
    location: 'Delhi',
    project: 'Delhi Metro Phase 4 (Golden Line Extension)',
    status: 'Documents Pending'
  },
  {
    olNo: 'SNSOL0908664',
    name: 'Shreyansh Holkar',
    title: 'Senior Civil Engineer',
    doj: '9 November 2026',
    location: 'Pune',
    project: 'Pune Metro Phase 2 (Line 4 & Line 4A Extensions)',
    status: 'Documents Pending'
  },
  {
    olNo: 'SNSOL0908665',
    name: 'Rahul Rajan Sinha',
    title: 'Deputy Construction Manager',
    doj: '18 January 2027',
    location: 'Lucknow',
    project: 'Lucknow Metro Phase 2',
    status: 'Documents Pending'
  },
  {
    olNo: 'SNSOL0908666',
    name: 'Dhruv Puri',
    title: 'Project Manager',
    doj: '23 November 2026',
    location: 'Delhi',
    project: 'Delhi Metro Phase 4 (Golden Line Extension)',
    status: 'Documents Pending'
  },
  {
    olNo: 'SNSOL0908667',
    name: 'Shivendra Bahadur Singh',
    title: 'Senior Project Manager (Electrical)',
    doj: '18 January 2027',
    location: 'Delhi',
    project: 'Delhi Metro Phase 4 (Golden Line Extension)',
    status: 'Documents Pending'
  },
  {
    olNo: 'SNSOL0908668',
    name: 'Md Farhan',
    title: 'Project Manager',
    doj: '9 November 2026',
    location: 'Delhi',
    project: 'Delhi Metro Phase 4 (Golden Line Extension)',
    status: 'Documents Pending'
  },
  {
    olNo: 'SNSOL0908669',
    name: 'Rajesh Kumar Sarkar',
    title: 'Project Manager Survey',
    doj: '16 November 2026',
    location: 'Hyderabad',
    project: 'Hyderabad Metro Phase 2 (Airport & Radial Corridors)',
    status: 'Verification Ongoing'
  },
  {
    olNo: 'SNSOL0908670',
    name: 'Afsar Malik',
    title: 'Senior Civil Engineer',
    doj: '9 November 2026',
    location: 'Delhi',
    project: 'Delhi Metro Phase 4 (Golden Line Extension)',
    status: 'Documents Pending'
  },
  {
    olNo: 'SNSOL0908671',
    name: 'Mansukh Bariya',
    title: 'Senior Maintenance Engineer',
    doj: '14 December 2026',
    location: 'Mumbai',
    project: 'Mumbai Metro Line 12 (Kalyan–Taloja South Link)',
    status: 'Documents Pending'
  },
  {
    olNo: 'SNSOL0908672',
    name: 'Kunj Gocher',
    title: 'Manager - Power Supply Traction',
    doj: '18 January 2027',
    location: 'Mumbai',
    project: 'Mumbai–Ahmedabad High-Speed Rail (Bullet Train)',
    status: 'Verification Ongoing'
  },
  {
    olNo: 'SNSOL0908673',
    name: 'Salman Khan',
    title: 'Senior Executive Engineer',
    doj: '18 January 2027',
    location: 'Varanasi',
    project: 'The Ganga River Elevated Corridor',
    status: 'Documents Pending'
  },
  {
    olNo: 'SNSOL0908674',
    name: 'Dhinakar',
    title: 'Project Manager',
    doj: '7 December 2026',
    location: 'Bengaluru',
    project: 'Bengaluru Suburban Rail Project (BSRP - Corridors 2 & 4)',
    status: 'Documents Pending'
  },
  {
    olNo: 'SNSOL0908675',
    name: 'Raj Kumar',
    title: 'Deputy Project Manager',
    doj: '7 December 2026',
    location: 'Jaipur',
    project: 'Jaipur Metro Phase 2 (Orange Line)',
    status: 'Documents Pending'
  },
  {
    olNo: 'SNSOL0908676',
    name: 'Anant Kumar Sharma S',
    title: 'Project Manager',
    doj: '16 November 2026',
    location: 'Delhi',
    project: 'Delhi Metro Phase 4 (Golden Line Extension)',
    status: 'Documents Pending'
  },
  {
    olNo: 'SNSOL0908677',
    name: 'Vighnesh Jamsutkar',
    title: 'Deputy HSE Manager',
    doj: '21 December 2026',
    location: 'Mumbai',
    project: 'Mumbai Metro Line 12 (Kalyan–Taloja South Link)',
    status: 'Documents Pending'
  },
  {
    olNo: 'SNSOL0908678',
    name: 'Sandeep Futane',
    title: 'Senior Project Manager',
    doj: '21 December 2026',
    location: 'Pune',
    project: 'Pune Metro Phase 2 (Line 4 & Line 4A Extensions)',
    status: 'Documents Pending'
  },
  {
    olNo: 'SNSOL0908679',
    name: 'Surisetty Satish',
    title: 'Senior Manager - Piping',
    doj: '16 November 2026',
    location: 'Vijaywada',
    project: 'Nagpur-Vijayawada Expressway',
    status: 'Documents Pending'
  },
  {
    olNo: 'SNSOL0908680',
    name: 'Ankit Kumar',
    title: 'Senior Project Engineer',
    doj: '18 January 2027',
    location: 'Patna',
    project: 'Patna Metro Phase 1 (Underground Network: Line 1 & Line 2)',
    status: 'Documents Pending'
  },
  {
    olNo: 'SNSOL0908681',
    name: 'Sayyed Afzal',
    title: 'Senior Site Engineer Civil',
    doj: '14 December 2026',
    location: 'Mumbai',
    project: 'Mumbai Metro Line 12 (Kalyan–Taloja South Link)',
    status: 'Documents Pending'
  },
  {
    olNo: 'SNSOL0908682',
    name: 'Sundar Rajasekar',
    title: 'Project Manager',
    doj: '21 December 2026',
    location: 'Coimbatore',
    project: 'Coimbatore International Airport Expansion',
    status: 'Documents Pending'
  },
  {
    olNo: 'SNSOL0908683',
    name: 'Gorav Gupta',
    title: 'Assistant Manager Planning',
    doj: '16 November 2026',
    location: 'Chandigarh',
    project: 'Chandigarh-Bathinda Expressway',
    status: 'Documents Pending'
  },
  {
    olNo: 'SNSOL0908684',
    name: 'Akash Varma',
    title: 'Assistant Manager (Quality & Billing)',
    doj: '23 November 2026',
    location: 'Lucknow',
    project: 'Lucknow Metro Phase 2',
    status: 'Documents Pending'
  },
  {
    olNo: 'SNSOL0908685',
    name: 'Balaji Shanmugam',
    title: 'Assistant Manager (Quality)',
    doj: '23 November 2026',
    location: 'Hyderabad',
    project: 'Hyderabad Metro Phase 2 (Airport & Radial Corridors)',
    status: 'Documents Pending'
  },
  {
    olNo: 'SNSOL0908686',
    name: 'Brajendra Singh',
    title: 'Senior Site Engineer',
    doj: '16 November 2026',
    location: 'Bhopal',
    project: 'Bhopal Metro Phase 1 (Blue Line)',
    status: 'Documents Pending'
  },
  {
    olNo: 'SNSOL0908687',
    name: 'Yogendar Singh',
    title: 'Deputy Project Manager',
    doj: '23 November 2026',
    location: 'Bhopal',
    project: 'Bhopal Metro Phase 1 (Blue Line)',
    status: 'Documents Pending'
  },
  {
    olNo: 'SNSOL0908688',
    name: 'Rakesh Bhargava',
    title: 'Senior Project Manager (Civil)',
    doj: '7 December 2026',
    location: 'Delhi',
    project: 'Delhi Metro Phase 4 (Golden Line Extension)',
    status: 'Documents Pending'
  },
  {
    olNo: 'SNSOL0908689',
    name: 'Prosenjit Mistry',
    title: 'Civil Site Engineer',
    doj: '9 November 2026',
    location: 'Kolkata',
    project: 'Kolkata Metro Line 3 (Purple Line)',
    status: 'Documents Pending'
  },
  {
    olNo: 'SNSOL0908690',
    name: 'Maha Prabhu',
    title: 'Senior Project Manager',
    doj: '21 December 2026',
    location: 'Chennai',
    project: 'Chennai Metro Phase 2',
    status: 'Documents Pending'
  },
  {
    olNo: 'SNSOL0908691',
    name: 'Merwin Sequeira',
    title: 'Project Manager',
    doj: '12 December 2026',
    location: 'Mumbai',
    project: 'Mumbai Metro Line 12 (Kalyan–Taloja South Link)',
    status: 'Documents Pending'
  },
  {
    olNo: 'SNSOL0908692',
    name: 'Ashiq Hussain Dar',
    title: 'Assistant Planning Manager',
    doj: '23 November 2026',
    location: 'Srinagar',
    project: 'Srinagar International Airport (Sheikh ul-Alam) Master Expansion',
    status: 'Documents Pending'
  },
  {
    olNo: 'SNSOL0908693',
    name: 'Sahil Patel',
    title: 'Project Engineer',
    doj: '21 December 2026',
    location: 'Bengaluru',
    project: 'Bengaluru Suburban Rail Project (BSRP - Corridors 2 & 4)',
    status: 'Documents Pending'
  },
  {
    olNo: 'SNSOL0908694',
    name: 'Sonu Kumar Bhagat',
    title: 'Senior Project Engineer',
    doj: '18 January 2027',
    location: 'Gangtok',
    project: 'Rangpo–Gangtok Rail Extension (Phase 2)',
    status: 'Documents Pending'
  },
  {
    olNo: 'SNSOL0908695',
    name: 'Mitul Prajapati',
    title: 'Deputy Manager - Planning & Billing',
    doj: '1 December 2026',
    location: 'Ahmedabad',
    project: 'Sabarmati Riverfront Phase 3 (Indira Bridge to GIFT City)',
    status: 'Documents Pending'
  },
  {
    olNo: 'SNSOL0908696',
    name: 'Darshan Patel',
    title: 'Senior Site Engineer (Civil)',
    doj: '9 November 2026',
    location: 'Delhi',
    project: 'Delhi Metro Phase 4 (Golden Line Extension)',
    status: 'Documents Pending'
  },
  {
    olNo: 'SNSOL0908697',
    name: 'Pankaj Kumar',
    title: 'Deputy Project Manager',
    doj: '1 December 2026',
    location: 'Bhopal',
    project: 'Bhopal Metro Phase 1 (Blue Line)',
    status: 'Verification Ongoing'
  },
  {
    olNo: 'SNSOL0908698',
    name: 'Ramandeep Singh',
    title: 'Project Manager',
    doj: '16 November 2026',
    location: 'Udaipur',
    project: 'NH-48 Kherwara Elevated Corridor',
    status: 'Documents Pending'
  },
  {
    olNo: 'SNSOL0908699',
    name: 'Mohd Abid Jatu',
    title: 'Assistant Project Manager',
    doj: '23 November 2026',
    location: 'Jaipur',
    project: 'Jaipur Metro Phase 2 (Orange Line)',
    status: 'Documents Pending'
  },
  {
    olNo: 'SNSOL0908700',
    name: 'Sathish Mani',
    title: 'Project Manager (Electrical)',
    doj: '21 December 2026',
    location: 'Bangalore',
    project: 'Bengaluru Suburban Rail Project (BSRP - Corridors 2 & 4)',
    status: 'Documents Pending'
  },
  {
    olNo: 'SNSOL0908701',
    name: 'Akhilesh Pareek',
    title: 'Senior Maintenance Engineer',
    doj: '16 November 2026',
    location: 'Jaipur',
    project: 'Jaipur Metro Phase 2 (Orange Line)',
    status: 'Documents Pending'
  },
  {
    olNo: 'SNSOL0908702',
    name: 'Murugappan A',
    title: 'Deputy Project Manager',
    doj: '21 December 2026',
    location: 'Chennai',
    project: 'Chennai Metro Phase 2',
    status: 'Documents Pending'
  },
  {
    olNo: 'SNSOL0908703',
    name: 'Subham Sau',
    title: 'Deputy Manager (Safety)',
    doj: '18 January 2027',
    location: 'Kolkata',
    project: 'Kolkata Airport Expansion (Phase II)',
    status: 'Documents Pending'
  },
  {
    olNo: 'SNSOL0908704',
    name: 'Mukesh',
    title: 'Senior Project Manager',
    doj: '16 November 2026',
    location: 'Delhi',
    project: 'Delhi Metro Phase 4 (Golden Line Extension)',
    status: 'Documents Pending'
  },
  {
    olNo: 'SNSOL0908705',
    name: 'Sriram Rajasekar',
    title: 'Senior Engineer MEP',
    doj: '25 January 2027',
    location: 'Chennai',
    project: 'Chennai Metro Phase 2',
    status: 'Documents Pending'
  },
  {
    olNo: 'SNSOL0908706',
    name: 'Mohd Adil',
    title: 'Project Manager',
    doj: '1 December 2026',
    location: 'Delhi',
    project: 'Delhi Metro Phase 4 (Golden Line Extension)',
    status: 'Documents Pending'
  },
  {
    olNo: 'SNSOL0908707',
    name: 'Mazid Raza',
    title: 'Project Manager (Billing & Execution)',
    doj: '16 November 2026',
    location: 'Pune',
    project: 'Pune Metro Phase 2 (Line 4 & Line 4A Extensions)',
    status: 'Documents Pending'
  },
  {
    olNo: 'SNSOL0908708',
    name: 'Mintu Santra',
    title: 'Assistant Manager (Project)',
    doj: '1 December 2026',
    location: 'Kolkata',
    project: 'Kolkata Metro Line 3 (Purple Line)',
    status: 'Documents Pending'
  },
  {
    olNo: 'SNSOL0908709',
    name: 'Gowtham Dandu',
    title: 'Senior Manager Operations',
    doj: '18 January 2027',
    location: 'Hyderabad',
    project: 'Hyderabad Metro Phase 2 (Airport & Radial Corridors)',
    status: 'Documents Pending'
  },
  {
    olNo: 'SNSOL0908710',
    name: 'Shahrayaz Ahmad',
    title: 'Senior Civil Site Engineer',
    doj: '1 December 2026',
    location: 'Lucknow',
    project: 'Lucknow Metro Phase 2',
    status: 'Documents Pending'
  },
  {
    olNo: 'SNSOL0908711',
    name: 'Abhishek Saraswat',
    title: 'Project Manager',
    doj: '1 December 2026',
    location: 'Jaipur',
    project: 'Jaipur Metro Phase 2 (Orange Line)',
    status: 'Documents Pending'
  },
  {
    olNo: 'SNSOL0908712',
    name: 'Krunal Dhotre',
    title: 'Lead Project Engineer',
    doj: '16 November 2026',
    location: 'Pune',
    project: 'Pune Metro Phase 2 (Line 4 & Line 4A Extensions)',
    status: 'Documents Pending'
  },
  {
    olNo: 'SNSOL0908713',
    name: 'Tadi Ravindra Babu',
    title: 'Project Manager',
    doj: '18 January 2027',
    location: 'Hyderabad',
    project: 'Hyderabad Metro Phase 2 (Airport & Radial Corridors)',
    status: 'Documents Pending'
  },
  {
    olNo: 'SNSOL0908714',
    name: 'Ankit Chourey',
    title: 'Assistant Project Manager',
    doj: '1 December 2026',
    location: 'Indore',
    project: 'Indore Metro (The Yellow Line)',
    status: 'Documents Pending'
  },
  {
    olNo: 'SNSOL0908715',
    name: 'Laxmikant Kolakur',
    title: 'Assistant Project Manager (Mechanical)',
    doj: '18 January 2027',
    location: 'Mumbai',
    project: 'Mumbai Metro Line 12 (Kalyan–Taloja South Link)',
    status: 'Documents Pending'
  },
  {
    olNo: 'SNSOL0908716',
    name: 'Amol Vilas Thapekar',
    title: 'Senior Site Engineer',
    doj: '16 November 2026',
    location: 'Pune',
    project: 'Pune Metro Phase 2 (Line 4 & Line 4A Extensions)',
    status: 'Documents Pending'
  },
  {
    olNo: 'SNSOL0908717',
    name: 'Praween Kumar Pandey',
    title: 'Assistant Manager Project',
    doj: '28 December 2026',
    location: 'Lucknow',
    project: 'Lucknow Metro Phase 2',
    status: 'Documents Pending'
  },
  {
    olNo: 'SNSOL0908718',
    name: 'Nambaru Ramakrishna',
    title: 'Assistant Project Manager (MEP)',
    doj: '7 December 2026',
    location: 'Visakhapatnam',
    project: 'Visakhapatnam Metro Rail (Phase 1)',
    status: 'Documents Pending'
  },
  {
    olNo: 'SNSOL0908719',
    name: 'L Sagar Deep Goud',
    title: 'QA/QC Manager',
    doj: '23 November 2026',
    location: 'Hyderabad',
    project: 'Hyderabad Metro Phase 2 (Airport & Radial Corridors)',
    status: 'Documents Pending'
  },
  {
    olNo: 'SNSOL0908720',
    name: 'Pramod Kumar',
    title: 'Project Manager',
    doj: '1 December 2026',
    location: 'Lucknow',
    project: 'Lucknow Metro Phase 2',
    status: 'Documents Pending'
  },
  {
    olNo: 'SNSOL0908721',
    name: 'Nivrutti Bhayaje',
    title: 'Assistant Project Manager',
    doj: '23 November 2026',
    location: 'Mumbai',
    project: 'Mumbai Metro Line 12 (Kalyan–Taloja South Link)',
    status: 'Documents Pending'
  },
  {
    olNo: 'SNSOL0908722',
    name: 'Shahbazimam',
    title: 'Senior Site Civil Manager',
    doj: '23 November 2026',
    location: 'Delhi',
    project: 'Delhi Metro Phase 4 (Golden Line Extension)',
    status: 'Documents Pending'
  },
  {
    olNo: 'SNSOL0908723',
    name: 'Sabari Vasan',
    title: 'Senior Project Manager',
    doj: '25 January 2027',
    location: 'Coimbatore',
    project: 'Coimbatore International Airport Master Expansion & New Terminal',
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
