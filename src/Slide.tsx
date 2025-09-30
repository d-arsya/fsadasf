import { useState } from "react";
import { ChevronLeft, ChevronRight, Shield, CheckCircle } from "lucide-react";

export const Slide = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    // Slide 1: Cover
    {
      type: "cover",
      title: "MEWUJUDKAN KETAHANAN NASIONAL",
      subtitle: "Dalam Aspek Pertahanan dan Keamanan (Hankam)",
      context: "Konteks Kewarganegaraan di Indonesia",
      author: "Materi Perkuliahan Pendidikan Kewarganegaraan",
    },

    // Slide 2: Daftar Isi
    {
      type: "content",
      title: "DAFTAR ISI",
      content: [
        { icon: "📋", text: "Latar Belakang" },
        { icon: "📚", text: "Konsep dan Teori Ketahanan Nasional" },
        { icon: "🔍", text: "Pembahasan" },
        { icon: "✅", text: "Kesimpulan" },
        { icon: "📖", text: "Daftar Pustaka" },
      ],
    },

    // Slide 3: Latar Belakang 1
    {
      type: "section",
      title: "A. LATAR BELAKANG",
      subtitle: "Konteks Ketahanan Nasional Indonesia",
    },

    // Slide 4: Latar Belakang Content
    {
      type: "content",
      title: "LATAR BELAKANG",
      content: [
        {
          heading: "1. Posisi Strategis Indonesia",
          text: "Indonesia terletak di antara dua benua (Asia-Australia) dan dua samudera (Hindia-Pasifik), menjadikan negara ini sangat strategis namun rentan terhadap berbagai ancaman geopolitik dan keamanan regional.",
        },
        {
          heading: "2. Dinamika Lingkungan Strategis",
          text: "Rivalitas AS-Tiongkok, sengketa Laut Cina Selatan, dan ketegangan regional menuntut Indonesia memiliki ketahanan pertahanan yang tangguh untuk menjaga kedaulatan dan kepentingan nasional.",
        },
        {
          heading: "3. Ancaman Multidimensi",
          text: "Ancaman tidak lagi bersifat konvensional (militer), tetapi meluas ke ranah siber, terorisme, radikalisme, separatisme, dan perang narasi yang mengancam keutuhan NKRI.",
        },
      ],
    },

    // Slide 5: Latar Belakang 2
    {
      type: "content",
      title: "LATAR BELAKANG (Lanjutan)",
      content: [
        {
          heading: "4. Peran Warga Negara",
          text: "Ketahanan nasional bukan hanya tanggung jawab pemerintah dan TNI-Polri, tetapi membutuhkan partisipasi aktif seluruh warga negara dalam semangat bela negara.",
        },
        {
          heading: "5. Indeks Ketahanan Nasional",
          text: 'Lemhannas melaporkan bahwa Indeks Ketahanan Nasional Indonesia tahun 2024 berada pada kategori "cukup tangguh", menunjukkan masih ada ruang untuk peningkatan.',
        },
      ],
    },

    // Slide 6: Rumusan Masalah
    {
      type: "highlight",
      title: "RUMUSAN MASALAH",
      content: [
        {
          number: "1",
          text: "Bagaimana konsep ketahanan nasional dalam aspek Hankam menurut perspektif Lemhannas dan ahli strategis Indonesia?",
        },
        {
          number: "2",
          text: "Apa saja ancaman dan tantangan ketahanan nasional Indonesia dalam aspek Hankam di era kontemporer?",
        },
        {
          number: "3",
          text: "Bagaimana upaya mewujudkan ketahanan nasional dalam aspek Hankam dalam konteks kewarganegaraan di Indonesia?",
        },
      ],
    },

    // Slide 7: Section Teori
    {
      type: "section",
      title: "B. KONSEP DAN TEORI",
      subtitle: "Landasan Ketahanan Nasional",
    },

    // Slide 8: Konsep Lemhannas
    {
      type: "content",
      title: "KONSEP KETAHANAN NASIONAL (LEMHANNAS)",
      content: [
        {
          heading: "Definisi Ketahanan Nasional",
          text: "Kondisi dinamis yang meliputi seluruh aspek kehidupan nasional yang diperlukan suatu bangsa untuk memelihara kelangsungan hidup dan mencapai kejayaannya, dengan keuletan dan daya tahan dalam menghadapi segala kekuatan dari luar maupun dalam yang membahayakan kelangsungan negara dan bangsa Indonesia.",
        },
        {
          heading: "Sumber",
          text: "Lembaga Ketahanan Nasional (Lemhannas), konsep dikembangkan sejak 1960-an",
        },
      ],
    },

    // Slide 9: 8 Gatra
    {
      type: "content",
      title: "DELAPAN GATRA KETAHANAN NASIONAL",
      content: [
        {
          heading: "Aspek Alamiah (Trigatra):",
          list: [
            "1. Geografi - posisi dan kondisi wilayah",
            "2. Kekayaan Alam - sumber daya alam",
            "3. Demografi - jumlah dan kualitas penduduk",
          ],
        },
        {
          heading: "Aspek Sosial (Pancagatra):",
          list: [
            "4. Ideologi - Pancasila",
            "5. Politik - sistem pemerintahan",
            "6. Ekonomi - kesejahteraan rakyat",
            "7. Sosial Budaya - persatuan bangsa",
            "8. Pertahanan dan Keamanan (Hankam)",
          ],
        },
      ],
    },

    // Slide 10: Aspek Hankam
    {
      type: "highlight",
      title: "ASPEK PERTAHANAN DAN KEAMANAN (HANKAM)",
      content: [
        {
          icon: "🛡️",
          title: "Pertahanan (Defense)",
          text: "Segala upaya untuk mempertahankan kedaulatan, keutuhan wilayah, dan keselamatan bangsa dari ancaman eksternal (luar negeri). Dilaksanakan oleh TNI.",
        },
        {
          icon: "⚖️",
          title: "Keamanan (Security)",
          text: "Segala upaya untuk menjaga ketertiban, ketentraman, dan penegakan hukum dari ancaman internal (dalam negeri). Dilaksanakan oleh Polri.",
        },
        {
          icon: "🤝",
          title: "Sinergi Hankam",
          text: "Kolaborasi TNI-Polri dan partisipasi masyarakat dalam sistem pertahanan semesta untuk menghadapi ancaman hibrida.",
        },
      ],
    },

    // Slide 11: Teori Sudradjat
    // Slide 11: Teori Sudradjat
    {
      type: "content",
      title: "TEORI KETAHANAN NASIONAL SEBAGAI KEKUATAN PENANGKALAN",
      content: [
        {
          heading: "Sudradjat (1996)",
          text: "Ketahanan nasional adalah kekuatan penangkalan (deterrence power) yang mencegah negara lain melakukan agresi atau intervensi terhadap Indonesia.",
        },
        {
          heading: "Prinsip Utama:",
          list: [
            "Kesejahteraan dan keamanan harus seimbang",
            "Kekuatan nasional meliputi 8 gatra yang saling terkait",
            "Ketahanan bersifat dinamis dan harus terus ditingkatkan",
            "Berlandaskan Pancasila, UUD 1945, dan Wawasan Nusantara",
          ],
        },
      ],
    },

    // Slide 11b: Teori Sunardi
    {
      type: "content",
      title: "TEORI KETAHANAN NASIONAL SUNARDI",
      content: [
        {
          heading: "Sunardi (2004)",
          text: "Ketahanan nasional adalah kondisi dinamik suatu bangsa yang berisi keuletan dan ketangguhan yang mengandung kemampuan mengembangkan kekuatan nasional dalam menghadapi ancaman, tantangan, hambatan, dan gangguan (ATHG) baik dari luar maupun dari dalam.",
        },
        {
          heading: "Karakteristik Ketahanan Nasional:",
          list: [
            "Mandiri - tidak bergantung pada pihak lain",
            "Dinamis - berkembang sesuai perkembangan zaman",
            "Wibawa - memiliki kewibawaan di mata dunia",
            "Konsultasi dan Kerjasama - tidak isolatif namun tetap berdaulat",
          ],
        },
      ],
    },

    // Slide 11c: Teori Lykke Strategic Model
    {
      type: "highlight",
      title: "MODEL STRATEGI ARTHUR LYKKE JR.",
      content: [
        {
          icon: "🎯",
          title: "Ends (Tujuan)",
          text: "Kedaulatan NKRI, keamanan nasional, dan kesejahteraan rakyat sebagai tujuan akhir ketahanan nasional.",
        },
        {
          icon: "⚙️",
          title: "Ways (Cara)",
          text: "Sistem pertahanan semesta, diplomasi pertahanan, dan pemberdayaan komponen cadangan sebagai cara mencapai ketahanan.",
        },
        {
          icon: "💪",
          title: "Means (Sarana)",
          text: "TNI-Polri, alutsista, anggaran pertahanan, dan partisipasi rakyat sebagai sarana pendukung.",
        },
      ],
    },

    // Slide 11d: Teori Buzan
    {
      type: "content",
      title: "TEORI KOMPLEKS KEAMANAN REGIONAL - BARRY BUZAN",
      content: [
        {
          heading: "Barry Buzan (1991) - Regional Security Complex Theory",
          text: "Keamanan suatu negara tidak dapat dipisahkan dari dinamika regional. Indonesia sebagai bagian dari kawasan Indo-Pasifik harus mempertimbangkan interdependensi keamanan dengan negara tetangga.",
        },
        {
          heading: "Lima Sektor Keamanan Buzan:",
          list: [
            "1. Keamanan Militer - ancaman fisik kekuatan bersenjata",
            "2. Keamanan Politik - stabilitas ideologi dan pemerintahan",
            "3. Keamanan Ekonomi - akses terhadap sumber daya",
            "4. Keamanan Sosial - identitas dan kohesi bangsa",
            "5. Keamanan Lingkungan - keberlanjutan ekosistem",
          ],
        },
      ],
    },

    // Slide 11e: Teori Joseph Nye
    {
      type: "content",
      title: "KONSEP SOFT POWER - JOSEPH NYE",
      content: [
        {
          heading: "Joseph Nye (2004)",
          text: "Ketahanan nasional tidak hanya bergantung pada hard power (kekuatan militer dan ekonomi), tetapi juga soft power (daya tarik budaya, nilai, dan kebijakan luar negeri).",
        },
        {
          heading: "Relevansi untuk Indonesia:",
          list: [
            "Diplomasi budaya sebagai instrumen ketahanan",
            "Pengaruh Indonesia di ASEAN dan OKI",
            "Nilai Pancasila sebagai soft power ideologi",
            "Menangkal perang narasi dengan narasi positif",
          ],
        },
        {
          heading: "Smart Power",
          text: "Kombinasi hard power dan soft power untuk mencapai tujuan keamanan nasional yang efektif dan berkelanjutan.",
        },
      ],
    },

    // Slide 11f: Teori Clausewitz
    {
      type: "content",
      title: "PRINSIP PERANG - CARL VON CLAUSEWITZ",
      content: [
        {
          heading: "Carl von Clausewitz (1832) - 'On War'",
          text: '"Perang adalah kelanjutan politik dengan cara lain." Ketahanan pertahanan harus selalu sejalan dengan tujuan politik nasional.',
        },
        {
          heading: "Trinitas Perang Clausewitz:",
          list: [
            "1. Pemerintah (Politik) - menentukan tujuan strategis",
            "2. Militer (TNI) - melaksanakan strategi pertahanan",
            "3. Rakyat - memberikan dukungan dan legitimasi",
          ],
        },
        {
          heading: "Aplikasi di Indonesia",
          text: "Sistem pertahanan semesta mengintegrasikan ketiga elemen ini: kebijakan pemerintah, kekuatan TNI-Polri, dan partisipasi rakyat dalam bela negara.",
        },
      ],
    },

    // Slide 12: Section Pembahasan
    {
      type: "section",
      title: "C. PEMBAHASAN",
      subtitle: "Analisis Ketahanan Nasional Aspek Hankam",
    },

    // Slide 13: Pembahasan 1
    {
      type: "content",
      title: "PEMBAHASAN 1: KONSEP KETAHANAN HANKAM",
      content: [
        {
          heading: "Perspektif Komprehensif",
          text: "Ketahanan nasional aspek Hankam menurut Lemhannas bersifat komprehensif-integratif, tidak hanya kekuatan militer, tetapi mencakup stabilitas keamanan dalam negeri yang mendukung pembangunan nasional.",
        },
        {
          heading: "Sistem Pertahanan Semesta",
          text: "Indonesia menerapkan sistem pertahanan rakyat semesta yang melibatkan seluruh komponen bangsa (TNI, Polri, dan rakyat) dalam menghadapi ancaman.",
        },
        {
          heading: "Tiga Pilar Utama:",
          list: [
            "Komponen Utama: TNI",
            "Komponen Cadangan: Komponen terlatih untuk mobilisasi",
            "Komponen Pendukung: Seluruh warga negara dan sumber daya nasional",
          ],
        },
      ],
    },

    // Slide 14: Pembahasan 2 - Ancaman
    {
      type: "content",
      title: "PEMBAHASAN 2: ANCAMAN DAN TANTANGAN",
      content: [
        {
          heading: "A. Ancaman Eksternal",
          list: [
            "Sengketa wilayah (Laut Cina Selatan, perbatasan)",
            "Rivalitas geopolitik AS-Tiongkok di Indo-Pasifik",
            "Potensi agresi/invasi militer",
            "Spionase dan intelijen asing",
          ],
        },
        {
          heading: "B. Ancaman Internal",
          list: [
            "Terorisme dan radikalisme",
            "Gerakan separatisme (Papua)",
            "Konflik horizontal antar kelompok",
            "Narkoba dan kejahatan transnasional",
          ],
        },
      ],
    },

    // Slide 15: Pembahasan 2 - Ancaman Lanjutan
    {
      type: "content",
      title: "ANCAMAN KONTEMPORER",
      content: [
        {
          heading: "C. Ancaman Siber",
          text: "Sepanjang 2024 terdeteksi 19,1 juta upaya serangan siber di Indonesia yang menargetkan infrastruktur kritis, sistem pertahanan, dan data pemerintah.",
        },
        {
          heading: "D. Perang Narasi (Narrative Warfare)",
          text: "Propaganda, disinformasi, dan kampanye black campaign yang bertujuan melemahkan persatuan nasional dan legitimasi pemerintah.",
        },
        {
          heading: "E. Ancaman Teknologi",
          text: "Ketertinggalan teknologi pertahanan, ketergantungan pada alutsista impor, dan tantangan Internet of Military Things (IoMDT).",
        },
      ],
    },

    // Slide 16: Data Pendukung
    {
      type: "highlight",
      title: "DATA PENDUKUNG",
      content: [
        {
          icon: "📊",
          title: "Indeks Ketahanan Nasional 2024",
          text: 'Kategori "Cukup Tangguh" - masih perlu penguatan di berbagai sektor (Lemhannas RI, 2024)',
        },
        {
          icon: "🔐",
          title: "Serangan Siber",
          text: "19,1 juta ancaman web terdeteksi sepanjang 2024, turun 34,85% dari tahun sebelumnya",
        },
        {
          icon: "⚠️",
          title: "Isu Papua",
          text: "Kelompok Separatis Teroris Papua (KSTP) ditetapkan sebagai ancaman serius terhadap integritas wilayah",
        },
      ],
    },

    // Slide 17: Pembahasan 3
    {
      type: "content",
      title: "PEMBAHASAN 3: UPAYA MEWUJUDKAN KETAHANAN HANKAM",
      content: [
        {
          heading: "A. Penguatan Kapasitas Pertahanan",
          list: [
            "Modernisasi alutsista TNI",
            "Peningkatan kesiapan operasional",
            "Pembangunan industri pertahanan dalam negeri",
            "Peningkatan anggaran pertahanan",
          ],
        },
        {
          heading: "B. Stabilitas Keamanan Dalam Negeri",
          list: [
            "Pemberantasan terorisme dan radikalisme",
            "Penanganan konflik dan separatisme",
            "Peningkatan keamanan siber nasional",
            "Penguatan intelijen dan kontra-intelijen",
          ],
        },
      ],
    },

    // Slide 18: Upaya Lanjutan
    {
      type: "content",
      title: "UPAYA MEWUJUDKAN KETAHANAN (Lanjutan)",
      content: [
        {
          heading: "C. Diplomasi Pertahanan",
          list: [
            "Kerja sama bilateral dan multilateral",
            "Latihan bersama dengan negara sahabat",
            "Peran aktif di ASEAN dan forum regional",
            "Politik bebas aktif dalam dinamika geopolitik",
          ],
        },
        {
          heading: "D. Peran Warga Negara (Bela Negara)",
          list: [
            "Pendidikan bela negara di sekolah/kampus",
            "Program Komponen Cadangan (Komcad)",
            "Kesadaran keamanan siber masyarakat",
            "Penguatan nasionalisme dan cinta tanah air",
          ],
        },
      ],
    },

    // Slide 19: Faktor Pendukung
    {
      type: "content",
      title: "FAKTOR PENDUKUNG DAN PENGHAMBAT",
      content: [
        {
          heading: "Faktor Pendukung ✅",
          list: [
            "Bonus demografi dan SDM berkualitas",
            "Kekayaan sumber daya alam",
            "Posisi strategis Indonesia",
            "Komitmen politik pemerintah",
            "Sinergi TNI-Polri yang semakin baik",
          ],
        },
        {
          heading: "Faktor Penghambat ⚠️",
          list: [
            "Anggaran pertahanan masih terbatas",
            "Ketertinggalan teknologi pertahanan",
            "Luasnya wilayah yang harus dijaga",
            "Ancaman siber yang terus berkembang",
            "Kesadaran bela negara masyarakat belum optimal",
          ],
        },
      ],
    },

    // Slide 20: Section Kesimpulan
    {
      type: "section",
      title: "D. KESIMPULAN",
      subtitle: "Ringkasan Pembahasan",
    },

    // Slide 21: Kesimpulan
    {
      type: "highlight",
      title: "KESIMPULAN",
      content: [
        {
          number: "1",
          text: "Konsep ketahanan nasional Indonesia bersifat komprehensif-integratif yang menghubungkan 8 gatra kehidupan nasional. Aspek Hankam merupakan gatra kunci yang melindungi seluruh aspek lainnya melalui sistem pertahanan semesta berbasis Pancasila dan UUD 1945.",
        },
        {
          number: "2",
          text: "Indonesia menghadapi ancaman multidimensi baik eksternal (rivalitas geopolitik, sengketa wilayah) maupun internal (terorisme, separatisme, radikalisme), serta ancaman kontemporer seperti serangan siber (19,1 juta insiden di 2024) dan perang narasi yang mengancam integritas nasional.",
        },
        {
          number: "3",
          text: "Mewujudkan ketahanan Hankam memerlukan sinergi antara penguatan kapasitas TNI-Polri, diplomasi pertahanan, stabilitas keamanan dalam negeri, dan partisipasi aktif warga negara melalui pendidikan bela negara untuk menghadapi tantangan keamanan abad 21.",
        },
      ],
    },

    // Slide 22: Rekomendasi
    {
      type: "content",
      title: "REKOMENDASI",
      content: [
        {
          icon: "🎯",
          text: "Meningkatkan anggaran pertahanan secara bertahap untuk modernisasi alutsista",
        },
        {
          icon: "🔬",
          text: "Mempercepat pengembangan industri pertahanan dan teknologi dalam negeri",
        },
        {
          icon: "👥",
          text: "Mengintensifkan program pendidikan bela negara di perguruan tinggi",
        },
        {
          icon: "🌐",
          text: "Membangun sistem keamanan siber nasional yang lebih tangguh",
        },
        {
          icon: "🤝",
          text: "Memperkuat kerja sama pertahanan regional dan internasional",
        },
      ],
    },

    // Slide 23: Section Daftar Pustaka
    {
      type: "section",
      title: "E. DAFTAR PUSTAKA",
      subtitle: "Referensi",
    },

    // Slide 24: Daftar Pustaka
    {
      type: "references",
      title: "DAFTAR PUSTAKA",
      content: [
        "Lembaga Ketahanan Nasional (Lemhannas). (2024). Indeks Ketahanan Nasional Indonesia. Jakarta: Lemhannas RI.",
        "Lemhannas RI. (2024). Jurnal Kajian Lembaga Ketahanan Nasional Republik Indonesia. https://jurnal.lemhannas.go.id",
        "Sudradjat, E. (1996). Ketahanan Nasional sebagai Kekuatan Penangkalan: Satu Tinjauan dari Sudut Kepentingan Hankam. Dalam Ichlasul Amal & Armaidy Armawi (Eds.), Keterbukaan informasi dan Ketahanan Nasional. Yogyakarta: Gadjah Mada University Press.",
        "Buzan, B. (1991). People, States and Fear: An Agenda for International Security Studies in the Post-Cold War Era. London: Harvester Wheatsheaf.",
        "Clausewitz, C. von. (1832/1976). On War. Edited and translated by Michael Howard and Peter Paret. Princeton: Princeton University Press.",
        "Lykke, A. F. Jr. (1989). Defining Military Strategy. Military Review, 69(5), 2-8.",
        "Nye, J. S. (2004). Soft Power: The Means to Success in World Politics. New York: Public Affairs.",
        "Sunardi, R. M. (2004). Ketahanan Nasional. Jakarta: Universitas Terbuka.",
        "Kementerian Pertahanan RI. (2025). Menghadapi Ancaman Narrative and Legal Warfare. https://www.kemhan.go.id",
        "Kaspersky. (2025). Laporan Keamanan Siber Indonesia 2024. Ipol.id. Diakses 3 Februari 2025.",
        "ANTARA News. (2024). Tantangan Indonesia di tahun 2025. Antara Mataram, 31 Desember 2024.",
        "Lemhannas RI. (2024). PPRA LVII: Analisis Ancaman Ketahanan Nasional Hingga Tahun 2045. https://www.lemhannas.go.id",
      ],
    },

    // Slide 25: Terima Kasih
    {
      type: "closing",
      title: "TERIMA KASIH",
      subtitle: "Ketahanan Nasional adalah Tanggung Jawab Bersama",
      quote: '"Bersatu Kita Teguh, Bercerai Kita Runtuh"',
    },
  ];

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const renderSlide = (slide: any) => {
    switch (slide.type) {
      case "cover":
        return (
          <div className="h-full flex flex-col items-center justify-center bg-gradient-to-br from-red-700 via-red-600 to-red-800 text-white p-12 rounded-2xl shadow-xl">
            <Shield className="w-28 h-28 mb-10 drop-shadow-lg" />
            <h1 className="text-6xl font-extrabold text-center mb-4 tracking-tight">
              {slide.title}
            </h1>
            <h2 className="text-3xl font-semibold text-center mb-3 opacity-90">
              {slide.subtitle}
            </h2>
            <p className="text-xl text-center mb-10 max-w-3xl leading-relaxed">
              {slide.context}
            </p>
            <div className="mt-6 text-lg italic opacity-80">{slide.author}</div>
          </div>
        );

      case "section":
        return (
          <div className="h-full flex flex-col items-center justify-center bg-gradient-to-br from-blue-700 to-blue-900 text-white p-12 rounded-2xl shadow-xl">
            <div className="text-7xl mb-8">📑</div>
            <h1 className="text-5xl font-extrabold text-center mb-4">
              {slide.title}
            </h1>
            <p className="text-2xl text-center opacity-90">{slide.subtitle}</p>
          </div>
        );

      case "content":
        return (
          <div className="h-full flex flex-col p-12 bg-white rounded-2xl shadow-lg">
            <h2 className="text-4xl font-bold text-red-700 mb-8 border-b-4 border-red-700 pb-3">
              {slide.title}
            </h2>
            <div className="flex-1 overflow-y-auto space-y-6 pr-2">
              {slide.content.map((item: any, idx: number) => (
                <div key={idx} className="space-y-3">
                  {item.icon && (
                    <div className="flex items-start">
                      <span className="text-2xl mr-3">{item.icon}</span>
                      <span className="text-xl font-semibold">{item.text}</span>
                    </div>
                  )}
                  {item.heading && (
                    <h3 className="text-2xl font-bold text-blue-800">
                      {item.heading}
                    </h3>
                  )}
                  {item.text && !item.icon && (
                    <p className="text-lg text-gray-700 leading-relaxed">
                      {item.text}
                    </p>
                  )}
                  {item.list && (
                    <ul className="list-none space-y-2 ml-6">
                      {item.list.map((listItem: string, listIdx: number) => (
                        <li
                          key={listIdx}
                          className="text-lg text-gray-700 flex items-start"
                        >
                          <span className="text-red-600 mr-2">▪</span>
                          <span>{listItem}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        );

      case "highlight":
        return (
          <div className="h-full flex flex-col p-12 bg-gradient-to-br from-blue-50 to-red-50 rounded-2xl shadow-inner">
            <h2 className="text-4xl font-bold text-red-700 mb-8 border-b-4 border-red-700 pb-3">
              {slide.title}
            </h2>
            <div className="flex-1 overflow-y-auto space-y-6 pr-2">
              {slide.content.map((item: any, idx: number) => (
                <div
                  key={idx}
                  className="bg-white rounded-xl shadow-md p-6 border-l-4 border-red-600"
                >
                  {item.number && (
                    <div className="flex items-start">
                      <div className="bg-red-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl mr-4 shadow-md">
                        {item.number}
                      </div>
                      <p className="text-lg text-gray-800 leading-relaxed">
                        {item.text}
                      </p>
                    </div>
                  )}
                  {item.icon && (
                    <div>
                      <div className="flex items-center mb-3">
                        <span className="text-3xl mr-3">{item.icon}</span>
                        <h3 className="text-2xl font-bold text-blue-800">
                          {item.title}
                        </h3>
                      </div>
                      <p className="text-lg text-gray-700 leading-relaxed ml-12">
                        {item.text}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        );

      case "references":
        return (
          <div className="h-full flex flex-col p-12 bg-white rounded-2xl shadow-lg">
            <h2 className="text-4xl font-bold text-red-700 mb-8 border-b-4 border-red-700 pb-3">
              {slide.title}
            </h2>
            <div className="flex-1 overflow-y-auto pr-2">
              <ul className="space-y-4">
                {slide.content.map((ref: string, idx: number) => (
                  <li
                    key={idx}
                    className="text-base text-gray-700 leading-relaxed pl-10 relative"
                  >
                    <span className="absolute left-0 text-red-600 font-bold">
                      [{idx + 1}]
                    </span>
                    {ref}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        );

      case "closing":
        return (
          <div className="h-full flex flex-col items-center justify-center bg-gradient-to-br from-red-700 via-red-600 to-red-800 text-white p-12 rounded-2xl shadow-xl">
            <CheckCircle className="w-28 h-28 mb-10 drop-shadow-lg" />
            <h1 className="text-6xl font-extrabold text-center mb-6 tracking-tight">
              {slide.title}
            </h1>
            <p className="text-2xl text-center mb-8 opacity-90">
              {slide.subtitle}
            </p>
            <div className="text-3xl italic text-center mt-10 border-t-2 border-white pt-6 max-w-2xl">
              {slide.quote}
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="w-full h-screen bg-gray-900 flex flex-col">
      {/* SLIDE WRAPPER */}
      <div className="flex-1 relative">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex items-center justify-center w-full h-full">
            <div className="w-full max-w-7xl aspect-video">
              {renderSlide(slides[currentSlide])}
            </div>
          </div>
        </div>
      </div>

      {/* NAVIGATION BAR */}
      <div className="bg-gray-800/90 backdrop-blur-sm text-white px-6 py-4 flex items-center justify-between shadow-lg">
        {/* PREV BUTTON */}
        <button
          onClick={prevSlide}
          disabled={currentSlide === 0}
          className="flex items-center space-x-2 px-5 py-2.5 bg-red-600 rounded-lg shadow-md 
                   disabled:bg-gray-600 disabled:cursor-not-allowed 
                   hover:bg-red-700 transition-all duration-200 hover:scale-105"
        >
          <ChevronLeft className="w-5 h-5" />
          <span className="hidden sm:inline">Previous</span>
        </button>

        {/* SLIDE INDICATOR */}
        <div className="flex items-center space-x-6">
          <span className="text-sm font-medium opacity-80">
            Slide {currentSlide + 1} of {slides.length}
          </span>
          <div className="flex space-x-2">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  idx === currentSlide
                    ? "bg-red-600 w-8"
                    : "bg-gray-600 w-2 hover:bg-gray-500"
                }`}
              />
            ))}
          </div>
        </div>

        {/* NEXT BUTTON */}
        <button
          onClick={nextSlide}
          disabled={currentSlide === slides.length - 1}
          className="flex items-center space-x-2 px-5 py-2.5 bg-red-600 rounded-lg shadow-md 
                   disabled:bg-gray-600 disabled:cursor-not-allowed 
                   hover:bg-red-700 transition-all duration-200 hover:scale-105"
        >
          <span className="hidden sm:inline">Next</span>
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};
