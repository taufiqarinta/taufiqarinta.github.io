import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import HeroImage from "../assets/images/pp-new.png";
import AboutImage from "../assets/images/about.svg";

import Proyek1 from "../assets/images/proyek-hervitama.png";
import Proyek2 from "../assets/images/proyek-akomodasi.png";
import Proyek3 from "../assets/images/proyek-portalptpn.png";
import Proyek4 from "../assets/images/proyek-pks.png";
import Proyek5 from "../assets/images/proyek-bpd.png";
import Proyek6 from "../assets/images/proyek-oss.png";

import Sertif1 from "../assets/images/sertif-ptpn.png";
import Sertif2 from "../assets/images/sertif-bnsp.png";
import Sertif3 from "../assets/images/sertif-pertamuda.png";


import CV from "../assets/pdf/CV.pdf";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";



const tools = [
  { name: "GitHub", icon: "https://cdn.simpleicons.org/github" },
  { name: "Laravel", icon: "https://cdn.simpleicons.org/laravel" },
  { name: "CodeIgniter", icon: "https://cdn.simpleicons.org/codeigniter" },
  { name: "Postman", icon: "https://cdn.simpleicons.org/postman" },
  { name: "Pusher", icon: "https://cdn.simpleicons.org/pusher" },
  { name: "Xampp", icon: "https://cdn.simpleicons.org/xampp" },
  { name: "PHP", icon: "https://cdn.simpleicons.org/php" },
  { name: "Boot Strap", icon: "https://cdn.simpleicons.org/bootstrap" },
  { name: "Tailwind CSS", icon: "https://cdn.simpleicons.org/tailwindcss" },
  { name: "MySQL", icon: "https://cdn.simpleicons.org/mysql" },
  { name: "Figma", icon: "https://cdn.simpleicons.org/figma" },
  { name: "Kotlin", icon: "https://cdn.simpleicons.org/kotlin" },
  { name: "Notion", icon: "https://cdn.simpleicons.org/notion" },
  { name: "Trello", icon: "https://cdn.simpleicons.org/trello" },
  { name: "Diagrams.Net", icon: "https://cdn.simpleicons.org/diagramsdotnet" },
  { name: "HTML5", icon: "https://cdn.simpleicons.org/html5" },
  { name: "CSS", icon: "https://cdn.simpleicons.org/css3" },
  { name: "JavaScript", icon: "https://cdn.simpleicons.org/javascript" },
  { name: "Looker Studio", icon: "https://cdn.simpleicons.org/looker" },
  { name: "PostgreSQL", icon: "https://cdn.simpleicons.org/postgresql" },
  { name: "DBeaver", icon: "https://cdn.simpleicons.org/dbeaver" },
  { name: "React", icon: "https://cdn.simpleicons.org/react" },
  { name: "Canva", icon: "https://cdn.simpleicons.org/canva" },
  { name: "Google Docs", icon: "https://cdn.simpleicons.org/googledocs" },
  { name: "Google Sheets", icon: "https://cdn.simpleicons.org/googlesheets" },
];

const HomePage = () => {

  useEffect(() => {
    AOS.init({ 
      duration: 1700,
      once: false,
      });
  }, []);

  return (
    <div className="homepage pb-10">
      <div className="container mx-auto px-4">
        <div className="hero grid md:grid-cols-2 grid-cols-1 items-center gap-20 pt-32" data-aos="fade-right">
          <div className="box">
            <h1 className="lg:text-5xl/tight text-3xl font-medium mb-7">Halo Semua !!! Saya <span className="font-bold text-sky-400">Taufiq Arinta Ardiyono</span></h1>
            <p className="text-base/8 mb-7">Saya adalah seorang Fullstack Developer dengan pengalaman dalam pengembangan aplikasi berbasis web menggunakan PHP (Laravel/CodeIgniter) serta pengembangan aplikasi Android. Saat ini, saya sedang menempuh semester 8 di Universitas Pembangunan Nasional "Veteran" Jawa Timur.</p>
            <a href={CV} target="_blank" rel="noopener noreferrer" className="bg-sky-400 hover:bg-sky-500 transition-all py-2 px-4 text-white shadow rounded-full">Lihat CV Saya <i className="ri-eye-line ms-1"></i></a>
          </div>
          <div className="box">
            <img src={HeroImage} alt="Hero Image" className="md:w-[400px] md:h-[350px] w-[300px] h-[250px] md:m-15 mx-auto" />
          </div>
        </div>

        <div className="about grid md:grid-cols-2 grid-cols-1 items-center md:gap-20 gap-10 md:pt-20 pt-32" id="about" data-aos="fade-left"> 
          <div className="box md:order-1 order-2">
            <img src={AboutImage} alt="About Image" className="lg:w-[500px] w-[400px] md:m-0 mx-auto" />
          </div>
          <div className="box md:order-2 order-1">
            <h1 className="lg:text-5xl/tight text-3xl font-medium mb-7"><span className="font-bold text-sky-400">Membangun Sistem Efisien & User-Friendly</span></h1>
            <p className="text-base/loose">
            Saya memiliki ketertarikan dalam membangun sistem yang efisien dan user-friendly, baik untuk web maupun mobile. Dengan latar belakang sebagai Fullstack Developer, saya terbiasa menangani backend, frontend, hingga deployment aplikasi. Saya juga senang mempelajari teknologi baru dan siap menghadapi tantangan dalam pengembangan perangkat lunak.</p>
          </div>
        </div>

        <div className="pengalaman pt-20" id="pengalaman">
          <h1 className=" text-center lg:text-5xl/tight text-3xl font-medium mb-2" data-aos="fade-left">Pengalaman</h1>
          <p className="text-center" data-aos="fade-left">
            Setiap pengalaman membawa pelajaran berharga. Berikut ini adalah tiga pengalaman terakhir saya, 
            di mana saya telah mengembangkan keterampilan, menghadapi tantangan, dan berkontribusi dalam berbagai proyek pengembangan website dan android.
          </p>
          <div className="pengalaman-box pt-12 grid gap-6 md:grid-cols-3 grid-cols-1" data-aos="fade-down">
            <div className="box bg-sky-400 rounded-lg shadow p-4">
              <i className="ri-number-1 text-white"></i>
              <h3 className="text-xl font-bold text-white mt-6 mb-2">
                Fullstack Developer PHP Internship at PT Hervitama Indonesia
              </h3>
              <ul className="list-disc list-outside text-white text-base px-4 py-10">
                <li className="mb-2">Membuat Sistem untuk mengelola data barang yang ada di gudang.</li>
                <li className="mb-2">Mengembangkan fitur pengelolaan Purchase Request (PR), termasuk sistem persetujuan dan notifikasi real-time menggunakan Pusher.js dan PHPMailer.</li>
                <li className="mb-2">Membuat fitur penyimpanan bukti pengerjaan divisi service berupa foto tampak depan, samping, dan belakang.</li>
              </ul>
            </div>

            <div className="box bg-sky-400 rounded-lg shadow p-4">
              <i className="ri-number-2 text-white"></i>
              <h3 className="text-xl font-bold text-white mt-6 mb-2">
                Software Engineer Internship at PT Perkebunan Nusantara I Regional V Surabaya
              </h3>
              <ul className="list-disc list-outside text-white text-base px-4 py-2">
                <li className="mb-2">Melakukan redesain website PKS (Perjanjian Kerjasama) untuk mengelola data kerjasama PTPN 1 Regional V dengan vendor.</li>
                <li className="mb-2">Mengembangkan sistem Arsip Surat untuk menyimpan data surat masuk, termasuk soft file dan lokasi penyimpanan hard copy.</li>
                <li className="mb-2">Mengembangkan aplikasi Android Akomodasi HO untuk pemesanan konsumsi saat memesan jadwal rapat dan ruangan rapat</li>
              </ul>
            </div>

            <div className="box bg-sky-400 rounded-lg shadow p-4">
              <i className="ri-number-3 text-white"></i>
              <h3 className="text-xl font-bold text-white mt-6 mb-2">
                Studi Independen Bangkit Academy 2023 By Google, GoTo, Traveloka - Android Learning Path
              </h3>
              <ul className="list-disc list-outside text-white text-base px-4 py-2">
                <li className="mb-2">Mempelajari pengembangan aplikasi Android menggunakan Kotlin.</li>
                <li className="mb-2">Mengerjakan proyek akhir dalam tim untuk membangun aplikasi mobile.</li>
                <li className="mb-2">Memahami konsep Clean Architecture dan implementasi API dalam aplikasi Android.</li>
              </ul>
            </div>
          </div>

        </div>

        <div className="proyek pt-20" id="proyek">
          <h1 className=" text-center lg:text-5xl/tight text-3xl font-medium mb-2" data-aos="fade-right">Proyek</h1>
          <p className="text-center" data-aos="fade-right">Berikut adalah beberapa proyek yang telah saya kerjakan, mencakup pengembangan aplikasi web, 
          mobile, serta sistem berbasis API.</p>
          <div className="proyek-box pt-12 grid gap-6 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1" data-aos="fade-up">
            <div className="box p-2 bg-white shadow">
              <img src={Proyek1} alt="Proyek Image" className="w-full h-[220px] cursor-pointer"
                onClick={() => window.open(Proyek1, '_blank')}/>
              <h3 className="text-xl font-bold mt-6 mb-2 text-center">Website Hervitama</h3>
              <ul className="list-disc list-outside text-base px-8 py-2">
                <li className="mb-2">Membuat Sistem untuk mengelola data barang yang ada di gudang.</li>
                <li className="mb-2">Mengembangkan fitur pengelolaan Purchase Request (PR), termasuk sistem persetujuan dan notifikasi real-time menggunakan Pusher.js dan PHPMailer.</li>
                <li className="mb-2">Membuat fitur penyimpanan bukti pengerjaan divisi service berupa foto tampak depan, samping, dan belakang.</li>
              </ul>
            </div>
            <div className="box p-2 bg-white shadow">
              <img src={Proyek2} alt="Proyek Image" className="w-full h-[220px] cursor-pointer"
                onClick={() => window.open(Proyek2, '_blank')}/>
              <h3 className="text-xl font-bold mt-6 mb-2 text-center">Aplikasi Akomodasi Head Office</h3>
              <ul className="list-disc list-outside text-base px-8 py-2">
                <li className="mb-2">Mengembangkan fitur Dashboard Agenda untuk menampilkan jadwal ketersediaan ruangan rapat berdasarkan tanggal, lantai, dan ruangan yang dipilih user.</li>
                <li className="mb-2">Mengembangkan fitur Konsumsi untuk menambahkan pemesanan konsumsi setelah memesan ruangan dan jadwal rapat.</li>
                <li className="mb-2">Melakukan optimasi tampilan dan fungsi dashboard untuk meningkatkan pengalaman pengguna dalam mengakses informasi agenda rapat.</li>
              </ul>
            </div>
            <div className="box p-2 bg-white shadow">
              <img src={Proyek3} alt="Proyek Image" className="w-full h-[220px] cursor-pointer"
                onClick={() => window.open(Proyek3, '_blank')} />
              <h3 className="text-xl font-bold mt-6 mb-2 text-center">Portal Web PTPN I Regional V</h3>
              <ul className="list-disc list-outside text-base px-8 py-2">
                <li className="mb-2">Melakukan redesign tampilan website agar lebih modern, fresh, dan menarik bagi pengguna.</li>
                <li className="mb-2">Migrasi sistem dari native PHP ke Laravel untuk meningkatkan keamanan dan skalabilitas aplikasi.</li>
                <li className="mb-2">Mengembangkan fitur CRUD (Create, Read, Update, Delete) untuk pengelolaan data dalam portal web.</li>
              </ul>
            </div>
            <div className="box p-2 bg-white shadow">
              <img src={Proyek4} alt="Proyek Image" className="w-full h-[220px] cursor-pointer"
                onClick={() => window.open(Proyek4, '_blank')}/>
              <h3 className="text-xl font-bold mt-6 mb-2 text-center">Website Perjanjian Kerjasama (PKS)</h3>
              <ul className="list-disc list-outside text-base px-8 py-2">
                <li className="mb-2">Migrasi sistem dari CodeIgniter ke Laravel untuk meningkatkan keamanan dan performa aplikasi.</li>
                <li className="mb-2">Mengimplementasikan fitur autentikasi dan middleware untuk membatasi akses sesuai dengan peran pengguna.</li>
                <li className="mb-2">Mengelola dan mengarsipkan dokumen perjanjian kerjasama agar lebih terorganisir dan mudah diakses.</li>
              </ul>
            </div>
            <div className="box p-2 bg-white shadow">
              <img src={Proyek5} alt="Proyek Image" className="w-full h-[220px] cursor-pointer"
                onClick={() => window.open(Proyek5, '_blank')}/>
              <h3 className="text-xl font-bold mt-6 mb-2 text-center">Aplikasi Biaya Perjalanan Dinas</h3>
              <ul className="list-disc list-outside text-base px-8 py-2">
                <li className="mb-2">Menambahkan fitur pengubahan divisi/bagian pengguna melalui halaman profil.</li>
                <li className="mb-2">Menambahkan biaya 20% (sisa uang muka) pada dokumen penyelesaian untuk perjalanan dinas luar wilayah.</li>
                <li className="mb-2">Memperbaiki bug sorting berdasarkan jenis perjalanan dinas agar berfungsi dengan benar.</li>
              </ul>
            </div>
            <div className="box p-2 bg-white shadow">
              <img src={Proyek6} alt="Proyek Image" className="w-full h-[220px] cursor-pointer"
                onClick={() => window.open(Proyek6, '_blank')}/>
              <h3 className="text-xl font-bold mt-6 mb-2 text-center">One Stop Solution for Planters</h3>
              <ul className="list-disc list-outside text-base px-8 py-2">
                <li className="mb-2">Menambahkan fitur search pada tampilan edit admin untuk memudahkan pengguna dalam mencari data TMA Tebu.</li>
                <li className="mb-2">Menambahkan fitur posisi untuk mengubah posisi dari sebuah data TMA Tebu menggunakan modal.</li>
                <li className="mb-2">Menambahkan fitur untuk mengubah tarif tebang, muat, dan angkut secara massal pada data tertentu.</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="sertifikat pt-20" id="sertifikat">
          <h1 className=" text-center lg:text-5xl/tight text-3xl font-medium mb-2" data-aos="fade-left">Sertifikat</h1>
          <p className="text-center" data-aos="fade-left">Berikut adalah sertifikat yang saya peroleh sebagai bukti keahlian dan pencapaian saya dalam pengembangan perangkat lunak.</p>
          <div className="proyek-box pt-12 grid gap-6 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1" data-aos="fade-down">
            <div className="box p-2 bg-white shadow">
              <img src={Sertif1} alt="Proyek Image" className="w-full h-[220px] cursor-pointer"
                onClick={() => window.open(Sertif1, '_blank')} />
              <h3 className="text-xl font-bold mt-6 mb-2 text-center">
              Sertifikat Magang Generasi Bertalenta di PTPN I Regional V</h3>
            </div>
            <div className="box p-2 bg-white shadow">
              <img 
                src={Sertif2} 
                alt="Proyek Image" 
                className="w-full h-[220px] cursor-pointer"
                onClick={() => window.open(Sertif2, '_blank')}
              />
              <h3 className="text-xl font-bold mt-6 mb-2 text-center">
                Sertifikat BNSP Junior Web Programmer
              </h3>
            </div>
            <div className="box p-2 bg-white shadow">
              <img src={Sertif3} alt="Proyek Image" className="w-full h-[220px] cursor-pointer"
                onClick={() => window.open(Sertif3, '_blank')} />
              <h3 className="text-xl font-bold mt-6 mb-2 text-center">Top 30 Pertamuda Seed and Scale 2024 by PT Pertamina</h3>
            </div>
          </div>
        </div>


        {/* <div className="tools pt-20" id="tools">
          <h1 className=" text-center lg:text-5xl/tight text-3xl font-medium mb-2">Tools</h1>
          <p className="text-center">Berikut adalah beberapa tools yang saya gunakan dalam pengembangan aplikasi, 
          mulai dari backend, frontend, hingga manajemen API dan database.</p>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-10 gap-2 md pt-20">
            <img src="https://cdn.simpleicons.org/github" alt="GitHub" className="w-16 h-16 mx-auto" />
            <h2 className="my-auto">Github</h2>
            <img src="https://cdn.simpleicons.org/laravel" alt="Laravel" className="w-16 h-16 mx-auto" />
            <h2 className="my-auto">Laravel</h2>
            <img src="https://cdn.simpleicons.org/codeigniter" alt="CodeIgniter" className="w-16 h-16 mx-auto" />
            <h2 className="my-auto">Code Igniter</h2>
            <img src="https://cdn.simpleicons.org/postman" alt="Postman" className="w-16 h-16 mx-auto" />
            <h2 className="my-auto">Postman</h2>
            <img src="https://cdn.simpleicons.org/pusher" alt="Pusher" className="w-16 h-16 mx-auto" />
            <h2 className="my-auto">Pusher</h2>
          </div>
        </div> */}

        <div className="tools pt-20" id="tools">
              <h1 className="text-center lg:text-5xl/tight text-3xl font-medium mb-4" data-aos="fade-right">Tools</h1>
              <p className="text-center mb-6" data-aos="fade-right">
                Berikut adalah beberapa tools yang saya gunakan dalam pengembangan aplikasi, 
                mulai dari backend, frontend, hingga manajemen API dan database.
              </p>

              <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={20}
                slidesPerView={3}
                breakpoints={{
                  640: { slidesPerView: 3 },
                  768: { slidesPerView: 5 },
                  1024: { slidesPerView: 7 },
                }}
                navigation
                pagination={{ clickable: true }}
                className="w-full max-w-4xl mx-auto" data-aos="fade-up"
              >
                {tools.map((tool, index) => (
                  <SwiperSlide key={index} className="flex flex-col items-center">
                    <img src={tool.icon} alt={tool.name} className="w-16 h-16" />
                    <h2 className="mt-4">{tool.name}</h2>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

      </div>
    </div>
  )
}

export default HomePage