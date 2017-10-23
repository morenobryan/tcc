// @flow
import * as React from 'react';
import { Field } from 'redux-form';
import { StyleSheet, Text, TouchableOpacity, View, Picker } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import ComparisonInputText from '../../shared/components/ComparisonInputText';
import ComparisonInputSelect from '../../shared/components/ComparisonInputSelect';
import PropTypes from 'prop-types';

type Props = {
  productName: string,
  unit: string,
};

export default class ProductForm extends React.Component<Props> {
  quantity: ?any;
  volume: ?any;
  price: ?any;

  quantityRef = (componentRef: any) => (this.quantity = componentRef);
  volumeRef = (componentRef: any) => (this.volume = componentRef);
  priceRef = (componentRef: any) => (this.price = componentRef);

  setNativeProps(nativeProps) {
    this.price.setNativeProps(nativeProps);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{this.props.productName}</Text>

        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Número de Itens</Text>
          <Field
            ref={this.quantityRef}
            refField="quantity"
            withRef
            name="quantity"
            keyboardType="numeric"
            returnKeyType="next"
            selectionColor="#0D47A1"
            component={ComparisonInputText}
            onEnter={() => {
              this.volume && this.volume.getRenderedComponent().refs.volume.focus();
            }}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Volume do Item</Text>
          <Field
            ref={this.volumeRef}
            refField="volume"
            withRef
            name="volume"
            keyboardType="numeric"
            returnKeyType="next"
            selectionColor="#0D47A1"
            component={ComparisonInputText}
            onEnter={() => this.price && this.price.getRenderedComponent().refs.price.focus()}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Preço</Text>
          <Field
            ref={this.priceRef}
            refField="price"
            withRef
            name="price"
            keyboardType="numeric"
            returnKeyType="next"
            selectionColor="#0D47A1"
            normalize={(value, previousValue) => {
              if (!value || value === 0) return value;

              const numFormatter = this.context.globalize.getNumberFormatter({
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              });
              const numParser = this.context.globalize.getNumberParser();
              //const parsedValue = numParser(formattedValue);
              const formattedValue = numFormatter(numParser(value));

              console.log('value', value);
              console.log('previousValue', previousValue);
              console.log('numFormatter', formattedValue);
              // console.log('numParser', parsedValue);
              return formattedValue;
            }}
            component={ComparisonInputText}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Unidade</Text>
          <Field
            name="unit"
            component={ComparisonInputSelect}
            selectedOption={this.props.unit}
            options={['L', 'mL']}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 0.5,
    alignSelf: 'stretch',
    backgroundColor: '#1E88E5',
  },
  title: {
    fontFamily: 'proximaNovaAltBold',
    fontSize: 30,
    marginBottom: 30,
    color: '#0D47A1',
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputLabel: {
    flex: 0.4,
    color: '#B3E5FC',
    textAlign: 'right',
    marginRight: 10,
    fontFamily: 'proximaNovaAltRegular',
  },
});

const globalizePropTypes = {
  locale: PropTypes.string,
  currency: PropTypes.string,
};

const globalizeFormatPropTypes = {
  getCurrencyFormatter: PropTypes.func.isRequired,
  getDateFormatter: PropTypes.func.isRequired,
  getMessageFormatter: PropTypes.func.isRequired,
  getNumberFormatter: PropTypes.func.isRequired,
  getPluralGenerator: PropTypes.func.isRequired,
  getRelativeTimeFormatter: PropTypes.func.isRequired,
};

const globalizeShape = PropTypes.shape({
  ...globalizePropTypes,
  ...globalizeFormatPropTypes,
});
ProductForm.contextTypes = {
  globalize: globalizeShape,
};
