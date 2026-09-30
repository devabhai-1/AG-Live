import { sitePath } from '../sitePath';

const pages = {
  hi: {
    privacy: {
      title: 'प्राइवेसी पॉलिसी',
      updated: 'अंतिम अपडेट: सितंबर 2026 · ag-live.in · com.agfarmer.live',
      blocks: [
        { h: '', p: 'AG Live किसानों की प्राइवेसी की रक्षा करता है — ऐप और वेबसाइट दोनों पर।' },
        { h: '1. कौन सा डेटा', p: 'नाम, ईमेल, फोन, उम्र (18+), पता, खेती सलाह के लिए चैट/फोटो, सुरक्षा लॉग, और AG Live सेशन के दौरान वैकल्पिक आवाज़/वीडियो।' },
        { h: '2. डेटा का उपयोग', p: 'AI खेती सलाह, फ्री/प्लान सीमा, लॉगिन के बाद चैट हिस्ट्री, विश्वसनीयता, और सपोर्ट। हम व्यक्तिगत डेटा नहीं बेचते।' },
        { h: '3. तीसरे पक्ष', p: 'सुरक्षित क्लाउड और AI सेवाएँ (जैसे OpenAI / Google) सिर्फ आपके सवाल का जवाब देने के लिए।' },
        { h: '4. खाता डिलीट', p: 'ऐप के शील्ड मेनू से, या /account-deletion/ पेज से, या support@agfarmer.app पर ईमेल से।' },
        { h: '5. बच्चे', p: 'AG Live 18+ के लिए है। 13 साल से कम उम्र का डेटा जानबूझकर नहीं लिया जाता।' },
        { h: '6. संपर्क', p: 'support@agfarmer.app · https://ag-live.in' },
      ],
    },
    terms: {
      title: 'नियम व शर्तें',
      updated: 'अंतिम अपडेट: सितंबर 2026 · ag-live.in',
      blocks: [
        { h: '', p: 'AG Live इस्तेमाल करने का मतलब है कि आप इन शर्तों से सहमत हैं।' },
        { h: '1. AI सलाह', p: 'यह लाइसेंसधारी कृषि विशेषज्ञ, लैब टेस्ट या स्थानीय सलाह का विकल्प नहीं है। स्प्रे और दवा की मात्रा हमेशा योग्य व्यक्ति से जाँचें।' },
        { h: '2. सही उपयोग', p: 'सेवा का दुरुपयोग, अनधिकृत एक्सेस, फ्री लिमिट का गलत इस्तेमाल, या गैरकानूनी कंटेंट मना है।' },
        { h: '3. सब्सक्रिप्शन', p: '₹199 अनलिमिटेड चैट और ₹1250 सुपर लाइव ऐप में बताई गई सुविधाएँ खोलते हैं। गेस्ट को सीमित फ्री चैट। रिफंड Google Play नीति के अनुसार।' },
        { h: '4. खाता', p: 'लॉगिन सुरक्षित रखें। खाता डिलीट Account Deletion पेज पर बताया गया है।' },
        { h: '5. संपर्क', p: 'support@agfarmer.app · https://ag-live.in' },
      ],
    },
    contact: {
      title: 'संपर्क',
      updated: 'ag-live.in',
      blocks: [
        { h: '', p: 'सपोर्ट ईमेल: support@agfarmer.app' },
        { h: 'Play बिलिंग', p: 'Play से खरीदारी हुई हो तो Google Play के ऑर्डर सपोर्ट का भी उपयोग करें।' },
        { h: 'ऐप', p: 'पैकेज: com.agfarmer.live' },
      ],
    },
    deletion: {
      title: 'खाता डिलीट',
      updated: 'Google Play डेटा सेफ्टी / अकाउंट डिलीशन',
      blocks: [
        { h: 'ऐप में', p: 'AG Live खोलें और साइन इन करें। ऊपर शील्ड आइकन खोलें। खाता डिलीट चुनें और कन्फर्म करें।' },
        { h: 'ईमेल से', p: 'रजिस्टर्ड ईमेल से support@agfarmer.app पर विषय “AG Live account deletion” लिखकर फोन/ईमेल भेजें। कानूनी जरूरत के रिकॉर्ड छोड़कर बाकी डेटा उचित समय में हटाया जाएगा।' },
      ],
    },
  },
  en: {
    privacy: {
      title: 'Privacy Policy',
      updated: 'Last updated: September 2026 · ag-live.in · com.agfarmer.live',
      blocks: [
        { h: '', p: 'AG Live protects the privacy of farmers using the Android app and this website.' },
        { h: '1. Data we collect', p: 'Account data (name, email, phone, age 18+, address), chat/photo queries for farming advice, technical logs, and optional live audio/video during AG Live sessions.' },
        { h: '2. How we use data', p: 'To provide AI farming advice, enforce free/plan limits, sync chat history when logged in, improve reliability, and answer support. We do not sell personal data.' },
        { h: '3. Third parties', p: 'Secure cloud services, including AI providers such as OpenAI / Google, process content only to answer your request.' },
        { h: '4. Account and deletion', p: 'Delete from the app shield menu, the Account Deletion page, or email support@agfarmer.app.' },
        { h: '5. Children', p: 'AG Live is for adults 18+. We do not knowingly collect data from children under 13.' },
        { h: '6. Contact', p: 'support@agfarmer.app · https://ag-live.in' },
      ],
    },
    terms: {
      title: 'Terms & Conditions',
      updated: 'Last updated: September 2026 · ag-live.in',
      blocks: [
        { h: '', p: 'By using AG Live you agree to these terms.' },
        { h: '1. AI advisory', p: 'AG Live is AI-assisted agricultural guidance. It is not a substitute for a licensed agronomist, lab test, or local expert. Always verify spray doses with a qualified professional.' },
        { h: '2. Acceptable use', p: 'Do not misuse the service, attempt unauthorized access, abuse free limits, or upload illegal content.' },
        { h: '3. Subscriptions', p: 'Paid plans (Chat Unlimited ₹199 and Super Live ₹1250) unlock the features described in the app. Guests get limited free chats. Refunds follow Google Play when the purchase was made there.' },
        { h: '4. Accounts', p: 'Keep your login secure. Account deletion is described on the Account Deletion page.' },
        { h: '5. Contact', p: 'support@agfarmer.app · https://ag-live.in' },
      ],
    },
    contact: {
      title: 'Contact',
      updated: 'ag-live.in',
      blocks: [
        { h: '', p: 'Support email: support@agfarmer.app' },
        { h: 'Play billing', p: 'If the purchase was made on Google Play, also use Play order support.' },
        { h: 'App', p: 'Package: com.agfarmer.live' },
      ],
    },
    deletion: {
      title: 'Delete your account',
      updated: 'Google Play data safety / account deletion',
      blocks: [
        { h: 'In the app', p: 'Open AG Live and sign in. Tap the shield icon. Choose Account deletion and confirm.' },
        { h: 'By email', p: 'Email support@agfarmer.app from your registered address with subject “AG Live account deletion” and your phone/email. We delete or anonymize account data within a reasonable period, except records required for legal or fraud prevention.' },
      ],
    },
  },
};

const nav = [
  { href: sitePath(''), hi: 'होम', en: 'Home' },
  { href: sitePath('privacy-policy/'), hi: 'प्राइवेसी', en: 'Privacy' },
  { href: sitePath('terms-and-conditions/'), hi: 'नियम', en: 'Terms' },
  { href: sitePath('account-deletion/'), hi: 'खाता डिलीट', en: 'Delete account' },
  { href: sitePath('contact-us/'), hi: 'संपर्क', en: 'Contact' },
];

export function legalKeyFromPath(pathname) {
  const base = (import.meta.env.BASE_URL || '/').replace(/\/$/, '');
  let path = (pathname || '/').replace(/\/$/, '') || '/';
  if (base && path.toLowerCase().startsWith(base.toLowerCase())) {
    path = path.slice(base.length) || '/';
  }
  if (!path.startsWith('/')) path = `/${path}`;
  if (path === '/privacy-policy') return 'privacy';
  if (path === '/terms-and-conditions') return 'terms';
  if (path === '/contact-us') return 'contact';
  if (path === '/account-deletion') return 'deletion';
  return null;
}

export default function LegalPage({ pageKey, lang, onToggleLang }) {
  const copy = (pages[lang] || pages.hi)[pageKey];
  const hi = lang === 'hi';

  return (
    <div style={{ minHeight: '100vh', background: 'var(--sky-mist)' }}>
      <nav style={{ background: '#021B2B', padding: '14px 18px', display: 'flex', flexWrap: 'wrap', gap: 14, justifyContent: 'center', alignItems: 'center' }}>
        {nav.map((item) => (
          <a key={item.href} href={item.href} style={{ color: '#BAE6FD', textDecoration: 'none', fontWeight: 800, fontSize: 14 }}>
            {hi ? item.hi : item.en}
          </a>
        ))}
        <button
          type="button"
          onClick={onToggleLang}
          style={{ background: 'transparent', color: '#E0F2FE', border: '1px solid #38BDF8', borderRadius: 999, padding: '4px 12px', fontWeight: 800, cursor: 'pointer' }}
        >
          {hi ? 'English' : 'हिन्दी'}
        </button>
      </nav>
      <main style={{ maxWidth: 760, margin: '28px auto', background: '#fff', border: '1px solid var(--sky-ice)', borderRadius: 18, padding: '28px 24px' }}>
        <h1 style={{ marginTop: 0, color: 'var(--sky-deep)', fontSize: '1.7rem' }}>{copy.title}</h1>
        <p style={{ color: 'var(--text-muted)' }}>{copy.updated}</p>
        {copy.blocks.map((block, i) => (
          <section key={i}>
            {block.h ? <h2 style={{ fontSize: '1.15rem', marginTop: '1.3rem', color: 'var(--sky-deep)' }}>{block.h}</h2> : null}
            <p>{block.p}</p>
          </section>
        ))}
      </main>
    </div>
  );
}
