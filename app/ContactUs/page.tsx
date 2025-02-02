"use client";

import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Page = () => {
  const form = useRef<HTMLFormElement>(null);
  const [message, setMessage] = useState("");

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm(
          "service_p5da2nd", // Your Service ID
          "template_j5u3m1g", // Your Template ID
          form.current,
          "fELxl0zmiqvVJ7Q2d" // Your Public Key
        )
        .then(
          () => {
            console.log("SUCCESS!");
          },
          (error) => {
            console.log("FAILED...", error.text);
          }
        );
    } else {
      console.error("Form reference is null");
    }
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      {/* Sender name always "Azeem" */}
      <input type="hidden" name="from_name" value="Azeem" />

      <label>Your Email</label>
      <input type="email" name="user_email" required />

      <label>Recipient Email</label>
      <input type="email" name="to_email" required />

      <label>Message</label>
      <textarea
        name="message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        required
      />

      <input type="submit" value="Send" />
    </form>
  );
};

export default Page;
