import { reallmedata } from "@/app/database/reallme";
import { NextResponse } from "next/server";

export function GET(){



return NextResponse.json(reallmedata,{status:200})


}