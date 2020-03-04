import React from 'react'
import { Message } from '../types'

const getContainerClass = (isBot?: boolean) =>
  `message-container ${
    isBot ? 'bot-message-container' : 'user-message-container'
  }`

const getMessageClass = (isBot?: boolean) =>
  `message ${isBot ? 'bot-message' : 'user-message'}`

const Message = ({ message, isBot }: Message) => (
  <div className={getContainerClass(isBot)}>
    <div className={getMessageClass(isBot)}>{message}</div>
  </div>
)

interface Props {
  conversation: Message[]
}

export default ({ conversation }: Props) => (
  <div id="tchatche-messages">
    {conversation.map(({ message, isBot }, i) => (
      <Message key={i} message={message} isBot={isBot} />
    ))}
    <div className="after-messages"></div>
  </div>
)
