'use client';
import {Provider} from 'react-redux';
import Card from '@/components/card';
import store from '@/components/store';

function Page() {
  const game = store.getState()[0];
  return (
    <Provider store={store}>
       <Card />
    </Provider>
  );
}

export default Page;