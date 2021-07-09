import React from 'react';
import { Values } from './components/Values/Values';
import * as RGUI from 'react-graphical-ui';
import {Histogram} from 'react-graphical-ui';

// imp as snippet et

interface Props { }
interface State {
  values: Array<number>
}

export default class App extends React.Component<Props, {}> {
  state: State
  constructor(props: Props) {
    super(props)
    this.state = { values: [15, 12, 80, 7, 70, 20] }
  }
  render() {
    return <div className="App">
      <Values values={this.state.values}
        addValue={(index: number) => {
          console.log('add value' + index);

          // mise à jour des données
          this.setState({ values: [...this.state.values, index] })
        }}
        deleteValue={(index: number) => {
          console.log('delete value');
        }}
      />
      <hr />
      <RGUI.CloudPoints values={this.state.values}> </RGUI.CloudPoints>

      {/*  <Histogram></Histogram> */}

      <hr />
      {JSON.stringify(this.state)}
    </div>;
  }
}