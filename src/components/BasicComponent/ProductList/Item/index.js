import React, { useCallback, useEffect, useState } from 'react';
import parse from 'html-react-parser';
import classNames from 'classnames';
import { useIntl } from 'react-intl';

import Button from 'components/BasicComponent/Button';
import Select from 'components/BasicComponent/Select';

import { createTranslatedText } from 'utils/text';
import { mockDescription } from 'pages/Services/components/TabDetail/mockData';

import '../styles.scss';

const PAYTYPE_FREE = 'Free';

const ProductItem = ({
  className,
  onSelectPeriod = () => {},
  name,
  unit = 'VND',
  description,
  favorite = false,
  periods = [], // title, price, value
  paytype = '', // Regular, Free
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

  const handleSelectPeriod = useCallback(
    (option) => {
      onSelectPeriod(option);
      const selected = periods.find((p) => p.value === option);
      if (selected) {
        setSelectedPeriod(selected);
      }
    },
    [onSelectPeriod, periods],
  );

  const classes = classNames({
    item: true,
    item__favorite: favorite,
    [className]: className,
  });

  return (
    <div className={classes}>
      <div className="item__capacity">{name}</div>
      <div className="item__price">
        {paytype === PAYTYPE_FREE ? (
          <div className="unit">{paytype}</div>
        ) : (
          <>
            <span className="unit">
              {selectedPeriod && selectedPeriod.price} {unit}
            </span>
            <span>/{getText('labels.month')}</span>
          </>
        )}
      </div>
      <div className="ruler" />
      <div className="item__list">
        {/* TODO: Update after integrate full data */}
        {parse(description)}
        {parse(mockDescription)}
      </div>

      {periods.length > 0 && (
        <Select
          onChange={handleSelectPeriod}
          className="item__time"
          value={selectedPeriod?.value}
          options={periods.map((item) => ({
            value: item.value,
            label: `${item.title} = ${item.price} ${unit}/${getText(
              'labels.month',
            )}`,
          }))}
        />
      )}

      <div className="item__btn">
        <Button type="primary">{getText('buttons.order')}</Button>
      </div>
    </div>
  );
};

export default ProductItem;
