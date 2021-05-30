import React from 'react';
import { useIntl } from 'react-intl';

import { createTranslatedText } from 'utils/text';
import { LARGE } from 'constants/common';

import Input from 'components/BasicComponent/Input';

import '../../styles.scss';

const { Search } = Input;

const SearchBox = (props) => {
  const intl = useIntl();
  const getTextDomain = createTranslatedText('services.domain', intl);
  const getTextCommon = createTranslatedText('common', intl);
  const { onSearch } = props;
  return (
    <div className="group-wrapper">
      <Search
        placeholder={getTextDomain('placeHolderSearch')}
        allowClear
        enterButton={getTextCommon('action.search')}
        onSearch={onSearch}
        size={LARGE}
      />
    </div>
  );
};

export default SearchBox;
