import { Share } from "../icons/Share";
import { Delete } from "../icons/delete";
import { Twitter } from "../icons/Twitter";
// import { Doc } from "../icons/Doc";
import { Youtube } from "../icons/Youtube";



interface CardProps {
  title: String;
  link: any;
  type: "youtube" | "twitter";
}

export function Card({ title, link, type }: CardProps) {
  return (
    <div className="w-[320px] border p-4 bg-white rounded flex flex-col gap-2">
      <div className="flex items-center justify-between mb-2">
        <div className="flex gap-2 items-center">
          <span className="text-black w-8 h-8 flex items-center">
            {type === "twitter"? <Twitter size="md" /> : <Youtube size="lg" />}
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
      <div>
        {type === "youtube" && (
          <iframe
            className="w-full rounded h-40" // You can use h-32, h-40, h-56, etc. for different video heights
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
