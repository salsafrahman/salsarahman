import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router';
import { motion } from 'motion/react';
import { db } from '../data';
import { FileText, ArrowLeft, Plus, Image as ImageIcon, Archive } from 'lucide-react';

export default function CategoryList() {
  const { type } = useParams<{ type: string }>();
  const [isAdmin, setIsAdmin] = useState(() => localStorage.getItem('isAdmin') === 'true');
  
  useEffect(() => {
    setIsAdmin(localStorage.getItem('isAdmin') === 'true');
  }, []);

  const items = db.items.filter(item => item.type === type && (isAdmin || item.status !== 'archived'));

  const title = type ? type.charAt(0).toUpperCase() + type.slice(1) + 's' : 'Items';

  return (
    <div className="min-h-screen pt-32 pb-24 px-6 md:px-12 container mx-auto">
      <Link to="/" className="inline-flex items-center gap-2 text-white/60 hover:text-white mb-8 transition-colors">
        <ArrowLeft className="w-4 h-4" /> Back to Home
      </Link>
      
      <div className="flex justify-between items-end mb-12 border-b border-white/10 pb-6">
        <h1 className="text-4xl md:text-5xl font-bold text-white">{title}</h1>
        {isAdmin && (
          <Link to="/admin" className="px-6 py-3 bg-[#FF8C9D] text-[#1A2634] rounded-full font-bold hover:bg-[#FFD166] transition-colors flex items-center gap-2 shadow-lg">
            <Plus className="w-4 h-4" /> Add New
          </Link>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.length === 0 ? (
          <p className="text-white/50 col-span-3 py-12 text-center text-lg">No {type}s found yet. Be the first to add one!</p>
        ) : (
          items.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <Link to={`/item/${item.id}`} className="block overflow-hidden rounded-3xl bg-[#1D2935] border border-white/5 hover:border-[#FFD166]/50 transition-all duration-300 hover:-translate-y-2 shadow-xl hover:shadow-[#FFD166]/10 group h-full flex flex-col">
                {item.image ? (
                  <div className="w-full h-48 overflow-hidden">
                    <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                ) : (
                  <div className="w-full h-48 bg-[#1A2634] flex items-center justify-center border-b border-white/5">
                    <ImageIcon className="w-12 h-12 text-white/10 group-hover:scale-110 transition-transform duration-500" />
                  </div>
                )}
                <div className="p-8 flex-1 flex flex-col">
                  <h3 className="text-2xl font-bold text-white mb-3 flex items-center gap-2">
                    {item.title}
                    {item.status === 'archived' && (
                      <span className="bg-yellow-500/20 text-yellow-400 text-[10px] px-2 py-1 rounded-md uppercase tracking-wider font-bold flex items-center gap-1">
                        <Archive className="w-3 h-3" /> Archived
                      </span>
                    )}
                  </h3>
                  <p className="text-white/60 text-sm line-clamp-3 leading-relaxed mb-6">
                    {item.content.find(b => b.type === 'text')?.value || 'Image post'}
                  </p>
                  <p className="text-white/30 text-xs mt-auto pt-4 border-t border-white/5 flex items-center gap-2">
                    <FileText className="w-4 h-4 text-[#FFD166]" />
                    {new Date(item.date).toLocaleDateString()}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))
        )}
      </div>
    </div>
  );
}