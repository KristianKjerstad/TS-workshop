import { DualAlert } from "../02-mutually-exclusive/dual-alert";

export const MutuallyExclusive = () => {
  return (
    <div>
      <h2 className="my-4">Mutually exclusive props</h2>

      <DualAlert
        message="Can we do mutually exclusive props?"
        messageId="hello-tsx"
      />
    </div>
  );
};
