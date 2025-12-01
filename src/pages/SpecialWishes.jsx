import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import vidioWishes from "../assets/videos/Wishes.mp4";

const SpecialWishes = ({ isIOS }) => {
  const [showHeart, setShowHeart] = useState(false);

  const wishes = `

Hei bocil, 
Selamat karna udah bertahan sejauh ini
Aku harap kamu bahagia terus ya
Hadirmu didunia ini
adalah kebahagiaan,
adalah cinta
adalah hadiah yang tak ternilai
Kehadiranmu membawa kebahagiaan untuk orang-orang disekitarmu. 🤍

Ingat nggak dulu pertama kali kita ketemu? Aku nggak nyangka kalau orang yang awalnya cuma teman ngobrol ini bisa jadi sebegitu pentingnya buat aku sekarang. Kita udah ngelewatin banyak hal bareng, baik yang seneng-seneng sampe yang bikin stres. 🥴🤪
Umur kamu sekarang bertambah 1 tahun, kamu tau ga, kamu itu kuat, kamu hebat, kamu udah sejauh ini ngejalanin hari² kamu dari mulai kamu masi dirahim mama sampe kamu udah sedewasa ini, makasi yaa sayang kamu udah mau ngejalanin hari hari kamu bareng aku walaupun kita banyak marahannya tapi sama aku terus ya sayang, kalo ga sama kamu rasanya itu kurang soalnya hehehe, kamu bahagia ga pas hari special kamu ini kita masih bareng bareng begini? aku harap pas aku ulang tahun kamu masih sama aku ya sayang intinya makasi banyak. Hehe 😆😅😂 Aku juga berharap diumur kamu yang ini, pemikirannya didewasain lagi, sikap childish nya di kurangin, menjadi lebih bijak lagi dan aku berharap apapun doa atau keinginan kamu bisa kamu terwujud, dan jangan lupa nikmati semua proses untuk mencapainya.🤗🥰🤍  

Terimakasih ya telah menambah keceriaan di dunia ini, kamu yang telah tunjukkan pada dunia ini, walaupun jiwa sedang rapuh tapi kamu tetap berjuang dan bertahan hingga saat ini, hebattt 🥰😍💕 Tetap semangat karena aku yakin semua keinginan kamu bisa tercapai, dan jangan berkecil hati kalau semisalnya kamu gagal, karna kegagalan adalah sebuah proses dan kunci dari semua kesuksesan, percayalah. Tetaplah bermimpi setinggi langit, dan berusahalah untuk meraih semua impianmu aku bakalan tetep disini jadi sistem pendukung yang 10000000% (pokoknya full) yang baik untuk kamu. Sayang always healthy and wish u all the best, inget. aku selalu di sinii untuk kamu, di sampingmu. selalu. AND I LOVE U IN EVERY UNIVERSE, SAYANG. 🤍🤗

"Do your best at every opportunity tahat you have. A strong hope can make your dreams come true." 

Dari aku yang selalu ingin melihat kamu bahagia. 🤍

  `;

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-100 to-purple-100 p-4 flex flex-col items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl w-full"
      >
        <h1 className="text-4xl font-bold text-center text-pink-600 mb-8">
          Pesan Spesial Untukmu
        </h1>

        <div className="mb-8">
          <video
            autoPlay
            loop
            muted
            playsInline
            webkit-playsinline="true"
            x-webkit-airplay="allow"
            className="w-full max-w-md mx-auto rounded-lg shadow-xl"
          >
            <source src={vidioWishes} type="video/mp4" />
          </video>
        </div>

        <motion.div
          whileHover={{ scale: isIOS ? 1 : 1.01 }}
          className="bg-white bg-opacity-80 backdrop-blur-sm p-6 rounded-xl shadow-lg mb-8"
        >
          <div className="prose max-w-none">
            {wishes.split("\n").map((paragraph, i) => (
              <p key={i} className="text-pink-800 mb-4 text-lg leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </motion.div>

        <div className="flex justify-center">
          <motion.button
            whileHover={{ scale: isIOS ? 1 : 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowHeart(!showHeart)}
            className="relative overflow-hidden bg-pink-500 text-white px-6 py-3 rounded-full shadow-lg"
          >
            <span className="button-text">
              {showHeart ? "Sembunyikan Cintaku" : "Lihat Cintaku"}
            </span>
          </motion.button>
        </div>

        <AnimatePresence>
          {showHeart && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50"
            >
              <motion.div
                className="relative text-pink-500"
                animate={{ scale: [1, 1.1, 1], opacity: [0.9, 1, 0.9] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <div className="text-[12rem] select-none text-center">❤️</div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-3xl font-bold drop-shadow-lg">
                  eMTe'eR💖
                </div>
                <div className="text-white text-lg text-center mt-4">
                  Hanya kamu di hatiku, sayang 🥹
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default SpecialWishes;
