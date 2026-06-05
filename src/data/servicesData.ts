import type { Category } from '@/types/category';

const servicesData: Category[] = [
  {
    title: 'Events',
    slug: 'events',
    image: '/assets/categories/events.jpg',
    subcategories: [
      { 
        name: 'Corporate Events', 
        slug: 'corporate-events', 
        image: '/assets/services/events/corporate.jpg',
        description: 'At <strong>Exevo Events</strong>, we understand that corporate events go beyond logistics — they represent your brand identity, values, and future vision.\n\nWe create bespoke <strong>corporate event solutions</strong> tailored to your business goals, whether it’s an annual day, board meeting, town hall, or employee engagement session.\n\nFrom strategic planning to flawless execution, we manage venue selection, branding, technical setups, content, and guest handling. Our team ensures a seamless experience that builds trust, elevates your brand image, and drives business outcomes.'

 },
      { 
        name: 'Product Launches', 
        slug: 'product-launches', 
        image: '/assets/services/events/launch.jpg',
        description: `At <strong>Exevo Events</strong>, we understand that corporate events go beyond logistics — they represent your brand identity, values, and future vision.
        We create bespoke <strong>corporate event solutions</strong> tailored to your business goals, whether it’s an annual day, board meeting, town hall, or employee engagement session.
        From strategic planning to flawless execution, we manage venue selection, branding, technical setups, content, and guest handling. Our team ensures a seamless experience that builds trust, elevates your brand image, and drives business outcomes.`

      },
      { name: 'Dealer Meets', 
        slug: 'dealer-meets', 
        image: '/assets/services/events/dealer.jpg',
        description: ` <strong>Exevo Events</strong> curates inspiring <strong>dealer meet experiences</strong> that motivate, recognize, and empower your channel partners.
        From national dealer conferences to product briefings and R&R ceremonies, we make every meet impactful.
        Our services include full event branding, venue and stay management, high-quality AV setups, gifting, and engaging presentations — all designed to leave a lasting impression and deepen business relationships.`

      },
      { name: 'Incentive Meets', 
        slug: 'incentive-meets', 
        image: '/assets/services/events/incentive.jpg',
        description: `Celebrate success and reward performance with our tailor-made <strong>incentive meets</strong>. 
        We organize luxury retreats and experiential journeys that rejuvenate, motivate, and inspire your team.
        With seamless planning, travel arrangements, curated stays, and memorable gala evenings — <strong>Exevo Events</strong> turns your appreciation into an experience that participants cherish. Whether domestic or international, we manage every detail to perfection.`

      },
      { name: 'Lifestyle Events', 
        slug: 'lifestyle-events', 
        image: '/assets/services/events/lifestyle.jpg',
        description: `Bring your brand into the lifestyle spotlight with <strong>Exevo Events</strong>.
        We design and deliver high-profile <strong>lifestyle events</strong> that reflect fashion, luxury, and creativity at their finest.
        From celebrity-attended launches to fashion showcases and exclusive influencer gatherings, we ensure an immersive brand environment that elevates your image and connects with your audience on a deeper level.`


      },
      { name: 'Experimental Events', 
        slug: 'experimental-events', 
        image: '/assets/services/events/experimental.jpg',
        description: `Create emotional connections with your audience through <strong>experiential marketing events</strong> that engage all the senses.
        At <strong>Exevo Events</strong>, we design immersive brand experiences using storytelling, interactivity, and cutting-edge tech.
        From gamified installations to augmented reality zones and product tunnels, we fuse creativity with brand strategy to deliver experiences that live beyond the moment and into memory.`


      },
      { name: 'Press Meets', 
        slug: 'press-meets', 
        image: '/assets/services/events/press.jpg',
        description: `Deliver your brand’s message to the media with clarity and style.
        <strong>Exevo Events</strong> manages <strong>press meet events</strong> with precision — including media invites, press kits, stage design, speech support, and post-event coverage.
        We help you create a powerful media presence, ensuring that every announcement, product reveal, or brand update reaches the right people with the right impact.`


      },
    ],
  },
  {
    title: 'Exhibitions',
    slug: 'exhibitions',
    image: '/assets/categories/exhibitions.jpg',
    subcategories: [
      { name: 'Stalls', 
        slug: 'stalls',
        image: '/assets/services/exhibitions/stalls.jpg',
        description: `Stand out from the crowd with <strong>custom exhibition stalls</strong> designed and executed by <strong>Exevo Events</strong>.
        We create high-impact stall experiences that attract attention, communicate your brand story, and maximize visitor engagement.
        From concept design to fabrication, branding, AV integration, and on-site management — we deliver end-to-end stall solutions that reflect professionalism and creativity.`

        
        },
      { name: 'Trade Shows', 
        slug: 'trade-shows', 
        image: '/assets/services/exhibitions/tradeshows.jpg',
        description: `From planning to execution, <strong>Exevo Events</strong> offers comprehensive <strong>trade show management</strong> that ensures maximum visibility and brand impact.
        Our experienced team coordinates with organizers, handles booth design, staffing, logistics, and marketing efforts to help you connect meaningfully with both B2B and B2C audiences.
        We ensure your presence at the show is not just seen — but remembered.`,
      },
      { name: 'Retail Displays', 
        slug: 'retail-displays', 
        image: '/assets/services/exhibitions/retail.jpg',
        description: `We design innovative <strong>retail displays</strong> that elevate your in-store branding and boost customer engagement.
        At <strong>Exevo Events</strong>, we understand how display design influences consumer behavior. From shelf setups to floor displays, we create brand-aligned concepts that enhance visibility and encourage product interaction.
        Perfect for FMCG, electronics, fashion, and lifestyle brands looking to make an impact at the retail level.`,

      },
      { name: 'Product Displays', 
        slug: 'product-displays', 
        image: '/assets/services/exhibitions/product.jpg',
        description: `Let your products take center stage with immersive <strong>product display solutions</strong> by <strong>Exevo Events</strong>.
        We craft visually compelling display setups for exhibitions, events, and showrooms that highlight product features, functionality, and design.
        Our goal is to create presentation experiences that grab attention, spark curiosity, and drive conversions.`  
      },
    ],
  },
  {
    title: 'Activations',
    slug: 'activations',
    image: '/assets/categories/activations.jpg',
    subcategories: [
      { name: 'Mall Activations', 
        slug: 'mall-activations', 
        image: '/assets/services/activations/mall.jpg',
        description: `Engage your audience in high-footfall environments with powerful <strong>mall activations</strong> by <strong>Exevo Events</strong>.
        We create interactive brand zones in shopping malls that drive awareness, footfall, and conversion through experiential setups, product demos, and consumer contests.
        Our activations are designed to capture attention and deliver real-time engagement with measurable impact.`,
      },
      { name: 'Market Activations', 
        slug: 'market-activations', 
        image: '/assets/services/activations/market.jpg',
        description: `<strong>Exevo Events</strong> specializes in executing on-ground <strong>market activations</strong> that connect directly with your target audience.
        Whether it’s busy bazaars, urban streets, or local community hubs — we bring your brand into the public space through vibrant, high-energy campaigns.
        From sampling to demonstrations and mobile vans, we ensure visibility where it matters most.`,

      },
      { name: 'School Activations', 
        slug: 'school-activations', 
        image: '/assets/services/activations/school.jpg',
        description: `Reach the next generation through meaningful <strong>school activations</strong> that are educational, engaging, and brand-friendly.
        At <strong>Exevo Events</strong>, we work closely with school administrations to ensure safe, age-appropriate campaigns that create lasting impressions on students.
        Ideal for educational products, health initiatives, or early brand recall.`,

      },
      { name: 'College Activations', 
        slug: 'college-activations', 
        image: '/assets/services/activations/college.jpg',
        description: `Capture the attention of young and aspirational audiences with strategic <strong>college activations</strong>.
        Our youth-focused campaigns include contests, workshops, celebrity visits, and tech-enabled engagement that resonate with the Gen Z mindset.
        We help brands build emotional and digital connections within the campus ecosystem.`,

      },
      { name: 'Road Shows', 
        slug: 'road-shows', 
        image: '/assets/services/activations/road.jpg',
        description: `Take your brand on the move with dynamic <strong>road shows</strong> planned and executed by <strong>Exevo Events</strong>.
        We manage everything from branded vehicles, permits, promoters, and logistics to on-the-go audience engagement.
        Perfect for product launches, awareness campaigns, and multi-location outreach with real-time visibility and reach.`  
      },
    ],
  },
  {
    title: 'Mice & Logistics',
    slug: 'mice-logistics',
    image: '/assets/categories/mice.jpg',
    subcategories: [
      { name: 'Travel Bookings', 
        slug: 'travel-bookings', 
        image: '/assets/services/mice/travel.jpg',
        description: `Streamline your business journeys with professional <strong>travel booking services</strong> by <strong>Exevo Events</strong>.
        We handle domestic and international travel logistics for corporate groups, delegates, speakers, and event attendees with precision and punctuality.
        From flights and transfers to group itineraries and emergency support — we make travel smooth, reliable, and stress-free.`,
      },
      { name: 'Hotel Bookings', 
        slug: 'hotel-bookings', 
        image: '/assets/services/mice/hotel.jpg',
        description: `Enjoy hassle-free <strong>hotel booking services</strong> tailored to your event requirements.
        At <strong>Exevo Events</strong>, we coordinate with a wide network of luxury, premium, and budget hotels to ensure the perfect stay for your guests and teams.
        Whether for MICE events, destination meets, or incentive travel, we ensure comfort, convenience, and cost efficiency.`,

      },
      { name: 'Logistics', 
        slug: 'logistics', 
        image: '/assets/services/mice/logistics.jpg',
        description: `Behind every successful event lies flawless <strong>event logistics</strong> — and that's where <strong>Exevo Events</strong> excels.
        We manage transportation, freight, equipment movement, branding material delivery, manpower, and venue setup — all under one roof.
        With a tech-enabled tracking approach and real-time coordination, we make sure everything runs like clockwork.`  
      },
    ],
  },
  {
    title: 'Virtual Events',
    slug: 'virtual-events',
    image: '/assets/categories/virtual.jpg',
    subcategories: [
      { name: 'Platform Design', 
        slug: 'platform-design', 
        image: '/assets/services/virtual/platform.jpg',
        description: `Create a seamless and immersive online experience with custom <strong>virtual event platform design</strong> by <strong>Exevo Events</strong>.
        We build user-friendly, brand-integrated platforms equipped with live streaming, breakout rooms, chat support, and analytics.
        Whether for webinars, conferences, or hybrid expos — our tech infrastructure ensures stability and scalability.`,
      },
      { name: 'Engagement Programs', 
        slug: 'engagement-programs', 
        image: '/assets/services/virtual/engagement.jpg',
        description: `Keep your online audience hooked with dynamic <strong>virtual engagement programs</strong> crafted by <strong>Exevo Events</strong>.
        From gamified sessions and trivia contests to virtual team-building and branded mini-games — we make digital events interactive, fun, and meaningful.
        Our virtual engagement strategies drive participation, retention, and real-time audience delight.`,
      },
      { name: 'Webinars', 
        slug: 'webinars', 
        image: '/assets/services/virtual/webinars.jpg',
        description: `Deliver impactful knowledge sessions with professionally managed <strong>webinar solutions</strong> from <strong>Exevo Events</strong>.
        We take care of everything — speaker onboarding, tech checks, branding, live moderation, and post-webinar analytics.
        Perfect for product demos, corporate communication, industry talks, and lead generation.`,
      },
      { name: 'Hybrid and Virtual', 
        slug: 'hybrid-and-virtual', 
        image: '/assets/services/virtual/hybrid.jpg',
        description: `Blend the best of both worlds with <strong>hybrid and virtual event solutions</strong> by <strong>Exevo Events</strong>.
        We combine on-ground production with virtual streaming to deliver synchronized, immersive experiences across physical and digital platforms.
        From global townhalls to hybrid expos, we ensure consistent branding, audience engagement, and real-time communication across all touchpoints.`  

      },
    ],
  },
];

export default servicesData;
