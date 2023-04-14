import { DualAlert } from "../02-mutually-exclusive/dual-alert";
import {DualAlertSolution} from "../02-mutually-exclusive/dual-alert-solution";

/*
Props might be mutually exclusive (You must pass one of them but not both).
*/

export const MutuallyExclusive = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <h2 className="my-4">Mutually exclusive props</h2>

      {/* Valid */}
      <DualAlert message="hello message" />
      <DualAlert messageId="hello-tsx" />

      {/* Invalid */}
      <DualAlert
        message="Can we do mutually exclusive props?"
        messageId="hello-tsx"
      />
      <DualAlert />



      {/*<DualAlertSolution message="Hello message" />*/}
      {/*<DualAlertSolution messageId="hello-tsx" />*/}
      {/*/!*<DualAlertSolution message="hello message" messageId="hello-tsx" />*!/*/}
      {/*/!*<DualAlertSolution />*!/*/}
    </div>
  );
};
