import { ScrollView, Text, TouchableWithoutFeedback, View } from 'react-native';
import TextButton from '@/components/TextButton';

export default function SyaratView({ navigation }) {
  const styles = {
    normal: { fontSize: 16, lineHeight: 25, textAlign: 'justify' },
    bold: { marginTop: 16, fontSize: 20, fontWeight: 'bold' }
  };

  return (
    <ScrollView>
      <TextButton
        style={{
          padding: 32,
          paddingBottom: 0,
        }}
        styleText={{ fontWeight: 'bold' }}
        onPress={() => navigation.goBack()}
      >
        Kembali
      </TextButton>
      <TouchableWithoutFeedback>
        <View style={{ padding: 32, paddingTop: 0 }}>
          <Text style={styles.bold}>Syarat & Ketentuan</Text>
          <Text style={[styles.normal, { fontWeight: 'bold' }]}>MOHON UNTUK MEMBACA SELURUH SYARAT DAN KETENTUAN PENGGUNAAN SERTA KEBIJAKAN PRIVASI YANG TERLAMPIR DENGAN CERMAT DAN SEKSAMA SEBELUM MENGGUNAKAN SETIAP FITUR DAN/ATAU LAYANAN YANG TERSEDIA DALAM PLATFORM DIGILIB JALAN RAHMAT.</Text>
          <Text style={styles.normal}>
Syarat dan Ketentuan Penggunaan (“Ketentuan Penggunaan”) ini merupakan suatu perjanjian sah terkait tata cara dan persyaratan penggunaan fitur dan/atau layanan (“Layanan”) PLATFORM DIGILIB JALAN RAHMAT (“Platform”) antara Pengguna (“Anda”) dengan pengelola Platform, yaitu Yayasan Jalan Rahmat (“Kami”). Dengan mengunduh dan/atau memasang dan/atau menggunakan Platform dan/atau menikmati Layanan Kami, Anda setuju bahwa Anda telah membaca, memahami, mengetahui, menerima, dan menyetujui seluruh informasi, syarat-syarat, dan ketentuan-ketentuan penggunaan Platform yang terdapat dalam Ketentuan Penggunaan ini.{'\n'}
Kami dapat mengubah Syarat dan Ketentuan ini dari waktu ke waktu, perubahan akan diberitahukan kepada Anda melalui email, melalui pemberitahuan yang diunggah di Layanan, atau sebagaimana yang diwajibkan oleh hukum yang berlaku; dan Anda setuju bahwa Anda bertanggung jawab untuk meninjau Syarat dan Ketentuan ini secara berkala. Penggunaan secara berkelanjutan oleh Anda atas layanan yang diberikan dalam Platform setelah perubahan dan/atau penambahan Syarat dan Ketentuan yang berlaku, akan dianggap sebagai persetujuan dan penerimaan Anda atas perubahan dan/atau penambahan tersebut. Anda dapat menyampaikan keberatan atas perubahan dan/atau penambahan atas Syarat dan Ketentuan yang berlaku yang dianggap merugikan Anda secara komersial dan material dalam jangka waktu 14 (empat belas) hari kalender sejak perubahan dan/atau penambahan tersebut dipublikasikan. Kami berhak untuk menghentikan akses Anda terhadap Platform dalam hal Anda berkeberatan atas perubahan dan/atau penambahan Syarat dan Ketentuan yang berlaku tersebut.{'\n'}
Sehubungan dengan hal tersebut di atas, pengguna setuju atas syarat dan ketentuan seperti sebagaimana tercantum di bawah ini:
  </Text>
  <Text style={styles.bold}>1. Penggunaan Platform Digilib Jalan Rahmat</Text>
  <Text style={styles.normal}>Akses dan penggunaan PLATFORM DIGILIB JALAN RAHMAT tunduk pada ketentuan dalam Ketentuan Penggunaan ini. Anda mempunyai kebebasan penuh untuk memilih menggunakan PLATFORM DIGILIB JALAN RAHMAT atau aplikasi lain, menggunakan Layanan yang tersedia pada PLATFORM DIGILIB JALAN RAHMAT atau tidak, atau berhenti menggunakan PLATFORM DIGILIB JALAN RAHMAT.</Text>
<Text style={styles.bold}>2. Akun</Text>
<Text style={styles.normal}>
Dengan mendaftar dan/atau menggunakan Platform Kami, maka Anda dan pihak perusahaan dianggap telah membaca, mengerti, memahami dan menyetujui semua isi dalam Syarat dan Ketentuan ini. Sebelum menggunakan Platform, kami meminta Anda untuk menyetujui Syarat dan Ketentuan serta Kebijakan Privasi untuk Anda dapat mendaftarkan diri Anda dengan memberikan informasi yang Kami butuhkan. Saat melakukan pendaftaran, Kami akan meminta Anda untuk memberikan akses nama lengkap, gambar profil, alamat dan alamat surat elektronik Anda. Kami juga dapat menghentikan penggunaan Platform jika dikemudian hari data-data yang Anda berikan kepada Kami terbukti tidak benar. Keamanan dan kerahasiaan akun Anda, termasuk namun tidak terbatas pada seluruh data pribadi yang Anda berikan kepada kami melalui formulir pendaftaran pada Platform kami, sepenuhnya merupakan tanggung jawab pribadi Anda. Segala kerugian dan risiko yang timbul akibat atau sehubungan dengan kelalaian Anda dalam menjaga keamanan dan kerahasiaan akun Anda ditanggung oleh Anda dan perusahaan atau instansi anda. Dengan demikian, kami akan menganggap setiap penggunaan atau pesanan yang dilakukan melalui akun Anda sebagai permintaan yang sah dari Anda.{'\n'}
Sebelum menggunakan Platform, kami meminta Anda untuk menyetujui Syarat dan Ketentuan serta Kebijakan Privasi untuk Anda dapat mendaftarkan diri Anda dengan memberikan informasi yang Kami butuhkan. Saat melakukan pendaftaran, Kami akan meminta Anda untuk memberikan akse nama lengkap, gambar profil, alamat dan alamat surat elektronik Anda. Kami juga dapat menghentikan penggunaan Platform jika dikemudian hari data-data yang Anda berikan kepada Kami terbukti tidak benar.{'\n'}
Keamanan dan kerahasiaan akun Anda, termasuk namun tidak terbatas pada seluruh data pribadi yang Anda berikan kepada kami melalui formulir pendaftaran pada Platform kami, sepenuhnya merupakan tanggung jawab pribadi Anda. Segala kerugian dan risiko yang timbul akibat atau sehubungan dengan kelalaian Anda dalam menjaga keamanan dan kerahasiaan akun Anda ditanggung oleh Anda dan perusahaan atau instansi anda. Dengan demikian, kami akan menganggap setiap penggunaan atau pesanan yang dilakukan melalui akun Anda sebagai permintaan yang sah dari Anda.
  </Text>
<Text style={styles.bold}>3. Layanan</Text>
<Text style={styles.normal}>Untuk menggunakan layanan Digilib Jalan Rahmat, Anda harus memiliki akses Internet dan perangkat yang mendukung Digilib Jalan Rahmat.</Text>
<Text style={styles.bold}>4. Kehilangan Data</Text>
<Text style={styles.normal}>
Anda menggunakan layanan ini dengan resiko Anda sendiri. Kami tidak bertanggung jawab atas file yang hilang dan atau rusak yang mungkin terjadi (termasuk, misalnya, dari sistem crash, pelanggaran keamanan, atau kegagalan hard disk dan sistem). Anda setuju untuk melakukan kehati-hatian saat pembuatan, hapus dan edit data anda di PLATFORM DIGILIB JALAN RAHMAT.{'\n'}
DIGILIB JALAN RAHMAT memiliki 2 tingkat perlindungan data pada server kami, DIGILIB JALAN RAHMAT menerapkan fitur soft delete pada sistem sehingga ketika anda menghapus atau terjadi kesalahan di sisi pengguna, data tetap masih tersimpan di server kami.
</Text>
<Text style={styles.bold}>5. Penggantian Kerugian</Text>
<Text style={styles.normal}>Anda setuju bahwa anda harus membela, melindungi, menyelamatkan dan tidak membahayakan DIGILIB JALAN RAHMAT dari setiap dan semua tuntutan, kewajiban, kerugian, biaya dan klaim, termasuk biaya pengacara yang wajar yang menyerang/menentang DIGILIB JALAN RAHMAT, agen, pelanggan, petugas dan karyawan, yang mungkin saja disebabkan karena layanan yang diberikan atau dilakukan atau semua produk yang dijual oleh pelanggan, agen, karyawan atau yang diberikan tugas. Anda setuju untuk membela, mengganti kerugian dan tidak membahayakan DIGILIB JALAN RAHMAT terhadap kewajiban yang timbul dari; (1) Setiap cedera yang terjadi kepada orang atau harta yang disebabkan oleh produk yang dijual atau didistribusikan terkait dengan DIGILIB JALAN RAHMAT; (2) Semua atau setiap materi yang diberikan oleh pelanggan yang melanggar atau diduga melanggar hak-hak kepemilikan pihak ketiga; (3) pelanggaran hak cipta dan (4) semua produk cacat yang dijual kepada pelanggan dari server DIGILIB JALAN RAHMAT.</Text>
<Text style={styles.bold}>6. Disclaimer (Penolakan)</Text>
<Text style={styles.normal}>DIGILIB JALAN RAHMAT tidak bertanggung jawab atas segala kerusakan yang mungkin terjadi pada bisnis Anda. DIGILIB JALAN RAHMAT tidak memberikan jaminan apapun, baik yang tersurat ataupun yang tersirat pada layanan yang kami berikan. Hal ini termasuk hilangnya data yang disebabkan karena penundaan, tidak adanya pengiriman, pengiriman yang salah dan setiap dan semua gangguan layanan yang disebabkan oleh DIGILIB JALAN RAHMAT dan karyawannya.</Text>
<Text style={styles.bold}>Informasi Kontak Kami</Text>
<Text style={styles.normal}>Jika ada pertanyaan mengenai Syarat dan Ketentuan Penggunaan kami, anda dapat menghubungi DIGILIB JALAN RAHMAT melalui surat elektronik ke jalanrahmatid@gmail.com.</Text>
        </View>
      </TouchableWithoutFeedback>
    </ScrollView>
  );
}
