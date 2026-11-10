import { redirect } from "next/navigation";

export default async function ApostolicShiftRegisterPage({
  searchParams,
}: {
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const resolved = searchParams ? await searchParams : {};
  const params = new URLSearchParams();
  params.set("tab", "registration");
  if (resolved?.phone && typeof resolved.phone === "string") {
    params.set("phone", resolved.phone);
  }
  redirect(`/apostolic-shift/checkin?${params.toString()}`);
}
