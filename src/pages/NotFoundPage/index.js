import React from 'react';

import './styles.scss';

import Button from 'components/BasicComponent/Button';
import errorIllustration from 'assets/icon/error-illustration.svg';

function NotFoundPage() {
  return (
    <div className="notFoundPage">
      <div className="notFoundPage__img">
        <img className="error-img" src={errorIllustration} alt="not found" />
      </div>
      <div className="notFoundPage__content">
        <div className="notFoundPage__title">404</div>
        <div className="notFoundPage__desc">
          Oops. This page has gone missing.
        </div>
        <div className="notFoundPage__note">
          You may have mistyped the address or the page may have moved.
        </div>
        <Button>Back to home</Button>
      </div>
    </div>
  );
}

export default NotFoundPage;
