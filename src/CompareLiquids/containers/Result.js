// @flowsetRollWidthRef
import { connect } from 'react-redux';
import { reset } from 'redux-form';

import {
  calculateBestProduct,
  calculateEconomyPercentage,
  calculatePricePerUnitProductOne,
  calculatePricePerUnitProductTwo,
} from '../selectors';

import ResultPage from '../../shared/components/ResultPage';

const mapStateToProps = state => ({
  bestProduct: calculateBestProduct(state),
  economyPercentage: calculateEconomyPercentage(state),
  productOneResult: calculatePricePerUnitProductOne(state),
  productTwoResult: calculatePricePerUnitProductTwo(state),
  backPage: 'CompareLiquids',
});

const mapDispatchToProps = dispatch => ({
  reset: () => {
    dispatch(reset('compareLiquidsProductOne'));
    dispatch(reset('compareLiquidsProductTwo'));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ResultPage);
