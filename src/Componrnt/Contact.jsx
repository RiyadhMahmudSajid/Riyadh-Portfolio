import { useForm } from "react-hook-form";
import { Mail, Github, Linkedin, Send, Facebook, Phone } from "lucide-react";
import { personalInfo, socialLinks } from "../mock";
import toast from "react-hot-toast";

const Contact = () => {
    const {register,handleSubmit,reset,formState: { errors, isSubmitting },} = useForm();

    const onSubmit = async (data) => {
        console.log(data);
        try {

            const response = await fetch("https://protfolio-backend-gamma.vercel.app/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data)

            })

             await response.json()
            if (response.ok) {
                toast.success("Thank you! Your message has reached me.")
                reset(); 
            } else {
                toast.error("Sorry, the message could not be sent.")
              
            }

            reset();
        } catch (error) {
            toast.error("Sorry, the message could not be sent.")
            console.log(error);
        }
    };
    const socialIcons = {
        Facebook: Facebook,
        Linkedin: Linkedin,
        Twitter: Mail
    };


    return (
        <section
            id="contact"
            className="min-h-screen px-4 py-20  text-white"
        >
            <div className="max-w-6xl mx-auto">

                <div className="text-center mb-14">
                    <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
                        Get In <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">Touch</span>
                    </h2>
                    <p className="text-gray-400 mt-3">
                        Have a project in mind? Let&apos;s work together!
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-10">
                    <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-emerald-500/20">
                        <form
                            onSubmit={handleSubmit(onSubmit)}
                            className="space-y-6"
                        >

                            <div>
                                <label className="text-sm text-gray-300">Name</label>
                                <input
                                    {...register("name", { required: "Name is required" })}
                                    placeholder="Your name"
                                    className="w-full mt-2 px-4 py-3 rounded-lg bg-white/5 border-emerald-500/30 text-white placeholder:text-gray-500 focus:border-emerald-500 outline-none"
                                />
                                {errors.name && (
                                    <p className="text-red-400 text-sm mt-1">
                                        {errors.name.message}
                                    </p>
                                )}
                            </div>


                            <div>
                                <label className="text-sm text-gray-300">Email</label>
                                <input
                                    {...register("email", {
                                        required: "Email is required",
                                        pattern: {
                                            value: /^\S+@\S+$/i,
                                            message: "Invalid email address",
                                        },
                                    })}
                                    placeholder="your.email@example.com"
                                    className="w-full mt-2 px-4 py-3 rounded-lg bg-white/5 border-emerald-500/30 text-white placeholder:text-gray-500 focus:border-emerald-500 outline-none"
                                />
                                {errors.email && (
                                    <p className="text-red-400 text-sm mt-1">
                                        {errors.email.message}
                                    </p>
                                )}
                            </div>


                            <div>
                                <label className="text-sm text-gray-300">Message</label>
                                <textarea
                                    {...register("message", {
                                        required: "Message is required",
                                    })}
                                    rows={4}
                                    placeholder="Tell me about your project..."
                                    className="w-full mt-2 px-4 py-3 rounded-lg bg-white/5 border-emerald-500/30 text-white placeholder:text-gray-500 focus:border-emerald-500 outline-none resize-none"
                                />
                                {errors.message && (
                                    <p className="text-red-400 text-sm mt-1">
                                        {errors.message.message}
                                    </p>
                                )}
                            </div>


                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-white font-semibold hover:opacity-90 transition shadow-lg shadow-emerald-500/50"
                            >
                                <Send className="h-4 w-4 mr-2" />
                                Send Message
                            </button>
                        </form>
                    </div>



                    <div className="space-y-8">

                        <div>
                            <h3 className="text-2xl font-bold text-white mb-6">
                                Contact Information
                            </h3>

                            <div className="space-y-4">
                                <a
                                    href={`mailto:${personalInfo.email}`}
                                    className="flex items-center space-x-4 p-4 rounded-lg bg-white/5 backdrop-blur-sm border border-emerald-500/20 hover:border-emerald-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/20 group"
                                >
                                    <Mail className="h-6 w-6 text-emerald-400 group-hover:scale-110 transition-transform" />
                                    <div>
                                        <p className="text-sm text-gray-400">Email</p>
                                        <p className="text-white font-medium group-hover:text-emerald-400 transition-colors">
                                            {personalInfo.email}
                                        </p>
                                    </div>
                                </a>
                            </div>
                            <div className="mt-4">
                                <a
                                    href={`mailto:${personalInfo.phone}`}
                                    className="flex items-center space-x-4 p-4 rounded-lg bg-white/5 backdrop-blur-sm border border-emerald-500/20 hover:border-emerald-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/20 group"
                                >
                                    <Phone className="h-6 w-6 text-emerald-400 group-hover:scale-110 transition-transform" />
                                    <div>
                                        <p className="text-sm text-gray-400">Phone</p>
                                        <p className="text-white font-medium group-hover:text-emerald-400 transition-colors">
                                            {personalInfo.phone}
                                        </p>
                                    </div>
                                </a>
                            </div>
                        </div>


                        <div>
                            <h3 className="text-2xl font-bold text-white mb-6">
                                Connect With Me
                            </h3>

                            <div className="flex space-x-4">
                                {socialLinks.map((social, idx) => {
                                    const IconComponent = socialIcons[social.icon];
                                    return (
                                        <a
                                            key={idx}
                                            href={social.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-4 rounded-lg bg-white/5 backdrop-blur-sm border border-emerald-500/20 hover:border-emerald-500/50 transition-all duration-300 group hover:shadow-lg hover:shadow-emerald-500/20"
                                        >
                                            {IconComponent && (
                                                <IconComponent className="h-6 w-6 text-gray-400 group-hover:text-emerald-400 transition-colors group-hover:scale-110" />
                                            )}
                                        </a>
                                    );
                                })}
                            </div>
                        </div>

                        <div className="bg-gradient-to-br from-emerald-400/10 to-cyan-400/10 border border-emerald-400/20 rounded-2xl p-6">
                            <h4 className="text-lg font-semibold">
                                Ready to collaborate?
                            </h4>
                            <p className="text-gray-400 mt-2">
                                I'm always interested in hearing about new projects and opportunities.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
