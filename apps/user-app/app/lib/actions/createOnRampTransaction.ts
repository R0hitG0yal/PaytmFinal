"use server";

import prisma from "@repo/db/client";
import { authOptions } from "../auth";
import { getServerSession } from "next-auth";

export async function createOnRampTransactions(
  provider: string,
  amount: number
) {
  const session = await getServerSession(authOptions);
  if (!session?.user || !session.user?.id)
    return {
      message: "Unauthenticated request",
    };
  const token = (Math.random() * 1000).toString();
  await prisma.onRampTransaction.create({
    data: {
      provider,
      amount: amount*100,
      startTime: new Date(),
      userId: Number(session.user.id),
      token,
      status: "Processing",
    },
  });

  return {
    message: "Done",
  };
}
