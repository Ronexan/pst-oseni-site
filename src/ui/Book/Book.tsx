import type { BookData } from "@/types";

type BookProps = {
  data: BookData;
  onClick?: (e?: React.MouseEvent<HTMLDivElement>) => void
};

export default function Book({ data, onClick }: BookProps) {
  return (
    <div role="menuitem" className="w-[250px] group cursor-pointer rounded-md" onClick={onClick}>
      <div className="w-full h-[200px] relative rounded-md overflow-hidden">
        <img
          src={data.image}
          className="w-full h-full object-cover transition-transform group-hover:scale-[1.15] duration-500 ease-out"
        />
      </div>
      <div className="mt-4 pl-1 pr-1 text-[1.05rem] group-hover:underline">
        <p>{data.title}</p>
      </div>
    </div>
  );
}