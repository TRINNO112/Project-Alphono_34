import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Quote, ArrowRight } from 'lucide-react'
import SEO from '../components/SEO'

export default function AuthorsNote() {
  return (
    <>
      <SEO
        title="Author's Note — A Decade in Gujarat as a Hindi Speaker"
        description="A first-person record by a non-Gujarati migrant who lived in Gujarat for over ten years. The infrastructure is great. The people are the problem. Documented before leaving."
        path="/authors-note"
      />

      <main className="max-w-3xl mx-auto px-6 pt-32 pb-32">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-12"
        >
          <header className="space-y-4">
            <div className="text-crimson font-semibold tracking-widest text-sm uppercase">
              Author's Note · April 2026
            </div>
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-gray-900 dark:text-white leading-tight">
              The reason this <span className="italic text-crimson">exists</span>.
            </h1>
            <p className="text-lg text-gray-500 dark:text-gray-400 italic">
              A personal record. Not research. Not neutral. Written before leaving.
            </p>
          </header>

          <section className="prose prose-lg dark:prose-invert max-w-none space-y-6 text-gray-800 dark:text-gray-300 font-serif leading-relaxed">
            <p>
              I am a Hindi speaker. I have lived in Gujarat for more than ten years.
              I am not from here, and after a decade in this state, I have learned that I will
              never be allowed to be from here.
            </p>

            <p>
              This project began as research. It became something else along the way. The thirteen
              pillars that map this state's structural dependencies — energy, water, materials,
              labor, all of it — are real, sourced, and worth reading on their own. But the
              pillar that started everything is the one called{' '}
              <Link to="/migrant-discrimination" className="text-crimson font-semibold hover:underline">
                Migrant Discrimination
              </Link>
              . The other twelve grew around it.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 dark:text-white !mt-12 !mb-4">
              What the data does not say
            </h2>

            <p>
              In school, the Gujarati students sat in one row and the non-Gujarati students sat
              in another. Same classroom. Different rows. Nobody announced this. It just was.
            </p>

            <p>
              In ten years I have not made a single Gujarati best friend. Not for lack of trying
              in the early years — for lack of the trying being returned. The word{' '}
              <span className="font-semibold italic">Hindira</span> (હિંદીરા) is what people like
              me get called. You will not find it in any newspaper. You will hear it on a Tuesday
              afternoon on the way to a chai stall, and the man who said it will not look at you
              when you turn around.
            </p>

            <p>
              I do not speak Gujarati. After ten years. I want to be honest about why: it is not
              because the language is hard. It is because the environment that asked me to learn
              it was hostile, and at some point the part of me that wanted to learn died. That is
              what discrimination does over a long enough timeline. It does not just hurt you in
              the moment — it deforms what you are capable of wanting.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 dark:text-white !mt-12 !mb-4">
              What this project is not
            </h2>

            <p>
              This is not a hate page. I want to be very clear about that, because the line is
              thin and I have walked close to it.
            </p>

            <blockquote className="border-l-4 border-crimson pl-6 py-2 not-italic">
              <p className="text-2xl font-serif text-gray-900 dark:text-white">
                The infrastructure of Gujarat is great. The roads, the ports, the power, the
                industrial scale — all of it works. <span className="text-crimson">The people
                are the problem.</span> That distinction matters.
              </p>
            </blockquote>

            <p>
              I am not writing this because I want to tear down a state. The state has built things
              worth admiring. I am writing this because the official story of Gujarat — the one you
              find on tourism sites, business press, diaspora threads on the internet — is that
              everyone is welcome here and the language and culture make space for you. That story
              is a lie I lived inside for ten years before I admitted it was a lie.
            </p>

            <p>
              Anyone who searches the internet for "is there discrimination against Hindi speakers
              in Gujarat" gets an answer that does not match what they are experiencing on the
              ground. They start to wonder if the problem is them. It is not them. The problem is
              that the lived state and the published state are two different states, and only one
              of them is indexed.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 dark:text-white !mt-12 !mb-4">
              Why publish before leaving
            </h2>

            <p>
              I am going to leave this state. Not today. In a few more years, when the time is
              right. But before I leave I am publishing this, because there is a person younger
              than me, somewhere in north India or the northeast or the south, who will arrive in
              Surat or Ahmedabad next year, full of the optimism the rest of the country tells you
              to have about Gujarat, and within six months they will be in the same room I have
              been in for ten years. They will search for what they are feeling. They will not
              find it. Maybe they will find this.
            </p>

            <p>
              I am not the last person who will publish this. I would like to be one of the first.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 dark:text-white !mt-12 !mb-4">
              About the anger
            </h2>

            <p>
              I am not pretending to be neutral. I get angry when I think about all of this, and
              the anger comes back every time I try to write it down. I am aware that the anger
              I carry is itself a result of the discrimination. I am aware that it is not a
              clean kind of justice — it is a wound that is shaped like the thing that made it.
              I am aware that calling a language ugly is what hurt people do when they are too
              hurt to be careful. I am still going to publish this. The neutrality I cannot perform
              is part of the record.
            </p>

            <p>
              The government is theirs. The police is theirs. The newspapers are theirs. There is
              very little a single person can do about any of that. What a single person{' '}
              <span className="italic">can</span> do is write down what happened, with sources
              where there are sources and with their own name where there are not, and make sure
              the document does not disappear.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 dark:text-white !mt-12 !mb-4">
              For the reader who is also living this
            </h2>

            <p>
              You are not crazy. The gap you feel between what people say about this state and
              what you experience inside it is real. It has a shape. The thirteen pillars on this
              site are an attempt to give that shape a name in language that holds up under
              citation.
            </p>

            <p>
              You do not have to forgive anyone. You do not have to learn the language. You do
              not have to stay. You do, eventually, have to leave the room you were trapped in
              for too long, and you do have to make sure the next person who walks into that
              room knows what they are walking into.
            </p>

            <p className="text-right italic text-gray-600 dark:text-gray-400 !mt-12">
              — The author<br/>
              Gujarat, April 2026
            </p>
          </section>

          <div className="border-t border-parchment-200 dark:border-dark-border pt-8 flex flex-wrap gap-3 justify-center">
            <Link
              to="/migrant-discrimination"
              className="px-6 py-3 rounded-full bg-crimson text-white font-medium hover:bg-crimson-dark transition-colors inline-flex items-center gap-2"
            >
              <Quote className="w-4 h-4" aria-hidden="true" />
              Read the Migrant Discrimination pillar
            </Link>
            <Link
              to="/stories"
              className="px-6 py-3 rounded-full border border-parchment-200 dark:border-dark-border text-gray-900 dark:text-gray-200 font-medium hover:bg-parchment-100 dark:hover:bg-dark-surface transition-colors inline-flex items-center gap-2"
            >
              Human stories
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </div>
        </motion.div>
      </main>
    </>
  )
}
