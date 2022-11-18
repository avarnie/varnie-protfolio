import React from "react";


export default function HobbiesCard(){
    return (
        <>
          <div id="hobbies" class="bg-[#B2B2B2] h-50 my-6 py-8 rounded-lg border-4">
          <div class="flex justify-center">
          <h3 class="border-4 w-21  border-dashed px-4 py-4">Hobbies</h3>
        </div>

        <details class="px-6 py-4">
          <summary class="font-bold text-2xl text-gray-800">Reading</summary>
          <p>I love reading cause it build my skill on learning new words.</p>
        </details>

        <details class="px-6 py-4">
          <summary class="font-bold text-2xl text-gray-800">Coding</summary>
          <p>I love coding because it is my dream of becoming a Software Engineer.</p>
        </details>

        <details class="px-6 py-4">
          <summary class="font-bold text-2xl text-gray-800">Photoshop</summary>
          <p>I learning Photoshop to learn how to create a beautiful UI for for Web Application
          </p>
        </details>
          </div>
        </>
    )
};