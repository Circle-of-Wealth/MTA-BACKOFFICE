import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";

interface AnnouncementItem {
  title: string;
  date: string;
  content: string[];
}

const announcements: AnnouncementItem[] = [
  {
    title: "Holiday Hours",
    date: "December 19, 2022 12:08pm EST",
    content: [
      "Merry Christmas & Happy New Year!",
      "Dec 23rd: 9am - 1pm",
      "Dec 24-26th: CLOSED (Christmas Day Observance)",
      "Dec 31st: 9am - 1pm",
      "Jan 1st: CLOSED (New Years Day)",
      "Jan 2nd: 9am - 7pm",
      "All times are EST",
    ],
  },
  {
    title: "New Software Available",
    date: "December 1, 2022 11:01am EST",
    content: [
      "New software for Tax Year 2022 is now available for download!",
      "Please see the Tax Software section to download or click",
      "HERE to schedule an appointment",
    ],
  },
  {
    title: "1040 E-File Shutdown",
    date: "November 10, 2022 10:03am EST",
    content: [
      "Shutdown begins on Saturday, November 26, 2022, at 11:59 p.m. Eastern time, in order to prepare the system for the upcoming Tax Year 2022 Filing Season. To ensure a timely filing, returns must be submitted to Central Site no later than 8:00 pm ET November 26, 2022 - four hours prior to the IRS",
      "This will end the electronic filing window for 2019 returns. Tax year 2022 will begin in January, tax year 2021 and tax year 2020 will resume in January as well.",
    ],
  },
  {
    title: "IRS System Maintenance",
    date: "October 20, 2022 11:43am EST",
    content: [
      "The MeF Production System will be unavailable on Saturday, October 22, 2022, from 7:00 a.m. until 4:00 p.m. Eastern time. Returns will not be processed during this time.",
    ],
  },
];

const Announcement: React.FC = () => {
  return (
    <Card className="bg-gradient-to-br from-[#002868] to-[#001234] text-white h-[600px]">
      <CardHeader className="p-4 flex flex-row items-center space-y-0">
        <h2 className="text-xl font-bold tracking-wide">ANNOUNCEMENTS</h2>
        <img src="/logo.png" alt="MaxTax Logo" className="h-8 ml-auto" />
      </CardHeader>
      <CardContent className="p-0">
        <ScrollArea className="h-[520px] px-4">
          {announcements.map((announcement, index) => (
            <div key={index} className="mb-6 last:mb-4">
              <h3 className="text-red-500 font-bold">{announcement.title}</h3>
              <p className="text-red-500 text-sm mb-1">
                Maxtax - {announcement.date}
              </p>
              {announcement.content.map((line, lineIndex) => (
                <p key={lineIndex} className="text-sm leading-relaxed">
                  {line}
                </p>
              ))}
            </div>
          ))}
        </ScrollArea>
      </CardContent>
    </Card>
  );
};

export default Announcement;
