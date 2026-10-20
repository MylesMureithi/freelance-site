import solexShot from "../assets/solex.png";
import clinicShot from "../assets/cliniccare.png";
import radiantShot from "../assets/radiant-plates.png";

export const SITE = {
  name: "Myles M.",
  email: "damper.studios@gmail.com",
  whatsapp: "66831568761", // country code + number, no + or spaces
  formspree: "https://formspree.io/f/meaevrbz", // <-- paste your real endpoint here
  fiverr: "https://tinyurl.com/2evhjb3v",
};

export const PACKAGES = [
  {
    title: "Landing page",
    price: 80,
    time: "5 to 7 days",
    revisions: 2,
    text: "One responsive page for personal brands or small businesses, deployed on your domain.",
  },
  {
    title: "Portfolio or personal brand",
    price: 140,
    time: "7 to 10 days",
    revisions: 4,
    text: "Up to 3 responsive pages, routing, smooth animations, deployed.",
  },
  {
    title: "Business website",
    price: 220,
    time: "12 to 14 days",
    revisions: 6,
    text: "Up to 5 responsive pages styled to your brand, a working contact form, basic SEO, deployed.",
  },
];

export const WORK = [
  {
    title: "Solex",
    kind: "Landing page and admin dashboard",
    text: "Landing page for an adaptive scheduling platform for students, plus an admin dashboard where the team reviews website entries and waitlist sign-ups.",
    tags: ["React", "JavaScript", "CSS"],
    image: solexShot,
    alt: "Solex landing page showing a phone mockup of the student planner",
    links: [
      { label: "Live site", href: "https://solex-eta.vercel.app/" },
      {
        label: "GitHub",
        href: "https://github.com/MylesMureithi/solex-landing-page",
      },
    ],
  },
  {
    title: "ClinicCare Lite",
    kind: "Frontend, group project",
    text: "Frontend for a healthcare platform with separate patient and clinician portals: dashboards, forms, messaging interfaces and light and dark themes.",
    tags: ["React", "React Router", "CSS", "Vite"],
    image: clinicShot,
    alt: "ClinicCare home page in dark mode with patient and clinician sections",
  },
  {
    title: "Radiant Plates",
    kind: "Website",
    text: "Website for an organization supporting street-connected children through care, family reunification and community awareness.",
    tags: ["React", "CSS"],
    image: radiantShot,
    alt: "Radiant Plates home page with the headline Thoughtfully made, warmly served",
    links: [{ label: "Live site", href: "https://radiantplates.org/" }],
  },
];

export const STEPS = [
  [
    "Brief",
    "Tell me what you need through the form, email or WhatsApp, and which package fits.",
  ],
  [
    "Quote and agreement",
    "I send a fixed price and scope in writing, and we both sign a short agreement.",
  ],
  [
    "Deposit",
    "You pay 50% by card, mobile money or bank transfer. Work starts once it arrives.",
  ],
  [
    "Build",
    "You send your text and images, and I build with a live preview link. The delivery time starts once I have your content.",
  ],
  [
    "Revisions",
    "Send your changes as one consolidated list. Your package includes 2, 4 or 6 rounds.",
  ],
  [
    "Launch",
    "You pay the remaining 50%, then I deploy your site and hand over the code and ownership.",
  ],
];

export const PAYMENTS = [
  { name: "Card or mobile money", note: "Through a Paystack payment link" },
  { name: "PayPal", note: "If you already have an account" },
  {
    name: "International bank transfer",
    note: "USD by SWIFT. Details sent with your invoice",
  },
  { name: "Local bank transfer", note: "Details sent with your invoice" },
];

export const FAQ = [
  [
    "Do I need a Fiverr account?",
    "No. Use the form, WhatsApp or email. Fiverr is just one more way to hire me.",
  ],
  [
    "Do I need PayPal?",
    "No. PayPal is one option, but you can also pay by card, mobile money or bank transfer.",
  ],
  [
    "Who owns the website?",
    "You own the finished website, including the design and code I write for it, once the final payment is made. Until then it remains mine. Third-party tools I use, such as open-source libraries and fonts, stay under their own licences.",
  ],
  [
    "Can you show my project in your portfolio?",
    "Yes, unless you tell me not to. I only show the finished public site, never private details. If you want it kept out, tell me in writing before we start.",
  ],
  [
    "Who is responsible for the text and images I send?",
    "You confirm you own or have permission to use everything you send me, such as text, logos and photos. For anything I add myself, I use free-to-use images and fonts.",
  ],
  [
    "What counts as a revision round?",
    "One round is a single consolidated list of changes to the pages we agreed on. New pages and new features are quoted separately.",
  ],
  [
    "What if I need more than the package includes?",
    "I quote extra work separately before starting it.",
  ],
  [
    "Do you write the text for my website?",
    "Not as part of a package. You send the text and images, and I place and format them with light spelling and grammar fixes. If you'd like me to write it, copywriting is an add-on at 30% of the package price, covering up to 250 words per page across the pages in your package. You fill in a short brief, I send the draft text for your approval before I build, and one round of text changes is included.",
  ],
  [
    "When does the delivery time start?",
    "Once I have your text and images, or your approved copy if you've added copywriting. If content or feedback is delayed, the timeline pauses until it arrives.",
  ],
  [
    "What's not included?",
    "Logo design, photography, and writing your website copy. If you need any of those, I can quote them separately.",
  ],
];
