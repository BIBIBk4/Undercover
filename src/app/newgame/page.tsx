'use client';

import AddJoueur from '@/components/newgame';
import { Provider, useSelector } from 'react-redux';
import store from '@/components/store';

function Page() {

  return (
    <Provider store={store}>
      <AddJoueur />
    </Provider>
  );
}

export default Page;