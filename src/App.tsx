import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Heart, Sparkles } from 'lucide-react';
import { COLLECTION } from './config/collection';

export default function App() {
  const [filter, setFilter] = useState<'all' | 'collected' | 'missing'>('all');

  const stats = useMemo(() => {
    let totalCards = 0;
    let collectedUnique = 0;
    let totalCopies = 0;

    COLLECTION.sets.forEach(set => {
      totalCards += set.cards.length;
      set.cards.forEach(card => {
        if (card.count > 0) collectedUnique++;
        totalCopies += card.count;
      });
    });

    const progress = totalCards > 0 ? Math.round((collectedUnique / totalCards) * 100) : 0;
    const missing = totalCards - collectedUnique;
    const extra = totalCopies - collectedUnique;

    return { totalCards, collectedUnique, totalCopies, progress, missing, extra };
  }, []);

  return (
    <div className="min-h-screen pb-20 overflow-x-hidden relative">
      <DecorativeElements />
      
      <div className="wrap max-w-[1080px] mx-auto px-5 relative z-10">
        {/* Header */}
        <header className="text-center pt-14 pb-10">
          <p className="text-[0.75rem] tracking-[0.18em] uppercase text-text-light mb-2 font-bold">
            Pokémon TCG
          </p>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display font-bold text-[clamp(2rem,5.5vw,3.4rem)] leading-[1.1] sparkle-text mb-2"
          >
            ✦ Radiant Collection ✦
          </motion.h1>

          {/* Overall Progress */}
          <div className="max-w-[520px] mx-auto mt-7">
            <div className="flex justify-between items-baseline mb-2">
              <span className="font-display font-bold text-[1.05rem] text-text">
                {stats.collectedUnique} / {stats.totalCards} cards
              </span>
              <span className="font-display font-semibold text-[0.9rem] text-text-mid">
                {stats.progress}%
              </span>
            </div>
            <div className="h-[10px] rounded-full bg-text-mid/15 overflow-hidden">
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: `${stats.progress}%` }}
                className="h-full rounded-full bar-shift"
              />
            </div>
          </div>

          {/* Stats Chips */}
          <div className="flex justify-center gap-[0.65rem] flex-wrap mt-6">
            <div className="bg-white rounded-full px-4 py-1.5 font-display font-semibold text-[0.82rem] text-text-mid shadow-[0_2px_12px_rgba(180,100,220,0.12)] border border-lavender/30 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-mint" />
              {stats.collectedUnique} owned
            </div>
            <div className="bg-white rounded-full px-4 py-1.5 font-display font-semibold text-[0.82rem] text-text-mid shadow-[0_2px_12px_rgba(180,100,220,0.12)] border border-lavender/30 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-pink" />
              {stats.missing} to find
            </div>
            {stats.extra > 0 && (
              <div className="bg-white rounded-full px-4 py-1.5 font-display font-semibold text-[0.82rem] text-text-mid shadow-[0_2px_12px_rgba(180,100,220,0.12)] border border-lavender/30 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-lavender" />
                {stats.extra} extra
              </div>
            )}
          </div>
        </header>

        {/* Filters */}
        <div className="flex justify-center mb-8">
          <div className="flex p-1 bg-white/50 rounded-full border border-white/50 shadow-sm">
            {(['all', 'collected', 'missing'] as const).map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-6 py-2 rounded-full text-xs font-bold capitalize transition-all duration-300 ${
                  filter === f 
                    ? 'bg-lavender text-white shadow-md' 
                    : 'text-text-light hover:text-text-mid'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        {/* Set Sections */}
        <main className="space-y-8">
          {COLLECTION.sets.map((set) => {
            const setCards = set.cards;
            const ownedInSet = setCards.filter(c => c.count > 0).length;
            const setProgress = Math.round((ownedInSet / setCards.length) * 100);
            
            const filteredSetCards = setCards.filter(card => {
              if (filter === 'collected') return card.count > 0;
              if (filter === 'missing') return card.count === 0;
              return true;
            });

            if (filteredSetCards.length === 0) return null;

            return (
              <section key={set.id} className="glass-section rounded-[24px] p-7 md:p-8">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-5">
                  <div>
                    <h2 className="font-display font-bold text-[1.25rem] text-text">
                      ✨ {set.name}
                    </h2>
                    <p className="text-[0.82rem] text-text-light mt-1">
                      {set.subtitle}
                    </p>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <div className="font-display font-bold text-[1.6rem] text-text leading-none">
                      {ownedInSet}<span className="text-[0.9rem] text-text-light">/{setCards.length}</span>
                    </div>
                    <p className="text-[0.78rem] text-text-light mt-1">{setProgress}% complete</p>
                  </div>
                </div>
                
                <div className="h-2 rounded-full bg-text-mid/10 overflow-hidden mb-6">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${setProgress}%` }}
                    className="h-full rounded-full bar-shift"
                  />
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                  <AnimatePresence mode="popLayout">
                    {filteredSetCards.map((card) => (
                      <CardItem 
                        key={`${set.id}-${card.number}`} 
                        card={card} 
                        tcgSetId={set.tcgSetId}
                      />
                    ))}
                  </AnimatePresence>
                </div>
              </section>
            );
          })}
        </main>
      </div>
    </div>
  );
}

function CardItem({ card, tcgSetId }: { card: any; tcgSetId: string; key?: string }) {
  const isCollected = card.count > 0;
  const isMulti = card.count > 1;
  const [hasImg, setHasImg] = useState(false);
  const imageUrl = `https://images.pokemontcg.io/${tcgSetId}/${card.number}_hires.png`;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      whileHover={{ y: -5, scale: 1.04 }}
      className={`relative aspect-[5/7] transition-all duration-300 ${
        isCollected ? 'owned' : 'missing'
      } ${isMulti ? 'multi-stack' : ''} ${hasImg ? 'has-img' : ''}`}
    >
      {/* Multi-stack shadows */}
      {isMulti && (
        <>
          <div className="absolute inset-0 translate-x-[4px] translate-y-[5px] holo-bg opacity-55 -z-10" />
          <div className="absolute inset-0 translate-x-[8px] translate-y-[10px] holo-bg opacity-30 -z-20" />
        </>
      )}

      {/* Card Container */}
      <div className={`relative w-full h-full overflow-hidden border-[1.5px] ${
        isCollected 
          ? 'holo-card border-white/90 shadow-[0_4px_18px_rgba(200,100,200,0.22),inset_0_0_18px_rgba(255,255,255,0.35)]' 
          : 'bg-[#f0ecf6] border-[#e4dff0]'
      }`}>
        <img 
          src={imageUrl} 
          alt={card.name}
          onLoad={() => setHasImg(true)}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${
            isCollected ? '' : 'grayscale-[0.85] brightness-[0.6]'
          } ${hasImg ? 'opacity-100' : 'opacity-0'}`}
          referrerPolicy="no-referrer"
        />
        
        {/* Missing Overlay */}
        {!isCollected && (
          <div className="absolute inset-0 bg-[#503c64]/22 z-[2]" />
        )}

        {/* Holographic Shimmer Overlay */}
        {isCollected && (
          <div className="absolute inset-0 holo-bg mix-blend-screen pointer-events-none z-[3]" />
        )}

        {/* Fallback/Info Overlay (Visible if image fails or is loading) */}
        {!hasImg && (
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-2 z-[2] pointer-events-none">
            <div className={`font-display font-semibold text-[0.6rem] tracking-wider mb-1 ${isCollected ? 'text-text-mid' : 'text-[#bbb0cc]'}`}>
              {card.number}
            </div>
            <div className={`font-display font-bold text-[0.68rem] leading-tight ${isCollected ? 'text-text' : 'text-[#bbb0cc]'}`}>
              {card.name}
            </div>
            {card.note && (
              <div className="text-[0.56rem] text-text-light italic mt-0.5">
                {card.note}
              </div>
            )}
            <div className={`w-2.5 h-2.5 rounded-full border-[1.5px] border-white/70 absolute bottom-2 left-2 opacity-85 z-[4] ${getTypeColor(card.type)}`} />
          </div>
        )}

        {/* Count Badge */}
        {isMulti && (
          <div className="absolute top-1.5 right-1.5 bg-white text-text font-display font-bold text-[0.58rem] rounded-full px-1.5 py-0.5 shadow-[0_1px_6px_rgba(0,0,0,0.13)] leading-tight z-[5]">
            ×{card.count}
          </div>
        )}
      </div>
    </motion.div>
  );
}

function getTypeColor(type: string) {
  const t = type.toLowerCase();
  if (t.includes('fire')) return 'bg-[#f07830]';
  if (t.includes('water')) return 'bg-[#40a0f8]';
  if (t.includes('grass')) return 'bg-[#60c860]';
  if (t.includes('psychic')) return 'bg-[#c070f0]';
  if (t.includes('fairy')) return 'bg-[#f87ad0]';
  if (t.includes('dark')) return 'bg-[#6858a8]';
  if (t.includes('metal')) return 'bg-[#8090a8]';
  if (t.includes('dragon')) return 'bg-[#3890a8]';
  if (t.includes('lightning')) return 'bg-[#f8d030]';
  if (t.includes('fighting')) return 'bg-[#c03028]';
  if (t.includes('trainer')) return 'bg-[#d89030]';
  return 'bg-[#b0a8a0]';
}

function DecorativeElements() {
  const glyphs = ['✦','✧','◇','✿','❋','⋆','✺'];
  const colors = ['#f5a0cc','#c5a8f5','#90dbc0','#ffd6a0','#a8d8f8'];
  
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {[...Array(22)].map((_, i) => (
        <div
          key={i}
          className="absolute sp-drift opacity-0"
          style={{
            left: `${Math.random() * 100}%`,
            animationDuration: `${8 + Math.random() * 12}s`,
            animationDelay: `${Math.random() * 14}s`,
            color: colors[i % colors.length],
            fontSize: `${10 + Math.random() * 12}px`,
          }}
        >
          {glyphs[i % glyphs.length]}
        </div>
      ))}
    </div>
  );
}
