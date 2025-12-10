import { useState } from "react"

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  })
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }
  return (
    <section className="relative flex items-center c-space section-spacing">
      <div className="flex flex-col items-center justify-center max-w-md p-5 mx-auto border border-white/10 rounded-2xl bg-primary">
        <div className="flex flex-col items-start w-full gap-5 mb-10">
          <h2 className="text-heading">Let's talk</h2>
          <p className="font-normal text-neutral-400">whether you're loking to biuld a new website improve your knowladge</p>
        </div>
        <form action="" className="w-full">
          <div className="mb-5">
            <label htmlFor="name" className="field-label" value={formData.name} onChange={handleChange}>Full Name</label>
            <input type="text" name="name" id="name" className="field-input field-input-focus" placeholder="Amir Mohammad" autoComplete="name" required />
          </div>
          <div className="mb-5">
            <label htmlFor="name" className="field-label" value={formData.email} onChange={handleChange}>Email</label>
            <input type="email" name="email" id="email" className="field-input field-input-focus" placeholder="AmirMohammad@gmail.com" autoComplete="name" required />
          </div>
          <div className="mb-5">
            <label htmlFor="name" className="field-label" value={formData.message} onChange={handleChange}>message</label>
            <textarea type="text" rows="4" name="message" id="message" className="field-input field-input-focus" placeholder="share your idea..." autoComplete="message" required />
          </div>
          <button className="w-full px-1 py-3 text-center rounded-md cursor-pointer bg-radial from-lavender to-royal hover-animation">send</button>
        </form>
      </div>
    </section>
  )
}

export default Contact