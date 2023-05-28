import { useRef, useState } from "react";
import "./Contact.scss";
import baseStyles from "../Content.module.scss";

import axios from "axios";
import { cx } from "../../../../../utils/classConstructor";

const personalInfo = {
  address: "Ukraine, Rivne oblast, Dubno town",
  email: "katherineviegh@gmail.com",
  phone: "+38 (095) 167 26 19",
  viber: "+38 (095) 167 26 19",
  telegram: "+38 (095) 167 26 19",
  whatsapp: "+38 (095) 167 26 19",
};

const Contact = () => {
  const [message, setMessage] = useState<string | null>(null);
  const [isSubmitEnabled, setIsSubmitEnabled] = useState(false);

  const formRef = useRef<HTMLFormElement | null>(null);

  const submitForm = async (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();
    const baseUrl = window.location.origin;
    if (formRef.current) {
      const formData = new FormData(formRef.current);
      const data: { [key: string]: any } = {};
      Array.from(formData.entries()).forEach(([key, value]) => {
        data[key] = value;
      });
      try {
        const response = await axios({
          method: "post",
          url: baseUrl + "/contact-form",
          data,
        });
        setMessage(response.data.message);
        setTimeout(() => {
          setMessage(null);
        }, 5000);
      } catch (error) {
        setMessage(String(error));
        setTimeout(() => {
          setMessage(null);
        }, 5000);
      }
    }
  };
  const validateEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event?.currentTarget.value.includes("@")) {
      setIsSubmitEnabled(false);
    } else {
      setIsSubmitEnabled(true);
    }
  };
  return (
    <div
      className={cx({
        "contact-wrapper": true,
        [baseStyles["content-item"]]: true,
      })}
    >
      {message ? (
        <div className={"contact-message"}>
          <p>{message}</p>
        </div>
      ) : (
        <div className={"form-wrapper"}>
          <p>Get in touch</p>
          <form className={"form"} ref={formRef}>
            <input type='text' name='name' placeholder='Contact name' />
            <input
              type='email'
              name='email'
              placeholder='Email'
              onChange={validateEmail}
            />
            <input type='text' name='subject' placeholder='Subject' />
            <textarea name='message' placeholder='Message' rows={10} />
            <button onClick={submitForm} disabled={!isSubmitEnabled}>
              Send Message
            </button>
          </form>
        </div>
      )}
      <div className={"contact-info"}>
        <p>Contact us</p>
        {Object.entries(personalInfo).map(([key, value]) => (
          <div key={key}>
            <img src={`/assets/images/contacts/${key}.svg`} alt='' />
            <span>{value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contact;
