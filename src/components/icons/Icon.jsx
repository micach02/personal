// Shared inline SVG icon set — stroke-based, 24x24, colored via currentColor.
// Used in place of emoji throughout the site for a consistent, crisp, modern look.

const base = (size) => ({
  width: size,
  height: size,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.8,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
});

export function IconGlobe({ size = 24, ...props }) {
  return (
    <svg {...base(size)} {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18" />
      <path d="M12 3c2.4 2.4 3.8 5.6 3.8 9s-1.4 6.6-3.8 9c-2.4-2.4-3.8-5.6-3.8-9s1.4-6.6 3.8-9z" />
    </svg>
  );
}

export function IconZap({ size = 24, ...props }) {
  return (
    <svg {...base(size)} {...props}>
      <path d="M13 2 4 14h6l-1 8 9-12h-6l1-8z" />
    </svg>
  );
}

export function IconShield({ size = 24, ...props }) {
  return (
    <svg {...base(size)} {...props}>
      <path d="M12 3 5 6v6c0 4.2 3 7.5 7 9 4-1.5 7-4.8 7-9V6l-7-3z" />
    </svg>
  );
}

export function IconAtom({ size = 24, ...props }) {
  return (
    <svg {...base(size)} {...props}>
      <circle cx="12" cy="12" r="1.8" fill="currentColor" stroke="none" />
      <ellipse cx="12" cy="12" rx="9" ry="3.5" />
      <ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(60 12 12)" />
      <ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(120 12 12)" />
    </svg>
  );
}

export function IconCode({ size = 24, ...props }) {
  return (
    <svg {...base(size)} {...props}>
      <path d="M9 6 3 12l6 6" />
      <path d="M15 6l6 6-6 6" />
    </svg>
  );
}

export function IconLayoutGrid({ size = 24, ...props }) {
  return (
    <svg {...base(size)} {...props}>
      <rect x="3" y="3" width="7" height="7" rx="1.5" />
      <rect x="14" y="3" width="7" height="7" rx="1.5" />
      <rect x="3" y="14" width="7" height="7" rx="1.5" />
      <rect x="14" y="14" width="7" height="7" rx="1.5" />
    </svg>
  );
}

export function IconEdit({ size = 24, ...props }) {
  return (
    <svg {...base(size)} {...props}>
      <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
    </svg>
  );
}

export function IconGitBranch({ size = 24, ...props }) {
  return (
    <svg {...base(size)} {...props}>
      <circle cx="6" cy="6" r="2.4" />
      <circle cx="6" cy="18" r="2.4" />
      <circle cx="18" cy="9" r="2.4" />
      <path d="M6 8.4v7.2" />
      <path d="M18 11.4c0 4-4.5 6.6-9 6.6" />
    </svg>
  );
}

export function IconPalette({ size = 24, ...props }) {
  return (
    <svg {...base(size)} {...props}>
      <path d="M12 3a9 9 0 1 0 0 18c1.2 0 2-1 2-2 0-.6-.2-1-.5-1.4-.3-.4-.5-.8-.5-1.3 0-1 .8-1.8 1.8-1.8H16a4 4 0 0 0 4-4c0-4.4-3.6-7.5-8-7.5z" />
      <circle cx="7.5" cy="10.5" r="1.1" fill="currentColor" stroke="none" />
      <circle cx="11" cy="7" r="1.1" fill="currentColor" stroke="none" />
      <circle cx="15.5" cy="8.5" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function IconTarget({ size = 24, ...props }) {
  return (
    <svg {...base(size)} {...props}>
      <circle cx="12" cy="12" r="8.5" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="12" cy="12" r="1.3" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function IconLayers({ size = 24, ...props }) {
  return (
    <svg {...base(size)} {...props}>
      <polygon points="12 2 2 7 12 12 22 7" />
      <polyline points="2 12 12 17 22 12" />
      <polyline points="2 17 12 22 22 17" />
    </svg>
  );
}

export function IconImage({ size = 24, ...props }) {
  return (
    <svg {...base(size)} {...props}>
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <circle cx="8.5" cy="9.5" r="1.6" fill="currentColor" stroke="none" />
      <path d="M21 16.5 15.5 11 9 17.5" />
    </svg>
  );
}

export function IconFilm({ size = 24, ...props }) {
  return (
    <svg {...base(size)} {...props}>
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <path d="M3 9h18M3 15h18M8 4v16M16 4v16" />
    </svg>
  );
}

export function IconTerminal({ size = 24, ...props }) {
  return (
    <svg {...base(size)} {...props}>
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <path d="M7 9.5 10 12l-3 2.5" />
      <path d="M13 15h4" />
    </svg>
  );
}

export function IconBox({ size = 24, ...props }) {
  return (
    <svg {...base(size)} {...props}>
      <path d="M12 3 20 7.5v9L12 21l-8-4.5v-9L12 3z" />
      <path d="M4.5 7.5 12 12l7.5-4.5" />
      <path d="M12 12v9" />
    </svg>
  );
}

export function IconMonitor({ size = 24, ...props }) {
  return (
    <svg {...base(size)} {...props}>
      <rect x="3" y="4" width="18" height="13" rx="2" />
      <path d="M8 21h8" />
      <path d="M12 17v4" />
    </svg>
  );
}

export function IconTool({ size = 24, ...props }) {
  return (
    <svg {...base(size)} {...props}>
      <path d="M14.7 6.3a4 4 0 0 0-5.6 5.6L3 18l3 3 6.1-6.1a4 4 0 0 0 5.6-5.6l-2.6 2.6-2-2 2.6-2.6z" />
    </svg>
  );
}

export function IconUser({ size = 24, ...props }) {
  return (
    <svg {...base(size)} {...props}>
      <circle cx="12" cy="8" r="3.5" />
      <path d="M4.5 20c1-4 4.2-6 7.5-6s6.5 2 7.5 6" />
    </svg>
  );
}

export function IconBriefcase({ size = 24, ...props }) {
  return (
    <svg {...base(size)} {...props}>
      <rect x="3" y="7.5" width="18" height="12" rx="2" />
      <path d="M8 7.5V6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1.5" />
      <path d="M3 12.5h18" />
    </svg>
  );
}

export function IconGraduationCap({ size = 24, ...props }) {
  return (
    <svg {...base(size)} {...props}>
      <path d="M12 4 2 9l10 5 10-5-10-5z" />
      <path d="M6 11.5V17c0 1.5 3 3 6 3s6-1.5 6-3v-5.5" />
      <path d="M22 9v6" />
    </svg>
  );
}

export function IconLightbulb({ size = 24, ...props }) {
  return (
    <svg {...base(size)} {...props}>
      <path d="M9 18h6" />
      <path d="M10 21h4" />
      <path d="M12 3a6.5 6.5 0 0 0-4 11.6c.6.5 1 1.3 1 2.1v.3h6v-.3c0-.8.4-1.6 1-2.1A6.5 6.5 0 0 0 12 3z" />
    </svg>
  );
}

export function IconMail({ size = 24, ...props }) {
  return (
    <svg {...base(size)} {...props}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 7l9 6 9-6" />
    </svg>
  );
}

export function IconRocket({ size = 24, ...props }) {
  return (
    <svg {...base(size)} {...props}>
      <path d="M12 15c-1.7 0-3-1.3-3-3 0-4 3-8 3-8s3 4 3 8c0 1.7-1.3 3-3 3z" />
      <path d="M9.5 13.5 7 16.5v3l3-2" />
      <path d="M14.5 13.5 17 16.5v3l-3-2" />
      <circle cx="12" cy="10.3" r="1.2" fill="currentColor" stroke="none" />
      <path d="M12 18v3" />
    </svg>
  );
}

export function IconCheck({ size = 24, ...props }) {
  return (
    <svg {...base(size)} {...props}>
      <path d="M4 12.5l5 5L20 6.5" />
    </svg>
  );
}

export function IconCheckCircle({ size = 24, ...props }) {
  return (
    <svg {...base(size)} {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M8 12.5l2.5 2.5L16 9.5" />
    </svg>
  );
}

export function IconLandmark({ size = 24, ...props }) {
  return (
    <svg {...base(size)} {...props}>
      <path d="M2.5 10 12 4l9.5 6z" />
      <path d="M3 21h18" />
      <path d="M5 21V10M9 21V10M15 21V10M19 21V10" />
    </svg>
  );
}

export function IconAward({ size = 24, ...props }) {
  return (
    <svg {...base(size)} {...props}>
      <circle cx="12" cy="9" r="5.5" />
      <path d="M8.5 14 7 21l5-2 5 2-1.5-7" />
    </svg>
  );
}

export function IconBookOpen({ size = 24, ...props }) {
  return (
    <svg {...base(size)} {...props}>
      <path d="M12 6c-2-1.5-5-2-8-1.5v13c3-.5 6 0 8 1.5 2-1.5 5-2 8-1.5v-13c-3-.5-6 0-8 1.5z" />
      <path d="M12 6v13" />
    </svg>
  );
}

export function IconBarChart({ size = 24, ...props }) {
  return (
    <svg {...base(size)} {...props}>
      <path d="M4 20V10M10 20V4M16 20v-8" />
      <path d="M2.5 20.5h19" />
    </svg>
  );
}

export function IconCalendar({ size = 24, ...props }) {
  return (
    <svg {...base(size)} {...props}>
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M3 10h18" />
      <path d="M8 3v4M16 3v4" />
    </svg>
  );
}

export function IconMapPin({ size = 24, ...props }) {
  return (
    <svg {...base(size)} {...props}>
      <path d="M12 21s7-6.5 7-12a7 7 0 1 0-14 0c0 5.5 7 12 7 12z" />
      <circle cx="12" cy="9" r="2.4" />
    </svg>
  );
}

export function IconClock({ size = 24, ...props }) {
  return (
    <svg {...base(size)} {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3.5 2" />
    </svg>
  );
}

export function IconQuote({ size = 24, ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M7.5 5C5 5.8 3.5 8 3.5 10.5c0 1.9 1.3 3.2 3 3.2s3-1.3 3-3.1c0-1.5-1-2.7-2.4-3C7.4 6.6 8.2 5.7 9.3 5.3L7.5 5z" />
      <path d="M16.5 5C14 5.8 12.5 8 12.5 10.5c0 1.9 1.3 3.2 3 3.2s3-1.3 3-3.1c0-1.5-1-2.7-2.4-3c.3-1 1.1-1.9 2.2-2.3L16.5 5z" />
    </svg>
  );
}

export function IconBrush({ size = 24, ...props }) {
  return (
    <svg {...base(size)} {...props}>
      <path d="M17.5 3.5c1.4 0 2.5 1.1 2.5 2.5 0 .8-.4 1.5-1 2L12.5 14.5" />
      <path d="M12.5 14.5c1 1 1 2.6 0 3.6-1.3 1.3-3.4 1.3-5.3 1.3-1.5 0-3.2-.2-4.2.8 1-2.3.4-4.4 1.5-6 1.2-1.7 3.3-2 5-1 .7.4 1.4.9 2 1.3z" />
    </svg>
  );
}

export function IconArrowUp({ size = 24, ...props }) {
  return (
    <svg {...base(size)} {...props}>
      <path d="M12 19V5" />
      <path d="M6 11l6-6 6 6" />
    </svg>
  );
}

export function IconFileText({ size = 24, ...props }) {
  return (
    <svg {...base(size)} {...props}>
      <path d="M7 3h7l5 5v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z" />
      <path d="M14 3v5h5" />
      <path d="M9 13h6M9 17h6" />
    </svg>
  );
}

export function IconDot({ size = 10, ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...props}>
      <circle cx="12" cy="12" r="9" fill="currentColor" />
    </svg>
  );
}
