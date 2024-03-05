import { Button, Card, CardBody, Spacer } from '@nextui-org/react';
import Link from 'next/link';

export default function Page() {
  return (
      <Card>
        <CardBody>
        <h1 color="primary">About Bucketscan</h1>
        <Spacer y={1.5} />
        <p>
          Welcome to Bucketscan, the premier API-as-a-service platform dedicated to securing your business platform from malicious threats. Developed in the UK by two seasoned developers, Josh and Sam, Bucketscan was born out of a necessity for a simple, cost-effective, and maintenance-free solution to protect customer uploads against viruses and other malicious attacks without the hassle of managing underlying infrastructure.
        </p>
        <Spacer y={1} />
        <p>
          Our service is engineered to safeguard your systems against a wide array of security threats, including but not limited to ransomware, spyware, trojans, and phishing attacks. By integrating Bucketscan into your business processes, you can ensure that every file uploaded by your customers is meticulously scanned and secure, maintaining the integrity and trustworthiness of your platform.
        </p>
        <Spacer y={1} />
        <p>
          Bucketscan is the ideal "set and forget" solution for businesses looking to enhance their security measures without incurring excessive costs or diverting resources away from their core operations. Our API is designed for effortless integration and comes with comprehensive documentation to guide you through every step of the process.
        </p>
        <Spacer y={1} />
        <p>
          Explore our <Link color="primary" href="/api-documentation">API Documentation</Link> to start implementing robust security measures with Bucketscan today.
        </p>
        <Spacer y={1} />
        <Button color="primary">
          Get Started with Our API
        </Button>
        <Spacer y={1} />
        <p>
          Thank you for considering Bucketscan for your security needs. Josh and Sam are committed to providing you with a reliable, user-friendly, and cost-effective solution to keep your platform safe and secure.
        </p>
        </CardBody>
      </Card>
  );
}
