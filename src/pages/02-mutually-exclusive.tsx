import { DualAlert } from "../02-mutually-exclusive/dual-alert";

/*
Props might be mutually exclusive (You must pass one of them but not both).
*/

export const MutuallyExclusive = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <h2 className="my-4">Mutually exclusive props</h2>

      {/* Valid */}
      <DualAlert message="hei" />
      <DualAlert messageId="hello-tsx" />

      {/* Invalid */}
      <DualAlert
        message="Can we do mutually exclusive props?"
        messageId="hello-tsx"
      />
      <DualAlert />
    </div>
  );
};
