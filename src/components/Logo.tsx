import type { ReactNode } from 'react';

type ILogoProps = {
  icon: ReactNode;
  name: string;
};

const Logo = (props: ILogoProps) => (
  <div className="flex items-center bg-gradient-to-br from-orange-500 to-amber-400 bg-clip-text text-xl font-bold text-transparent">
    {props.icon}

    {props.name}
  </div>
);

export { Logo };
