import kwitterIMG from "./images/kwitter_img.png";
import getItDoneIMG from "./images/getItDone_img.png";
import spacetagramIMG from "./images/spacetagram_img.png";

const tab = <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>;

class ProjectOverview {
  disclaimer = "";
  constructor(
    title,
    role,
    live_URL,
    github_URL,
    img,
    desc,
    techStack,
    disclaimer
  ) {
    this.title = title;
    this.role = role;
    this.live_URL = live_URL;
    this.github_URL = github_URL;
    this.img = img;
    this.desc = desc;
    this.techStack = techStack;
    this.disclaimer = disclaimer;
  }
}

const SpacetagramOverview = new ProjectOverview(
  "Spacetagram - Social Media",
  "Developer",
  "https://caseymockbee97.github.io/spacetagram/",
  "https://github.com/caseymockbee97/spacetagram",
  spacetagramIMG,
  (
    <>
      <p>
        {tab}Spacetagram is a front-end social media app that I constructed in a
        weekend. It utilized NASA's picture of the day API for the images. I
        went with a mobile first web design approach when wire-framing this
        project. I wanted to ensure it would work well on mobile, tablets, and
        computers.
      </p>
      <p>
        {tab}I wanted to implement infinite scroll into the website but was
        running into multiple errors using pre-made react components. So I ended
        up implementing my own infinite scroll feature by creating a custom hook
        that used IntersectionObserver. I added a scroll to top button that
        appears after scrolling down the page. Also, I utilized
        'copy-to-clipboard' for copying the image links to your clipboard. To
        add a more custom feel and look to the project I used Affinity Designer
        to create SVG images for the header and loading indicator.
      </p>
      <p>
        {tab}The project was created using JavaScript and React with Material-UI
        for the component library and styling. I also used Moment for formatting
        the dates and zustand for the global store. The project was deployed
        using GitHub Pages.
      </p>
    </>
  ),
  [
    "JavaScript",
    "React",
    "Git",
    "GitHub Pages",
    "Material-UI",
    "Zustand",
    "Affinity Designer",
    "React-Moment",
    "copy-to-clipboard",
  ]
);
const KwitterOverview = new ProjectOverview(
  "Kwitter - Twitter Clone",
  "SCRUM Master",
  "https://kenzie-se-q2.github.io/kwitter-caseymockbee97/",
  "https://github.com/kenzie-se-q2/kwitter-caseymockbee97",
  kwitterIMG,
  (
    <>
      <p>
        {tab}Kwitter is a front-end Twitter Clone that was constructed in a
        group with 3 other students from Kenzie Academy. We were able to
        complete this project within the 2 week deadline. I was assigned the
        role of SCRUM Master for this project.
      </p>
      <p>
        {tab}On this project, I was responsible for creating all of the fetch
        requests for connecting to the pre-existing API, creating the user
        search, the logic for the message components, and 'meme mode'. I split
        the task of coding the rest of the functionality with my teammate Joel
        Rice. Joel was also critical in working through and resolving merge
        conflicts in GitHub. My teammate Pete Zamora was responsible for the
        large majority of the styling. Throughout the project I hosted team
        programming sessions so the whole group could understand.
      </p>
      <p>
        {tab}The project was created using JavaScript and React with Material-UI
        for the component library and styling. We also used Moment for
        formatting the dates, react-router-dom to handle the routing, and
        zustand for the global store.
      </p>
    </>
  ),
  ["JavaScript", "React", "Git", "GitHub Pages", "Material-UI", "Zustand"]
);
const GetItDoneOverview = new ProjectOverview(
  "GitItDone.js - Productivity App",
  "Product Owner, SCRUM Master",
  "https://caseymockbee97.github.io/kapstone19/",
  "https://github.com/caseymockbee97/kapstone19",
  getItDoneIMG,
  (
    <>
      <p>
        {tab}GetItDone.js is a productivity web app modeled after GitHub
        projects. I worked in a group with 3 other students from Kenzie Academy
        to complete this project in 3 weeks. I was assigned the role of Product
        Owner but I also worked as Scrum Master to fill in for a teammate.
      </p>
      <p>
        {tab}On this project, I was mainly responsible for the overall
        functionality and structure of the front-end and back-end. Throughout
        the project I hosted partner programming sessions to get other teammates
        involved in the coding portion of the project. My teammate Sebastian
        Caudill was responsible for the styling of this project and approving
        commits to the main branch.
      </p>
      <p>
        {tab}The Front End was created using JavaScript and React with
        Semantic-UI for the component library and styling. We also used Moment
        for formatting dates, react-beautiful-dnd for drag and drop
        functionality, react-toastify for the toasts, zustand for the global
        store, react-router-dom for the global store, and gh-pages for
        deployment. The front end was deployed to GitHub Pages and the backend
        is deployed to glitch.me.
      </p>
    </>
  ),
  [
    "JavaScript",
    "React",
    "Node.js",
    "Express",
    "Git",
    "GitHub Pages",
    "Semantic-UI",
    "Zustand",
  ],
  "* The backend is hosted on Glitch.me and needs to start up after 15 minutes of not being used. It might take a couple of minutes for you to be able to login."
);

export const projectsArr = [
  SpacetagramOverview,
  KwitterOverview,
  GetItDoneOverview,
];
