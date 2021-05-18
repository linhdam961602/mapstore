import React, { useCallback, useEffect, useState } from 'react';
import parse from 'html-react-parser';
import classNames from 'classnames';
import { useIntl } from 'react-intl';

import Card from 'components/BasicComponent/Card';
import Button from 'components/BasicComponent/Button';
import Select from 'components/BasicComponent/Select';

import { createTranslatedText } from 'utils/text';

import '../styles.scss';

const PAYTYPE_FREE = 'Free';

const ProductItem = ({
  className,
  onSelectPeriod = () => {},
  name,
  unit = 'VND',
  description,
  periods = [], // title, price, value
  paytype = '', // Regular, Free
}) => {
  const intl = useIntl();
  const getText = createTranslatedText('common', intl);

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
    [className]: className,
  });

  return (
    <Card className={classes} hoverable>
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
      <div className="item__list">{parse(description)}</div>

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
        <Button type="primary">{getText('action.order')}</Button>
      </div>
    </Card>
  );
};

export default ProductItem;
