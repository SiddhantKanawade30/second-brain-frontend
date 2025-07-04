import '../App.css'
import { Button } from '../components/Button'
import { Card } from '../components/Card'
import { PlusIcon } from '../icons/Plus'
import { Share } from "../icons/Share"
import { Create } from "../components/Create"
import { useEffect, useState } from 'react'
import { SideBar } from '../components/SideBar'
import { useContent } from '../hooks/useContent'
import { BACKEND_URL, FRONTEND_URL } from '../config'
import axios from 'axios'

function Dashboard() {
  const [modalOpen, setModalOpen] = useState(false);
  const [isSharing, setIsSharing] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [platform, setPlatform] = useState<"all" | "youtube" | "twitter">("all");
  const { content, refresh } = useContent();

  useEffect(() => {
    refresh()
  }, [modalOpen]);

  useEffect(() => {
    // @ts-ignore
    if (window.twttr && window.twttr.widgets) {
      // @ts-ignore
      window.twttr.widgets.load();
    }
  }, [content]);

  async function shareBrain() {
    setIsSharing(true);
    try {
      const response = await axios.post(`${BACKEND_URL}/api/v1/brain/share`, {
        share: true
      }, {
        headers: {
          "token": localStorage.getItem("token")
        }
      })
      const shareUrl = `${FRONTEND_URL}${response.data.hash}`;
      
      
      if (navigator.clipboard) {
        await navigator.clipboard.writeText(shareUrl);
        alert('Share link copied to clipboard!');
      } else {
        alert(`Share your brain: ${shareUrl}`);
      }
    } catch (error) {
      alert('Failed to generate share link');
    }
    setIsSharing(false);
  }

 
  const filteredContent = platform === "all"
    ? content.filter(item => {
      if (!item || !item.title) return false;
      return String(item.title).toLowerCase().includes(searchTerm.toLowerCase());
    })
    : content.filter(item => item.type === platform && item.title && String(item.title).toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <>
      <SideBar setPlatform={setPlatform} platform={platform} />
      <div className="ml-72 min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        
        
        <div className="max-w-6xl mx-auto pt-8 pb-6 px-6">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-blue-700 mb-2">Your Knowledge Hub</h1>
            <p className="text-gray-600">Organize and share your digital knowledge</p>
          </div>
          
          
          <div className="bg-white rounded-lg p-6 shadow-sm mb-8">
            <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
              
              
              <div className="flex-1 max-w-md">
                <input
                  type="text"
                  placeholder="Search your content..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              
             
              <div className="flex gap-3">
                <Button
                  startIcon={<PlusIcon size="md" />}
                  variant="primary"
                  size="md"
                  text="Add Content"
                  onClick={() => setModalOpen(true)}
                />
                <Button
                  startIcon={<Share size="md" />}
                  variant="secondary"
                  size="md"
                  text={isSharing ? "Sharing..." : "Share"}
                  onClick={shareBrain}
                  disabled={isSharing}
                />
              </div>
            </div>
          </div>
        </div>

       
        <div className="max-w-6xl mx-auto px-6 pb-12">
          <Create open={modalOpen} onClose={() => setModalOpen(false)} />
          
        
          <div className="mb-6">
            <p className="text-gray-600">
              {filteredContent.length} items
              {searchTerm && ` matching "${searchTerm}"`}
            </p>
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="text-blue-600 hover:underline text-sm mt-1"
              >
                Clear search
              </button>
            )}
          </div>

         
          {filteredContent.length === 0 ? (
            <div className="text-center py-20">
              {searchTerm ? (
                <div>
                  <h3 className="text-xl font-semibold text-gray-700 mb-2">No results found</h3>
                  <p className="text-gray-500 mb-4">No content matches "{searchTerm}"</p>
                  <button
                    onClick={() => setSearchTerm('')}
                    className="text-blue-600 hover:underline"
                  >
                    View all content
                  </button>
                </div>
              ) : (
                <div>
                  <h3 className="text-2xl font-bold text-gray-700 mb-4">No content yet</h3>
                  <p className="text-gray-500 mb-6">Click "Add Content" to get started!</p>
                  <Button
                    startIcon={<PlusIcon size="md" />}
                    variant="primary"
                    size="lg"
                    text="Add Your First Content"
                    onClick={() => setModalOpen(true)}
                  />
                </div>
              )}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredContent.map((item, idx) => (
                <div key={`${item.link || ''}-${item.title || ''}-${idx}`} className="hover:-translate-y-1 transition-transform">
                  <Card type={item.type} link={item.link} title={item.title} />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Dashboard;
