/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { motion } from "motion/react";

function MainContent() {
  const fullMessage = `Hi, Alsa! How was your day? I hope you had a great day, because it
  is your birthday! Pertama-tama, aku ingin mengucapkan selamat ulang
  tahun! Semoga semua harapan dan impian kamu tercapai, dan semoga
  kamu selalu bahagia 😊 Aku sungguh sangat bersyukur bisa kenal kamu,
  dan bisa menghabiskan waktu sama kamu. You're such a kind and caring
  person, and as a lover you are so sweet and thoughtful. I'm so lucky
  to have you there. I really loves the way you always make me feel
  special, and the way you always support me in everything i do. I
  really appreciate all the little things you do for me, walaupun
  kadang-kadang aku sering membuat kamu kesal hehe im so sorry for
  that, but i do really loves you. You're 21 years old now, dan
  bismillah let's make this year even better than everything untuk
  mencapai semua impian kamu yeay. Semoga segala urusan kamu
  dipermudahkan, dan semoga kamu selalu dikelilingi oleh orang-orang
  yang respect dan baik sama kamu. Semangat yaa! Don't mean to say
  this, but SEMANGAATT MENUJU KELULUSAN HEHE 😭 Oiyaa semangat juga
  KKN nya karena bentar lagi KKN omo... semoga lancar! Lalu
  selanjutnya, aku ingin mengucapkan mohon maaf dulu karena mungkin
  hadiahnya ngga seberapa, tapi someday i'll present you something
  that i think you deserved it (ykwim). Di ulang tahun yang ke-21 ini,
  aku anugerahkan kepada km sebuah tas hehe.. JUJUR AKU NEMU YG LEBIH
  LUCU JD AGAK KECEWAA
  FUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUPPPPP!!!! tpi gpp deh
  ini pun lumayan lucu, dan atleast besar dan semoga cukup untuk
  menampung barang-barang kamuu hehe. dann aku juga memberi kamu
  casing, karenaa biar lucu hehe. Semua hal yang kulihat lucu =
  reminds me of you. Mari kita bersama sama menuju menara kesuksesan
  menara eiffel hwhw.. semangat sayang! Jikalau kita nanti bertemu
  dengan kondisi LDR, semoga tuhan selalu menjodohkan dan menjaga kita
  dimanapun kita berada. Semangat yeay! Let's goo to the real world
  omg im still a baby brooooo. I hope you have a great year ahead,
  filled with love, laughter, and all the things that make you happy.
  I'm looking forward to making more memories with you in the future.
  Once again, happy birthday! 🎉`;

  const [displayedMessage, setDisplayedMessage] = useState("");

  useEffect(() => {
    const typingDelay = 3000; // Delay sebelum animasi mengetik dimulai (3 detik)
    let index = 0;

    const timeout = setTimeout(() => {
      const interval = setInterval(() => {
        if (index < fullMessage.length) {
          setDisplayedMessage((prev) => prev + fullMessage[index]);
          index++;
        } else {
          clearInterval(interval);
        }
      }, 50); // Kecepatan mengetik (50ms per karakter)
    }, typingDelay);

    return () => clearTimeout(timeout);
  }, [fullMessage]);

  return (
    <div className="mainContent bg-gradient-to-r from-violet-200 to-pink-200 h-full w-full flex items-center justify-center md:justify-normal relative">
      {/* Animasi cookie */}
      <motion.div
        initial={{ x: 200, opacity: 0 }} // Muncul dari luar layar
        animate={{ x: 0, y: 0, opacity: 1 }} // Menuju posisi kanan bawah
        transition={{ duration: 1.5 }} // Durasi animasi lebih lambat
        className="absolute bottom-0 right-0 z-10"
      >
        <img src="/cookie.png" alt="" className="w-32 md:w-100" />
      </motion.div>

      {/* Animasi pesan */}
      <motion.div
        initial={{ x: "100%", y: "50%", scale: 0, opacity: 0 }}
        animate={{ x: 0, y: 0, scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, delay: 1.5 }} 
        className="md:ml-20 ml-0 h-[90%] md:h-[75%] lg:h-[90%] w-[90%] md:w-[70%] bg-purple-100 rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-20 border border-gray-100"
      >
        <div className="text-black m-5 text-xl overflow-hidden text-ellipsis whitespace-normal">
          <p
            id="message"
            className="text-xs/relaxed lg:text-lg/relaxed md:text-2xl/relaxed"
          >
            {displayedMessage}
          </p>
        </div>
      </motion.div>
    </div>
  );
}

export default MainContent;
