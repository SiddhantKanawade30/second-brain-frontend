import { Share } from "../icons/Share";
import { Delete } from "../icons/delete";
import { Twitter } from "../icons/Twitter";
import { Youtube } from "../icons/Youtube";

interface CardProps {
  title: String;
  link: any;
  type: "youtube" | "twitter";
}

export function Card({ title, link, type }: CardProps) {


async function deleteItem(id: string) {
  
 }



  return (
    <div className="w-[340px] border border-gray-200 p-5 bg-white rounded-xl shadow-lg flex flex-col gap-4 transition-transform hover:scale-[1.025] hover:shadow-2xl duration-200">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex gap-3 items-center">
          <span className="text-blue-500 w-9 h-9 flex items-center justify-center bg-blue-50 rounded-full shadow-sm">
            {type === "twitter" ? <Twitter size="md" /> : <Youtube size="lg" />}
          </span>
          <span className="text-gray-800 font-semibold text-lg truncate max-w-[180px]">
            {title}
          </span>
        </div>
        <div className="flex gap-2">
          <span className="text-gray-500 w-8 h-8 flex items-center justify-center rounded hover:bg-gray-100 transition">
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer"
            >
              <Share size="lg" />
            </a>
          </span>
          <span className="text-gray-500 w-8 h-8 flex items-center justify-center rounded hover:bg-red-50 hover:text-red-500 transition cursor-pointer">
            <Delete size="lg" onClick={() => {}} />
          </span>
        </div>
      </div>
      {/* Embedded Content */}
      <div>
        {type === "youtube" && (
          <iframe
            className="w-full rounded-lg border border-gray-100"
            style={{ minHeight: 160, maxHeight: 240 }}
            src={link.replace("watch?v=", "embed/")}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        )}
        {type === "twitter" && (
          <blockquote className="twitter-tweet w-full">
            <a href={link.replace("x.com", "twitter.com")}></a>
          </blockquote>
        )}
      </div>
    </div>
  );
}
