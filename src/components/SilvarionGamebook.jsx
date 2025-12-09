import { useState, useEffect, useRef } from 'react';
import { storyData } from '../data/storyData';
import Header from './Header';
import Inventory from './Inventory';
import SceneVisual from './SceneVisual';
import ChoiceButton from './ChoiceButton';
import MapModal from './MapModal';

export default function SilvarionGamebook() {
  const [currentSceneId, setCurrentSceneId] = useState('start');
  const [inventory, setInventory] = useState(['Teplé oblečení', 'Mapa Silvarionu']);
  const [gold, setGold] = useState(0);
  const [hearts, setHearts] = useState(5);
  const [closedLocations, setClosedLocations] = useState([]);
  const [isMapOpen, setIsMapOpen] = useState(false);

  const rightColumnRef = useRef(null);

  useEffect(() => {
    if (hearts <= 0 && currentSceneId !== 'game_over' && currentSceneId !== 'reset' && currentSceneId !== 'mountains_37') {
      setCurrentSceneId('game_over');
    }
  }, [hearts, currentSceneId]);

  useEffect(() => {
    if (rightColumnRef.current) {
      rightColumnRef.current.scrollTop = 0;
    }
  }, [currentSceneId]);

  const handleUsePotion = () => {
    if (hearts < 5) {
      setHearts(prev => Math.min(5, prev + 2));
      setInventory(prev => prev.filter(i => i !== 'Lektvar zdraví'));
    }
  };

  const handleChoice = (choice) => {
    if (choice.target === 'reset') {
      setHearts(5);
      setGold(0);
      setInventory(['Teplé oblečení', 'Mapa Silvarionu']);
      setClosedLocations([]);
      setCurrentSceneId('start');
      return;
    }

    if (choice.target === 'start_soft_reset') {
      setCurrentSceneId('start');
      return;
    }

    if (choice.cost) {
      if (gold >= choice.cost) {
        setGold(prev => prev - choice.cost);
      } else {
        return;
      }
    }

    if (choice.lootGold) {
      setGold(prev => prev + choice.lootGold);
    }

    if (choice.closeLoc) {
      setClosedLocations(prev => [...prev, choice.closeLoc]);
    }

    setCurrentSceneId(choice.target);

    if (choice.loot && !inventory.includes(choice.loot)) {
      setInventory(prev => [...prev, choice.loot]);
    }

    if (choice.damage) {
      setHearts(prev => Math.max(0, prev - choice.damage));
    }
  };

  const currentScene = storyData[currentSceneId];

  const visibleChoices = currentScene.choices.filter(choice => {
    if (choice.reqOpen && closedLocations.includes(choice.reqOpen)) return false;
    if (choice.req && !inventory.includes(choice.req)) return false;
    if (choice.reqGold && gold < choice.reqGold) return false;
    return true;
  });

  return (
    <div
      className="min-h-screen w-full flex items-center justify-center font-serif bg-[#1a1a1a] p-2 md:p-4"
      style={{
        backgroundImage: `url('https://www.transparenttextures.com/patterns/wood-pattern.png')`,
        backgroundColor: '#2a2a2a'
      }}
    >
      <div
        className="w-full max-w-7xl aspect-video bg-[#f4e4bc] shadow-[0_0_50px_rgba(0,0,0,0.6)] relative flex flex-col overflow-hidden rounded-md border-8 border-[#1a110d]"
        style={{
          backgroundImage: "url('https://www.transparenttextures.com/patterns/aged-paper.png')"
        }}
      >
        <Header gold={gold} hearts={hearts} />

        <div className="flex-1 flex overflow-hidden">
          <div className="w-5/12 border-r-4 border-double border-[#2c1810] relative shadow-[5px_0_15px_rgba(0,0,0,0.1)] z-10 hidden md:block group">
            <SceneVisual type={currentScene.imageType} />
          </div>

          <div className="w-full md:w-7/12 flex flex-col relative bg-[#f4e4bc]">
            <div className="flex-1 overflow-y-auto p-6 custom-scrollbar" ref={rightColumnRef}>
              <h2 className="text-2xl font-bold text-[#2c1810] mb-3 font-cinzel border-b border-[#2c1810]/20 pb-2">
                {currentScene.title}
              </h2>

              <p className="text-lg text-[#2c1810] leading-snug mb-4 font-crimson text-justify">
                {currentScene.text}
              </p>

              <div className="space-y-2 mt-auto">
                {visibleChoices.map((choice, index) => (
                  <ChoiceButton key={index} choice={choice} onClick={handleChoice} />
                ))}
                {visibleChoices.length === 0 && currentSceneId === 'start' && (
                  <div className="text-[#2c1810] italic text-sm p-4 text-center border border-dashed border-[#2c1810]/30 rounded">
                    Všechny lokace jsou prozkoumané (nebo uzavřené). Nezbývá nic jiného, než jít k bráně...
                    <br />
                    <button onClick={() => setCurrentSceneId('gate')} className="mt-2 font-bold underline">
                      JÍT K BRÁNĚ
                    </button>
                  </div>
                )}
              </div>
            </div>

            <Inventory
              inventory={inventory}
              hearts={hearts}
              onUsePotion={handleUsePotion}
              onOpenMap={() => setIsMapOpen(true)}
            />
          </div>
        </div>
      </div>

      <div className="fixed inset-0 pointer-events-none opacity-[0.03] mix-blend-multiply bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] z-50"></div>

      <MapModal isOpen={isMapOpen} onClose={() => setIsMapOpen(false)} />
    </div>
  );
}

