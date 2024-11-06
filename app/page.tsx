import BlurFade from "@/components/ui/blur-fade";
import BlurIn from "@/components/ui/blur-in";
import GradualSpacing from "@/components/ui/gradual-spacing";
import IconCloud from "@/components/ui/icon-cloud";
import RetroGrid from "@/components/ui/retro-grid";
import ShimmerButton from "@/components/ui/shimmer-button";
import ShineBorder from "@/components/ui/shine-border";
import TextReveal from "@/components/ui/text-reveal";
import WordPullUp from "@/components/ui/word-pull-up";
const slugs = [
  "typescript",
  "javascript",
  "dart",
  "java",
  "react",
  "flutter",
  "android",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "amazonaws",
  "postgresql",
  "firebase",
  "nginx",
  "vercel",
  "testinglibrary",
  "jest",
  "cypress",
  "docker",
  "git",
  "jira",
  "github",
  "gitlab",
  "visualstudiocode",
  "androidstudio",
  "sonarqube",
  "figma",
];
const HomePage = () => {

  return (

    <main className="flex-grow bg-white">
      {/* Hero Section */}
      <section id="hero" className="text-center bg-gray-100 py-24">
        <BlurFade inView>
          <img
            src='/images/profile.JPG'
            alt="Profile Image"
            className="mx-auto w-32 h-32 rounded-full shadow-md"
          />
        </BlurFade>
        <BlurIn
          word="Hi, I'm Smit Patel"
          className="text-4xl font-bold text-black dark:text-white"
        />
        <p className="mt-4 text-lg text-gray-600 animate-fadeIn">
          A Passionate Developer building scalable and efficient solutions.
        </p>


        <a href="/smit_patel_resume.pdf" download>
          <ShimmerButton className="shadow-2xl">
            <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
              Get My Resume
            </span>
          </ShimmerButton>
        </a>
      </section>

      <div id="about" className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
        <span>
          <h2 className="pointer-events-none z-10 whitespace-pre-wrap bg-gradient-to-b from-[#ffd319] via-[#ff2975] to-[#8c1eff] bg-clip-text text-center text-4xl font-bold leading-none tracking-tighter text-transparent">About Me</h2>
          <p className="mt-4 text-lg text-gray-600 animate-fadeIn text-center">
            I am a software engineer and developer from India, currently pursuing my Masters in Applied Computing from University of windsor. I have a keen interest in developing apps, websites, and software solutions, with a focus on Flutter and Android development. I'm passionate about creating intuitive and efficient solutions. Beyond coding, I enjoy photography, discovering new music, and traveling the world. My skills include Flutter Development, Android Development, Web Development, UI/UX Design, and Software Solutions.
          </p>
        </span>
        <RetroGrid />
      </div>

      {/* Projects Section */}
      <section id="projects" className="py-12 bg-white">
        <div className="container mx-auto px-6"><GradualSpacing
          className="font-display text-center text-4xl font-bold -tracking-widest  text-black dark:text-white md:text-4xl md:leading-[5rem] py-4"
          text="My Projects" />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              {
                id: 1,
                title: "Car Rental Price Analysis",
                period: "July 2024 - August 2024",
                description:

                  "This project utilizes advanced data structures and algorithms, including Boyer-Moore, Edit Distance, and self-balancing trees, for tasks like web crawling, spell checking, and product sorting, with added features for URL extraction and car rental price analysis.",
                tags: ["Java", "Data Structures", "Algorithms", "CSV", "Graphing"],
                githubLink: "https://github.com/Smit-1103/CarRentalPriceAnalysis/blob/main/README.md",
                videoSrc: "https://github.com/user-attachments/assets/4ac62e0f-30ec-449a-9be5-2636828488e7", // Update with your video path
                altText: "Car Rental Price Analysis project video preview",
              },
              {
                id: 2,
                title: "Chat App",
                period: "March 2024 - June 2024",
                description:
                  "A group chat application built using Flutter and integrated with Firebase services for authentication, cloud storage, Firebase Functions, and real-time database. Chat with your friends with this chat app which provides an easy and clean interface with a message reaction feature.",
                tags: ["Flutter", "Firebase", "WebSockets", "Firebase storage", "Firebase Authentication", "UI-UX", "Firebase cloud messaging"],
                githubLink: "https://github.com/Smit-1103/chat_app/blob/main/README.md",
                videoSrc: "https://github.com/Smit-1103/chat_app/assets/112495701/dbfa4f82-7bd4-4d5d-a7f9-80cf1cd3f2ae",
                altText: "Chat App project video preview",
              },
              {
                id: 3,
                title: "Meals Express",
                period: "April 2024 - June 2024",
                description:
                  "Meals Express is a versatile recipe app that enables users to discover, cook, and share a wide array of meals. It features an extensive recipe library with advanced filtering options, detailed cooking instructions, and ingredient substitutions, all enhanced by interactive animations for an engaging user experience.",
                tags: ["Flutter", "Firebase", "Responsive Design", "Animations"],
                githubLink: "https://github.com/Smit-1103/meals_express/blob/main/README.md",
                videoSrc: "https://github.com/Smit-1103/meals_express/assets/112495701/02b7a688-bf66-47da-8b41-30d4f054b8d6", // Update with your video path
                altText: "Meals Express project video preview",
              },
              {
                id: 4,
                title: "Musi Sync",
                period: "August 2024 - October 2024",
                description:
                  "Welcome to musiSync! This Flutter application is designed to be a stylish and feature-rich music player with integrated lyrics functionality. Users can search for songs, play them online, view lyrics, and add their favorite songs to a dedicated favorites section.",
                tags: ["Flutter app", "Firebase", "Socket.io", "Express", "UI design"],
                githubLink: "https://github.com/Smit-1103/musi_sync/blob/main/README.md",
                videoSrc: "https://github.com/Smit-1103/musi_sync/assets/112495701/822ea098-a600-44f9-9679-62daab739e1b",
                altText: "Musi Sync project video preview",
              },
            ].map((project) => (
              <ShineBorder
                className="relative flex w-md flex-col items-center overflow-hidden rounded-xl bg-background md:shadow-lg p-3 max-w-md mx-auto"
                color={["#FFFFFF", "#007BFF", "#FFD700"]}
              >
                <div key={project.id} className="space-y-3">
                  <video
                    src={project.videoSrc}
                    className="w-full h-56 object-cover mb-2"
                    controls
                    loop
                    autoPlay
                    muted
                  />
                  <h3 className="text-lg font-semibold mb-1">{project.title}</h3>
                  <p className="text-xs text-gray-500 mb-1">{project.period}</p>
                  <p className="text-gray-700 text-xs mb-2">{project.description}</p>
                  <div className="flex flex-wrap gap-1 mb-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs bg-gray-200 text-gray-800 py-0.5 px-2 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex justify-between">
                    {project.githubLink && (
                      <a
                        href={project.githubLink}
                        className="inline-flex items-center bg-gray-800 text-white py-1 px-2 rounded-full hover:bg-gray-700 z-10"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 mr-1"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fillRule="evenodd"
                            d="M12 0C5.372 0 0 5.372 0 12c0 5.303 3.438 9.8 8.205 11.387.6.11.793-.26.793-.577v-2.047c-3.338.726-4.042-1.415-4.042-1.415-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.082-.73.082-.73 1.204.084 1.838 1.236 1.838 1.236 1.07 1.835 2.807 1.305 3.493.997.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.332-5.466-5.93 0-1.31.467-2.38 1.236-3.22-.124-.303-.536-1.526.118-3.176 0 0 1.008-.322 3.302 1.23a11.5 11.5 0 013.004-.404c1.02.004 2.047.137 3.004.404 2.292-1.552 3.3-1.23 3.3-1.23.656 1.65.244 2.873.12 3.176.77.84 1.236 1.91 1.236 3.22 0 4.61-2.803 5.623-5.475 5.92.43.37.812 1.1.812 2.22v3.293c0 .32.19.693.8.577C20.565 21.8 24 17.303 24 12c0-6.628-5.372-12-12-12z"
                            clipRule="evenodd"
                          />
                        </svg>
                        Source
                      </a>
                    )}
                  </div>
                </div>
              </ShineBorder>
            ))}
          </div>
          <div className="flex justify-center mt-8">
  <a
    href="https://github.com/Smit-1103?tab=repositories"
    target="_blank"
    rel="noopener noreferrer"
  >
    <ShimmerButton className="shadow-lg">
      <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
        See My All Projects
      </span>
    </ShimmerButton>
  </a>
</div>
        </div>
      </section>



      {/* Skills Section */}
      <section id="skills" className="py-16 bg-gray-50">
        <div className="container mx-auto">
          <WordPullUp
            className="text-4xl font-bold text-black dark:text-white md:text-4xl"
            words="Skills"
          />
          {/* Flex container for side-by-side layout */}
          <div className="flex flex-col md:flex-row items-center justify-between">

            {/* Icon Cloud Column */}
            <div className="md:w-1/2 flex justify-center mb-8 md:mb-0">
              <div className="relative max-w-lg flex items-center justify-center overflow-hidden rounded-lg bg-background p-8">
                <IconCloud iconSlugs={slugs} />
              </div>
            </div>

            {/* Skills List and Description Column */}
            <div className="md:w-1/2 text-center md:text-left">
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                My skill set spans across multiple technologies and platforms, enabling me to build dynamic, scalable, and efficient projects. From concept to deployment, I create solutions that are tailored to meet diverse requirements, ensuring seamless user experiences and optimized performance. My projects showcase a strong foundation in both front-end and back-end development, reflecting my passion for crafting innovative software solutions.
              </p>
              <section id="skills">
                <div className="flex min-h-0 flex-col gap-y-3">
                  <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                    {['C', 'Java', 'Python', 'JavaScript', 'Dart', 'MySQL', 'PostgreSQL', 'Apache kafka', 'AWS lambda', 'HTML', 'CSS', 'SCSS', 'SASS', 'RESTful APIs', 'React', 'Flutter', 'Android', 'Amazon S3', 'Microsoft Office', 'Visual Studio', 'Git', 'Firebase', 'Sublime Text', 'IntelliJ']
                      .map((skill, id) => (
                        <div key={skill} className="bg-black text-white px-2 py-1 rounded-full">
                          {skill}
                        </div>
                      ))}
                  </div>
                </div>
              </section>

            </div>
          </div>
        </div>
      </section>


      {/* Contact Section */}
      <section id="contact" className="bg-white py-8">
        <TextReveal text="Interested in collaborating or have any questions? Feel free to reach out!" className="mb-6" />

        <div className="flex items-center justify-center mt-['-40']">
          <a href="mailto:smitpatel7032@gmail.com">
            <ShimmerButton className="shadow-lg">
              <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                Contact Me
              </span>
            </ShimmerButton>
          </a>
        </div>
      </section>

    </main>

  );
};

export default HomePage;
