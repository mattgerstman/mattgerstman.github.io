import * as React from 'react';

import {storiesOf} from '@storybook/react';
import {Release} from './index';

storiesOf('Release', module).add('', () => (
  <Release
    artist="Green Day"
    discogsLink=""
    quantity={0}
    title="Amerian Idiot"
    thumb="https://static.webshopapp.com/shops/163277/files/076691837/image.jpg"
  />
));
