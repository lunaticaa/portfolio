import { useState } from "react"
import { AnimatePresence, motion } from "motion/react"

function CopyEmailButton() {
  const [copeid, setCopied] = useState(false)
  const email = "amir830047agh@gmail.com"
  const copyToClipBoard = () => {
    navigator.clipboard.writeText(email)
    setCopied(true)
    setTimeout(() => {
      setCopied(false)
    }, 2000)
  }
  return (
    <motion.button whileHover={{ y: -5 }} whileTap={{ scale: 1.05 }} onClick={copyToClipBoard} className="relative px-1 py-4 text-sm text-center rounded-full font-extralight bg-primary w-[12rem] cursor-pointer overflow-hidden">
      <AnimatePresence mode="wait">
        {copeid ? (<motion.p key="copied!" initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 10 }}
          exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.1, ease: "easeInOut" }} className="flex items-center justify-center gap-2"><img src="assets/copy-done.svg" alt="copied icon" className="w-5" /> Email has copied!!</motion.p>) : (
          <motion.p key="copy" initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            exit={{ opacity: 0 }} transition={{ duration: 0.1 }} className="flex items-center justify-center gap-2"> <img src="assets/copy.svg" className="w-5" alt="copy icon" /> Copy Email Address</motion.p>)}
      </AnimatePresence>
    </motion.button>
  )
}

export default CopyEmailButton
