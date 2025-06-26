import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { BACKEND_URL } from "../config";
import { Card } from "../components/Card";
import { Brain } from "../icons/Brain";

export const Shared = () => {
  const { shareLink } = useParams();
  const [loading, setLoading] = useState(true);
  const [username, setUsername] = useState("");
  const [content, setContent] = useState([]);

  useEffect(() => {
    async function fetchShared() {
      try {
        const res = await axios.get(`${BACKEND_URL}/api/v1/brain/${shareLink}`);
        setUsername(res.data.username);
        setContent(res.data.content);
      } catch (e) {
        setUsername("Not found");
        setContent([]);
      }
      setLoading(false);
    }
    fetchShared();
  }, [shareLink]);

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 flex flex-col items-center py-12 px-2">
      <div className="flex flex-col items-center mb-8">
        <span className="bg-white rounded-full shadow-lg p-4 mb-3">
          <Brain size="2xl" className="text-blue-600" />
        </span>
        <h1 className="text-3xl font-bold text-blue-700 mb-1">SecondBrain</h1>
        <h2 className="text-lg text-gray-700">
          {loading
            ? "Loading shared brain..."
            : username === "Not found"
            ? "Shared brain not found."
            : `${username}'s Shared Brain`}
        </h2>
      </div>
      <div className="flex flex-wrap gap-6 justify-center w-full max-w-5xl">
        {!loading && content.length > 0 ? (
          content.map((item, idx) => (
            <Card key={idx} {...item} />
          ))
        ) : !loading && username !== "Not found" ? (
          <div className="text-gray-500 text-lg">No content shared yet.</div>
        ) : null}
      </div>
    </div>
  );
};