import { Box, Button, Card, Center, Container, Group, Paper, Text } from "@mantine/core";
import Link from "next/link";

export default function IndexPage() {
  const appChoices = [
    {
      name: "Business Card Generator",
      description:
        "Generate a business card with your name, title, and contact information.",
      link: "/app/business-card-generator",
    },
    {
      name: "Resume Generator",
      description:
        "Generate a resume with your name, title, and contact information.",
      link: "/app/resume-generator",
    },
  ];
  return (
<Container>
    <Box sx={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
    }}>
    <Text size="xl" align="center">Welcome  to the App Generator! </Text>
    <Text size="md" align="center">Choose an app to get started.</Text>

    <Group mt={50} position="center" noWrap>
      
      {appChoices.map((appChoice) => (
        <Card
          shadow="sm"
          padding="md"
          radius="md"
          style={{ minWidth: "300px" }}
          key={appChoice.name}
        >
          <h2>{appChoice.name}</h2>
          <p>{appChoice.description}</p>
          <Button component={Link} href={appChoice.link}>
            Go to App
          </Button>
        </Card>
      ))}
    
  </Group>
    </Box>
    
</Container>

    
  );
}
