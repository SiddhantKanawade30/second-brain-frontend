import { Share } from "../icons/Share";
import { Delete } from "../icons/delete";
import { Doc } from "../icons/Doc";

interface CardProps {
  title: String;
  link: any;
  type: "youtube" | "twitter";
}

export function Card({ title, link, type }: CardProps) {
  return (
    <div className="w-[300px] h-[350px] border p-4 bg-gray-200 rounded flex flex-col justify-between">
      {/* Header */}
      <div className="flex items-center justify-between mb-2">
        <div className="flex gap-2 items-center">
          <span className="text-black w-8 h-8 inline-block">
            <Doc size="lg" />
          </span>
          <span className="text-black font-semibold">{title}</span>
        </div>
        <div className="flex gap-2">
          <span className="text-black w-8 h-8 inline-block">
            <a href={link} target="_blank" className="cursor-pointer">
              <Share size="lg" />
            </a>
          </span>
          <span className="text-black w-8 h-8 inline-block">
            <Delete size="lg" />
          </span>
        </div>
      </div>
      {/* Embedded Content */}
      <div className="flex-1 flex items-center justify-center">
        {type === "youtube" && (
          <iframe
            className="w-full h-40 rounded"
            src={link.replace("watch","embed")}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        )}
        {type === "twitter" && (
          <blockquote className="twitter-tweet ">
            <a href={link.replace("x.com","twitter.com")}></a>
          </blockquote>
        )}
      </div>
    </div>
  );
}
