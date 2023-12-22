import { useState } from "react";
import Button from "./Button";

const FORM_ENDPOINT =
  "https://public.herotofu.com/v1/85365cd0-a059-11ee-9dec-893a2542e245";

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const inputs = e.target.elements;
    const data = {};

    for (let i = 0; i < inputs.length; i++) {
      if (inputs[i].name) {
        data[inputs[i].name] = inputs[i].value;
      }
    }

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Form response was not ok");
      }

      setSubmitted(true);
    } catch (err) {
      console.error(err);
    }
  };

  if (submitted) {
    return (
      <>
        <div className='text-2xl text-gray-800'>Thank you!</div>
        <div className='text-md text-gray-800'>I'll be in touch soon.</div>
      </>
    );
  }

  return (
    <form
      action={FORM_ENDPOINT}
      onSubmit={handleSubmit}
      method='POST'
      className='flex flex-col max-w-md mx-auto border border-gray-300 p-4 rounded shadow-lg bg-white'
    >
      <div className='hidden'>
        <input type='text' name='_gotcha' tabIndex='-1' autoComplete='off' />
      </div>
      <div className='mb-4'>
        <input
          type='text'
          placeholder='Your name'
          name='name'
          className='focus:outline-none focus:ring w-full px-3 py-2 text-sm text-gray-600 placeholder-gray-400 bg-white border-2 border-gray-300 rounded shadow outline-none transition duration-300 ease-in-out'
          required
        />
      </div>
      <div className='mb-4'>
        <input
          type='email'
          placeholder='Email'
          name='email'
          className='focus:outline-none focus:ring w-full px-3 py-2 text-sm text-gray-600 placeholder-gray-400 bg-white border-2 border-gray-300 rounded shadow outline-none transition duration-300 ease-in-out'
          required
        />
      </div>
      <div className='mb-4'>
        <textarea
          placeholder='Your message'
          name='message'
          className='focus:outline-none focus:ring w-full px-3 py-2 text-sm text-gray-600 placeholder-gray-400 bg-white border-2 border-gray-300 rounded shadow outline-none resize-none transition duration-300 ease-in-out'
          required
        />
      </div>
      <div className='flex justify-center'>
        <Button type='submit' text='Submit' />
      </div>
    </form>
  );
};

export default ContactForm;
