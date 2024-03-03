const membersList = [
  {
    id: 1,
    fullName: "James Phelan",
    title: "Co-President, Project Lead",
    imageName: "jimmy-pic.jpg",
    bio: "Jimmy is a sophomore from Marin County, CA, pursuing a concentration in Applied Mathematics Computer Science specifically interested in Security and Data Science. After graduating, Jimmy hopes to apply his knowledge to a role in the intersection between business and technology. Outside the classroom, Jimmy is a cadet in Army ROTC and is also a member of the Brown University Men’s Rugby team. In his free time, Jimmy enjoys surfing, eating, playing sports, and chess.",
  },
  {
    id: 2,
    fullName: "Abhi Tripathi",
    title: "Co-President, Project Lead",
    imageName: "abhi-pic.jpg",
    bio: "Abhi is a junior concentrating in Applied Mathematics - Economics with a focus on optimization and data analytics. He has deep interests in entrepreneurship and investing and pursues them through his venture, Bonsai, and as part of the Brown Investment Group. In his free time, Abhi loves to be outdoors, whether it be through hiking, kayaking, or playing sports with his friends.",
  },
  {
    id: 3,
    fullName: "Julia Birmingham",
    title: "Vice President",
    imageName: "juliab-pic.jpg",
    bio: "Julia is a current Junior studying Applied Mathematics - Economics with a focus on Behaviorial Decision Sciences.",
  },
  {
    id: 4,
    fullName: "Austin Liu",
    title: "VP of Technology",
    imageName: "austin-pic.jpg",
    bio: "Freshman from Dallas, TX currently studying computer science and economics while pursuing the entrepreneurship certificate. Austin is interested in exploring the growing AI field and becoming an entrepreneur to tackle the world's problems. Outside of school, he enjoys working out, eating and hanging out with friends.",
  },
  {
    id: 5,
    fullName: "Preetish Juneja",
    title: "VP of Events, Project Lead",
    imageName: "preetish-pic.jpg",
    bio: "Preetish is a sophomore from Singapore concentrating in Computer Science and Applied Mathematics-Economics. He is passionate about artificial intelligence and hopes to harness its power to innovate technological solutions. Outside of school, he is a history buff, linguaphile and karaoke enthusiast.",
  }, 
  {
    id: 6,
    fullName: "Tony Zhao",
    title: "VP of Recruitment, Project Lead",
    imageName: "tony-pic.jpeg",
    bio: "Sophomore studying Computer Science and Economics with a focus in holistic software development.",
  },
  {
    id: 7,
    fullName: "Henry Egan",
    title: "Senior Associate, Project Lead",
    imageName: "henry-pic.jpg",
    bio: "Henry Egan is a junior from Omaha, Nebraska, pursuing a concentration in Business Economics. In addition to working with BTCG, Henry is the Editor-in-Chief of the Intercollegiate Finance Journal and is a teaching assistant for entrepreneurship classes. He is also a member of Brown’s competitive ultimate frisbee team, Brownian Motion. In his free time, Henry enjoys spending time with his friends and family outdoors.",
  },
  {
    id: 8,
    fullName: "Kylash Ganesh",
    title: "Senior Associate, Project Lead",
    imageName: "kylash-pic.png",
    bio: "Kylash is a sophomore from Easton, MA, pursuing a dual concentration in Applied Math-Economics and Computer Science. Interested in the intersection between finance and technology, Kylash is an Analyst for the Socially Responsible Investment Fund and has attended several hackathons. He also manages a 5-figure budget and plans career-driven workshops as Head of Business for the Intercollegiate Finance Journal. Outside of the classroom, Kylash enjoys eating Italian food, playing basketball with friends, and journaling.",
  },
  {
    id: 9,
    fullName: "Maximilian Koehler",
    title: "Senior Associate, Project Lead",
    imageName: "max-pic.jpg",
    bio: "Max is a sophomore from Acton, MA, pursuing a double concentration in German Studies and Applied Mathematics-Economics with a focus on mathematical finance. Outside of the classroom, he is an active member of Brown’s Investment Group and German Club, as well as being a player on Brown’s developmental ultimate team, PFunk. In his free time, Max enjoys watching soccer and football with friends, value investing, hiking, cooking, and traveling.",
  },
  {
    id: 10,
    fullName: "Bernard Li",
    title: "Junior Associate, Project Lead",
    imageName: "bernard-pic.PNG",
    bio: "Bernard is a sophomore from the Bay Area, CA and Alberta, Canada pursuing a concentration in Applied Mathematics and Mathematics-Computer Science. In addition to BTCG, Bernard is also involved with Brown Space Engineering and the Brown Socially Responsible Investment Fund on-campus, and is interested in pursuing project management or research in the intersection of mathematics and technology. Bernard is an avid cycler, and you can find him cycling, jogging, or playing basketball in his free time.",
  },
  {
    id: 11,
    fullName: "Leanne Chia",
    title: "Junior Associate, Project Lead",
    imageName: "leanne-pic.jpg",
    bio: "Leanne is a freshman from Singapore pursuing a double concentration in Computer Science and Applied Mathematics-Economics. She is interested in the intersection between finance and technology, and hopes to be at the forefront of innovation in the industry. She previously worked at the Defence Science and Technology Agency in Singapore as an intern under Air Systems, exploring cutting-edge drone technology and computer vision. In her free time, Leanne enjoys making music, exercising, and spending time with her friends and family.",
  },
  {
    id: 12,
    fullName: "Anna Steffen",
    title: "Senior Associate",
    imageName: "anna-pic.jpeg",
    bio: "Anna is a Junior from Madison, CT. She is currently working towards completing her Bachelor’s of Science in Biochemistry and Molecular Biology. She is interested in eventually pursuing a career in medicine. She previously worked at BioHaven Pharmaceuticals as an intern on the clinical operations team. In her free time, Anna likes to run, travel, and ski.",
  },
  {
    id: 13,
    fullName: "Hannah Jang",
    title: "Senior Associate",
    imageName: "hannah-pic.jpg",
    bio: "Hannah is a sophomore from Orange County, California, studying Applied Math-Economics and Computer Science. As can be seen from her concentrations, she is highly interested in the intersection of business and technology, and hopes to better explore this increasingly relevant field both inside and outside the classroom. Outside of school, she enjoys playing tennis, café hopping, and bonding with her friends.",
  },
  {
    id: 14,
    fullName: "Allen Wang",
    title: "Senior Associate",
    imageName: "allen-pic.jpg",
    bio: "Allen is a second year studying applied math--computer science. He's interested in both artificial intelligence and entrepreneurship; specifically, Allen is looking into using machine learning to help disrupt the educational field through personalized learning styles. In his free time, he enjoys playing basketball, hiking, and reading.",
  },

  {
    id: 15,
    fullName: "Justin Dyer",
    title: "Senior Associate",
    imageName: "justin-pic.jpg",
    bio: "Justin '25 concentrates on Environmental Studies and Economics. He is interested in enterprise software and early-stage consulting. He is curious about the application of SaaS for sustainability goals. Outside of BTCG, Justin is the founder and president of Sustainable Business Society and an active member of the Men's Rugby team."
  },
  {
    id: 16,
    fullName: "Sam Shulman",
    title: "Senior Associate",
    imageName: "sam-pic.jpeg",
    bio: "Sam is a Junior from Toronto, Canada. She’s studying computer science and is specifically interested in AI/ML and the UI/UX design aspect of computer-human interactions. Sam is also fascinated with Behavioral Decisions Sciences and works as a research assistant at the FeldmanHall Social and Affective Neuroscience Lab. She enjoys giving back to the community by teaching CS at local high schools and volunteering with Best Buddies. In her free time, she enjoys the outdoors and playing hockey.",
  },
  {
    id: 17,
    fullName: "Paul Muser",
    title: "Senior Associate",
    imageName: "paul-pic.jpeg",
    bio: "Paul is a junior from Belmont, MA, pursuing a dual concentration in Business Economics and Computer Science. He is also an active member of the Brown Investment Group, where he is on the Research Committee. Recently, Paul has also gotten involved in Economics Research at Brown, where he has used Python and Stata to gather insights on the impact of Medieval Catholic Frescoes in Denmark. Outside of the classroom, Paul enjoys playing for the Brown Men's Rugby Team.",
  },
  {
    id: 18,
    fullName: "Ian Liu",
    title: "Senior Associate",
    imageName: "ian-pic.jpeg",
    bio: "Ian is a junior from Oradell, NJ concentrating in Applied Mathematics-Computer Science with a focus in AI/ML. Interested in the intersections between finance and technology, Ian is also an analyst for the Brown Investment Group and hopes to work at a fintech company in the summer. Outside of the classroom, Ian is a member of the Brown Men's Rugby Team, and enjoys spending time with friends and trying new foods.",
  },
  {
    id: 19,
    fullName: "Priyam Parekh",
    title: "Junior Associate",
    imageName: "priyam-pic.jpg",
    bio: "Priyam is a sophomore from New Hampshire pursuing a concentration in Applied Mathematics-Computer Science while also actively working towards the Entrepreneurship Certificate. Priyam is deeply passionate about exploring the potential of AI/ML to make a positive impact on the world. In addition, he has a keen interest in both entrepreneurship and business—he aspires to contribute to the growth and development of new, innovative products and companies. In his spare time, he enjoys watching the Celtics, reading, and eating out with his friends.",
  },
  {
    id: 20,
    fullName: "Julia Stepanenko",
    title: "Junior Associate",
    imageName: "julias-pic.jpg",
    bio: "Julia is a sophomore from Kyiv, Ukraine concentrating in Computer Science-Economics. She is currently serving as a Teaching Assistant for a sequence of business courses, as well as the Chief of Staff of the Brown Entrepreneurship Program. She likes learning languages and can speak 5 at the moment. In her free time, Julia enjoys traveling, reading, and cooking (especially baking!).",
  },
  {
    id: 21,
    fullName: "Ethan Wei",
    title: "Junior Associate",
    imageName: "ethan-pic.jpg",
    bio: "Ethan is a first year from Southern California, pursuing a concentration in Design Engineering and Computer Science. He is interested in the intersection of consumer technology and human behavior, and hopes to leverage technology to promote healthy behaviors. In his free time, Ethan enjoys finding new restaurants, journaling, and playing basketball or soccer.",
  },
  {
    id: 22,
    fullName: "Charlene Chen",
    title: "Junior Associate",
    imageName: "charlene-pic.jpg",
    bio: "Charlene is a current sophomore from Taiwan interested in studying Computer Science. She is also passionate about entrepreneurial processes and hopes to apply her knowledge at the intersection of the two. Outside of the classroom, she enjoys making art, trying new foods with friends, and learning new recipes.",
  },
  {
    id: 23,
    fullName: "Grace Yang",
    title: "Junior Associate",
    imageName: "grace-pic.png",
    bio: "Grace is a first-year from Cupertino, CA concentrating in Applied Mathematics. Beyond BTCG, she is involved with the Socially Responsible Investment Fund, FSIcon, and the Club Volleyball Team. In her free time, Grace enjoys stargazing, watching football, running, and exploring new restaurants.",
  },
  {
    id: 24,
    fullName: "Rachel Brooks",
    title: "Junior Associate",
    imageName: "rachel-pic.JPG",
    bio: "Rachel is a sophomore from London studying computer science and behavioral decision sciences. She is particularly interested in automated design making and developing responsible artificial intelligence. Outside of class, she does research with the Brown Center for Tech Responsibility, builds software for the OECD and tutors refugees in the Providence area. She also loves backpacking and traveling!",
  },
  {
    id: 25,
    fullName: "Samuel Schuchman",
    title: "Junior Associate",
    imageName: "sams-pic.jpg",
    bio: "Sam is a sophomore from Bethesda, Maryland pursuing a concentration in Computer Science and Economics. In addition to working with BCTG, Sam has a profound interest in entrepreneurship and has worked closely on multiple startups. At Brown, he also enjoys tutoring Providence-area elementary school students in computer science and playing club sports. In his free time, Sam enjoys being active outdoors and listening to new music.",
  },

  {
    id: 26,
    fullName: "Adithya Sriram",
    title: "Junior Associate",
    imageName: "adithya-pic.jpeg",
    bio: "Adithya is a sophomore from India intending to concentrate in Mathematics-Computer Science and potentially Archeology as well. In the field of CS, he is specifically interested in the intersection of AI/ML and Finance. He is currently an active member of the flight software team at Brown Space Engineering. In his free time, he enjoys playing poker, trying new foods and traveling.",
  },
  {
    id: 27,
    fullName: "Adrien Durantel",
    title: "Junior Associate",
    imageName: "adrien-pic.jpg",
    bio: "Adrien Durantel is a current freshman from London, England, studying applied math and computer science. He is very interested in both finance and particle physics. He would like to apply his skills from a research project to whatever career path he follows. In his free time, Adrien enjoys swimming, traveling, and enjoying life.",
  },
  {
    id: 28,
    fullName: "Noah Lim",
    title: "Junior Associate",
    imageName: "noah-pic.jpg",
    bio: "Noah is a freshman from Los Angeles, California pursuing a concentration in Applied Mathematics Computer Science and intrigued by the fields of finance and entrepreneurship. He is also working as a Research Analyst for the Brown Derivatives Investment Group and a student mentor for the Young Entrepreneurs of Providence. Noah enjoys playing basketball, eating Korean food, and hanging out with friends in his free time.",
  },
  {
    id: 29,
    fullName: "Vinh Legros",
    title: "Junior Associate",
    imageName: "vinh-pic.PNG",
    bio: "Vinh is a sophomore from Miami, FL pursuing a double concentration in CS-Econ as well as Engineering. Vinh's academic interests converge at the intersection of technology and economics, where he has been extensively working on projects with the French Government, as well as International Olympic committee. Outside of the classroom, Vinh plays for the Brown Men's Rugby Team, and loves to ski and sail. As a Frenchman, Vinh is a gastronomic connoisseur, and would never turn down an invitation to some cheeky beverages or hors d'oeuvres.",
  },
  {
    id: 30,
    fullName: "Santiago Cortabarria",
    title: "Junior Associate",
    imageName: "santi-pic.jpg",
    bio: "Santiago is a Junior from Miami, Florida pursuing a degree in Computer Science as well as Applied Mathematics. Santiago most recently worked as a Software Developer Intern at General Motors. Outside of the classroom, Santiago enjoys playing sports and is a member of the Brown Men's Rugby Club.",
  },
  {
    id: 31,
    fullName: "Max Boyang",
    title: "Junior Associate",
    imageName: "max-b-pic.jpg",
    bio: "Max is a first-year from Okemos, Michigan concentrating in applied mathematics and economics. As someone passionate about his community and those around him, Max is interested in the intersection of ESG in finance, technology, and entrepreneurship. Outside of the classroom, Max loves to bike, travel, eat good food, and make snowmen."
  },
  // {
  //   id: 32,
  //   fullName: "Carter Bedford",
  //   title: "Junior Associate",
  //   imageName: "santi-pic.jpg",
  //   bio: "Carter is a sophomore from Hong Kong and Colorado, pursuing a double concentration in Economics and International & Public Affairs with a focus on policy and governance. Outside of the classroom, she is an active member of the Brown Journal of World Affairs, Women in Business, and the Brown China Summit. In her free time, Carter enjoys running, cooking, and traveling."
  // }
    {
    id: 33,
    fullName: "Kaitlyn Cheng",
    title: "Junior Associate",
    imageName: "kaitlyn-pic.jpeg",
    bio: "Kaitlyn is a first-year from New York City studying Computer Science and Applied Mathematics. She’s interested in technology, finance, entrepreneurship, and how technology facilitates decision-making in businesses. In her free time, she enjoys cafe hopping, playing poker, and building vision boards."
  },
  {
    id: 34,
    fullName: "Jeffrey Liang",
    title: "Junior Associate",
    imageName: "jeff-pic.jpeg",
    bio: "Jeffrey is a Freshmen from Shanghai, China studying computer science and economics. He has deep interests for data analytics and UI/UX design development. His hobbies include playing tennis, working out, and just being outside."
  },
  {
    id: 35,
    fullName: "Luke Wilkinson",
    title: "Junior Associate",
    imageName: "luke-pic.jpg",
    bio: "Luke is a freshman from Dedham, Massachusetts concentrating in Computer Science and Economics. His academic interests lie mainly within the financial and software realms, and he is passionate about working at the intersection of these two. Outside of the classroom, Luke enjoys windsurfing, hiking, and woodworking."
  },
  {
    id: 36,
    fullName: "Cathy Zhao",
    title: "Junior Associate",
    imageName: "cathy-pic.jpg",
    bio: "Cathy is a freshman studying Applied-Math & CS. She is interested in tech and finance with a particular interest how artificial intelligence is reshaping the industries. She is also working on the Brown Entrepreneurship Tech Team and a developer at FullStack at Brown. Outside of the classroom, she enjoys painting, karaoke, and poker."
  }
];

export default membersList;
