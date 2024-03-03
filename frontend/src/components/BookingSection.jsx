import React, { useState } from 'react';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Calendar } from '@/components/ui/calendar';

function BookingSection({ children }) {
  const [date, setDate] = useState(new Date());
  return (
    <div>
      <Sheet>
        <SheetTrigger asChild>
          <div>{children}</div>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Book a Service</SheetTitle>
            <SheetDescription>
              Select Date and Time slot to book a service
              <div>
                <h2>Select Date</h2>
                <Calendar
                  mode='single'
                  selected={date}
                  onSelect={setDate}
                  className='mt-5 rounded-md border'
                />
              </div>
              <div></div>
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
}

export default BookingSection;
