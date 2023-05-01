import {
  AppShell,
  Box,
  Button,
  Center,
  FileInput,
  Flex,
  Header,
  Navbar,
  ScrollArea,
  SegmentedControl,
  Stack,
  TextInput
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { useRouter } from "next/router";
import { useState } from "react";
import { templates } from "./templates";
export type CardInformation = {
  holdersName: string;
  position: string;
  companyName: string;
  companyLogo: string | null;
  companyMotto: string;
  companyContactInformation: {
    email: string[];
    phone: string[];
    address: string;
    website: string[];
  };
};
const EditorGround = () => {
  const [activeTab, setActiveTab] = useState("card-information");
  const [cardSettings, setCardSettings] = useState({
    cardSize: "standard",
    cardOrientation: "landscape",
    cardBackground: "white",
    cardBorderRadius: "none",
    cardBorder: "none",
    cardShadow: "none",
  });

  const form = useForm<CardInformation>({
    initialValues: {
      holdersName: "Lukman Isiaka",
      position: "Software Engineer",
      companyName: "IamDellyson Inc.",
      companyLogo: null,
      companyMotto: "We build the future",
      companyContactInformation: {
        email: ["lukmanisiaka@gmail.com"],
        phone: ["+234 703 000 0000", "+234 703 000 0000"],
        address: "Lagos, Nigeria",
        website: ["https://iamdellyson.com"],
      },
    },
  });

  const handleSubmit = (values) => {
    console.log(values);
  };
const router = useRouter();
  return (
    <AppShell 
    header={ 
      <Header 
        height={60}
      >
        <Flex align="center" justify="space-between">
          <Button
            variant="link"
            color="gray"
            size="xl"
            onClick={() => router.push("/app/business-card-generator")}
          >
            Back
          </Button>
          <Button
            variant="outline"
            color="blue"
            size="xl"
            onClick={() => router.push("/app/business-card-generator")}
          >
            Save
          </Button>
        </Flex>


      </Header>

    }
      navbar={ <Navbar
        width={{base:300}}
        p="sm"
        height={600}
      
      >
        <Navbar.Section> 
          <SegmentedControl
          fullWidth
          data={[
            { label: "Card Information", value: "card-information" },
            { label: "Card Settings", value: "card-settings" },
          ]}
          value={activeTab}
          onChange={setActiveTab}
          sx={{
            marginBottom: "md",
            position: "sticky",
            top: 60,
            zIndex: 1,
          }}
        /></Navbar.Section>
       
       <Navbar.Section grow mt="md" component={ScrollArea}  scrollbarSize={0} > {activeTab === "card-information" && (
          <form onSubmit={form.onSubmit(handleSubmit)}>
            <Stack
              style={{
                height: "100vh",
                width: "100%",
              }}
              p="sm"
            >
              <TextInput
                label="Holder's Name"
                placeholder="e.g John Doe"
                {...form.getInputProps("holdersName")}
              />
              <TextInput
                label="Position"
                placeholder="e.g Software Engineer"
                {...form.getInputProps("position")}
              />
              <TextInput
                label="Company Name"
                placeholder="e.g Mantine"
                {...form.getInputProps("companyName")}
              />
              <FileInput
                label="Company Logo"
                placeholder="e.g Mantine"
                {...form.getInputProps("companyLogo")}
              />
              <TextInput
                label="Company Motto"
                placeholder="e.g We build the future"
                {...form.getInputProps("companyMotto")}
              />
              <TextInput
                label="Company Address"
                placeholder="e.g Lagos, Nigeria"
                {...form.getInputProps("companyContactInformation.address")}
              />
              <TextInput
                label="Company Website"
                placeholder="e.g https://iamdellyson.com"
                {...form.getInputProps("companyContactInformation.website")}
              />
              <TextInput
                label="Company Email"
                placeholder="e.g johndoe@gmail.com"
                {...form.getInputProps("companyContactInformation.email")}
              />
              <TextInput
                label="Company Phone"
                placeholder="e.g +234 703 000 0000"
                {...form.getInputProps("companyContactInformation.phone")}
              />

              <Button type="submit" variant="light" size="sm">
                Generate
              </Button>
            </Stack>{" "}
          </form>
        )}
        {activeTab === "card-settings" && <p>settings</p>}</Navbar.Section>
      </Navbar>}
    >
<Center
          sx={{
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "100vh",
            // background: "gray",
          }}
        >
          <BusinessCard appData={form.values} />
        </Center>

    </AppShell>
  );
};

export default EditorGround;
function BusinessCard(props) {
  const { appData } = props;
  const Router = useRouter();
  const { template } = Router.query;
  console.log(template);
  const temp = templates.find((temp) => temp.name === template);
  return temp ?<temp.component appData={appData} /> : null;
}
{
  /* <Stack>
      <Card
        shadow="sm"
        padding="sm"
        sx={{
          maxWidth: "400px",
          width: "400px",
          height: "200px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            width: "80%",
            display: "flex",
            flexDirection: "column",
            gap: "5px",
          }}
        >
          <div>
            <Text weight={500} size="xl">
              {appData.holdersName}
            </Text>
            <Text color="dimmed" size="sm">
              {appData.position}
            </Text>
          </div>
          <div>
            <Group>
              <ThemeIcon size="md">
                <IconPhone size={24} stroke={1.5} />
              </ThemeIcon>
              <div>
                {appData.companyContactInformation.phone.map((phone) => (
                  <Text key={phone} size="xs" weight={500}>
                    {phone}
                  </Text>
                ))}
              </div>
            </Group>
          </div>
          <div>
            <Group noWrap>
              <ThemeIcon size="md">
                <IconGlobe size={24} stroke={1.5} />
              </ThemeIcon>
              <div>
                {appData.companyContactInformation.website.map((website) => (
                  <Anchor
                    key={website}
                    size="xs"
                    weight={500}
                    sx={{ display: "inline-block" }}
                  >
                    {website}
                  </Anchor>
                ))}
                {appData.companyContactInformation.email.map((email) => (
                  <Text key={email} size="xs" weight={500}>
                    {email}
                  </Text>
                ))}
              </div>
            </Group>
          </div>
          <div>
            <Group>
              <ThemeIcon size="md">
                <IconLocation size={24} stroke={1.5} />
              </ThemeIcon>
              <div>
                <Text size="xs" weight={500}>
                  {appData.companyContactInformation.address}
                </Text>
              </div>
            </Group>
          </div>
        </Box>
        <Avatar src={appData?.companyLogo} sx={{ width: "20%" }} size="xl" />
      </Card>
      <Card
        shadow="sm"
        padding="xl"
        sx={{
          maxWidth: "400px",
          height: "200px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Stack spacing="sm" align="center" justify="center" sx={{width:'100%'}}>
          <Avatar src={appData.companyLogo} size="lg" />
          <Text weight={500} size="lg">
            {appData.companyName}
          </Text>

          <Text color="dimmed" size="sm">
            {appData.companyMotto}
          </Text>
        </Stack>
      </Card>
    </Stack> */
}
