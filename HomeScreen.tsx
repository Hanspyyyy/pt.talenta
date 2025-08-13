import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { ArrowRight, Building, Users, Award, MapPin, Calendar, Ruler, Star, TrendingUp } from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";

export default function HomeScreen() {
  return (
    <div className="p-4 space-y-8 pb-24 max-w-7xl mx-auto">
      {/* Hero Section */}
      <div className="relative text-center space-y-6 py-12">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/5 to-transparent rounded-3xl"></div>
        <div className="relative z-10">
          <Badge variant="secondary" className="mb-4 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 border-0">
            ✨ Crafting Architectural Excellence Since 2010
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
              Transforming Spaces,
            </span>
            <br />
            <span className="text-foreground">Inspiring Lives</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            PT Talenta is Indonesia's premier architecture firm, creating innovative spaces that blend 
            modern design with sustainable practices across residential, commercial, and urban projects.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0 shadow-lg">
              Explore Projects
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg" className="border-2 hover:bg-accent/50">
              Schedule Consultation
            </Button>
          </div>
        </div>
      </div>

      {/* Services Overview - Modern Cards */}
      <div className="space-y-6">
        <div className="text-center">
          <h2 className="mb-2">Our Services</h2>
          <p className="text-muted-foreground">Comprehensive architectural solutions for every need</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              icon: Building,
              title: "Residential Design",
              description: "Custom homes and residential complexes designed for modern living",
              gradient: "from-blue-500 to-cyan-500",
              bgGradient: "from-blue-500/10 to-cyan-500/10"
            },
            {
              icon: Users,
              title: "Commercial Spaces",
              description: "Office buildings, retail spaces, and mixed-use developments",
              gradient: "from-purple-500 to-pink-500",
              bgGradient: "from-purple-500/10 to-pink-500/10"
            },
            {
              icon: Ruler,
              title: "Urban Planning",
              description: "Comprehensive city and community planning solutions",
              gradient: "from-green-500 to-teal-500",
              bgGradient: "from-green-500/10 to-teal-500/10"
            }
          ].map((service, index) => (
            <Card key={index} className="relative overflow-hidden border-0 bg-background/50 backdrop-blur-sm hover:shadow-xl transition-all duration-300 group">
              <div className={`absolute inset-0 bg-gradient-to-br ${service.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity`}></div>
              <CardContent className="relative z-10 p-8 text-center">
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${service.gradient} mb-6 shadow-lg`}>
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="mb-3">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Featured Projects - Modern Grid */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="mb-2">Featured Projects</h2>
            <p className="text-muted-foreground">Showcase of our latest architectural achievements</p>
          </div>
          <Button variant="outline" className="hidden sm:flex">
            View All
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "Menteng Garden Residence",
              location: "Jakarta Selatan",
              category: "Residential",
              image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=500&h=400&fit=crop",
              description: "Luxury residential complex with modern amenities and green spaces.",
              status: "Completed",
              gradient: "from-blue-600/20 to-transparent"
            },
            {
              title: "TechHub Corporate Center",
              location: "BSD City",
              category: "Commercial", 
              image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=500&h=400&fit=crop",
              description: "State-of-the-art office complex with sustainable design features.",
              status: "In Progress",
              gradient: "from-purple-600/20 to-transparent"
            },
            {
              title: "Ciumbuleuit Cultural District",
              location: "Bandung",
              category: "Urban Planning",
              image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=500&h=400&fit=crop",
              description: "Mixed-use development integrating culture, commerce, and community.",
              status: "Planning",
              gradient: "from-green-600/20 to-transparent"
            }
          ].map((project, index) => (
            <Card key={index} className="group overflow-hidden border-0 bg-background/80 backdrop-blur-sm hover:shadow-2xl transition-all duration-500">
              <div className="relative h-64 overflow-hidden">
                <ImageWithFallback 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${project.gradient}`}></div>
                <div className="absolute top-4 right-4">
                  <Badge variant="secondary" className="bg-white/90 text-black backdrop-blur-sm">
                    {project.status}
                  </Badge>
                </div>
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="flex items-center space-x-2 mb-2">
                    <MapPin size={16} />
                    <span className="text-sm">{project.location}</span>
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="mb-2 group-hover:text-blue-600 transition-colors">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{project.description}</p>
                <div className="flex items-center justify-between">
                  <Badge variant="outline" className="border-blue-200 text-blue-600">
                    {project.category}
                  </Badge>
                  <Button variant="ghost" size="sm" className="opacity-0 group-hover:opacity-100 transition-opacity">
                    View Details →
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Company Stats - Modern Design */}
      <Card className="relative overflow-hidden border-0 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/30 dark:to-purple-950/30">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5"></div>
        <CardContent className="relative z-10 p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "150+", label: "Projects Completed", icon: Building },
              { number: "15", label: "Years Experience", icon: Award },
              { number: "12", label: "Awards Won", icon: Star },
              { number: "8", label: "Cities Served", icon: MapPin }
            ].map((stat, index) => (
              <div key={index} className="space-y-3">
                <div className="inline-flex p-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl shadow-lg">
                  <stat.icon className="h-6 w-6 text-white" />
                </div>
                <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  {stat.number}
                </div>
                <p className="text-sm text-muted-foreground font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Latest News - Modern Timeline */}
      <Card className="border-0 bg-background/80 backdrop-blur-sm">
        <CardHeader className="pb-6">
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="flex items-center space-x-2">
                <TrendingUp className="h-5 w-5 text-blue-600" />
                <span>Latest Updates</span>
              </CardTitle>
              <CardDescription>Stay updated with our recent achievements and projects</CardDescription>
            </div>
            <Button variant="outline" size="sm" className="hidden sm:flex">
              View All News
            </Button>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          {[
            {
              title: "PT Talenta Wins Green Building Award 2024",
              description: "Our sustainable office design in Jakarta receives recognition for environmental excellence.",
              time: "2 days ago",
              color: "bg-green-500"
            },
            {
              title: "New Partnership with Leading Developer",
              description: "Collaborating on a major residential project in Surabaya.",
              time: "1 week ago", 
              color: "bg-blue-500"
            },
            {
              title: "Team Expansion: New Senior Architects Join",
              description: "Welcoming experienced professionals to strengthen our design capabilities.",
              time: "2 weeks ago",
              color: "bg-purple-500"
            }
          ].map((news, index) => (
            <div key={index} className="flex items-start space-x-4 p-4 rounded-2xl hover:bg-accent/50 transition-colors">
              <div className={`w-3 h-3 ${news.color} rounded-full mt-3 shadow-lg`}></div>
              <div className="flex-1">
                <h4 className="font-medium mb-2 hover:text-blue-600 transition-colors cursor-pointer">
                  {news.title}
                </h4>
                <p className="text-sm text-muted-foreground mb-3 leading-relaxed">{news.description}</p>
                <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                  <Calendar size={12} />
                  <span>{news.time}</span>
                </div>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* CTA Section */}
      <Card className="relative overflow-hidden border-0 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="absolute inset-0 bg-black/10"></div>
        <CardContent className="relative z-10 text-center p-12">
          <h2 className="text-white mb-4">Ready to Build Your Dream?</h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto leading-relaxed">
            Transform your vision into reality with our award-winning architectural expertise. 
            Let's create something extraordinary together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
              Get Free Consultation
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              View Portfolio
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
