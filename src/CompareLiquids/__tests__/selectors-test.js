import * as selectors from '../selectors';

const exampleState = {
  form: {
    compareLiquidsProductOne: {
      values: {
        price: '3',
        quantity: '4',
        volume: '5',
        unit: 'L',
      },
    },
    compareLiquidsProductTwo: {
      values: {
        price: '5',
        quantity: '6',
        volume: '7',
        unit: 'mL',
      },
    },
  },
};

const emptyExample = {
  form: {
    compareLiquidsProductOne: {
      values: {
        price: undefined,
        quantity: undefined,
        volume: undefined,
        unit: undefined,
      },
    },
    compareLiquidsProductTwo: {
      values: {
        price: undefined,
        quantity: undefined,
        volume: undefined,
        unit: undefined,
      },
    },
  },
};

/* Form */
describe('calculatePricePerUnitProductOne', () => {
  it('calculates the correct sum', () => {
    expect(selectors.calculatePricePerUnitProductOne(exampleState)).toEqual(
      exampleState.form.compareLiquidsProductOne.values.price /
        exampleState.form.compareLiquidsProductOne.values.quantity *
        exampleState.form.compareLiquidsProductOne.values.volume
    );
  });
});

describe('calculatePricePerUnitProductTwo', () => {
  it('calculates the correct sum', () => {
    expect(selectors.calculatePricePerUnitProductTwo(exampleState)).toEqual(
      exampleState.form.compareLiquidsProductTwo.values.price /
        exampleState.form.compareLiquidsProductTwo.values.quantity *
        exampleState.form.compareLiquidsProductTwo.values.volume
    );
  });
});

describe('calculateEconomyPercentage', () => {
  it('calculates the correct sum', () => {
    const priceOne =
      exampleState.form.compareLiquidsProductOne.values.price /
      exampleState.form.compareLiquidsProductOne.values.quantity *
      exampleState.form.compareLiquidsProductOne.values.volume;

    const priceTwo =
      exampleState.form.compareLiquidsProductTwo.values.price /
      exampleState.form.compareLiquidsProductTwo.values.quantity *
      exampleState.form.compareLiquidsProductTwo.values.volume;

    const worstPrice = Math.max(priceOne, priceTwo);
    const bestPrice = Math.min(priceOne, priceTwo);

    expect(selectors.calculateEconomyPercentage(exampleState)).toEqual(
      (worstPrice - bestPrice) / worstPrice
    );
  });
});
