
import { Link } from "react-router-dom";
import { Check, Clock, Users, Coffee, Map, Sun, Sunrise, Sunset, Star, Shield, Mountain } from "lucide-react";
import { Card } from "@/components/ui/card";

const tourPackages = [
  {
    id: 1,
    title: "EXPLORE KALIURANG",
    price: "Rp 400.000",
    duration: "1,5 Jam",
    routes: [
      "Omah Putih",
      "Nawang Jagad",
      "Lorong Oksigen",
      "Track Air"
    ],
    icon: <Mountain className="w-6 h-6 text-merapi-500" />,
  },
  {
    id: 2,
    title: "PAKET 1",
    price: "Rp 400.000",
    duration: "1,5 Jam",
    routes: [
      "Musium Mini",
      "Batu Alien",
      "TLWP / Stonehage",
      "Track Air"
    ],
    icon: <Mountain className="w-6 h-6 text-merapi-500" />,
  },
  {
    id: 3,
    title: "PAKET 2 A",
    price: "Rp 450.000",
    duration: "2 Jam",
    routes: [
      "Musium Mini",
      "Batu Alien",
      "TLWP",
      "Bunker Kaliadem",
      "Tebing Gendol",
      "Track Air"
    ],
    icon: <Mountain className="w-6 h-6 text-merapi-500" />,
  },
  {
    id: 4,
    title: "PAKET 2 B",
    price: "Rp 450.000",
    duration: "2 Jam",
    routes: [
      "Petilasan Mbah Marijan",
      "Bunker Kaliadem",
      "Musium Mini",
      "Track Air"
    ],
    icon: <Mountain className="w-6 h-6 text-merapi-500" />,
  },
  {
    id: 5,
    title: "PAKET 3",
    price: "Rp 550.000",
    duration: "2,5 - 3 Jam",
    routes: [
      "Petilasan Mbah Marijan",
      "Bunker Kaliadem",
      "Batu Alien",
      "TLWP / Tebing Gendol Merapi",
      "Musium Mini",
      "Track Air"
    ],
    icon: <Mountain className="w-6 h-6 text-merapi-500" />,
  },
  {
    id: 6,
    title: "PAKET 4",
    price: "Rp 650.000",
    duration: "4 Jam",
    routes: [
      "Petilasan Mbah Marijan",
      "Bunker Kaliadem",
      "Batu Alien",
      "The Lost World Castle",
      "Musium Mini",
      "Track Air"
    ],
    icon: <Mountain className="w-6 h-6 text-merapi-500" />,
  },
  {
    id: 7,
    title: "PAKET 5",
    price: "Rp 900.000",
    duration: "4,5 - 5 Jam",
    routes: [
      "Hutan Kinongan / Tears Merapi",
      "Musium Mini",
      "Petilasan Mbah Marijan",
      "Bunker Kaliadem",
      "Batu Alien",
      "The Lost World Park",
      "Track Air"
    ],
    icon: <Mountain className="w-6 h-6 text-merapi-500" />,
  },
  {
    id: 8,
    title: "SUNRISE",
    price: "Rp 500.000",
    duration: "2 Jam",
    routes: [
      "Petilasan Mbah Marijan",
      "Bunker Kaliadem",
      "Tebing Gendol Merapi",
      "Batu Alien / TLWP",
      "Musium Mini",
      "Track Air"
    ],
    icon: <Sunrise className="w-6 h-6 text-merapi-500" />,
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
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {tourPackages.map((tour) => (
              <Card key={tour.id} className="overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <div className="p-4">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-lg font-bold text-merapi-800">{tour.title}</h3>
                    <div>
                      {tour.icon}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between mb-3">
                    <p className="text-lg font-bold text-merapi-700">{tour.price}</p>
                    <div className="flex items-center text-sm text-merapi-600">
                      <Clock className="h-4 w-4 text-merapi-500 mr-1" />
                      <span>{tour.duration}</span>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="font-medium text-merapi-800 text-sm mb-2">Rute:</h4>
                    <ul className="space-y-1">
                      {tour.routes.map((route, idx) => (
                        <li key={idx} className="flex items-start text-sm">
                          <Check className="h-3.5 w-3.5 text-merapi-500 mr-1.5 flex-shrink-0 mt-0.5" />
                          <span className="text-merapi-700">{route}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="text-center mt-4">
                    <Link
                      to={`/portfolio/${tour.id}`}
                      className="bg-merapi-600 text-white px-4 py-1.5 text-sm rounded hover:bg-merapi-700 transition-colors w-full inline-block"
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

