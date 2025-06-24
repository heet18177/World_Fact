export const Contact = () => {
  const FormSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const FormInputData = Object.fromEntries(formData.entries());
    // console.log(FormInputData);
    alert(`Thank you ${FormInputData.Username}, we will get back to you soon!`);
  };

  return (
    <section className="Container section-class">
      
      <div className="form-main">
        <h1 className="tital">Contact Us</h1>
        <form onSubmit={FormSubmit}>
          <input
            className="form-class"
            type="text"
            required
            placeholder="Enter your name"
            name="Username"
            autoComplete="off"
          />
          <br />
          <br />

          <input
            className="form-class"
            type="email"
            required
            placeholder="Enter your email"
            name="email"
            autoComplete="off"
          />
          <br />
          <br />

          <textarea
            className="form-class"
            rows="10"
            required
            placeholder="Description"
            name="message"
            autoComplete="off"
          ></textarea>
          <br />
          <br />

          <button className="btn-2" type="submit">
            Send
          </button>
        </form>
      </div>
    </section>
  );
};
