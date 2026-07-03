export interface Service {
  slug: string;
  number: string;
  title: string;
  shortDescription: string;
  description: string;
  includes: string[];
  proof: string;
}

export const services: Service[] = [
  {
    slug: "mvp",
    number: "01",
    title: "MVP & idea-to-launch",
    shortDescription:
      "Turn a rough idea into a focused first version that real users can try.",
    description:
      "You bring the idea; I help shape it into something buildable. Together we define the people it serves, cut it down to the features that matter, and ship a working product to the App Store, Google Play, or the web.",
    includes: [
      "Idea shaping and feature prioritization",
      "Product scoping and technical planning",
      "Design and development of the first version",
      "Store submission, deployment, and launch setup",
    ],
    proof:
      "Took an education startup's prototype to a production iOS app in under 3 months, and to Android 3 months later.",
  },
  {
    slug: "web",
    number: "02",
    title: "Web app development",
    shortDescription:
      "Modern, fast web applications built with Next.js and React.",
    description:
      "From marketing sites to full products with authentication, payments, and dashboards — I build web apps that are quick to load, pleasant to use, and structured so other developers can maintain them.",
    includes: [
      "Next.js / React application development",
      "Design systems and reusable component libraries",
      "E-commerce and internal tools",
      "Legacy code refactoring and migrations",
    ],
    proof:
      "Led the front end of an e-commerce platform and 3 internal apps — 40+ pages and a library of 100+ reusable components.",
  },
  {
    slug: "mobile",
    number: "03",
    title: "Mobile app development",
    shortDescription:
      "iOS and Android apps from one Flutter codebase, published and maintained.",
    description:
      "I've been shipping Flutter apps since 2021 — consumer products, education platforms, and my own published apps. One codebase, both stores, native feel, and the release process handled end to end.",
    includes: [
      "Flutter development for iOS and Android",
      "App Store and Google Play publishing",
      "Offline-first storage and sync",
      "Analytics, push notifications, and integrations",
    ],
    proof:
      "Built and published apps serving 8,000+ students across 40+ schools, plus independent apps with 1k+ downloads.",
  },
  {
    slug: "ai",
    number: "04",
    title: "AI integrations",
    shortDescription:
      "Practical AI features that solve real problems inside your product.",
    description:
      "Not AI for its own sake — AI where it earns its place. I've built speech-to-text pipelines, content moderation systems, and end-to-end generative video workflows that run in production.",
    includes: [
      "Speech-to-text and transcription pipelines",
      "Content moderation and safety systems",
      "Generative AI workflows (image, video, text)",
      "Model integration, tuning, and cost control",
    ],
    proof:
      "Tuned a speech-to-text pipeline to 90% accuracy, cutting manual review by 70%. Built a prompt-to-video AI pipeline for an AI consultancy.",
  },
];

export const processSteps = [
  {
    number: "01",
    title: "Discover",
    text: "We talk through your idea, the people it serves, and what success looks like. You get an honest read on scope, timeline, and the smallest version worth building.",
  },
  {
    number: "02",
    title: "Build",
    text: "I design and build in short, visible cycles. You see working software early and often, and we adjust based on what we learn — not on a plan written before we knew anything.",
  },
  {
    number: "03",
    title: "Launch",
    text: "Production builds, store assets, deployment, and the technical setup needed to release confidently on the App Store, Google Play, or the web.",
  },
  {
    number: "04",
    title: "Support",
    text: "After launch I stay available for improvements, fixes, and the next set of features — or I hand the codebase off cleanly to your team with documentation.",
  },
];
