import React from 'react'
import styles from './Values.module.css'

interface Props {
  values: Array<number>
  addValue: Function,
  deleteValue: Function
}

export const Values: React.FunctionComponent<Props> = props => {

  return <>
    <div className={styles.ValuesForm}>
      <form onSubmit={(evt) => {
        console.log(evt)
        props.addValue(0)
      }}>
        <input type="number" name="value" />
        <button type="submit">Ajouter valeur</button>
      </form>
    </div>
    <div>
      <h2>Resultats</h2>
      <table>
        <thead>
          <tr><td>Value</td><td>actions</td></tr>
        </thead>
        <tbody>
          {
            props.values.map((value, index, array) => {
              return <tr key={`tab -val -${index}`} ><td>{value}</td><td>delete</td></tr>
            })
          }
        </tbody>
      </table>
    </div>
  </>
};