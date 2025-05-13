
import { Link } from "react-router-dom";
import { ChevronRight, MapPin, Star, Calendar, Users, Shield } from "lucide-react";
import { Card } from "@/components/ui/card";

const testimonials = [
  {
    name: "Bambang Sutrisno",
    image: "/asset/testimonial-1.jpg",
    text: "Pengalaman yang luar biasa menggunakan layanan Jeep Wisata Merapi. Pemandunya ramah dan sangat mengerti medan. Sangat direkomendasikan!",
    rating: 5,
  },
  {
    name: "Diana Putri",
    image: "/asset/testimonial-2.jpg",
    text: "Tour terbaik yang pernah saya ikuti. Merapi begitu indah dan penjelasan guide tentang sejarah erupsi sangat informatif.",
    rating: 5,
  },
  {
    name: "Rendi Pratama",
    image: "/asset/testimonial-3.jpg",
    text: "Pelayanannya sangat profesional dari awal pemesanan hingga akhir tur. Jeepnya juga terawat dengan baik.",
    rating: 4,
  },
];

const destinations = [
  {
    name: "Bunker Kaliadem",
    image: "/asset/destination-1.jpg",
    description: "Melihat sisa bunker yang tertimbun lahar dingin dari letusan Gunung Merapi.",
  },
  {
    name: "Alien Stone",
    image: "/asset/destination-2.jpg",
    description: "Batu unik berbentuk menyerupai alien akibat letusan gunung Merapi.",
  },
  {
    name: "Sisa Lava 2010",
    image: "/asset/destination-3.jpg",
    description: "Saksi bisu dahsyatnya letusan Merapi yang masih terawat.",
  },
];

const services = [
  {
    title: "Sunrise Tour",
    icon: <Calendar className="h-10 w-10 text-merapi-500" />,
    description: "Nikmati keindahan matahari terbit dari lereng Merapi dengan jeep tangguh kami.",
  },
  {
    title: "Village Tour",
    icon: <MapPin className="h-10 w-10 text-merapi-500" />,
    description: "Jelajahi desa-desa sekitar Merapi dan temui penduduk lokal beserta budayanya.",
  },
  {
    title: "Private Tours",
    icon: <Users className="h-10 w-10 text-merapi-500" />,
    description: "Tur eksklusif dengan rute yang dapat disesuaikan dengan keinginan Anda.",
  },
  {
    title: "Safety Guaranteed",
    icon: <Shield className="h-10 w-10 text-merapi-500" />,
    description: "Kami mengutamakan keselamatan dengan driver profesional dan jeep berstandar.",
  },
];

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/asset/hero-bg.jpg')" }}
        >
          <div className="absolute inset-0 hero-overlay"></div>
        </div>
        <div className="container-custom relative h-full flex items-center">
          <div className="max-w-2xl text-white animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Petualangan Seru di Lereng Gunung Merapi
            </h1>
            <p className="text-lg md:text-xl mb-8">
              Jelajahi keindahan dan keunikan Gunung Merapi dengan armada Jeep kami yang tangguh dan nyaman.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/services" className="btn-primary">
                Lihat Paket Tour
              </Link>
              <Link to="/contact" className="btn-secondary">
                Hubungi Kami
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="heading-secondary mb-4">Layanan Kami</h2>
            <p className="text-merapi-700">
              Nikmati berbagai pilihan tur jeep seru yang kami tawarkan untuk menjelajahi keajaiban Gunung Merapi.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow border border-merapi-100"
              >
                <div className="mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-merapi-800">{service.title}</h3>
                <p className="text-merapi-600">{service.description}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-10">
            <Link to="/services" className="btn-primary inline-flex items-center">
              Semua Layanan <ChevronRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Destinations */}
      <section className="section-padding bg-merapi-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="heading-secondary mb-4">Destinasi Populer</h2>
            <p className="text-merapi-700">
              Jelajahi tempat-tempat menarik di sekitar Gunung Merapi yang wajib dikunjungi.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {destinations.map((destination, index) => (
              <Card key={index} className="overflow-hidden transition-transform hover:scale-105">
                <div className="relative h-64">
                  <img 
                    src={destination.image} 
                    alt={destination.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-semibold mb-2 text-merapi-800">{destination.name}</h3>
                  <p className="text-merapi-600 mb-3">{destination.description}</p>
                  <Link to="/portfolio" className="text-merapi-600 font-medium inline-flex items-center hover:text-merapi-800">
                    Lihat Detail <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="heading-secondary mb-4">Tentang Jeep Wisata Merapi</h2>
              <p className="text-merapi-700 mb-6">
                Jeep Wisata Merapi adalah penyedia layanan wisata jeep terbaik di kawasan Gunung Merapi. Dengan pengalaman bertahun-tahun, kami siap memberikan pengalaman tak terlupakan menjelajahi keindahan alam dan situs bersejarah di sekitar Gunung Merapi.
              </p>
              <p className="text-merapi-700 mb-6">
                Didukung oleh tim profesional dan armada jeep yang tangguh, kami mengutamakan keselamatan, kenyamanan, dan kepuasan pelanggan dalam setiap perjalanan.
              </p>
              <Link to="/about" className="btn-primary inline-flex items-center">
                Pelajari Lebih Lanjut <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
            <div className="relative">
              <img 
                src="/asset/about-preview.jpg" 
                alt="Tentang Jeep Wisata Merapi" 
                className="rounded-lg shadow-xl"
              />
              <div className="absolute bottom-0 right-0 transform translate-x-1/4 translate-y-1/4">
                <div className="bg-merapi-600 text-white p-6 rounded-lg shadow-lg">
                  <p className="text-3xl font-bold">10+</p>
                  <p className="text-sm">Tahun Pengalaman</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-merapi-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="heading-secondary mb-4">Apa Kata Mereka?</h2>
            <p className="text-merapi-700">
              Pengalaman pelanggan kami yang telah menggunakan layanan Jeep Wisata Merapi.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6 shadow-lg">
                <div className="flex items-center mb-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h3 className="font-semibold text-merapi-800">{testimonial.name}</h3>
                    <div className="flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                      ))}
                      {[...Array(5 - testimonial.rating)].map((_, i) => (
                        <Star key={i + testimonial.rating} className="h-4 w-4 text-gray-300" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-merapi-600 italic">{testimonial.text}</p>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-10">
            <Link to="/portfolio" className="btn-secondary inline-flex items-center">
              Lihat Semua Testimoni <ChevronRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-merapi-800 text-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Siap Untuk Berpetualang?
            </h2>
            <p className="text-lg md:text-xl mb-8">
              Reservasi sekarang dan nikmati pengalaman menjelajahi Gunung Merapi yang tak terlupakan!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="bg-white text-merapi-800 px-8 py-3 rounded-md font-medium hover:bg-merapi-100 transition-colors">
                Pesan Sekarang
              </Link>
              <a 
                href="https://wa.me/6281573635143" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-green-600 text-white px-8 py-3 rounded-md font-medium hover:bg-green-700 transition-colors inline-flex items-center"
              >
                <Phone className="mr-2 h-4 w-4" />
                Hubungi via WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
