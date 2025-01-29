import Footer from "../Home/Footer/Footer";
import MyHeader from "../Home/MyHeader/MyHeader";

export default function Contact() {
  return (
    <div className="min-vh-100 d-flex flex-column bg-dark-subtle">
      <MyHeader />
      <div className="container d-flex justify-content-center align-items-center mt-5">
        <div className="w-75">
          <div className="alert alert-danger" role="alert">
             PÁGINA TESTE - GITHUB PAGES NÃO SUPORTA BACKEND
          </div>
          <div className="alert alert-danger" role="alert">
            TEST PAGE - GITHUB PAGES WITHOUT SUPPORT TO BACKEND
          </div>
          <h1 className="text-center mb-4">Entre em contato</h1>
          <form>
            {/* Name */}
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Enter your name"
                required
              />
            </div>
            {/* Email */}
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter your email"
                required
              />
            </div>
            {/* Message */}
            <div className="mb-3">
              <label htmlFor="message" className="form-label">
                Message
              </label>
              <textarea
                className="form-control"
                id="message"
                rows="4"
                placeholder="Enter your message"
                required
              ></textarea>
            </div>
            {/* Submit Button */}
            <button type="submit" className="btn btn-dark w-100">
              Send Message
            </button>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
}
