import { View } from 'react-native';
import BottomNavbar from '@/components/BottomNavbar';
import ItemType from "@/components/ItemType";
import ItemScroller from '@/components/ItemScroller';
import ViewContainer from '@/components/ViewContainer';
import Axios from '@/func/Axios';

export default function Detail({ route, navigation }) {
  const { search } = route.params;
  const url = Axios.getUri({
    url: '/categories/items',
    params: { search }
  });

  const Component = (
    <>
      <ItemType />
      <ItemScroller url={url} />
      <View
        style={{
          position: 'absolute',
          alignItems: 'center',
          bottom: 0,
          left: 0,
          right: 0
        }}
      >
        <BottomNavbar selected={1} />
      </View>
    </>
  );

  return <ViewContainer component={Component} noPadding />
}
