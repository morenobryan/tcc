import * as React from 'react';
import { Platform, StatusBar } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';
import CompareLiquids from '../CompareLiquids/containers/Form';
import CompareLiquidsResult from '../CompareLiquids/containers/Result';
import CompareSolids from '../CompareSolids/containers/Form';
import CompareSolidsResult from '../CompareSolids/containers/Result';
import ComparePaper from '../ComparePaper/containers/Form';
import ComparePaperResult from '../ComparePaper/containers/Result';
import Dashboard from '../Dashboard/components/Dashboard.js';

export const Root = StackNavigator(
  {
    Dashboard: {
      screen: Dashboard,
      navigationOptions: {
        header: null,
        title: 'Tela Inicial',
      },
    },
    CompareLiquids: {
      screen: CompareLiquids,
      navigationOptions: {
        header: null,
        title: 'Comparar Líquidos',
      },
    },
    CompareLiquidsResult: {
      screen: CompareLiquidsResult,
      navigationOptions: {
        header: null,
        title: 'Comparar Líquidos - Resultado',
      },
    },
    CompareSolids: {
      screen: CompareSolids,
      navigationOptions: {
        header: null,
        title: 'Comparar Sólidos',
      },
    },
    CompareSolidsResult: {
      screen: CompareSolidsResult,
      navigationOptions: {
        header: null,
        title: 'Comparar Sólidos - Resultado',
      },
    },
    ComparePaper: {
      screen: ComparePaper,
      navigationOptions: {
        header: null,
        title: 'Comparar Papel',
      },
    },
    ComparePaperResult: {
      screen: ComparePaperResult,
      navigationOptions: {
        header: null,
        title: 'Comparar Papel - Resultado',
      },
    },
  },
  {
    headerMode: 'screen',
    cardStyle: {
      paddingTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight,
    },
  }
);
