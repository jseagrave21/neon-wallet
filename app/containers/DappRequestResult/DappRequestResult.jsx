// @flow
import React from 'react'
import { ROUTES } from '../../core/constants'
import CloseButton from '../../components/CloseButton'
import FullHeightPanel from '../../components/Panel/FullHeightPanel'
import WallletConnect from '../../assets/icons/wallet_connect.svg'
import styles from '../ConnectDapp/styles.scss'
import CheckMarkIcon from '../../assets/icons/confirm-circle.svg'

type Props = {
  history: any,
}

const DappRequestResult = ({ history }: Props) => {
  const { content } = history.location.state

  return (
    <FullHeightPanel
      headerText="Wallet Connect"
      renderCloseButton={() => <CloseButton routeTo={ROUTES.DASHBOARD} />}
      renderHeaderIcon={() => (
        <div>
          <WallletConnect />
        </div>
      )}
      renderInstructions={false}
    >
      {typeof content === 'string' ? (
        <div className={styles.txSuccessContainer}>
          <CheckMarkIcon />
          <h3>{content}</h3>
          <br />
          <br />
        </div>
      ) : (
        content
      )}
    </FullHeightPanel>
  )
}

export default DappRequestResult
