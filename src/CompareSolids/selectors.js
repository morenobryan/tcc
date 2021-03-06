import { createSelector } from 'reselect';
import { formValueSelector } from 'redux-form';

export const formProductOne = formValueSelector('compareSolidsProductOne');
export const formProductTwo = formValueSelector('compareSolidsProductTwo');

export const calculatePricePerUnitProductOne = state => {
  const quantity = formProductOne(state, 'quantity');
  const mass = formProductOne(state, 'mass');
  const price = formProductOne(state, 'price');
  const unit = formProductOne(state, 'unit');
  const divider = unit === 'kg' ? 1 : 1000;

  return price / (mass / divider * quantity);
};

export const calculatePricePerUnitProductTwo = state => {
  const quantity = formProductTwo(state, 'quantity');
  const mass = formProductTwo(state, 'mass');
  const price = formProductTwo(state, 'price');
  const unit = formProductTwo(state, 'unit');
  const divider = unit === 'kg' ? 1 : 1000;

  return price / (mass / divider * quantity);
};

export const calculateWorstProduct = createSelector(
  [calculatePricePerUnitProductOne, calculatePricePerUnitProductTwo],
  (priceOne, priceTwo) => Math.max(priceOne, priceTwo)
);

export const calculateEconomyPercentage = createSelector(
  [calculatePricePerUnitProductOne, calculatePricePerUnitProductTwo],
  (priceOne, priceTwo) => {
    const worstPrice = Math.max(priceOne, priceTwo);
    const bestPrice = Math.min(priceOne, priceTwo);

    return (worstPrice - bestPrice) / worstPrice;
  }
);
