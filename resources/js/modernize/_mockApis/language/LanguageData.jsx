import mock from '../mock';

import FlagEn from '@modernize/assets/images/flag/icon-flag-en.svg';
import FlagFr from '@modernize/assets/images/flag/icon-flag-fr.svg';
import FlagCn from '@modernize/assets/images/flag/icon-flag-cn.svg';
import FlagSa from '@modernize/assets/images/flag/icon-flag-sa.svg';
import FlagVn from '@modernize/assets/images/flag/icon-flag-vn.svg';

const LanguageData = [
    {
        id: 1,
        flagname: 'English',
        icon: FlagEn,
      },
      {
        id: 2,
        flagname: 'French',
        icon: FlagFr,
      },
      {
        id: 3,
        flagname: 'Vietnamese',
        icon: FlagVn,
      },
      {
        id: 4,
        flagname: 'Chinese',
        icon: FlagCn,
      },
      {
        id: 5,
        flagname: 'Arabic (Sudan)',
        icon: FlagSa,
      },
];

mock.onGet('/api/data/language/LanguageData').reply(() => {
  return [200, LanguageData];
});
export default LanguageData;
