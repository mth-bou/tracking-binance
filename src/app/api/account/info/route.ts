import { getAccountInfo } from "@/lib/wallet/account";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const accountInfo = await getAccountInfo();
    console.log(accountInfo);
    return NextResponse.json(accountInfo, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
