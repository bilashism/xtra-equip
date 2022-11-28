import React from "react";

const Blogs = () => {
  return (
    <div className="">
      <div className="mx-auto container px-4">
        <h1 className="text-center text-3xl lg:text-5xl tracking-wider text-gray-900">
          Latest from our Blog
        </h1>
        <div className="mt-12 lg:mt-24">
          <div className="grid lg:grid-cols-2  gap-8">
            {/* article 1 */}
            <div className="">
              <img
                className="w-full"
                src="https://cdn.tuk.dev/assets/components/111220/Blg-6/blog(1).png"
                alt="computer"
              />
              <div className="py-4 px-8 w-full flex justify-between bg-indigo-700">
                <p className="text-sm text-white font-semibold tracking-wide">
                  Bruce Wayne
                </p>
                <p className="text-sm text-white font-semibold tracking-wide">
                  13TH Oct, 2022
                </p>
              </div>
              <div className="bg-white px-10 py-6 rounded-bl-3xl rounded-br-3xl">
                <h2 className="text-4xl text-gray-900 font-semibold tracking-wider">
                  What are the different ways to manage a state in a React
                  application?
                </h2>
                <p className="text-gray-700 text-base lg:text-lg  lg:leading-8 tracking-wide mt-6 w-11/12">
                  In React apps, there are many ways to handle the state. Let us
                  briefly explore a few of them in this part.
                </p>
                <ul className="flex flex-col gap-2 mt-3">
                  <li>
                    <p className="">
                      <b>The URL:</b> The URL should be used as the system of
                      record, Read from it as needed for information related to
                      sorting, pagination, etc. Update the URL as required when
                      the settings change React Router is a great tool to handle
                      routes and manage the params.
                    </p>
                  </li>
                  <li>
                    <p className="">
                      <b>Web Storage:</b>
                      The second option is to store the state in the browser via
                      web storage. This is useful when we want to persist state
                      between reloads and reboots. Examples include cookies,
                      local storage, and IndexedDB. These are native browser
                      technologies.
                    </p>
                  </li>
                  <li>
                    <p className="">
                      <b>Local State:</b>
                      The third option is to use store state locally. It is
                      useful when one component needs the state. Examples
                      include a toggle button, a form, etc.
                    </p>
                  </li>
                  <li>
                    <p className="">
                      <b>Lifted State:</b>
                      The Fourth option is to define the state in the parent
                      component. Often, the same state is used across multiple
                      components. In those cases, it is useful to lift the state
                      to a common parent. The lifting state is a two‑step
                      process. First, we declare the state in a common parent
                      component, and then we pass the state down to child
                      components via props.
                    </p>
                  </li>
                  <li>
                    <p className="">
                      <b>Derived State:</b>
                      The fifth option is to compute the new state based on the
                      available state and we do not need to declare a state at
                      all. If there are existing values that can be composed to
                      give us the information we need, then we can calculate
                      that information on each render instead of storing it.
                    </p>
                  </li>
                </ul>
              </div>
            </div>

            {/* article 2 */}
            <div className="">
              <img
                className="w-full"
                src="https://cdn.tuk.dev/assets/components/111220/Blg-6/blog(1).png"
                alt="computer"
              />
              <div className="py-4 px-8 w-full flex justify-between bg-indigo-700">
                <p className="text-sm text-white font-semibold tracking-wide">
                  James Wayne
                </p>
                <p className="text-sm text-white font-semibold tracking-wide">
                  13TH Oct, 2022
                </p>
              </div>
              <div className="bg-white px-10 py-6 rounded-bl-3xl rounded-br-3xl">
                <h2 className="text-4xl text-gray-900 font-semibold tracking-wider">
                  How does prototypical inheritance work?
                </h2>
                <p className="text-gray-700 text-base lg:text-lg  lg:leading-8 tracking-wide mt-6 w-11/12">
                  Every object with its methods and properties contains an
                  internal and hidden property known as [[Prototype]]. The
                  Prototypal Inheritance is a feature in javascript used to add
                  methods and properties in objects. It is a method by which an
                  object can inherit the properties and methods of another
                  object. Traditionally, in order to get and set the
                  [[Prototype]] of an object, we use Object.getPrototypeOf and
                  Object.setPrototypeOf. Nowadays, in modern language, it is
                  being set using __proto__
                </p>
              </div>
            </div>

            {/* article 3 */}
            <div className="">
              <img
                className="w-full"
                src="https://cdn.tuk.dev/assets/components/111220/Blg-6/blog(1).png"
                alt="computer"
              />
              <div className="py-4 px-8 w-full flex justify-between bg-indigo-700">
                <p className="text-sm text-white font-semibold tracking-wide">
                  John Snow
                </p>
                <p className="text-sm text-white font-semibold tracking-wide">
                  10TH Oct, 2022
                </p>
              </div>
              <div className="bg-white px-10 py-6 rounded-bl-3xl rounded-br-3xl">
                <h2 className="text-4xl text-gray-900 font-semibold tracking-wider">
                  What is a unit test? Why should we write unit tests?
                </h2>

                <p className="text-gray-700 text-base lg:text-lg  lg:leading-8 tracking-wide mt-6 w-11/12">
                  <strong className="">What is a unit test? </strong>
                  <br />A unit test is a way of testing a unit - the smallest
                  piece of code that can be logically isolated in a system. In
                  most programming languages, that is a function, a subroutine,
                  a method or property. The isolated part of the definition is
                  important.
                </p>
                <p className="text-gray-700 text-base lg:text-lg  lg:leading-8 tracking-wide mt-6 w-11/12">
                  <strong className="">Why should we write unit tests? </strong>
                  <br />
                  Well-written unit tests act as documentation for your code.
                  Any developer can quickly look at your tests and know the
                  purpose of your functions. It simplifies the debugging
                  process. Unit testing is an integral part of extreme
                  programming.
                </p>
              </div>
            </div>

            {/* article 4 */}
            <div className="">
              <img
                className="w-full"
                src="https://cdn.tuk.dev/assets/components/111220/Blg-6/blog(1).png"
                alt="computer"
              />
              <div className="py-4 px-8 w-full flex justify-between bg-indigo-700">
                <p className="text-sm text-white font-semibold tracking-wide">
                  Hermit Wayne
                </p>
                <p className="text-sm text-white font-semibold tracking-wide">
                  13TH Oct, 2022
                </p>
              </div>
              <div className="bg-white px-10 py-6 rounded-bl-3xl rounded-br-3xl">
                <h2 className="text-4xl text-gray-900 font-semibold tracking-wider">
                  React vs. Angular vs. Vue?
                </h2>
                <p className="text-gray-700 text-base lg:text-lg  lg:leading-8 tracking-wide mt-6 w-11/12">
                  Angular is a front-end framework with lots of components,
                  services, and tools. On Angular’s site, you can see that they
                  define Angular as:
                  <br />
                  “The modern web developer’s platform”
                  <br />
                  It is developed and maintained by Google developers, but
                  curiously it is not used to implement any of their most common
                  products such as Search or YouTube.
                  <br />
                  <br />
                  React is considered a UI library. They define themselves as:
                  <br />
                  “A JavaScript library for building user interfaces”
                  <br />
                  Facebook developers are behind the development and maintenance
                  of this library. And, in this case, most of Facebook’s
                  products are made with React.
                  <br />
                  <br />
                  Last but not least, Vue.js is, according to its site:
                  <br />
                  “A progressive JavaScript framework”
                  <br />
                  Vue.js is developed and led by Evan You, but also it counts on
                  a huge open-source community.
                  <br />
                  <br />
                  These three frameworks have several things in common, such as
                  each follows a component-based architecture and allows
                  creating UI features quickly. React and Vue.js are mainly
                  declarative, and while Angular could also be declarative, it’s
                  really more imperative. Nevertheless, they present some more
                  differences according to their structure, architecture and way
                  of working.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
