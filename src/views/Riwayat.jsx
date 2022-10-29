import { View } from 'react-native';
import BottomNavbar from '@/components/BottomNavbar';
import ItemType from "@/components/ItemType";
import ItemScroller from '@/components/ItemScroller';
import ViewContainer from '@/components/ViewContainer';

export default function Riwayat() {
  const Component = (
    <>
      <ItemType />
      <ItemScroller url="/histories" />
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
