import React from "react";
import toast from "react-hot-toast";

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "ee9c50eb-8246-43bf-9b7b-0d0c5ca5e289");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);
    try{
    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
      toast.success("Message sent SuccessFully 💬")
      event.target.reset();
    }
    else{
      toast.error("Failed to send message. Please Try Again")
    }
  }catch(error){
    toast.error("Something Went Wrong...");
    console.error(error);
    
  }
  };
  // const handleFormSubmit = (formData)=>{
  //     // console.log(formData.entries());
  //     const formInputData = Object.fromEntries(formData.entries());
  //     console.log(formInputData);
  //   };
  return (
    <section className="section-contact">
    <h2 className="container-title">FeedBack Form</h2>

    <div className="contact-wrapper container">
      <form onSubmit={onSubmit}>
        <input
          type="text"
          className="form-control"
          placeholder="Enter your name"
          name="username"
          required
          // autoComplete="off"
        />

        <input
          type="email"
          className="form-control"
          placeholder="Enter your email"
          name="email"
          required
          // autoComplete="off"
        />

        <textarea
          className="form-control"
          rows="10"
          placeholder="Give your Valuable FeedBack..."
          name="message"
          required
          autoComplete="off"
        ></textarea>

        <button type="submit" value="send">
          Send
        </button>
      </form>
    </div>
  </section>
  );
};

export default Contact;
