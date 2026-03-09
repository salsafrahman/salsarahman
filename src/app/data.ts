export type ItemType = 'recipe' | 'formula' | 'note' | 'activity';

export type ContentBlock = {
  id: string;
  type: 'text' | 'image';
  value: string; // text content or base64 image URL
};

export interface Item {
  id: string;
  type: ItemType;
  title: string;
  content: ContentBlock[];
  image?: string;
  date: string;
  status?: 'published' | 'archived';
}

// In-memory static mock database
export const db = {
  items: [
    { 
      id: '1', 
      type: 'recipe', 
      title: 'Perfect Pour Over Coffee', 
      content: [
        { id: '1-1', type: 'text', value: 'Use 15g of freshly ground coffee to 250g of water. Bloom with 45g of water for 45 seconds, then pour the rest in slow concentric circles.' }
      ], 
      date: '2026-03-09' 
    },
    { 
      id: '2', 
      type: 'formula', 
      title: 'The Golden Ratio', 
      content: [
        { id: '2-1', type: 'text', value: 'phi = (1 + sqrt(5)) / 2' }
      ], 
      date: '2026-03-09' 
    },
    { 
      id: '3', 
      type: 'note', 
      title: 'Design Inspiration', 
      content: [
        { id: '3-1', type: 'text', value: 'Try using more glassmorphism and subtle colorful drop shadows in the next iteration of the portfolio.' }
      ], 
      date: '2026-03-08' 
    },
    { 
      id: '4', 
      type: 'activity', 
      title: 'Morning Trail Run', 
      content: [
        { id: '4-1', type: 'text', value: 'Ran 5 miles in the local state park. The weather was beautiful and the trails were empty. Felt great!' }
      ], 
      date: '2026-03-07' 
    },
  ] as Item[]
};