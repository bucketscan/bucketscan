import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Progress,
} from "@nextui-org/react";
import { redirect } from "next/navigation";

export default async function Page() {
  return (
    <>
      <Card>
        <CardHeader>
          <h1>Welcome to BucketScan</h1>
          <h2>To get started please create your first API key</h2>
        </CardHeader>
        <CardBody>
          <Button href="/teams/${teamid}/edit">Create API Key</Button>
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
