// @flow
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import ProductResult from '../../shared/components/ProductResult';
import BestProductResult from '../../shared/components/BestProductResult';

type Props = {
  navigation: {
    navigate: string => void,
    goBack: (?string) => void,
  },
  worstProduct: number,
  economyPercentage: number,
  productOneResult: number,
  productTwoResult: number,
  backPage: string,
  baseUnit: string,
  reset: () => void,
};

const ResultPage = ({
  navigation,
  worstProduct,
  productOneResult,
  productTwoResult,
  economyPercentage,
  backPage,
  baseUnit,
  reset,
}: Props) => {
  return (
    <View style={styles.container}>
      {worstProduct === productOneResult ? (
        <ProductResult name="PRODUTO 1" baseUnit={baseUnit} result={productOneResult} />
      ) : (
        <BestProductResult
          name="PRODUTO 1"
          baseUnit={baseUnit}
          result={productOneResult}
          economyPercentage={economyPercentage}
        />
      )}
      {worstProduct === productTwoResult ? (
        <ProductResult name="PRODUTO 2" baseUnit={baseUnit} result={productTwoResult} />
      ) : (
        <BestProductResult
          name="PRODUTO 2"
          baseUnit={baseUnit}
          result={productTwoResult}
          economyPercentage={economyPercentage}
        />
      )}
      {productOneResult === productTwoResult && (
        <Text>Estes produtos são equivalentes #chupaBubs</Text>
      )}

      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
          <Text style={styles.buttonText}>EDITAR</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navigation.navigate('Dashboard');
            reset();
          }}
        >
          <Text style={styles.buttonText}>NOVA COMPARAÇÃO</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ResultPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E88E5',
    paddingTop: 30,
  },
  buttonsContainer: {
    flex: 0.2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
  },
  button: {
    alignItems: 'center',
    borderRadius: 30,
    padding: 20,
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: '#0D47A1',
    elevation: 3,
    height: 55,
  },
  buttonText: {
    color: '#B3E5FC',
    fontFamily: 'proximaNovaAltRegular',
  },
});
