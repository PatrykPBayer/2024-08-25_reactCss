import { EmailInput, Message, SendButton, StyledForm } from "./Form.theme";

export const Form = () => {
  return (
    <StyledForm>
      <EmailInput placeholder="email" />
      <p>Your message:</p>
      <Message />
      <SendButton>Send</SendButton>
    </StyledForm>
  );
};
