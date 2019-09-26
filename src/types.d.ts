export interface OnSubmitData {
  nextMessageId: string
  data: { property: string, value: string, label?: string }
}

export interface OnSubmitEnd {
  data: { property: string, value: string, label?: string }
  isEnd: true
}

export type OnSubmitResponse = Promise<OnSubmitData | OnSubmitEnd>

export interface UserActionInput {
  inputType: 'input'
  placeholder?: string
  type?: string
  onSubmit: (userInput: string, data: object, setData: (property: string, value: any) => void) => OnSubmitResponse
}

export interface Button {
  label: string
  value: string | number
}

export interface UserActionButton {
  inputType: 'buttons'
  buttons: Button[]
  onSubmit: (button: Button, data: object, setData: (property: string, value: any) => void) => OnSubmitResponse
}

export type UserAction = UserActionInput
  | UserActionButton

export interface BotMessage {
  id: string
  botSays: (data: any) => string[]
  userAction: UserAction
}

export interface Message {
  message: string
  isBot?: boolean
}

export interface Listener {
  event: 'end'
  callback: (onEndData: { conversation: Message[], data: object }) => void
}
