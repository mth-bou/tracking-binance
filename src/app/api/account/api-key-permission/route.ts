import { getApiKeyPermission } from "@/lib/wallet/account";
import { NextResponse } from "next/server";

export async function GET() {
	try {
		const permissions = await getApiKeyPermission();
		return NextResponse.json(permissions, { status: 200 });
	} catch (error: any) {
		return NextResponse.json(error.message, { status: 500 });
	}
}
