// Single source of truth for personal details shown across the site.

export const site = {
  name: 'Michael Vincent Abellar',
  shortName: 'Michael Vincent',
  initials: 'MV',
  role: 'Web Application Developer',
  email: 'michaelabellar75@gmail.com',
  phone: '+63 993 616 0737',
  phoneHref: 'tel:+639936160737',
  location: 'Cebu City, Philippines',
  timezone: 'PHT (UTC+8)',

  // Shown as the status pill in the hero. Set to false to hide it.
  openToWork: true,

  // Résumé PDF in /public. Source is resume/resume.html (see the regenerate command in that file).
  // Set to null to hide the Résumé buttons.
  resumeFile: 'Michael-Abellar-Resume.pdf',

  social: [
    { label: 'LinkedIn', icon: 'fab fa-linkedin-in', url: 'https://www.linkedin.com/in/michael-vincent-abellar/' },
    { label: 'GitHub', icon: 'fab fa-github', url: 'https://github.com/micach02' },
  ],
};

export const resumeUrl = site.resumeFile ? `${import.meta.env.BASE_URL}${site.resumeFile}` : null;

// Experience start used for the "years of experience" figure (June 2017, matches the Experience section).
const EXPERIENCE_START = new Date(2017, 5, 1);

export function getYearsOfExperience(now = new Date()) {
  let years = now.getFullYear() - EXPERIENCE_START.getFullYear();
  const hadAnniversary =
    now.getMonth() > EXPERIENCE_START.getMonth() ||
    (now.getMonth() === EXPERIENCE_START.getMonth() && now.getDate() >= EXPERIENCE_START.getDate());
  if (!hadAnniversary) years--;
  return years;
}
