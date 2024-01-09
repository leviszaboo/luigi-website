import ContactPage from "@/app/components/Contact/ContactPage";
import Menu from "@/app/components/Menu/Menu/Menu";
import MemorizePosition from "@/app/components/Work/MemorizePosition";
import { fetchDoc } from "@/app/service/fetchDocs";

export const revalidate = 0;

export default async function Contact() {
  const ref = `${process.env.NEXT_PUBLIC_USER_EMAIL}/contact-info`;
  const contactInfo = await fetchDoc(ref);

  return (
    <>
      <Menu />
      <MemorizePosition>
        <ContactPage contactInfo={contactInfo} />
      </MemorizePosition>
    </>
  )
}
