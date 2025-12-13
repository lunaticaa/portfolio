import { useState } from "react"
import emailjs from "@emailjs/browser"
import Alert from "../components/Alert"
import { Particles } from "../components/Particles"
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  })

  const [showAlert, setShowAlert] = useState(false)
  const [alertType, setAlertType] = useState("success")

  const [alertMessage, setAlertMessage] = useState("")

  const [isLoading, setIsLoading] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const showAlertMessage = (type, message) => {
    setAlertType(type)
    setAlertMessage(message)
    setShowAlert(true)
    setTimeout(() => {
      setShowAlert(false)
    }, 3000);
  }
  const handleSubmit = async (e) => {
    setIsLoading(true)
    e.preventDefault()

    try {
      console.log("form submitted", formData);
      await emailjs.send("service_29zh44u", "template_bc91vgs", {
        from_name: formData.name,
        to_name: "Amir Mohammad",
        from_email: formData.email,
        message: formData.message,
        to_email: "amir830047ojddgh@gmail.com",
      }, "SCDv_ANPzoQWpqlUs")
      setIsLoading(false)
      setFormData({
        name: "",
        email: "",
        message: ""
      })
      showAlertMessage("success", "Message sent successfully!")
    } catch (error) {
      setIsLoading(false)
      console.log(error);
      showAlertMessage("danger", "Something went wrong. Please try again.")
    }
    // service_29zh44u
    // template_bc91vgs
  }
  return (
    <section className="relative flex items-center c-space section-spacing">
      <Particles
        className="absolute inset-0 -z-50"
        quantity={100}
        ease={80}
        color={"#ffffff"}
        refresh
      />
      {showAlert && <Alert type={alertType} text={alertMessage} />}
      <div className="flex flex-col items-center justify-center max-w-md p-5 mx-auto border border-white/10 rounded-2xl bg-primary">
        <div className="flex flex-col items-start w-full gap-5 mb-10">
          <h2 className="text-heading">Let's talk</h2>
          <p className="font-normal text-neutral-400">whether you're loking to biuld a new website improve your knowladge</p>
        </div>
        <form action="" className="w-full" onSubmit={handleSubmit}>
          <div className="mb-5">
            <label htmlFor="name" className="field-label">Full Name</label>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              className="field-input field-input-focus"
              placeholder="Amir Mohammad"
              autoComplete="name"
              required
            />
          </div>
          <div className="mb-5">
            <label htmlFor="email" className="field-label">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className="field-input field-input-focus"
              placeholder="AmirMohammad@gmail.com"
              autoComplete="email"
              required
            />
          </div>
          <div className="mb-5">
            <label htmlFor="message" className="field-label">Message</label>
            <textarea
              rows="4"
              name="message"
              id="message"
              value={formData.message}
              onChange={handleChange}
              className="field-input field-input-focus"
              placeholder="share your idea..."
              required
            />
          </div>
          <button className="w-full px-1 py-3 text-center rounded-md cursor-pointer bg-radial from-lavender to-royal hover-animation" type="submit">{!isLoading ? "send" : "sending..."}</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
