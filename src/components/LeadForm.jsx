import React, { useContext } from "react";
import { SpinnerContext } from "./SpinnerContext";
import { companyDetails } from "../constant";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const LeadForm = () => {
  const { setSpinner } = useContext(SpinnerContext);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    mode: "all",
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
  });

  // handle form submit click
  const handleFormSubmit = async (values) => {
    setSpinner(true);

    var emailBody = "Name: " + values.name + "\n\n";
    emailBody += "Email: " + values.email + "\n\n";
    emailBody += "Phone: " + values.phone + "\n\n";
    emailBody += "Message:\n" + values.message;

    // Construct the request payload
    var payload = {
      to: companyDetails.email,
      subject: values.subject,
      body: emailBody,
    };

    await fetch("https://smtp-api-tawny.vercel.app/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((response) => response.json())
      .then((res) => {
        if (res.error) {
          toast.error(res.error);
        } else {
          toast.success("Email sent successfully");
          reset();
          navigate("/thank-you");
        }
      })
      .catch((error) => {
        toast.error(error.message);
      })
      .finally(() => setSpinner(false));
  };
  return (
    <div className="flex flex-col gap-4 py-[5rem] px-5 bg-dark_surface">
      <h2
        data-aos="fade-up"
        className="heading-2 text-center max-w-[55rem] mx-auto"
      >
        Ready to Ignite Your Brand? <br />
        Let's connect!
      </h2>
      <p data-aos="fade-up" className="desc text-center max-w-[55rem] mx-auto">
        Reach out to us through the form below, or email us directly. Let’s
        start something that makes an impact.
      </p>
      <form
        onSubmit={handleSubmit(handleFormSubmit)}
        data-aos="fade-up"
        className="flex flex-col gap-4 rounded-xl p-8 bg-primary/30 border border-dark_border w-full max-w-4xl mx-auto mt-5 shadow-dark_glow"
      >
        <div className="grid sm:grid-cols-2 gap-5">
          <div className="flex flex-col gap-1">
            <label className="text-sm ml-2 text-secondary_text">Name</label>
            <input
              type="text"
              className="outline-none p-3 rounded-lg bg-dark_surface text-primary_text border border-dark_border focus:border-secondary focus:ring-1 focus:ring-secondary transition-all duration-300"
              placeholder="Name"
              {...register("name", {
                required: "Full name is required",
                validate: (val) => {
                  if (val.trim() !== "") {
                    return true;
                  } else {
                    return "Full name is required";
                  }
                },
              })}
            />
            <small className="error-message">{errors.name?.message}</small>
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-sm ml-2 text-secondary_text">Email</label>
            <input
              type="email"
              className="outline-none p-3 rounded-lg bg-dark_surface text-primary_text border border-dark_border focus:border-secondary focus:ring-1 focus:ring-secondary transition-all duration-300"
              placeholder="Email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                  message: "Entered email is invalid",
                },
              })}
            />
            <small className="error-message">{errors.email?.message}</small>
          </div>
        </div>
        <div className="grid sm:grid-cols-2 gap-5">
          <div className="flex flex-col gap-1">
            <label className="text-sm ml-2 text-secondary_text">Phone</label>
            <input
              type="tel"
              className="outline-none p-3 rounded-lg bg-dark_surface text-primary_text border border-dark_border focus:border-secondary focus:ring-1 focus:ring-secondary transition-all duration-300"
              placeholder="Phone Number"
              {...register("phone", {
                required: "Phone number is required",
                pattern: {
                  value: /^\+?[0-9]{10,15}$/,
                  message: "Entered phone number is invalid",
                },
              })}
            />
            <small className="error-message">{errors.phone?.message}</small>
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-sm ml-2 text-secondary_text">Subject</label>
            <input
              type="text"
              className="outline-none p-3 rounded-lg bg-dark_surface text-primary_text border border-dark_border focus:border-secondary focus:ring-1 focus:ring-secondary transition-all duration-300"
              placeholder="Subject"
              {...register("subject", {
                required: "Subject is required",
                validate: (val) => {
                  if (val.trim() !== "") {
                    return true;
                  } else {
                    return "Subject is required";
                  }
                },
              })}
            />
            <small className="error-message">{errors.subject?.message}</small>
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-sm ml-2 text-secondary_text">Message</label>
          <textarea
            rows="4"
            className="outline-none p-3 rounded-lg bg-dark_surface text-primary_text border border-dark_border focus:border-secondary focus:ring-1 focus:ring-secondary transition-all duration-300"
            placeholder="Message"
            {...register("message", {
              required: "Message is required",
              validate: (val) => {
                if (val.trim() !== "") {
                  return true;
                } else {
                  return "Message is required";
                }
              },
            })}
          />
          <small className="error-message">{errors.message?.message}</small>
        </div>
        <button
          disabled={isSubmitting}
          type="submit"
          className="primary-btn mt-3 w-full"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default LeadForm;
