import { ArrowRight } from 'lucide-react';

export default function ChoiceButton({ choice, onClick }) {
  return (
    <button
      onClick={() => onClick(choice)}
      className="w-full text-left p-0.5 group relative transition-transform active:scale-[0.99] hover:translate-x-1 duration-200"
    >
      <div className="absolute inset-0 border border-[#2c1810] rounded bg-[#fff9e6] shadow-sm group-hover:shadow-md transition-all"></div>
      <div className="relative p-3 pl-4 pr-8 flex items-center justify-between font-cinzel font-bold text-[#2c1810] z-10 text-sm">
        <span>
          {choice.text}
          {choice.cost && <span className="text-red-800 ml-2">(-{choice.cost} zl)</span>}
        </span>
        <ArrowRight
          className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-[#8b0000]"
          size={16}
          strokeWidth={2.5}
        />
      </div>
    </button>
  );
}

