import { useIntl } from 'react-intl';

import './styles.scss';

import visa from 'assets/logo/visa.jpg';
import mastercard from 'assets/logo/mastercard.jpg';
import jcb from 'assets/logo/jcb.jpg';
import vnpay from 'assets/logo/vnpay.jpg';
import bct from 'assets/logo/bct.png';
import tienmat from 'assets/logo/tienmat.jpg';
import banking from 'assets/logo/banking.jpg';
import momo from 'assets/logo/momo.jpg';
import paypal from 'assets/logo/paypal.jpg';
import { createTranslatedText } from 'utils/text';
import Row from 'components/BasicComponent/Grid/Row';
import Col from 'components/BasicComponent/Grid/Col';
import Image from 'components/BasicComponent/Image';

const Footer = () => {
  const intl = useIntl();
  const getText = createTranslatedText('footer', intl);

  return (
    <div className="footer">
      <Row gutter={16}>
        <Col xs={24} sm={24} md={24} lg={8} xl={8}>
          <p className="primary-title">{getText('companyName')}</p>
          <p className="normail-text">{getText('address')}</p>
          <p className="normail-text">{getText('phone')}</p>
          <p className="normail-text">{getText('email')}</p>
          <p className="normail-text">{getText('website')}</p>
          <p className="normail-text">{getText('gpkdNo')}</p>
        </Col>
        <Col xs={24} sm={24} md={24} lg={8} xl={8}>
          <p className="primary-title">{getText('policy')}</p>
          <div className="list-policy-link">
            <a
              href="https://tinohost.com/dieu-khoan-su-dung-dich-vu/?_ga=2.149463478.1283718076.1618676218-746246564.1615803349"
              target="_blank"
              className="normail-text"
            >
              {getText('term')}
            </a>
            <a
              href="https://tinohost.com/chinh-sach-bao-mat/?_ga=2.149463478.1283718076.1618676218-746246564.1615803349"
              target="_blank"
              className="normail-text"
            >
              {getText('privatePolicy')}
            </a>
            <a
              href="https://tinohost.com/tranh-chap-khieu-nai/?_ga=2.149463478.1283718076.1618676218-746246564.1615803349"
              target="_blank"
              className="normail-text"
            >
              {getText('complaintPolicy')}
            </a>
            <a
              href="https://tinohost.com/huong-dan-thanh-toan/?_ga=2.149463478.1283718076.1618676218-746246564.1615803349"
              target="_blank"
              className="normail-text"
            >
              {getText('paymentPolicy')}
            </a>
          </div>
          <a
            href="http://online.gov.vn/HomePage/CustomWebsiteDisplay.aspx?DocId=55603"
            target="_blank"
          >
            <Image width={170} src={bct} preview={false} />
          </a>
        </Col>
        <Col xs={24} sm={24} md={24} lg={8} xl={8}>
          <p className="primary-title">{getText('paymentPartner')}</p>
          <div className="list-icon-partner">
            <Image src={tienmat} preview={false} />
            <Image src={banking} preview={false} />
            <Image src={visa} preview={false} />
            <Image src={mastercard} preview={false} />
            <Image src={jcb} preview={false} />
            <Image src={vnpay} preview={false} />
            <Image src={momo} preview={false} />
            <Image src={paypal} preview={false} />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Footer;
