import BottomNavbar from '@/components/BottomNavbar';
import ItemType from "@/components/ItemType";
import ItemScroller from '@/components/ItemScroller';
import ViewContainer from '@/components/ViewContainer';
import Axios from '@/func/Axios';

export default function DetailView({ route }) {
  const { search } = route.params;
  const url = Axios.getUri({
    url: '/categories/items',
    params: { search }
  });

  const Component = (
    <>
      <ItemType />
      <ItemScroller url={url} />
      <BottomNavbar selected={1} />
    </>
  );

  return <ViewContainer component={Component} noPadding />
}
