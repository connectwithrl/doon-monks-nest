import hostelImage from "@/assets/hostel-interior.jpg";

export const About = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="font-display text-4xl md:text-5xl font-bold leading-tight">
              Your Home Away From Home
            </h2>
            <div className="space-y-4 text-lg text-muted-foreground">
              <p>
                Welcome to The Doon Monks, a student hostel designed for focused learning 
                and comfortable living. Located in the educational hub of Dehradun, we 
                understand what students need to succeed in their academic journey.
              </p>
              <p>
                Inspired by the discipline and peaceful wisdom of monks, we've created 
                an environment that balances serious study with community living. Our 
                hostel provides the perfect blend of quiet study spaces and social areas 
                where you can connect with fellow students.
              </p>
              <p>
                From high-speed WiFi for online classes to 24/7 power backup for those 
                late-night study sessions, we've thought of everything. Join our growing 
                community of students who've made The Doon Monks their second home.
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
