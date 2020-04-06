// @flow
import React from 'react'
import classNames from 'classnames'
import { FaEyeSlash, FaEye } from 'react-icons/fa'

import TextInput from '../TextInput'
import styles from './PasswordInput.scss'

type Props = {
  className?: string,
  value?: string,
  onChange?: Function,
  placeholder?: string,
  autoFocus?: boolean,
}

type State = {
  showPassword: boolean,
}

export default class PasswordInput extends React.Component<Props, State> {
  state = {
    showPassword: false,
  }

  render() {
    return (
      // $FlowFixMe
      <TextInput
        className={classNames(styles.passwordInput, this.props.className)}
        type={this.state.showPassword ? 'text' : 'password'}
        renderAfter={this.renderAfter}
        shouldRenderErrorIcon={false}
        {...this.props}
      />
    )
  }

  renderAfter = () => {
    const Icon = this.state.showPassword ? FaEyeSlash : FaEye

    return (
      <Icon className={styles.icon} onClick={this.handleToggleVisibility} />
    )
  }

  handleToggleVisibility = () =>
    this.setState(state => ({ showPassword: !state.showPassword }))
}
