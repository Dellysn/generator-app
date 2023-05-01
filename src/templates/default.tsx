import { CardInformation } from "@/pages/app/business-card-generator/editor";
import { convertRawImageToBase64 } from "@/utils/helper";
import {
  Avatar,
  Box,
  Card,
  Divider,
  Group,
  Image,
  Stack,
  Text,
  createStyles,
} from "@mantine/core";
import logo from "@public/flowery_logo.png";

const useStyles = createStyles((theme) => ({
  front_wrapper: {
    backgroundColor: "#Ffffff",
    boxShadow: "2px 5px 20px 3px rgba(0, 0, 0, 0.35)",
    width: "400px",
    height: "200px",
    borderRadius: "30px",
    color: "#505050",
  },
  back_wrapper: {
    backgroundColor: "#505050",
    boxShadow: "2px 5px 20px 3px rgba(0, 0, 0, 0.35)",
    width: "400px",
    height: "200px",
    borderRadius: "30px",
    color: "#ffffff",
  },
}));

function TemplateDefaultFront({ appData }: { appData: CardInformation }) {
  const { classes } = useStyles();
  return (
    <Card className={classes.front_wrapper}>
      <Stack align="center" justify="space-evenly" sx={{ height: "100%" }}>
        <div>
          <Text size="xl" align="center">
            {appData.companyName ? appData.companyName : "Lorem Ipsum"}
          </Text>
          <Text size="xs" align="center">
            {appData.companyMotto
              ? appData.companyMotto
              : "This is a default motto"}
          </Text>
        </div>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "10px",
            // paddingTop:'20px'
          }}
        >
          <Text weight="lighter" size="xl">
            {appData.position ? appData.position : "Position"}
          </Text>
          <Group noWrap>
            <div>
              <Text weight="lighter" align="right" size="sm">
                {appData.companyContactInformation.address
                  ? appData.companyContactInformation.address
                  : "123 Anyweree ST. Old City ST. 0967"}
              </Text>
              <Text weight="lighter" align="right" size="sm">
                {appData.companyContactInformation.phone
                  ? appData.companyContactInformation.phone.join(", ")
                  : "(123) 456-7890"}
              </Text>
            </div>
            <Divider orientation="vertical" size="md" />
            <div>
              <Text weight="lighter" size="sm">
                {appData.companyContactInformation.email
                  ? appData.companyContactInformation.email
                  : "yourfakeemail@email.com"}
              </Text>
              <Text weight="lighter" size="sm">
                {appData.companyContactInformation.website
                  ? appData.companyContactInformation.website
                  : "www.yourwebsite.com"}
              </Text>
            </div>
          </Group>
        </Box>
      </Stack>
    </Card>
  );
}
function TemplateDefaultBack({ appData }: { appData: CardInformation }) {
  const { classes } = useStyles();

  return (
    <Card className={classes.back_wrapper}>
      <Stack align="center" spacing={5}>
        {/* <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "10px",
            // paddingTop:'20px'
          }}
        > */}
        <Image
          src={
            appData.companyLogo
              ? convertRawImageToBase64(appData.companyLogo as any)
              : logo.src
          }
          width={150}
          height={100}
          fit="cover"
          alt="logo"
        />
        <Text size="lg">
          {appData.companyName ? appData.companyName : "CAMILLA & CO"}
        </Text>
        <Text size="xs">
          {appData.companyMotto
            ? appData.companyMotto
            : "This is a default motto"}
        </Text>
        {/* </Box> */}
      </Stack>
    </Card>
  );
}
export default function Default({ appData }: { appData: CardInformation }) {
  return (
    <Stack spacing="sm">
      <TemplateDefaultFront appData={appData} />
      <TemplateDefaultBack appData={appData} />
    </Stack>
  );
}
