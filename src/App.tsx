import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes, FaInstagram, FaPlay, FaHandHoldingHeart, FaVideo } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import logo from './images/logo.jpg'
import bgImg from './images/secimg.png'

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const VideoModal: React.FC<VideoModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <motion.div 
      className="fixed inset-0 bg-black bg-opacity-70 z-[100] flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div 
        className="bg-white p-4 rounded-lg max-w-2xl w-full"
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.5, opacity: 0 }}
      >
        <div className="flex justify-end mb-4">
          <button onClick={onClose} className="text-red-500">
            <FaTimes size={24} />
          </button>
        </div>
        <div className="aspect-video">
          <iframe 
            width="100%" 
            height="100%" 
            src="https://www.youtube.com/embed/bd6Lzuj0yKY?start=1" 
            title="Human Rights Video" 
            allowFullScreen
          ></iframe>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Footer: React.FC = () => {
  return (
    <motion.footer 
      className="w-full bg-[#c01f48] text-white py-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-4">
          <a
            href="https://www.instagram.com/quqyqq.zholy?igsh=MThqbGJ1ZTJqbGh4aA%3D%3D&utm_source=qr"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-200 inline-block"
          >
            <FaInstagram size={24} className="mx-auto" />
          </a>
        </div>
        <p>&copy; 2025 Адам Құқықтары. Барлық құқықтар қорғалған.</p>
        <p className="text-gray-200">Байланыс: quqyq.zholy@mail.ru</p>
      </div>
    </motion.footer>
  );
};

const App: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-white overflow-hidden">
      <motion.nav 
        className={`w-full fixed top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-[#c01f48] shadow-lg' : 'bg-transparent'}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-4xl mx-auto p-4 flex justify-between items-center">
          <motion.div 
            className="flex items-center space-x-2"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <img src={logo} alt="Лого" className="w-8 h-8 rounded-full" />
            <span className="text-xl font-bold text-white">Адам Құқықтары</span>
          </motion.div>

          <div className="md:hidden">
            <button onClick={toggleMenu} className="focus:outline-none text-white">
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>

          <motion.ul 
            className="hidden md:flex space-x-4 text-white"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {['Негізгі', 'Статистика', 'Ақпарат', 'Сұрақтар'].map((item) => (
              <motion.li 
                key={item} 
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <a href={`#${item.toLowerCase()}`} className="hover:underline">{item}</a>
              </motion.li>
            ))}
          </motion.ul>

          {isOpen && (
            <motion.div 
              className="md:hidden absolute top-full left-0 w-full bg-[#c01f48]"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <ul className="flex flex-col items-center space-y-4 py-4">
                {['Негізгі', 'Статистика', 'Ақпарат', 'Сұрақтар'].map((item) => (
                  <li key={item}>
                    <a href={`#${item.toLowerCase()}`} onClick={toggleMenu}>{item}</a>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </div>
      </motion.nav>

      <AnimatePresence>
        {isVideoModalOpen && (
          <VideoModal 
            isOpen={isVideoModalOpen} 
            onClose={() => setIsVideoModalOpen(false)} 
          />
        )}
      </AnimatePresence>
      
      <motion.div 
        id="негізгі"
        className="relative pt-20 min-h-screen flex flex-col items-center justify-center text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: "url('/images/background.jpg')", 
            filter: 'brightness(0.4) blur(2px)',
            backgroundPosition: 'center',
            backgroundSize: 'cover'
          }}
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1 }}
        />

        <div className="relative z-10 max-w-2xl mx-auto px-4">
          <motion.div 
            className="bg-white/80 p-8 rounded-lg shadow-xl"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
          >
            <motion.h1 
              className="text-4xl font-bold text-[#c01f48] mb-6"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Бостандыққа жол
            </motion.h1>

            <motion.div 
              className="flex justify-center space-x-4 mb-6"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <motion.button 
                className="px-6 py-3 bg-[#c01f48] text-white rounded-full hover:bg-[#a01848] transition flex items-center space-x-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaHandHoldingHeart />
                <a href='https://www.instagram.com/astana_zhastary_volunteers/?hl=ru'>Көмектесу </a>
              </motion.button>
              
              <motion.button 
                className="px-6 py-3 border border-[#c01f48] text-[#c01f48] rounded-full hover:bg-[#c01f48]/10 transition flex items-center space-x-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaPlay />
                <a href='https://www.un.org/ru/documents/decl_conv/declarations/declhr.shtml'>Ақпарат алу</a>
              </motion.button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <button 
                onClick={() => setIsVideoModalOpen(true)}
                className="text-[#c01f48] hover:underline flex items-center justify-center mx-auto space-x-2"
              >
                <FaVideo />
                <span>Бейнеролик көру</span>
              </button>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Statistics Section */}
      <motion.div 
        id="статистика" 
        className="bg-white py-10"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="p-4 bg-gray-100 rounded-lg">
            <h2 className="text-4xl font-bold text-[#c01f48]">17 - орын</h2>
            <p className="text-gray-700">Қазақстан әлемдік Walk Free ұйымының жаһандық құлдық индексі бойынша.</p>
          </div>
          <div className="p-4 bg-gray-100 rounded-lg">
            <h2 className="text-4xl font-bold text-[#c01f48]">20800 </h2>
            <p className="text-gray-700">Қазақстанда құлдық жағдайында өмір сүреді.</p>
          </div>
          <div className="p-4 bg-gray-100 rounded-lg">
            <h2 className="text-4xl font-bold text-[#c01f48]">50 млн+ </h2>
            <p className="text-gray-700">Әлемде қазіргі заманғы құлдық жағдайында өмір сүруде.</p>
          </div>
        </div>

        <div className="mt-10 text-center">
          <img src={bgImg} alt="Команда" className="mx-auto rounded-lg shadow-lg max-w-full" />
        </div>
      </motion.div>

      {/* Information Section */}
      <motion.div 
        id="ақпарат" 
        className="bg-gray-100 py-10"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-6 text-[#c01f48]">Құлдықтан қашып, еркіндікке қол жеткізген адамдар</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="font-bold text-[#c01f48] mb-4">Фредерик Дуглас </h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
              <p>Фредерик Дуглас Мэриленд штатында құл болған. 1838 жылы ол теңізші киімін киіп, жалған құжаттарды қолдана отырып қашып шықты. Еркіндікке қол жеткізгеннен кейін ол танымал шешен, жазушы және құлдықты жою қозғалысының көшбасшысы болды. Оның өмірбаяны “Фредерик Дугластың өмірі туралы хикая” кітабына арқау болды және құлдыққа қарсы күресте үлкен рөл атқарды.</p>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="font-bold text-[#c01f48] mb-4">Гарриет Табмен</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
              <p>Гарриет Табмен XIX ғасырда АҚШ-та құл болған. Ол 1849 жылы құлдықтан қашып шығып, шамамен 150 шақырым жерді жасырын бағытпен жүріп өткен. Бұл бағыт “Жерасты теміржолы” деп аталған. Гарриет бостандыққа шыққаннан кейін қайтадан оңтүстікке оралып, басқа құлдарды құтқару үшін жұмыс істеді. Ол 70-тен астам адамды құлдықтан босатып, еркіндікке шығарған. Гарриет теңдік пен еркіндік үшін күрестің символына айналды.</p>

              </ul>
            </div>
          </div>
        </div>
      </motion.div>

      {/* FAQ Section */}
      <motion.div 
        id="сұрақтар" 
        className="bg-white py-10"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-6 text-[#c01f48]">Жиі қойылатын cұрақтар</h2>
          <div className="space-y-4">
            <div className="p-4 border rounded-lg bg-gray-50">
              <h3 className="font-bold text-[#c01f48]">Адам Құқықтарын Кім Қорғайды?</h3>
              <p className="text-gray-700">Адам құқықтарын халықаралық ұйымдар, үкіметтік емес ұйымдар және заң қызметкерлері қорғайды.</p>
            </div>
            <div className="p-4 border rounded-lg bg-gray-50">
  <h3 className="font-bold text-[#c01f48]">Адам құқықтары деген не?</h3>
  <p className="text-gray-700">Әр адамның туылғаннан бастап иеленетін негізгі құқықтары мен бостандықтары. Олар өмір сүру, еркіндік, теңдік, қауіпсіздік, білім алу, пікір білдіру сияқты құқықтарды қамтиды.</p>
</div>
<div className="p-4 border rounded-lg bg-gray-50">
  <h3 className="font-bold text-[#c01f48]">Барлық адам тең құқыққа ие ме?</h3>
  <p className="text-gray-700">Иә, адам құқықтары нәсіліне, жынысына, дініне, тіліне немесе әлеуметтік мәртебесіне қарамастан, барлық адамға бірдей беріледі.</p>
</div>
          </div>
        </div>
      </motion.div>

      <Footer />
    </div>
  );
};

export default App;