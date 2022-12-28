import BottomNavbar from '@/components/BottomNavbar';
import ItemType from "@/components/ItemType";
import ItemScroller from '@/components/ItemScroller';
import ViewContainer from '@/components/ViewContainer';

export default function RiwayatView() {
  const Component = (
    <>
      <ItemType />
      <ItemScroller url="/histories" />
      <BottomNavbar />
    </>
  );

  return <ViewContainer component={Component} noPadding />
}
