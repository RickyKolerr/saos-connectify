
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <Navbar />
      <main className="flex-grow">
        <section className="py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">Privacy Policy</h1>
              <p className="text-xl text-white/70">Last updated: April 15, 2024</p>
            </div>
            
            <div className="max-w-3xl mx-auto prose prose-invert prose-headings:text-white prose-a:text-white/80 hover:prose-a:text-white prose-a:no-underline hover:prose-a:underline">
              <h2>Introduction</h2>
              <p>
                At ORCHESITY, we respect your privacy and are committed to protecting your personal data. This privacy policy will inform you about how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.
              </p>
              
              <h2>Information We Collect</h2>
              <p>
                We may collect, use, store, and transfer different kinds of personal data about you which we have grouped together as follows:
              </p>
              <ul>
                <li>Identity Data includes first name, last name, username, or similar identifier.</li>
                <li>Contact Data includes billing address, email address, and telephone numbers.</li>
                <li>Financial Data includes payment card details.</li>
                <li>Transaction Data includes details about payments to and from you and other details of products and services you have purchased from us.</li>
                <li>Technical Data includes internet protocol (IP) address, your login data, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform, and other technology on the devices you use to access this website.</li>
                <li>Profile Data includes your username and password, purchases or orders made by you, your interests, preferences, feedback, and survey responses.</li>
                <li>Usage Data includes information about how you use our website, products, and services.</li>
                <li>Marketing and Communications Data includes your preferences in receiving marketing from us and our third parties and your communication preferences.</li>
              </ul>
              
              <h2>How We Use Your Data</h2>
              <p>
                We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
              </p>
              <ul>
                <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
                <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
                <li>Where we need to comply with a legal obligation.</li>
              </ul>
              
              <h2>Data Security</h2>
              <p>
                We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used, or accessed in an unauthorized way, altered, or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors, and other third parties who have a business need to know.
              </p>
              
              <h2>Your Legal Rights</h2>
              <p>
                Under certain circumstances, you have rights under data protection laws in relation to your personal data, including the right to:
              </p>
              <ul>
                <li>Request access to your personal data</li>
                <li>Request correction of your personal data</li>
                <li>Request erasure of your personal data</li>
                <li>Object to processing of your personal data</li>
                <li>Request restriction of processing your personal data</li>
                <li>Request transfer of your personal data</li>
                <li>Right to withdraw consent</li>
              </ul>
              
              <h2>Contact Us</h2>
              <p>
                If you have any questions about this privacy policy or our privacy practices, please contact us at privacy@orchesity.com.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
