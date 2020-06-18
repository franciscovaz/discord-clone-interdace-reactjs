import React, { useRef, useEffect } from 'react';

import { Container, Messages, InputWrapper, Input, InputIcon } from './styles';
import ChannelMessage, { Mention } from '../ChannelMessage';

const ChannelData: React.FC = () => {
  const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    const div = messagesRef.current;

    if (div) {
      div.scrollTop = div.scrollHeight;
    }
  }, [messagesRef]);
  return (
    <Container>
      <Messages ref={messagesRef}>
        <ChannelMessage
          author="Francisco Vaz"
          date="15/06/2020"
          content="Hoje é o meu aniversário."
        />

        <ChannelMessage
          author="Diego Fernandes"
          date="21/06/2020"
          content={
            <>
              <Mention>@Francisco Vaz</Mention>, carrega-me no CS de novo, se
              faz favor?
            </>
          }
          hasMention
          isBot
        />

        <ChannelMessage
          author="Francisco Vaz"
          date="15/06/2020"
          content="Hoje é o meu aniversário."
        />

        <ChannelMessage
          author="Francisco Vaz"
          date="15/06/2020"
          content="Hoje é o meu aniversário."
        />

        <ChannelMessage
          author="Francisco Vaz"
          date="15/06/2020"
          content="Hoje é o meu aniversário."
        />

        <ChannelMessage
          author="Francisco Vaz"
          date="15/06/2020"
          content="Hoje é o meu aniversário."
        />

        <ChannelMessage
          author="Francisco Vaz"
          date="15/06/2020"
          content="Hoje é o meu aniversário."
        />

        <ChannelMessage
          author="Francisco Vaz"
          date="15/06/2020"
          content="Hoje é o meu aniversário."
        />

        <ChannelMessage
          author="Francisco Vaz"
          date="15/06/2020"
          content="Hoje é o meu aniversário."
        />

        <ChannelMessage
          author="Francisco Vaz"
          date="15/06/2020"
          content="Hoje é o meu aniversário."
        />

        <ChannelMessage
          author="Francisco Vaz"
          date="15/06/2020"
          content="Hoje é o meu aniversário."
        />

        <ChannelMessage
          author="Francisco Vaz"
          date="15/06/2020"
          content="Hoje é o meu aniversário."
        />
      </Messages>

      <InputWrapper>
        <Input type="text" placeholder="Conversar em #chat-livre" />
        <InputIcon />
      </InputWrapper>
    </Container>
  );
};

export default ChannelData;
