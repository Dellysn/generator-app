// import styled from "@emotion/styled";
import { Kara, DefaultTemplate } from "@/templates";

import { Anchor, Center, Flex, Grid } from "@mantine/core";
import Link from "next/link";
import React from "react";

export const templates = [
  {
    name: "Kara",
    description: "A simple business card template",
    image: "/images/templates/kara.png",
    component: Kara,
  },
  {
    name: "Default",
    description: "A simple business card template",
    image: "/images/templates/default.png",
    component: DefaultTemplate,
  },
];
const TemplatesPage = () => {
  return (
    <Center mt="lg">
      <Flex gap="lg">
        {templates.map((template) => (
          <Anchor
            href={`/app/business-card-generator/editor?template=${template.name}`}
            component={Link}
            key={template.name}
          >

            {
              <template.component
                appData={{
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
                }}
              />
            }
          </Anchor>
        ))}
      </Flex>
    </Center>
  );
};

export default TemplatesPage;
