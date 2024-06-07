import AstroIcon from "../components/icons/tools/AstroIcon.astro";
import TailwindIcon from "../components/icons/tools/TailwindIcon.astro";
import JavaScriptIcon from "../components/icons/tools/JavaScriptIcon.astro";
import TypescriptIcon from "../components/icons/tools/TypeScriptIcon.astro";
import WordPressIcon from "../components/icons/tools/WordPressIcon.astro";
import JQuery from "../components/icons/tools/JQuery.astro";
import ReactIcon from "../components/icons/tools/ReactIcon.astro";
import SupaBaseIcon from "../components/icons/tools/SupaBaseIcon.astro";
import PostgreSqlIcon from "../components/icons/tools/PostgreSqlIcon.astro";

const TAGS = {
  ASTRO: {
    name: "Astro",
    icon: AstroIcon,
  },
  TAILWIND: {
    name: "Tailwind CSS",
    icon: TailwindIcon,
  },
  JAVASCRIPT: {
    name: "JavaScript",
    icon: JavaScriptIcon,
  },
  TYPESCRIPT: {
    name: "TypeScript",
    icon: TypescriptIcon,
  },
  WORDPRESS: {
    name: "Wordpress",
    icon: WordPressIcon,
  },
  JQUERY: {
    name: "JQuery",
    icon: JQuery,
  },
  REACT: {
    name: "React",
    icon: ReactIcon,
  },
  SUPABASE: {
    name: "Supabase",
    icon: SupaBaseIcon,
  },
  POSTGRESQL: {
    name: "PostgreSQL",
    icon: PostgreSqlIcon,
  },
};
export const PROJECTS = [
  {
    title: "Iglesia Bautista Dios Proveera Blog",
    description:
      "Iglesia Bautista Dios Proveera local church blog focused website.",
    link: "https://iglesiadiosproveera.com",
    github: "",
    image: "/projects/diosproveera.webp",
    tab: ["featured", "freelance"],
    tags: [TAGS.ASTRO, TAGS.TAILWIND],
    priority: 2,
  },
  {
    title: "Weather Forecast",
    description:
      "A minimalistic weather forecast consuming OpenWeatherAPI. Displays a loading skeleton and handles server errors.",
    link: "https://alvarado08.github.io/weather-app/",
    github: "https://github.com/Alvarado08/weather-app",
    image: "/projects/weather.webp",
    tab: ["personal"],
    tags: [TAGS.TYPESCRIPT, TAGS.TAILWIND],
    priority: 2,
  },
  {
    title: "Library App",
    description:
      "A digital bookshelf that can create and delete a book as well as update its reading status.",
    link: "https://alvarado08.github.io/library/",
    github: "https://github.com/Alvarado08/library",
    image: "/projects/library.webp",
    tab: ["personal"],
    tags: [TAGS.JAVASCRIPT, TAGS.TAILWIND],
    priority: 4,
  },
  {
    title: "Rayados Waller Academy Website",
    description:
      "Rayados Waller Academy local soccer league website that serves as a central hub for league information and offers online player registrations.",
    link: "https://rayadoswaller.org",
    github: "",
    image: "/projects/rayadoswaller.webp",
    tab: ["freelance"],
    tags: [TAGS.WORDPRESS],
    priority: 4,
  },
  {
    title: "Terminal Portfolio",
    description:
      "Everything you expect a personal portfolio to have, except terminal flavored. Includes autocomplete, default commands for navigation and interactions and consumes JokesAPI.",
    link: "https://alvarado08.github.io/terminal-portfolio/",
    github: "https://github.com/Alvarado08/terminal-portfolio",
    image: "/projects/terminal-portfolio.webp",
    tab: ["featured", "personal"],
    tags: [TAGS.JQUERY, TAGS.JAVASCRIPT],
    priority: 3,
  },
  {
    title: "Supa Smoothies",
    description:
      "Blend your way to a healthier you with Supa Smoothies! Web Application to create, manage, update and delete smoothies. Uses Supabase as the BaaS.",
    link: "https://alvarado08.github.io/supa-smoothies/",
    github: "https://github.com/Alvarado08/supa-smoothies",
    image: "/projects/supa-smoothies.webp",
    tab: ["featured", "personal"],
    tags: [
      TAGS.REACT,
      TAGS.TAILWIND,
      TAGS.JAVASCRIPT,
      TAGS.POSTGRESQL,
      TAGS.SUPABASE,
    ],
    priority: 1,
  },
];
export const LatestProject = PROJECTS[PROJECTS.length - 1];
