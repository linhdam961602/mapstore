import { useIntl } from 'react-intl';

import styles from './styles.module.scss';

import visa from 'assets/logo/visa.jpg';

import mastercard from 'assets/logo/mastercard.jpg';

import jcb from 'assets/logo/jcb.jpg';

import vnpay from 'assets/logo/vnpay.jpg';

import { createTranslatedText } from 'utils/text';
import Row from 'components/BasicComponent/Grid/Row';
import Col from 'components/BasicComponent/Grid/Col';
import Image from 'components/BasicComponent/Image';
import bct from 'assets/logo/bct.png';
import tienmat from 'assets/logo/tienmat.jpg';
import banking from 'assets/logo/banking.jpg';

import momo from 'assets/logo/momo.jpg';
import paypal from 'assets/logo/paypal.jpg';

const Footer = () => {
  const intl = useIntl();
  const getText = createTranslatedText('footer', intl);

  return (
    <div className={styles.footer__wrapper}>
      <Row gutter={16}>
        <Col span={8}>
          <p className={styles.footer__primary_title}>
            {getText('companyName')}
          </p>
          <p className={styles.footer__text}>
            {getText('address')}
            <br /> {getText('phone')} <br /> {getText('email')}
            <br /> {getText('website')} <br /> {getText('gpkdNo')}
          </p>
        </Col>
        <Col span={8}>
          <p className={styles.footer__text}>
            {getText('term')} <br /> {getText('privatePolicy')}
            <br /> {getText('complaintPolicy')} <br />{' '}
            {getText('paymentPolicy')}
          </p>
          <a
            href="http://online.gov.vn/HomePage/CustomWebsiteDisplay.aspx?DocId=55603"
            target="_blank"
          >
            <Image width={170} src={bct} preview={false} />
          </a>
        </Col>
        <Col span={8}>
          <p className={styles.footer__primary_title}>
            {getText('paymentPartner')}
          </p>
          <Image width={75} src={tienmat} preview={false} />
          <Image width={75} src={banking} preview={false} />
          <Image width={75} src={visa} preview={false} />
          <Image width={75} src={mastercard} preview={false} />
          <br />
          <Image width={75} src={jcb} preview={false} />
          <Image width={75} src={vnpay} preview={false} />
          <Image width={75} src={momo} preview={false} />
          <Image width={75} src={paypal} preview={false} />
        </Col>
      </Row>
    </div>
  );
};

export default Footer;
