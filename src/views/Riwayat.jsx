import { ScrollView, Text, View } from 'react-native';
import BottomNavbar from '@/components/BottomNavbar';
import CategoryScroller from "@/components/CategoryScroller";
import Item from '@/components/Item';
import ViewContainer from '@/components/ViewContainer';

export default function () {
  const items = [
    {
      cover: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1332922051l/13563593.jpg',
      title: 'Doa Bukan Lampu Aladin',
      author: 'Jalaluddin Rakhmat',
      category: ['Doa', 'Agama'],
      bookmark: false,
    },
    {
      cover: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.v-3L7X7L07odE4h-saoSOQHaKF%26pid%3DApi&f=1',
      title: 'Meraih Cinta Ilahi',
      author: 'Jalaluddin Rakhmat',
      category: ['Agama'],
      bookmark: false,
    },
    {
      cover: 'https://img.yumpu.com/62913595/1/500x640/belajar-cerdas-belajar-berbasiskan-otak-pdfdrivecom-.jpg',
      title: 'Belajar Cerdas: Belajar Berbasiskan Otak',
      author: 'Jalaluddin Rakhmat',
      category: ['Sains dan Pendidikan'],
      bookmark: false,
    },
    {
      cover: 'https://1.bp.blogspot.com/-VeshmUawE5c/YIFK8hNU-KI/AAAAAAAAB9k/uQkTlWXDMoE3t59K7iAzKzXbmfFTeNo2QCLcBGAsYHQ/s457/DAHULUKAN%2BAKHLAK%2BDI%2BATAS%2BFIQIH.jpg',
      title: 'Dahulukan Akhlak Di Atas Fiqih',
      author: 'Jalaluddin Rakhmat',
      category: ['Agama'],
      bookmark: false,
    },
  ];

  const Component = (
    <>
      <CategoryScroller style={{ flexGrow: 0 }} />
      <ScrollView style={{ paddingHorizontal: 24, flexGrow: 1 }}>
        { items.map((item, index) => (
          <Item
            key={index}
            author={item.author}
            bookmark={item.bookmark}
            category={item.category}
            cover={item.cover}
            title={item.title}
          />
        ))
        }
        <View style={{ paddingVertical: 32 }} />
      </ScrollView>
      <View
        style={{
          position: 'absolute',
          alignItems: 'center',
          bottom: 0,
          left: 0,
          right: 0
        }}
      >
        <BottomNavbar />
      </View>
    </>
  );

  return <ViewContainer component={Component} noPadding />
}
