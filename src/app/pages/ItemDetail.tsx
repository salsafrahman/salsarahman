import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router';
import { motion } from 'motion/react';
import { db } from '../data';
import { ArrowLeft, Calendar, Edit3, Trash2, Archive, CheckCircle } from 'lucide-react';

export default function ItemDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const item = db.items.find(i => i.id === id);
  const [isAdmin, setIsAdmin] = useState(() => localStorage.getItem('isAdmin') === 'true');

  useEffect(() => {
    setIsAdmin(localStorage.getItem('isAdmin') === 'true');
  }, []);

  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this post?')) {
      const index = db.items.findIndex(i => i.id === id);
      if (index !== -1) {
        db.items.splice(index, 1);
        navigate(`/category/${item?.type}`);
      }
    }
  };

  const handleToggleArchive = () => {
    if (item) {
      item.status = item.status === 'archived' ? 'published' : 'archived';
      // Force a re-render by navigating to the same page or updating state
      // A simple way is to re-assign item and trigger a re-render, 
      // but since db is just a plain object, let's just navigate to the same page
      navigate(`/item/${item.id}`, { replace: true });
    }
  };

  if (!item) return <div className="pt-32 text-center text-white">Item not found.</div>;

  return (
    <div className="min-h-screen pt-32 pb-24 px-6 md:px-12 max-w-4xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <Link to={`/category/${item.type}`} className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back to {item.type}s
        </Link>
        
        {isAdmin && (
          <div className="flex items-center gap-3">
            <button 
              onClick={handleToggleArchive}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-colors ${item.status === 'archived' ? 'bg-green-500/20 text-green-400 hover:bg-green-500/30' : 'bg-white/10 text-white/80 hover:bg-white/20'}`}
            >
              {item.status === 'archived' ? <><CheckCircle className="w-4 h-4" /> Unarchive</> : <><Archive className="w-4 h-4" /> Archive</>}
            </button>
            <Link 
              to={`/admin/edit/${item.id}`}
              className="flex items-center gap-2 px-4 py-2 bg-blue-500/20 text-blue-400 hover:bg-blue-500/30 rounded-full text-sm font-medium transition-colors"
            >
              <Edit3 className="w-4 h-4" /> Edit
            </Link>
            <button 
              onClick={handleDelete}
              className="flex items-center gap-2 px-4 py-2 bg-red-500/20 text-red-400 hover:bg-red-500/30 rounded-full text-sm font-medium transition-colors"
            >
              <Trash2 className="w-4 h-4" /> Delete
            </button>
          </div>
        )}
      </div>

      {item.status === 'archived' && isAdmin && (
        <div className="mb-6 p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-2xl text-yellow-400 flex items-center justify-center gap-2 font-medium">
          <Archive className="w-5 h-5" /> This post is archived and hidden from regular visitors.
        </div>
      )}

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-[#1D2935] rounded-[3rem] overflow-hidden border border-white/5 shadow-2xl"
      >
        {item.image && (
          <div className="w-full h-64 md:h-96 relative border-b border-white/5">
            <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1D2935] to-transparent"></div>
          </div>
        )}
        
        <div className={`p-8 md:p-16 ${item.image ? 'pt-8' : ''}`}>
          <div className="flex flex-wrap items-center gap-4 text-[#FFD166] mb-8">
            <span className="uppercase tracking-widest text-xs font-bold border border-[#FFD166]/30 px-4 py-2 rounded-full">{item.type}</span>
            <span className="flex items-center gap-2 text-white/40 text-sm font-medium"><Calendar className="w-4 h-4"/> {new Date(item.date).toLocaleDateString()}</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-10 leading-tight">{item.title}</h1>
          
          <div className="prose prose-invert max-w-none prose-lg flex flex-col gap-6">
            {item.content.map((block) => (
              block.type === 'text' ? (
                <p key={block.id} className="text-white/80 leading-relaxed whitespace-pre-wrap text-lg md:text-xl font-light m-0">{block.value}</p>
              ) : (
                <div key={block.id} className="w-full rounded-2xl overflow-hidden m-0 bg-[#1A2634] border border-white/5">
                  <img src={block.value} alt="Content" className="w-full h-auto object-cover" />
                </div>
              )
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}