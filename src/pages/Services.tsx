
import { Link } from "react-router-dom";
import { Check, Clock, Users, Coffee, Map, Sun, Sunrise, Sunset, Star, Shield, Mountain } from "lucide-react";
import { Card } from "@/components/ui/card";

const tourPackages = [
  {
    id: 1,
    title: "Merapi Sunrise Tour",
    image: "/asset/tour-1.jpg",
    duration: "4 jam",
    price: "Rp 500.000",
    description: "Nikmati keindahan matahari terbit dari lereng Merapi dengan pemandangan yang spektakuler.",
    features: [
      "Penjemputan hotel di sekitar Yogyakarta",
      "Sunrise viewpoint di Bukit Klangon",
      "Kunjungan ke Museum Sisa Hartaku",
      "Kunjungan ke Bunker Kaliadem",
      "Jeep berkapasitas 4 orang",
      "Guide lokal yang berpengalaman",
      "Sarapan tradisional",
    ],
    startTime: "03:30 WIB",
    endTime: "07:30 WIB",
    icon: <Sunrise className="w-8 h-8 text-merapi-500" />,
  },
  {
    id: 2,
    title: "Merapi Lava Tour",
    image: "/asset/tour-2.jpg",
    duration: "3 jam",
    price: "Rp 400.000",
    description: "Menjelajahi jejak sisa letusan Merapi 2010 dan menyaksikan keindahan alamnya.",
    features: [
      "Penjemputan hotel di sekitar Yogyakarta",
      "Kunjungan ke Alien Stone",
      "Kunjungan ke Bunker Kaliadem",
      "Kunjungan ke desa terdampak letusan",
      "Jeep berkapasitas 4 orang",
      "Guide lokal yang berpengalaman",
      "Air mineral",
    ],
    startTime: "09:00 WIB",
    endTime: "12:00 WIB",
    icon: <Mountain className="w-8 h-8 text-merapi-500" />,
  },
  {
    id: 3,
    title: "Merapi Sunset Tour",
    image: "/asset/tour-3.jpg",
    duration: "4 jam",
    price: "Rp 550.000",
    description: "Nikmati keindahan matahari terbenam dengan latar Gunung Merapi yang megah.",
    features: [
      "Penjemputan hotel di sekitar Yogyakarta",
      "Sunset viewpoint di Bukit Klangon",
      "Kunjungan ke Museum Sisa Hartaku",
      "Kunjungan ke area pasir berbisik",
      "Jeep berkapasitas 4 orang",
      "Guide lokal yang berpengalaman",
      "Camilan tradisional",
    ],
    startTime: "15:00 WIB",
    endTime: "19:00 WIB",
    icon: <Sunset className="w-8 h-8 text-merapi-500" />,
  },
];

const features = [
  {
    icon: <Shield className="h-12 w-12 text-merapi-500" />,
    title: "Keselamatan Terjamin",
    description: "Kami mengutamakan keselamatan dengan driver profesional dan jeep terawat.",
  },
  {
    icon: <Users className="h-12 w-12 text-merapi-500" />,
    title: "Guide Berpengalaman",
    description: "Pemandu wisata lokal yang sangat memahami kondisi dan sejarah Merapi.",
  },
  {
    icon: <Map className="h-12 w-12 text-merapi-500" />,
    title: "Rute Terbaik",
    description: "Kami menawarkan rute perjalanan terbaik untuk pengalaman maksimal.",
  },
  {
    icon: <Coffee className="h-12 w-12 text-merapi-500" />,
    title: "Fasilitas Nyaman",
    description: "Nikmati fasilitas yang nyaman selama perjalanan Anda di Merapi.",
  },
];

const Services = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-24 pb-12 md:pt-28 md:pb-16">
        <div 
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ backgroundImage: "url('/asset/services-hero.jpg')" }}
        >
          <div className="absolute inset-0 hero-overlay"></div>
        </div>
        <div className="container-custom relative z-10">
          <div className="max-w-3xl text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Layanan Kami
            </h1>
            <p className="text-xl mb-0">
              Temukan berbagai paket wisata Jeep Merapi yang kami tawarkan untuk pengalaman tak terlupakan.
            </p>
          </div>
        </div>
      </section>

      {/* Tour Packages */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="heading-secondary mb-4">Paket Wisata Kami</h2>
            <p className="text-merapi-700">
              Pilihan paket wisata jeep untuk menjelajahi keindahan Gunung Merapi dengan pengalaman terbaik.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {tourPackages.map((tour) => (
              <Card key={tour.id} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <div className="relative h-48">
                  <img 
                    src={tour.image} 
                    alt={tour.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-merapi-800">{tour.title}</h3>
                      <div className="flex items-center mt-1">
                        <Clock className="h-4 w-4 text-merapi-600 mr-1" />
                        <span className="text-sm text-merapi-600">{tour.duration}</span>
                      </div>
                    </div>
                    <div>
                      {tour.icon}
                    </div>
                  </div>
                  
                  <p className="text-merapi-700 mb-4">{tour.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-medium text-merapi-800 mb-2">Jam Operasional:</h4>
                    <div className="flex items-center justify-between text-sm text-merapi-600">
                      <span>Start: {tour.startTime}</span>
                      <span>End: {tour.endTime}</span>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-medium text-merapi-800 mb-2">Fasilitas:</h4>
                    <ul className="space-y-1">
                      {tour.features.slice(0, 4).map((feature, idx) => (
                        <li key={idx} className="flex items-start text-sm">
                          <Check className="h-4 w-4 text-merapi-500 mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-merapi-700">{feature}</span>
                        </li>
                      ))}
                      {tour.features.length > 4 && (
                        <li className="text-sm text-merapi-600">+ {tour.features.length - 4} more...</li>
                      )}
                    </ul>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <p className="text-lg font-bold text-merapi-800">{tour.price}</p>
                    <Link
                      to={`/portfolio/${tour.id}`}
                      className="bg-merapi-600 text-white px-4 py-2 rounded hover:bg-merapi-700 transition-colors"
                    >
                      Lihat Detail
                    </Link>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section-padding bg-merapi-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="heading-secondary mb-4">Keunggulan Layanan Kami</h2>
            <p className="text-merapi-700">
              Kami berkomitmen untuk memberikan pengalaman terbaik dalam setiap perjalanan wisata.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow"
              >
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-merapi-800 mb-2">{feature.title}</h3>
                <p className="text-merapi-700">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Tours */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="heading-secondary mb-4">Paket Wisata Custom</h2>
              <p className="text-merapi-700 mb-6">
                Ingin pengalaman wisata yang lebih personal? Kami menawarkan paket wisata custom yang dapat disesuaikan dengan kebutuhan dan keinginan Anda.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <Star className="h-5 w-5 text-merapi-500 mr-2 flex-shrink-0" />
                  <span className="text-merapi-700">Pilih destinasi sesuai keinginan</span>
                </li>
                <li className="flex items-start">
                  <Star className="h-5 w-5 text-merapi-500 mr-2 flex-shrink-0" />
                  <span className="text-merapi-700">Atur durasi perjalanan</span>
                </li>
                <li className="flex items-start">
                  <Star className="h-5 w-5 text-merapi-500 mr-2 flex-shrink-0" />
                  <span className="text-merapi-700">Pilih waktu keberangkatan</span>
                </li>
                <li className="flex items-start">
                  <Star className="h-5 w-5 text-merapi-500 mr-2 flex-shrink-0" />
                  <span className="text-merapi-700">Tambahkan layanan khusus</span>
                </li>
              </ul>
              <Link 
                to="/contact" 
                className="btn-primary inline-block"
              >
                Hubungi Kami untuk Custom Tour
              </Link>
            </div>
            <div className="order-1 lg:order-2">
              <img 
                src="/asset/custom-tour.jpg" 
                alt="Custom Tour Jeep Merapi" 
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-merapi-800 text-white py-16">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-6">Siap Untuk Petualangan Baru?</h2>
          <p className="text-xl max-w-2xl mx-auto mb-8">
            Reservasi sekarang dan nikmati pengalaman tak terlupakan bersama Jeep Wisata Merapi!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              to="/contact" 
              className="bg-white text-merapi-800 px-8 py-3 rounded-md font-medium hover:bg-merapi-100 transition-colors"
            >
              Pesan Sekarang
            </Link>
            <a 
              href="https://wa.me/6281573635143" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-green-600 text-white px-8 py-3 rounded-md font-medium hover:bg-green-700 transition-colors"
            >
              Hubungi via WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
