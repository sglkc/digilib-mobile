import { useEffect } from 'react';
import DetailItem from '@/components/DetailItem';
import Axios from '@/func/Axios';

export default function DetailItemView() {
  useEffect(() => {
    Axios.post('/histories/' + item.item_id)
      .then(() => false)
      .catch(() => false);
  }, [item.item_id]);

  return <DetailItem item={item} setItem={setItem} />;
}
