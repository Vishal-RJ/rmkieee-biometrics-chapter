import React from 'react';
import { GlassCard } from './ui/glass-card';
import { Calendar, Clock, MapPin } from 'lucide-react';

export const Events = () => {
  const events = [
    {
      title: 'Inauguration of Biometric Council and Workshop',
      date: 'September 1st Week',
      duration: '2 Days',
      location: 'College Campus',
      description: 'Join us for the official inauguration of the Biometric Council followed by an intensive 2-day workshop on biometric technologies and applications.',
      type: 'Inauguration & Workshop'
    }
  ];

  return (
    <section id="events" className="py-20 bg-gradient-accent">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto animate-slide-up">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-primary mb-4 drop-shadow-[0_0_10px_rgba(var(--primary),0.3)]">
              Upcoming <span className="italic">Events</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              Stay updated with our latest events and activities in the field of biometrics
            </p>
          </div>
          
          <div className="grid md:grid-cols-1 lg:grid-cols-1 gap-6 max-w-4xl mx-auto">
            {events.map((event, index) => (
              <GlassCard 
                key={index} 
                className="p-8 hover:scale-105 transition-transform duration-300"
              >
                <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="px-3 py-1 bg-primary/20 text-primary text-sm rounded-full font-medium">
                        {event.type}
                      </span>
                    </div>
                    <h3 className="text-2xl font-playfair font-bold text-primary mb-4">
                      {event.title}
                    </h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {event.description}
                    </p>
                  </div>
                  
                  <div className="lg:w-64">
                    <div className="space-y-4">
                      <div className="flex items-center gap-3 text-muted-foreground">
                        <Calendar className="w-5 h-5 text-primary" />
                        <span className="font-medium">{event.date}</span>
                      </div>
                      <div className="flex items-center gap-3 text-muted-foreground">
                        <Clock className="w-5 h-5 text-primary" />
                        <span className="font-medium">{event.duration}</span>
                      </div>
                      <div className="flex items-center gap-3 text-muted-foreground">
                        <MapPin className="w-5 h-5 text-primary" />
                        <span className="font-medium">{event.location}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};