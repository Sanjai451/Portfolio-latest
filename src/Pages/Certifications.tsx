import CertificationCard from '../Components/Certifications/CertificateCards'
import Footer from '../Components/Footer';
import Badges, { certificationsData } from '../Details/Certifications';


const Certifications = () => {
  return (
    <div className="bg-gray-100 py-12">
      <h2 className="text-3xl font-bold text-center m-8">Certifications</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 sm:px-8 lg:px-16">
      {(certificationsData || []).map((cert, index) => (
        <CertificationCard 
          key={index} 
          title={cert?.title || "No Title"} 
          date={cert?.date || "No Date"} 
          description={cert?.description || "No Description Available"} 
          imageUrl={cert?.imageURL || 'https://images.surferseo.art/f47313e1-87ab-4b8d-ac89-16a5ad41db3c.png'}
        />
      ))}

      </div>
      <h2 className="text-3xl font-bold text-center m-8">Badges</h2>
      <div className="badges">
        {
          Badges.map((item)=>(
            <img className='badgeImage' src={item.badgeurl}/>
          ))
        }
      </div>
      <Footer/>
    </div>

  );
};

export default Certifications;