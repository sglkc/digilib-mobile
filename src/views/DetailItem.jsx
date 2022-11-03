import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import DetailItem from '@/components/DetailItem';
import Axios from '@/func/Axios';

export default function DetailItemView() {
  const item = useSelector((state) => state.item);

  useEffect(() => {
    Axios.post('/histories/' + item.item_id)
      .then(() => false)
      .catch(() => false);
  }, [item.item_id]);

  return <DetailItem item={item} />;
}
