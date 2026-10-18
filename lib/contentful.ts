import { messages as fallbackMessages, type Message } from '@/components/sermon/message';

// Server-side Contentful content fetching with Next.js incremental cache revalidation.
// Hits the Content Delivery REST API directly with `fetch` so we can use Next's
// `next: { revalidate }` cache option. Falls back to the site's rich static copy
// whenever Contentful is unconfigured or a request fails, ensuring the site
// is 100% resilient and never breaks.
const REVALIDATE_SECONDS = 600;

const SPACE_ID = process.env.CONTENTFUL_SPACE_ID;
const ACCESS_TOKEN = process.env.CONTENTFUL_ACCESS_TOKEN;
const ENVIRONMENT = process.env.CONTENTFUL_ENVIRONMENT || 'master';

interface ContentfulAsset {
  sys: { id: string };
  fields: { file?: { url?: string } };
}

interface ContentfulResponse<Fields> {
  items: Array<{ fields: Fields }>;
  includes?: { Asset?: ContentfulAsset[] };
}

function assetUrl(
  linkId: string,
  includes?: { Asset?: ContentfulAsset[] },
): string | null {
  const url = includes?.Asset?.find((asset) => asset.sys.id === linkId)?.fields
    .file?.url;
  return url ? `https:${url}` : null;
}

function textOrNull(value: unknown): string | null {
  return typeof value === 'string' && value.trim() ? value : null;
}

async function fetchEntries<Fields>(
  contentType: string,
  extraQuery: string = '',
): Promise<ContentfulResponse<Fields> | null> {
  if (!SPACE_ID || !ACCESS_TOKEN) return null;

  try {
    const res = await fetch(
      `https://cdn.contentful.com/spaces/${SPACE_ID}/environments/${ENVIRONMENT}/entries?content_type=${contentType}&include=2${extraQuery}`,
      {
        headers: { Authorization: `Bearer ${ACCESS_TOKEN}` },
        next: { revalidate: REVALIDATE_SECONDS },
      },
    );
    if (!res.ok) return null;
    return (await res.json()) as ContentfulResponse<Fields>;
  } catch {
    return null;
  }
}

// =============================================================================
// 1. Home Hero
// =============================================================================
export interface Hero {
  headline: string;
  subtext: string;
  backgroundImage: string;
}

export const defaultHero: Hero = {
  headline: 'A generation rooted in truth',
  subtext:
    'We exist to share the life-giving message of Jesus and raise devoted followers of Christ.',
  backgroundImage: '/img/HERO2.jpg',
};

interface HeroFields {
  headline?: string;
  subtext?: string;
  backgroundImage?: { sys: { id: string } };
}

export async function getHero(): Promise<Hero> {
  const data = await fetchEntries<HeroFields>('hero');
  const fields = data?.items?.[0]?.fields;
  if (!fields) return defaultHero;

  const image = fields.backgroundImage
    ? assetUrl(fields.backgroundImage.sys.id, data?.includes)
    : null;

  return {
    headline: fields.headline || defaultHero.headline,
    subtext: fields.subtext || defaultHero.subtext,
    backgroundImage: image || defaultHero.backgroundImage,
  };
}

// =============================================================================
// 2. Events List
// =============================================================================
export interface EventItem {
  id: string;
  title: string;
  subtitle: string;
  date: string;
  time: string | null;
  location: string | null;
  image: string;
}

export const defaultEvents: EventItem[] = [
  {
    id: '1',
    title: 'Refresh Tour 2026',
    subtitle: 'Across the Globe',
    date: 'Jan 31, 2026 - Jan 13, 2027',
    time: null,
    location: null,
    image: '/img/refresh-tours.jpg',
  },
  {
    id: '2',
    title: 'Night of Favour',
    subtitle: 'Every Night With Jesus',
    date: 'Friday & Saturday, February 20th & 21st, 2026',
    time: '8:00PM (WAT) daily',
    location: null,
    image: '/img/night-of-favour.jpeg',
  },
];

interface EventFields {
  title?: string;
  subtitle?: string;
  date?: string;
  time?: string;
  location?: unknown;
  image?: { sys: { id: string } };
}

export async function getEvents(): Promise<EventItem[]> {
  const data = await fetchEntries<EventFields>('event');
  if (!data?.items?.length) return defaultEvents;

  const events = data.items
    .map((entry, index) => {
      const f = entry.fields;
      const image = f.image ? assetUrl(f.image.sys.id, data.includes) : null;
      return {
        id: String(index + 1),
        title: f.title ?? '',
        subtitle: f.subtitle ?? '',
        date: f.date ?? '',
        time: f.time ?? null,
        location: textOrNull(f.location),
        image: image ?? defaultEvents[0].image,
      };
    })
    .filter((event) => event.title);

  return events.length ? events : defaultEvents;
}

// =============================================================================
// 3. Info Cards (Service Times & Locations)
// =============================================================================
export interface InfoCardItem {
  id: number;
  title: string;
  iconType: 'clock' | 'mapPin' | 'users';
  contentTitle: string;
  contentDetails: string[];
  isTime?: boolean;
}

export const defaultInfoCards: InfoCardItem[] = [
  {
    id: 1,
    title: 'Service Time',
    iconType: 'clock',
    contentTitle: 'Sunday Service',
    contentDetails: ['8:00 am'],
    isTime: true,
  },
  {
    id: 2,
    title: 'Location',
    iconType: 'mapPin',
    contentTitle: 'Benin City',
    contentDetails: [
      'The Winlos/Votage center, by ascend school, airport road extension, Benin city',
    ],
    isTime: false,
  },
  {
    id: 3,
    title: 'Join A Connect',
    iconType: 'users',
    contentTitle: 'Tuesdays - Saturdays',
    contentDetails: ['5:00 pm'],
    isTime: false,
  },
];

interface InfoCardFields {
  title?: string;
  contentTitle?: string;
  contentDetails?: string[] | string;
  iconType?: string;
  isTime?: boolean;
  order?: number;
}

export async function getInfoCards(): Promise<InfoCardItem[]> {
  const data = await fetchEntries<InfoCardFields>('infoCard');
  if (!data?.items?.length) return defaultInfoCards;

  const cards = data.items
    .map((entry, index) => {
      const f = entry.fields;
      let details: string[] = [];
      if (Array.isArray(f.contentDetails)) {
        details = f.contentDetails;
      } else if (typeof f.contentDetails === 'string') {
        details = f.contentDetails.split('\n').filter(Boolean);
      } else {
        details = defaultInfoCards[index % defaultInfoCards.length]?.contentDetails ?? [];
      }

      let icon: 'clock' | 'mapPin' | 'users' = 'clock';
      if (f.iconType === 'mapPin' || f.iconType === 'users') {
        icon = f.iconType;
      } else if (index === 1) {
        icon = 'mapPin';
      } else if (index === 2) {
        icon = 'users';
      }

      return {
        id: index + 1,
        title: f.title || defaultInfoCards[index % defaultInfoCards.length].title,
        iconType: icon,
        contentTitle: f.contentTitle || defaultInfoCards[index % defaultInfoCards.length].contentTitle,
        contentDetails: details.length > 0 ? details : ['8:00 am'],
        isTime: Boolean(f.isTime ?? (index === 0)),
      };
    })
    .filter((c) => c.title);

  return cards.length ? cards : defaultInfoCards;
}

// =============================================================================
// 4. Connect Groups
// =============================================================================
export interface ConnectGroupItem {
  id: number;
  name: string;
  day: string;
  location: string;
  time: string;
  image: string;
  leader: string;
  whatsapp: string;
  message: string;
}

export const defaultConnectGroups: ConnectGroupItem[] = [
  {
    id: 1,
    name: 'KABOD CONNECT',
    day: 'Tuesdays',
    location: '144 Airport Road, After ADP Junction',
    time: '5:00pm',
    image: '/img/connect-images.png',
    leader: 'Pst Tobi Tijani',
    whatsapp: '+234 904 535 4864',
    message: "Welcome to KABOD CONNECT! Experience the glory of God's presence in our Tuesday gatherings. We're committed to building a community where faith, fellowship, and growth intersect. Join us as we explore God's word and grow together in Christ.",
  },
  {
    id: 2,
    name: 'NEWNESS CONNECT',
    day: 'Wednesdays',
    location: '144 Airport Road, After ADP Junction',
    time: '5:00pm',
    image: '/img/connect-6.jpg',
    leader: 'Pst Happysteve Agbonghale',
    whatsapp: '+234 809 417 0863',
    message: "NEWNESS CONNECT welcomes you! Every Wednesday, we gather to experience the transformative power of Christ's love. Whether you're new to our community or looking to deepen your faith, you'll find acceptance, encouragement, and purposeful connections here.",
  },
  {
    id: 3,
    name: 'GATEKEEPERS CONNECT',
    day: 'Thursdays',
    location: '144 Airport Road, After ADP Junction',
    time: '5:00pm',
    image: '/img/connect-4.jpg',
    leader: 'Pst Blessing Ochade',
    whatsapp: '+234 706 699 5249',
    message: "Welcome to GATEKEEPERS CONNECT! As gatekeepers of God's kingdom, we gather to pray, intercede, and stand in faith for our community. Join our Wednesday meetings to be part of something powerful and transformative.",
  },
  {
    id: 4,
    name: 'FLORISH CONNECT',
    day: 'Fridays',
    location: '144 Airport Road, After ADP Junctionn',
    time: '5:00pm',
    image: '/img/connect-3.jpg',
    leader: 'Pst Osaretin Osarumwense',
    whatsapp: '+234 805 928 1336',
    message: "FLORISH CONNECT invites you to Thursday nights filled with God's presence and community love. We believe in flourishing together—spiritually, emotionally, and relationally. Experience a connect group where your growth matters and your voice is heard.",
  },
  {
    id: 5,
    name: 'UGBOWO CONNECT',
    day: 'Fridays',
    location: 'The Orchard Garden',
    time: '5:00pm',
    image: '/img/connect-1.jpg',
    leader: 'Min Petry Ebhonu',
    whatsapp: '+234 813 613 2716',
    message: "Join UGBOWO CONNECT for meaningful Friday evening gatherings! Led by our passionate team, we create an atmosphere of authentic worship, biblical teaching, and genuine community. Come as you are and discover your purpose in God's kingdom.",
  },
  {
    id: 6,
    name: 'KOINONIA CONNECT',
    day: 'Saturdays',
    location: '144 Airport Road, After ADP Junction',
    time: '5:00pm',
    image: '/img/connect-9.jpg',
    leader: 'Pst Obianuju Okpala',
    whatsapp: '+234 814 547 7860',
    message: 'KOINONIA—true fellowship awaits you on Saturday! Our connect group is built on the foundation of genuine Christian community, where we share our lives, support one another, and grow in grace together. Experience authentic koinonia with us.',
  },
  {
    id: 7,
    name: 'EKEHUAN CONNECT',
    day: 'Saturdays',
    location: 'Education Field',
    time: '5:00pm',
    image: '/img/connect-11.jpg',
    leader: 'Min Petry Ebhonu',
    whatsapp: '+234 813 613 2716',
    message: "EKEHUAN CONNECT brings you Friday gatherings saturated with God's word and fervent prayer. Led by passionate believers, we're dedicated to creating a space where faith is strengthened, lives are changed, and God's kingdom advances.",
  },
];

interface ConnectGroupFields {
  name?: string;
  day?: string;
  location?: string;
  time?: string;
  leader?: string;
  whatsapp?: string;
  message?: string;
  image?: { sys: { id: string } };
  order?: number;
}

export async function getConnectGroups(): Promise<ConnectGroupItem[]> {
  const data = await fetchEntries<ConnectGroupFields>('connectGroup');
  if (!data?.items?.length) return defaultConnectGroups;

  const groups = data.items
    .map((entry, index) => {
      const f = entry.fields;
      const image = f.image ? assetUrl(f.image.sys.id, data.includes) : null;
      const fallback = defaultConnectGroups[index % defaultConnectGroups.length];
      return {
        id: index + 1,
        name: f.name || fallback.name,
        day: f.day || fallback.day,
        location: f.location || fallback.location,
        time: f.time || fallback.time,
        image: image || fallback.image,
        leader: f.leader || fallback.leader,
        whatsapp: f.whatsapp || fallback.whatsapp,
        message: f.message || fallback.message,
      };
    })
    .filter((g) => g.name);

  return groups.length ? groups : defaultConnectGroups;
}

// =============================================================================
// 5. Pastors / Leadership Profiles
// =============================================================================
export interface PastorProfile {
  id: string;
  name: string;
  role?: string;
  bio: string;
  secondaryBio?: string;
  image: string;
}

export const defaultPastors: PastorProfile[] = [
  {
    id: 'rev-ohis',
    name: 'Rev. Ohis Ojeikere',
    role: 'Lead Pastor',
    bio: "Rev. Ohis Ojeikere is a seasoned teacher and visionary with an apostolic mandate to reach this generation. From leading children's ministry at age 13 to serving as an RCCG Youth Pastor, his life has been defined by a deep commitment to the Great Commission. In 2013, he co-founded The Winlos, a global media ministry impacting millions.",
    secondaryBio:
      'Following a divine instruction in 2018, he founded The Votage Church to bridge digital reach with spiritual depth. He is dedicated to the business of fervent prayer and presenting every man mature in Christ.',
    image: '/img/rev-pics.jpg',
  },
  {
    id: 'pastor-anwinli',
    name: 'Pastor Anwinli Ojeikere',
    role: 'Lead Pastor',
    bio: 'Pastor Anwinli Ojeikere is a gifted minister and prayer catalyst dedicated to helping believers fulfill their divine purpose. As a pillar of The Votage and co-visionary of The Winlos, she leverages creative mediums to broadcast the Gospel globally.',
    secondaryBio:
      'She is the convener of the Refresh Miracle Service and Refresh Morning Prayers, hosting a daily global altar at 5:00 AM. Her ministry emphasizes New Creation realities and spiritual growth. Standing as a spiritual mother, she is committed to fostering an environment where the supernatural is a daily experience.',
    image: '/img/Fl.jpg',
  },
];

interface PastorFields {
  name?: string;
  role?: string;
  bio?: string;
  secondaryBio?: string;
  image?: { sys: { id: string } };
  order?: number;
}

export async function getPastors(): Promise<PastorProfile[]> {
  const data = await fetchEntries<PastorFields>('pastor');
  if (!data?.items?.length) return defaultPastors;

  const pastors = data.items
    .map((entry, index) => {
      const f = entry.fields;
      const image = f.image ? assetUrl(f.image.sys.id, data.includes) : null;
      const fallback = defaultPastors[index % defaultPastors.length];
      return {
        id: String(index + 1),
        name: f.name || fallback.name,
        role: f.role || fallback.role,
        bio: f.bio || fallback.bio,
        secondaryBio: f.secondaryBio || fallback.secondaryBio,
        image: image || fallback.image,
      };
    })
    .filter((p) => p.name);

  return pastors.length ? pastors : defaultPastors;
}

// =============================================================================
// 6. Sermons
// =============================================================================
interface ContentfulSermonFields {
  title?: string;
  minister?: string;
  text?: string;
  date?: string;
  service?: string;
  link?: string;
  image?: { sys: { id: string } };
  order?: number;
}

export async function getSermons(): Promise<Message[]> {
  const data = await fetchEntries<ContentfulSermonFields>('sermon');
  if (!data?.items?.length) return fallbackMessages;

  const sermons = data.items
    .map((entry, index) => {
      const f = entry.fields;
      const image = f.image ? assetUrl(f.image.sys.id, data.includes) : null;
      const fallback = fallbackMessages[index % fallbackMessages.length];
      return {
        id: index + 1,
        title: f.title || fallback?.title || 'Sermon',
        minister: f.minister || fallback?.minister || 'The Votage',
        text: f.text || fallback?.text || '',
        date: f.date || fallback?.date || '',
        service: f.service || fallback?.service || 'Sunday Service',
        image: image || fallback?.image || '/img/sermon/rev.png',
        link: f.link || fallback?.link,
      };
    })
    .filter((s) => s.title);

  return sermons.length ? sermons : fallbackMessages;
}

// =============================================================================
// 7. Growth Track Cohort
// =============================================================================
export interface GrowthTrackCohort {
  smallHeading: string;
  mainHeading: string;
  description: string;
  subDescription?: string;
  buttonText: string;
  buttonLink: string;
}

export const defaultCohort: GrowthTrackCohort = {
  smallHeading: 'growth Track academy',
  mainHeading: 'join a cohort',
  description: 'The next cohort begins soon.',
  subDescription: 'Sign Up',
  buttonText: 'Enroll',
  buttonLink: '/growth-track/enroll',
};

interface CohortFields {
  smallHeading?: string;
  mainHeading?: string;
  description?: string;
  subDescription?: string;
  buttonText?: string;
  buttonLink?: string;
}

export async function getGrowthTrackCohort(): Promise<GrowthTrackCohort> {
  const data = await fetchEntries<CohortFields>('growthTrackCohort');
  const fields = data?.items?.[0]?.fields;
  if (!fields) return defaultCohort;

  return {
    smallHeading: fields.smallHeading || defaultCohort.smallHeading,
    mainHeading: fields.mainHeading || defaultCohort.mainHeading,
    description: fields.description || defaultCohort.description,
    subDescription: fields.subDescription || defaultCohort.subDescription,
    buttonText: fields.buttonText || defaultCohort.buttonText,
    buttonLink: fields.buttonLink || defaultCohort.buttonLink,
  };
}
