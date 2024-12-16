import { getAccountInfo } from "@/lib/wallet/account";

export async function GET() {
  try {
    const accountInfo = await getAccountInfo();
    console.log(accountInfo);
    return new Response(JSON.stringify(accountInfo), { status: 200 });
  } catch (error: any) {
    return new Response(error.message, { status: 500 });
  }
}
