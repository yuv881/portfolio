import SectionHeading from '../ui/SectionHeading'
import { bodyClass, buttonBase, sectionClass, textLinkClass } from '../ui/styles'

const inputClass = 'w-full rounded-[var(--radius)] border border-[var(--border-strong)] bg-[var(--surface-1)] px-3.5 py-3 text-[var(--text-primary)] outline-none placeholder:text-[var(--text-secondary)] focus:border-[var(--text-accent)] focus:bg-[var(--surface-2)]'

const ContactSection = () => (
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

    <form className="grid gap-4 rounded-(--radius) border border-(--border) bg-(--surface-2) p-[clamp(22px,3vw,30px)]">
      <label className="grid gap-2 text-sm font-bold text-(--text-primary)">
        Name
        <input className={inputClass} type="text" name="name" placeholder="Your name" />
      </label>
      <label className="grid gap-2 text-sm font-bold text-(--text-primary)">
        Email
        <input className={inputClass} type="email" name="email" placeholder="you@example.com" />
      </label>
      <label className="grid gap-2 text-sm font-bold text-(--text-primary)">
        Message
        <textarea className={`${inputClass} resize-y`} name="message" rows="5" placeholder="Tell me what you want to build" />
      </label>
      <button className={`${buttonBase} w-fit border-0 bg-(--text-primary) text-(--surface-2) max-md:w-full`} type="submit">
        Send message
      </button>
    </form>
  </section>
)

export default ContactSection
