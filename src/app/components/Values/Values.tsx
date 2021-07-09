import React from 'react'
import Button from '../Button/Button'
interface Props {
  values: Array<number>
  addValue: Function,
  deleteValue: Function
}

export const Values: React.FunctionComponent<Props> = props => {

  return <>
    <div>
      <form onSubmit={(evt) => {
        console.log(evt)
        props.addValue(0)
      }}>
        <input type="number" name="value" />
        <button type="submit">Ajouetr valeur</button>
      </form>
    </div>
    <div>
      <h2>Resultats</h2>
      <table>
        <thead>
          <tr><td>Value</td><td>actions</td></tr>
        </thead>
        <tbody>
          
        </tbody>
      </table>
    </div>
  </>
};