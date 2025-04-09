import ProjectsSection from "@/componentss/ProjectsSection";
import Navbar from "@/componentss/Navbar";
import Footer from "@/componentss/Footer";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col bg-[#121212]">

            <Navbar />
            <div className="container mt-24 mx-auto px-12 pt-7">

                <ProjectsSection />

            </div>
            <Footer />
        </main>

    );
}