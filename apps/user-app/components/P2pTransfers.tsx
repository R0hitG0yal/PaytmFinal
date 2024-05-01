import { Card } from "@repo/ui/card";

export const P2pTransfers = ({
  transactions,
}: {
  transactions: {
    time: Date;
    amount: number;
    // TODO: Can the type of `status` be more specific?
    to: number;
  }[];
}) => {
  if (!transactions.length) {
    return (
      <Card title="Recent Transfers">
        <div className="text-center pb-8 pt-8">No Recent transfers</div>
      </Card>
    );
  }
  return (
    <Card title="Recent Transfers">
      <div className="pt-2">
        {transactions.map((t) => (
          <div className="flex justify-between">
            <div>
              <div className="text-sm">Sent INR</div>
              <div className="text-slate-600 text-xs">
                To: {t.to}
              </div>
              <div className="text-slate-600 text-xs">
                {t.time.toDateString()}
              </div>
            </div>
            <div className="flex flex-col justify-center">
              - Rs {t.amount / 100}
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};
