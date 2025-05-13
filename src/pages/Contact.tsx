
import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Form tidak lengkap",
        description: "Mohon isi semua field yang diperlukan.",
        variant: "destructive",
      });
      return;
    }

    // Here you would normally send the form data to your backend
    console.log("Form submitted:", formData);
    
    // Show success message
    toast({
      title: "Pesan Terkirim!",
      description: "Terima kasih telah menghubungi kami. Kami akan segera merespon.",
    });
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-24 pb-12 md:pt-28 md:pb-16">
        <div 
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ backgroundImage: "url('/asset/contact-hero.jpg')" }}
        >
          <div className="absolute inset-0 hero-overlay"></div>
        </div>
        <div className="container-custom relative z-10">
          <div className="max-w-3xl text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Hubungi Kami
            </h1>
            <p className="text-xl mb-0">
              Hubungi kami untuk informasi lebih lanjut atau reservasi tour Jeep Wisata Merapi.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info and Form */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Sidebar with Contact Info */}
            <div className="lg:col-span-1">
              <Card className="shadow-lg p-6">
                <h2 className="text-2xl font-bold text-merapi-800 mb-6">Informasi Kontak</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-merapi-100 rounded-full p-3 mr-4">
                      <MapPin className="h-6 w-6 text-merapi-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-merapi-800">Lokasi</h3>
                      <p className="text-merapi-600">Monumen Yogya Kembali, Yogyakarta, Indonesia</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-merapi-100 rounded-full p-3 mr-4">
                      <Phone className="h-6 w-6 text-merapi-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-merapi-800">Telepon</h3>
                      <a href="tel:+6281573635143" className="text-merapi-600 hover:text-merapi-800 transition-colors">
                        +62 815-7363-5143
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-merapi-100 rounded-full p-3 mr-4">
                      <Mail className="h-6 w-6 text-merapi-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-merapi-800">Email</h3>
                      <a href="mailto:info@jeepwisatamerapi.com" className="text-merapi-600 hover:text-merapi-800 transition-colors">
                        info@jeepwisatamerapi.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-merapi-100 rounded-full p-3 mr-4">
                      <Clock className="h-6 w-6 text-merapi-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-merapi-800">Jam Operasional</h3>
                      <p className="text-merapi-600">Senin - Jumat: 8:00 - 18:00</p>
                      <p className="text-merapi-600">Sabtu - Minggu: 7:00 - 20:00</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8">
                  <h3 className="font-semibold text-merapi-800 mb-3">Social Media</h3>
                  <div className="flex space-x-3">
                    <a
                      href="https://facebook.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-merapi-100 hover:bg-merapi-200 transition-colors rounded-full p-2"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-merapi-600">
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                      </svg>
                    </a>
                    <a
                      href="https://instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-merapi-100 hover:bg-merapi-200 transition-colors rounded-full p-2"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-merapi-600">
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                      </svg>
                    </a>
                    <a
                      href="https://twitter.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-merapi-100 hover:bg-merapi-200 transition-colors rounded-full p-2"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-merapi-600">
                        <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </Card>
            </div>
            
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="shadow-lg p-6">
                <h2 className="text-2xl font-bold text-merapi-800 mb-6">Kirim Pesan</h2>
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-merapi-700 mb-1">
                        Nama Lengkap*
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-merapi-200 rounded-md focus:ring-merapi-500 focus:border-merapi-500"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-merapi-700 mb-1">
                        Email*
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-merapi-200 rounded-md focus:ring-merapi-500 focus:border-merapi-500"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-merapi-700 mb-1">
                        Nomor Telepon
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-merapi-200 rounded-md focus:ring-merapi-500 focus:border-merapi-500"
                      />
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-merapi-700 mb-1">
                        Subjek
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-merapi-200 rounded-md focus:ring-merapi-500 focus:border-merapi-500"
                      >
                        <option value="">Pilih Subjek</option>
                        <option value="booking">Reservasi Tour</option>
                        <option value="inquiry">Pertanyaan</option>
                        <option value="feedback">Feedback</option>
                        <option value="other">Lainnya</option>
                      </select>
                    </div>
                  </div>
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-sm font-medium text-merapi-700 mb-1">
                      Pesan*
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-2 border border-merapi-200 rounded-md focus:ring-merapi-500 focus:border-merapi-500"
                    ></textarea>
                  </div>
                  <div>
                    <Button 
                      type="submit" 
                      className="bg-merapi-600 hover:bg-merapi-700 text-white px-6 py-2 rounded-md inline-flex items-center"
                    >
                      <Send className="w-4 h-4 mr-2" />
                      Kirim Pesan
                    </Button>
                  </div>
                </form>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section-padding bg-merapi-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="heading-secondary mb-4">Lokasi Kami</h2>
            <p className="text-merapi-700">
              Temukan lokasi base camp Jeep Wisata Merapi di Monumen Yogya Kembali, Yogyakarta.
            </p>
          </div>
          
          <div className="rounded-lg overflow-hidden shadow-lg">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63251.74923415177!2d110.3912162!3d-7.7649566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a58f99013c989%3A0x2a96db25b8ff4333!2sMonumen%20Yogya%20Kembali!5e0!3m2!1sid!2sid!4v1747083641115!5m2!1sid!2sid" 
              width="100%" 
              height="450" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-merapi-800 text-white py-12">
        <div className="container-custom text-center">
          <h2 className="text-2xl font-bold mb-4">Siap Untuk Menjelajah Gunung Merapi?</h2>
          <p className="mb-6 max-w-2xl mx-auto">
            Hubungi kami sekarang dan buat reservasi untuk pengalaman wisata jeep terbaik di Merapi!
          </p>
          <a 
            href="https://wa.me/6281573635143" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-green-600 text-white px-8 py-3 rounded-md font-medium hover:bg-green-700 transition-colors inline-flex items-center"
          >
            <Phone className="w-5 h-5 mr-2" />
            Hubungi Kami via WhatsApp
          </a>
        </div>
      </section>
    </>
  );
};

export default Contact;
