import { useState } from "react";
import { MapPin, Clock, Phone, Mail, Instagram, Facebook } from "lucide-react";
import { BUSINESS } from "../data/site";
import { theme } from "../theme";
import { submitMessage } from "../utils/submit";
import Button from "./Button";

// Business info placeholders + a validated contact form. Nothing is sent until submitMessage is connected.
export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("");
  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });
  const submit = async (e) => {
    e.preventDefault();
    const err = {};
    if (!form.name.trim()) err.name = "Please enter your name.";
    if (!/^\S+@\S+\.\S+$/.test(form.email)) err.email = "Please enter a valid email address.";
    if (form.message.trim().length < 5) err.message = "Please write a short message.";
    setErrors(err); setStatus("");
    if (Object.keys(err).length) return;
    const r = await submitMessage(form);
    setStatus(r.sent ? "Message sent. Thank you!" : "Details look good. Demo only: no message was sent because no form service is connected yet.");
  };
  const info = [[MapPin, "Address", BUSINESS.address], [Clock, "Hours", BUSINESS.hours], [Phone, "Phone", BUSINESS.phone], [Mail, "Email", BUSINESS.email]];
  const field = (k, label, props = {}) => (
    <label className="grid gap-1.5 text-sm font-medium">{label}
      {props.as === "textarea"
        ? <textarea rows={4} value={form[k]} onChange={set(k)} aria-invalid={!!errors[k]} className={theme.field} />
        : <input type={props.type || "text"} value={form[k]} onChange={set(k)} aria-invalid={!!errors[k]} autoComplete={props.auto} className={theme.field} />}
      {errors[k] && <span role="alert" className={theme.err}>{errors[k]}</span>}
    </label>
  );
  return (
    <div className="grid gap-12 md:grid-cols-2">
      <ul className="grid content-start gap-4">
        {info.map(([Icon, label, value]) => (
          <li key={label} className="flex items-center gap-3"><Icon size={20} className={theme.title} aria-hidden="true" /><span className={`font-bold ${theme.title}`}>{label}</span><span>{value}</span></li>
        ))}
        <li className="flex gap-5 pt-2">
          <a href={BUSINESS.instagram} className={`flex items-center gap-2 font-medium hover:underline ${theme.title}`}><Instagram size={20} aria-hidden="true" />Instagram</a>
          <a href={BUSINESS.facebook} className={`flex items-center gap-2 font-medium hover:underline ${theme.title}`}><Facebook size={20} aria-hidden="true" />Facebook</a>
        </li>
      </ul>
      <form onSubmit={submit} noValidate className={`grid gap-4 p-8 ${theme.card}`}>
        {field("name", "Name", { auto: "name" })}{field("email", "Email", { type: "email", auto: "email" })}{field("message", "Message", { as: "textarea" })}
        <Button type="submit">Send Message</Button>
        <p role="status" className={`min-h-[1.5em] font-medium ${theme.title}`}>{status}</p>
      </form>
    </div>
  );
}
