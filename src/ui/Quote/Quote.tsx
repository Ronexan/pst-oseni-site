export default function Quote() {
  return (
    <div className="w-full flex justify-center mt-50 p-2">
      <div className="flex w-full max-w-[1200px] flex-col md:flex-row gap-1">
        <div
          className="flex-1 h-[300px] md:h-[500px] overflow-hidden rounded-lg"
        >
          <img className="object-cover object-top grayscale-100" src="/gallery/portrait2.jpg" />
        </div>
        <div className="flex-1 flex flex-col md:justify-center mt-4 md:mt-0 items-center text-center">
          <p className="text-4xl font-normal">
            "Everything about me is <b className="italic font-bold">VALUE</b>."
          </p>
          <p className="text-sm">- Pastor Olatunji Oseni</p>
        </div>
      </div>
    </div>
  );
}
