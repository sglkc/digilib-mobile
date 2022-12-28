import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import BottomNavbar from '@/components/BottomNavbar';
import ItemSort from '@/components/ItemSort';
import ItemScroller from '@/components/ItemScroller';
import ItemType from "@/components/ItemType";
import ViewContainer from '@/components/ViewContainer';
import Axios from '@/func/Axios';

export default function EtalaseView() {
  const [quote, setQuote] = useState(null);

  useEffect(() => {
    Axios.get('/quotes/random')
      .then((res) => setQuote(res.data.result))
      .catch(() => false);
  }, []);

  const Component = (
    <>
      { quote &&
        <View style={styles.title}>
          <Text style={styles.quote.title}>Quotes Harian</Text>
          <View>
            <Text style={styles.quote.mark}>“</Text>
            <Text style={styles.quote.text}>{ quote.text }</Text>
            <Text style={[styles.quote.mark, { bottom: 0, right: 0 }]}>„</Text>
          </View>
          <Text style={styles.quote.source}>{ quote.author }</Text>
        </View>
      }
      <View style={styles.container}>
        <ItemType />
        <ItemSort style={{ marginHorizontal: 32 }} />
        <ItemScroller url="/items" />
        <BottomNavbar selected={0} />
      </View>
    </>
  );

  return <ViewContainer component={Component} noPadding transparent />;
}
const styles = StyleSheet.create({
  title: {
    paddingBottom: 16,
    paddingHorizontal: 32,
  },
  quote: {
    title: {
      fontWeight: 'bold',
      color: 'white',
    },
    mark: {
      position: 'absolute',
      color: '#eee',
      fontWeight: 'bold',
      fontSize: 32,
    },
    text: {
      marginVertical: 8,
      paddingTop: 16,
      fontSize: 16,
      fontWeight: '600',
      color: 'white',
      lineHeight: 22,
    },
    source: {
      marginTop: 8,
      fontWeight: '600',
      color: 'white',
    },
  },
  container: {
    paddingTop: 16,
    flex: 3,
    backgroundColor: 'white',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
  },
});
