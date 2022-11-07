import { ScrollView, Text, TouchableWithoutFeedback, View } from 'react-native';
import TextButton from '@/components/TextButton';

export default function Kebijakan({ navigation }) {
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
          <Text style={styles.bold}>Kebijakan Privasi</Text>
          <Text style={styles.normal}>
Kami berkomitmen untuk menjaga keamanan dan kerahasiaan data pribadi yang diberikan Pengguna saat mengakses dan menggunakan Platform (“Data Pribadi”). Dalam hal ini, Data Pribadi diberikan oleh Pengguna secara sadar dan tanpa adanya tekanan atau paksaan dari pihak manapun, serta ikut bertanggung jawab penuh dalam menjaga kerahasiaan Data Pribadi tersebut.{'\n'}
Anda dengan ini menyatakan bahwa Anda telah membaca dan memahami secara penuh konten dan sebab-akibat dari Kebijakan Privasi kami, dan Anda tidak dapat secara paksa mencabut kembali persetujuan Anda yang telah terikat dengan ketentuan-ketentuan dari Kebijakan Privasi kami.
          </Text>
          <Text style={styles.bold}>Tindakan yang kami anggap perlu</Text>
          <Text style={styles.normal}>
Apabila Kami mengetahui atau mempunyai alasan yang cukup untuk menduga bahwa Anda telah melakukan tindakan asusila, pelanggaran, kejahatan atau tindakan lain yang bertentangan dengan Syarat dan Ketentuan ini dan/atau peraturan perundang-undangan yang berlaku, baik yang dirujuk dalam Syarat dan Ketentuan ini atau tidak, maka Kami berhak untuk dan dapat membekukan Akun, baik sementara atau permanen, atau menghentikan akses Anda terhadap Platform, melakukan pemeriksaan, menuntut ganti kerugian, melaporkan kepada pihak berwenang dan/atau mengambil tindakan lain yang kami anggap perlu, termasuk tindakan hukum pidana maupun perdata.{'\n'}
DIGILIB JALAN RAHMAT dapat mengungkapkan informasi pengguna kepada lembaga penegak hukum atau pihak yang berwenang lainnya jika dibutuhkan oleh hukum dan peraturan perundang-undangan yang berlaku tanpa persetujuan lebih lanjut atau pemberitahuan kepada pengguna. Kami bekerja sama dengan penegakan hukum bilamana perlu dan sejauh yang diwajibkan oleh hukum.
          </Text>
          <Text style={styles.bold}>Link ke Platform Kami</Text>
          <Text style={styles.normal}>
  • Anda dapat membuat link ke Platform Kami, asalkan Anda melakukannya dengan cara yang adil dan legal serta tidak merusak reputasi Kami atau mengambil keuntungan darinya.{'\n'}
  • Anda tidak diperbolehkan membuat link sedemikian rupa sehingga memberi kesan adanya suatu asosiasi, persetujuan, ataupun dukungan dari Kami ketika hal tersebut tidak benar adanya.{'\n'}
  • Anda tidak diperbolehkan membuat link sedemikian rupa sehingga memberi kesan adanya suatu asosiasi, persetujuan, ataupun dukungan dari Kami ketika hal tersebut tidak benar adanya.{'\n'}
  • Anda tidak diperbolehkan membuat link ke Platform Kami pada situs web mana pun yang tidak dimiliki oleh Anda.{'\n'}
  • Kami berhak mencabut izin pembuatan link tanpa pemberitahuan.{'\n'}
  • Situs web yang Anda berikan link harus mematuhi segala aspek standar konten yang telah ditetapkan melalui Syarat dan Ketentuan Kami.</Text>
          <Text style={styles.bold}>Tautan Kepada Situs Pihak Ketiga</Text>
          <Text style={styles.normal}>Kami dapat menyediakan tautan untuk situs pihak ketiga; namun, kami tidak bertanggung jawab mengenai isi dari situs tersebut atau ketentuan penggunaannya atau kebijakan privasinya. Mohon berhati-hati membaca ketentuan layanan dan kebijakan privasi dari semua situs tersebut sebelum anda menggunakannya. Anda menanggung risiko dari setiap penggunaan situs pihak ketiga tersebut.</Text>
          <Text style={styles.bold}>Keadaan Kahar</Text>
          <Text style={styles.normal}>Kami dapat diinterupsi oleh kejadian di luar kewenangan atau kontrol kami, termasuk namun tidak terbatas pada bencana alam, gangguan listrik, gangguan telekomunikasi, kebijakan pemerintah, dan lain-lain (“Keadaan Kahar”). Anda setuju untuk membebaskan dan melepaskan Yayasan Jalan Rahmat dari setiap klaim dan tuntutan, jika kami tidak dapat memfasilitasi akses dan/atau penggunaan Platform, baik sebagian maupun seluruhnya, karena suatu Keadaan Kahar.</Text>
          <Text style={styles.bold}>Informasi Kontak Kami</Text>
          <Text style={styles.normal}>Jika ada pertanyaan mengenai Syarat dan Ketentuan Penggunaan kami, anda dapat menghubungi DIGILIB JALAN RAHMAT melalui surat elektronik ke jalanrahmatid@gmail.com.</Text>
        </View>
      </TouchableWithoutFeedback>
    </ScrollView>
  );
}
