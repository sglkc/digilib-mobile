import { useState } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Button from '@/components/Button';
import DetailContainer from '@/components/DetailContainer';
import Chip from '@/components/Item/Chip';

export default function () {
  const initialItem = {
    title: 'Neuro Psikologi',
    author: 'Jalaludin Rakhmat',
    description:
    'Ed ut perspiciatis unde omnis iste natus error sit voluptatem ' +
    'accusantium doloremque laudantium.',
    categories: ['Sains dan Pendidikan', 'Psikologi', 'Komunikasi', 'Neurosains'],
    cover: 'http://cdn.medicalxpress.com/newman/gfx/news/2014/0318_cogsci-grades-orig.jpg',
    media: '',
    type: 'book',
    bookmark: false,
  };
  const [item, setItem] = useState(initialItem);

  return (
    <DetailContainer item={item} setItem={setItem} />
  );
}
