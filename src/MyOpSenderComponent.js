import React from "react";
import {
  useSendUserOperation,
  useSmartAccountClient,
} from "@account-kit/react";
 
export default function MyOpSenderComponent() {
  const { client } = useSmartAccountClient({ type: "LightAccount" });
 
  const { sendUserOperation, isSendingUserOperation } = useSendUserOperation({
    client,
    // optional parameter that will wait for the transaction to be mined before returning
    waitForTxn: true,
    onSuccess: ({ hash, request }) => {
      console.log(hash, request);
      // [optional] Do something with the hash and request
    },
    onError: (error) => {
      console.log(error);
      // [optional] Do something with the error
    },
  });
 
  return (
    <div>
      <div>
        <span>{client?.account?.address}</span>
      </div>
      <button
        onClick={() =>
          sendUserOperation({
            uo: {
              target: "0x2F5D0efe0B3a48e4C83E2722dE7f425B31aae12B",
              data: "0x",
              value: 10,
            },
          })
        }
        disabled={isSendingUserOperation}
      >
        {isSendingUserOperation ? "Sending..." : "Send UO"}
      </button>
    </div>
  );
}