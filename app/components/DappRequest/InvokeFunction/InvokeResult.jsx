/* eslint-disable no-nested-ternary */
// @flow
import React from 'react'
import styles from '../../../containers/ConnectDapp/styles.scss'
import CheckMarkIcon from '../../../assets/icons/confirm-circle.svg'
import ErrorIcon from '../../../assets/icons/wc-error.svg'

type Props = {
  transactionHash?: string,
  errorMessage?: string,
}

const InvokeResult = ({ transactionHash, errorMessage }: Props) => (
  <div className={styles.txSuccessContainer}>
    {transactionHash ? (
      <>
        <CheckMarkIcon />
        <h3> Transaction pending!</h3>
        <p>
          Once your transaction has been confirmed it will appear in your
          activity feed.
        </p>
        <br />
        <br />
        <p>
          <label>TRANSACTION ID</label>
          <br />
          <code>{transactionHash}</code>
        </p>
      </>
    ) : errorMessage ? (
      <>
        <ErrorIcon />
        <h3>Transaction failed!</h3>
        <p>{errorMessage}</p>
        <br />
        <br />
      </>
    ) : (
      <></>
    )}
  </div>
)

export default InvokeResult
