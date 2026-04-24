import { Category } from '@/lib/questions';
import { ArrowRight } from 'lucide-react';

interface CategorySelectorProps {
  categories: Category[];
  onSelectCategory: (categoryId: string) => void;
}

export function CategorySelector({ categories, onSelectCategory }: CategorySelectorProps) {
  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Quiz Quest</h1>
        <p className="text-xl text-slate-600">Choose a category and test your knowledge</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => onSelectCategory(category.id)}
            className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 text-left p-6 group cursor-pointer"
          >
            <div className="flex items-start justify-between mb-4">
              <span className="text-4xl">{category.icon}</span>
              <ArrowRight className="w-5 h-5 text-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">{category.name}</h3>
            <p className="text-slate-600">{category.description}</p>
          </button>
        ))}
      </div>
    </div>
  );
}
