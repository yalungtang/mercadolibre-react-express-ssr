import React from 'react';

const currencyMap = {
  USD: 'U$S',
  ARS: '$',
  UYU: '$'
};

const THOUSAND_SEPARATOR = '.';

const separateThousands = (amount) => {
  let amountCharArray = [];
  const reversedAmount = amount.split('').reverse();
  for (let i = 0; i < amount.length; i++) {
    amountCharArray.push(reversedAmount[i]);
    if ((i+1) % 3 === 0) {
      amountCharArray.push(THOUSAND_SEPARATOR);
    }
  }
  return amountCharArray.reverse().join('');
};

const Price = (props) => {
  const { currency, amount } = props;
  return (
    <>
      <span>{currencyMap[currency]} {separateThousands(amount.toString())}</span>
    </>
  )
};

export default Price;
