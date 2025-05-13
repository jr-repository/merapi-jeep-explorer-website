
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Calendar, User, Clock, MapPin, Star, Video, Camera } from "lucide-react";
import { Card } from "@/components/ui/card";

// Sample data for portfolio detail
const portfolioData = [
  {
    id: "1",
    title: "Sunrise Tour di Bukit Klangon",
    category: "tour",
    date: "10 Mei 2023",
    duration: "4 jam",
    location: "Bukit Klangon, Lereng Merapi",
    guide: "Pak Budi",
    description: "Menyaksikan keindahan matahari terbit dari Bukit Klangon dengan latar belakang Gunung Merapi yang megah. Tur ini dimulai sangat pagi untuk memastikan pengunjung bisa menikmati pemandangan matahari terbit yang spektakuler.",
    longDescription: `
      <p>Sunrise Tour di Bukit Klangon merupakan salah satu paket wisata unggulan dari Jeep Wisata Merapi. Perjalanan dimulai dari penjemputan di hotel sekitar pukul 03.30 WIB untuk memastikan tiba di lokasi sebelum matahari terbit.</p>
      
      <p>Setibanya di Bukit Klangon, pengunjung akan disambut dengan pemandangan langit fajar yang perlahan berubah warna, menciptakan latar belakang spektakuler untuk siluet Gunung Merapi yang megah.</p>
      
      <p>Selain menyaksikan sunrise, pengunjung juga akan diajak mengunjungi beberapa spot menarik di sekitar lokasi seperti Museum Sisa Hartaku yang menyimpan barang-barang yang tersisa pasca letusan Merapi, dan Bunker Kaliadem yang menjadi saksi dahsyatnya letusan gunung berapi tersebut.</p>
      
      <p>Perjalanan ini tidak hanya menawarkan keindahan alam, tetapi juga pembelajaran tentang kehidupan masyarakat sekitar Merapi dan bagaimana mereka beradaptasi dengan kehidupan di sekitar gunung berapi aktif.</p>
    `,
    mainImage: "/asset/portfolio-detail-1.jpg",
    gallery: [
      { type: "image", url: "/asset/gallery-1.jpg", caption: "Matahari terbit di Bukit Klangon" },
      { type: "image", url: "/asset/gallery-2.jpg", caption: "Perjalanan offroad menuju bukit" },
      { type: "image", url: "/asset/gallery-3.jpg", caption: "Jeep siap mengantarkan wisatawan" },
      { type: "image", url: "/asset/gallery-4.jpg", caption: "Pemandangan Gunung Merapi dari kejauhan" },
      { type: "video", url: "https://www.youtube.com/embed/VIDEO_ID_1", caption: "Video sunrise tour" },
      { type: "image", url: "/asset/gallery-5.jpg", caption: "Sarapan pagi di lereng Merapi" },
    ],
    featuredTestimonial: {
      name: "Ahmad Reza",
      image: "/asset/testimonial-7.jpg",
      text: "Pengalaman yang luar biasa! Melihat matahari terbit dengan latar Gunung Merapi sangat memukau. Driver dan guide sangat ramah dan informatif. Sangat direkomendasikan!",
      rating: 5,
    },
    relatedTours: [
      { id: 2, title: "Eksplorasi Bunker Kaliadem", image: "/asset/portfolio-2.jpg" },
      { id: 5, title: "Sunset Tour Merapi", image: "/asset/portfolio-5.jpg" },
    ]
  },
  // Add more detailed portfolio items here
];

const PortfolioDetail = () => {
  const { id } = useParams();
  
  // Find the portfolio item with the matching ID
  const portfolio = portfolioData.find(item => item.id === id);
  
  if (!portfolio) {
    return (
      <div className="container-custom pt-32 pb-16 text-center">
        <h2 className="text-2xl font-bold text-merapi-800 mb-4">Portfolio tidak ditemukan</h2>
        <p className="text-merapi-600 mb-6">Maaf, portfolio yang Anda cari tidak tersedia.</p>
        <Link 
          to="/portfolio" 
          className="inline-flex items-center text-merapi-600 hover:text-merapi-800 font-medium"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Kembali ke halaman portfolio
        </Link>
      </div>
    );
  }
  
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-24 pb-12 md:pt-28 md:pb-16">
        <div 
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ backgroundImage: `url('${portfolio.mainImage}')` }}
        >
          <div className="absolute inset-0 hero-overlay"></div>
        </div>
        <div className="container-custom relative z-10">
          <div className="max-w-3xl text-white">
            <Link 
              to="/portfolio" 
              className="inline-flex items-center text-merapi-100 hover:text-white mb-4"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Kembali ke Portfolio
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {portfolio.title}
            </h1>
            <div className="flex flex-wrap items-center text-merapi-100 gap-x-6 gap-y-2">
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-1" />
                <span>{portfolio.date}</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-1" />
                <span>{portfolio.duration}</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-1" />
                <span>{portfolio.location}</span>
              </div>
              <div className="flex items-center">
                <User className="h-4 w-4 mr-1" />
                <span>Tour Guide: {portfolio.guide}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="prose max-w-none mb-12">
                <h2 className="text-2xl font-bold text-merapi-800 mb-4">Deskripsi Tour</h2>
                <div dangerouslySetInnerHTML={{ __html: portfolio.longDescription }} />
              </div>
              
              {/* Gallery */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-merapi-800 mb-6">Galeri</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {portfolio.gallery.map((item, index) => (
                    <div key={index} className="rounded-lg overflow-hidden shadow-md">
                      {item.type === "image" ? (
                        <div className="relative h-48">
                          <img 
                            src={item.url} 
                            alt={item.caption} 
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute top-2 right-2">
                            <Camera className="h-5 w-5 text-white" />
                          </div>
                        </div>
                      ) : (
                        <div className="relative h-48">
                          <iframe
                            src={item.url}
                            className="w-full h-full"
                            title={item.caption}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                          ></iframe>
                          <div className="absolute top-2 right-2">
                            <Video className="h-5 w-5 text-white" />
                          </div>
                        </div>
                      )}
                      <div className="p-3">
                        <p className="text-sm text-merapi-600">{item.caption}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Featured Testimonial */}
              <Card className="p-6 shadow-md mb-8">
                <h3 className="font-bold text-merapi-800 mb-4">Testimoni</h3>
                <div className="flex items-start mb-3">
                  <img 
                    src={portfolio.featuredTestimonial.image} 
                    alt={portfolio.featuredTestimonial.name} 
                    className="w-10 h-10 rounded-full object-cover mr-3"
                  />
                  <div>
                    <p className="font-semibold text-merapi-800">{portfolio.featuredTestimonial.name}</p>
                    <div className="flex">
                      {[...Array(portfolio.featuredTestimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-merapi-600 italic text-sm">{portfolio.featuredTestimonial.text}</p>
              </Card>
              
              {/* Related Tours */}
              <Card className="p-6 shadow-md">
                <h3 className="font-bold text-merapi-800 mb-4">Tour Terkait</h3>
                <div className="space-y-4">
                  {portfolio.relatedTours.map((tour) => (
                    <Link
                      key={tour.id}
                      to={`/portfolio/${tour.id}`}
                      className="flex items-center hover:bg-merapi-50 p-2 rounded-md transition-colors"
                    >
                      <img 
                        src={tour.image} 
                        alt={tour.title} 
                        className="w-16 h-16 object-cover rounded mr-3"
                      />
                      <p className="text-merapi-700 font-medium">{tour.title}</p>
                    </Link>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-merapi-800 text-white py-12">
        <div className="container-custom text-center">
          <h2 className="text-2xl font-bold mb-4">Tertarik dengan Tour Ini?</h2>
          <p className="mb-6 max-w-2xl mx-auto">
            Hubungi kami sekarang untuk reservasi atau informasi lebih lanjut tentang {portfolio.title}.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              to="/contact" 
              className="bg-white text-merapi-800 px-6 py-2 rounded-md font-medium hover:bg-merapi-100 transition-colors"
            >
              Hubungi Kami
            </Link>
            <a 
              href="https://wa.me/6281573635143" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-green-600 text-white px-6 py-2 rounded-md font-medium hover:bg-green-700 transition-colors"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default PortfolioDetail;
