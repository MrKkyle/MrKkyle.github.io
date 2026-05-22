/**
 * updates.js — file-backed updates data layer
 * Loads content from `data/updates.json` and falls back to built-in defaults.
 */

const UPDATES_DATA_URL = '../data/updates.json';

const DEFAULT_UPDATES = [
  {
    title: 'New Prayer Group Launched',
    category: 'announcements',
    date: '2026-05-21',
    excerpt: 'We are pleased to announce the launch of our weekly Wednesday evening prayer group. All are welcome to join us at 7 PM in the fellowship hall.',
    content: 'We are pleased to announce the launch of our weekly Wednesday evening prayer group. All are welcome to join us at 7 PM in the fellowship hall. This group will focus on intercessory prayer for our church, community, and global missions. We meet every Wednesday.',
  },
  {
    title: 'Summer Holiday Schedule Update',
    category: 'announcements',
    date: '2026-05-14',
    excerpt: 'Summer service times have been adjusted. Sunday worship will now start at 9:30 AM through August.',
    content: 'Summer service times have been adjusted. Sunday worship will now start at 9:30 AM through August. This change allows families more flexibility with their summer plans. We look forward to seeing you then!',
  },
  {
    title: 'Missions Trip to Ghana Confirmed',
    category: 'missions',
    date: '2026-05-07',
    excerpt: 'Our church missions team will travel to Ghana this July to serve with our partner churches.',
    content: 'Our church missions team will travel to Ghana this July to serve with our partner churches. The team will be involved in community outreach, Bible teaching, and construction projects. If you would like to contribute to this effort, please speak with our missions coordinator.',
  },
  {
    title: 'Youth Retreat Registration Now Open',
    category: 'youth',
    date: '2026-04-28',
    excerpt: 'Young people ages 13–18 are invited to register for our summer youth retreat at Camp Hebron.',
    content: 'Young people ages 13–18 are invited to register for our summer youth retreat at Camp Hebron. The retreat runs July 10–14 and will feature worship, Bible study, and outdoor activities. Registration closes June 15.',
  },
  {
    title: 'Nursery Expansion Complete',
    category: 'announcements',
    date: '2026-04-15',
    excerpt: 'We are grateful to announce the completion of our nursery and children\'s room renovation.',
    content: 'We are grateful to announce the completion of our nursery and children\'s room renovation. The new space provides a safe, welcoming environment for our youngest church members during Sunday services. Thank you to all who contributed.',
  },
];

async function getUpdates() {
  try {
    const response = await fetch(UPDATES_DATA_URL, { cache: 'no-store' });
    if (!response.ok) {
      throw new Error(`Unable to load updates data (${response.status})`);
    }

    const data = await response.json();
    const updates = Array.isArray(data) ? data : Array.isArray(data.updates) ? data.updates : [];
    return updates.map(normalizeUpdate);
  } catch (error) {
    return DEFAULT_UPDATES.map(normalizeUpdate);
  }
}

function normalizeUpdate(update) {
  return {
    title: update.title || '',
    category: update.category || 'announcements',
    date: update.date || '',
    excerpt: update.excerpt || '',
    content: update.content || '',
  };
}
