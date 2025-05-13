
import { CheckCircle, Users, Calendar, Car, Award } from "lucide-react";

const aboutFeatures = [
  "Pengalaman lebih dari 10 tahun dalam industry wisata Merapi",
  "Armada jeep yang terawat dan tangguh untuk medan Merapi",
  "Pemandu wisata profesional dan berpengalaman",
  "Rute perjalanan yang telah diuji keamanannya",
  "Pelayanan prima dan ramah untuk kepuasan pelanggan",
  "Kolaborasi dengan penduduk lokal untuk pengalaman asli"
];

const team = [
  {
    name: "Budi Santoso",
    role: "Founder & CEO",
    photo: "/asset/team-1.jpg",
    bio: "Budi memiliki pengalaman lebih dari 15 tahun dalam industri pariwisata dan sangat memahami seluk beluk Gunung Merapi."
  },
  {
    name: "Dewi Pratiwi",
    role: "Tour Manager",
    photo: "/asset/team-2.jpg",
    bio: "Dewi bertanggung jawab untuk memastikan setiap tur berjalan lancar dan memenuhi ekspektasi pelanggan."
  },
  {
    name: "Eko Prabowo",
    role: "Head Driver",
    photo: "/asset/team-3.jpg",
    bio: "Dengan pengalaman 12 tahun, Eko memimpin tim driver kami dan melatih mereka untuk memastikan keselamatan dan kenyamanan."
  },
  {
    name: "Rina Wijaya",
    role: "Customer Relations",
    photo: "/asset/team-4.jpg",
    bio: "Rina selalu tersedia untuk membantu Anda dengan pertanyaan dan memastikan pengalaman pelanggan yang terbaik."
  }
];

const stats = [
  {
    number: "15K+",
    label: "Pelanggan Puas",
    icon: <Users className="h-8 w-8 text-merapi-500" />
  },
  {
    number: "2K+",
    label: "Tur Setiap Tahun",
    icon: <Calendar className="h-8 w-8 text-merapi-500" />
  },
  {
    number: "25+",
    label: "Jeep Tangguh",
    icon: <Car className="h-8 w-8 text-merapi-500" />
  },
  {
    number: "10+",
    label: "Penghargaan",
    icon: <Award className="h-8 w-8 text-merapi-500" />
  }
];

const About = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-24 pb-12 md:pt-28 md:pb-16">
        <div 
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ backgroundImage: "url('/asset/about-hero.jpg')" }}
        >
          <div className="absolute inset-0 hero-overlay"></div>
        </div>
        <div className="container-custom relative z-10">
          <div className="max-w-3xl text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Tentang Kami
            </h1>
            <p className="text-xl mb-0">
              Kenali lebih dekat Jeep Wisata Merapi, mitra petualangan Anda di Gunung Merapi.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="heading-secondary mb-6">Cerita Kami</h2>
              <p className="text-merapi-700 mb-4">
                Jeep Wisata Merapi berawal dari kecintaan kami terhadap keindahan alam Gunung Merapi dan semangat untuk berbagi keindahan tersebut kepada dunia. Didirikan pada tahun 2010, kami mulai dengan hanya 3 unit jeep dan tekad kuat untuk memberikan pengalaman wisata terbaik.
              </p>
              <p className="text-merapi-700 mb-4">
                Seiring berjalannya waktu, dedikasi kami terhadap pelayanan berkualitas dan keamanan pelanggan membuahkan kepercayaan dari berbagai kalangan. Kini, kami telah memiliki lebih dari 25 unit jeep dan tim profesional yang siap memberikan pengalaman tak terlupakan menjelajahi keajaiban Gunung Merapi.
              </p>
              <p className="text-merapi-700 mb-4">
                Kami bangga telah menjadi bagian dari perkembangan wisata di kawasan Merapi dan berkontribusi pada peningkatan ekonomi masyarakat lokal melalui kolaborasi dengan penduduk sekitar dalam penyediaan layanan wisata.
              </p>
            </div>
            <div className="relative">
              <img 
                src="/asset/our-story.jpg" 
                alt="Cerita Jeep Wisata Merapi" 
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-merapi-50 py-12">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex justify-center mb-4">
                  {stat.icon}
                </div>
                <h3 className="text-3xl font-bold text-merapi-800 mb-2">{stat.number}</h3>
                <p className="text-merapi-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="heading-secondary mb-4">Mengapa Memilih Kami?</h2>
            <p className="text-merapi-700">
              Kami berkomitmen untuk memberikan pengalaman wisata terbaik dengan standar keamanan dan kenyamanan tertinggi.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
            {aboutFeatures.map((feature, index) => (
              <div key={index} className="flex items-start">
                <CheckCircle className="h-6 w-6 text-merapi-500 mr-3 flex-shrink-0" />
                <p className="text-merapi-700">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="section-padding bg-merapi-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="heading-secondary mb-4">Tim Profesional Kami</h2>
            <p className="text-merapi-700">
              Kenali orang-orang hebat di balik kesuksesan Jeep Wisata Merapi.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg">
                <div className="h-64 overflow-hidden">
                  <img 
                    src={member.photo} 
                    alt={member.name} 
                    className="w-full h-full object-cover transition-transform hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-merapi-800">{member.name}</h3>
                  <p className="text-merapi-500 mb-3">{member.role}</p>
                  <p className="text-merapi-700">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-merapi-800 text-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Misi Kami</h2>
              <p className="text-merapi-100 mb-4">
                Menyediakan layanan wisata jeep yang aman, nyaman, dan berkesan di kawasan Gunung Merapi dengan mengedepankan profesionalisme dan kepedulian terhadap alam serta masyarakat lokal.
              </p>
              <p className="text-merapi-100">
                Kami berkomitmen untuk terus meningkatkan kualitas layanan dan berkontribusi pada keberlanjutan ekosistem wisata di kawasan Merapi.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Visi Kami</h2>
              <p className="text-merapi-100 mb-4">
                Menjadi penyedia jasa wisata jeep terdepan di kawasan Gunung Merapi yang dikenal akan keunggulan layanan, inovasi, dan komitmen terhadap pariwisata berkelanjutan.
              </p>
              <p className="text-merapi-100">
                Kami bertujuan untuk memperkenalkan keindahan alam dan kekayaan budaya kawasan Merapi kepada dunia sambil menjaga kelestariannya untuk generasi mendatang.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
