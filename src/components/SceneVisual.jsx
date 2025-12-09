import {
  Map as MapIcon, Hammer, FlaskConical, DoorOpen, CircleDot,
  ArrowRight, Trees, Mountain, Snowflake, HelpCircle,
  Sparkles, Sun, Skull, Flower, Coins, Scroll
} from 'lucide-react';

// Mapování typů scén na obrázky (cesta v public složce)
const sceneImages = {
  'town_dark': '/namesti.jpg',
  'forge': '/kovar.jpg',
  'krádež': '/kradez.jpg',
  'herbalist': '/babka.jpg',
  'flower': '/louka.jpg',
  'lektvar': '/lektvar.jpg',
  'inn': '/hostinec.jpg',
  'coins': '/mesec.jpg ',
  'well': '/studna.jpg',
  'crossroads': '/brana.jpg',
  'forest_dark': '/pavouk.jpg',
  'reka': '/reka.jpg',
  'obr': '/obr.jpg',
  'riddle': '/hadanka.jpg',
  'elf': '/svatyne.jpg',
  'victory': '/victory.jpg',
  'jezero': '/jezero.jpg',
  'sraz': '/sraz.jpg',
  'vrchol': '/vrchol.jpg'

};

export default function SceneVisual({ type }) {
  const iconProps = { strokeWidth: 1.5, className: "text-[#2c1810] opacity-80" };
  let content;
  let title;

  switch(type) {
    case 'town_dark': title = "NÁMĚSTÍ"; content = <MapIcon size={100} {...iconProps} />; break;
    case 'forge': title = "KOVÁRNA"; content = <Hammer size={100} {...iconProps} />; break;
    case 'krádež': title = "KOVÁRNA"; content = <Hammer size={100} {...iconProps} />; break;
    case 'herbalist': title = "BYLINÁŘKA"; content = <FlaskConical size={100} {...iconProps} />; break;
    case 'lektvar': title = "BYLINÁŘKA"; content = <FlaskConical size={100} {...iconProps} />; break;
    case 'inn': title = "HOSTINEC"; content = <DoorOpen size={100} {...iconProps} />; break;
    case 'well': title = "STUDNA"; content = <CircleDot size={100} {...iconProps} />; break;
    case 'crossroads': title = "BRÁNA"; content = <ArrowRight size={100} {...iconProps} />; break;
    case 'forest_dark': title = "ŠEROLES"; content = <Trees size={100} {...iconProps} className="text-purple-900" />; break;
    case 'reka': title = "ŘEKA"; content = <Trees size={100} {...iconProps} className="text-purple-900" />; break;
    case 'mountains': title = "JISKERNÉ ŠTÍTY"; content = <Mountain size={100} {...iconProps} className="text-blue-900" />; break;
    case 'vrchol': title = "KONEC VAŠÍ CESTY"; content = <Mountain size={100} {...iconProps} className="text-blue-900" />; break;
    case 'jezero': title = "JEZERO"; content = <Mountain size={100} {...iconProps} className="text-blue-900" />; break;
    case 'sraz': title = "SRÁZ"; content = <Mountain size={100} {...iconProps} className="text-blue-900" />; break;
    case 'ice_death': title = "MRAZIVÁ SMRT"; content = <Snowflake size={100} {...iconProps} className="text-blue-400" />; break;
    case 'trap': title = "PAST"; content = <div className="text-5xl">🪤</div>; break;
    case 'riddle': title = "HÁDANKA"; content = <HelpCircle size={100} {...iconProps} />; break;
    case 'obr': title = "OBR"; content = <HelpCircle size={100} {...iconProps} />; break;
    case 'elf': title = "SVATYNĚ"; content = <Sparkles size={100} {...iconProps} className="text-yellow-600" />; break;
    case 'victory': title = "VÍTĚZSTVÍ"; content = <Sun size={100} {...iconProps} className="text-amber-500 animate-pulse" />; break;
    case 'skull': title = ""; content = <Skull size={100} {...iconProps} className="text-black" />; break;
    case 'flower': title = "LOUKA"; content = <Flower size={100} {...iconProps} />; break;
    case 'coins': title = "POKLAD"; content = <Coins size={100} {...iconProps} className="text-yellow-700" />; break;
    default: title = "PŘÍBĚH"; content = <Scroll size={100} {...iconProps} />;
  }

  const imageSrc = sceneImages[type];

  // Pokud existuje obrázek pro daný typ scény, zobrazíme ho přes celou plochu
  if (imageSrc) {
    return (
      <div className="w-full h-full relative overflow-hidden">
        <img
          src={imageSrc}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Tmavý gradient pro lepší čitelnost titulku */}
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/60 to-transparent"></div>
        {/* Titulek */}
        <div className="absolute bottom-4 left-0 right-0 text-center">
          <span className="text-xl font-cinzel tracking-[0.2em] text-white drop-shadow-lg px-4 py-2">
            {title}
          </span>
        </div>
      </div>
    );
  }

  // Fallback na ikonovou verzi
  return (
    <div className="w-full h-full bg-[#e8dec0] flex flex-col items-center justify-center relative overflow-hidden p-6">
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/aged-paper.png')]"></div>
      <div className="absolute inset-4 border-2 border-[#2c1810]/30 border-dashed rounded-lg"></div>
      <div className="z-10 transform scale-100 transition-transform duration-700 hover:scale-110">
        {content}
      </div>
      <div className="mt-6 text-xl font-cinzel tracking-[0.2em] text-[#2c1810] border-t border-b border-[#2c1810] py-2">
        {title}
      </div>
    </div>
  );
}

