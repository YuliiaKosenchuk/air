"use client";

import * as motion from "motion/react-client";
import { useActionState, useCallback, useEffect, useState } from "react";
import { sendContact } from "../../actions/contact";
import Button from "../Button/Button";
import styles from "./ContactForm.module.scss";
import { AnimatePresence } from "motion/react";
import SuccessModal from "../SuccessModal/SuccessModal";

const FIELDS = [
  {
    name: "email",
    type: "email",
    placeholder: "Your email",
    component: "input",
    defaultValue: "onboarding@resend.dev",
    readOnly: true,
  },
  { name: "name", type: "text", placeholder: "Your name", component: "input" },
  {
    name: "message",
    type: "text",
    placeholder: "Your message",
    component: "textarea",
  },
];

export default function ContactForm() {
  const [state, formAction, isPending] = useActionState(sendContact, null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formKey, setFormKey] = useState(0);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (state?.errors) {
      const timeout = setTimeout(() => {
        // timeout crutch, sorry - need to be added to the stack separate
        setErrors(state.errors);
      }, 0);
      return () => clearTimeout(timeout);
    }

    if (state?.error) {
      const timeout = setTimeout(() => {
        // timeout crutch, sorry - need to be added to the stack separate
        setErrors((prev) => ({ ...prev, global: state.error }));
      }, 0);
      return () => clearTimeout(timeout);
    }

    if (state?.success) {
      const timeout = setTimeout(() => {
        // timeout crutch, sorry - need to be added to the stack separate
        setIsModalOpen(true);
        setFormKey((prev) => prev + 1);
        setErrors({});
      }, 0);
      return () => clearTimeout(timeout);
    }
  }, [state]);

  const handleInput = useCallback(
    (fieldName) => {
      if (errors[fieldName] || errors.global) {
        setErrors((prev) => {
          const next = { ...prev };
          delete next[fieldName];
          delete next.global;
          return next;
        });
      }
    },
    [errors],
  );

  return (
    <>
      <motion.form
        key={formKey}
        action={formAction}
        className={styles.form}
        noValidate
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        {/* Bot trap */}
        <input
          type="text"
          name="company"
          style={{ display: "none" }}
          tabIndex={-1}
        />

        {FIELDS.map((field) => {
          const hasError = !!errors[field.name];
          const Tag = field.component;

          return (
            <div
              key={field.name}
              className={`${styles.inputGroup} ${hasError ? styles.hasError : ""}`}
            >
              <Tag
                name={field.name}
                type={field.type}
                placeholder={field.placeholder}
                onInput={() => handleInput(field.name)}
                rows={field.component === "textarea" ? 1 : undefined}
                defaultValue={field.defaultValue}
                readOnly={field.readOnly}
              />
              <div className={styles.line} />

              <AnimatePresence mode="wait">
                {hasError && (
                  <motion.span
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -2 }}
                    className={styles.errorMessage}
                  >
                    {errors[field.name][0]}
                  </motion.span>
                )}
              </AnimatePresence>
            </div>
          );
        })}

        <div className={styles.footer}>
          <Button
            type="submit"
            btnText={isPending ? "Sending..." : "Send"}
            disabled={isPending}
            className={styles.submitBtn}
          />

          <AnimatePresence>
            {errors.global && (
              <motion.p
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className={styles.error}
              >
                {errors.global}
              </motion.p>
            )}
          </AnimatePresence>
        </div>
      </motion.form>

      <AnimatePresence>
        {isModalOpen && <SuccessModal onClose={() => setIsModalOpen(false)} />}
      </AnimatePresence>
    </>
  );
}
