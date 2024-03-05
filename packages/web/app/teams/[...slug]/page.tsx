import { Card, CardBody, CardHeader } from "@nextui-org/react";

export default function Page() {
  return (
    <>
      <Card>
        <CardHeader>
          { /* TODO: Replace with team name */ }
          <h1>My Team Name</h1>
        </CardHeader>
        <CardBody>
          <p>Make changes to your teams settings here.</p>
        </CardBody>
      </Card>

      <Card>
        <CardHeader>
          <h2>Team Members</h2>
        </CardHeader>
        <CardBody>
          <p>Invite new members to your team.</p>
        </CardBody>
      </Card>

      <Card>
        <CardHeader>
          <h2>API Keys</h2>
        </CardHeader>
        <CardBody>
          <p>Create new API keys for your team.</p>
        </CardBody>
      </Card>
    </>
  )
}
