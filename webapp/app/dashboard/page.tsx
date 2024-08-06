import { LabelWithCopy } from "@/components/label-with-copy";
import { createClient } from "@/utils/supabase/server";

import {
  Card,
  CardBody,
  CardHeader,
  Progress,
} from "@nextui-org/react";
import { redirect } from "next/navigation";

export default async function Dashboard() {
  const supabase = createClient();
  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) {
    redirect("/login");
  }
  const { data: personalAccount } = await supabase.rpc("get_personal_account");
  console.log(personalAccount);
  return (
    <>
      <Card>
        <CardHeader>
          <h2>API Key</h2>
        </CardHeader>
        <CardBody>
          <LabelWithCopy text={personalAccount.private_metadata.api_key} />
        </CardBody>
      </Card>
      <Card>
        <CardHeader>
          <div>
            <h2>API Credits</h2>
          </div>
          <div>
            <p>0 of 100 - 0% of quota used</p>
          </div>
        </CardHeader>
        <CardBody>
          <Progress aria-label="API Credits" value={60} className="max-w-md" />
        </CardBody>
      </Card>
    </>
  );
}
