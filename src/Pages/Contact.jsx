export const Contact = () => {
  const FormSubmit = (e) => {
    // e.preventDefault();
    const formData = new FormData(e.target);
    const FormInputData = Object.fromEntries(formData.entries());
    // console.log(FormInputData);
    alert(`Thank you ${FormInputData.Username}, we will get back to you soon!`);
  };

  return (
    <section className="Container section-class ">
      <div className="mb-5">
        <h1 className="tital">Contact Us</h1>
        <form onSubmit={FormSubmit}>
          <input
            className=" text-black bg-white sm:pr-50 pr-27  rounded-lg px-2 py-2"
            type="text"
            required
            placeholder="Enter your name"
            name="Username"
            autoComplete="off"
          />
          <br />
          <br />

          <input
            className=" text-black bg-white sm:pr-50 pr-27  rounded-lg px-2 py-2"
            type="email"
            required
            placeholder="Enter your email"
            name="email"
            autoComplete="off"
          />
          <br />
          <br />

          <textarea
            className=" text-black bg-white sm:pr-54 pr-34  rounded-lg px-2 py-2"
            rows="10"
            required
            placeholder="Description"
            name="message"
            autoComplete="off"
          ></textarea>
          <br />
          <br />

          <button
            className=" text-black sm:px-43 px-32 rounded-lg py-2 btn-2"
            type="submit"
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
};
