import React from 'react'

function Section(){
    return(
        <>
        <div>
            
        </div>
        <section class="py-16 bg-gray-100">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl font-bold text-center text-gray-800 mb-8">My Projects</h2>
        <p class="text-center text-gray-600 mb-12">A selection of my recent work. Click on the project title for more details.</p>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-8">
            <div class="bg-white shadow-md rounded-lg overflow-hidden">
                <img src="https://th.bing.com/th/id/R.16c90c37a262eccf096cc63d1750dd70?rik=ucctk82ONQTkuA&riu=http%3a%2f%2fcimconautomation.com%2fwp-content%2fuploads%2f2020%2f10%2fAUTOMATIC-METER-READING-side-image.jpg&ehk=EQ6xhddAqJ3Mr0nEBCBvuLhYa0IyMZvzd5z74VG4VEo%3d&risl=&pid=ImgRaw&r=0" alt="Project 1" class="w-full h-48 object-cover"/>
                <div class="p-4">
                    <h3 class="text-lg font-semibold text-gray-800">Project Title 1</h3>
                    <p class="text-gray-600">Meter Reading using Mobile Application</p>
                    <a href="#" class="mt-4 inline-block text-indigo-600 hover:text-indigo-500">View Project</a>
                </div>
            </div>
            <div class="bg-white shadow-md rounded-lg overflow-hidden">
                <img src="https://www.cutehr.io/wp-content/uploads/2020/04/payroll-page-illustration-open-file-1536x934.png" alt="Project 2" class="w-full h-48 object-cover"/>
                <div class="p-4">
                    <h3 class="text-lg font-semibold text-gray-800">Project Title 2</h3>
                    <p class="text-gray-600">Payroll Management System.</p>
                    <a href="#" class="mt-4 inline-block text-indigo-600 hover:text-indigo-500">View Project</a>
                </div>
            </div>
            
            
        </div>
    </div>
</section>
<section class="py-16 bg-gray-100">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl font-bold text-center text-gray-800 mb-8">About Me</h2>
        <p class="text-center text-gray-600 mb-12">
            Hi, I'm Jyoti Waydande, a passionate web developer with a love for creating dynamic and responsive websites.
        </p>
        <div class="flex flex-col items-center">
            <img src="https://agrariandept.gov.lk/web/images/dummy_g.png" alt="Your Name" class="rounded-full mb-4"/>
            <h3 class="text-xl font-semibold text-gray-800">Skills</h3>
            <ul class="list-disc list-inside text-gray-600 mt-2">
                <li>HTML & CSS</li>
                <li>JavaScript & React</li>
                <li>Node.js & Express</li>
                <li>Responsive Web Design</li>
                <li>Version Control (Git)</li>
            </ul>
        </div>
        <div class="mt-12 text-center">
            <h3 class="text-xl font-semibold text-gray-800">Contact Me</h3>
            <p class="text-gray-600 mt-2">Feel free to reach out for collaborations or inquiries!</p>
            <p class="text-gray-600 mt-2">Email: <a href="mailto:your.email@example.com" class="text-indigo-600 hover:text-indigo-500">Jyotiwayadande0107@gmail.com</a></p>
        </div>
    </div>
</section>


        </>
    )
}
export default Section