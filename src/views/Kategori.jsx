import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View
} from 'react-native';

export default function Kategori() {
  const categories = [
    {
      name: 'Agama',
      items: [
        {
          cover: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1332922051l/13563593.jpg',
          title: 'Doa Bukan Lampu Aladin',
          author: 'Jalaluddin Rakhmat',
        },
        {
          cover: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.v-3L7X7L07odE4h-saoSOQHaKF%26pid%3DApi&f=1',
          title: 'Meraih Cinta Ilahi',
          author: 'Jalaluddin Rakhmat',
        },
        {
          cover: 'https://img.yumpu.com/62913595/1/500x640/belajar-cerdas-belajar-berbasiskan-otak-pdfdrivecom-.jpg',
          title: 'Belajar Cerdas: Belajar Berbasiskan Otak',
          author: 'Jalaluddin Rakhmat',
        },
        {
          cover: 'https://1.bp.blogspot.com/-VeshmUawE5c/YIFK8hNU-KI/AAAAAAAAB9k/uQkTlWXDMoE3t59K7iAzKzXbmfFTeNo2QCLcBGAsYHQ/s457/DAHULUKAN%2BAKHLAK%2BDI%2BATAS%2BFIQIH.jpg',
          title: 'Dahulukan Akhlak Di Atas Fiqih',
          author: 'Jalaluddin Rakhmat',
        },
      ],
    },
    {
      name: 'Sains & Pendidikan',
      items: [
        {
          cover: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1332922051l/13563593.jpg',
          title: 'Doa Bukan Lampu Aladin',
          author: 'Jalaluddin Rakhmat',
        },
        {
          cover: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.v-3L7X7L07odE4h-saoSOQHaKF%26pid%3DApi&f=1',
          title: 'Meraih Cinta Ilahi',
          author: 'Jalaluddin Rakhmat',
        },
        {
          cover: 'https://img.yumpu.com/62913595/1/500x640/belajar-cerdas-belajar-berbasiskan-otak-pdfdrivecom-.jpg',
          title: 'Belajar Cerdas: Belajar Berbasiskan Otak',
          author: 'Jalaluddin Rakhmat',
        },
        {
          cover: 'https://1.bp.blogspot.com/-VeshmUawE5c/YIFK8hNU-KI/AAAAAAAAB9k/uQkTlWXDMoE3t59K7iAzKzXbmfFTeNo2QCLcBGAsYHQ/s457/DAHULUKAN%2BAKHLAK%2BDI%2BATAS%2BFIQIH.jpg',
          title: 'Dahulukan Akhlak Di Atas Fiqih',
          author: 'Jalaluddin Rakhmat',
        },
      ],
    },
  ];

  return (
    <ScrollView>
      { categories.map((category, index) => (
        <View key={index} style={styles.category}>
          <View style={styles.top}>
            <Text style={styles.title}>{ category.name }</Text>
            <TouchableOpacity onPress={() => true}>
              <Image
                source={require('assets/arrow-left.png')}
                style={styles.titleImage}
              />
            </TouchableOpacity>
          </View>
          <ScrollView style={styles.scroll} horizontal={true}>
            { category.items.map((item, index) => (
              <View
                key={index}
                style={index === 0 ?
                    { marginLeft: 24 }
                    : index === category.items.length - 1 ?
                    { marginRight: 24 }
                    : {}
                }
              >
                <Pressable android_ripple={{ color: 'lightgrey' }}>
                  <View style={styles.itemContainer}>
                    <Image
                      style={styles.itemCover}
                      source={{ uri: item.cover }}
                    />
                    <Text style={styles.itemTitle}>{ item.title }</Text>
                    <Text style={styles.itemAuthor}>{ item.author }</Text>
                  </View>
                </Pressable>
              </View>
            )
            )}
          </ScrollView>
        </View>
      )
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  top: {
    paddingHorizontal: 32,
    marginTop: 8,
    marginBottom: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  titleImage: {
    width: 38,
    height: 16,
    tintColor: 'green',
    transform: [{ rotate: '180deg' }],
  },
  scroll: {
    flexDirection: 'row',
  },
  itemContainer: {
    marginHorizontal: 8,
    paddingVertical: 8,
    width: 175,
  },
  itemCover: {
    marginBottom: 8,
    width: 175,
    height: 250,
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'green',
  },
  itemAuthor: {
    fontWeight: 'bold',
    color: '#333',
  },
});
