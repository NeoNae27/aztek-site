import heroImage from "@assets/main-pic.jpg";
import { Hero } from "@templates";

const NotFoundPage = () => {
  return (
    <>
      <Hero
        backgroundImage={heroImage}
        title="404 - Page Not Found"
        subtitle="The page you are looking for does not exist."
        buttonText="Go to Home"
        buttonHref="/"
      />
    </>
  );
};

export default NotFoundPage;