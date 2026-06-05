import { useParams, useNavigate } from 'react-router-dom';
import servicesData from '../data/servicesData';

const SubcategoryDetail = () => {
  const { slug, subslug } = useParams();
  const navigate = useNavigate();

  const category = servicesData.find((cat) => cat.slug === slug);
  const service = category?.subcategories.find((sub) => sub.slug === subslug);

  if (!category || !service) {
    return (
      <div className="text-center py-20 text-xl text-red-600">
        ⚠️ Service not found
        <div className="mt-6">
          <button
            onClick={() => navigate(`/services/${slug}`)}
            className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition"
          >
            🔙 Back to {slug?.replace('-', ' ')}
          </button>
        </div>
      </div>
    );
  }

  return (
    <section className="px-6 py-12 max-w-4xl mx-auto">
      <h2 className="text-4xl font-bold text-gray-900 mb-6">{service.name}</h2>

      
      <img
        src={service.image}
        alt={service.name}
        className="w-full h-80 object-cover rounded-lg shadow-md mb-8"
      />

      {service.description.split('\n\n').map((para, idx) => (
  <p
    key={idx}
    className="text-lg text-gray-700 leading-relaxed mb-5"
    dangerouslySetInnerHTML={{ __html: para }}
  />
))}


    </section>
  );
};

export default SubcategoryDetail;
