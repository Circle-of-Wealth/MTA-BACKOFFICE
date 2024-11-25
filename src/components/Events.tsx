"use client";

import * as React from "react";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Events: React.FC = () => {
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  return (
    <Card className="w-full bg-white">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-semibold text-[#002868]">
          Calendar
        </CardTitle>
      </CardHeader>
      <CardContent className="p-4">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="w-auto bg-transparent text-[#002868]"
          classNames={{
            months:
              "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
            month: "space-y-4",
            caption:
              "flex justify-center pt-1 relative items-center text-[#002868]",
            caption_label: "text-sm font-medium",
            nav: "space-x-1 flex items-center",
            nav_button:
              "h-7 w-7 bg-transparent p-0 text-[#002868] opacity-50 hover:opacity-100",
            nav_button_previous: "absolute left-1",
            nav_button_next: "absolute right-1",
            table: "w-full border-collapse space-y-1",
            head_row: "flex",
            head_cell:
              "text-[#002868] rounded-md w-8 font-normal text-[0.8rem]",
            row: "flex w-full mt-2",
            cell: "text-center text-sm relative h-8 w-8 p-0 focus-within:relative focus-within:z-20",
            day: "h-8 w-8 p-0 font-normal text-[#002868] hover:bg-[#002868]/10 rounded-full",
            day_selected:
              "bg-[#002868] text-white hover:bg-[#002868] hover:text-white focus:bg-[#002868] focus:text-white",
            day_today: "bg-[#002868]/10 text-[#002868]",
            day_outside: "text-[#002868]/50 opacity-50 hover:bg-[#002868]/5",
            day_disabled: "text-[#002868]/50 opacity-50",
            day_hidden: "invisible",
          }}
        />
      </CardContent>
    </Card>
  );
};

export default Events;
