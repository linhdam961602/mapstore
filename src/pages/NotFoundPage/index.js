import React from 'react';
import { Button, Result } from 'antd';
import { useIntl } from 'react-intl';

import history from 'utils/history';
import FluidLayout from 'components/LayoutComponent/FluidLayout';
import { createTranslatedText } from 'utils/text';

import './styles.scss';
import { HOME_URI } from 'constants/routes';

const NotFoundPage = () => {
  const intl = useIntl();
  const getText = createTranslatedText('notFound', intl);
  return (
    <FluidLayout>
      <Result
        status="404"
        title="404"
        subTitle={getText('subTitle')}
        className="notfound"
        extra={
          <Button type="primary" onClick={() => history.push(HOME_URI)}>
            {getText('back')}
          </Button>
        }
      />
    </FluidLayout>
  );
};

export default NotFoundPage;
