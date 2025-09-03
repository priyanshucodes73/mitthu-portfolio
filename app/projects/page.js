"use client";
import Section from "@/components/Section";
import ProjectCard from "@/components/ProjectCard";

export default function ProjectsPage() {
  return (
    <Section title="Projects" subtitle="Selected work and experiments.">
      <div className="grid md:grid-cols-2 gap-6">
        <ProjectCard
          title="mySamvaad"
          description="a digital discussion/communication system (almost like a forum or debate space) but with more structure and control."
          tags={["Next.js", "TailwindCSS", "Node.js", "MongoDB"]}
          href="https://example.com"
        />
        <ProjectCard
          title="Mantriva E-Commerce Website"
          description="A modern full-stack e-commerce platform under the Mantriva brand, featuring product catalog, shopping cart, secure checkout, and scalable backend."
          tags={["Next.js", "TailwindCSS", "Node.js", "MongoDB", "Stripe"]}
          href="https://github.com/yourusername/mantriva-ecommerce"
        />
        <ProjectCard
          title="Space/Tech Portal"
          description="News & insights with SEO‑friendly MDX content."
          tags={["MDX", "Next.js", "SEO"]}
          href="#"
        />
        <ProjectCard
          title="AnPrix Gaming Tournaments"
          description="An engaging gaming tournament platform under AnPrix, offering competitive events, leaderboards, and community-driven features for gamers."
          tags={[
            "Next.js",
            "TailwindCSS",
            "Gaming",
            "Tournaments",
            "Community",
          ]}
          href="#"
        />
      </div>
    </Section>
  );
}
