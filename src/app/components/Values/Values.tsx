import React from 'react'
import Button from '../Button/Button'
import styles from './Values.module.css';
interface Props {
  values: Array<number>
  addValue: Function,
  deleteValue: Function
}

export const Values: React.FunctionComponent<Props> = props => {

  return <>
    <div className={styles.ValuesForm}>
      <form onSubmit={(evt) => {
        evt.preventDefault()
        console.log(evt)
        const target =  evt.target as typeof evt.target & {
          inputValueToAdd : { value : number };
        };
        props.addValue(target.inputValueToAdd.value)
      }}>
        <input type="number" name="inputValueToAdd" />
        <button type="submit">Ajouter valeur</button>
      </form>
    </div>
    <div className={styles.ValuesViewer}>
      <h2>Resultats</h2>
      <table>
        <thead>
          <tr><td>Value</td><td>actions</td></tr>
        </thead>
        <tbody>
          {
            props.values.map((value, index) => {
              return <tr key={`tab-val-${index}`}><td>{value}</td><td>delete</td></tr>
            })
          }
        </tbody>
      </table>
    </div>
  </>
};