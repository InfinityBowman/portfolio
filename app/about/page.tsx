// major coursework
// eagle scout
// internship - bokeh image
// math skills
// other skills
// skiing and hiking hobbies
import AboutMe from "@/components/ui/about/about-me";
import Projects from "@/components/ui/about/projects";

export default function Page() {
  return (
    <div className="flex flex-col items-center mx-4 mb-4 gap-2">
      <AboutMe />
      <Projects />
    </div>
  );
}
