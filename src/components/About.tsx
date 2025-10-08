import hostelImage from "@/assets/hostel-interior.jpg";

export const About = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="font-display text-4xl md:text-5xl font-bold leading-tight">
              A Peaceful Haven in the Mountains
            </h2>
            <div className="space-y-4 text-lg text-muted-foreground">
              <p>
                Welcome to The Doon Monks, where tranquility meets modern comfort. 
                Nestled in the beautiful city of Dehradun, at the foothills of the 
                Himalayas, we offer more than just accommodation – we provide an experience.
              </p>
              <p>
                Inspired by the peaceful wisdom of mountain monks, our hostel combines 
                serene ambiance with all the amenities modern travelers need. Whether 
                you're here for adventure, work, or soul-searching, you'll find your 
                home away from home.
              </p>
              <p>
                Join our community of travelers, digital nomads, and adventure seekers 
                who've discovered that the best journeys begin with a peaceful mind and 
                a comfortable place to rest.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-elegant">
              <img
                src={hostelImage}
                alt="The Doon Monks Hostel Interior"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-72 h-72 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl -z-10 blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
};
