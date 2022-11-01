import type { ReactNode } from 'react';

type INewsletterProps = {
  title: ReactNode;
  description: ReactNode;
};

const Newsletter = (props: INewsletterProps) => (
  <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
    <div className="sm:w-7/12">
      <div className="text-2xl font-bold">{props.title}</div>

      <p className="mt-3 text-gray-300">{props.description}</p>
    </div>

    <div className="w-full sm:w-5/12">
      <form className="flex rounded-full bg-zinc-800 px-4 py-2 focus-within:ring-2 focus-within:ring-amber-600 hover:ring-2 hover:ring-amber-600">
        <input className="w-full appearance-none bg-zinc-800 focus:outline-none" />

        <button
          className="ml-2 shrink-0 rounded-full bg-gradient-to-br from-orange-500 to-amber-400 px-3 py-1 text-sm font-medium hover:from-orange-700 hover:to-amber-600 focus:outline-none focus:ring-2 focus:ring-amber-600/50"
          type="submit"
        >
          Subscribe
        </button>
      </form>
    </div>
  </div>
);

export { Newsletter };
