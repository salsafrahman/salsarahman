import { useState, useEffect } from 'react';
import { useNavigate, Link, useParams } from 'react-router';
import { motion, AnimatePresence } from 'motion/react';
import { db, ItemType, ContentBlock } from '../data';
import { ArrowLeft, Save, Image as ImageIcon, Type, X, Plus } from 'lucide-react';

export default function AdminAdd() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const isAuthenticated = localStorage.getItem('isAdmin') === 'true';

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/admin');
    }
  }, [isAuthenticated, navigate]);

  const [type, setType] = useState<ItemType>('recipe');
  const [title, setTitle] = useState('');
  const [blocks, setBlocks] = useState<ContentBlock[]>([{ id: Math.random().toString(36).substr(2, 9), type: 'text', value: '' }]);
  const [image, setImage] = useState<string>('');

  useEffect(() => {
    if (id && isAuthenticated) {
      const existingItem = db.items.find(i => i.id === id);
      if (existingItem) {
        setType(existingItem.type);
        setTitle(existingItem.title);
        setBlocks(existingItem.content);
        setImage(existingItem.image || '');
      }
    }
  }, [id, isAuthenticated]);

  const handleCoverUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleBlockImageUpload = (blockId: string, e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setBlocks(blocks.map(b => b.id === blockId ? { ...b, value: reader.result as string } : b));
      };
      reader.readAsDataURL(file);
    }
  };

  const addBlock = (blockType: 'text' | 'image') => {
    setBlocks([...blocks, { id: Math.random().toString(36).substr(2, 9), type: blockType, value: '' }]);
  };

  const updateBlockText = (blockId: string, value: string) => {
    setBlocks(blocks.map(b => b.id === blockId ? { ...b, value } : b));
  };

  const removeBlock = (blockId: string) => {
    setBlocks(blocks.filter(b => b.id !== blockId));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (id) {
      const index = db.items.findIndex(i => i.id === id);
      if (index !== -1) {
        db.items[index] = {
          ...db.items[index],
          type,
          title,
          content: blocks.filter(b => b.value.trim() !== ''),
          image: image || undefined,
        };
      }
    } else {
      const newItem = {
        id: Math.random().toString(36).substr(2, 9),
        type,
        title,
        content: blocks.filter(b => b.value.trim() !== ''),
        image: image || undefined,
        date: new Date().toISOString()
      };
      db.items.push(newItem);
    }
    navigate('/admin');
  };

  if (!isAuthenticated) return null;

  return (
    <div className="min-h-screen pt-32 pb-24 px-6 md:px-12 max-w-3xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <Link to="/admin" className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back to Dashboard
        </Link>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-[#1D2935] rounded-[3rem] p-8 md:p-16 border border-white/5 shadow-2xl"
      >
        <h1 className="text-4xl font-bold text-white mb-10">{id ? 'Edit Entry' : 'Add New Entry'}</h1>
        
        <form onSubmit={handleSubmit} className="space-y-8">
          <div>
            <label className="block text-white/60 text-sm font-medium mb-3 uppercase tracking-wider">Category</label>
            <div className="relative">
              <select 
                value={type} 
                onChange={(e) => setType(e.target.value as ItemType)}
                className="w-full bg-[#1A2634] border border-white/10 rounded-2xl px-6 py-4 text-white appearance-none focus:outline-none focus:border-[#FF8C9D] transition-colors cursor-pointer text-lg"
              >
                <option value="recipe">Recipe</option>
                <option value="formula">Formula</option>
                <option value="note">Note</option>
                <option value="activity">Activity</option>
              </select>
              <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-white/40">
                ▼
              </div>
            </div>
          </div>

          <div>
            <label className="block text-white/60 text-sm font-medium mb-3 uppercase tracking-wider">Title</label>
            <input 
              type="text" 
              required
              value={title} 
              onChange={(e) => setTitle(e.target.value)}
              className="w-full bg-[#1A2634] border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-[#FF8C9D] transition-colors text-lg"
              placeholder="Give it a catchy title..."
            />
          </div>

          <div>
            <label className="block text-white/60 text-sm font-medium mb-3 uppercase tracking-wider">Content</label>
            <div className="space-y-4">
              <AnimatePresence>
                {blocks.map((block, index) => (
                  <motion.div 
                    key={block.id}
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="relative group bg-[#1A2634] border border-white/10 rounded-2xl p-4 overflow-hidden"
                  >
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity z-20">
                      {blocks.length > 1 && (
                        <button 
                          type="button" 
                          onClick={() => removeBlock(block.id)}
                          className="bg-black/50 hover:bg-[#FF8C9D] text-white p-2 rounded-full transition-colors"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      )}
                    </div>

                    {block.type === 'text' ? (
                      <textarea 
                        value={block.value} 
                        onChange={(e) => updateBlockText(block.id, e.target.value)}
                        className="w-full min-h-[120px] bg-transparent text-white focus:outline-none resize-y text-lg leading-relaxed placeholder-white/30"
                        placeholder="Write something..."
                      />
                    ) : (
                      <div className="relative w-full text-center border border-white/10 border-dashed rounded-xl hover:border-[#FF8C9D] transition-colors cursor-pointer group/image">
                        <input 
                          type="file" 
                          accept="image/*"
                          onChange={(e) => handleBlockImageUpload(block.id, e)}
                          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                        />
                        <div className="flex flex-col items-center justify-center gap-3 text-white/40 group-hover/image:text-white/80 transition-colors py-8">
                          {block.value ? (
                            <div className="relative w-full rounded-xl overflow-hidden">
                              <img src={block.value} alt="Preview" className="w-full h-auto object-cover" />
                              <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover/image:opacity-100 transition-opacity">
                                <span className="text-white font-medium">Click to change picture</span>
                              </div>
                            </div>
                          ) : (
                            <>
                              <ImageIcon className="w-8 h-8 mb-2" />
                              <span className="font-medium text-lg">Click to add an inline picture here</span>
                            </>
                          )}
                        </div>
                      </div>
                    )}
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            <div className="flex gap-4 mt-6">
              <button 
                type="button" 
                onClick={() => addBlock('text')}
                className="flex-1 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium py-4 rounded-xl transition-colors flex justify-center items-center gap-2"
              >
                <Type className="w-5 h-5" /> Add Text
              </button>
              <button 
                type="button" 
                onClick={() => addBlock('image')}
                className="flex-1 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium py-4 rounded-xl transition-colors flex justify-center items-center gap-2"
              >
                <ImageIcon className="w-5 h-5" /> Add Image
              </button>
            </div>
          </div>

          <div>
            <label className="block text-white/60 text-sm font-medium mb-3 uppercase tracking-wider">Cover Image (Optional)</label>
            <div className="relative w-full bg-[#1A2634] border border-white/10 border-dashed rounded-2xl p-6 text-center hover:border-[#FF8C9D] transition-colors cursor-pointer group">
              <input 
                type="file" 
                accept="image/*"
                onChange={handleCoverUpload}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
              />
              <div className="flex flex-col items-center justify-center gap-3 text-white/40 group-hover:text-white/80 transition-colors">
                {image ? (
                  <div className="relative w-full h-48 rounded-xl overflow-hidden">
                    <img src={image} alt="Preview" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="text-white font-medium">Click to change picture</span>
                    </div>
                  </div>
                ) : (
                  <>
                    <ImageIcon className="w-8 h-8 mb-2" />
                    <span className="font-medium text-lg">Click or drag a picture here</span>
                    <span className="text-sm">PNG, JPG, GIF up to 5MB</span>
                  </>
                )}
              </div>
            </div>
          </div>

          <button 
            type="submit"
            className="w-full bg-[#FF8C9D] hover:bg-[#FFD166] text-[#1A2634] font-bold py-5 rounded-2xl transition-colors flex justify-center items-center gap-3 text-lg mt-4 shadow-xl hover:shadow-[#FFD166]/20"
          >
            <Save className="w-6 h-6" /> {id ? 'Save Changes' : 'Save Entry'}
          </button>
        </form>
      </motion.div>
    </div>
  );
}