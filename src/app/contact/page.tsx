import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Page | Médula",
  description: "Software Automation, Web Development | Médula",
  // other metadata
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Contact Page"
         // Add the required attribute(s) here
      />
      <Contact bg={false}/>
    </>
  );
};

export default ContactPage;
