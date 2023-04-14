import type { FC } from "react";
import { useIntl } from "react-intl";

/*
Sometimes not all combinations of props are allowed.
Two props might be mutually exclusive (You must pass one of them but not both).


Goal: Modify the Props type such that it has either a message or a messageId, but not both.
*/

type Variant = "primary" | "secondary" | "success" | "warning";

type Props =
      ({
          message: string;
          messageId?: never; // never keyword indicates that the value will never occur
        }
      | {
          message?: never;
          messageId: string;
        })
      & { variant?: Variant };

export const DualAlertSolution: FC<Props> = ({
  message,
  messageId,
  variant = "primary",
}) => {
  const { formatMessage } = useIntl();

  const actualMessage = message ?? formatMessage({ id: messageId });

  return (
    <div className={`alert alert-${variant}`} role="alert">
      {actualMessage}
    </div>
  );
};
