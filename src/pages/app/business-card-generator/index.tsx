import { Container, Box, Group, Card, Button, Text } from '@mantine/core'
import Link from 'next/link'
import React from 'react'

const BusinessCardPage = () => {
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
      
      <Button component={Link} href="/app/business-card-generator/editor">
        Go to App
        </Button>

        <Button component={Link} href="/app/business-card-generator/templates">
        Choose a Template to get started
        </Button>
  </Group>
    </Box>
    
</Container>
  )
}

export default BusinessCardPage