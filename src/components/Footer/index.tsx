import { Wrapper } from "../Wrapper";
import { Container } from "./styles";
import { SocialItem } from "../SocialItem";

export function Footer() {
  return (
    <Container>
      <div id="contact">
        <Wrapper color="white" title="send email to dev">
          <a href="mailto:markstm10@gmail.com">markstm10@gmail.com</a>
        </Wrapper>
        <SocialItem
          size="small"
          icon="CgProfile"
          type="profile"
          title="open portfolio"
          link="https://mpamorim.dev.br/"
        />
      </div>

      <p>
        In development by <strong>Marcos Paulo</strong> - 2022
      </p>
    </Container>
  );
}
