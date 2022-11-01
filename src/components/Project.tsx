import type { ReactNode } from 'react';

type IProjectProps = {
  img: {
    src: string;
    alt: string;
  };
  name: string;
  description: string;
  link: string;
  category: ReactNode;
};

const Project = (props: IProjectProps) => (
  <div className="flex flex-col items-center gap-8 rounded-md bg-zinc-800 p-3 md:flex-row">
    <div className="shrink-0">
      <a href={props.link}>
        <img
          className="md:h-36 hover:tranzinc-y-1 rounded"
          src={props.img.src}
          alt={props.img.alt}
          loading="lazy"
        />
      </a>
    </div>

    <div>
      <div className="flex flex-col items-center gap-y-2 md:flex-row">
        <a className="hover:text-amber-400" href={props.link}>
          <div className="text-xl font-semibold">{props.name}</div>
        </a>

        <div className="ml-3 flex flex-wrap gap-2">{props.category}</div>
      </div>

      <p className="mt-3 text-gray-400">{props.description}</p>
    </div>
  </div>
);

export { Project };
