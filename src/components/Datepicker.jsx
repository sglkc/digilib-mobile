import { useRef, useState } from 'react';
import { Pressable } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import TextInput from '@/components/TextInput';

export default function Datepicker({ onChangeValue }) {
  const tanggal_lahir = useRef('');
  const [datepicker, setDatepicker] = useState(false);

  function onChange(e) {
    if (e.type !== 'set') return setDatepicker(false);

    const timestamp = new Date(e.nativeEvent.timestamp);
    const date = new Date(
      timestamp.getTime() - timestamp.getTimezoneOffset() * 60000
    );

    const formatted = date.toISOString().substr(0, 10);

    tanggal_lahir.current = formatted;

    setDatepicker(false);
    onChangeValue(formatted);
  }

  return (
    <>
      <Pressable
        style={{ width: '100%' }}
        onPress={() => (setDatepicker(true))}
      >
        <TextInput
          style={{ marginVertical: 12, color: 'black' }}
          placeholder="Tanggal Lahir"
          editable={false}
          value={tanggal_lahir.current}
        />
      </Pressable>
      { datepicker &&
      <DateTimePicker
        maximumDate={new Date()}
        value={new Date(1999, 0)}
        onChange={onChange}
      />
      }
    </>
  );
}
