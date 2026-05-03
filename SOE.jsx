export const sectionsConfig = [
  {
    componentName: "Landing",
    enabled: true,
    position: 1,
    props: {
      slides: soeSlides,
    },
  },

  {
    componentName: "AboutSection",
    enabled: true,
    position: 2,
    props: {
      data: {
        heading: "About Us",
        subtitle: "School of Engineering",

        floatingIcons: [
          {
            icon: <Code size={40} />,
            color: "text-blue-400",
            style: "top-20 left-10",
          },
          {
            icon: <Lightbulb size={35} />,
            color: "text-purple-400",
            style: "top-32 right-20",
          },
          {
            icon: <Rocket size={45} />,
            color: "text-indigo-400",
            style: "bottom-20 left-1/4",
          },
        ],

        cards: [
          {
            title: "Our Mission",
            icon: <Target size={28} />,
            bgGradient: "from-blue-500 to-purple-600",
            content: (
              <>
                In accordance with the Vision of the University, School of
                Engineering has been conceptualized and established with an
                objective to work out and develop a dependable model for growth,
                consistency and significant breakthrough in cutting edge
                technology and innovation. The rapid diffusion of core
                engineering fields like Civil Engineering, Electrical
                Engineering and Mechanical Engineering has the potential of
                bringing improvement in productivity and efficiency in almost
                every aspects of our life and consequently turning out to be a
                key driver of our economic growth. We are committed to prepare
                technology leaders for tomorrow with our innovative curriculum
                and meticulous pedagogy for training. The programmes offered are
                unique in their right and fall in line with international
                practices. Our efforts travel beyond classrooms and encompass
                trends and practices through our research and modular training
                at par with some of the best institutions of national and
                international repute. We encourage our graduates to opt for
                courses from different streams which shall not restrict them to
                one area but open new avenues in their field of interest.
                Faculty members are encouraged to use innovative tools in their
                teaching. We ensure that our graduate students possess necessary
                skills like Creativity, Innovation, Critical Thinking, Problem
                Solving and Collaboration.
              </>
            ),
            highlight: ["N / A"],
          },

          {
            title: "Our Commitment",
            icon: <Trophy size={28} />,
            bgGradient: "from-purple-500 to-pink-600",
            content: (
              <>
                The School offers innovative and interdisciplinary programmes,
                complemented by experiential learning in real world situation
                that allow our students to combine classroom learning and their
                exposure to the industry to understand current trends in their
                field of interest and expertise. We offer five years Integrated
                Dual-degree Programmes (B.Tech. + M. Tech./ B.Tech. + MBA) in
                the following branches:
              </>
            ),
            bullets: [
              "Civil Engineering",
              "Mechanical Engineering",
              "Electrical Engineering",
              "Architecture & Regional Planning",
            ],
          },
        ],
      },
    },
  },

  {
    componentName: "SchoolStats",
    enabled: true,
    position: 3,
    props: {
      title: "Our numbers speak for themselves",
      stats: [
        { value: 4, label: "Departments", suffix: "+" },
        { value: 25, label: "Courses", suffix: "+" },
        { value: 3000, label: "Students", suffix: "+" },
        { value: 80, label: "Faculty", suffix: "+" },
        { value: 200, label: "Publications", suffix: "+" },
        { value: 95, label: "Placement Rate", suffix: "%" },
      ],
    },
  },

  {
    componentName: "LeadershipCard",
    enabled: true,
    position: 4,
    props: {
      name: "Dr. Kirti Pal",
      title: "Dean (I/C) and Associate Professor\n",
      image: "https://www.gbu.ac.in/Content/gbudata/Employee/img/kirtipal.jpg",
      description: `It is my proud privilege to welcome you at School of Engineering on the Website of Gautam Buddha University. The School has came in to existence in the academic session, 2010 -11 with the beginning of Five years Integrated dual degree program ( B.Tech. + M.Tech / M.B.A.) in three core branches of engineering ( Civil, Mechanical & Electrical ). In the academic session, 2014 -15, the first batch of Engineers of the University is going to pass out. In successive years B. Arch in Architecture & Regional Planning, Masters & Doctoral Programs in different disciplines have come in to existence.
As an academic community, the school is committed to the belief that expanding our knowledge of the liberal Sciences & Technologies will enable us to live better lives and to contribute more to society. Thus we are constantly trying to remain competitive, to maintain excellence in teaching to strengthen our undergraduate and graduate programs and to build the School’s research agenda to increase the external partnerships & sponsors. I hope that you will join us in our mission..`,
    },
  },

  {
    componentName: "DepartmentsSection",
    enabled: true,
    position: 5,
    props: {
      departments: [
        {
          name: "Electrical Engineering",
          code: "EE",
          description:
            "Focus on power systems, electronics, control systems and automation.",
          courses: [
            "B.Tech Electrical Engineering",
            "B.Tech Electrical Engineering (Industrial Automation)",
            "B.Tech Electrical Engineering (Electric Vehicles)",
            "B.Tech Electrical Engineering (AI & ML)",
            "B.Tech Electrical Engineering (Biomedical Engineering)",
            "B.Tech Electrical Engineering (Computer Engineering)",
            "B.Tech Electrical & Computer Engineering",
            "B.Tech Electrical & Electronics Engineering",
            "Integrated B.Tech–M.Tech/MBA (Power Systems)",
            "Integrated B.Tech–M.Tech/MBA (Instrumentation & Control)",
            "Integrated B.Tech–M.Tech/MBA (Power Electronics & Drives)",
            "Integrated B.Tech–M.Tech/MBA (Renewable Energy)",
            "Integrated B.Tech–M.Tech/MBA (MBA)",
            "M.Tech Power System",
            "M.Tech Power Electronics & Drives",
            "M.Tech Instrumentation & Control System",
            "M.Tech Renewable Energy Sources",
            "M.Tech Power & Energy Systems",
            "Ph.D Electrical Engineering",
          ],
          faculty: 16,
          labs: 17,
          image: "image-URL",
          gradient: "from-blue-400 to-blue-600",
          link: "/schools/engineering/departments/ee",
        },

        {
          name: "Mechanical Engineering",
          code: "ME",
          description:
            "Covers design, manufacturing, thermal and industrial engineering.",
          courses: [
            "B.Tech Mechanical Engineering",
            "M.Tech Mechanical Engineering (Design Engineering)",
            "M.Tech Mechanical Engineering (Manufacturing Engineering)",
            "M.Tech Mechanical Engineering (Thermal Engineering)",
            "Ph.D Mechanical Engineering (Thermal Engineering)",
            "Ph.D Mechanical Engineering (Design Engineering)",
            "Ph.D Mechanical Engineering (Manufacturing Engineering)",
            "Ph.D Mechanical Engineering (Industrial Engineering)",
          ],
          faculty: 9,
          labs: 11,
          image: "image-URL",
          gradient: "from-blue-600 to-blue-800",
          link: "/schools/engineering/departments/me",
        },

        {
          name: "Civil Engineering",
          code: "CE",
          description:
            "Focuses on infrastructure, structural and environmental engineering.",
          courses: [
            "B.Tech Civil Engineering",
            "B.Tech Civil Engineering (Working Professionals)",
            "B.Tech Civil Engineering (Lateral Entry)",
            "M.Tech Civil Engineering (Structural Engineering)",
            "M.Tech Civil Engineering (Environmental Engineering)",
            "M.Tech Civil Engineering (Transportation Engineering)",
            "M.Tech Civil Engineering (Geotechnical & Geo Environmental Engineering)",
            "M.Tech Civil Engineering (Construction Management)",
            "M.Tech Civil Engineering (Working Professionals - Structural Engineering)",
            "Ph.D Civil Engineering",
          ],
          faculty: 13,
          labs: 10,
          image: "image-URL",
          gradient: "from-blue-500 to-blue-700",
          link: "/schools/engineering/departments/ce",
        },

        {
          name: "Architecture & Regional Planning",
          code: "AR",
          description:
            "Focuses on urban planning, architecture design and development.",
          courses: [
            "B.Arch",
            "B.Des (Interior Design)",
            "M.Arch (Sustainable Architecture)",
            "MURP (Master of Urban & Regional Planning)",
          ],
          faculty: 10,
          labs: 7,
          image: "image-URL",
          gradient: "from-blue-500 to-blue-700",
          link: "/schools/engineering/departments/ar",
        },
      ],
    },
  },

  {
    componentName: "ProgramsShowcase",
    enabled: true,
    position: 6,
    props: {
      programs: [
        // ================= CSE =================
        {
          name: "B.Tech Computer Science & Engineering",
          code: "CSE",
          duration: "4 Years",
          specializations: [
            "AI",
            "Data Science",
            "Cyber Security",
            "Software Engineering",
          ],
          image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
          description:
            "Undergraduate program in Computer Science with industry-focused specializations.",
        },
        {
          name: "Integrated B.Tech–M.Tech CSE",
          code: "CSE Dual",
          duration: "5 Years",
          specializations: [
            "AI & Robotics",
            "Data Science",
            "Software Engineering",
          ],
          image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1",
          description:
            "Dual degree program combining B.Tech and M.Tech in CSE.",
        },
        {
          name: "M.Tech Computer Science & Engineering",
          code: "M.Tech CSE",
          duration: "2 Years",
          specializations: [
            "AI & Robotics",
            "Data Science",
            "Software Engineering",
          ],
          image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
          description:
            "Postgraduate program focused on advanced computing technologies.",
        },
        {
          name: "Ph.D Computer Science & Engineering",
          code: "PhD CSE",
          duration: "Varies",
          specializations: ["Research in AI, ML, Cybersecurity"],
          image: "https://images.unsplash.com/photo-1581091870622-1e7b1a6be9f2",
          description:
            "Doctoral research program in cutting-edge computing domains.",
        },

        // ================= ELECTRICAL =================
        {
          name: "B.Tech Electrical Engineering",
          code: "EE",
          duration: "4 Years",
          specializations: [
            "Industrial Automation",
            "Electric Vehicles",
            "AI & ML",
            "Biomedical Engineering",
            "Computer Engineering",
          ],
          image: "https://images.unsplash.com/photo-1509395176047-4a66953fd231",
          description:
            "Core electrical engineering program with modern specialization tracks.",
        },
        {
          name: "Integrated B.Tech–M.Tech Electrical",
          code: "EE Dual",
          duration: "5 Years",
          specializations: [
            "Power Systems",
            "Instrumentation & Control",
            "Power Electronics",
            "Renewable Energy",
          ],
          image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758",
          description:
            "Integrated program combining undergraduate and postgraduate electrical studies.",
        },
        {
          name: "M.Tech Electrical Engineering",
          code: "M.Tech EE",
          duration: "2 Years",
          specializations: [
            "Power System",
            "Power Electronics",
            "Instrumentation & Control",
            "Renewable Energy",
            "Energy Systems",
          ],
          image: "https://images.unsplash.com/photo-1518779578993-ec3579fee39f",
          description:
            "Advanced postgraduate program in electrical engineering domains.",
        },
        {
          name: "Ph.D Electrical Engineering",
          code: "PhD EE",
          duration: "Varies",
          specializations: ["Electrical Engineering Research"],
          image: "https://images.unsplash.com/photo-1554475901-4538ddfbccc2",
          description: "Doctoral research in electrical and energy systems.",
        },

        // ================= MECHANICAL =================
        {
          name: "B.Tech Mechanical Engineering",
          code: "ME",
          duration: "4 Years",
          specializations: [],
          image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789",
          description:
            "Undergraduate program covering core mechanical engineering concepts.",
        },
        {
          name: "M.Tech Mechanical Engineering",
          code: "M.Tech ME",
          duration: "2 Years",
          specializations: [
            "Design Engineering",
            "Manufacturing Engineering",
            "Thermal Engineering",
          ],
          image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc",
          description:
            "Postgraduate specialization in core mechanical domains.",
        },
        {
          name: "Ph.D Mechanical Engineering",
          code: "PhD ME",
          duration: "Varies",
          specializations: [
            "Thermal Engineering",
            "Design Engineering",
            "Manufacturing Engineering",
            "Industrial Engineering",
          ],
          image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70",
          description: "Doctoral research in mechanical engineering fields.",
        },

        // ================= CIVIL =================
        {
          name: "B.Tech Civil Engineering",
          code: "CE",
          duration: "4 Years",
          specializations: [],
          image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e",
          description:
            "Undergraduate program focused on infrastructure and construction engineering.",
        },
        {
          name: "M.Tech Civil Engineering",
          code: "M.Tech CE",
          duration: "2 Years",
          specializations: [
            "Structural Engineering",
            "Environmental Engineering",
            "Transportation Engineering",
            "Geotechnical Engineering",
            "Construction Management",
          ],
          image: "https://images.unsplash.com/photo-1581093458791-9d09d7e07b6a",
          description:
            "Advanced civil engineering program with multiple specializations.",
        },
        {
          name: "Ph.D Civil Engineering",
          code: "PhD CE",
          duration: "Varies",
          specializations: ["Civil Engineering Research"],
          image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e",
          description: "Doctoral research in civil engineering disciplines.",
        },

        // ================= ARCHITECTURE =================
        {
          name: "B.Arch",
          code: "B.Arch",
          duration: "5 Years",
          specializations: [],
          image: "https://images.unsplash.com/photo-1505842465776-3acb1f4a0a94",
          description: "Professional undergraduate program in architecture.",
        },
        {
          name: "B.Des (Interior Design)",
          code: "B.Des",
          duration: "4 Years",
          specializations: ["Interior Design"],
          image: "https://images.unsplash.com/photo-1492724441997-5dc865305da7",
          description:
            "Design program focused on interior spaces and human-centered design.",
        },
        {
          name: "M.Arch (Sustainable Architecture)",
          code: "M.Arch",
          duration: "2 Years",
          specializations: ["Sustainable Architecture"],
          image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e",
          description:
            "Postgraduate architecture program focusing on sustainability.",
        },
        {
          name: "MURP",
          code: "MURP",
          duration: "2 Years",
          specializations: ["Urban & Regional Planning"],
          image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab",
          description: "Master program in urban and regional planning.",
        },
      ],
    },
  },

  {
    componentName: "FacultyCarousel",
    enabled: true,
    position: 7,
    props: {
      title: "Faculty of School of Engineering",
      subTitle: "All Departments",
      facultyList: [
        // ===== ARCHITECTURE =====
        {
          name: "Ms. Madhuri Agarwal",
          title: "HOD & Assistant Professor – Architecture",
          image: "https://via.placeholder.com/300x300?text=Madhuri+Agarwal",
        },
        {
          name: "Prof. Charanjit Singh Shah",
          title: "Professor – Architecture",
          image: "https://via.placeholder.com/300x300?text=Charanjit+Shah",
        },
        {
          name: "Prof. Krishna Kumar Dhote",
          title: "Professor – Architecture",
          image: "https://via.placeholder.com/300x300?text=Krishna+Dhote",
        },
        {
          name: "Dr. Nirmita Mehrotra",
          title: "Assistant Professor – Architecture",
          image: "https://via.placeholder.com/300x300?text=Nirmita+Mehrotra",
        },
        {
          name: "Ar. Priyank Jain",
          title: "Assistant Professor – Architecture",
          image: "https://via.placeholder.com/300x300?text=Priyank+Jain",
        },

        // ===== ELECTRICAL =====
        {
          name: "Dr. Kirti Pal",
          title: "Dean – Electrical Engineering",
          image: "https://via.placeholder.com/300x300?text=Kirti+Pal",
        },
        {
          name: "Dr. Omveer Singh",
          title: "HOD – Electrical Engineering",
          image: "https://via.placeholder.com/300x300?text=Omveer+Singh",
        },
        {
          name: "Dr. Nidhi Singh",
          title: "Assistant Professor – Electrical",
          image: "https://via.placeholder.com/300x300?text=Nidhi+Singh",
        },
        {
          name: "Dr. M.A. Ansari",
          title: "Assistant Professor – Electrical",
          image: "https://via.placeholder.com/300x300?text=MA+Ansari",
        },
        {
          name: "Dr. Rahul",
          title: "Assistant Professor – Electrical",
          image: "https://via.placeholder.com/300x300?text=Dr+Rahul",
        },
        {
          name: "Dr. Isha Kansal",
          title: "Assistant Professor – Electrical",
          image: "https://via.placeholder.com/300x300?text=Isha+Kansal",
        },
        {
          name: "Dr. Preeti Kumari",
          title: "Assistant Professor – Electrical",
          image: "https://via.placeholder.com/300x300?text=Preeti+Kumari",
        },
        {
          name: "Mr. Ravikant Yadav",
          title: "Faculty – Electrical Engineering",
          image: "https://via.placeholder.com/300x300?text=Ravikant+Yadav",
        },
        {
          name: "Ms. Kreti",
          title: "Faculty – Electrical Engineering",
          image: "https://via.placeholder.com/300x300?text=Kreti",
        },
        {
          name: "Ms. Jyoti",
          title: "Faculty – Electrical Engineering",
          image: "https://via.placeholder.com/300x300?text=Jyoti",
        },

        // ===== CIVIL =====
        {
          name: "Dr. Shobha Ram",
          title: "HOD & Assistant Professor – Civil Engineering",
          image: "https://via.placeholder.com/300x300?text=Shobha+Ram",
        },
        {
          name: "Dr. Anju Agarwal",
          title: "Professor – Civil Engineering",
          image: "https://via.placeholder.com/300x300?text=Anju+Agarwal",
        },
        {
          name: "Dr. Rohit Ralli",
          title: "Assistant Professor – Civil Engineering",
          image: "https://via.placeholder.com/300x300?text=Rohit+Ralli",
        },
        {
          name: "Mr. Rahul Kumar",
          title: "Assistant Professor – Civil Engineering",
          image: "https://via.placeholder.com/300x300?text=Rahul+Kumar",
        },
        {
          name: "Anvita Tripathi",
          title: "Assistant Professor – Civil Engineering",
          image: "https://via.placeholder.com/300x300?text=Anvita+Tripathi",
        },
        {
          name: "Vikas Kumar",
          title: "Assistant Professor – Civil Engineering",
          image: "https://via.placeholder.com/300x300?text=Vikas+Kumar",
        },
        {
          name: "Chitransh Sharma",
          title: "Assistant Professor – Civil Engineering",
          image: "https://via.placeholder.com/300x300?text=Chitransh+Sharma",
        },
        {
          name: "Manish Tomar",
          title: "Assistant Professor – Civil Engineering",
          image: "https://via.placeholder.com/300x300?text=Manish+Tomar",
        },
        {
          name: "Km. Varsha Mall",
          title: "Assistant Professor – Civil Engineering",
          image: "https://via.placeholder.com/300x300?text=Varsha+Mall",
        },

        // ===== MECHANICAL =====
        {
          name: "Dr. Dharamvir Mangal",
          title: "Assistant Professor – Mechanical Engineering",
          image: "https://via.placeholder.com/300x300?text=Dharamvir+Mangal",
        },
        {
          name: "Dr. Harishchandra Thakur",
          title: "Assistant Professor – Mechanical Engineering",
          image:
            "https://via.placeholder.com/300x300?text=Harishchandra+Thakur",
        },
        {
          name: "Dr. Satpal Sharma",
          title: "Assistant Professor – Mechanical Engineering",
          image: "https://via.placeholder.com/300x300?text=Satpal+Sharma",
        },
        {
          name: "Dr. Parvesh Ali",
          title: "Faculty – Mechanical Engineering",
          image: "https://via.placeholder.com/300x300?text=Parvesh+Ali",
        },
        {
          name: "Dr. Vikas Shrivastava",
          title: "Faculty – Mechanical Engineering",
          image: "https://via.placeholder.com/300x300?text=Vikas+Shrivastava",
        },
        {
          name: "Prashant Gill",
          title: "Faculty – Mechanical Engineering",
          image: "https://via.placeholder.com/300x300?text=Prashant+Gill",
        },
        {
          name: "Dr. Manish Dev",
          title: "Faculty – Mechanical Engineering",
          image: "https://via.placeholder.com/300x300?text=Manish+Dev",
        },
        {
          name: "Suraj Kumar Singh",
          title: "Faculty – Mechanical Engineering",
          image: "https://via.placeholder.com/300x300?text=Suraj+Kumar+Singh",
        },
      ],
    },
  },
  {
    componentName: "NoticeEvents",
    enabled: true,
    position: 8,
    props: {
      notices: [
        {
          title: "Back Paper Examination Date Sheet – Even Semester 2024–25",
          date: "2025-05-16",
          type: "Important",
        },
        {
          title: "Notice for Aadhaar e‑kyc through UPDESCO",
          date: "2025-06-03",
          type: "Administrative",
        },
        {
          title: "Tablet Distribution Program Scheduled",
          date: "2025-05-24",
          type: "General",
        },
        {
          title: "Office Order for Hostel & Mess Exemption",
          date: "2025-05-13",
          type: "Administrative",
        },
        {
          title: "Office Order for Hostel & Mess2 Exemption",
          date: "2025-05-13",
          type: "Administrative",
        },
        {
          title: "PhD Thesis Submission Guidelines Update",
          date: "2025-05-12",
          type: "Academic",
        },
        {
          title: "Summer Internship Opportunities 2025",
          date: "2025-05-10",
          type: "Placement",
        },
        {
          title: "Library Working Hours Extended",
          date: "2025-05-09",
          type: "General",
        },
        {
          title: "Research Grant Applications Open",
          date: "2025-05-08",
          type: "Research",
        },
        {
          title: "Campus Recruitment Drive - TCS",
          date: "2025-05-07",
          type: "Placement",
        },
        {
          title: "Student Council Elections Schedule",
          date: "2025-05-06",
          type: "Important",
        },
        {
          title: "Student Council Elections Schedule",
          date: "2025-05-06",
          type: "Important",
        },
      ],

      events: [
        // ===== ELECTRICAL ENGINEERING =====
        {
          title: "Workshop on Power Systems & Renewable Energy",
          date: "2024-03-15",
          image: "https://images.unsplash.com/photo-1509395176047-4a66953fd231",
          description:
            "Hands-on workshop on power systems, renewable energy technologies, and modern electrical applications.",
        },
        {
          title: "MATLAB & Simulation Training Session",
          date: "2024-02-20",
          image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c",
          description:
            "Training program focused on simulation-based learning using MATLAB for electrical engineering students.",
        },
        {
          title: "IEEE Technical Workshop & Seminar",
          date: "2024-01-25",
          image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
          description:
            "Technical sessions and workshops conducted under IEEE student chapter for skill development.",
        },

        // ===== MECHANICAL ENGINEERING =====
        {
          title: "Virtual Lab Workshop on Fluid Mechanics",
          date: "2024-03-10",
          image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758",
          description:
            "Simulation-based experiments including Bernoulli theorem, Venturimeter, and Reynolds experiment.",
        },
        {
          title: "Industry Expert Lecture on Manufacturing Technology",
          date: "2024-02-28",
          image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789",
          description:
            "Guest lecture by industry expert covering modern manufacturing techniques and industrial practices.",
        },
        {
          title: "Project-Based Learning Showcase",
          date: "2024-01-30",
          image: "https://images.unsplash.com/photo-1537432376769-00a8c7f4c6d3",
          description:
            "Students presented innovative engineering projects focusing on real-world problem solving.",
        },
        {
          title: "ANSYS & Hypermesh Training Program",
          date: "2024-02-10",
          image: "https://images.unsplash.com/photo-1581093458791-9d09d7e07b6a",
          description:
            "Hands-on training on simulation tools like ANSYS and Hypermesh for mechanical design and analysis.",
        },
      ],
    },
  },
  {
    componentName: "ClubsAchievements",
    enabled: true,
    position: 9,
    props: {
      clubs: [
        {
          name: "Techno Cultural Club",
          description:
            "Runs coding contests, hackathons, robotics, quizzes, poster-making & cultural events.",
          members: 150,
          category: "Technical & Cultural",
          facultyAdvisor: "Dr. Vimlesh Kumar Ray",
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_dlCh4LMQ-987UX_Ssas6havujpWSVCmIGw&s",
          socialLinks: {
            instagram: "https://instagram.com/technoculture_gbu",
            linkedin: "https://linkedin.com/company/techno-club-gbu",
            email: "techno.ict.gbu@gmail.com",
          },
        },
        {
          name: "GDSC – Google Developer Student Club",
          description:
            "Peer-run community for workshops in Web Dev, Cloud, ML under GDSC umbrella.",
          members: 500,
          category: "Technical",
          facultyAdvisor: "Dr. Rajesh Mishra",
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQxT9G3gSxNZESl4NJH1NzcPq0kBF1XNyHcA&s",
          socialLinks: {
            instagram: "https://instagram.com/gdsc_gbu",
            linkedin:
              "https://linkedin.com/company/gdsc-gautam-buddha-university",
            email: "gdsc@gbu.ac.in",
          },
        },
        {
          name: "IEEE Student Branch",
          description:
            "Professional branch organizing tech talks, paper contests & networking.",
          members: 60,
          category: "Professional",
          facultyAdvisor: "Dr. Vikram Singh",
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQxT9G3gSxNZESl4NJH1NzcPq0kBF1XNyHcA&s",

          socialLinks: {
            linkedin: "https://linkedin.com/company/ieeestudentbranch",
            twitter: "https://twitter.com/ieeestudents",
            email: "ieee@gbu.ac.in",
          },
        },
        {
          name: "Programming / CodeChef Chapter",
          description:
            "Competitive coding community hosting Code Matrix, Learn to Code & hackathons.",
          members: 200,
          category: "Technical",
          facultyAdvisor: "Dr. Anurag Singh Baghel",
          image:
            "https://repository-images.githubusercontent.com/389157855/a2869f47-24d9-4e16-a6cc-b944855dc5f7",
          socialLinks: {
            instagram: "https://instagram.com/codechef_gbu",
            email: "codechef@gbu.ac.in",
          },
        },
        {
          name: "Robotics Club",
          description:
            "Builds autonomous systems & competes in national robotics events.",
          members: 45,
          category: "Technical",
          facultyAdvisor: "Dr. Vimlesh Kumar Ray",
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_dlCh4LMQ-987UX_Ssas6havujpWSVCmIGw&s",

          socialLinks: {
            twitter: "https://twitter.com/robiotics_gbu",
            email: "robotics@gbu.ac.in",
          },
        },
        {
          name: "Dhrishtikon – Debate Society",
          description:
            "Promotes free discussion, public speaking & debate competitions.",
          members: 80,
          category: "Cultural",
          facultyAdvisor: "Dr. Manjari Suman",
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQiaFXt6eK5fEvem3rwrqMkO-O3ERZm0rV9g&s",

          socialLinks: {
            linkedin: "https://linkedin.com/company/drishtikon-gbu",
            email: "drishtikon@gbu.ac.in",
          },
        },
        {
          name: "Cultural Council",
          description:
            "Oversees Drama, Dance, Music, Painting, Photography, Literature, Adventure clubs.",
          members: 300,
          category: "Cultural",
          facultyAdvisor: "Dr. Anand Pratap Singh",
          image:
            "https://www.palmbeachculture.com/wp/wp-content/uploads/2025/06/Art-Calls-32.jpg",

          socialLinks: {
            facebook: "https://facebook.com/abhivyanjana",
            instagram: "https://instagram.com/abhivyanjana_gbu",
            email: "cultural@gbu.ac.in",
          },
        },
        {
          name: "Adventure Club",
          description:
            "Organizes trekking, camping and outdoor adventure activities.",
          members: 60,
          category: "Adventure",
          facultyAdvisor: "Dr. Sunita Gupta",
          image:
            "https://i.pinimg.com/736x/2a/9b/fd/2a9bfd335b50e86e48ad59b4b28aa5b5.jpg",

          socialLinks: {
            email: "adventure@gbu.ac.in",
          },
        },
        {
          name: "Photography Club",
          description: "Encourages campus photography exhibitions & workshops.",
          members: 50,
          category: "Creative",
          facultyAdvisor: "Dr. Vidushi Sharma",
          image:
            "https://image-static.collegedunia.com/public/reviewPhotos/899143/unnamed.jpg",

          socialLinks: {
            instagram: "https://instagram.com/photoclub_gbu",
            email: "photography@gbu.ac.in",
          },
        },
        {
          name: "Art & Painting Club",
          description:
            "Hosts workshops & exhibitions to nurture visual arts on campus.",
          members: 40,
          category: "Creative",
          facultyAdvisor: "Dr. Anand Pratap Singh",
          image:
            "https://images.squarespace-cdn.com/content/v1/604e4790cbfeea1a501ac957/1664284358990-4TBHSR3TPHO2A3M8O79V/teen+photo.jpeg",

          socialLinks: {
            email: "art@gbu.ac.in",
          },
        },
      ],
    },
  },
  {
    componentName: "PlacementsSection",
    enabled: true,
    position: 10,
    props: {
      data: {
        title: "Placements",
        subTitle: "Electrical, Mechanical, Civil & Architecture",
        heroImage:
          "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=1200&h=300&fit=crop",

        placementStats: [
          {
            label: "Departments Covered",
            value: "4",
            color: "bg-green-500",
          },
          {
            label: "Core + IT Recruiters",
            value: "50+",
            color: "bg-blue-500",
          },
          {
            label: "Domains",
            value: "Core / IT / Design",
            color: "bg-purple-500",
          },
          {
            label: "Opportunities",
            value: "Internships + Jobs",
            color: "bg-yellow-500",
          },
        ],
      },
    },
  },

  {
    componentName: "RecentPlacements",
    enabled: true,
    position: 11,
    props: {
      data: {
        sectionTitle: "Placement Highlights",

        students: [
          // ===== ELECTRICAL =====
          {
            name: "Electrical Engineering Student",
            company: "TCS",
            package: "₹3.5 - 6 LPA",
            department: "B.Tech Electrical",
            photo: "https://randomuser.me/api/portraits/men/32.jpg",
          },
          {
            name: "Electrical Engineering Student",
            company: "Wipro",
            package: "₹3.5 - 5 LPA",
            department: "B.Tech Electrical",
            photo: "https://randomuser.me/api/portraits/women/44.jpg",
          },

          // ===== MECHANICAL =====
          {
            name: "Mechanical Engineering Student",
            company: "Honda",
            package: "₹4 - 7 LPA",
            department: "B.Tech Mechanical",
            photo: "https://randomuser.me/api/portraits/men/65.jpg",
          },
          {
            name: "Mechanical Engineering Student",
            company: "Tata Motors",
            package: "₹4 - 8 LPA",
            department: "B.Tech Mechanical",
            photo: "https://randomuser.me/api/portraits/men/41.jpg",
          },

          // ===== CIVIL =====
          {
            name: "Civil Engineering Student",
            company: "L&T Construction",
            package: "₹4 - 6 LPA",
            department: "B.Tech Civil",
            photo: "https://randomuser.me/api/portraits/women/68.jpg",
          },
          {
            name: "Civil Engineering Student",
            company: "DLF",
            package: "₹3 - 5 LPA",
            department: "B.Tech Civil",
            photo: "https://randomuser.me/api/portraits/men/52.jpg",
          },

          // ===== ARCHITECTURE =====
          {
            name: "Architecture Student",
            company: "Architectural Design Firms",
            package: "₹3 - 6 LPA",
            department: "B.Arch",
            photo: "https://randomuser.me/api/portraits/women/25.jpg",
          },
          {
            name: "Architecture Student",
            company: "Urban Planning Firms",
            package: "₹4 - 7 LPA",
            department: "B.Arch",
            photo: "https://randomuser.me/api/portraits/men/22.jpg",
          },
        ],
      },
    },
  },

  {
    componentName: "RecruitersShowcase",
    enabled: true,
    position: 12,
    props: {
      recruitersData: [
        // ===== CORE + IT COMPANIES =====
        { name: "TCS", logo: "https://logo.clearbit.com/tcs.com" },
        { name: "Wipro", logo: "https://logo.clearbit.com/wipro.com" },
        { name: "HCL", logo: "https://logo.clearbit.com/hcltech.com" },
        { name: "Infosys", logo: "https://logo.clearbit.com/infosys.com" },

        // ===== CORE ENGINEERING =====
        { name: "L&T", logo: "https://logo.clearbit.com/larsentoubro.com" },
        {
          name: "Tata Motors",
          logo: "https://logo.clearbit.com/tatamotors.com",
        },
        { name: "Honda", logo: "https://logo.clearbit.com/honda.com" },

        // ===== ARCHITECTURE / DESIGN =====
        { name: "DLF", logo: "https://logo.clearbit.com/dlf.in" },
        { name: "NBCC", logo: "https://logo.clearbit.com/nbccindia.com" },
      ],
    },
  },
  {
    componentName: "StudentStartup",
    enabled: true,
    position: 13,
    props: {
      startupData: {
        startups: [
          {
            name: "KOYAL FM",
            founder: "GBU Incubation Team",
            description: "Campus-based community radio initiative by students",
            funding: "University Supported",
            status: "Incubated",
            image:
              "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=500&fit=crop",
            year: "2020",
          },
        ],
        stats: {
          totalFunding: "₹19.3L+",
          totalDepartments: 4,
        },
      },
    },
  },
  {
    componentName: "StudentAchievements",
    enabled: true,
    position: 14,
    props: {
      achievements: [
        // ===== ARCHITECTURE (SOARCH) =====
        {
          title: "NASA Design Competition Participation",
          achievement: "International Participation",
          year: "2023",
          student: "Architecture Students",
          department: "Architecture",
          image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e",
          description:
            "Students from School of Architecture participated in international NASA design competitions showcasing innovative architectural solutions.",
        },
        {
          title: "Urban Planning & Design Projects",
          achievement: "Academic Excellence",
          year: "2023",
          student: "B.Arch Students",
          department: "Architecture",
          image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab",
          description:
            "Students developed advanced urban planning and sustainable design projects addressing real-world infrastructure challenges.",
        },

        // ===== ELECTRICAL ENGINEERING =====
        {
          title: "Research Publications in Power Systems",
          achievement: "Multiple Research Papers Published",
          year: "2023",
          student: "EE Students & Researchers",
          department: "Electrical Engineering",
          image: "https://images.unsplash.com/photo-1509395176047-4a66953fd231",
          description:
            "Electrical Engineering students contributed to research in power systems, renewable energy, and smart grid technologies.",
        },
        {
          title: "Renewable Energy Projects",
          achievement: "Innovative Project Development",
          year: "2023",
          student: "Electrical Engineering Students",
          department: "Electrical Engineering",
          image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7",
          description:
            "Students developed projects focused on solar energy, electric vehicles, and sustainable energy solutions.",
        },
        {
          title: "Control Systems & Automation Projects",
          achievement: "Technical Innovation",
          year: "2022",
          student: "EE Students",
          department: "Electrical Engineering",
          image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758",
          description:
            "Students worked on automation, robotics, and control system-based innovations for real-world applications.",
        },
        {
          title: "Participation in Technical Workshops & IEEE Events",
          achievement: "Skill Development & Certification",
          year: "2023",
          student: "Electrical Engineering Students",
          department: "Electrical Engineering",
          image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
          description:
            "Students actively participated in IEEE workshops, seminars, and technical training sessions to enhance practical knowledge.",
        },
      ],
    },
  },
];
