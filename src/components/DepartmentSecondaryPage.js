import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import '../styles/DepartmentSecondaryPage.css';
let selectedTeacherInfo = null;
const DepartmentSecondaryPage = ({ language, onBack, departmentName, setCurrentPage }) => {
    const handleViewTeacherProfile = (member) => {
        selectedTeacherInfo = member;
        if (setCurrentPage) {
            setCurrentPage('teacher-profile');
        }
    };
    const mathematicsIntroParagraphs = [
        'Department of Mathematics, Pt. L. M. S. Campus, Sri Dev Suman Uttarakhand University, Rishikesh.',
        'The Department of Mathematics, Pt. L. M. S. Campus, Sri Dev Suman Uttarakhand University, Rishikesh, has consistently upheld its tradition of academic excellence, research innovation, and meaningful societal engagement. Offering undergraduate (B.Sc./B.A.), postgraduate (M.Sc./M.A.), and doctoral (Ph.D.) programs, the Department emphasizes strong theoretical foundations, applied mathematics, interdisciplinary research, and curricula aligned with the National Education Policy (NEP) 2020.',
        'Under the dynamic leadership of Prof. Anita Tomar (Head of Department), the Department has made significant contributions in Nonlinear Functional Analysis, Fixed Point Theory, Fractals, Mathematical Modelling, Fuzzy Sets, Computational Mathematics, Optimization Technique and Artificial Intelligence, as reflected in 170 publications in SCI/Scopus/WoS/UGC-CARE journals, 40 authored books, and three edited volumes. Faculty members actively contribute as invited speakers, editors, reviewers, chairpersons, subject experts, members of Boards of Governance, and curriculum developers at state, national, and international levels.',
        'In 2025, the Department achieved notable research milestones, with 23 research papers selected under the Chief Minister Excellent Research Paper Publication Incentive Scheme, one research project under the Chief Minister Research Encouragement Scheme, and significant innovation outcomes, including four design patents granted and two published.',
        'Faculty research excellence has received wide recognition through prestigious honors such as the Best Project Award (Advanced Refresher Course in Mathematics, IISc Bengaluru Challakere Campus, 2025), the Distinguished Service Award by the Vijnana Parishad of India (2025), the Devbhumi Education Excellence Award (2025), the Excellence in Research Award (UCOST, 2023), the Chief Minister Excellence and Good Governance Award (2020-21), the Women Scientist Award (UCOST, 2021), and the Teacher of the Year Award (2020).',
        'With sustained academic rigor, the Department has strengthened its academic visibility and global outreach through international collaborations, including an MoU with Southern Federal University, Russia, and academic collaborations with eminent scholars from Japan, Romania, Serbia, Turkey, Nepal, Saudi Arabia, and IITs. It has successfully organized over 20 international conferences, faculty development programmes, seminars, guest lectures, Mathematics Week celebrations, outreach activities, and entrepreneurship initiatives, fostering a vibrant academic and research ecosystem. Students are actively engaged in project-based learning, including innovative projects on Ancient Indian Mathematics and Artificial Intelligence, promoting experiential and interdisciplinary learning.',
        'With a dedicated team of experienced faculty, Prof. Anita Tomar, Prof. Dipa Sharma, Dr. Gaurav Varshney, and Dr. Pawan Joshi, along with 13 active research scholars, robust ICT integration, consistently excellent academic results, and notable student achievements in competitive examinations and public and private-sector selections, the Department continues to play a pivotal role in advancing the University mission of quality education, research excellence, and holistic student development.'
    ];
    const microbiologyIntroParagraphs = [
        'Sri Dev Suman Uttarakhand University, Pt. L.M.S. Campus, Rishikesh - Department of Microbiology.',
        'Established in 2023 as part of Sri Dev Suman Uttarakhand University, the Department of Microbiology at Pt. L.M.S. Campus, Rishikesh is dedicated to delivering high-quality education and training in M.Sc. Microbiology. With a focus on practical skills and industry relevance, the department equips students for careers in clinical/medical, food, biotechnology, industrial, agriculture, and research sectors.',
        'As a newly established department, Microbiology shares the well-equipped and established building of the MLT (Medical Laboratory Technology) Department. The infrastructure supports immersive learning with spacious classrooms, laboratories for hands-on experiments, a dedicated seminar room for lectures and discussions, a library, and computer systems with high-speed internet.',
        'Students have access to key instruments for microbiological studies, including autoclave, laminar air flow, microscope, incubator, centrifuge, vortex, hot-plate, Soxhlet apparatus, double distillation apparatus, gel electrophoresis, and colorimeter. These facilities support work in bacteriology, food microbiology, immunology, soil microbiology, medical microbiology, microbial biotechnology, and biochemistry.',
        'The department is supported by a skilled team: Dr. G.K. Dhingra (Coordinator), Dr. Bindu Devi (Guest Faculty - Microbiology), Mrs. Shalini Kotiyal (Guest Faculty - Microbiology), Mr. Arjun Palwal (Guest Faculty - Biochemistry and Genetic Engineering), Ms. Safia Hasan (Guest Faculty - Immunology and Pathology), and Mr. Devendra Bhatt (Lab Technician).',
        'The department has shown steady enrollment growth. The first batch (15 students) passed out in July 2025, with placements at AIIMS Rishikesh (Rishita Nautiyal, Ananya Deshwal, and Shubham as Project Assistants), Hans Foundation (Vineeta), Akums Drugs and Pharmaceutical Pvt. Ltd. (Amisha Pal and Shivani), and Psychotropics India Limited Pharmaceutical (Priyanka Aswal). The second batch has 13 students and the third batch has 20 students. Regular hospital and industrial visits enhance practical exposure and career readiness.'
    ];
    const musicIntroParagraphs = [
        'The Department of Music at Pt. Lalit Mohan Sharma Campus, Rishikesh, is a dynamic and creative part of the university. Its core goal is to help students understand the science of music and grow artistically and culturally.',
        'The department offers courses from Graduation up to Ph.D. level. Currently, around 150 students are studying music across various programs. At postgraduate level, the department offers M.A. in Music with specialization in Classical Music Vocal. At undergraduate level, under NEP, Music is offered as Major, Minor, Skill, and General Elective (GE). In research, the department currently has 3 registered Ph.D. scholars.',
        'The department is led by Dr. Shikha Mamgain (Head of Department). Despite a single-faculty structure, the department remains fully dedicated to the overall educational and cultural development of students.',
        'Music follows a multi-subject approach where students from Science and Commerce also opt for Music as a Skill or Elective subject. The department also plays a leading role in organizing university cultural events and national festivals.',
        'Students actively participate in university and external competitions. This year, Music students won the Winner Trophy in the Inter-Collegiate competition of Sri Dev Suman Uttarakhand University and also performed strongly at Inter-University level, bringing pride to the institution.'
    ];
    const politicalScienceIntroParagraphs = [
        'Department of Political Science, Sri Dev Suman Uttarakhand University, Pt. Lalit Mohan Sharma Campus, Rishikesh.',
        'Politics is one of the most socially meaningful disciplines and the study of Political Science helps students understand governance, public life, and solutions to contemporary issues. The subject opens diverse opportunities in civil services, law, journalism, media, entrepreneurship, teaching, and research.',
        'The Department offers B.A., M.A., and Ph.D. programmes with focus on political theory, comparative politics, public policy, and international relations. In line with NEP, it supports a research-oriented undergraduate framework with structured research guidelines for advanced semesters to strengthen analytical and methodological skills.',
        'At postgraduate level, the department has maintained excellent academic standards with strong mentoring and 100% pass performance. The department actively motivates students for UGC-NET in Political Science, Public Administration, and International Relations. So far, 14 students have qualified JRF/NET.',
        'The Ph.D. programme has been operational since 2023, with active research scholars contributing through publications in reputed peer-reviewed journals. Faculty members have produced books and 100+ research papers in national and international journals, reflecting sustained academic engagement.'
    ];
    const sanskritIntroParagraphs = [
        'Department of Sanskrit, Sri Dev Suman Uttarakhand University, Pt. Lalit Mohan Sharma Campus, Rishikesh.',
        'The Department of Sanskrit is dedicated to the academic study, preservation, and dissemination of Sanskrit language and literature. The department is currently served by Prof. Poonam Pathak, who oversees teaching, research, and academic administration.',
        'The department offers programmes at Undergraduate, Postgraduate, and Doctoral (Ph.D.) levels. Around 100 students are enrolled and actively pursuing Sanskrit studies.',
        'In addition to the core curriculum, the department also conducts Skill Development Courses, Ability Enhancement Courses, and Value Addition Courses at the undergraduate level, aligned with contemporary educational frameworks.',
        'These initiatives aim to strengthen students intellectual capacity, professional competence, and overall academic development while maintaining the traditional scholarly rigor of Sanskrit studies.'
    ];
    const sociologyIntroParagraphs = [
        'Department of Sociology, Sri Dev Suman Uttarakhand Vishwavidyalaya, Pt. L.M.S. Campus, Rishikesh.',
        'The Department of Sociology functions with a strong academic and research orientation under the guidance of Prof. (Dr.) Prashant Kumar Singh and Dr. Kiran Fartiyal. The department is committed to quality teaching, meaningful research, and academic mentoring.',
        'Prof. (Dr.) Prashant Kumar Singh, Professor and Head of Department and Dean, Faculty of Arts, is an experienced academician with significant teaching, administrative, and research contributions. He has published research papers, completed minor research projects, and supervised doctoral and postgraduate research.',
        'Dr. Kiran Fartiyal, Assistant Professor (Guest Faculty), has teaching and research experience with recognized publications and ICSSR project involvement. Her work has received awards including National Research Paper Award (2024) and International Eminent Young Scientist Award (2024-25).',
        'The department serves a large student community, with over 350 undergraduate students and more than 35 postgraduate students, along with active Ph.D. research scholars. It continues to contribute significantly to sociological education and research at the university.'
    ];
    const zoologyIntroParagraphs = [
        'University Department of Zoology, Pt. L.M.S. Campus, Rishikesh (Affiliated to Sri Dev Suman Uttarakhand University).',
        'The Department of Zoology has a rich academic culture and a strong track record of successfully running undergraduate, postgraduate, and research programmes for more than 35 years. Alumni and faculty from the department have contributed significantly to higher education and related academic fields.',
        'After the upgradation of Pt. Lalit Mohan Sharma Campus as part of Sri Dev Suman Uttarakhand University in September 2021, the department was strengthened as a University Department of Zoology. The department also contributed substantially to structuring NEP-2020 Zoology syllabus.',
        'Research in the department focuses on microbiological concerns of human health and environment, herbal drugs, cancer biology, insect science, fish biology, wildlife, and conservation biology. Multiple research scholars, including UGC-JRF, SLET, and RET qualified students, are currently pursuing Ph.D. work under faculty supervision.',
        'The department continues to strengthen research and laboratory facilities with achievements in Scopus/Web of Science/peer-reviewed publications, patents, books, book chapters, and Ph.D. supervision, while promoting interdisciplinary collaboration and advanced academic engagement.'
    ];
    const commerceManagementIntroParagraphs = [
        'Faculty of Commerce and Management, Pt. L.M.S. Campus, Rishikesh, Sri Dev Suman Uttarakhand University.',
        'The Department of Commerce was established in 1973 and offers UG and PG programmes with specializations in Marketing, Finance, and Human Resource Management.',
        'Since Pt. L.M.S. Campus became part of Sri Dev Suman Uttarakhand University in 2021, B.Com and M.Com have continued under the faculty. In 2023, BBA was introduced and is running successfully, and efforts are ongoing to establish MBA.',
        'The faculty focuses on practical business skills, career readiness, and academic excellence. NEP was adopted in UG during session 2022-23 and in PG during session 2025-26.',
        'Over recent years, the faculty has contributed through workshops, seminars, webinars, international lecture series, and publications in reputed journals. In 2024, the Shodh Samarth Research Journal of Commerce, Management and Economics (online) was launched, with four issues published so far.',
        'Ph.D. in Commerce started in 2023 and research is actively ongoing. Students and faculty continue to achieve in NET/JRF, public service, entrepreneurship, and startup initiatives.',
        'Faculty achievements include 232 publications, 5 patents, 29 books, 6 edited books, 57 edited-book publications, and 11 awards and honours. Proposals are also being pursued under ICSSR and Chief Minister Research Project schemes.'
    ];
    const chemistryIntroParagraphs = [
        'Department of Chemistry, Pt. Lalit Mohan Sharma Campus, Rishikesh (Affiliated to Sri Dev Suman Uttarakhand University).',
        'The Department of Chemistry supports quality teaching, practical laboratory training, and research-oriented learning for students at undergraduate and postgraduate levels.',
        'The department has an experienced team of professors, associate professors, and assistant professors with expertise in inorganic chemistry, organic chemistry, physical chemistry, phytochemistry, medicinal and aromatic plants, organometallic chemistry, and analytical chemistry.',
        'Faculty members actively contribute through research publications, academic mentoring, curriculum development, and student guidance, strengthening both academic and professional outcomes in Chemistry.',
        'The department continues to emphasize scientific temperament, experimental skills, and interdisciplinary applications of chemistry for higher studies, research, and career development.'
    ];
    const physicsIntroParagraphs = [
        'Pt. L.M.S. Campus, Rishikesh (Affiliated to Sri Dev Suman Uttarakhand University) - Department of Physics.',
        'The Department of Physics is committed to quality teaching, research orientation, and strong conceptual training at undergraduate, postgraduate, and research level. The department supports students through classroom learning, laboratory practice, and continuous faculty mentoring.',
        'Core specialization areas represented in the department include Fluid Mechanics, Astrophysics, Nonlinear Dynamics, Electronics, Material Science (Theoretical), and Condensed Matter Physics. The department continues to strengthen its academic environment with experienced permanent faculty and diverse research interests.'
    ];
    const englishIntroParagraphs = [
        'Department of English, Pt. L.M.S. Campus, Rishikesh, Sri Dev Suman Uttarakhand University.',
        'The Department of English is a well-established center for academic excellence and literary inquiry, committed to rigorous engagement with English language, literature, and critical practices.',
        'The department offers B.A. (English), M.A. (English), and Ph.D. (English), with a structured approach that integrates canonical texts, contemporary literary theory, critical methodologies, and language practices.',
        'Students develop language and communication skills through GE, SEC, and AEC components, along with strong training in literary analysis, academic writing, and research-oriented learning.',
        'The department supports preparation for diverse careers including teaching, writing, content development, research, and competitive examinations.'
    ];
    const isMathematics = departmentName === 'Mathematics';
    const isMicrobiology = departmentName === 'Microbiology';
    const isMusic = departmentName === 'Music';
    const isPoliticalScience = departmentName === 'Political Science';
    const isSanskrit = departmentName === 'Sanskrit';
    const isSociology = departmentName === 'Sociology';
    const isZoology = departmentName === 'Zoology';
    const isCommerceAndManagement = departmentName === 'Commerce and Management';
    const isChemistry = departmentName === 'Chemistry';
    const isPhysics = departmentName === 'Physics';
    const isEducation = departmentName === 'Education';
    const isEnglish = departmentName === 'English';
    const content = {
        en: {
            introTitle: 'Department Introduction',
            introText: `The Department of ${departmentName} is committed to academic excellence, research orientation, and student development through classroom learning, practical exposure, and mentorship.`,
            photosTitle: 'Department Photos',
            staffTitle: 'Department Staff',
            viewCv: 'View CV',
            role: 'Assistant Professor'
        },
        hi: {
            introTitle: 'Department Introduction',
            introText: `The Department of ${departmentName} is committed to academic excellence, research orientation, and student development through classroom learning, practical exposure, and mentorship.`,
            photosTitle: 'Department Photos',
            staffTitle: 'Department Staff',
            viewCv: 'View CV',
            role: 'Assistant Professor'
        }
    };
    const data = content[language];
    const staffMembers = isMathematics
        ? [
            {
                name: 'Prof. Anita Tomar',
                role: 'Professor & Head, Department of Mathematics',
                field: 'Mathematics',
                qualification: 'M.Sc, M.Phil, Ph.D (Mathematics)',
                specialization: 'Fixed Point Theory, Fractals, Nonlinear Analysis',
                contact: '+919410361825',
                image: '/img/mathematics/Department%20Of%20Mathematics/Mathematics.jpeg',
                cvLink: '/img/mathematics/Department%20Of%20Mathematics/Anita%20Tomar-CV%20Dec.%202025.pdf',
                keyHighlights: [
                    '100+ research publications with multiple books and chapters in prestigious journals',
                    'Ph.D in Fixed Point Theory - advanced mathematics in differential equations and metric space theory',
                    'Guided multiple Ph.D students in advanced research supervision',
                    'Editor and reviewer for Scopus/Web of Science indexed journals',
                    'Patent in computational fractal analysis (2025)',
                    'International conference attendance including ICM and global academic exposure'
                ],
                education: [
                    {
                        degree: 'M.Sc',
                        field: 'Mathematics',
                        specialization: 'First Division'
                    },
                    {
                        degree: 'M.Phil',
                        field: 'Mathematics',
                        specialization: 'First Division'
                    },
                    {
                        degree: 'Ph.D',
                        field: 'Fixed Point Theory & Mapping Theory',
                        specialization: 'Mathematics'
                    }
                ],
                researchWork: [
                    {
                        title: 'Fractals Analysis',
                        description: 'Research on Julia sets, Mandelbrot sets, and fractal geometry with advanced computational methods'
                    },
                    {
                        title: 'Fixed Point Theory',
                        description: 'Advanced research in fixed point mappings and functional analysis in metric spaces'
                    },
                    {
                        title: 'Mathematical Modeling',
                        description: 'Differential equations and advanced mathematical modeling in nonlinear analysis'
                    }
                ],
                technicalSkills: [
                    'Fixed Point Theory & Functional Analysis',
                    'Fractal Geometry & Julia/Mandelbrot Set Analysis',
                    'Differential Equations & Nonlinear Analysis',
                    'Metric Space Theory & Topology',
                    'Mathematical Modeling & Computational Methods',
                    'Advanced Matrix Analysis',
                    'Complex Analysis in Mathematics',
                    'Artificial Intelligence & Machine Learning applications in Mathematics'
                ],
                publications: [
                    {
                        type: 'Research Papers',
                        items: [
                            '104+ peer-reviewed research papers in SCI/Scopus/Web of Science journals',
                            'Latest publications in 2025 on fractals and fixed point theory',
                            'Papers on functional analysis and nonlinear differential equations'
                        ]
                    },
                    {
                        type: 'Books & Chapters',
                        items: [
                            '14+ book chapters in international publications',
                            '3+ edited books on mathematics',
                            'Authored books on Calculus, Algebra, Trigonometry, and Matrices'
                        ]
                    }
                ],
                other: [
                    'Excellence in Research Award (2023)',
                    'Women Scientist Award (2021)',
                    'Teacher of the Year Award (2020)',
                    'Chief Minister Excellence and Good Governance Award',
                    'Distinguished Service Award by Vijnana Parishad of India (2025)',
                    'Member of multiple mathematical societies and research organizations',
                    'Global academic exposure with collaborations in Brazil and Europe',
                    'Editorial roles in major international journals',
                    'Attended International Congress of Mathematicians and global conferences'
                ]
            }
        ]
        : isMicrobiology
            ? [
                {
                    name: 'Dr. Bindu Devi',
                    role: 'Guest Faculty, Department of Microbiology',
                    field: 'Microbiology',
                    qualification: 'Ph.D. in Microbiology',
                    specialization: 'Probiotics, Bioactive Compounds, Microbial Research',
                    contact: '+918168700712',
                    email: 'bindu.thakur111@gmail.com',
                    image: '/img/Administrator/COE2.jpeg',
                    cvLink: '/img/microbiology/Updated-CV-Dr-Bindu-Devi-15-01-26.pdf',
                    keyHighlights: [
                        'Ph.D. research on bioactive compounds from probiotics with genetic characterization',
                        'Strong laboratory skills: DNA isolation & PCR, Microbial cultivation & identification, Chromatography techniques',
                        'Hands-on expertise with major instruments: Autoclave, centrifuge, spectrophotometer, PCR & gel electrophoresis systems',
                        'Multiple international publications and book chapters',
                        'Research focus: Food microbiology, Probiotics, Antibiotic resistance, Fermented food science'
                    ],
                    education: [
                        {
                            degree: 'B.Sc',
                            field: 'Botany, Zoology, Chemistry'
                        },
                        {
                            degree: 'M.Sc',
                            field: 'Microbiology',
                            specialization: 'Biochemistry'
                        },
                        {
                            degree: 'Ph.D',
                            field: 'Microbiology',
                            specialization: 'Biotechnology'
                        }
                    ],
                    researchWork: [
                        {
                            title: 'M.Sc Thesis: Lactobacillus Growth Optimization',
                            description: 'Growth optimization of Lactobacillus and interaction with food-borne pathogens'
                        },
                        {
                            title: 'Ph.D Thesis: Bioactive Compounds Research',
                            description: 'Purification of bioactive compounds and genetic study of probiotics'
                        }
                    ],
                    technicalSkills: [
                        'Microbial isolation & culture maintenance',
                        'Biochemical & morphological identification',
                        'DNA isolation & PCR techniques',
                        'Chromatography (Gel filtration)',
                        'DNA techniques and molecular characterization',
                        'Autoclave and sterilization protocols',
                        'Spectrophotometry and analytical techniques',
                        'Gel electrophoresis and protein analysis'
                    ],
                    publications: [
                        {
                            type: 'Book Chapters',
                            items: [
                                'Multiple chapters in Springer and Academic Press publications',
                                'Contributions to peer-reviewed academic volumes'
                            ]
                        },
                        {
                            type: 'Research Papers',
                            items: [
                                'Actinomycete diversity studies (2024)',
                                'Genetic diversity studies (2025)',
                                'Food microbiology and pathogenic bacteria interactions'
                            ]
                        },
                        {
                            type: 'Review Articles',
                            items: [
                                'Antibiotic resistance mechanisms and emerging challenges',
                                'Fermented foods and probiotic applications',
                                'Microbial applications in agriculture and food industry'
                            ]
                        }
                    ],
                    other: [
                        'Experience in food microbiology and dairy research',
                        'Work related to probiotics in milk and fermentation processes',
                        'Book editor contribution (2024)',
                        'Strong academic and research background in microbial biotechnology'
                    ]
                }
            ]
            : isPhysics
                ? [
                    {
                        name: 'Prof. Manoj Yadav',
                        role: 'Professor, Department of Physics',
                        field: 'Physics',
                        qualification: 'Ph.D in Physics (1993)',
                        specialization: 'Fluid Mechanics, Astrophysics, Nonlinear Dynamics, Electronics',
                        contact: '+91941123788, +918279864316',
                        email: 'dr_manoj_yadav_69@yahoo.co.in, manoj.sidhbali@gmail.com',
                        image: '/img/Administrator/Manoj.jpg',
                        keyHighlights: [
                            'Ph.D in Physics from 1993 with extensive teaching and research experience',
                            'Expertise in Fluid Mechanics and Astrophysics',
                            'Advanced knowledge in Nonlinear Dynamics and Electronics',
                            'PG Diploma in Computer (Fortran, MS Office)',
                            'LLB qualification demonstrating diverse academic background',
                            'Senior faculty member with 30+ years of academic experience'
                        ],
                        education: [
                            { degree: 'B.Sc', field: 'Physics, Chemistry, Mathematics (PCM)' },
                            { degree: 'M.Sc', field: 'Physics' },
                            { degree: 'Ph.D', field: 'Physics', specialization: '1993' },
                            { degree: 'PG Diploma', field: 'Computer Science', specialization: 'Fortran, MS Office' },
                            { degree: 'LLB', field: 'Law' }
                        ],
                        researchWork: [
                            { title: 'Fluid Mechanics Research', description: 'Advanced studies in fluid dynamics and mechanics with applications to astrophysical phenomena' },
                            { title: 'Astrophysics Studies', description: 'Research in astrophysical phenomena, stellar dynamics, and cosmological applications' },
                            { title: 'Nonlinear Dynamics', description: 'Investigation of nonlinear dynamical systems and chaos theory applications' },
                            { title: 'Electronics & Instrumentation', description: 'Design and development of electronic systems and instrumentation for physics experiments' }
                        ],
                        technicalSkills: [
                            'Fluid Mechanics & Fluid Dynamics',
                            'Astrophysics & Stellar Physics',
                            'Nonlinear Dynamics & Chaos Theory',
                            'Electronics & Circuit Design',
                            'Fortran Programming',
                            'MS Office & Computer Applications',
                            'Scientific Instrumentation',
                            'Experimental & Theoretical Physics'
                        ],
                        publications: [{ type: 'Research Areas', items: ['Fluid mechanics and astrophysical applications', 'Nonlinear dynamics in physical systems', 'Electronics and instrumental design'] }],
                        other: ['Senior faculty with 30+ years of academic experience', 'Department of Physics, Pt. L.M.S Campus, Rishikesh', 'Available for teaching, research, and academic mentoring', 'Experience in both theoretical and applied physics', 'Active contributor to physics education and student development']
                    },
                    {
                        name: 'Dr. B. P. Bahuguna',
                        role: 'Professor, Department of Physics',
                        field: 'Physics',
                        qualification: 'D.Phil in Physics (1992)',
                        specialization: 'Electronics, Material Science (Theoretical)',
                        contact: '+91941189386',
                        email: 'bp_bahuguna@rediffmail.com',
                        image: '/img/Administrator/AEC.jpg',
                        keyHighlights: [
                            'D.Phil in Physics from 1992 - senior experienced faculty member',
                            'Specialization in Electronics and theoretical Material Science',
                            'Expertise in condensed matter physics applications',
                            'Strong background in theoretical physics and materials research',
                            'Experience in both academic teaching and research supervision',
                            '30+ years of contribution to physics education'
                        ],
                        education: [
                            { degree: 'B.Sc', field: 'Physics, Chemistry, Mathematics (PCM)' },
                            { degree: 'M.Sc', field: 'Physics' },
                            { degree: 'D.Phil', field: 'Physics', specialization: '1992' }
                        ],
                        researchWork: [
                            { title: 'Electronics Research', description: 'Advanced research in electronic devices, circuits, and semiconductor physics' },
                            { title: 'Material Science (Theoretical)', description: 'Theoretical studies of material properties, crystal structures, and solid-state physics' },
                            { title: 'Condensed Matter Physics', description: 'Research in condensed matter systems and their applications in materials engineering' }
                        ],
                        technicalSkills: [
                            'Electronics & Semiconductor Physics',
                            'Material Science (Theoretical)',
                            'Condensed Matter Physics',
                            'Solid-State Physics',
                            'Crystal Structure Analysis',
                            'Physics Education & Curriculum Development',
                            'Experimental & Computational Methods'
                        ],
                        publications: [{ type: 'Research Focus', items: ['Electronics and device physics', 'Theoretical material science studies', 'Condensed matter physics applications'] }],
                        other: ['Professor with 30+ years of academic experience', 'Department of Physics, Pt. L.M.S Campus, Rishikesh', 'Available for research supervision and academic mentoring', 'Expertise in both theoretical and practical aspects of physics', 'Active contributor to physics curriculum development']
                    },
                    {
                        name: 'Dr. Hemant Singh',
                        role: 'Associate Professor, Department of Physics',
                        field: 'Physics',
                        qualification: 'Ph.D from IIT Roorkee (2016)',
                        specialization: 'Condensed Matter Physics',
                        contact: '+919456135800',
                        email: 'hemantsinghparmar.uk@gmail.com',
                        image: '/img/Administrator/hemant.jpg',
                        keyHighlights: [
                            'Ph.D from prestigious IIT Roorkee - 2016',
                            'Qualified CSIR-UGC NET with JRF qualification',
                            'Specialization in Condensed Matter Physics',
                            'Young researcher with modern research background',
                            'IIT Roorkee doctoral training provides advanced research expertise',
                            'Active researcher with focus on contemporary physics applications'
                        ],
                        education: [
                            { degree: 'B.Sc', field: 'Physics, Chemistry, Mathematics (PCM)' },
                            { degree: 'M.Sc', field: 'Physics' },
                            { degree: 'Ph.D', field: 'Physics', specialization: 'IIT Roorkee (2016)' },
                            { degree: 'CSIR-UGC NET', field: 'Junior Research Fellowship (JRF)', specialization: 'Qualified' }
                        ],
                        researchWork: [
                            { title: 'Condensed Matter Physics', description: 'Research in condensed matter systems, electronic properties, and quantum phenomena' },
                            { title: 'Advanced Materials Study', description: 'Investigation of advanced materials and their physical properties' },
                            { title: 'Quantum Physics Applications', description: 'Application of quantum mechanics to condensed matter and materials science' }
                        ],
                        technicalSkills: [
                            'Condensed Matter Physics',
                            'Advanced Materials Science',
                            'Quantum Physics & Quantum Mechanics',
                            'Experimental Condensed Matter Physics',
                            'Computational Physics Methods',
                            'Research Methodology & Design',
                            'Scientific Writing & Publication',
                            'Physics Education & Student Mentoring'
                        ],
                        publications: [{ type: 'Research Expertise', items: ['Condensed matter physics and electronic properties', 'Advanced materials characterization', 'Quantum phenomena in solid-state systems'] }],
                        other: ['Associate Professor, Department of Physics, Pt. L.M.S Campus, Rishikesh', 'IIT Roorkee background ensures cutting-edge research training', 'CSIR-UGC NET qualified researcher', 'Active in contemporary physics research', 'Available for research supervision, teaching, and mentoring']
                    }
                ]
                : isPoliticalScience
                    ? [
                        {
                            name: 'Prof. Dr. Hemlata Mishra',
                            role: 'Professor & Head, Department of Political Science',
                            contact: '+919411166952',
                            email: 'hemlata80@gmail.com',
                            image: '/img/Administrator/uma1.jpg',
                            cvLink: '/img/political-science/Hemlata-Mishra.docx'
                        },
                        {
                            name: 'Dr. Dinesh Sharma',
                            role: 'Professor, Department of Political Science',
                            contact: '+917417784525',
                            email: 'dineshshrm772@gmail.com',
                            image: '/img/Administrator/dinesh.jpg',
                            cvLink: '/img/political-science/Dinesh-Kumar-Sharma.docx'
                        },
                        {
                            name: 'Prof. (Dr.) Durga Kant Pd. Chaudhary',
                            role: 'Professor, Department of Political Science',
                            contact: '+919411346372',
                            email: 'dkpchaudhary@gmail.com, dkpchaudhary@rediffmail.com',
                            image: '/img/Administrator/AEC.jpg',
                            cvLink: '/img/political-science/Durga-Kant.docx'
                        }
                    ]
                    : isSanskrit
                        ? [
                            {
                                name: 'Prof. Poonam Pathak',
                                role: 'Professor & HOD, Department of Sanskrit',
                                qualification: 'Ph.D in Sanskrit (2004)',
                                specialization: 'Sanskrit Literature, Vedas, Indian Knowledge System',
                                email: 'poonampathak2304@gmail.com',
                                image: '/img/Administrator/uma1.jpg',
                                cvLink: '/img/sanskrit/Poonam-Pathak-Bio-Data.pdf',
                                keyHighlights: [
                                    'Ph.D in Sanskrit (2004) with specialized expertise in Vedic literature and philosophy',
                                    'Qualified UGC NET (1995) - recognized scholar in Sanskrit studies',
                                    'Professor & Head of Department - leading Sanskrit academic programs',
                                    'Convener of Board of Studies & Research Degree Committee - curriculum design and academic planning',
                                    'Member of Academic Council - institutional academic governance',
                                    'Research expertise in Vedic texts, Ayurveda, and Indian traditional knowledge systems'
                                ],
                                education: [
                                    {
                                        degree: 'B.A',
                                        field: 'Sanskrit, Hindi, Political Science',
                                        specialization: 'Multi-disciplinary humanities approach'
                                    },
                                    {
                                        degree: 'M.A',
                                        field: 'Sanskrit'
                                    },
                                    {
                                        degree: 'UGC NET',
                                        field: 'Sanskrit',
                                        specialization: 'Qualified (1995)'
                                    },
                                    {
                                        degree: 'Ph.D',
                                        field: 'Sanskrit',
                                        specialization: 'Completed (2004)'
                                    }
                                ],
                                researchWork: [
                                    {
                                        title: 'Vedic Literature & Philosophy',
                                        description: 'In-depth research on Vedic texts, philosophical concepts, and their contemporary relevance'
                                    },
                                    {
                                        title: 'Ayurveda Concepts in Sanskrit Texts',
                                        description: 'Study of Ayurvedic principles and health concepts as documented in Sanskrit literature'
                                    },
                                    {
                                        title: 'Environment & Sustainability from Vedic Perspective',
                                        description: 'Research on ecological wisdom and environmental conservation principles in Vedic knowledge'
                                    },
                                    {
                                        title: 'Indian Traditional Knowledge System',
                                        description: 'Comprehensive study of indigenous knowledge systems preserved in Sanskrit literature'
                                    }
                                ],
                                technicalSkills: [
                                    'Sanskrit Language - Advanced proficiency',
                                    'Vedic Studies & Interpretation',
                                    'Ayurveda & Traditional Health Sciences',
                                    'Academic Research & Scholarly Writing',
                                    'Curriculum Design & Development',
                                    'Academic Administration & Management',
                                    'Bhagavad Gita & Upanishadic Philosophy',
                                    'Sanskrit Grammar & Linguistics',
                                    'Indian Knowledge Systems Documentation'
                                ],
                                publications: [
                                    {
                                        type: 'Books',
                                        items: [
                                            '3+ books on Sanskrit literature and Indian knowledge systems',
                                            'Works on Vedic philosophy and traditional knowledge',
                                            'Scholarly publications on Sanskrit studies and cultural preservation',
                                            'Academic texts on Indian wisdom traditions'
                                        ]
                                    },
                                    {
                                        type: 'Book Chapters',
                                        items: [
                                            'Multiple chapters on Vedic health and knowledge systems',
                                            'Contributions to international and national academic publications',
                                            'Works on Ayurveda concepts in Sanskrit literature',
                                            'Chapters on Indian traditional knowledge preservation'
                                        ]
                                    },
                                    {
                                        type: 'Research Papers',
                                        items: [
                                            'Multiple peer-reviewed papers (2013-2019+)',
                                            'Papers on Bhagavad Gita and Vedic philosophy',
                                            'Research on Sanskrit grammar and linguistics',
                                            'Works on Indian traditional knowledge and sustainability',
                                            'Publications on cultural and linguistic preservation'
                                        ]
                                    }
                                ],
                                other: [
                                    'Guided multiple Ph.D students in Sanskrit studies',
                                    'Presented research papers in international conferences',
                                    'Active participation in national seminars and academic forums',
                                    'Delivered invited talks at academic and cultural institutions',
                                    'Strong advocate for preserving Indian traditional knowledge systems',
                                    'Active member of academic committees and curriculum design initiatives',
                                    'Combined expertise in research, teaching, and academic administration',
                                    'Multilingual proficiency: Hindi, English, and Sanskrit'
                                ]
                            }
                        ]
                        : isSociology
                            ? [
                                {
                                    name: 'Prof. (Dr.) Prashant Kumar Singh',
                                    role: 'Professor, Head and Dean Faculty of Arts, Department of Sociology',
                                    qualification: 'Ph.D in Sociology',
                                    specialization: 'Social Change, Research Methodology, Policy Studies',
                                    contact: '+919412138154',
                                    email: 'drprashant1970@gmail.com',
                                    image: '/img/Administrator/dinesh.jpg',
                                    cvLink: '/img/sociology/Prof-Prashant-Kumar-Singh-CV.pdf',
                                    keyHighlights: [
                                        'Ph.D in Sociology with extensive expertise in social research and policy studies',
                                        'Professor & Head of Department with 20+ years of academic and administrative experience',
                                        'Dean of Faculty of Arts - institutional leadership and academic governance',
                                        'Published 20+ peer-reviewed research papers in national and international journals',
                                        'Completed 6 major research projects with field work and policy implications',
                                        'Ph.D guide - supervised students with completed and ongoing research'
                                    ],
                                    education: [
                                        {
                                            degree: 'B.A',
                                            field: 'Sociology'
                                        },
                                        {
                                            degree: 'M.A',
                                            field: 'Sociology'
                                        },
                                        {
                                            degree: 'Ph.D',
                                            field: 'Sociology',
                                            specialization: 'Social Change and Development'
                                        }
                                    ],
                                    researchWork: [
                                        {
                                            title: 'Alcohol Consumption & Society',
                                            description: 'Research on social dimensions of alcohol use, cultural practices, and health implications in Indian communities'
                                        },
                                        {
                                            title: 'Human-Wildlife Conflict',
                                            description: 'Field-based research on conflicts between human settlements and wildlife, mitigation strategies and community adaptation'
                                        },
                                        {
                                            title: 'AI Ethics & Media Influence',
                                            description: 'Contemporary research on artificial intelligence ethics, media representation, and social impact in digital age'
                                        },
                                        {
                                            title: 'Live-in Relationships & Law',
                                            description: 'Sociological and legal research on changing relationship patterns and contemporary family structures in India'
                                        },
                                        {
                                            title: 'Social Media & Society',
                                            description: 'Research on social media impact on society, digital culture, and social change dynamics'
                                        }
                                    ],
                                    technicalSkills: [
                                        'Qualitative Research Methodology',
                                        'Quantitative Data Analysis',
                                        'Ethnographic Field Work',
                                        'Policy Research & Analysis',
                                        'Social Survey Design & Implementation',
                                        'Academic Writing & Publication',
                                        'Research Project Management',
                                        'Departmental & Faculty Administration',
                                        'Doctoral Student Supervision'
                                    ],
                                    publications: [
                                        {
                                            type: 'Research Papers',
                                            items: [
                                                'Over 20 peer-reviewed papers in national journals',
                                                'International publications on social research',
                                                'Papers on alcohol, health, and social change',
                                                'Research on human-wildlife conflict and conservation',
                                                'Contemporary studies on AI ethics and media influence',
                                                'Publications on family, relationships, and law'
                                            ]
                                        },
                                        {
                                            type: 'Research Projects',
                                            items: [
                                                '6 completed major research projects',
                                                'Field-based studies with community engagement',
                                                'Policy-oriented research with practical applications',
                                                'Inter-disciplinary research collaborations',
                                                'Projects funded by government and research agencies'
                                            ]
                                        },
                                        {
                                            type: 'Doctoral Work',
                                            items: [
                                                'Ph.D guide for multiple students',
                                                'Students with completed research and published work',
                                                'Ongoing doctoral supervision',
                                                'Research mentorship and academic guidance'
                                            ]
                                        }
                                    ],
                                    other: [
                                        'Strong field work experience in rural and urban communities',
                                        'Policy research contributions to government initiatives',
                                        'Active member of academic and research committees',
                                        'Regular presenter at national and international conferences',
                                        'Contributor to curriculum development for Sociology programs',
                                        'Experience in inter-disciplinary research collaboration',
                                        'Known for integrating academic research with policy application',
                                        'Leadership in institutional development and academic excellence'
                                    ]
                                },
                                {
                                    name: 'Dr. Kiran Fartiyal',
                                    role: 'Assistant Professor (Guest Faculty), Department of Sociology',
                                    qualification: 'Ph.D in Sociology',
                                    specialization: 'Gender Studies, Digital Society, Cybercrime',
                                    contact: '+918279441322',
                                    email: 'fartiyalkiran@gmail.com',
                                    image: '/img/Administrator/uma1.jpg',
                                    cvLink: '/img/sociology/Updated-CV-2026-Kiran.pdf',
                                    keyHighlights: [
                                        'Ph.D in Sociology specializing in gender studies and digital society',
                                        'Published 9+ research papers in peer-reviewed journals',
                                        'National Research Paper Award recipient (2024) - recognition of research excellence',
                                        'International Young Scientist Award - emerging scholar distinction',
                                        'Active involvement in ICSSR-funded research projects',
                                        'Research expertise in contemporary social issues: gender, cybercrime, workplace sociology'
                                    ],
                                    education: [
                                        {
                                            degree: 'B.A',
                                            field: 'Sociology'
                                        },
                                        {
                                            degree: 'M.A',
                                            field: 'Sociology'
                                        },
                                        {
                                            degree: 'Ph.D',
                                            field: 'Sociology',
                                            specialization: 'Gender Studies'
                                        }
                                    ],
                                    researchWork: [
                                        {
                                            title: 'Gender Studies & Women Empowerment',
                                            description: 'Research on gender relations, women\'s rights, and gender-based social issues in contemporary India'
                                        },
                                        {
                                            title: 'Social Media Impact on Society',
                                            description: 'Study of social media influence on behavior, relationships, and social dynamics in digital age'
                                        },
                                        {
                                            title: 'Cybercrime & Women Safety',
                                            description: 'Research on online harassment, cybercrime against women, digital safety, and legal frameworks'
                                        },
                                        {
                                            title: 'Workplace Sociology',
                                            description: 'Study of gender dynamics, workplace culture, and professional development in organizational settings'
                                        }
                                    ],
                                    technicalSkills: [
                                        'Gender Studies & Analysis',
                                        'Qualitative Research Methods',
                                        'Digital Society Research',
                                        'Cybercrime & Online Safety Research',
                                        'Survey Design & Data Collection',
                                        'Academic Writing & Publication',
                                        'Research Project Coordination',
                                        'Gender-sensitive research methodology',
                                        'Community engagement & fieldwork'
                                    ],
                                    publications: [
                                        {
                                            type: 'Research Papers',
                                            items: [
                                                '9+ peer-reviewed research papers published',
                                                'Papers on gender studies and women\'s issues',
                                                'Research on social media and digital society',
                                                'Publications on cybercrime and online safety',
                                                'Studies on workplace gender dynamics',
                                                'Contemporary sociology of digital culture'
                                            ]
                                        },
                                        {
                                            type: 'Research Projects',
                                            items: [
                                                'ICSSR-funded research project involvement',
                                                'Active research on contemporary social issues',
                                                'Collaborative research initiatives',
                                                'Field-based research with community participation'
                                            ]
                                        }
                                    ],
                                    other: [
                                        'National Research Paper Award (2024) - recognition of research quality',
                                        'International Young Scientist Award - emerging scholar distinction',
                                        'Active participant in national research forums',
                                        'Committed to bridging gender research and policy',
                                        'Engaged in community education on digital safety and gender awareness',
                                        'Regular conference presentations and academic contributions',
                                        'Strong focus on applied research with social impact',
                                        'Advocate for gender-inclusive research and teaching'
                                    ]
                                }
                            ]
                            : isZoology
                                ? [
                                    {
                                        name: 'Professor (Dr.) Smita Badola',
                                        role: 'Professor, Department of Zoology',
                                        qualification: 'Ph.D in Zoology',
                                        specialization: 'Aquatic Biology, Fish & Fisheries, Wildlife Conservation, Avian Parasitology',
                                        email: 'drsmitabadola@gmail.com',
                                        image: '/img/Administrator/uma1.jpg',
                                        cvLink: '/img/zoology/BIODATA-PROF-SMITA-BADOLA.pdf',
                                        keyHighlights: [
                                            '26+ years of dedicated research experience in zoological sciences',
                                            'Additional Director (Research) - institutional research leadership',
                                            'Director (International Student Cell) - global academic engagement',
                                            'Published 38+ research papers in peer-reviewed journals',
                                            'Editor of Scopus-indexed journal - editorial excellence',
                                            'Specialization in aquatic biology, fisheries, wildlife conservation, and avian parasitology'
                                        ],
                                        education: [
                                            {
                                                degree: 'B.Sc',
                                                field: 'Zoology'
                                            },
                                            {
                                                degree: 'M.Sc',
                                                field: 'Zoology'
                                            },
                                            {
                                                degree: 'Ph.D',
                                                field: 'Zoology',
                                                specialization: 'Aquatic Biology & Parasitology'
                                            }
                                        ],
                                        researchWork: [
                                            {
                                                title: 'Aquatic Biology & Fish Research',
                                                description: 'Comprehensive research on aquatic ecosystems, fish biology, and aquatic organism physiology'
                                            },
                                            {
                                                title: 'Fish & Fisheries',
                                                description: 'Study of fish species, fishery management, conservation of aquatic resources, and sustainable aquaculture'
                                            },
                                            {
                                                title: 'Wildlife Conservation',
                                                description: 'Research on wildlife preservation, habitat management, and conservation strategies for biodiversity'
                                            },
                                            {
                                                title: 'Avian Parasitology',
                                                description: 'Study of parasitic organisms affecting birds, disease transmission, and control mechanisms'
                                            }
                                        ],
                                        technicalSkills: [
                                            'Aquatic Biology & Ecology',
                                            'Fish & Fisheries Research',
                                            'Parasitology Studies',
                                            'Wildlife Conservation Science',
                                            'Research Design & Data Analysis',
                                            'Molecular Biology Techniques',
                                            'Academic Research & Publications',
                                            'International Journal Editing',
                                            'Research Project Management'
                                        ],
                                        publications: [
                                            {
                                                type: 'Research Papers',
                                                items: [
                                                    '38+ peer-reviewed research papers published',
                                                    'Papers on aquatic biology and fisheries',
                                                    'Research on wildlife conservation and biodiversity',
                                                    'Publications on avian parasitology and disease',
                                                    'International collaborative research publications',
                                                    'Impact-factor journal contributions'
                                                ]
                                            },
                                            {
                                                type: 'Editorial Work',
                                                items: [
                                                    'Editor of Scopus-indexed journal',
                                                    'Peer review contributions to international journals',
                                                    'Editorial board member of research publications',
                                                    'Quality assessment of scientific research'
                                                ]
                                            }
                                        ],
                                        other: [
                                            'Institutional Research Director - leading research initiatives',
                                            'International Student Cell Director - global academic partnerships',
                                            'Strong track record of research publications and collaborations',
                                            'Regular presenter at national and international conferences',
                                            'Active mentor for research scholars and doctoral students',
                                            'Contributor to conservation and environmental awareness',
                                            '26+ years of continuous research contribution',
                                            'Known for excellence in aquatic and wildlife research'
                                        ]
                                    },
                                    {
                                        name: 'Prof. Surman Arya',
                                        role: 'Professor, Department of Zoology',
                                        qualification: 'Ph.D in Zoology',
                                        specialization: 'Parasitic Entomology, Poultry Parasites',
                                        contact: '+918279441322',
                                        email: 'surmanaryadr69@gmail.com',
                                        image: '/img/Administrator/hemant.jpg',
                                        cvLink: '/img/zoology/Biodata-Prof-Surman-Arya.pdf',
                                        keyHighlights: [
                                            '25+ years combined teaching and research experience',
                                            'Published 45 research papers in peer-reviewed journals',
                                            'Completed UGC-funded major research project',
                                            'Guided 50+ students through research and academic programs',
                                            'Specialized expertise in parasitic entomology and poultry parasites',
                                            'Strong research record spanning two and a half decades'
                                        ],
                                        education: [
                                            {
                                                degree: 'B.Sc',
                                                field: 'Zoology'
                                            },
                                            {
                                                degree: 'M.Sc',
                                                field: 'Zoology'
                                            },
                                            {
                                                degree: 'Ph.D',
                                                field: 'Zoology',
                                                specialization: 'Parasitic Entomology'
                                            }
                                        ],
                                        researchWork: [
                                            {
                                                title: 'Parasitic Entomology',
                                                description: 'Comprehensive study of parasitic insects, their biology, life cycles, and ecological roles'
                                            },
                                            {
                                                title: 'Poultry Parasites Research',
                                                description: 'Research on parasitic organisms affecting poultry, disease transmission, and control strategies in poultry farming'
                                            },
                                            {
                                                title: 'Disease Vector Research',
                                                description: 'Study of insects as disease vectors and their control in agricultural and public health contexts'
                                            },
                                            {
                                                title: 'Applied Entomology',
                                                description: 'Application of entomological research to practical solutions in agriculture and pest management'
                                            }
                                        ],
                                        technicalSkills: [
                                            'Parasitic Entomology & Taxonomy',
                                            'Poultry Disease & Parasite Research',
                                            'Insect Biology & Life Cycle Studies',
                                            'Microscopy & Specimen Identification',
                                            'Research Methodology & Analysis',
                                            'UGC Research Project Management',
                                            'Student Mentoring & Supervision',
                                            'Academic Teaching & Laboratory Management',
                                            'Scientific Writing & Publications'
                                        ],
                                        publications: [
                                            {
                                                type: 'Research Papers',
                                                items: [
                                                    '45 peer-reviewed research papers published',
                                                    'Papers on parasitic entomology and insect biology',
                                                    'Research on poultry parasites and disease control',
                                                    'Publications on vector-borne disease transmission',
                                                    'Agricultural and veterinary parasitology research',
                                                    'National and international journal contributions'
                                                ]
                                            },
                                            {
                                                type: 'Research Projects',
                                                items: [
                                                    'UGC-funded major research project (completed)',
                                                    'Field-based parasitological studies',
                                                    'Poultry farm research collaborations',
                                                    'Applied entomology research initiatives'
                                                ]
                                            }
                                        ],
                                        other: [
                                            'Guided 50+ students in research and academic programs',
                                            'Active mentor for master\'s and doctoral researchers',
                                            'Regular presenter at scientific conferences',
                                            'Contributed to parasitology education and awareness',
                                            '25+ years of continuous teaching and research',
                                            'Expert in poultry and agricultural entomology',
                                            'Strong collaborative research networks',
                                            'Recognized for research depth and student mentoring'
                                        ]
                                    },
                                    {
                                        name: 'Prof. Deo Mani Tripathi',
                                        role: 'Professor & Head, Department of Zoology',
                                        qualification: 'Ph.D in Zoology',
                                        specialization: 'Immunology, Biotechnology, Herbal Medicine, Environmental & Wildlife Biology',
                                        contact: '+919411742753, +919761239897',
                                        email: 'dmtripathi31@gmail.com, dmimmuno10@gmail.com',
                                        image: '/img/Administrator/Manoj.jpg',
                                        cvLink: '/img/zoology/Ultimate-CV-15-Jan-2026.pdf',
                                        keyHighlights: [
                                            '37+ years of extensive research experience at international standards',
                                            'International-level researcher with global recognition',
                                            'Research background with CSIR, ICMR, ICAR - premier research organizations',
                                            'Professor & Head of Department - institutional leadership and academic direction',
                                            'Multiple awards and global academic recognition',
                                            'Expertise spanning immunology, biotechnology, herbal medicine, and wildlife biology'
                                        ],
                                        education: [
                                            {
                                                degree: 'B.Sc',
                                                field: 'Zoology'
                                            },
                                            {
                                                degree: 'M.Sc',
                                                field: 'Zoology'
                                            },
                                            {
                                                degree: 'Ph.D',
                                                field: 'Zoology',
                                                specialization: 'Immunology & Biotechnology'
                                            }
                                        ],
                                        researchWork: [
                                            {
                                                title: 'Immunology & Immune Response',
                                                description: 'Advanced research on immunological mechanisms, antibody response, and immune system function'
                                            },
                                            {
                                                title: 'Biotechnology Applications',
                                                description: 'Application of biotechnology in biological research, genetic studies, and molecular techniques'
                                            },
                                            {
                                                title: 'Herbal Medicine & Traditional Science',
                                                description: 'Research on medicinal properties of plants, traditional knowledge systems, and herbal therapeutics'
                                            },
                                            {
                                                title: 'Environmental & Wildlife Biology',
                                                description: 'Study of wildlife, environmental conservation, biodiversity, and ecological relationships'
                                            }
                                        ],
                                        technicalSkills: [
                                            'Immunology & Immune System Research',
                                            'Molecular Biology & Biotechnology',
                                            'Genetic Engineering & Analysis',
                                            'Herbal Medicine & Phytochemistry',
                                            'Wildlife & Environmental Research',
                                            'CSIR/ICMR Research Methodologies',
                                            'Advanced Laboratory Techniques',
                                            'International Research Standards',
                                            'Academic Leadership & Administration'
                                        ],
                                        publications: [
                                            {
                                                type: 'Research Publications',
                                                items: [
                                                    'Numerous peer-reviewed papers in international journals',
                                                    'Research on immunology and immune responses',
                                                    'Biotechnology and genetic research publications',
                                                    'Studies on medicinal plants and herbal therapeutics',
                                                    'Environmental and wildlife conservation research',
                                                    'CSIR/ICMR/ICAR project publications'
                                                ]
                                            },
                                            {
                                                type: 'Research Projects',
                                                items: [
                                                    'CSIR (Council of Scientific and Industrial Research) projects',
                                                    'ICMR (Indian Council of Medical Research) collaborations',
                                                    'ICAR (Indian Council of Agricultural Research) initiatives',
                                                    'International research partnerships',
                                                    'Large-scale research programs with funding'
                                                ]
                                            }
                                        ],
                                        other: [
                                            'International-level researcher with global recognition',
                                            'Multiple awards and honors for research excellence',
                                            'Former Coordinator with extensive institutional experience',
                                            'Research association with premier Indian research organizations (CSIR, ICMR, ICAR)',
                                            '37+ years of continuous research contribution',
                                            'Known for integrating traditional knowledge with modern science',
                                            'Strong international academic collaborations',
                                            'Leader in advancing zoological research and environmental conservation'
                                        ]
                                    }
                                ]
                                : isChemistry
                                    ? [
                                        {
                                            name: 'Dr. Shanti Prakash Sati',
                                            role: 'Professor & Head, Department of Chemistry',
                                            contact: '+917579110111',
                                            email: 'satisp22@gmail.com',
                                            image: '/img/Administrator/Manoj.jpg',
                                            cvLink: '/img/chemistry/CURRICULUM-VITAE-Shanti-Prakash-Sati.docx'
                                        },
                                        {
                                            name: 'Dr. Vibha Kumar',
                                            role: 'Associate Professor, Department of Chemistry',
                                            email: 'vibhasingh25@gmail.com',
                                            image: '/img/Administrator/uma1.jpg',
                                            cvLink: '/img/chemistry/CV-Vibha-Kumar.docx'
                                        },
                                        {
                                            name: 'Dr. Ashish Kumar Sharma',
                                            role: 'Professor, Department of Chemistry',
                                            image: '/img/Administrator/hemant.jpg',
                                            cvLink: '/img/chemistry/Dr-Ashish-Sharma.docx'
                                        },
                                        {
                                            name: 'Dr. Seema',
                                            role: 'Associate Professor, Department of Chemistry',
                                            contact: '+919258138438',
                                            email: 'sbaniwal1974@gmail.com, sbaniwal@rediffmail.com',
                                            image: '/img/Administrator/COE2.jpeg',
                                            cvLink: '/img/chemistry/Dr-Seema-CV-New-2026.docx'
                                        },
                                        {
                                            name: 'Dr. Neha Bhatt',
                                            role: 'Assistant Professor (Guest), Department of Chemistry',
                                            contact: '+918384818010, +919760655758',
                                            email: 'nehagairola1992@gmail.com',
                                            image: '/img/Administrator/AEC.jpg',
                                            cvLink: '/img/chemistry/Dr-Neha-Academic-CV.docx'
                                        },
                                        {
                                            name: 'Dr. Rakesh Kumar Joshi',
                                            role: 'Assistant Professor, Department of Chemistry',
                                            contact: '+919412441598',
                                            email: 'joshirk12@gmail.com',
                                            image: '/img/Administrator/Pramod.jpg',
                                            cvLink: '/img/chemistry/Dr-Rakesh-Joshi.doc'
                                        },
                                        {
                                            name: 'Hitendra Singh',
                                            role: 'Professor, Department of Chemistry',
                                            email: 'hitensingh25@gmail.com',
                                            image: '/img/Administrator/Vijay.jpg',
                                            cvLink: '/img/chemistry/Hitendra-CV.docx'
                                        },
                                        {
                                            name: 'Dr. Neeta Joshi',
                                            role: 'Professor, Department of Chemistry',
                                            contact: '+919412982875',
                                            email: 'neeta_joshi000@yahoo.co.in',
                                            image: '/img/Administrator/dinesh.jpg',
                                            cvLink: '/img/chemistry/NJ-profile.docx'
                                        }
                                    ]
                                    : isEnglish
                                        ? [
                                            {
                                                name: 'Dr. Parul Mishra',
                                                role: 'Assistant Professor, Department of English',
                                                contact: '+919412935163, +918004440687',
                                                email: 'dparulbhu@gmail.com',
                                                image: '/img/Administrator/uma1.jpg',
                                                cvLink: '/img/english/Dr-Parul-Mishra.docx'
                                            },
                                            {
                                                name: 'Dr. Hemant Kumar Shukla',
                                                role: 'Professor & H.O.D., Department of English',
                                                contact: '+917500784114, +919897438142',
                                                email: 'hemantkumar.shukla1@gmail.com',
                                                image: '/img/Administrator/Manoj.jpg',
                                                cvLink: '/img/english/Hemant-Shukla.docx'
                                            },
                                            {
                                                name: 'Dr. Pramod Kumar Kukreti',
                                                role: 'Professor, Department of English Literature',
                                                contact: '+919528379117',
                                                email: 'parmodkukreti3@gmail.com',
                                                image: '/img/Administrator/Pramod.jpg',
                                                cvLink: '/img/english/Dr-Pramod-Kumar-Kukreti.docx'
                                            }
                                        ]
                                        : [
                                            { name: `Dr. A. Sharma (${departmentName})`, image: '/img/Administrator/AEC.jpg' },
                                            { name: `Dr. R. Joshi (${departmentName})`, image: '/img/Administrator/Pramod.jpg' },
                                            { name: `Dr. N. Rawat (${departmentName})`, image: '/img/Administrator/Vijay.jpg' }
                                        ];
    const photos = isMathematics
        ? ['/img/mathematics/Department%20Of%20Mathematics/Mathematics.jpeg']
        : isMicrobiology
            ? ['/img/H3.jpg']
            : isSanskrit
                ? ['/img/H4.jpg']
                : isSociology
                    ? ['/img/H2.jpg']
                    : isZoology
                        ? [
                            '/img/zoology/zoology-faculty.jpeg',
                            '/img/zoology/zoology-lab-pic1.jpeg',
                            '/img/zoology/zoology-lab-pic2.jpeg',
                            '/img/zoology/zoology-lab-pic3.jpeg',
                            '/img/zoology/zoology-lab-pic4.jpeg'
                        ]
                        : isChemistry
                            ? ['/img/chemistry/chemistry-lab-photo.jpeg']
                            : isCommerceAndManagement
                                ? ['/img/H3.jpg']
                                : isPoliticalScience
                                    ? ['/img/H2.jpg']
                                    : isPhysics
                                        ? ['/img/physics/physics-lab-pic1.jpeg', '/img/physics/physics-lab-pic2.jpeg']
                                        : isEducation
                                            ? ['/img/education/education-group-photo.jpg']
                                            : ['/img/H2.jpg', '/img/H3.jpg', '/img/H4.jpg'];
    return (_jsxs("div", { className: "department-secondary-page", children: [_jsxs("div", { className: "department-secondary-header", children: [_jsx("button", { className: "back-button", onClick: onBack, children: language === 'en' ? 'Back' : 'Back' }), _jsx("h1", { children: `DEPARTMENT OF ${departmentName.toUpperCase()}` })] }), _jsxs("div", { className: "department-secondary-container", children: [_jsxs("section", { className: "department-intro", children: [_jsx("h2", { children: data.introTitle }), isMathematics ? (mathematicsIntroParagraphs.map((paragraph, index) => _jsx("p", { children: paragraph }, index))) : isMicrobiology ? (microbiologyIntroParagraphs.map((paragraph, index) => _jsx("p", { children: paragraph }, index))) : isMusic ? (musicIntroParagraphs.map((paragraph, index) => _jsx("p", { children: paragraph }, index))) : isPoliticalScience ? (politicalScienceIntroParagraphs.map((paragraph, index) => _jsx("p", { children: paragraph }, index))) : isSanskrit ? (sanskritIntroParagraphs.map((paragraph, index) => _jsx("p", { children: paragraph }, index))) : isSociology ? (sociologyIntroParagraphs.map((paragraph, index) => _jsx("p", { children: paragraph }, index))) : isZoology ? (zoologyIntroParagraphs.map((paragraph, index) => _jsx("p", { children: paragraph }, index))) : isChemistry ? (chemistryIntroParagraphs.map((paragraph, index) => _jsx("p", { children: paragraph }, index))) : isCommerceAndManagement ? (commerceManagementIntroParagraphs.map((paragraph, index) => _jsx("p", { children: paragraph }, index))) : isPhysics ? (physicsIntroParagraphs.map((paragraph, index) => _jsx("p", { children: paragraph }, index))) : isEnglish ? (englishIntroParagraphs.map((paragraph, index) => _jsx("p", { children: paragraph }, index))) : (_jsx("p", { children: data.introText }))] }), _jsxs("section", { className: "department-photos", children: [_jsx("h2", { children: data.photosTitle }), _jsx("div", { className: "department-photos-grid", children: photos.map((photo, index) => (_jsx("div", { className: "department-photo-card", children: _jsx("img", { src: photo, alt: `${departmentName} ${index + 1}` }) }, index))) })] }), _jsxs("section", { className: "department-staff", children: [_jsx("h2", { children: data.staffTitle }), _jsx("div", { className: "department-staff-grid", children: staffMembers.map((member, index) => (_jsxs("div", { className: "department-staff-card", children: [_jsx("img", { src: member.image, alt: member.name, className: "staff-image" }), _jsx("h3", { children: member.name }), _jsx("p", { children: member.role || data.role }), member.contact && _jsxs("p", { className: "staff-contact", children: ["Contact: ", member.contact] }), member.email && _jsxs("p", { className: "staff-contact", children: ["Email: ", member.email] }), _jsx("button", { className: "staff-cv-btn", onClick: () => handleViewTeacherProfile(member), children: "View More" })] }, index))) })] })] })] }));
};
export function getSelectedTeacher() {
    return selectedTeacherInfo;
}
export default DepartmentSecondaryPage;
//# sourceMappingURL=DepartmentSecondaryPage.js.map