interface Props {
  index: number;
  image: string;
  title: string;
  description: string;
  actionCall: string;
}

export default function CarrouselItem(itemInfo: Props) {
  let { actionCall, description, image, index, title } = itemInfo;
  return (
    <div className="mb-8 flex justify-center px-12 lg:px-20" key={index}>
      <div className="flex max-w-[380px] flex-col bg-white">
        <div className="flex justify-center">
          <img
            className="mx-auto flex aspect-video object-cover"
            src={`${image}`}
            alt="Card Image"
          />
        </div>
        <div className="flex h-60 flex-col gap-y-2 p-4 md:p-5">
          <div className="relative flex gap-x-6">
            <h3 className="text-lg font-bold text-gray-800 dark:text-white">
              {title}
            </h3>
          </div>
          <p className="mb-2 mt-1 flex self-end text-[#9598ab]">
            {description}
          </p>

          <div className="flex items-end justify-self-end h-full">
            <p className="flex gap-x-3 font-bold text-[#4e78f4]">
              <span className="block">{actionCall}</span>{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M16.15 13H5q-.425 0-.712-.288T4 12t.288-.712T5 11h11.15L13.3 8.15q-.3-.3-.288-.7t.288-.7q.3-.3.713-.312t.712.287L19.3 11.3q.15.15.213.325t.062.375t-.062.375t-.213.325l-4.575 4.575q-.3.3-.712.288t-.713-.313q-.275-.3-.288-.7t.288-.7z"
                />
              </svg>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
