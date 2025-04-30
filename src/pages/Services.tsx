import { FaqSection } from '@/components/FaqSection'
import { BadgePercent, Cpu, Factory, Lightbulb, Wind, Wrench } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Card_Detailed = [
    {
      card: "Technical Supply",
      answer: "Technical Supply involves the provision of premium-quality industrial components and equipment tailored for diverse applications. It ensures reliability and performance across industrial operations by sourcing top-grade products.",
      icon: Wrench,
      color: "bg-amber-500/10 text-amber-500",
    },
    {
      card: "Marketing Services",
      answer: "Marketing Services focus on strategic market analysis and positioning, helping industrial businesses understand their market, enhance brand visibility, and align their offerings with market demands for better competitiveness.",
      icon: BadgePercent,
      color: "bg-purple-500/10 text-purple-500",
    },
    {
      card: "Electrical & Instrumentation",
      answer: "Electrical & Instrumentation includes cutting-edge sensors, PLCs, and control systems sourced from leading global brands. These solutions are essential for process automation, monitoring, and efficient operation of industrial systems.",
      icon: Cpu,
      color: "bg-blue-500/10 text-blue-500",
    },
    {
      card: "Renewable Energy",
      answer: "The Renewable Energy service delivers comprehensive solar solutions and sustainable energy systems. These are designed for long-term efficiency and environmental sustainability, helping industries reduce carbon footprints and energy costs.",
      icon: Wind,
      color: "bg-green-500/10 text-green-500",
    },
    {
      card: "Fabrication & Erection",
      answer: "Fabrication & Erection covers expert services in constructing and installing structural solutions for industrial projects. It ensures precision, safety, and durability in infrastructure development.",
      icon: Factory,
      color: "bg-red-500/10 text-red-500",
    },
    {
      card: "Expert Consultation",
      answer: "Expert Consultation offers professional guidance aimed at optimizing industrial processes and boosting operational efficiency. Consultants help identify inefficiencies and recommend improvements tailored to specific industry needs.",
      icon: Lightbulb,
      color: "bg-teal-500/10 text-teal-500",
    },
  ];
  

export default function Services() {
    const navigate = useNavigate();
    return (
        <div className='w-full'>
            <FaqSection
                title="Services Information"
                description="Everything you need to know about our platform"
                items={Card_Detailed}
                contactInfo={{
                    title: "Still have questions?",
                    description: "We're here to help you",
                    buttonText: "Contact Support",
                    onContact: () => navigate("/"),
                }}
            />
        </div>
    )
}
