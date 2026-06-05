import { useParams, useNavigate, Link } from 'react-router-dom';
import servicesData from '../data/servicesData';

const CategoryDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const category = servicesData.find((cat) => cat.slug === slug);

  if (!category) {
    return (
      <div className="text-center py-20 text-xl text-red-600">
        😓 Category not found
        <div className="mt-6">
          <button
            onClick={() => navigate('/services')}
            className="px-4 py-2 bg-orange-600 text-white rounded hover:bg-orange-700 transition"
          >
            🔙 Back to Services
          </button>
        </div>
      </div>
    );
  }

  return (
    <section className="px-6 py-10 max-w-7xl mx-auto">
      <div className="flex items-center justify-between mb-10">
        <h2 className="text-4xl font-bold text-gray-900">{category.title}</h2>
        <button
          onClick={() => navigate('/services')}
          className="text-orange-600 hover:text-orange-700 text-sm underline"
        >
          ← Back to All Services
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {category.subcategories.map((sub) => (
          <Link
            key={sub.slug}
            to={`/services/${category.slug}/${sub.slug}`}
            className="bg-white rounded-xl shadow-md hover:shadow-lg transform hover:-translate-y-1 hover:scale-[1.02] transition-all duration-300 group border border-orange-500"
          >
            <div className="overflow-hidden">
              <img
                src={sub.image}
                alt={sub.name}
                className="h-56 w-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-4">
              <h4 className="text-xl font-semibold text-gray-900 mb-1">{sub.name}</h4>
              <p className="text-sm text-orange-500">Explore Service →</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default CategoryDetail;
