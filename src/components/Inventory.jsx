import { Backpack, Hammer, FlaskConical, Gem, Sun, Map as MapIcon } from 'lucide-react';

const getItemIcon = (itemName) => {
  switch (itemName) {
    case 'Sekera': return <Hammer size={16} />;
    case 'Lektvar zdraví': return <FlaskConical size={16} />;
    case 'Jantar': return <Gem size={16} />;
    case 'Teplé oblečení': return <Sun size={16} />;
    case 'Mapa Silvarionu': return <MapIcon size={16} />;
    default: return <Backpack size={16} />;
  }
};

export default function Inventory({ inventory, hearts, onUsePotion, onOpenMap }) {
  const handleItemClick = (item) => {
    if (item === 'Mapa Silvarionu') {
      onOpenMap();
    }
  };

  return (
    <div className="flex-none bg-[#e6d5aa] border-t-4 border-double border-[#2c1810] p-3 shadow-[0_-5px_15px_rgba(0,0,0,0.05)]">
      <div className="font-bold font-cinzel text-[10px] tracking-wider text-[#2c1810] mb-2 flex items-center gap-2 uppercase opacity-80">
        <Backpack size={12} /> Vybavení
      </div>

      <div className="flex flex-wrap gap-2">
        {inventory.length === 0 ? (
          <div className="text-[#2c1810]/50 italic font-crimson text-xs p-1">Prázdný batoh...</div>
        ) : (
          inventory.map((item, i) => (
            <div
              key={i}
              onClick={() => handleItemClick(item)}
              className={`flex items-center gap-1.5 bg-[#f4e4bc] border border-[#2c1810] px-2 py-1 rounded shadow-sm hover:bg-white transition-colors ${
                item === 'Mapa Silvarionu' ? 'cursor-pointer hover:border-[#8b0000] hover:shadow-md' : 'cursor-default'
              }`}
            >
              <div className="text-[#2c1810] opacity-70">
                {getItemIcon(item)}
              </div>
              <span className="font-cinzel font-bold text-xs text-[#2c1810]">{item}</span>

              {item === 'Lektvar zdraví' && hearts < 5 && (
                <button
                  onClick={(e) => { e.stopPropagation(); onUsePotion(); }}
                  className="ml-1 px-1.5 py-0.5 bg-red-100 hover:bg-red-200 border border-red-800 text-red-900 text-[10px] font-bold rounded transition-colors animate-pulse"
                >
                  POUŽÍT
                </button>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
}

