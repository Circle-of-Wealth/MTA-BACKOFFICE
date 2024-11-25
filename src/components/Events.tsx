import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CalendarDays, AlertCircle } from "lucide-react";

interface Event {
  date: string;
  description: string;
}

const events: Event[] = [
  { date: "Apr 15", description: "Tax Filing Deadline" },
  { date: "May 1", description: "Quarterly Reports Due" },
  { date: "Jun 30", description: "Mid-Year Review" },
];

const EventsCal: React.FC = () => {
  return (
    <Card className="bg-gradient-to-br from-red-600 to-red-700">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-semibold text-white flex items-center gap-2">
          <CalendarDays className="w-5 h-5" />
          Upcoming Deadlines
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-2">
        <ul className="space-y-3">
          {events.map((event, index) => (
            <li key={index} className="flex items-start space-x-2">
              <AlertCircle className="w-5 h-5 text-white mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-semibold text-white">{event.date}</p>
                <p className="text-sm text-white/80">{event.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default EventsCal;
