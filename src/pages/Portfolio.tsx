
import { useState } from "react";
import { Link } from "react-router-dom";
import { Star, Camera, Video } from "lucide-react";
import { Card } from "@/components/ui/card";

const portfolioItems = [
  {
    id: 1,
    title: "Sunrise Tour di Bukit Klangon",
    category: "tour",
    thumbnail: "/asset/portfolio-1.jpg",
    date: "10 Mei 2023",
    description: "Menyaksikan keindahan matahari terbit dari Bukit Klangon dengan latar belakang Gunung Merapi yang megah.",
  },
  {
    id: 2,
    title: "Eksplorasi Bunker Kaliadem",
    category: "adventure",
    thumbnail: "/asset/portfolio-2.jpg",
    date: "15 Juni 2023",
    description: "Menjelajahi bunker bersejarah yang menjadi saksi dahsyatnya letusan Gunung Merapi.",
  },
  {
    id: 3,
    title: "Wisata Batu Alien",
    category: "tour",
    thumbnail: "/asset/portfolio-3.jpg",
    date: "23 Juli 2023",
    description: "Mengunjungi formasi batu unik yang terbentuk akibat letusan Merapi yang menyerupai alien.",
  },
  {
    id: 4,
    title: "Museum Sisa Hartaku",
    category: "culture",
    thumbnail: "/asset/portfolio-4.jpg",
    date: "5 Agustus 2023",
    description: "Mengunjungi museum yang menyimpan barang-barang sisa letusan Merapi sebagai pengingat dahsyatnya bencana.",
  },
  {
    id: 5,
    title: "Sunset Tour Merapi",
    category: "tour",
    thumbnail: "/asset/portfolio-5.jpg",
    date: "12 September 2023",
    description: "Menikmati keindahan matahari terbenam dengan latar belakang siluet Gunung Merapi yang memukau.",
  },
  {
    id: 6,
    title: "Offroad Adventure di Lereng Merapi",
    category: "adventure",
    thumbnail: "/asset/portfolio-6.jpg",
    date: "20 Oktober 2023",
    description: "Petualangan seru menaklukkan medan offroad di lereng Gunung Merapi dengan jeep tangguh.",
  },
];

const testimonials = [
  {
    name: "Rudi Hartono",
    image: "/asset/testimonial-4.jpg",
    text: "Pengalaman yang sangat mengesankan bersama Jeep Wisata Merapi. Guide sangat informatif dan ramah, jeepnya juga nyaman. Highly recommended!",
    rating: 5,
    date: "15 September 2023",
  },
  {
    name: "Siti Nurhaliza",
    image: "/asset/testimonial-5.jpg",
    text: "Saya sangat menikmati tur sunrise Merapi. Pemandangannya luar biasa dan layanan yang diberikan sangat profesional. Pasti akan kembali lagi!",
    rating: 5,
    date: "28 Oktober 2023",
  },
  {
    name: "Ahmad Faisal",
    image: "/asset/testimonial-6.jpg",
    text: "Jeep Wisata Merapi memberikan pengalaman yang luar biasa. Driver sangat terampil menavigasi medan yang sulit dan menjelaskan dengan baik tentang sejarah Merapi.",
    rating: 4,
    date: "5 November 2023",
  },
];

const Portfolio = () => {
  const [filter, setFilter] = useState("all");

  const filteredItems = filter === "all" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === filter);

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-24 pb-12 md:pt-28 md:pb-16">
        <div 
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ backgroundImage: "url('/asset/portfolio-hero.jpg')" }}
        >
          <div className="absolute inset-0 hero-overlay"></div>
        </div>
        <div className="container-custom relative z-10">
          <div className="max-w-3xl text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Portfolio Kami
            </h1>
            <p className="text-xl mb-0">
              Kumpulan pengalaman dan kegiatan wisata Jeep Merapi yang telah kami lakukan.
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="heading-secondary mb-4">Galeri Kegiatan</h2>
            <p className="text-merapi-700 mb-8">
              Jelajahi berbagai pengalaman wisata Jeep Merapi melalui dokumentasi kegiatan kami.
            </p>
            
            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              <button
                onClick={() => setFilter("all")}
                className={`px-4 py-2 rounded-md transition-colors ${
                  filter === "all" 
                    ? "bg-merapi-600 text-white" 
                    : "bg-merapi-100 text-merapi-700 hover:bg-merapi-200"
                }`}
              >
                Semua
              </button>
              <button
                onClick={() => setFilter("tour")}
                className={`px-4 py-2 rounded-md transition-colors ${
                  filter === "tour" 
                    ? "bg-merapi-600 text-white" 
                    : "bg-merapi-100 text-merapi-700 hover:bg-merapi-200"
                }`}
              >
                Tour
              </button>
              <button
                onClick={() => setFilter("adventure")}
                className={`px-4 py-2 rounded-md transition-colors ${
                  filter === "adventure" 
                    ? "bg-merapi-600 text-white" 
                    : "bg-merapi-100 text-merapi-700 hover:bg-merapi-200"
                }`}
              >
                Adventure
              </button>
              <button
                onClick={() => setFilter("culture")}
                className={`px-4 py-2 rounded-md transition-colors ${
                  filter === "culture" 
                    ? "bg-merapi-600 text-white" 
                    : "bg-merapi-100 text-merapi-700 hover:bg-merapi-200"
                }`}
              >
                Culture
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <Card
                key={item.id}
                className="overflow-hidden shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
              >
                <div className="relative h-64">
                  <img 
                    src={item.thumbnail} 
                    alt={item.title} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-merapi-600 text-white px-3 py-1 rounded-full text-xs uppercase">
                    {item.category}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-sm text-merapi-500">{item.date}</span>
                    <div className="flex items-center">
                      <Camera className="h-4 w-4 text-merapi-500 mr-1" />
                      <span className="text-xs text-merapi-500">12</span>
                      <Video className="h-4 w-4 text-merapi-500 ml-2 mr-1" />
                      <span className="text-xs text-merapi-500">2</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-merapi-800 mb-3">{item.title}</h3>
                  <p className="text-merapi-600 mb-4">{item.description}</p>
                  <Link
                    to={`/portfolio/${item.id}`}
                    className="text-merapi-600 font-medium hover:text-merapi-800 transition-colors"
                  >
                    Lihat Detail
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Video Highlight */}
      <section className="section-padding bg-merapi-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="heading-secondary mb-4">Video Highlight</h2>
            <p className="text-merapi-700">
              Tonton video pengalaman seru bersama Jeep Wisata Merapi.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="aspect-video rounded-lg overflow-hidden shadow-lg">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/VIDEO_ID_1"
                title="Jeep Wisata Merapi Adventure"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="aspect-video rounded-lg overflow-hidden shadow-lg">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/VIDEO_ID_2"
                title="Sunrise Tour at Mount Merapi"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="heading-secondary mb-4">Testimoni Pelanggan</h2>
            <p className="text-merapi-700">
              Apa kata mereka yang telah menikmati petualangan bersama Jeep Wisata Merapi.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6 shadow-md">
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
                    <p className="text-xs text-merapi-500 mt-1">{testimonial.date}</p>
                  </div>
                </div>
                <p className="text-merapi-600 italic">{testimonial.text}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;
