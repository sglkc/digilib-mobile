import { View } from 'react-native';
import BottomNavbar from '@/components/BottomNavbar';
import CategoryScroller from "@/components/CategoryScroller";
import ItemScroller from '@/components/ItemScroller';
import ViewContainer from '@/components/ViewContainer';

export default function Tandai() {
  const Component = (
    <>
      <CategoryScroller style={{ flexGrow: 0 }} />
      <ItemScroller url="/bookmarks" bookmarkOnly />
      <View
        style={{
          position: 'absolute',
          alignItems: 'center',
          bottom: 0,
          left: 0,
          right: 0
        }}
      >
        <BottomNavbar selected={2} />
      </View>
    </>
  );

  return <ViewContainer component={Component} noPadding />
}
