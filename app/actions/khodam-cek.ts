"use server";

import seedrandom from "seedrandom";

export const actionKhodamCheck = async (prevState: any, formData: FormData) => {
    try {
        const rawFormData = {
            nama: formData.get("nama") as string,
        };
        if (rawFormData.nama.trim() === "")
            return {
                khodamName: "",
                khodamIcon: "",
            };
        var rng = seedrandom(rawFormData.nama.trim());

        const randLineNum = Math.floor(rng() * khodamList.length);

        return {
            khodamName: khodamList[randLineNum].text,
            khodamIcon: khodamList[randLineNum].icon,
        };
    } catch (e) {
        console.error(e);
        return {
            khodamName: "",
            khodamIcon: "",
        };
    }
};

const khodamList = [
    { icon: "🦉", text: "Bebek Jakarta" },
    { icon: "🐢", text: "Kura-kura Bali" },
    { icon: "🐱", text: "Kucing Bekasi" },
    { icon: "🐓", text: "Ayam Bogor" },
    { icon: "🐘", text: "Gajah Cirebon" },
    { icon: "🐑", text: "Domba Bandung" },
    { icon: "🐊", text: "Buaya Depok" },
    { icon: "🦌", text: "Rusa Tangerang" },
    { icon: "🐴", text: "Kuda Semarang" },
    { icon: "🐄", text: "Sapi Surabaya" },
    { icon: "🦇", text: "Kelelawar Malang" },
    { icon: "🐟", text: "Ikan Makassar" },
    { icon: "🐍", text: "Ular Banjarmasin" },
    { icon: "🦅", text: "Elang Pontianak" },
    { icon: "🐜", text: "Jangkrik Palembang" },
    { icon: "🐦", text: "Burung Jayapura" },
    { icon: "🐭", text: "Tikus Medan" },
    { icon: "🐐", text: "Kambing Padang" },
    { icon: "🐰", text: "Kelinci Yogyakarta" },
    { icon: "🐂", text: "Banteng Solo" },
    { icon: "🦁", text: "Singa Banda Aceh" },
    { icon: "🦏", text: "Badak Manado" },
    { icon: "🐒", text: "Kukang Ambon" },
    { icon: "🐺", text: "Serigala Batam" },
    { icon: "🦩", text: "Pelikan Kupang" },
    { icon: "🦔", text: "Landak Samarinda" },
    { icon: "🐬", text: "Lumba-lumba Pekanbaru" },
    { icon: "🦎", text: "Kadal Ternate" },
    { icon: "🐼", text: "Panda Lombok" },
    { icon: "🦘", text: "Kanguru Denpasar" },
    { icon: "🦓", text: "Zebra Gorontalo" },
    { icon: "🐱", text: "Kucing Hutan Kendari" },
    { icon: "🐨", text: "Koala Palu" },
    { icon: "🐿️", text: "Tupai Mataram" },
    { icon: "🕊️", text: "Merpati Bengkulu" },
    { icon: "🦌", text: "Rusa Tarakan" },
    { icon: "🦌", text: "Kijang Lhokseumawe" },
    { icon: "🐻", text: "Beruang Tanjung Pinang" },
    { icon: "🦜", text: "Kakatua Serang" },
    { icon: "🐅", text: "Macan Lampung" },
    { icon: "🦈", text: "Hiu Pangkal Pinang" },
    { icon: "🐋", text: "Paus Sorong" },
    { icon: "🦢", text: "Angsa Sukabumi" },
    { icon: "🕊️", text: "Walet Madiun" },
    { icon: "🐿️", text: "Musang Tebing Tinggi" },
    { icon: "🐅", text: "Harimau Baturaja" },
    { icon: "🐃", text: "Anoa Palangkaraya" },
    { icon: "🐠", text: "Kakap Bukittinggi" },
    { icon: "🦆", text: "Bebek Sumenep" },
    { icon: "🦟", text: "Capung Banyumas" },
    { icon: "🐌", text: "Keong Probolinggo" },
    { icon: "🪱", text: "Cacing Pacitan" },
    { icon: "🪰", text: "Lalat Sidoarjo" },
    { icon: "🐜", text: "Semut Purwokerto" },
    { icon: "🐝", text: "Lebah Wonosari" },
    { icon: "🦋", text: "Kupu-kupu Tulungagung" },
    { icon: "🦗", text: "Belalang Situbondo" },
    { icon: "🦑", text: "Cumi-cumi Kediri" },
    { icon: "🦐", text: "Udang Salatiga" },
    { icon: "🦀", text: "Kepiting Klaten" },
    { icon: "🐷", text: "Babi Nganjuk" },
    { icon: "🐸", text: "Katak Ngawi" },
    { icon: "🐢", text: "Penyu Magelang" },
    { icon: "🐍", text: "Belut Trenggalek" },
    { icon: "🐟", text: "Tenggiri Blitar" },
    { icon: "🦗", text: "Belalang Sragen" },
    { icon: "✨", text: "Kunang-kunang Jepara" },
    { icon: "🐜", text: "Jangkrik Kudus" },
    { icon: "🕷️", text: "Tarantula Temanggung" },
    { icon: "🦎", text: "Tokek Jember" },
    { icon: "🪲", text: "Ulat Maluku" },
    { icon: "🐌", text: "Siput Bangka" },
    { icon: "🐰", text: "Kelinci Flores" },
    { icon: "🐺", text: "Serigala Papua" },
    { icon: "🐘", text: "Gajah Borneo" },
    { icon: "🐻", text: "Beruang Nusa Tenggara" },
    { icon: "🐨", text: "Koala Papua Barat" },
    { icon: "🦜", text: "Kakaktua Sumba" },
    { icon: "🦔", text: "Landak Kalimantan" },
    { icon: "🦁", text: "Singa Sumatra" },
    { icon: "🦇", text: "Kelelawar Sulawesi" },
    { icon: "🐅", text: "Harimau Jawa" },
    { icon: "🦏", text: "Badak Banten" },
    { icon: "🐱", text: "Kucing Bali" },
    { icon: "🐓", text: "Ayam Jakarta" },
    { icon: "🐦", text: "Burung Surabaya" },
    { icon: "🐬", text: "Lumba-lumba Makassar" },
    { icon: "🦒", text: "Jerapah Medan" },
    { icon: "🦚", text: "Merak Malang" },
    { icon: "🦓", text: "Zebra Yogyakarta" },
    { icon: "🦘", text: "Kanguru Bandung" },
    { icon: "🐼", text: "Panda Semarang" },
    { icon: "🦅", text: "Gagak Padang" },
    { icon: "🦜", text: "Kakatua Batam" },
    { icon: "🦩", text: "Pelikan Bali" },
    { icon: "🕊️", text: "Walet Bali" },
    { icon: "🐿️", text: "Musang Denpasar" },
    { icon: "🐍", text: "Ular Denpasar" },
    { icon: "🐴", text: "Kuda Denpasar" },
    { icon: "🦉", text: "Bebek Lampung" },
    { icon: "🐓", text: "Ayam Tasikmalaya" },
    { icon: "🐟", text: "Ikan Padang" },
    { icon: "🐱", text: "Kucing Banyumas" },
    { icon: "🐦", text: "Burung Demak" },
    { icon: "🐺", text: "Serigala Magelang" },
    { icon: "🦇", text: "Kelelawar Probolinggo" },
    { icon: "🕷️", text: "Laba-laba Banyuwangi" },
    { icon: "🪱", text: "Cacing Batang" },
    { icon: "🦋", text: "Kupu-kupu Kuningan" },
    { icon: "🦗", text: "Belalang Situbondo" },
    { icon: "🐜", text: "Semut Pekalongan" },
    { icon: "🕊️", text: "Merpati Pekanbaru" },
    { icon: "🐂", text: "Banteng Samarinda" },
    { icon: "🦁", text: "Singa Purwokerto" },
    { icon: "🐅", text: "Harimau Purbalingga" },
    { icon: "🐍", text: "Ular Tasikmalaya" },
    { icon: "🐊", text: "Buaya Pekanbaru" },
    { icon: "🦈", text: "Hiu Pontianak" },
    { icon: "🦘", text: "Kanguru Banjarmasin" },
    { icon: "🐼", text: "Panda Ternate" },
    { icon: "🐨", text: "Koala Lombok" },
    { icon: "🐑", text: "Domba Ambon" },
    { icon: "🐐", text: "Kambing Bitung" },
    { icon: "🦌", text: "Rusa Manado" },
    { icon: "🐭", text: "Tikus Gorontalo" },
    { icon: "🐱", text: "Kucing Balikpapan" },
    { icon: "🐦", text: "Burung Pangkalpinang" },
    { icon: "🐢", text: "Kura-kura Palembang" },
    { icon: "🐬", text: "Lumba-lumba Tarakan" },
    { icon: "🐘", text: "Gajah Madiun" },
    { icon: "🦅", text: "Elang Palu" },
    { icon: "🦜", text: "Kakatua Tarakan" },
    { icon: "🐨", text: "Koala Jayapura" },
    { icon: "🦒", text: "Jerapah Sidoarjo" },
    { icon: "🦎", text: "Kadal Denpasar" },
    { icon: "🦑", text: "Cumi-cumi Samarinda" },
    { icon: "🦎", text: "Tokek Sorong" },
    { icon: "🐸", text: "Katak Baubau" },
    { icon: "🐟", text: "Ikan Baubau" },
    { icon: "🐺", text: "Serigala Balikpapan" },
    { icon: "🐰", text: "Kelinci Bau-Bau" },
    { icon: "🐿️", text: "Musang Jayapura" },
    { icon: "🐊", text: "Buaya Batam" },
    { icon: "🐦", text: "Burung Biak" },
    { icon: "🐓", text: "Ayam Denpasar" },
    { icon: "🐬", text: "Lumba-lumba Banda Aceh" },
    { icon: "🐅", text: "Harimau Surabaya" },
    { icon: "🐭", text: "Tikus Manado" },
    { icon: "🐨", text: "Koala Bandung" },
    { icon: "🐼", text: "Panda Surakarta" },
    { icon: "🐐", text: "Kambing Banyuwangi" },
    { icon: "🦌", text: "Rusa Tegal" },
    { icon: "🕊️", text: "Merpati Cianjur" },
    { icon: "🦗", text: "Belalang Bekasi" },
    { icon: "🐜", text: "Semut Batam" },
    { icon: "🦋", text: "Kupu-kupu Bogor" },
    { icon: "🐘", text: "Gajah Cirebon" },
    { icon: "🦈", text: "Hiu Bandung" },
    { icon: "🐍", text: "Ular Denpasar" },
    { icon: "🦇", text: "Kelelawar Probolinggo" },
    { icon: "🐜", text: "Jangkrik Pekalongan" },
    { icon: "🐸", text: "Katak Pontianak" },
    { icon: "🐢", text: "Kura-kura Jakarta" },
    { icon: "🕷️", text: "Laba-laba Jember" },
    { icon: "🐿️", text: "Musang Bogor" },
    { icon: "🐺", text: "Serigala Jember" },
    { icon: "🐊", text: "Buaya Bandung" },
    { icon: "🐱", text: "Kucing Jombang" },
    { icon: "🐦", text: "Burung Situbondo" },
    { icon: "🦌", text: "Rusa Gresik" },
    { icon: "🐰", text: "Kelinci Banyuwangi" },
    { icon: "🐐", text: "Kambing Ternate" },
    { icon: "🐢", text: "Kura-kura Banjarmasin" },
    { icon: "🐭", text: "Tikus Lombok" },
    { icon: "🦒", text: "Jerapah Bontang" },
    { icon: "🦈", text: "Hiu Tasikmalaya" },
    { icon: "🪱", text: "Cacing Jayapura" },
    { icon: "🦗", text: "Belalang Manado" },
    { icon: "🦅", text: "Gagak Palembang" },
    { icon: "🐅", text: "Harimau Jayapura" },
    { icon: "🐨", text: "Koala Manokwari" },
    { icon: "🐿️", text: "Musang Padang" },
    { icon: "🕷️", text: "Laba-laba Lhokseumawe" },
    { icon: "🐰", text: "Kelinci Bogor" },
    { icon: "🐘", text: "Gajah Tarakan" },
    { icon: "🦜", text: "Kakatua Ambon" },
    { icon: "🐦", text: "Burung Gorontalo" },
    { icon: "🐢", text: "Kura-kura Surabaya" },
    { icon: "🐊", text: "Buaya Medan" },
    { icon: "🦈", text: "Hiu Jember" },
    { icon: "🐓", text: "Ayam Kediri" },
    { icon: "🐬", text: "Lumba-lumba Probolinggo" },
    { icon: "🐦", text: "Burung Sorong" },
    { icon: "🕊️", text: "Merpati Bekasi" },
    { icon: "🐱", text: "Kucing Kudus" },
    { icon: "🦌", text: "Rusa Palembang" },
    { icon: "🐂", text: "Banteng Magelang" },
    { icon: "🐸", text: "Katak Tasikmalaya" },
    { icon: "🐺", text: "Serigala Kudus" },
    { icon: "🪱", text: "Cacing Cirebon" },
    { icon: "🦅", text: "Gagak Tasikmalaya" },
    { icon: "🕷️", text: "Laba-laba Bekasi" },
    { icon: "🐅", text: "Harimau Pontianak" },
    { icon: "🐑", text: "Domba Denpasar" },
    { icon: "🦘", text: "Kanguru Semarang" },
    { icon: "🐨", text: "Koala Sidoarjo" },
    { icon: "🐍", text: "Ular Cianjur" },
    { icon: "🐭", text: "Tikus Pekanbaru" },
    { icon: "🐬", text: "Lumba-lumba Jayapura" },
    { icon: "🐓", text: "Ayam Balikpapan" },
    { icon: "🐢", text: "Kura-kura Tanjungpinang" },
    { icon: "🕊️", text: "Merpati Padang" },
    { icon: "🦅", text: "Elang Tarakan" },
    { icon: "🐿️", text: "Musang Cirebon" },
    { icon: "🐅", text: "Harimau Tasikmalaya" },
    { icon: "🐱", text: "Kucing Banda Aceh" },
    { icon: "🪱", text: "Cacing Probolinggo" },
    { icon: "🐸", text: "Katak Bekasi" },
    { icon: "🦆", text: "Bebek Surabaya" },
    { icon: "🐭", text: "Tikus Bekasi" },
    { icon: "🦅", text: "Gagak Tarakan" },
    { icon: "🐊", text: "Buaya Pekanbaru" },
    { icon: "🐬", text: "Lumba-lumba Tarakan" },
    { icon: "🐦", text: "Burung Batam" },
    { icon: "🦈", text: "Hiu Balikpapan" },
    { icon: "🦅", text: "Elang Sorong" },
    { icon: "🦌", text: "Rusa Malang" },
    { icon: "🐅", text: "Harimau Jombang" },
    { icon: "🕷️", text: "Laba-laba Batam" },
    { icon: "🐨", text: "Koala Manado" },
    { icon: "🐘", text: "Gajah Batam" },
    { icon: "🦗", text: "Belalang Kudus" },
    { icon: "🐢", text: "Kura-kura Banda Aceh" },
    { icon: "🐿️", text: "Musang Palembang" },
    { icon: "🪱", text: "Cacing Semarang" },
    { icon: "🦒", text: "Jerapah Tarakan" },
    { icon: "🐸", text: "Katak Bandung" },
    { icon: "🕊️", text: "Merpati Sidoarjo" },
    { icon: "🐺", text: "Serigala Tasikmalaya" },
    { icon: "🐊", text: "Buaya Surabaya" },
];
