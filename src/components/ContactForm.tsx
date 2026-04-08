import { useState } from "react";
import { FaCircleNotch } from "react-icons/fa";
import { AnimatePresence, motion } from "motion/react";
import { sendContactEmail } from "@/lib/contact";

type Status =
  | { kind: "idle" }
  | { kind: "submitting" }
  | { kind: "success" }
  | { kind: "error"; message: string };

const NAME_MAX = 100;
const EMAIL_MAX = 254;
const MESSAGE_MAX = 5000;

// Minimum visible duration for the submitting state, so the user always sees
// the loading spinner instead of a one-frame flash on fast responses.
const MIN_SUBMIT_MS = 700;

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [honeypot, setHoneypot] = useState("");
  const [status, setStatus] = useState<Status>({ kind: "idle" });

  const submitting = status.kind === "submitting";

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (submitting) return;

    setStatus({ kind: "submitting" });
    const startedAt = Date.now();

    try {
      await sendContactEmail({
        data: { name, email, message, honeypot },
      });
      const elapsed = Date.now() - startedAt;
      if (elapsed < MIN_SUBMIT_MS) await sleep(MIN_SUBMIT_MS - elapsed);
      setStatus({ kind: "success" });
      setName("");
      setEmail("");
      setMessage("");
    } catch (err) {
      const elapsed = Date.now() - startedAt;
      if (elapsed < MIN_SUBMIT_MS) await sleep(MIN_SUBMIT_MS - elapsed);
      const errorMessage =
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again or email me directly.";
      setStatus({ kind: "error", message: errorMessage });
    }
  }

  const inputClass =
    "w-full rounded-lg border border-muted bg-background/60 px-4 py-2.5 text-base text-secondary-foreground placeholder:text-muted-foreground/70 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors disabled:opacity-50";

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 text-left"
      noValidate
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="mb-1 block text-sm text-muted-foreground">Name</span>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            maxLength={NAME_MAX}
            autoComplete="name"
            disabled={submitting}
            className={inputClass}
            placeholder="Your name"
          />
        </label>
        <label className="block">
          <span className="mb-1 block text-sm text-muted-foreground">Email</span>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            maxLength={EMAIL_MAX}
            autoComplete="email"
            disabled={submitting}
            className={inputClass}
            placeholder="you@example.com"
          />
        </label>
      </div>

      <label className="block">
        <span className="mb-1 block text-sm text-muted-foreground">Message</span>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          maxLength={MESSAGE_MAX}
          rows={5}
          disabled={submitting}
          className={`${inputClass} resize-y min-h-[120px]`}
          placeholder="What's on your mind?"
        />
      </label>

      {/* Honeypot: visually hidden, not announced to assistive tech, kept off
          the tab order. Real users never see or focus this field. */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          left: "-10000px",
          width: "1px",
          height: "1px",
          overflow: "hidden",
        }}
      >
        <label>
          Leave this field empty
          <input
            type="text"
            tabIndex={-1}
            autoComplete="off"
            value={honeypot}
            onChange={(e) => setHoneypot(e.target.value)}
          />
        </label>
      </div>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          disabled={submitting}
          className="group flex items-center justify-center gap-2 border border-muted bg-background px-5 py-3 text-primary rounded-lg hover:bg-secondary hover:border-primary transition-colors disabled:cursor-not-allowed disabled:opacity-80 min-w-[160px]"
        >
          <AnimatePresence mode="wait" initial={false}>
            {submitting ? (
              <motion.span
                key="sending"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.18 }}
                className="flex items-center gap-2 text-secondary-foreground"
              >
                <FaCircleNotch className="animate-spin" aria-hidden="true" />
                Sending
              </motion.span>
            ) : (
              <motion.span
                key="idle"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.18 }}
                className="text-secondary-foreground group-hover:text-primary transition-colors"
              >
                Send Message
              </motion.span>
            )}
          </AnimatePresence>
        </button>

        <div
          className="text-sm min-h-[1.25rem]"
          aria-live="polite"
          role="status"
        >
          <AnimatePresence mode="wait">
            {status.kind === "success" ? (
              <motion.span
                key="success"
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.25 }}
                className="text-primary block"
              >
                Thanks, I'll get back to you soon.
              </motion.span>
            ) : null}
            {status.kind === "error" ? (
              <motion.span
                key="error"
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.25 }}
                className="text-red-400 block"
              >
                {status.message}
              </motion.span>
            ) : null}
          </AnimatePresence>
        </div>
      </div>
    </form>
  );
}
