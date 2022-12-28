import BottomNavbar from '@/components/BottomNavbar';
import ItemType from "@/components/ItemType";
import ItemScroller from '@/components/ItemScroller';
import ViewContainer from '@/components/ViewContainer';

export default function TandaiView() {
  const Component = (
    <>
      <ItemType />
      <ItemScroller url="/bookmarks" bookmarkOnly />
      <BottomNavbar selected={2} />
    </>
  );

  return <ViewContainer component={Component} noPadding />
}
