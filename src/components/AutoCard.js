import React, { useState } from "react";

export default function AutoCard({ setIsActive, isActive }) {
  function handleActive(e) {
    e.preventDefault();

    setIsActive({
      active: true,
      name: e.target.id,
    });
  }
  return (
    <>
      <div
        id="intro"
        class="bg-[#
            3EAEAEA] h-auto my-6 py-8 rounded-lg border-4"
      >
        <div id="avatar" class="flex justify-center py-2">
          <img
            class="w-40"
            src="https://avarnie.github.io/cv-1/images/AbrahamC.png"
            alt="JB image"
          />
        </div>
        <div id="content" class="prose lg:prose-xl px-2">
          <h1 class="text-center text-gray-800 text-4xl capitalize font-medium">
            Abraham Varnie
          </h1>
          <small class="text-center block text-md text-gray-800">
            Graphics Designer &amp; Software Engineer
          </small>
          <p class="text-justify text-lg text-gray-800">
            Hello, my name is Abrahm Varnie. I am a student of Starz University.
            I am currently studing React at Orange Digital Center.
          </p>
        </div>

        <div id="hero-nav" className="p-6 w-full mx-auto ">
          <ul className="flex items-center justify-center mx-4px px-2 gap-4">
            <li className="border border-[#B2B2B2] p-2 rounded-lg">
              <a
                href="#education"
                id="education"
                className={`${
                  isActive.active &&
                  isActive.name === "education" &&
                  "font-bold"
                } font-lato text-xl`}
                onClick={handleActive}
              >
                Education
              </a>
            </li>

            <li className="border border-[#B2B2B2] p-2 rounded-lg">
              <a
                href="#work"
                id="work"
                className={`${
                  isActive.active && isActive.name === "work" && "font-bold"
                } font-lato text-xl`}
                onClick={handleActive}
              >
                Work
              </a>
            </li>

            <li className="border border-[#B2B2B2] p-2 rounded-lg ">
              <a
                href="#hobbies"
                id="hobbies"
                className={`${
                  isActive.active && isActive.name === "hobbies" && "font-bold"
                } font-lato text-xl`}
                onClick={handleActive}
              >
                Hobbies
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
