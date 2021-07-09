import React from 'react';
import { Values } from './components/Values/Values';
interface Props { }
interface State {
  values: Array<number>
}

export default class App extends React.Component<Props, {}> {
  state: State
  constructor(props: Props) {
    super(props)
    this.state = { values: [15,12,80,7,70,20] }
  }
  render() {
    return <div className="App">
      <Values values={this.state.values}
        addValue={(index: number) => {
          console.log('add value');
        }}
        deleteValue={(index: number) => {
          console.log('delete value');
        }}
      />
      <hr/>

      <hr/>
      {JSON.stringify(this.state)}
    </div>;
  }
}