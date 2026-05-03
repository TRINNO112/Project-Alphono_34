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
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-gray-900 leading-tight">
              The reason this <span className="italic text-crimson">exists</span>.
            </h1>
            <p className="text-lg text-gray-500 italic">
              A personal record. Not research. Not neutral. Written before leaving.
            </p>
          </header>

          <section className="prose prose-lg max-w-none space-y-6 text-gray-800 font-serif leading-relaxed">
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

            <h2 className="text-3xl font-bold text-gray-900 !mt-12 !mb-4">
              How I arrived
            </h2>

            <p>
              I came to Gujarat as a child, in the fourth grade. From outside the state, the
              picture was a good one: low crime, industrial growth, well-built roads, a culture
              that took pride in itself and seemed to make room for the rest of the country. I
              believed all of it. As a kid, you trust the picture you are handed. I thought I had
              landed in one of the better corners of India.
            </p>

            <p>
              The picture broke fast. The discrimination did not wait for me to settle in — it
              arrived in the first year. A fourth-grader does not have language for what is
              happening when a classroom sorts itself by who sounds local and who does not, but
              you feel it. You feel it in which kids are picked for the group, who is laughed
              at when they read aloud, which parents do not invite you over. There were a few
              individuals who were kind — a teacher, a family on the street — and I want to be
              honest about that, because I do not want to erase the people who treated me
              decently. But the room itself, from year one, was not a welcoming one.
            </p>

            <p>
              Things got significantly worse in 2018. A horrific crime took place in Surat —
              the rape of a young child — and the accused turned out to be a migrant from a
              northern state. Whatever sympathy the state had been willing to extend to
              outsiders evaporated within days. Mobs attacked Hindi-speaking workers across
              several districts. Thousands of migrant families fled the state. I was not
              physically attacked, but the air in every shop, classroom, and street I walked
              through changed overnight. People who had been curt became hostile. People who
              had been hostile became openly contemptuous. The suspicion was no longer about
              the person who committed the crime — it was about anyone who looked or sounded
              like they had come from where I came from. That shift never fully reversed. It
              just settled in, quieter than it started, and became the new normal.
            </p>

            <p>
              I should also be honest that my reading of all this is shaped by where I lived.
              The industrial belt I grew up in is one of the harder regions for an outsider — it
              is possible the experience is gentler in other parts of the state, and I do not
              want to claim I speak for every district. What I can speak for is the room I
              actually sat in for a decade.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 !mt-12 !mb-4">
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
              I do not speak Gujarati. After ten years. I want to be very precise about why,
              because the easy assumption is the wrong one. It is not because the language is
              difficult — Gujarati is no harder than any other Indian language a child can pick
              up in a year if the people around them want them to. It is not because I refused
              the language out of pride. It is because of how I was treated by the people who
              spoke it. The behaviour came first, and after enough of it, the part of me that
              wanted to learn the language could not survive what learning the language had come
              to feel like. The language itself is not the problem. The way it was used towards
              me was. That is what discrimination does over a long enough timeline — it does not
              just hurt you in the moment, it slowly closes off what you are even capable of
              wanting.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 !mt-12 !mb-4">
              What this project is not
            </h2>

            <p>
              This is not a hate page. I want to be very clear about that, because the line is
              thin and I have walked close to it.
            </p>

            <blockquote className="border-l-4 border-crimson pl-6 py-2 not-italic">
              <p className="text-2xl font-serif text-gray-900">
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

            <h2 className="text-3xl font-bold text-gray-900 !mt-12 !mb-4">
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

            <blockquote className="border-l-4 border-crimson pl-6 py-3 not-italic my-8">
              <p className="text-3xl md:text-4xl font-serif font-bold text-gray-900 leading-tight">
                I am not the last person who will publish this.{' '}
                <span className="text-crimson">I would like to be one of the first.</span>
              </p>
            </blockquote>

            <h2 className="text-3xl font-bold text-gray-900 !mt-12 !mb-4">
              About the anger
            </h2>

            <p>
              I am not pretending to be neutral. I get angry when I think about all of this, and
              the anger comes back every time I try to write it down. I am aware that the anger
              I carry is itself a result of the discrimination. I am aware that it is not a
              clean kind of justice — it is a wound that is shaped like the thing that made it.
              If, in earlier drafts of this page or in things I have said out loud over the
              years, I have spoken harshly about the language or the culture itself rather than
              about the behaviour that hurt me, I want to take that back here. The language is
              not the problem. The culture is not the problem. People are. I am still going to
              publish this. The neutrality I cannot perform is part of the record.
            </p>

            <p>
              The government is theirs. The police is theirs. The newspapers are theirs. There is
              very little a single person can do about any of that. What a single person{' '}
              <span className="italic">can</span> do is write down what happened, with sources
              where there are sources and with their own name where there are not, and make sure
              the document does not disappear.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 !mt-12 !mb-4">
              On who is to blame
            </h2>

            <p>
              I want to say one thing carefully because I do not want to be misread.{' '}
              <span className="font-semibold">Not every Gujarati is bad. Not every migrant is
              good.</span> Some of the suspicion the locals carry has a reason behind it —
              <em> some </em>migrants from northern states have behaved dishonestly, have tried
              to take advantage of people, and have made it harder for everyone who came after
              them. That is real, and I have seen it too. Acknowledging it is part of being
              fair.
            </p>

            <p>
              But the response to "some migrants are dishonest" cannot be "treat all of them as
              less than human." Most of us are here for a livelihood. Some of us are here for a
              dream. If the room we walked into were less hostile, the experience would not look
              like hell. The deeper problem is not language and it is not state — it is{' '}
              <span className="font-semibold">the corruption of the mind that money and greed
              produce</span>, and that corruption exists in every state, including the ones we
              came from.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 !mt-12 !mb-4">
              For the reader who is also living this
            </h2>

            <p>
              <span className="font-semibold">You are not alone.</span> The gap you feel between
              what people say about this state and what you experience inside it is real. It
              has a shape. The thirteen pillars on this site are an attempt to give that shape
              a name in language that holds up under citation. There are thousands of people
              quietly going through what you are going through right now. Find them. Tell your
              story. Use{' '}
              <span className="font-mono text-crimson">#RealityOfGujarat</span> on Twitter / X
              if you want a hashtag — say what actually happened to you, with whatever level of
              detail you are comfortable with. If I find a story that is honest and worth
              amplifying, I will pick it up and add it to this site (with your permission).
            </p>

            <p>
              You do not have to forgive anyone. You do not have to learn the language. You do
              not have to stay. You do not have to be scared.
            </p>

            <p>
              The most useful thing you can do, in the long run, is{' '}
              <span className="font-semibold">go back and build your own state</span>. The
              reason migration to Gujarat exists is that the states we came from did not give
              us what we needed at home. If we make our home regions strong, the next
              generation will not have to walk into this room at all. That is the slow answer.
              It is the only one that actually fixes the problem.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 !mt-12 !mb-4">
              For Gujaratis reading this
            </h2>

            <p>
              If you are Gujarati and you read this far, I am asking you for one thing —{' '}
              <span className="font-semibold">propose a solution.</span> The problem this page
              describes cannot be fixed without you. A record of what is broken is only half of
              a useful document; the other half is what people from inside the community think
              the answer might be.
            </p>

            <p>
              Use{' '}
              <span className="font-mono text-crimson">#GujaratSolutions</span> on Twitter / X.
              The hashtag is for proposals, not arguments — what your community could do
              differently, what you wish your generation had been told, where the published
              story of this state and the lived experience of outsiders could meet again. If a
              thread is honest and useful, I will add it to this site (with your permission),
              the same way I am offering for migrant stories.
            </p>

            <p>
              This is not a fight I am asking you to lose. It is a problem I am asking you to
              help solve. The fact that you read this far means you are someone who could.
            </p>

            <p>
              <span className="font-semibold">People may change.</span> Mindsets shift, but
              slowly — over decades, over generations. The ones who came after Partition were
              not the same as the ones who came after liberalisation. The ones who come after
              this decade will not be the same either. Discrimination at this scale has shifted
              before, every time it has shifted, and it has only ever shifted because people
              wrote things down with their names on them while everyone else stayed quiet.
            </p>

            <p className="text-right italic text-gray-600 !mt-12">
              — The author<br/>
              Gujarat, April 2026
            </p>
          </section>

          <div className="border-t border-parchment-200 pt-8 flex flex-wrap gap-3 justify-center">
            <Link
              to="/migrant-discrimination"
              className="px-6 py-3 rounded-full bg-crimson text-white font-medium hover:bg-crimson-dark transition-colors inline-flex items-center gap-2"
            >
              <Quote className="w-4 h-4" aria-hidden="true" />
              Read the Migrant Discrimination pillar
            </Link>
            <Link
              to="/stories"
              className="px-6 py-3 rounded-full border border-parchment-200 text-gray-900 font-medium hover:bg-parchment-100 transition-colors inline-flex items-center gap-2"
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
