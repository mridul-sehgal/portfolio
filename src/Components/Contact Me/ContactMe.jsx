import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Header from "../Header";
import emailjs from "emailjs-com";
import { useState } from "react";
import PageWrapper from "../PageWrapper/PageWrapper";
import {
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";


const ContactMe = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    phone: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .send(
        "service_r5uw2fh",
        "template_a86v1wp",
        formData,
        "csjoVqmGM0VuTz07A"
      )
      .then(
        (result) => {
          alert("Message sent successfully!");
          setFormData({ name: "", email: "", phone: "", message: "" });
          console.log(result);
        },
        (error) => {
          alert("Failed to send the message, please try again.");
          console.log(error);
        }
      );
  };

  return (
    <PageWrapper>
      <div className="w-screen h-screen bg-[#0F0F0F] font-kodeMono hidden xl:block">
        <Header />
        <div className="grid grid-cols-3 mb-6 gap-16 mx-20 ">
          <div className="col-span-2 border-2 px-6 rounded-2xl border-[#64ccc5]">
            <div className="text-center text-5xl my-6 font-semibold text-[#64ccc5] ">
              CONTACT ME
            </div>
            <form
              onSubmit={sendEmail}
              style={{ display: "flex", flexDirection: "column", gap: "15px" }}
            >
              <label
                className="text-xl font-semibold text-[#64ccc5]"
                htmlFor="name"
              >
                Name:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="rounded-lg p-2 font-semibold"
              />

              <label
                className="text-xl font-semibold text-[#64ccc5]"
                htmlFor="email"
              >
                Email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="rounded-lg p-2 font-semibold"
              />

              <label
                className="text-xl font-semibold text-[#64ccc5]"
                htmlFor="phone"
              >
                Phone Number:
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="Your Phone Number"
                value={formData.phone}
                onChange={handleChange}
                required
                className="rounded-lg p-2 font-semibold"
              />

              <label
                className="text-xl font-semibold text-[#64ccc5]"
                htmlFor="message"
              >
                Message:
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
                className="rounded-lg p-1 font-semibold"
              />
              <div className="flex justify-center items-center">
                <button
                  className="bg-[#64ccc5] w-28 h-10 mb-4 rounded-2xl text-black text-xl font-semibold"
                  type="submit"
                >
                  Send
                </button>
              </div>
            </form>
          </div>
          <div className="col-span-1 py-24 px-1">
            <p className="text-3xl font-semibold text-[#64ccc5]">
              Can find me here as well :-
            </p>
            <div className="flex flex-col items-start justify-center gap-5 my-8">
              <button className="flex gap-5 text-[#64ccc5] hover:text-white ">
                {" "}
                <a href="https://github.com/mridul-sehgal" target="_blank">
                  <FontAwesomeIcon icon={faGithub} className="text-4xl" />
                </a>
                <p className="text-2xl font-semibold ">mridul-sehgal </p>
              </button>

              <button className="flex gap-5 text-[#64ccc5] hover:text-white ">
                <a
                  href="https://www.linkedin.com/in/mridul-sehgal-937754238/"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faLinkedin} className=" text-4xl" />
                </a>
                <p className="text-2xl font-semibold ">Mridul Sehgal</p>
              </button>

              <button className="flex gap-5 text-[#64ccc5] hover:text-white ">
                <a
                  href="https://www.instagram.com/mridul_sehgal14/"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faInstagram} className="text-4xl" />
                </a>
                <p className="text-2xl font-semibold ">mridul_sehgal14</p>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="w-screen h-screen bg-[#0F0F0F] font-kodeMono hidden lg:block xl:hidden">
        <Header />
        <div className="grid grid-cols-3 mb-6 gap-8 mx-12 ">
          <div className="col-span-2 border-2 px-4 rounded-2xl border-[#64ccc5]">
            <div className="text-center text-3xl my-2 font-semibold text-[#64ccc5] ">
              CONTACT ME
            </div>
            <form
              onSubmit={sendEmail}
              style={{ display: "flex", flexDirection: "column", gap: "8px" }}
            >
              <label
                className="text-lg font-semibold text-[#64ccc5]"
                htmlFor="name"
              >
                Name:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="rounded-lg p-2 font-semibold"
              />

              <label
                className="text-lg font-semibold text-[#64ccc5]"
                htmlFor="email"
              >
                Email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="rounded-lg p-2 font-semibold"
              />

              <label
                className="text-lg font-semibold text-[#64ccc5]"
                htmlFor="phone"
              >
                Phone Number:
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="Your Phone Number"
                value={formData.phone}
                onChange={handleChange}
                required
                className="rounded-lg p-2 font-semibold"
              />

              <label
                className="text-lg font-semibold text-[#64ccc5]"
                htmlFor="message"
              >
                Message:
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
                className="rounded-lg p-1 font-semibold"
              />
              <div className="flex justify-center items-center">
                <button
                  className="bg-[#64ccc5] w-28 h-10 mb-3 rounded-2xl text-black text-xl font-semibold"
                  type="submit"
                >
                  Send
                </button>
              </div>
            </form>
          </div>
          <div className="col-span-1 py-24 px-1">
            <p className="text-xl font-semibold text-[#64ccc5]">
              Can find me here as well :-
            </p>
            <div className="flex flex-col items-start justify-center gap-5 my-8">
              <button className="flex gap-5 text-[#64ccc5] hover:text-white ">
                {" "}
                <a href="https://github.com/mridul-sehgal" target="_blank">
                  <FontAwesomeIcon icon={faGithub} className="text-2xl" />
                </a>
                <p className="text-xl font-semibold ">mridul-sehgal </p>
              </button>

              <button className="flex gap-5 text-[#64ccc5] hover:text-white ">
                <a
                  href="https://www.linkedin.com/in/mridul-sehgal-937754238/"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faLinkedin} className=" text-2xl" />
                </a>
                <p className="text-xl font-semibold ">Mridul Sehgal</p>
              </button>

              <button className="flex gap-5 text-[#64ccc5] hover:text-white ">
                <a
                  href="https://www.instagram.com/mridul_sehgal14/"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faInstagram} className="text-2xl" />
                </a>
                <p className="text-xl font-semibold ">mridul_sehgal14</p>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="w-screen h-screen bg-[#0F0F0F] font-kodeMono hidden md:block lg:hidden">
        <Header />
        <div className="mb-6 gap-8 mx-12 ">
          <div className="border-2 px-4 rounded-2xl border-[#64ccc5]">
            <div className="text-center text-4xl my-6 font-semibold text-[#64ccc5] ">
              CONTACT ME
            </div>
            <form
              onSubmit={sendEmail}
              style={{ display: "flex", flexDirection: "column", gap: "16px" }}
            >
              <label
                className="text-2xl font-semibold text-[#64ccc5]"
                htmlFor="name"
              >
                Name:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="rounded-lg p-2 font-semibold"
              />

              <label
                className="text-2xl font-semibold text-[#64ccc5]"
                htmlFor="email"
              >
                Email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="rounded-lg p-2 font-semibold"
              />

              <label
                className="text-2xl font-semibold text-[#64ccc5]"
                htmlFor="phone"
              >
                Phone Number:
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="Your Phone Number"
                value={formData.phone}
                onChange={handleChange}
                required
                className="rounded-lg p-2 font-semibold"
              />

              <label
                className="text-2xl font-semibold text-[#64ccc5]"
                htmlFor="message"
              >
                Message:
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
                className="rounded-lg p-1 font-semibold"
              />
              <div className="flex justify-center items-center">
                <button
                  className="bg-[#64ccc5] w-32 h-10 mb-3 rounded-2xl text-black text-2xl font-semibold"
                  type="submit"
                >
                  Send
                </button>
              </div>
            </form>
          </div>
          <div className="py-10 px-1 ">
            <p className="text-xl font-semibold text-center text-[#64ccc5]">
              Can find me here as well :-
            </p>
            <div className="flex flex-col items-center justify-center gap-5 my-8">
              <button className="flex gap-5 text-[#64ccc5] hover:text-white ">
                {" "}
                <a href="https://github.com/mridul-sehgal" target="_blank">
                  <FontAwesomeIcon icon={faGithub} className="text-2xl" />
                </a>
                <p className="text-xl font-semibold ">mridul-sehgal </p>
              </button>

              <button className="flex gap-5 text-[#64ccc5] hover:text-white ">
                <a
                  href="https://www.linkedin.com/in/mridul-sehgal-937754238/"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faLinkedin} className=" text-2xl" />
                </a>
                <p className="text-xl font-semibold ">Mridul Sehgal</p>
              </button>

              <button className="flex gap-5 text-[#64ccc5] hover:text-white ">
                <a
                  href="https://www.instagram.com/mridul_sehgal14/"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faInstagram} className="text-2xl" />
                </a>
                <p className="text-xl font-semibold ">mridul_sehgal14</p>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="w-screen h-screen bg-[#0F0F0F] font-kodeMono block md:hidden">
        <Header />
        <div className="mb-6 gap-8 mx-6  ">
          <div className="border-2 px-4 rounded-2xl border-[#64ccc5]">
            <div className="text-center text-4xl my-6 font-semibold text-[#64ccc5] ">
              CONTACT ME
            </div>
            <form
              onSubmit={sendEmail}
              style={{ display: "flex", flexDirection: "column", gap: "16px" }}
            >
              <label
                className="text-2xl font-semibold text-[#64ccc5]"
                htmlFor="name"
              >
                Name:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="rounded-lg p-2 font-semibold"
              />

              <label
                className="text-2xl font-semibold text-[#64ccc5]"
                htmlFor="email"
              >
                Email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="rounded-lg p-2 font-semibold"
              />

              <label
                className="text-2xl font-semibold text-[#64ccc5]"
                htmlFor="phone"
              >
                Phone Number:
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="Your Phone Number"
                value={formData.phone}
                onChange={handleChange}
                required
                className="rounded-lg p-2 font-semibold"
              />

              <label
                className="text-2xl font-semibold text-[#64ccc5]"
                htmlFor="message"
              >
                Message:
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
                className="rounded-lg p-1 font-semibold"
              />
              <div className="flex justify-center items-center">
                <button
                  className="bg-[#64ccc5] w-32 h-10 mb-3 rounded-2xl text-black text-2xl font-semibold"
                  type="submit"
                >
                  Send
                </button>
              </div>
            </form>
          </div>
          <div className="py-10 px-1 ">
            <p className="text-xl font-semibold text-center text-[#64ccc5]">
              Can find me here as well :-
            </p>
            <div className="flex flex-col items-center justify-center gap-5 my-8">
              <button className="flex gap-5 text-[#64ccc5] hover:text-white ">
                {" "}
                <a href="https://github.com/mridul-sehgal" target="_blank">
                  <FontAwesomeIcon icon={faGithub} className="text-2xl" />
                </a>
                <p className="text-xl font-semibold ">mridul-sehgal </p>
              </button>

              <button className="flex gap-5 text-[#64ccc5] hover:text-white ">
                <a
                  href="https://www.linkedin.com/in/mridul-sehgal-937754238/"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faLinkedin} className=" text-2xl" />
                </a>
                <p className="text-xl font-semibold ">Mridul Sehgal</p>
              </button>

              <button className="flex gap-5 text-[#64ccc5] hover:text-white ">
                <a
                  href="https://www.instagram.com/mridul_sehgal14/"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faInstagram} className="text-2xl" />
                </a>
                <p className="text-xl font-semibold ">mridul_sehgal14</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default ContactMe;
