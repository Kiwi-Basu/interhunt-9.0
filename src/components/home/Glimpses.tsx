interface GlimpsesProps {
  darkMode: boolean;
}

const glimpseImages = [
  { url: 'https://picsum.photos/seed/ih1/600/400', caption: 'Opening Ceremony' },
  { url: 'https://picsum.photos/seed/ih2/600/400', caption: 'Company Stalls' },
  { url: 'https://picsum.photos/seed/ih3/600/400', caption: 'Student Networking' },
  { url: 'https://picsum.photos/seed/ih4/600/400', caption: 'Panel Discussion' },
  { url: 'https://picsum.photos/seed/ih5/600/400', caption: 'Interview Sessions' },
  { url: 'https://picsum.photos/seed/ih6/600/400', caption: 'Award Ceremony' },
  { url: 'https://picsum.photos/seed/ih7/600/400', caption: 'Team Building' },
  { url: 'https://picsum.photos/seed/ih8/600/400', caption: 'Closing Event' },
];

const Glimpses = ({ darkMode }: GlimpsesProps) => {
  return (
    <div className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-8 h-[3px] bg-teams-purple-light rounded-full"></span>
            <span
              className={`text-xs font-semibold uppercase tracking-widest ${
                darkMode ? 'text-teams-purple-light' : 'text-teams-purple'
              }`}
            >
              Gallery
            </span>
            <span className="w-8 h-[3px] bg-teams-purple-light rounded-full"></span>
          </div>
          <h2
            className={`text-3xl md:text-4xl font-bold mb-4 ${
              darkMode ? 'text-teams-text-dark' : 'text-teams-text-light'
            }`}
          >
            Glimpses of Previous InternHunt
          </h2>
          <p
            className={`text-sm max-w-lg mx-auto ${
              darkMode ? 'text-teams-text-dark-secondary' : 'text-teams-text-light-secondary'
            }`}
          >
            A look back at the moments that defined our past editions.
          </p>
        </div>

        {/* Photo Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {glimpseImages.map((img, i) => (
            <div
              key={i}
              className={`group relative overflow-hidden rounded-xl border transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${
                i === 0 || i === 5 ? 'md:col-span-2 md:row-span-2' : ''
              } ${
                darkMode
                  ? 'border-teams-border-dark hover:border-teams-purple/40 hover:shadow-teams-purple/10'
                  : 'border-teams-border-light hover:border-teams-purple/30 hover:shadow-teams-purple/10'
              }`}
            >
              <img
                src={img.url}
                alt={img.caption}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                style={{ minHeight: i === 0 || i === 5 ? '300px' : '180px' }}
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-4">
                  <span className="text-white text-sm font-medium">{img.caption}</span>
                </div>
              </div>
              {/* Corner Accent */}
              <div className="absolute top-3 right-3 w-8 h-8 rounded-lg bg-teams-purple/80 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Glimpses;
