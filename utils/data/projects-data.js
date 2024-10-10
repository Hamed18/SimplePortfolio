import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
        id: 1,
        name: 'Food Sharing App',
        description: "The Food Sharing App is a community-driven platform designed to minimize food waste and help those in need by enabling users to share surplus food. Users can sign in, donate food, request available food items, and earn points based on their contributions and requests. This app encourages the efficient distribution of excess food and promotes sustainable practices within the community.",
        tools: ['React', 'Tailwind CSS', 'Node', 'Express', 'MongoDB', 'Firebase', 'Framer Motion'],
        role: 'Full-Stack Developer',
        code: '',
        demo: '',
        image: crefin,
    },
    {
        id: 2,
        name: 'Travel Agency App',
        description: 'I have designed and developed a full-stack web app for 2Expedition, a travel agency in Armenia. I created the UI using NextJS, Typescript, MUI, TailwindCSS, Google Maps, Sun-Editor, and React Slick. The app supports multiple languages and currencies. I developed the API using NestJS, Typescript, MySQL, TypeORM, AWS, and Nodemailer. I deployed the front-end app to AWS Amplify and the back-end app to AWS EC2.',
        tools: ['React', 'Tailwind CSS', "Google Maps", "MongoDB", 'Tailwind CSS', 'Node', 'Firebase'],
        role: 'Full Stack Developer',
        code: '',
        demo: '',
        image: travel,
    },
    {
        id: 3,
        name: 'Smart Ticketing System',
        description: 'I built a real smart ticketing website using javascript and tailwind css We used Express, Typescript, OpenAI, Replicate, Stripe, and Mongoose to develop the API. We utilized NextJS, Formik, TailwindCSS, and other npm libraries for the UI. We have trained multiple AI assistants using the latest GPT model and integrated Replicate API for image processing. We added role-based auth, subscription plans, Cron job scheduling, and payment integration with Stripe.',
        tools: ['JavaScript', 'Tailwind CSS'],
        code: '',
        role: 'Front End Developer',
        demo: '',
        image: realEstate,
    },
    {
        id: 4,
        name: 'Alphabet Clash Game',
        description: "I developed a simple alphabet clash game useful for typing practice. As a front-end developer, I worked on creating the dashboard using NextJS, Material UI, Redux, Calendar, and other necessary npm libraries. We used React Redux to manage the application's state and React-hook-form and Sun Editor to handle forms.",
        tools: ['JavaScript', 'Tailwind CSS'],
        code: '',
        demo: '',
        image: ayla,
        role: 'Full Stack Developer',
    }
];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },