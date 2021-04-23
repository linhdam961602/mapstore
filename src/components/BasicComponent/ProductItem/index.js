import React, { useEffect, useState } from 'react';
import Radio from 'antd/es/radio';
import 'antd/es/checkbox/style/css';
import 'antd/es/radio/style/css';
import parse from 'html-react-parser';
import classNames from 'classnames';
import { useIntl } from 'react-intl';

import Button from '../Button';
import Select from '../Select';

import { createTranslatedText } from 'utils/text';
import { mockDescription } from 'pages/Services/HostingPage/TabDetail/mockData';

import './styles.scss';

const ProductItem = ({
  className,
  value,
  onSelectPeriod = () => {},
  name,
  unit = 'VND',
  description,
  favorite = false,
  periods = [], // title, price, value
  ...props
}) => {
  const intl = useIntl();
  const getText = createTranslatedText('products', intl);

  const [selectedPeriod, setSelectedPeriod] = useState(null);

  useEffect(() => {
    const selected = periods.find((p) => p.selected);
    if (selected) {
      setSelectedPeriod(selected);
    }
  }, [periods]);

  const handleSelectPeriod = (option) => {
    onSelectPeriod(option);
    const selected = periods.find((p) => p.value === option.value);
    if (selected) {
      setSelectedPeriod(selected);
    }
  };

  const classes = classNames({
    item: true,
    item__favorite: favorite,
    [className]: className,
  });

  return (
    <Radio className={classes} value={value} {...props}>
      <div className="item__capacity">{name}</div>
      <div className="item__price">
        <span className="unit">
          {selectedPeriod && selectedPeriod.price} {unit}
        </span>
        /{getText('labels.month')}
        <div className="ruler"> </div>
      </div>
      <ul className="item__list">
        {/* TODO: Update after integrate full data */}
        {/* {parse(description)} */}
        {parse(mockDescription)}
      </ul>

      {periods && (
        <Select
          onChange={handleSelectPeriod}
          className="item__time"
          value={selectedPeriod?.value}
          options={periods.map((item) => ({
            value: item.value,
            label: `${item.title} = ${item.price} ${unit}`,
          }))}
        />
      )}

      <div className="item__btn">
        <Button type="primary">{getText('buttons.order')}</Button>
      </div>
    </Radio>
  );
};

export default ProductItem;
