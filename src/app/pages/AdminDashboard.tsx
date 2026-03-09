import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router';
import { motion } from 'motion/react';
import { db } from '../data';
import { ArrowLeft, Plus, Edit3, Trash2, Archive, CheckCircle, Image as ImageIcon } from 'lucide-react';

export default function AdminDashboard() {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(() => localStorage.getItem('isAdmin') === 'true');
  const [passcode, setPasscode] = useState('');
  const [error, setError] = useState(false);
  const [items, setItems] = useState([...db.items]); // Use state to trigger re-renders

  useEffect(() => {
    if (localStorage.getItem('isAdmin') === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (passcode === 'Shabilafarah173!') {
      localStorage.setItem('isAdmin', 'true');
      setIsAuthenticated(true);
      setError(false);
    } else {
      setError(true);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('isAdmin');
    setIsAuthenticated(false);
    navigate('/');
  };

  const handleDelete = (id: string) => {
    if (window.confirm('Are you sure you want to delete this post?')) {
      const index = db.items.findIndex(i => i.id === id);
      if (index !== -1) {
        db.items.splice(index, 1);
        setItems([...db.items]); // Trigger re-render
      }
    }
  };

  const handleToggleArchive = (id: string) => {
    const item = db.items.find(i => i.id === id);
    if (item) {
      item.status = item.status === 'archived' ? 'published' : 'archived';
      setItems([...db.items]); // Trigger re-render
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen pt-32 pb-24 px-6 md:px-12 max-w-lg mx-auto flex flex-col justify-center">
        <Link to="/" className="inline-flex items-center gap-2 text-white/60 hover:text-white mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-[#1D2935] rounded-[3rem] p-8 md:p-12 border border-white/5 shadow-2xl"
        >
          <h1 className="text-3xl font-bold text-white mb-6">Admin Access</h1>
          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-white/60 text-sm font-medium mb-3 uppercase tracking-wider">Passcode</label>
              <input 
                type="password" 
                required
                value={passcode} 
                onChange={(e) => setPasscode(e.target.value)}
                className={`w-full bg-[#1A2634] border ${error ? 'border-red-500' : 'border-white/10'} rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-[#FF8C9D] transition-colors text-lg`}
                placeholder="Enter passcode..."
              />
              {error && <p className="text-red-500 text-sm mt-2">Incorrect passcode.</p>}
            </div>
            <button 
              type="submit"
              className="w-full bg-[#FF8C9D] hover:bg-[#FFD166] text-[#1A2634] font-bold py-4 rounded-2xl transition-colors text-lg shadow-lg"
            >
              Enter
            </button>
          </form>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-32 pb-24 px-6 md:px-12 max-w-6xl mx-auto">
      <div className="flex items-center justify-between mb-12">
        <Link to="/" className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>
        <button 
          onClick={handleLogout}
          className="text-white/40 hover:text-[#FF8C9D] transition-colors text-sm font-medium uppercase tracking-wider"
        >
          Sign Out
        </button>
      </div>

      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-white/10 pb-6 gap-6">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">Dashboard</h1>
          <p className="text-white/60 text-lg">Manage your content</p>
        </div>
        <Link 
          to="/admin/add" 
          className="px-6 py-4 bg-[#FF8C9D] text-[#1A2634] rounded-2xl font-bold hover:bg-[#FFD166] transition-colors flex items-center gap-3 shadow-lg self-start md:self-auto"
        >
          <Plus className="w-5 h-5" /> Add New Entry
        </Link>
      </div>

      <div className="space-y-4">
        {items.length === 0 ? (
          <p className="text-white/50 py-12 text-center text-lg bg-[#1D2935] rounded-[2rem] border border-white/5">No entries found yet.</p>
        ) : (
          items.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className={`flex flex-col md:flex-row items-center gap-6 p-6 rounded-3xl border transition-colors ${item.status === 'archived' ? 'bg-[#1A2634]/50 border-white/5 opacity-75' : 'bg-[#1D2935] border-white/10 hover:border-white/20'}`}
            >
              <Link to={`/item/${item.id}`} className="w-full md:w-32 h-24 rounded-xl overflow-hidden shrink-0 bg-[#1A2634] flex items-center justify-center border border-white/5">
                {item.image ? (
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                ) : (
                  <ImageIcon className="w-8 h-8 text-white/20" />
                )}
              </Link>
              
              <div className="flex-1 w-full min-w-0">
                <div className="flex items-center gap-3 mb-2">
                  <span className="uppercase tracking-widest text-[10px] font-bold border border-white/20 px-2 py-1 rounded-md text-white/60">
                    {item.type}
                  </span>
                  {item.status === 'archived' && (
                    <span className="bg-yellow-500/20 text-yellow-400 text-[10px] px-2 py-1 rounded-md uppercase tracking-wider font-bold flex items-center gap-1">
                      <Archive className="w-3 h-3" /> Archived
                    </span>
                  )}
                  <span className="text-white/40 text-xs ml-auto md:ml-0">
                    {new Date(item.date).toLocaleDateString()}
                  </span>
                </div>
                <Link to={`/item/${item.id}`} className="text-xl font-bold text-white hover:text-[#FF8C9D] transition-colors truncate block">
                  {item.title}
                </Link>
              </div>

              <div className="flex items-center gap-2 w-full md:w-auto mt-4 md:mt-0 pt-4 md:pt-0 border-t md:border-t-0 border-white/5 justify-between md:justify-start">
                <button 
                  onClick={() => handleToggleArchive(item.id)}
                  title={item.status === 'archived' ? "Unarchive" : "Archive"}
                  className={`p-3 rounded-xl transition-colors flex items-center gap-2 text-sm font-medium ${item.status === 'archived' ? 'bg-green-500/10 text-green-400 hover:bg-green-500/20' : 'bg-white/5 text-white/60 hover:bg-white/10 hover:text-white'}`}
                >
                  {item.status === 'archived' ? <><CheckCircle className="w-4 h-4 md:mr-0" /><span className="md:hidden">Publish</span></> : <><Archive className="w-4 h-4 md:mr-0" /><span className="md:hidden">Archive</span></>}
                </button>
                <Link 
                  to={`/admin/edit/${item.id}`}
                  title="Edit"
                  className="p-3 bg-blue-500/10 text-blue-400 hover:bg-blue-500/20 rounded-xl transition-colors flex items-center gap-2 text-sm font-medium"
                >
                  <Edit3 className="w-4 h-4" />
                  <span className="md:hidden">Edit</span>
                </Link>
                <button 
                  onClick={() => handleDelete(item.id)}
                  title="Delete"
                  className="p-3 bg-red-500/10 text-red-400 hover:bg-red-500/20 rounded-xl transition-colors flex items-center gap-2 text-sm font-medium"
                >
                  <Trash2 className="w-4 h-4" />
                  <span className="md:hidden">Delete</span>
                </button>
              </div>
            </motion.div>
          ))
        )}
      </div>
    </div>
  );
}
