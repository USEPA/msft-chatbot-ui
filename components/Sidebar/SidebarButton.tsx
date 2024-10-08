import { FC } from 'react';

interface Props {
  text: string;
  icon: JSX.Element;
  onClick: () => void;
}

export const SidebarButton: FC<Props> = ({ text, icon, onClick }) => {
  return (
    <button
      className="flex w-full cursor-pointer select-none items-center gap-3 rounded-md py-3 px-3 text-[14px] leading-3 border border-neutral-200 p-3 text-black transition-colors duration-200 hover:bg-gray-500/10"
      onClick={onClick}
      title={text}
    >
      <div>{icon}</div>
      <span>{text}</span>
    </button>
  );
};
