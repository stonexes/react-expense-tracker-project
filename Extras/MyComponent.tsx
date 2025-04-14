import React from 'react';
import { formatDate, calculateTotalPrice } from './utils';

interface Props {
  price: number;
  taxRate: number;
  date: Date;
}

const MyComponent: React.FC<Props> = ({ price, taxRate, date }) => {
  const formattedDate = formatDate(date);
  const totalPrice = calculateTotalPrice(price, taxRate);

  return (
    <div>
      <p>Date: {formattedDate}</p>
      <p>Total Price: {totalPrice}</p>
    </div>
  );
};

export default MyComponent;
