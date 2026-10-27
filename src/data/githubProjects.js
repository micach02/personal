// Personal projects hosted on GitHub (github.com/micach02). The write-ups are drawn from each
// repo's README. Screenshots are of the live GitHub Pages sites, which open on sign-in or setup
// screens, so swap in real app screenshots under public/images/projects/github/<repo>/ when you have them.

const img = (repo, n) => `${import.meta.env.BASE_URL}images/projects/github/${repo}/img${n}.webp`;

export const GITHUB_PROJECTS = [
  {
    id: 6,
    personal: true,
    summary: 'Store management for a small sari-sari store: credit ledger, monthly parking fees, inventory and reports.',
    title: 'MykelHub',
    description:
      'Store management for a small sari-sari store. It tracks who owes you, collects parking fees, keeps inventory straight and shows reports, in the browser with optional Supabase sync.',
    fullDescription: `MykelHub is a store-management app for a small sari-sari store. It does four jobs: track who owes you, collect the parking fees, keep the inventory straight, and show reports. There is deliberately no point of sale. A small store doesn't ring up a ₱9 sachet on a register; it needs to remember who owes what.

Everything runs in the browser. The whole store lives in localStorage and can be exported to a JSON file, or connected to a real file on the computer through the File System Access API. Connected to a free Supabase project, it opens on a login page so the same store is on a phone and a computer. Without a project it works on one device with no login and no internet needed after the first load. To try the live demo, choose "Use on this device only" and load the sample store from the dashboard.

Key features include:
• Credit ledger with one running balance per customer (goods and parking together), aging buckets and in-place editing of entries
• Monthly parking fees that fall due automatically on a configurable collection day, with no scheduled job
• Payments clear the oldest charge first, so a receipt can say exactly which months and goods it settled
• Inventory with restock, remove and count actions; every change writes a stock movement so the audit trail never drifts
• A cash "vault" ledger that tracks the money in the drawer, including count-and-correct adjustments
• Four report tabs (sales and profit, credit, parking and stock) with CSV export
• PDF receipts, price lists, restock lists and statements of account on long bond paper, with InstaPay QR codes, generated in the browser
• Light and dark themes with a colour-blind-validated chart palette

The stack is React 19 and TypeScript (strict) on Vite, with Tailwind CSS v4, Zustand for state, Recharts for charts and jsPDF for documents.`,
    technologies: ['React 19', 'TypeScript', 'Vite', 'Tailwind CSS', 'Zustand', 'Recharts', 'Supabase', 'jsPDF'],
    demoLink: 'https://micach02.github.io/mykelhub/',
    codeLink: 'https://github.com/micach02/mykelhub',
    image: img('mykelhub', 1),
    category: 'Business Tools',
    challenges: [
      "Money math: Goods and monthly parking share one balance. Payments are walked across a single merged, chronological list of charges so the oldest item clears first, and goods owed, parking owed, months behind and days outstanding all come from that one allocation.",
      "Parking without a scheduler: Monthly fees are derived on read from the start month and the collection day instead of being billed by a job, so a fee is owed the moment its day arrives and there is nothing to forget or drift.",
      "Audit trail integrity: Stock only changes through actions that also write a stock movement, and sales keep denormalised line items so history survives later price changes.",
      "Documents that print right: PDFs are drawn rather than printed, sized for Philippine long bond, and loaded on demand. The payment QR codes were verified to scan at their printed size and spacing.",
      "Works with or without a backend: The same store runs entirely in the browser or syncs through Supabase, so it keeps working with no connection.",
    ],
    gallery: [img('mykelhub', 1)],
  },
  {
    id: 7,
    personal: true,
    summary: 'Web karaoke jukebox with YouTube search, a phone-remote queue joined by QR code and in-browser pitch scoring.',
    title: 'myKelKaraokeHub',
    description:
      'A web karaoke jukebox: search YouTube karaoke videos, build a queue, let friends add songs from their phones by scanning a QR code, and get scored on your singing, all in the browser.',
    fullDescription: `myKelKaraokeHub (display name myKel Karaoke) is a web karaoke jukebox. Search any song, line songs up in a queue, and sing through whatever microphone and speakers are connected to a laptop, PC or TV. When a song ends, the next one starts on its own. Friends scan a QR code on the TV and add songs from their own phones. It is built for Filipino users first, with OPM (Original Pilipino Music) front and centre.

Every song is a karaoke video on YouTube, played through the official embedded player. Nothing is recorded, downloaded or re-hosted. The live demo's front end runs on GitHub Pages, and a small Node server on a free Render plan handles search and rooms, so the first visit after a quiet period can take a moment to wake it.

Key features include:
• Live YouTube karaoke search with a keyword filter that keeps karaoke, videoke, minus-one and instrumental versions and cleans up messy titles
• Browse categories (OPM hits, ballads, duets, decades) and one-tap OPM artist searches
• Phone remote: scan the TV's QR code to search, add songs, see your place in the queue and play, pause or skip, with no app to install
• Karaoke Score: pitch, timing, stability, energy and consistency, analysed locally in the browser with the Web Audio API
• Recently sung songs, saved songs and rule-based suggestions that cost no YouTube quota
• A shared server-side search cache and quota guard built around YouTube's limit of about 100 searches a day
• 165 automated tests covering the server, queue logic, scoring engine and phone remote

The TV is the source of truth. Phones send commands over HTTP, the TV applies them to its own queue through the same reducer actions as the local UI, and then publishes a snapshot back to the phones over Server-Sent Events.`,
    technologies: ['React', 'JavaScript', 'Vite', 'Node.js', 'Web Audio API', 'YouTube Data API', 'Server-Sent Events'],
    demoLink: 'https://micach02.github.io/mykelkaraokehub/',
    codeLink: 'https://github.com/micach02/mykelkaraokehub',
    image: img('karaoke', 1),
    category: 'Entertainment',
    challenges: [
      "YouTube quota: A key allows about 100 searches a day, so typing is served from recent and saved songs, a seven-day cache is shared across every device, live searches have a daily budget, and a Search button takes over when the budget is spent.",
      "Scoring without a licensed melody: YouTube songs get a Voice score (are you in tune) while practice tracks with public-domain reference melodies get a Melody score. Silence and noise are skipped, so instrumental breaks cost nothing.",
      "Phone remote without accounts: Rooms use a QR code, Server-Sent Events and a secret host token. Phones can only send four validated commands and can only remove songs they added.",
      "Privacy by design: Your voice is analysed locally in the browser and never uploaded. The microphone is requested only when scoring starts and released as soon as it ends.",
      "Free-tier hosting: The Render server sleeps when idle, so the TV shows a wake-up countdown and keeps the same room code, letting phones reconnect without a new QR code.",
    ],
    gallery: [img('karaoke', 1)],
  },
  {
    id: 8,
    personal: true,
    summary: 'Private, mobile-first cycle tracker with a tested estimation engine, partner sharing and database-enforced privacy.',
    title: 'Lunelle',
    description:
      'A private, mobile-first web app for tracking menstrual periods, cycle phases, symptoms and mood, with partner sharing and privacy enforced in the database by Supabase Row Level Security.',
    fullDescription: `Lunelle is a private, mobile-first web app for tracking periods, cycle phases, the estimated ovulation and fertile window, symptoms and mood. It is built with React, Vite, TypeScript and Tailwind CSS on Supabase (Auth, PostgreSQL and Row Level Security). It is an informational tracking and estimation tool, not a medical device, and the interface says so.

Every value on screen is labelled: only period days the user logged are Recorded, while phases, ovulation, the fertile window and future periods are marked Estimated. The app never shows a pregnancy probability and never uses wording like "safe day". The live demo opens on the sign-in page.

Key features include:
• Sign-up with email verification, password reset, persistent sessions and protected routes
• A dashboard and monthly calendar showing the current phase, cycle day, next period and the estimated ovulation and fertile window
• Insights: cycle and period length trends, symptom patterns by phase and mood distribution, each chart with a table view
• Partner sharing: invite one partner by email to view, with symptoms and notes as separate opt-in switches that are all off by default
• Partners never set a password: they sign in through a one-time link sent by a Supabase Edge Function
• Optional partner edit access that can add and edit records but never delete
• Installable PWA that caches only the static shell, never API data
• Permanent account deletion, and a strict security posture with a CSP, no analytics and no sensitive data in URLs or logs`,
    technologies: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Supabase', 'PostgreSQL (RLS)', 'Edge Functions'],
    demoLink: 'https://micach02.github.io/lunelle/',
    codeLink: 'https://github.com/micach02/lunelle',
    image: img('lunelle', 1),
    category: 'Health & Wellness',
    challenges: [
      "Security in the database, not the UI: Row Level Security is enabled on every table with separate per-operation policies, the anon role has no table privileges, and partners read shared data only through a SECURITY DEFINER function that returns just the categories the owner enabled.",
      "Testing RLS for real: The test suite runs the actual migration files in PGlite (Postgres compiled to WebAssembly) and proves one user cannot read, change, delete or insert another user's rows.",
      "Honest estimates: A pure, deterministic cycle engine takes today's date as an input and uses calendar-day arithmetic, so timezones and daylight saving can't shift a cycle day. If a period is late it says so and stops projecting rather than stacking guesses.",
      "Passwordless partner access: Partner sign-in links are issued through a service-role-only database function that allows at most one a minute and ten a day, and only for addresses with an active share.",
      "Accessibility: Phases always use a glyph and text as well as colour, calendar days have full spoken labels, and dialogs use the native dialog element for focus trapping and Escape.",
    ],
    gallery: [img('lunelle', 1), img('lunelle', 2)],
  },
  {
    id: 9,
    personal: true,
    summary: 'Budgets, trips and shared expenses with fair splits, fewest-payments settle-up, offline support and receipt scanning.',
    title: 'TripSplit',
    description:
      'Track shared and personal spending: monthly budgets and group trips, expenses split fairly among people with or without accounts, and the fewest payments to settle up. Works offline.',
    fullDescription: `TripSplit tracks shared and personal spending. Make a monthly budget for everyday costs (groceries, food, bills) on your own or with your household, or a trip with dates and one total budget. Add the people you share costs with by name (no account needed), log expenses, split them, and see who owes whom. Anyone who wants to see the trip themselves can be invited to the app.

My spending brings your share of everything together month by month: by category, by day, by budget and by how you paid, against last month and against your income. The live demo opens on the landing page and sign-in.

Key features include:
• Monthly budgets with optional rollover, and trips with dates and a total budget
• People added by name without accounts, who can later be replaced by a real account with their history moved over
• Equal, share-based, percentage and exact splits, with largest-remainder allocation so every centavo adds up
• Balances and a debt simplifier that settles the whole group in the fewest practical payments
• A "My spending" view with a month-end forecast, recurring expenses and budget warnings before a budget runs out
• Many currencies with exchange rates filled in automatically, CSV export and dark mode
• An installable PWA that keeps working offline: expenses saved offline go to an outbox and sync when the connection returns
• Receipt scanning that runs OCR in the browser, so the photo never leaves the device for scanning

The stack is React 19, Vite 8, TypeScript, Tailwind CSS 4 and React Router 7 on Supabase (Auth, Postgres, RLS and Storage), with Vitest for unit tests and pgTAP for database tests.`,
    technologies: ['React 19', 'TypeScript', 'Vite', 'Tailwind CSS', 'React Router', 'Supabase', 'PostgreSQL (RLS)', 'Vitest'],
    demoLink: 'https://micach02.github.io/TripSplit/',
    codeLink: 'https://github.com/micach02/TripSplit',
    image: img('tripsplit', 1),
    category: 'Personal Finance',
    challenges: [
      "Money correctness: Amounts are integer minor units in the app and numeric(14,2) in Postgres. Splits use largest-remainder allocation (₱1,000 ÷ 3 = 333.33 + 333.33 + 333.34), and database triggers require every expense's splits to add up to its total at commit.",
      "Row Level Security on every table: A trip and everything in it is visible only to its members, identity columns can't be updated through the API, and pgTAP tests cover the policies.",
      "People without accounts: Guest profiles belong to one trip and work in splits, balances and settlements like any member. When someone accepts an invite, everything recorded for them moves to their new account.",
      "Offline-first: A service worker serves the app shell, lists are cached on the device, and offline expenses carry a client id so a retry never creates a duplicate.",
      "Sharing a Supabase project safely: All tables live in their own schemas and nothing is attached to auth.users, so the app can share a project without touching another app's data.",
      "Accessibility and speed: Pages are checked with axe-core against WCAG 2.2 AA in light and dark mode, and every route is its own lazily loaded chunk.",
    ],
    gallery: [img('tripsplit', 1), img('tripsplit', 2), img('tripsplit', 3), img('tripsplit', 4)],
  },
];
