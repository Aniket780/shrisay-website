import React from 'react';
import { toast } from 'react-toastify';
import { motion } from 'framer-motion';

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    // Enter your Web3Forms Access Key below
    formData.append("access_key", "4164c5ce-95d1-48fd-bd40-0e651c400740");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("");
      toast.success("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      toast.error(data.message);
      setResult("");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -200 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="text-center p-6 py-20 lg:px-32 w-full overflow-hidden"
      id="Contact"
    >
      <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-center">
        Contact{" "}
        <span className="underline underline-offset-4 decoration-1 font-light">
          With Us
        </span>
      </h1>
      <p className="text-center text-gray-500 mb-12 max-w-80 mx-auto">
        Ready to Make a Move? Let’s Build Your Future Together
      </p>

      <div className="flex flex-wrap lg:flex-nowrap gap-8">
        {/* Google Map */}
        <div className="w-full lg:w-1/2">
          <h3 className="text-lg font-semibold mb-4">Our Address</h3>
          <iframe
            title="Google Map"
            className="w-full h-64 lg:h-full border border-gray-300 rounded"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.2622525803868!2d88.42825807507882!3d22.60667997946743!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a027586022c401b%3A0xb83a195876c7624!2sGopal%20Apartment!5e0!3m2!1sen!2sin!4v1734951087909!5m2!1sen!2sin"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>

        {/* Contact Form */}
        <div className="w-full lg:w-1/2">
          <form
            onSubmit={onSubmit}
            className="max-w-2xl mx-auto text-gray-600 pt-8"
          >
            <div className="flex flex-wrap">
              <div className="w-full md:w-1/2 text-left">
                Name
                <input
                  className="w-full border border-gray-300 rounded py-3 px-4 mt-2"
                  type="text"
                  name="Name"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div className="w-full md:w-1/2 text-left md:pl-4">
                Email
                <input
                  className="w-full border border-gray-300 rounded py-3 px-4 mt-2"
                  type="email"
                  name="Email"
                  placeholder="Your Email"
                  required
                />
              </div>
            </div>
            <div className="flex flex-wrap">
              <div className="w-full md:w-1/2 text-left">
                Phone Number
                <input
                  className="w-full border border-gray-300 rounded py-3 px-4 mt-2"
                  type="Number"
                  name="Phone Number"
                  placeholder="Your Phone No."
                  required
                />
              </div>
              <div className="w-full md:w-1/2 text-left md:pl-4">
                WhatsApp Number
                <input
                  className="w-full border border-gray-300 rounded py-3 px-4 mt-2"
                  type="Number"
                  name="WhatsApp Number"
                  placeholder="Your WhatsApp No."
                  required
                />
              </div>
            </div>

            <div className="my-6 text-left">
              Address
              <textarea
                className="w-full border border-gray-300 rounded py-3 px-4 mt-2 h-12 resize-none"
                name="Address"
                placeholder="Your Address"
              ></textarea>
            </div>

            <div className="my-6 text-left">
              Message
              <textarea
                className="w-full border border-gray-300 rounded py-3 px-4 mt-2 h-48 resize-none"
                name="Message"
                placeholder="Enter your Message"
              ></textarea>
            </div>

            <button className="bg-blue-600 text-white py-2 px-12 mb-10 rounded">
              {result ? result : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
