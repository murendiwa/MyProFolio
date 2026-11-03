import { useState } from "react";
import { site } from "../data/site";
import { Container, SectionTitle, Shield, Sign } from "./ui";

const arrow = (
  <span aria-hidden="true" className="font-display text-3xl leading-none">
    ➜
  </span>
);

const MailIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.7"
    className="size-7"
    aria-hidden="true"
  >
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <polyline points="2,4 12,13 22,4" />
  </svg>
);

const GitHubIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className="size-7"
    aria-hidden="true"
  >
    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className="size-7"
    aria-hidden="true"
  >
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

// round badge that holds each link's icon
const IconBadge = ({ children }) => (
  <span className="flex size-11 shrink-0 sm:size-14 items-center justify-center rounded-lg border-2 border-paper/90">
    {children}
  </span>
);

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const { email, github, linkedin } = site.contact;

  // Email links are unreliable in some viewers, so the address is always visible and copyable.
  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      const range = document.createRange();
      range.selectNodeContents(document.getElementById("email-text"));
      const sel = window.getSelection();
      sel.removeAllRanges();
      sel.addRange(range);
    }
  };

  const rowClass =
    "flex items-center gap-3 border-t border-paper/30 py-4 first:border-t-0 sm:gap-4";
  const label =
    "font-mono text-[11px] tracking-[0.18em] text-paper/70 uppercase";
  const value =
    "font-display text-[clamp(18px,4.6vw,34px)] leading-tight font-bold tracking-wide break-words";

  return (
    <section id="contact" className="py-16 sm:py-24">
      <Container>
        <SectionTitle kicker="Next exit" title="Contact" />

        <Sign tone="service" className="p-5 sm:p-10">
          <div className="mb-6 flex items-center gap-3">
            <Shield>EXIT</Shield>
            <p className="font-display text-3xl font-bold tracking-wide uppercase">
              Let's connect
            </p>
          </div>

          <ul>
            <li className={rowClass}>
              <IconBadge>
                <MailIcon />
              </IconBadge>
              <div className="min-w-0 flex-1">
                <p className={label}>Email</p>
                <a
                  id="email-text"
                  href={`mailto:${email}`}
                  className={`${value} hover:text-marker`}
                >
                  {email.split("@")[0]}
                  <wbr />@{email.split("@")[1]}
                </a>
              </div>
              <button
                type="button"
                onClick={copyEmail}
                className="shrink-0 rounded-md border-2 border-paper px-4 py-1.5 font-display text-lg font-bold tracking-wider uppercase hover:bg-paper hover:text-service"
              >
                {copied ? "Copied" : "Copy"}
              </button>
            </li>

            <li>
              <a
                href={github}
                target="_blank"
                rel="noreferrer"
                className={`${rowClass} hover:text-marker`}
              >
                <IconBadge>
                  <GitHubIcon />
                </IconBadge>
                <div className="min-w-0 flex-1">
                  <p className={label}>GitHub</p>
                  <p className={value}>
                    {
                      github
                        .replace("https://github.com/murendiwa", "")
                        .split("/")[0]
                    }
                    /
                    <wbr />
                    {github
                      .replace("https://github.com/murendiwa", "")
                      .split("/")
                      .slice(1)
                      .join("/")}
                  </p>
                </div>
                {arrow}
              </a>
            </li>

            <li>
              <a
                href={linkedin}
                target="_blank"
                rel="noreferrer"
                className={`${rowClass} hover:text-marker`}
              >
                <IconBadge>
                  <LinkedInIcon />
                </IconBadge>
                <div className="min-w-0 flex-1">
                  <p className={label}>LinkedIn</p>
                  <p className={value}>Murendiwa Matari</p>
                </div>
                {arrow}
              </a>
            </li>
          </ul>
        </Sign>
      </Container>
    </section>
  );
}
