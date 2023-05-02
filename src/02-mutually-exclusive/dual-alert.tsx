import type { FC } from "react";
import { useIntl } from "react-intl";

/*
Sometimes not all combinations of props are allowed.
Two props might be mutually exclusive (You must pass one of them but not both).


Goal: Modify the Props type such that it has either a message or a messageId, but not both.
*/


type Props = {
  message?: string;
  messageId?: string;
};

export const DualAlert: FC<Props> = ({
  message,
  messageId,

}) => {
  const { formatMessage } = useIntl();

  const actualMessage = message ?? formatMessage({ id: messageId });

  return <div role="alert">
    {actualMessage}
  </div>;
};
