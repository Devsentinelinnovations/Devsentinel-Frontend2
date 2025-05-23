import Address from "../components/contact/Address";
import Business from "../components/contact/Business";
import Student from "../components/contact/Student";
import Navbar from "../components/landing/Navbar";

function Contact() {
  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto px-5 xl:px-0  ">
        <div className="flex flex-col items-start gap-4 mt-20 mb-10 lg:my-20">
          <p className="flex justify-center text-sm text-text bg-text/10 font-semibold items-center px-3 py-1 border rounded-2xl">
            Contact us
          </p>
          <h1 className="lg:text-5xl text-3xl font-bold mb-4">
            How can we help you?
          </h1>
          <p className="text-base font-semibold max-w-3xl">
            If you want to make enquiries about building project or you want to
            take a bold step by enrolling in one of our courses in Tech, fill
            the form.
          </p>
        </div>
        <Student />
        <Business />
        <Address />
      </div>
    </div>
  );
}
export default Contact;
