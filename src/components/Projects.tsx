"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const data = [
    {
        id: 1,
        title: "AI Image Generator",
        description: "AI Image Generator: This project leverages advanced AI techniques to generate stunning images based on user input. Built with Next.js and TypeScript, it offers a seamless and dynamic user experience while utilizing Prisma for efficient database management and Neon for enhanced scalability. The stylish interface incorporates ShadCN to provide an intuitive design, making it easy for users to create high-quality images effortlessly.",
        link: "https://github.com/AlishaKK/AI-Image-Generator.git",
        images: ["/AiHis.png", "/AiImage.png", "/AiCreate.png"],
        tags: ["Next.js", "Typescript", "ShadCN", "Prisma", "Neon"]
    },
    {
        id: 2,
        title: "Feast & Fussion",
        description: "Feast & Fussion: This innovative web application brings culinary inspiration to your fingertips by combining diverse recipes and food ideas. Designed using Next.js and TypeScript, it ensures robust performance and type safety. The responsive interface employs Tailwind CSS for a modern, sleek design and ShadCN for enhanced UI components, allowing users to easily explore and discover new dishes.",
        link: "https://github.com/AlishaKK/Next-Js.git",
        images: ["/Feast.png", "/fussion.png", "/fff.png", "/fu.png"],
        tags: ["Next.js", "Typescript", "ShadCN", "tailwindCss"]
    },
    {
        id: 3,
        title: "Weather app & countdown",
        description: "Weather App & Countdown: This versatile application provides real-time weather updates and a countdown feature for upcoming events or deadlines. Built with Next.js and TypeScript, it offers a dynamic and responsive user experience. Users can easily check the weather conditions in their area while keeping track of important dates.",
        link: "https://github.com/AlishaKK/WeatherApp.git",
        images: ["/weatherApp.png", "/project1.png", "/pp.png"],
        tags: ["Next.js", "Typescript"]
    },
];

function Projects() {
    return (
        <div id="projects" className="container mx-auto p-4">
            <h1 className="text-4xl flex items-center justify-center font-bold mb-4">My Projects</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {data.map(project => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        </div>
    );
}

function ProjectCard({ project }) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex(prevIndex => (prevIndex + 1) % project.images.length);
        }, 3000); // Change image every 3 seconds

        return () => clearInterval(interval); // Cleanup on component unmount
    }, [project.images.length]);

    return (
        <div className="border rounded-lg shadow-md overflow-hidden">
            <div className="p-4">
                <h2 className="text-xl font-semibold">{project.title}</h2>
                <p className="text-gray-600">{project.description}</p>
                
                <Link href={project.link} passHref>
                    <span className="text-blue-500 hover:underline cursor-pointer">View Project</span>
                </Link>
            </div>
            
            <div className="p-4">
                <Image
                    src={project.images[currentImageIndex]}
                    alt={`${project.title} Image ${currentImageIndex + 1}`}
                    width={400}
                    height={300}
                    className="object-cover"
                />
            </div>
            <div className="mt-2 mb-2">
                    <h3 className="text-gray-700 font-medium">Tags:</h3>
                    <div className="flex flex-wrap">
                        {project.tags.map(tag => (
                            <span key={tag} className="bg-blue-200 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
        </div>
    );
}

export default Projects;
