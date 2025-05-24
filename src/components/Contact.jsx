import React from 'react';

function Contact() {
  return (
    <section id="contact" className="py-20 px-6 bg-white dark:bg-gray-900">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-10">
          Contact Me
        </h2>

        <form
          action="https://formspree.io/f/mjkwdnwl"  
          method="POST"
          className="bg-gray-100 dark:bg-gray-800 p-8 rounded-xl shadow-md space-y-6"
        >
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Name
            </label>
            <input
              type="text"
              name="name"
              required
              placeholder="Pranav Panchwatkar"
              className="w-full mt-1 p-3 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Email
            </label>
            <input
              type="email"
              name="email"
              required
              placeholder="you@example.com"
              className="w-full mt-1 p-3 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Message
            </label>
            <textarea
              name="message"
              required
              placeholder="Write your message..."
              rows={5}
              className="w-full mt-1 p-3 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition transform hover:scale-105"
          >
            Send Message
          </button>
          <button
            type="button"
            onClick={() => window.location.href = 'tel:+918806815135'}
            className="w-full bg-green-600 text-white py-3 rounded-md hover:bg-green-700 transition transform hover:scale-105"
          >
            Call Me
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
