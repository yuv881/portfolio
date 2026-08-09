import { useState } from 'react'
import SectionHeading from '../ui/SectionHeading'
import { bodyClass, buttonBase, sectionClass, textLinkClass } from '../ui/styles'

const inputClass = 'w-full rounded-[var(--radius)] border border-[var(--border-strong)] bg-[var(--surface-1)] px-3.5 py-3 text-[var(--text-primary)] outline-none placeholder:text-[var(--text-secondary)] focus:border-[var(--text-accent)] focus:bg-[var(--surface-2)]'

const ContactSection = () => {
  const [result, setResult] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const onSubmit = async (event) => {
    event.preventDefault()
    setIsSubmitting(true)
    setResult("Sending....")

    const formData = new FormData(event.target)
    formData.append("access_key", import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || "")

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      })

      const data = await response.json()
      if (data.success) {
        setResult("Form Submitted Successfully")
        event.target.reset()
      } else {
        setResult(data.message || "Error submitting form")
      }
    } catch (error) {
      setResult("Error submitting form")
      console.log(error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className={`${sectionClass} grid grid-cols-[minmax(0,0.85fr)_minmax(320px,1fr)] items-start gap-[clamp(28px,6vw,72px)] max-md:grid-cols-1`} id="contact">
      <div className="max-w-xl">
        <SectionHeading
          kicker="Contact"
          title="Have an idea to build?"
          className="mb-0"
        />
        <p className={bodyClass}>
          Send a quick note about the project, role, or collaboration. I usually
          reply with next steps and the cleanest way to move forward.
        </p>
        <div className="mt-5.5 flex flex-wrap gap-4.5">
          <a className={textLinkClass} href="mailto:hello@example.com">Email</a>
          <a className={textLinkClass} href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </div>
      </div>

      <form onSubmit={onSubmit} className="grid gap-4 rounded-(--radius) border border-(--border) bg-(--surface-2) p-[clamp(22px,3vw,30px)]">
        <label className="grid gap-2 text-sm font-bold text-(--text-primary)">
          Name
          <input className={inputClass} type="text" name="name" placeholder="Your name" required />
        </label>
        <label className="grid gap-2 text-sm font-bold text-(--text-primary)">
          Email
          <input className={inputClass} type="email" name="email" placeholder="you@example.com" required />
        </label>
        <label className="grid gap-2 text-sm font-bold text-(--text-primary)">
          Message
          <textarea className={`${inputClass} resize-y`} name="message" rows="5" placeholder="Tell me what you want to build" required />
        </label>
        <div className="flex flex-col gap-2">
          <button
            className={`${buttonBase} w-fit border-0 bg-(--text-primary) text-(--surface-2) max-md:w-full disabled:opacity-50`}
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending..." : "Send message"}
          </button>
          {result && (
            <span className="text-sm font-medium text-(--text-primary)">
              {result}
            </span>
          )}
        </div>
      </form>
    </section>
  )
}

export default ContactSection

