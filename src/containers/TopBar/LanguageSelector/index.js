import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import get from 'lodash/get';
import { useIntl } from 'react-intl';

import Dropdown from 'components/BasicComponent/Dropdown';
import Menu from 'components/BasicComponent/Menu';
import {
  languageActions,
  languageSliceName,
  initialState,
} from 'containers/LanguageProviderContainer/slices';
import { appLocales } from 'translations/i18n';
import { createTranslatedText } from 'utils/text';

const { Item } = Menu;

const LanguageSelector = () => {
  const dispatch = useDispatch();
  const intl = useIntl();
  const getText = createTranslatedText('common.language', intl);

  const locale = useSelector((state) =>
    get(state, [languageSliceName, 'locale'], initialState.locale),
  );

  const DropdownMenu = () => (
    <div className="dropdown-menu">
      <Menu>
        <Item>
          <a
            role="button"
            onClick={() =>
              dispatch(languageActions.changeLocale(appLocales[0]))
            }
            tabIndex={0}
          >
            <span>{appLocales[0]}</span> <span>{getText(appLocales[0])}</span>
          </a>
        </Item>
        <Item>
          <a
            role="button"
            onClick={() =>
              dispatch(languageActions.changeLocale(appLocales[1]))
            }
            tabIndex={0}
          >
            <span>{appLocales[1]}</span> <span>{getText(appLocales[1])}</span>
          </a>
        </Item>
      </Menu>
    </div>
  );

  return (
    <Dropdown
      overlay={<DropdownMenu />}
      placement="bottomRight"
      overlayClassName="overlay-dropdown-top"
    >
      <span>{locale}</span>
    </Dropdown>
  );
};

export default LanguageSelector;
