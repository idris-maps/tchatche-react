import React from 'react'
import Messages from './components/Messages'
import UserAction from './components/UserAction'
import { action, store, State, Action, StoreAction } from './store'
import { BotMessage, Message } from './types'
import { Store, Unsubscribe } from 'redux'

interface Props {
  messages: BotMessage[]
  onEnd: (d: { conversation: Message[]; data: object }) => any
  pace?: number
}

class Chatbot extends React.Component<Props, {}> {
  private store: Store<State, Action>
  private storeAction: StoreAction
  private unsubscribe?: Unsubscribe

  constructor(props: Props) {
    super(props)
    this.store = store
    this.storeAction = action
  }

  componentDidMount() {
    this.unsubscribe = this.store.subscribe(() => {
      this.forceUpdate()
    })
    this.storeAction.init(this.props.messages, this.props.pace)
  }

  componentWillUnmount() {
    this.storeAction.reset()
    if (this.unsubscribe) {
      this.unsubscribe()
    }
  }

  render() {
    if (!this.store) {
      return null
    }
    const { conversation, current, data, end } = this.store.getState()
    if (end) {
      this.props.onEnd({ conversation, data })
    }
    return (
      <div id="tchatche-container">
        <Messages conversation={conversation} />
        <div id="tchatche-user-action">
          {current ? (
            <UserAction
              data={data}
              storeAction={this.storeAction}
              userAction={current.userAction}
            />
          ) : null}
        </div>
      </div>
    )
  }
}

export default Chatbot
