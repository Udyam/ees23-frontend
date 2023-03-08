const TeamDomain = ['CORE TEAM', 'SENIOR ADVISORS', 'DEVELOPERS', 'DESIGNERS', 'CONTENT AND CREATIVE', 'MARKETING TEAM', 'EXTERNAL AFFAIRS', 'PUBLIC RELATION'];
const TeamMemberName = [
  ['Akshat Jain', 'Pranav Mittal', 'Bisesh Agarwal', 'Atharva Bhatt', 'Mayank Singh', 'Sarang Manerikar', 'Shivansh Dubey', 'Suhani Agrawal', 'Raghav Agrawal', 'Suryansh Singh', 'Akshit Singla', 'Ayush Bemera', 'Ankur Agrawal', 'Raina Jain', 'Nishant Gounder', 'Avinash Singh', 'Ayushi Gupta', 'Ankit'],
  ['Yash Jain', 'Vikash Prajapati', 'Vikhyath Venkatraman', 'Siddharth Anand Srivastav', 'Eshaan Gupta', 'Smriti Sharma', 'Prajakta Priyadarshini', 'Nisitha Vallamdasu', 'Prince Kumar Gond'],
  ['Ankur Agrawal', 'Raina Jain', 'Akash Kumar', 'Avnesh Kumar', 'Kumar Sonu', 'Dhruv Chaudhary', 'Anant Jain', 'Md Athar', 'Shubham Jaiswal', 'Ashish Kumar', 'Nikhil Agarwal', 'Archit Pattanaik', 'Harshit Swarnkar', 'Nikhil Aggarwal', 'Samarth Tankasali', 'Samar Singh Randhawa', 'Mamalesh Rajkumar Hake'],
  ['Devi Tanuja Vasamsetty', 'Korivi Vedharshini', 'Riya Saini', 'Kalpit Adhao', 'Shivam Gupta', 'Aditya Mishra', 'Jasnoor Sandhu', 'Nilesh Sangle', 'Md Athar', 'Niharika Singh'],
  ['Shubhi Singh', 'Archit Soni', 'Pratishtha Dhiraj', 'P V Krishna Priya', 'Tarun Siddharth', 'Sakshi Tomar', 'Anusha Mahajan', 'Ritesh Lakra', 'Dharmesh Mahajan', 'Shrirang Gupta', 'Avani Jangid', 'Saket Kumar Singh'],
  [
    'Nishant Gounder',
    'Pushpam Berlia',
    'Harsh Singh',
    'Deependra Singh',
    'Abhishek Kumar',
    'Majjiga Deepak Sai',
    'Sachin Kumar',
    'Umang Garg',
    'Tarun Kumar Painkra',
    'Divyansh Jain',
    'Abhishek Kumar',
    'Rishav Kumar',
    'Konam Harshitha',
    'Suraj Gaur',
    'Jarpula Ajay Nayak',
    'Ipil Besra',
    'Vedansh Arya',
    'Dhruv Sharma',
    'Mitra Pidaparti',
    'Ayush Harshit',
    'Gargi Nigam',
    'Simarpreet Singh',
    'Mauli Gupta',
    'Ashutosh Awasthi'
  ],
  ['Ayushi Gupta', 'Ankit', 'Shreyansh Jain', 'Shubham Kumar', 'Mohit Singh', 'Riya Chauhan', 'Amit Kumar', 'Harsh Kumar', 'Anshu Soni', 'Shivam Raj', 'Harsh Saini', 'Shivom', 'Vaatsalya Sinha', 'Rajat Shukla'],
  ['Avinash Singh', 'Bhavna Chavan', 'Priyanshu', 'Divyanshu', 'Ravi Kumar Meena', 'Jaya Kedia', 'Anupam Shukla', 'Vaibhav Gupta', 'Harshit Anand', 'Anshu Kumar', 'Utkarsh Kumar', 'Aditya chandel', 'Aditya kumar', 'Mendapara Khelankumar', 'Aryan Sinha', 'Rakshit Sawhney', 'Ayush Singh']
];
const MemberImage = [
  [
    '/assets/TeamsSectionImages/Akshat jain.jpg',
    '/assets/TeamsSectionImages/Pranav_Mittal.jpg',
    '/assets/TeamsSectionImages/Bisesh Agarwal.jpg',
    '/assets/TeamsSectionImages/Atharva_Bhatt.jpg',
    '/assets/TeamsSectionImages/Mayank Singh.JPG',
    '/assets/TeamsSectionImages/Sarang Manerikar.jpg',
    '/assets/TeamsSectionImages/Shivansh_Dubey.jpg',
    '/assets/TeamsSectionImages/Suhani Agrawal.jpeg',
    '/assets/TeamsSectionImages/Raghav Agrawal.jpg',
    '/assets/TeamsSectionImages/Suryansh Singh.png',
    '/assets/TeamsSectionImages/Akshit Singla.jpg',
    '/assets/TeamsSectionImages/Bemera Ayush.PNG',
    '/assets/TeamsSectionImages/Ankur Agarwal.jpg',
    '/assets/TeamsSectionImages/Raina Jain.jpg',
    '/assets/TeamsSectionImages/Nishanth Gounder.jpg',
    '/assets/TeamsSectionImages/Avinash Singh.jpeg',
    '/assets/TeamsSectionImages/Ayushi Gupta.jpg',
    '/assets/TeamsSectionImages/Ankit.jpg'
  ],
  [
    '/assets/TeamsSectionImages/Yash_Jain.jpg',
    '/assets/TeamsSectionImages/Vikash_Prajapati.jpg',
    '/assets/TeamsSectionImages/Vikhyath Venkatraman.jpg',
    '/assets/TeamsSectionImages/Siddharth Anand Srivastav.jpeg',
    '/assets/TeamsSectionImages/Eshaan Gupta.jpeg',
    '/assets/TeamsSectionImages/Smriti_Sharma.jpg',
    '/assets/TeamsSectionImages/Prajakta Priyadarshini.jpg',
    '/assets/TeamsSectionImages/Nisitha Vallamdasu.jpg',
    '/assets/TeamsSectionImages/Prince Kumar Gond.jpg'
  ],
  [
    '/assets/TeamsSectionImages/Ankur Agarwal.jpg',
    '/assets/TeamsSectionImages/Raina Jain.jpg',
    '/assets/TeamsSectionImages/Akash_Kumar.jpg',
    '/assets/TeamsSectionImages/Avnesh kumar.jpg',
    '/assets/TeamsSectionImages/Kumar Sonu.jpeg',
    '/assets/TeamsSectionImages/Dhruv Chaudhary.jpg',
    '/assets/TeamsSectionImages/Anant Jain.jpg',
    '/assets/TeamsSectionImages/Md_Athar.jpg',
    '/assets/TeamsSectionImages/Shubham Jaiswal.jpg',
    '/assets/TeamsSectionImages/Ashish Kumar.jpeg',
    '/assets/TeamsSectionImages/Nikhil Agarwal.jpg',
    '/assets/TeamsSectionImages/Archit Pattanaik.jpeg',
    '/assets/TeamsSectionImages/Harshit Swarnkar.jpeg',
    '/assets/TeamsSectionImages/Nikhil Aggarwal.jpeg',
    '/assets/TeamsSectionImages/Samarth S T.jpg',
    '/assets/TeamsSectionImages/Samar Singh Randhawa.jpg',
    '/assets/TeamsSectionImages/blank-photo.jpg'
  ],
  [
    '/assets/TeamsSectionImages/Devi_Tanuja_Vasamsetty.jpg',
    '/assets/TeamsSectionImages/Korivi Vedharshini.jpg',
    '/assets/TeamsSectionImages/Riya Saini.jpg',
    '/assets/TeamsSectionImages/Kalpit Adhao.jpg',
    '/assets/TeamsSectionImages/Shivam Gupta.jpg',
    '/assets/TeamsSectionImages/Aditya Mishra.jpeg',
    '/assets/TeamsSectionImages/Jasnoor Sandhu.jpeg',
    '/assets/TeamsSectionImages/Nilesh Sangle.jpg',
    '/assets/TeamsSectionImages/Md_Athar.jpg',
    '/assets/TeamsSectionImages/Niharika Singh.jpg'
  ],
  [
    '/assets/TeamsSectionImages/Shubhi Singh.jpg',
    '/assets/TeamsSectionImages/Archit Soni.jpg',
    '/assets/TeamsSectionImages/Pratistha Dhiraj.jpg',
    '/assets/TeamsSectionImages/P V Krishna Priya.jpg',
    '/assets/TeamsSectionImages/Tarun Siddharth.jpeg',
    '/assets/TeamsSectionImages/Sakshi Tomar.jpg',
    '/assets/TeamsSectionImages/Anusha Mahajan.jpg',
    '/assets/TeamsSectionImages/Ritesh Lakra.jpeg',
    '/assets/TeamsSectionImages/Dharmesh Mahajan.jpg',
    '/assets/TeamsSectionImages/Shrirang Gupta.jpeg',
    '/assets/TeamsSectionImages/Avani Jangid.jpeg',
    '/assets/TeamsSectionImages/Saket Kumar Singh.jpg'
  ],
  [
    '/assets/TeamsSectionImages/Nishanth Gounder.jpg',
    '/assets/TeamsSectionImages/Pushpam Berlia.jpg',
    '/assets/TeamsSectionImages/Harsh Singh.jpg',
    '/assets/TeamsSectionImages/Deependra Singh.jpg',
    '/assets/TeamsSectionImages/Abhishek Kumar.jpg',
    '/assets/TeamsSectionImages/Majjiga Deepak Sai.jpg',
    '/assets/TeamsSectionImages/Sachin Kumar.jpg',
    '/assets/TeamsSectionImages/Umang Garg.jpeg',
    '/assets/TeamsSectionImages/Tarun Kumar Painkra.jpg',
    '/assets/TeamsSectionImages/Divyansh Jain.jpeg',
    '/assets/TeamsSectionImages/Abhishek Kumar(T).jpg',
    '/assets/TeamsSectionImages/Rishav Kumar.jpg',
    '/assets/TeamsSectionImages/Konam Harshitha.jpg',
    '/assets/TeamsSectionImages/Suraj Gaur.jpg',
    '/assets/TeamsSectionImages/Jarpula Ajay Nayak.jpg',
    '/assets/TeamsSectionImages/Ipil Besra.jpg',
    '/assets/TeamsSectionImages/blank-photo.jpg',
    '/assets/TeamsSectionImages/Dhruv Sharma.jpg',
    '/assets/TeamsSectionImages/Mitra Pidaparti.jpeg',
    '/assets/TeamsSectionImages/Ayush Harshit.jpg',
    '/assets/TeamsSectionImages/Gargi Nigam.jpeg',
    '/assets/TeamsSectionImages/Simarpreet Singh.jpeg',
    '/assets/TeamsSectionImages/Mauli Gupta.jpg',
    '/assets/TeamsSectionImages/Ashutosh Awasthi.jpg'
  ],
  [
    '/assets/TeamsSectionImages/Ayushi Gupta.jpg',
    '/assets/TeamsSectionImages/Ankit.jpg',
    '/assets/TeamsSectionImages/Shreyansh Jain.jpg',
    '/assets/TeamsSectionImages/Shubham Kumar.jpeg',
    '/assets/TeamsSectionImages/Mohit Singh.jpg',
    '/assets/TeamsSectionImages/Riya Chauhan.jpg',
    '/assets/TeamsSectionImages/Amit Kumar.jpg',
    '/assets/TeamsSectionImages/Harsh Kumar.jpg',
    '/assets/TeamsSectionImages/Anshu Soni.jpg',
    '/assets/TeamsSectionImages/Shivam Raj.jpg',
    '/assets/TeamsSectionImages/Harsh Saini.jpg',
    '/assets/TeamsSectionImages/Shivom.jpg',
    '/assets/TeamsSectionImages/Vaatsalya Sinha.jpg',
    '/assets/TeamsSectionImages/Rajat Shukla.jpg'
  ],
  [
    '/assets/TeamsSectionImages/Avinash Singh.jpeg',
    '/assets/TeamsSectionImages/Bhavna Chavan.jpg',
    '/assets/TeamsSectionImages/Priyanshu.jpg',
    '/assets/TeamsSectionImages/Divyanshu Devashish.jpg',
    '/assets/TeamsSectionImages/Ravi Kumar Meena.jpeg',
    '/assets/TeamsSectionImages/Jaya Kedia.jpg',
    '/assets/TeamsSectionImages/Anupam Shukla.jpg',
    '/assets/TeamsSectionImages/Vaibhav Gupta.jpg',
    '/assets/TeamsSectionImages/Harshit Anand.jpg',
    '/assets/TeamsSectionImages/Anshu Kumar.jpg',
    '/assets/TeamsSectionImages/Utkarsh Kumar.jpg',
    '/assets/TeamsSectionImages/Aditya Chandel.jpg',
    '/assets/TeamsSectionImages/Aditya Kumar.jpg',
    '/assets/TeamsSectionImages/Khelan Kumar.jpg',
    '/assets/TeamsSectionImages/Aryan Sinha.jpg',
    '/assets/TeamsSectionImages/Rakshit Sawhney.jpg',
    '/assets/TeamsSectionImages/Ayush Singh.jpg'
  ]
];
const Designation = [
  ['Convener', 'General Secretary', 'Co-Convener', 'Joint Gen Secy', 'Joint Gen Secy', 'Joint Gen Secy', 'Tech Secy', 'Tech Secy', 'Cult Secy', 'Cult Secy', 'Sports Secy', 'Sports Secy', 'Web Head', 'Web Head', 'Marketing Head', 'PR Head', 'External Affairs Head', 'External Affairs Head'],
  ['Senior web advisor', 'Senior Advisor External Affairs', 'Senior Advisor', 'Senior Advisor (Design)', 'Senior Tech Advisor', 'Senior Tech Advisor', 'Senior Advisor', 'Senior Advisor (Content and Creative)', 'Senior Adivisor (Public Relations)'],
  ['Web Head', 'Web Head', 'Web Coordinator', 'Web Coordinator', 'Web Coordinator', 'Web Coordinator', 'Web Coordinator', 'Web Coordinator', 'Web Coordinator', 'Web Coordinator', 'Web Coordinator', 'Web Coordinator', 'Web Coordinator', 'Web Coordinator', 'Web Coordinator', 'Web Coordinator', 'Web Coordinator'],
  ['Head', 'Coordinator', 'Coordinator', 'Coordinator', 'Co-Coordinator', 'Co-Cordinator', 'Co-Cordinator', 'Co-Cordinator', 'Co-Cordinator', 'Co-Cordinator'],
  ['Content Head', 'Coordinator', 'Coordinator', 'Coordinator', 'Co-Coordinator', 'Co-Coordinator', 'Co-Coordinator', 'Co-Coordinator', 'Co-Coordinator', 'Co-Coordinator', 'Co-Coordinator', 'Co-Coordinator'],
  [
    'Marketing Head',
    'Coordinator',
    'Coordinator',
    'Coordinator',
    'Co-Coordinator',
    'Co-Coordinator',
    'Co-Coordinator',
    'Co-Coordinator',
    'Co-Coordinator',
    'Co-Coordinator',
    'Co-Coordinator',
    'Co-Coordinator',
    'Co-Coordinator',
    'Co-Coordinator',
    'Co-Coordinator',
    'Co-Coordinator',
    'Co-Coordinator',
    'Co-Coordinator',
    'Co-Coordinator',
    'Co-Coordinator',
    'Co-Coordinator',
    'Co-Coordinator',
    'Co-Coordinator',
    'Co-Coordinator'
  ],
  ['Head', 'Head', 'Coordinator', 'Coordinator', 'Coordinator', 'Co-Coordinator', 'Co-Coordinator', 'Co-Coordinator', 'Co-Coordinator', 'Co-Coordinator', 'Co-Coordinator', 'Co-Coordinator', 'Co-Coordinator', 'Co-Coordinator'],
  ['Head', 'Coordinator', 'Co-Coordinator', 'Co-Coordinator', 'Co-Coordinator', 'Co-Coordinator', 'Co-Coordinator', 'Co-Coordinator', 'Co-Coordinator', 'Co-Coordinator', 'Co-Coordinator', 'Co-Coordinator', 'Co-Coordinator', 'Co-Coordinator', 'Co-Coordinator', 'Co-Coordinator', 'Co-Coordinator']
];
const TeamMemberDetails = [
  ['Fourth Yearite', 'Fourth Yearite', 'Third Yearite', 'Third Yearite', 'Third Yearite', 'Third Yearite', 'Third Yearite', 'Third Yearite', 'Third Yearite', 'Third Yearite', 'Third Yearite', 'Third Yearite', 'Third Yearite', 'Third Yearite', 'Third Yearite', 'Third Yearite', 'Third Yearite', 'Third Yearite'],
  ['Fourth Yearite', 'Fourth Yearite', 'Fourth Yearite', 'Fourth Yearite', 'Fourth Yearite', 'Fourth Yearite', 'Fourth Yearite', 'Fourth Yearite', 'Fourth Yearite'],
  ['Third Yearite', 'Third Yearite', 'Second Yearite', 'Second Yearite', 'Second Yearite', 'Second Yearite', 'Second Yearite', 'Second Yearite', 'Second Yearite', 'Second Yearite', 'Second Yearite', 'Second Yearite', 'Second Yearite', 'Second Yearite', 'Second Yearite', 'Second Yearite', 'Second Yearite'],
  ['Third Yearite', 'Third Yearite', 'Third Yearite', 'Third Yearite', 'Second Yearite', 'Second Yearite', 'Second Yearite', 'Second Yearite', 'Second Yearite', 'Second Yearite'],
  ['Third Yearite', 'Third Yearite', 'Third Yearite', 'Third Yearite', 'Second Yearite', 'Second Yearite', 'Second Yearite', 'Second Yearite', 'Second Yearite', 'Second Yearite', 'Second Yearite', 'Second Yearite'],
  [
    'Third Yearite',
    'Third Yearite',
    'Third Yearite',
    'Third Yearite',
    'Second Yearite',
    'Second Yearite',
    'Second Yearite',
    'Second Yearite',
    'Second Yearite',
    'Second Yearite',
    'Second Yearite',
    'Second Yearite',
    'Second Yearite',
    'Second Yearite',
    'Second Yearite',
    'Second Yearite',
    'Second Yearite',
    'Second Yearite',
    'Second Yearite',
    'Second Yearite',
    'Second Yearite',
    'Second Yearite',
    'Second Yearite',
    'Second Yearite'
  ],
  ['Third Yearite', 'Third Yearite', 'Third Yearite', 'Third Yearite', 'Third Yearite', 'Second Yearite', 'Second Yearite', 'Second Yearite', 'Second Yearite', 'Second Yearite', 'Second Yearite', 'Second Yearite', 'Second Yearite', 'Second Yearite'],
  ['Third Yearite', 'Third Yearite', 'Second Yearite', 'Second Yearite', 'Second Yearite', 'Second Yearite', 'Second Yearite', 'Second Yearite', 'Second Yearite', 'Second Yearite', 'Second Yearite', 'Second Yearite', 'Second Yearite', 'Second Yearite', 'Second Yearite', 'Second Yearite', 'Second Yearite']
];
const ContactMail = [
  [
    'akshat.rajkumarjain.ece19@itbhu.ac.in',
    'pranav.mittal.ece19@itbhu.ac.in',
    'bisesh.agarwal.ece20@itbhu.ac.in',
    'atharva.bhatt.ece20@itbhu.ac.in',
    'mayank.singh.ece20@itbhu.ac.in',
    'sarang.manerikar.ece20@itbhu.ac.in',
    'shivansh.dubey.ece20@itbhu.ac.in',
    'suhani.agrawal.ece20@itbhu.ac.in',
    'raghav.agrawal.cd.ece20@itbhu.ac.in',
    'suryansh.singh.cd.ece20@itbhu.ac.in',
    'akshit.singla.ece20@itbhu.ac.in',
    'bemera.ayush.ece20@itbhu.ac.in',
    'ankur.agrawal.ece20@itbhu.ac.in',
    'raina.jain.ece20@itbhu.ac.in',
    'nishanth.gounder.ece20@itbhu.ac.in',
    'avinash.singh.ece20@itbhu.ac.in',
    'ayushi.gupta.ece20@itbhu.ac.in',
    'ankit.student.ece20@itbhu.ac.in'
  ],
  ['yash.jain.ece19@itbhu.ac.in', 'vikash.prajapati.ece19@itbhu.ac.in', 'vikhyath.pvenkatraman.ece19@itbhu.ac.in', 'siddharth.asrivastav.ece19@itbhu.ac.in', 'eshaangupta1708@gmail.com', 'smriti.sharma.ece19@itbhu.ac.in', 'prajakta.priyadarsini.ece19@itbhu.ac.in', 'nisitha.vallamdasu.ece19@itbhu.ac.in', 'princekumar.gond.ece19@itbhu.ac.in'],
  [
    'ankur.agrawal.ece20@itbhu.ac.in',
    'raina.jain.ece20@itbhu.ac.in',
    'akash.kumar.ece21@itbhu.ac.in',
    'avnesh.kumar.ece21@itbhu.ac.in',
    'kumar.sonu.ece21@itbhu.ac.in',
    'dhruv.chaudhary.ece21@itbhu.ac.in',
    'anant.jain.ece21@itbhu.ac.in',
    'md.athar.ece21@itbhu.ac.in',
    'shubham.jaiswal.ece21@itbhu.ac.in',
    'ashish.kumar.ece21@itbhu.ac.in',
    'nikhil.agarwal.ece21@itbhu.ac.in',
    'archit.pattanaik.ece21@itbhu.ac.in',
    'harshit.swarnkar.ece21@itbhu.ac.in',
    'nikhil.aggarwa.ece21@itbhu.ac.in',
    'samarth.stankasali.ece21@itbhu.ac.in',
    'samarsingh.randhawa.ece21@itbhu.ac.in',
    ''
  ],
  ['dtanuja.vasamsetty.ece20@itbhu.ac.in', 'korivi.vedharshini.ece20@itbhu.ac.in', 'riya.saini.ece20@itbhu.ac.in', 'kalpit.adhao.ece20@itbhu.ac.in', 'shivam.gupta.ece21@itbhu.ac.in', 'aditya.mishra.ece21@itbhu.ac.in', 'jas9noor@gmail.com', 'snilesh.ganesh.ece21@itbhu.ac.in', 'md.athar.ece21@itbhu.ac.in', 'niharika.singh.ece21@itbhu.ac.in'],
  [
    'shubhi.singh.ece20@itbhu.ac.in',
    'archit.soni.ece20@itbhu.ac.in',
    'pratishtha.dhiraj.ece20@itbhu.ac.in',
    'potnuru.vkrishnapriya.ece20@itbhu.ac.in',
    'starun.siddharth.ece21@itbhu.ac.in',
    'sakshi.tomar.ece21@itbhu.ac.in',
    'anusha.mahajan.ece21@itbhu.ac.in',
    'ritesh.lakra.ece21@itbhu.ac.in',
    'dharmesh.mahajan.ece21@itbhu.ac.in',
    'sbrajesh.gupta.ece21@itbhu.ac.in',
    'avani.jangid.cd.ece21@itbhu.ac.in',
    'saket.kumarsingh.ece21@itbhu.ac.in'
  ],
  [
    'nishanth.gounder.ece20@itbhu.ac.in',
    'pushpam.berlia.ece20@itbhu.ac.in',
    'harsh.singh.ece20@itbhu.ac.in',
    'deependra.singh.ece20@itbhu.ac.in',
    'abhishek.ukumar.ece21@itbhu.ac.in',
    'majjiga.deepaksai.ece21@itbhu.ac.in',
    'sachin.kumar.ece21@itbhu.ac.in',
    'umang.garg.ece21@itbhu.ac.in',
    'tarunkumar.painkra.ece21@itbhu.ac.in',
    'divyansh.jain.ece21@itbhu.ac.in',
    'abhishek.kumar.ece21@itbhu.ac.in',
    'rishav.kumar.cd.ece21@itbhu.ac.in',
    'konam.harshitha.ece21@itbhu.ac.in',
    'suraj.gaur.ece21@itbhu.ac.in',
    'jarpulaajay.nayak.ece21@itbhu.ac.in',
    'ipil.besra.ece21@itbhu.ac.in',
    'vedansh.arya.ece21@itbhu.ac.in',
    'dhruv.sharma.ece21@itbhu.ac.in',
    'mitra.pidaparti.ece21@itbhu.ac.in',
    'ayush.harshit.ece21@itbhu.ac.in',
    'gargi.nigam.ece21@itbhu.ac.in',
    'simarpreet.singh.ece21@itbhu.ac.in',
    'mauli.gupta.cd.ece21@itbhu.ac.in',
    'ashutosh.awasthi.ece21@itbhu.ac.in'
  ],
  [
    'ayushi.gupta.ece20@itbhu.ac.in',
    'ankit.student.ece20@itbhu.ac.in',
    'shreyansh.jain.ece20@itbhu.ac.in',
    'shubhamk.ece20@itbhu.ac.in',
    'mohit.singh.cd.ece20@itbhu.ac.in',
    'riya.chauhan.ece21@itbhu.ac.in',
    'amit.kumar.ece21@itbhu.ac.in',
    'harsh.kumar.ece21@itbhu.ac.in',
    'anshu.soni.ece21@iitbhu.ac.in',
    'shivam.raj.ece21@itbhu.ac.in',
    'harsh.saini.ece21@itbhu.ac.in',
    'shivom.student.ece21@itbhu.ac.in',
    'vaatsalya.sinha.ece21@itbhu.ac.in',
    'rajat.shukla.ece21@itbhu.ac.in'
  ],
  [
    'avinash.singh.ece20@itbhu.ac.in',
    'bhavna.student.ece20@itbhu.ac.in',
    'priyanshu.student.ece21@itbhu.ac.in',
    'divyanshu.student.ece21@itbhu.ac.in',
    'ravikumar.meena.ece21@itbhu.ac.in',
    'jaya.kedia.cd.ece21@itbhu.ac.in',
    'anupam.shukla.ece21@itbhu.ac.in',
    'vaibhav.gupta.ece21@itbhu.ac.in',
    'harshit.anand.ece21@itbhu.ac.in',
    'anshu.kumar.ece21@itbhu.ac.in',
    'utkarsh.kumar.ece21@itbhu.ac.in',
    'aditya.chandel.ece21@itbhu.ac.in',
    'aditya.kumar.ece21@itbhu.ac.in',
    'mkhelank.hasmukhbhai.ece21@itbhu.ac.in',
    'aryan.sinha.ece21@itbhu.ac.in',
    'rakshit.sawhney.ece21@itbhu.ac.in',
    'ayush.singh.ece21@it.bhu.ac.in'
  ]
];
const ContactInstagram = [
  [
    '',
    'https://www.instagram.com/pranav_2x1/',
    'https://instagram.com/dynamic_agarwal?igshid=ZDdkNTZiNTM=',
    'https://instagram.com/bhattatharva?igshid=ZDdkNTZiNTM=',
    'https://instagram.com/mayank_s_ingh_',
    'https://www.instagram.com/',
    'https://www.instagram.com/shivansh_d_/',
    'https://www.instagram.com/suhanii_97/?igshid=ZDdkNTZiNTM%3D',
    'https://www.instagram.com/ag_raghav26/',
    'https://instagram.com/_surya__ss?igshid=ZDdkNTZiNTM=',
    'https://www.instagram.com/akshit._.singla/',
    '',
    'https://instagram.com/ankuragrawal9455?igshid=ZDdkNTZiNTM=',
    'https://www.instagram.com/raina_jainn/',
    'https://www.instagram.com/nishu_07.02/',
    'http://www.instagram.com/avinash.singh___',
    'https://instagram.com/ayushigupta400?igshid=ZDdkNTZiNTM=',
    'https://instagram.com/ank.it7410?igshid=ZDdkNTZiNTM='
  ],
  [
    'https://instagram.com/yashjain484?igshid=ZDdkNTZiNTM=',
    'https://instagram.com/vikash_0307?igshid=ZDdkNTZiNTM=',
    'https://instagram.com/obstinately_awesome/',
    'https://instagram.com/_siddharth__101?igshid=MWI4MTIyMDE=',
    'https://instagram.com/this.is.eshaan?igshid=ZDdkNTZiNTM=',
    'https://www.instagram.com/_.simi_06',
    'https://instagram.com/_._minniee.__?igshid=YmMyMTA2M2Y=',
    'https://instagram.com/nisitha_565?igshid=ZDdkNTZiNTM=',
    'https://instagram.com/_prince_0911?igshid=ZDdkNTZiNTM='
  ],
  [
    'https://instagram.com/ankuragrawal9455?igshid=ZDdkNTZiNTM=',
    'https://www.instagram.com/raina_jainn/',
    'https://instagram.com/akash_kourav03?igshid=ZDdkNTZiNTM=',
    'https://instagram.com/avnesh141?igshid=ZDdkNTZiNTM=',
    'https://www.instagram.com/k_sonu6091/',
    'https://www.instagram.com/dhruv_chaudhary_1380/',
    'https://www.instagram.com/anant_jain_01/',
    'https://www.instagram.com/mdathar44__/',
    'https://www.instagram.com/shubham_jai.swal/',
    'https://www.instagram.com/ashish_7515/?next=%2F',
    'https://www.instagram.com/nik__agarwal12/',
    'https://www.instagram.com/architpattanaik2/',
    'https://www.instagram.com/rew__06/',
    'https://www.instagram.com/nikhilaggarwal.__',
    'https://instagram.com/_.cat.junkie._?igshid=ZDdkNTZiNTM=',
    'https://www.instagram.com/randhawasamarsingh/',
    'https://www.instagram.com/mamaleshhake/'
  ],
  [
    'https://instagram.com/tanuja_winniee?igshid=ZDdkNTZiNTM=',
    'https://instagram.com/vedharshinikorivi?igshid=ZDdkNTZiNTM=',
    'https://instagram.com/r.i.y.a_s.a.i.n.i?igshid=ZDdkNTZiNTM=',
    'https://instagram.com/kalpit_adhao?igshid=ZDdkNTZiNTM=',
    'https://instagram.com/shivam.gupta.100?igshid=ZDdkNTZiNTM=',
    'https://instagram.com/iaditya1441?igshid=ZDdkNTZiNTM=',
    'https://www.instagram.com/jasnoor_jumber/?utm_source=qr',
    'https://www.instagram.com/nileshk2113/',
    'https://www.instagram.com/mdathar44__/',
    'https://www.instagram.com/niharika_singh_3620/'
  ],
  [
    '',
    'https://www.instagram.com/archit_soni3/',
    'https://instagram.com/pratishtha_dhiraj_?igshid=ZDdkNTZiNTM=',
    'https://www.instagram.com/krishnapriya_213?r=nametag',
    'https://instagram.com/starun_siddharth?igshid=NTdlMDg3MTY=',
    'https://instagram.com/sksh.06?igshid=ZDdkNTZiNTM=',
    'http://instagram.com/anusha_mahajan4',
    'https://www.instagram.com/riteshlakra270419/',
    'https://instagram.com/dharmeshmahajan_',
    'https://www.instagram.com/gigamiles/',
    'https://instagram.com/theavanijangid?igshid=ZDdkNTZiNTM=',
    'https://instagram.com/saketkr02?igshid=ZDdkNTZiNTM='
  ],
  [
    'https://www.instagram.com/nishu_07.02/',
    'https://instagram.com/pushpamberlia?igshid=ZDdkNTZiNTM=',
    'https://www.instagram.com/singh_harsh1608/',
    'https://www.instagram.com/deependrasingh1037/',
    'https://instagram.com/abhishek_47146?igshid=ZDdkNTZiNTM=',
    'https://instagram.com/deepaksai.majjiga?igshid=ZDdkNTZiNTM=',
    'https://www.instagram.com/sachin_07_jnv/',
    'https://instagram.com/umanggarg41?igshid=YmMyMTA2M2Y=',
    'https://instagram.com/tarun9be6?igshid=YmMyMTA2M2Y=',
    'https://www.instagram.com/divyansh_jain_777/',
    'https://instagram.com/abvbhi?igshid=YmMyMTA2M2Y=',
    'https://www.instagram.com/its_rishavrajput/',
    'https://www.instagram.com/harshitha_konam/',
    'https://instagram.com/_suraj_1902?igshid=YmMyMTA2M2Y=',
    'https://instagram.com/ajaynayakkool?igshid=ZDdkNTZiNTM=',
    'https://instagram.com/ipilbesra?igshid=ZDdkNTZiNTM=',
    'https://www.instagram.com/vedxnsh___/',
    'http://instagram.com/dhruv30sharma13/',
    '',
    'https://instagram.com/ayushharshit999?igshid=ZDdkNTZiNTM=',
    'https://www.instagram.com/gargi.nigam2107/',
    'https://www.instagram.com/simar.xxi/',
    'https://www.instagram.com/invites/contact/?i=tig3qdvl3mtl&utm_content=msl8hmi',
    'https://www.instagram.com/awasthiashutosh16/'
  ],
  [
    'https://instagram.com/ayushigupta400?igshid=ZDdkNTZiNTM=',
    'https://instagram.com/ank.it7410?igshid=ZDdkNTZiNTM=',
    'https://instagram.com/shreyanssshhh?igshid=ZDdkNTZiNTM=',
    'https://www.instagram.com/ig_kshubham/',
    'https://www.instagram.com/01_mohit_02/',
    'https://www.instagram.com/_riyachauhan_09/',
    'https://instagram.com/1310amit21?igshid=ZDdkNTZiNTM=',
    'https://www.instagram.com/_harsh.1510_/',
    'https://www.instagram.com/',
    'https://instagram.com/shivamraj0812?igshid=ZDdkNTZiNTM=',
    'https://instagram.com/sainiharsh2908?igshid=MDE2OWE1N2Q=',
    'https://instagram.com/shivom6516?igshid=ZDdkNTZiNTM=',
    'https://www.instagram.com/vaatsalya_sinha/',
    'https://www.instagram.com/apu.7.7/?next=%2F'
  ],
  [
    'http://www.instagram.com/avinash.singh___',
    'https://instagram.com/i.am.high_?igshid=ZDdkNTZiNTM=',
    'instagram.com/messy.medulla',
    'https://instagram.com/divyanshudevashish007?igshid=ZDdkNTZiNTM=',
    'https://www.instagram.com/ravi_kumar.5/',
    'https://instagram.com/__.jaya.__1?igshid=YmMyMTA2M2Y=',
    'https://instagram.com/inikhil.shukla?igshid=ZDdkNTZiNTM=',
    'instagram.com/vaibhav_gupta00/',
    'https://instagram.com/harshitanand543?igshid=ZDdkNTZiNTM=',
    'https://instagram.com/anshukumar613?igshid=ZDdkNTZiNTM=',
    'https://instagram.com/utkarshkumar83958?igshid=ZDdkNTZiNTM=',
    'https://instagram.com/chande6526?igshid=ZDdkNTZiNTM=',
    'https://instagram.com/aadix__12?igshid=ZDdkNTZiNTM=',
    'https://www.instagram.com/kp_obviouslyop/',
    'https://instagram.com/sinha_aryan15?igshid=ZDdkNTZiNTM=',
    'http://instagram.com/rakshit_sawhney',
    'https://instagram.com/ayushsingh19002277?igshid=ZDdkNTZiNTM='
  ]
];
const ContactLinkedIn = [
  [
    '',
    'https://www.linkedin.com/in/pranav-mittal-4b15a0195',
    'https://www.linkedin.com/in/bisesh-agarwal-9779a01b7',
    'https://www.linkedin.com/in/atharva-bhatt-199665156',
    'https://www.linkedin.com/in/mayank-singh-1a5791204',
    'https://www.linkedin.com/in/sarang-manerikar/',
    'https://www.linkedin.com/in/shivansh-dubey-032916213/',
    'https://www.linkedin.com/in/suhani-agrawal-4030861bb/',
    'https://www.linkedin.com/in/ag-raghav26/',
    'https://www.linkedin.com/in/suryansh-singh-5b89461bb',
    'https://www.linkedin.com/in/akshit-singla-91b0aa220/',
    '',
    'https://www.linkedin.com/in/ankuragrawaldev',
    'https://www.linkedin.com/in/raina-jain-6b4b68143/',
    'https://www.linkedin.com/in/nishanth-gounder-15477a224/',
    'https://www.linkedin.com/in/avinash-singh-a03b86224',
    'https://www.linkedin.com/in/ayushi-gupta-125082212',
    'https://www.linkedin.com/in/ankit-kumar-252ab7222'
  ],
  [
    'https://www.linkedin.com/in/yash-jain-780332208',
    'https://www.linkedin.com/in/vikash-prajapati-a82ba01b0',
    'https://www.linkedin.com/in/vikhyath-venkatraman',
    'https://www.linkedin.com/in/anandsidd',
    'https://www.linkedin.com/in/eshaan-gupta-6b5b081b2',
    'https://www.linkedin.com/in/smriti06',
    'https://www.linkedin.com/in/prajakta-priyadarsini-3a83751ba',
    'https://www.linkedin.com/in/nisitha-vallamdasu-1170671a0',
    'https://www.linkedin.com/in/prince-kumar-gond-3b22b81b2'
  ],
  [
    'https://www.linkedin.com/in/ankuragrawaldev',
    'https://www.linkedin.com/in/raina-jain-6b4b68143/',
    'https://www.linkedin.com/in/akash-kumar-371439246',
    'https://www.linkedin.com/in/avnesh-kumar-08b549230',
    'https://www.linkedin.com/in/kumar-sonu-453a23229',
    'https://www.linkedin.com/in/dhruv-chaudhary-4b6179233',
    'https://www.linkedin.com/in/anant-jain-8255a022b/',
    'https://www.linkedin.com/in/md-athar4403/',
    'https://www.linkedin.com/in/shubham-jaiswal-ece/',
    'https://www.linkedin.com/in/ashis7515/',
    'https://www.linkedin.com/in/nikhil-agarwal-2a3a8222b/',
    'https://www.linkedin.com/in/archit-pattanaik-486793230/',
    'https://www.linkedin.com/in/harshit-swarnkar-4a1890216/',
    'https://www.linkedin.com/in/nikhil-aggarwal-92819b235/',
    'https://www.linkedin.com/in/samarth-tankasali-16a20a235',
    'https://www.linkedin.com/in/samar-singh-randhawa-824377230/',
    'https://www.linkedin.com/in/mamalesh-hake-141872228'
  ],
  [
    'https://www.linkedin.com/in/devi-tanuja-vasamsetty-34b811218',
    'https://www.linkedin.com/in/vedharshini-korivi-060317224',
    'https://www.linkedin.com/in/riya-saini-ba7928229',
    'https://www.linkedin.com/in/kalpit-adhao-6a4a25206',
    'https://www.linkedin.com/in/shivam-gupta-4770a4230',
    'https://www.linkedin.com/in/aditya-mishra-8064481b8',
    'https://www.linkedin.com/in/jasnoor-sandhu-a6184021a/?originalSubdomain=in',
    'https://www.linkedin.com/in/sangle-nilesh-ganesh-4-year-b-tech-electronics-engineering-900377230/',
    'http://www.linkedin.com/in/md-athar4403',
    'https://www.linkedin.com/in/niharika-singh-947330243/'
  ],
  [
    'https://www.linkedin.com/in/shubhi-singh-b13aba220',
    'https://www.linkedin.com/in/archit-soni/',
    'https://www.linkedin.com/in/pratishtha-dhiraj-113754215',
    'https://www.linkedin.com/in/krishna-priya-p-1966b8224',
    'https://www.linkedin.com/in/tarun-siddharth-46a126235',
    'https://www.linkedin.com/in/sakshi-tomar-376581230',
    'https://www.linkedin.com/in/anusha-mahajan-136771194',
    'https://www.linkedin.com/in/ritesh-lakra-8128b7242?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BzAPoo0mUQryReB%2FNZkis4Q%3D%3D',
    'https://www.linkedin.com/in/dharmesh-mahajan-23574a223',
    'https://www.linkedin.com/in/shrirang-gupta-887383263/',
    'https://www.linkedin.com/in/avani-jangid-307564229',
    'https://www.linkedin.com/in/saket-kumar-singh-b35b39222'
  ],
  [
    'https://www.linkedin.com/in/nishanth-gounder-15477a224/',
    'https://www.linkedin.com/in/pushpam-berlia-89867b224',
    'https://www.linkedin.com/in/harsh-singh-952a42217/',
    'https://www.linkedin.com/in/deependra-singh-41943715a',
    'https://www.linkedin.com/in/abhishek-kumar-433300237',
    'https://www.linkedin.com/in/majjiga-deepak-sai-12b450230',
    'https://www.linkedin.com/in/sachin-kumar-9b128325a',
    'https://www.linkedin.com/in/umang-garg-8b30aa230',
    'https://www.linkedin.com/in/tarun-kumar-painkra-965535243',
    'https://www.linkedin.com/in/divyansh-jain-790468230/',
    'https://www.linkedin.com/in/abhishek-kumar-976578230',
    'https://www.linkedin.com/mwlite/in/rishav-kumar-a48a721b1',
    'https://www.linkedin.com/in/harshitha-konam-496118239/',
    'https://www.linkedin.com/in/suraj-gaur-22352a223',
    'http://linkedin.com/in/j-ajay-nayak-3a19a8230',
    'https://www.linkedin.com/in/ipil-besra-a42285230',
    'https://www.linkedin.com/in/vedansh-arya-1aa582230/',
    'http://www.linkedin.com/in/dhruv-sharma-84ba5b241',
    'http://www.linkedin.com/in/mitra-pidaparti-51191b256',
    'https://www.linkedin.com/in/ayush-harshit-4-year-b-tech-electronics-engineering-562460230',
    'https://www.linkedin.com/in/gargi-nigam-556569223/',
    'http://linkedin.com/in/simarpreet-singh-623312230',
    'https://www.linkedin.com/in/mauli-gupta-b44825227',
    'https://www.linkedin.com/in/ashutosh-awasthi-520240226/'
  ],
  [
    'https://www.linkedin.com/in/ayushi-gupta-125082212',
    'https://www.linkedin.com/in/ankit-kumar-252ab7222',
    'https://www.linkedin.com/in/shreyansh-jain-964357227',
    'https://www.linkedin.com/in/kshubham01/',
    'https://www.linkedin.com/in/mohit-singh-8a4628208/',
    'https://www.linkedin.com/in/riya-chauhan-867592230/',
    'https://www.linkedin.com/in/amit-kumar-4-year-b-tech-electronics-engineering-a02508230',
    'https://www.linkedin.com/mwlite/in/harsh-kumar-ba799925b',
    'https://www.linkedin.com/in/anshu-soni-3975a0229',
    'https://www.linkedin.com/in/shivam-raj-892233243',
    'https://www.linkedin.com/in/harsh-saini-092353230/',
    'https://www.linkedin.com/in/shivom-387607224',
    'https://www.linkedin.com/in/ vaatsalya-sinha-4-year-b-tech-electronics-engineering-887752263',
    'https://www.linkedin.com/in/rajat-shukla-9a0534230'
  ],
  [
    'https://www.linkedin.com/in/avinash-singh-a03b86224',
    'https://www.linkedin.com/in/bhavna-chavan',
    'https://www.linkedin.com/mwlite/in/paloxzz',
    'https://www.linkedin.com/in/divyanshu-devashish-186579230',
    'https://www.linkedin.com/in/ravi-kumar-meena-868150245/',
    'https://www.linkedin.com/in/jaya-kedia-4b6805235',
    'https://www.linkedin.com/in/anupam-shukla-888315257',
    'https://www.linkedin.com/in/vaibhav-gupta-53b0bb227',
    'https://www.linkedin.com/in/harshit-anand-5856b4239',
    'https://www.linkedin.com/in/anshu-k-0425b5227',
    'https://www.linkedin.com/in/utkarsh-kumar-4-year-b-tech-electronics-engineering-6b2564230',
    'https://www.linkedin.com/in/aditya-chandel-4-year-b-tech-electronics-engineering-874a3425b',
    'https://www.linkedin.com/in/aditya-kumar-a445a0223',
    'https://www.linkedin.com/in/khelan-mendapara-11736b223',
    'https://www.linkedin.com/in/aryan-sinha-24964022b?fbclid=PAAaYEWPAvdmJcz-A388x9mgSx65S5PVr7DhvkIkuikYL_sb-u7j2DRwoUfjA',
    'https://www.linkedin.com/in/rakshitsawhney',
    'https://www.linkedin.com/in/ayush-singh-b80573200'
  ]
];
export { TeamMemberName, TeamDomain, Designation, TeamMemberDetails, ContactMail, ContactInstagram, ContactLinkedIn, MemberImage };
