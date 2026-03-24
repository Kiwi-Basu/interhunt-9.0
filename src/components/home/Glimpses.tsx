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
];

const Glimpses = ({ darkMode }: GlimpsesProps) => {
  return (
    <div className="py-16 px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-10">
          <h2 className={`text-2xl font-semibold mb-2 ${
            darkMode ? 'text-white' : 'text-teams-text-light'
          }`}>
            Glimpses of Previous InternHunt
          </h2>
          <p className={`text-[13px] ${
            darkMode ? 'text-teams-text-dark-secondary' : 'text-teams-text-light-secondary'
          }`}>
            Moments from our past editions.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {glimpseImages.map((img, i) => (
            <div
              key={i}
              className={`group relative overflow-hidden rounded-lg border transition-colors duration-150 ${
                darkMode
                  ? 'border-teams-border-dark hover:border-teams-purple/30'
                  : 'border-teams-border-light hover:border-teams-purple/20'
              }`}
            >
              <img
                src={img.url}
                alt={img.caption}
                className="w-full h-44 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              {/* Caption overlay on hover */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent px-3 py-2.5 translate-y-full group-hover:translate-y-0 transition-transform duration-200">
                <span className="text-white text-[12px] font-medium">{img.caption}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Glimpses;
