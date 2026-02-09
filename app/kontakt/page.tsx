'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { motion } from 'framer-motion'
import Link from 'next/link'
import {
  Mail, User, MessageSquare, Send, ArrowRight,
  CheckCircle2, AlertCircle, Loader2, Github,
  ExternalLink, FileText
} from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: 'easeOut' as const },
  }),
}

interface ContactForm {
  name: string
  email: string
  subject: string
  message: string
}

const contactInfo = [
  {
    icon: Mail,
    label: 'E-mail',
    value: 'info@sepot.cz',
    href: 'mailto:info@sepot.cz',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'juliusjoska/sepot',
    href: 'https://github.com/juliusjoska/sepot',
    external: true,
  },
  {
    icon: ExternalLink,
    label: 'ajtak.it',
    value: 'ajtak.it',
    href: 'https://ajtak.it',
    external: true,
  },
]

const subjects = [
  'Obecný dotaz',
  'Nahlášení chyby',
  'Návrh funkce',
  'Bezpečnostní hlášení',
  'Spolupráce',
  'Jiné',
]

export default function KontaktPage() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactForm>()

  async function onSubmit(data: ContactForm) {
    setStatus('loading')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (!res.ok) {
        const json = await res.json().catch(() => ({}))
        throw new Error(json.error || 'Nepodařilo se odeslat zprávu.')
      }

      setStatus('success')
      reset()
    } catch (err) {
      setStatus('error')
      setErrorMsg(err instanceof Error ? err.message : 'Nastala chyba při odesílání.')
    }
  }

  return (
    <div className="mesh-gradient grid-pattern min-h-screen">
      {/* Hero */}
      <section className="section pb-12">
        <div className="container text-center">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={0}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-medium mb-6">
              <MessageSquare size={14} /> Kontakt
            </span>
          </motion.div>
          <motion.h1 className="heading-1 mb-6" initial="hidden" animate="visible" variants={fadeUp} custom={1}>
            Napište <span className="text-gradient">nám</span>
          </motion.h1>
          <motion.p className="text-lg text-muted max-w-2xl mx-auto" initial="hidden" animate="visible" variants={fadeUp} custom={2}>
            Máte dotaz, nápad nebo jste našli chybu? Ozvěte se nám.
            Odpovídáme do 48 hodin.
          </motion.p>
        </div>
      </section>

      {/* Form + Info */}
      <section className="pb-20">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-10 max-w-5xl mx-auto">
            {/* Form */}
            <motion.div
              className="md:col-span-2 card-hover"
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              custom={3}
            >
              {status === 'success' ? (
                <div className="text-center py-12">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', bounce: 0.5 }}
                  >
                    <CheckCircle2 size={56} className="text-accent mx-auto mb-4" />
                  </motion.div>
                  <h3 className="heading-3 mb-2">Zpráva odeslána!</h3>
                  <p className="text-sm text-muted mb-6">
                    Děkujeme za váš zájem. Odpovíme co nejdříve.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="btn-outline text-sm"
                  >
                    Odeslat další zprávu
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    {/* Name */}
                    <div>
                      <label htmlFor="name" className="block text-xs text-muted mb-1.5">
                        Jméno <span className="text-red-400">*</span>
                      </label>
                      <div className="relative">
                        <User size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted" />
                        <input
                          id="name"
                          {...register('name', { required: 'Jméno je povinné' })}
                          placeholder="Jan Novák"
                          className={`w-full pl-10 pr-4 py-2.5 rounded-xl bg-background border text-sm text-foreground placeholder:text-muted/40 focus:outline-none focus:ring-1 transition-all ${
                            errors.name
                              ? 'border-red-400/50 focus:border-red-400 focus:ring-red-400/20'
                              : 'border-border focus:border-accent/50 focus:ring-accent/20'
                          }`}
                        />
                      </div>
                      {errors.name && (
                        <p className="text-xs text-red-400 mt-1">{errors.name.message}</p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="email" className="block text-xs text-muted mb-1.5">
                        E-mail <span className="text-red-400">*</span>
                      </label>
                      <div className="relative">
                        <Mail size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted" />
                        <input
                          id="email"
                          type="email"
                          {...register('email', {
                            required: 'E-mail je povinný',
                            pattern: {
                              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                              message: 'Neplatný formát e-mailu',
                            },
                          })}
                          placeholder="jan@email.cz"
                          className={`w-full pl-10 pr-4 py-2.5 rounded-xl bg-background border text-sm text-foreground placeholder:text-muted/40 focus:outline-none focus:ring-1 transition-all ${
                            errors.email
                              ? 'border-red-400/50 focus:border-red-400 focus:ring-red-400/20'
                              : 'border-border focus:border-accent/50 focus:ring-accent/20'
                          }`}
                        />
                      </div>
                      {errors.email && (
                        <p className="text-xs text-red-400 mt-1">{errors.email.message}</p>
                      )}
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label htmlFor="subject" className="block text-xs text-muted mb-1.5">
                      Předmět <span className="text-red-400">*</span>
                    </label>
                    <div className="relative">
                      <FileText size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted" />
                      <select
                        id="subject"
                        {...register('subject', { required: 'Vyberte předmět' })}
                        className={`w-full pl-10 pr-4 py-2.5 rounded-xl bg-background border text-sm text-foreground appearance-none focus:outline-none focus:ring-1 transition-all ${
                          errors.subject
                            ? 'border-red-400/50 focus:border-red-400 focus:ring-red-400/20'
                            : 'border-border focus:border-accent/50 focus:ring-accent/20'
                        }`}
                      >
                        <option value="">Vyberte předmět...</option>
                        {subjects.map((s) => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                      </select>
                    </div>
                    {errors.subject && (
                      <p className="text-xs text-red-400 mt-1">{errors.subject.message}</p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-xs text-muted mb-1.5">
                      Zpráva <span className="text-red-400">*</span>
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      {...register('message', {
                        required: 'Zpráva je povinná',
                        minLength: { value: 10, message: 'Zpráva musí mít alespoň 10 znaků' },
                      })}
                      placeholder="Vaše zpráva..."
                      className={`w-full px-4 py-2.5 rounded-xl bg-background border text-sm text-foreground placeholder:text-muted/40 focus:outline-none focus:ring-1 transition-all resize-y min-h-[120px] ${
                        errors.message
                          ? 'border-red-400/50 focus:border-red-400 focus:ring-red-400/20'
                          : 'border-border focus:border-accent/50 focus:ring-accent/20'
                      }`}
                    />
                    {errors.message && (
                      <p className="text-xs text-red-400 mt-1">{errors.message.message}</p>
                    )}
                  </div>

                  {status === 'error' && (
                    <div className="flex items-center gap-2 text-sm text-red-400 bg-red-400/10 border border-red-400/20 rounded-lg px-3 py-2">
                      <AlertCircle size={15} />
                      {errorMsg}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {status === 'loading' ? (
                      <>
                        <Loader2 size={16} className="animate-spin" /> Odesílám...
                      </>
                    ) : (
                      <>
                        <Send size={16} /> Odeslat zprávu
                      </>
                    )}
                  </button>
                </form>
              )}
            </motion.div>

            {/* Contact Info */}
            <motion.div
              className="space-y-4"
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              custom={4}
            >
              <h3 className="heading-3 mb-4">Další způsoby</h3>

              {contactInfo.map((info) => (
                <a
                  key={info.label}
                  href={info.href}
                  target={info.external ? '_blank' : undefined}
                  rel={info.external ? 'noopener noreferrer' : undefined}
                  className="card-hover flex items-center gap-4 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0 group-hover:bg-accent/20 transition-colors">
                    <info.icon size={18} className="text-accent" />
                  </div>
                  <div>
                    <p className="text-xs text-muted">{info.label}</p>
                    <p className="text-sm font-medium text-foreground group-hover:text-accent transition-colors">
                      {info.value}
                    </p>
                  </div>
                </a>
              ))}

              <div className="card-hover mt-6">
                <p className="text-xs text-muted mb-2">Bezpečnostní hlášení</p>
                <p className="text-sm text-foreground/70 mb-3">
                  Našli jste bezpečnostní zranitelnost? Prosím kontaktujte nás přímo
                  na e-mail s předmětem &quot;Security&quot;.
                </p>
                <p className="text-xs text-accent">
                  Odpovídáme na bezpečnostní hlášení do 24 hodin.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
