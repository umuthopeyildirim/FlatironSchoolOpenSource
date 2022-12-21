import { Hero } from "react-daisyui"

function About(){
    return (
        <Hero>
            <Hero.Content className="flex flex-col md:flex-row">
                <div>
                    <h1 className="text-5xl font-bold">Our Mission: Empowering tomorrow's workforce through education...<br></br> For FREE</h1>
                    <p>
                        As a leader in the tech industry, Flatiron School believes that education is the best investment you can make in your future. We're committed to helping  change lives and the world for the better.
                    </p>
                    <p>
                        Our courses provide an immersive, outcomes-driven curriculum for students looking to launch a career in Software Engineering, Cybersecurity, Data Science, or Product Design. Courses are offered both online and in-person on campuses across the country.
                    </p>
                    <p>
                        Flatiron School is frequently ranked as a top coding bootcamp by industry publications. In addition to student programs, we also offer targeted education solutions for organizations.
                    </p>
                </div>
                <img
                    alt="Why do I need a password manager?"
                    src="/img/about.jpg"
                    className="rounded-lg max-w-md"
                />
            </Hero.Content>
        </Hero>
    );
}

export default About;